# lint

This repository contains Eslint configuration packages for different project types. Please note that these configurations are primarily designed for TypeScript projects.

## Node Project

To apply these rules to a Node.js project, follow these steps:

1. Install the Eslint configuration package using npm, yarn, or pnpm:
   - NPM:
     ```bash
     npm install -D @felipstein/eslint-config-node
     ```
   - Yarn:
     ```bash
     yarn add -D @felipstein/eslint-config-node
     ```
   - PNPM:
     ```bash
     pnpm install -D @felipstein/eslint-config-node
     ```

2. Add the Eslint configuration to your eslint config file:
   ```json
   {
     // ...
     "extends": ["@felipstein/eslint-config-node"],
     // ...
   }

## React Project

To apply the rules to a react project, follow the steps:

1. Install the Eslint configuration package using npm, yarn, or pnpm:
   - NPM:
     ```bash
     npm install -D @felipstein/eslint-config-react
     ```
   - Yarn:
     ```bash
     yarn add -D @felipstein/eslint-config-react
     ```
   - PNPM:
     ```bash
     pnpm install -D @felipstein/eslint-config-react
     ```

2. Add the Eslint configuration to your eslint config file:
   ```json
   {
     // ...
     "extends": ["@felipstein/eslint-config-react"],
     // ...
   }

And everything should be working!
