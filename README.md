## Heroku Deployment Link 
https://usce-website.herokuapp.com/

## Live Website Links
- http://uscematch.com/
- http://www.uscematch.com/

## Development Setup

### Prerequisites
1. Set up a MYSQL server on your machine - ask an admin for the database schema.
2. Create a `.env` file in the root of the repository and set the following values (again ask an admin for the details, or fill in with your own):
- ACCESS_TOKEN_SECRET
- REFRESH_TOKEN_SECRET
- SESSION_SEC
- STRIPE_KEY
- CLIENT_URL
- ENDPOINT_SECRET
- MYSQL_USER
- MYSQL_HOST
- MYSQL_PASS
- MYSQL_DATABASE


### How to run the website locally
1. To start the server, in the root folder of the repository, run `npm install`, then `npm start`
2. To start the front-end in live-update mode, in a new terminal run `cd client` and then `npm install`, followed by `npm start`. The application should open on port 3000
3. If you'd rather run the front-end on the same port (simulating production), run `npm run build` instead of `npm start` (however, this will not auto-update, which is convenient for development).