module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [],
  rules: {
    "eqeqeq": ["error", "always"],
    "no-unused-expressions": ["error", {}],
  },
}
