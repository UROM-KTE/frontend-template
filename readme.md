# del-heves.hu webpage frontend project

## Used technologies

- vite
- React
- typescript
- swc
- eslint (airbnb)
- prettier

## Setup

### Vite

`npm create vite@latest`

### ESLint, ESLint-AirBnB, Prettier config

`npx eslint --init`

Select the following items:
1. How would you like to use ESLint?
- To check syntax and find problems
2. What type of modules does your project use?
- Javascript modules (import/export)
3. Which framework does your project use?
- React
4. Does your project use TypeScript?
- Yes
5. Where does your code run?
- Browser
6. What format do you want your config file to be in?
- JSON
7. The config that you've selected requires the following dependencies:
- eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest typescript-eslint/parser@latest
8. Would you like to install them now?
- Yes
9. Which package manager do you want to use?
- npm

`npx install-peerdeps --dev eslint-config-airbnb`

In the .eslintrc.json file remove “eslint:recommended” from the extends array, and add “airbnb” and “airbnb/hooks”.

`npm install eslint-config-airbnb-typescript`

After it add “airbnb-typescript” to the extends array in the .eslintrc.json file.

Now the array should be something similar to this:
   
```
"extends": [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
],
```
In the tsconfig.json file, there is an include array. Add the “.eslintrc.cjs” file to this array.
