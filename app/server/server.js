const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require("dotenv").config();


const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const { ApolloServer } = require('apollo-server-express');  

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const app = express();

const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
})
);


const stripe = require('stripe')(process.env.STRIPE_KEY)

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });
  await server.start();
  server.applyMiddleware({ app });
  }
  
  
  startServer();

  // PROFESSIONAL SERVICES CHECKOUT PAGE

  const storeItems = new Map ([
    [1, { priceInCents: 299, name: 'Our Services' }],
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
  })



  // $0.99 MEMBERSHIP FEE CHECKOUT PAGE


  const storeCharge = new Map ([
    [1, { priceInCents: 299, name: 'One Time Membership Fee' }]
  ])

  app.post('/create-checkout-sess', async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.items.map(item => {
          const storeFee = storeCharge.get(item.id)
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: storeFee.name
              },
              unit_amount: storeFee.priceInCents
            },
            quantity: item.quantity
          }
        }),
        success_url: `${process.env.CLIENT_URL}/loginsign`,
        cancel_url: `${process.env.CLIENT_URL}/`,
      })
  
      res.json({ url: session.url })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  })


let refreshTokens = []
const users = []

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended:true }));

app.use(session({
  key: 'UserId',
  secret: process.env.SESSION_SEC,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
})
);



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


  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query("INSERT INTO userdata (email, password, name, phone, country, city, state, zip, address, visa) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [email, hash, name, phone, country, state, city, zip, address, visa],
    (err, result) => {
     console.log(err);
    }
   );
  })
  });


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
            console.log(user)
            // const id = result[0].id;
            const accessToken = generateAccessToken(user)
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
            refreshTokens.push(refreshToken)
            req.session.user = result;

            console.log(req.session.user);
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

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
}
  

    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}!`);
    });
