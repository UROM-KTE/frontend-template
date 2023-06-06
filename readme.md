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

```
npm create vite@latest
```

### ESLint, ESLint-AirBnB, Prettier config

```
npx eslint --init
```

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

```
npx install-peerdeps --dev eslint-config-airbnb
```

In the .eslintrc.json file remove “eslint:recommended” from the extends array, and add “airbnb” and “airbnb/hooks”.

```
npm install eslint-config-airbnb-typescript
```

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

### Prettier
```
npm install eslint-plugin-import eslint-import-resolver-typescript prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks --save-dev`
```
```
touch .prettierrc`
```

Add this line to the eslintrc.cjs into the env section...:
jest: true

and this one into the extends section...:
'prettier'

and the main part is the rule section. My rules are these ones:
```
"rules": {
   "react/react-in-jsx-scope": "off",
   "camelcase": "error",
   "spaced-comment": "error",
   "quotes": [
   "error",
   "single"
   ],
   "no-duplicate-imports": "error",
   "no-console": "warn"
},
```

You can find documentation about the ESLint [rules](https://eslint.org/docs/latest/rules/) here.

Also need to update the plugins array to use installed plugins:
```
"plugins": [
"react",
"react-hooks",
"@typescript-eslint",
"prettier"
],
```

And finally the settings object:
```
"settings": {
   "import/resolver": {
      "typescript": {}
   },
   "react": {
      "pragma": "React",
      "version": "detect"
   }
}
```

You should also add rules to the .prettierrc file. My settings are:
```
{
   "semi": true,
   "tabWidth": 4,
   "printWidth": 120,
   "singleQuote": true,
   "trailingComma": "all",
   "jsxSingleQuote": true,
   "bracketSpacing": true,
   "bracketSameLine": false,
   "arrowParens": "avoid"
}
```

If you want more I suggest you their [options](https://prettier.io/docs/en/options.html) page.

## Documentations

### Vite
[Getting Started | Vite](https://vitejs.dev/guide/)

### ESLint
[Documentation - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/)

### Prettier
[What is Prettier? · Prettier](https://prettier.io/docs/en/index.html)

### Jest
[Getting Started · Jest](https://jestjs.io/docs/getting-started)

### Testing Library
[Introduction | Testing Library](https://testing-library.com/docs/)

### Husky
[Husky - Git hooks](https://typicode.github.io/husky/#/)

### Storybook
[Install Storybook](https://storybook.js.org/docs/7.0/react/get-started/install/)

### Github Actions
[GitHub Actions Documentation](https://docs.github.com/en/actions)

## Sources

[Build an app using React Redux with TypeScript using the Redux-Toolkit package | by Jodiss Tribhu | ITNEXT](https://itnext.io/build-a-react-redux-with-typescript-using-redux-toolkit-package-d17337aa6e39) (2023-03-29)
[Create-React-App with TypeScript, ESLint, Prettier, and Github Actions | by Bryan Grill](https://brygrill.medium.com/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97) (2023-03-29)
