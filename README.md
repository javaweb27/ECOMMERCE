# ECOMMERCE

It is a online shop with a shopping cart.\
Products are obtained from a Node/Express API.\
Users can create an account, they will be assigned a random amount of fake money so that they can pay for the products added to the cart, and they will be automatically deleted in 6 minutes after the account is created.\
User data is saved in MongoDB/Mongoose, the password is encrypted, the email and the name are coded in base 64.

Single Page Aplication (SPA).

The source code of the Backend is in the `main` branch

---

Branch: master\
Role: Frontend

**Stack:**

- Build tool: Vite
- Linter: ESLint and Prettier
- UI Library: React with TypeScript
- Styles: Sass, CSS Modules
- App State: React Redux
- Routing: React Router
- Local API: json-server
- Fetching resources: Fetch API

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.\
Open [http://localhost:5173/ECOMMERCE/](http://localhost:5173/ECOMMERCE/) to view it in the browser.

The page will reload if you make edits.

### `pnpm local-db`

Runs the local api using the `db.json` file.
The module `json-server` must be installed globally, it reads and modifies the `db.json` file.

Api url: [http://localhost:3060](http://localhost:3060)

### `pnpm build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `pnpm preview`

Runs the app that was built to the `dist` folder in the preview mode.\
Open [http://localhost:4173/ECOMMERCE/](http://localhost:4173/ECOMMERCE/) to view it in the browser.

### `npm run deploy`

Deploys to GitHub Pages the app that was built to the `dist` folder.\
The module `gh-pages` must be installed globally.\
The `vite.config.ts` file from Vite has configured a base path to deploy to GitHub Pages.
