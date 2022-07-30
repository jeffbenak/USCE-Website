const express = require('express');
const path = require('path');   
const mysql = require('mysql');


const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "LoginSystem",
});

app.post('/register', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  db.query('INSERT INTO users (username, passord) VALUES (?,?)',
   [username, password],
   (err, result) =>{
    console.log(err);
   }
  );
});


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });