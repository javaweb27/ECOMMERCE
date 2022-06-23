# ECOMMERCE

It is a online shop with a shopping cart.\
Products are obtained from a Node/Express API.\
Users can create an account, they will be assigned a random amount of fake money so that they can pay for the products added to the cart, and they will be automatically deleted in 2 minutes after the account is created.\
User data is saved in MongoDB/Mongoose, the password is encrypted, the email and the name are coded in base 64.

Single Page Aplication (SPA).

The source code of the Frontend is in the `master` branch
***
Branch: main\
Role: Backend\
Deployed on: Heroku

**Stack:**
- App framework: Express
- Database: MongoDB with Mongoose

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3060](http://localhost:3060) to view it in the browser.

The app will reload if you make edits.

### `yarn build`

Builds the app for production to the `dist` folder.\
The build is minified.

Heroku will run this script automatically in production.

### `yarn start`

Runs the app that was built to the `dist` folder.\
Open [http://localhost:3060](http://localhost:3060) to view it in the browser.

Heroku will run this script automatically in production.