const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');
require("dotenv").config();

const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_KEY);

const app = express();

const PORT = process.env.PORT || 3001;
const endpointSecret = process.env.ENDPOINT_SECRET;


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Use raw type for webook route, and JSON for everything else
app.use('/webhook', express.raw({type: "*/*"}));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
})
);

// PROFESSIONAL SERVICES CHECKOUT PAGE
const storeItems = new Map ([
  [1, { priceInCents: 099, name: 'Our Services' }],
])

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      
      
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: storeItem.name
            },
            unit_amount: storeItem.priceInCents
          },
          quantity: item.quantity
        }
      }),
      success_url: `${process.env.CLIENT_URL}/services`,
      cancel_url: `${process.env.CLIENT_URL}/`,
    })

    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
});

// Set up Authentication
let refreshTokens = [];
app.use(cookieParser());
app.use(session({
  key: 'UserId',
  secret: process.env.SESSION_SEC,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  }
}));

// Set up MySQL Database Connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.MYSQL_PASS,
  database: "signup",
});

app.post('/register', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const phone = req.body.phone;
  const country = req.body.country;
  const state = req.body.state;
  const city = req.body.city;
  const zip = req.body.zip;
  const address = req.body.address;
  const visa = req.body.visa;
  const verify = req.body.verify;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query("INSERT INTO userdata (email, password, name, phone, country, city, state, zip, address, visa, verify) VALUES (?,?,?,?,?,?,?,?,?,?,0)",
      [email, hash, name, phone, country, state, city, zip, address, visa, verify],
      (err, result) => {      
        console.log(err);
      }
    );
  })
});

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  let event = request.body;

  if (endpointSecret) {
    const signature = request.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        endpointSecret
        
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }
  }
  switch (event.type) {
    case 'payment_intent.succeeded': 
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        db.query('UPDATE userdata SET verify = 1'),
        (err, result) => {
          console.log(err);
        }
      break;

    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      break;

    case 'checkout.session.async_payment_failed': 
      const session = event.data.object;
      emailCustomerAboutFailedPayment(session);
      break;

    default:
      console.log(`Unhandled event type ${event.type}.`);
  }

  response.send();
}); 

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
}

const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token']

  if (!token) {
    res.send('Need a token!')
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: 'You failed to authenticate' });
      } else {
        req.userId = decoded.id;
        next();
      }
    })
  }
}

app.get('/isUserAuth', verifyJWT, (req, res) => {
  res.send('you are authenticated')
})

app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password; 

  db.query("SELECT * FROM userdata WHERE email = ?;",
  email,
  (err, result) => {

    if(err) {
      res.send({err: err});
    } 
      if(result.length > 0) {  
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            
            const username = req.body.username
            const user = { name: username }
            // console.log(user)
            // const id = result[0].id;
            const accessToken = generateAccessToken(user)
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
            refreshTokens.push(refreshToken)
            req.session.user = result;

            // console.log(result[0].id);
            res.json({auth: true, accessToken: accessToken, refreshToken: refreshToken, result: result});
          } else {
            res.json({ auth: false, message: 'Wrong email/password combination' });
            
          }
        });
      } else {
        res.json({ auth: false, message: 'no user exists' });
      }
    }
  );
});

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys());

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}!`);
});