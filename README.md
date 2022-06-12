# ECOMMERCE

It is a online shop that sells products from an API consumed with Fetch API.
The user can view and save the products in the cart.
REDUX is used to handle the state of the cart and the products, sass and css modules for the styles and json-server for the API.\
Single Page Aplication (SPA).
***
Branch: master\
Role: Frontend\
Stack: Vite, TypeScript, React, React Router, Redux, Sass

The source code of the Backend is in the `main` branch

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `yarn local-db`

Runs the local api using the `db.json` file.
The module `json-server` must be installed globally, it reads and modifies the `db.json` file.

Api url: [http://localhost:3060](http://localhost:3060)

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn preview`

Runs the app that was built to the `dist` folder in the preview mode.\
Open [http://localhost:4173](http://localhost:4173) to view it in the browser.

### `yarn deploy`

Deploys to GitHub Pages the app that was built to the `dist` folder.\
The module `gh-pages` must be installed globally.\
The `vite.config.js` file from Vite has configured a base path to deploy to GitHub Pages.