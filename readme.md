# Template for web application projects in DHTE (dhte-frontend-template)

## Used technologies

- Vite
- React
- TypeScript
- SWC
- ESLint (AirBnB)
- Prettier
- Husky
- Storybook

## Using the project

After downloaded or used as template or checkout it, run ```npm install```.

### Scripts

#### Development and build

Start developer mode. The application starts in developer mode on [http://localhost:5173/](http://localhost:5173/): `npm run dev`
Preview of the application: ```npm run vite preview```
Build the application: ```npm run build```

#### Formatting and linting

Run the prettier code formatter: ```npm run format```
Run the linter (ESLint): ```npm run lint```
or with automatic fix: ```npm run lint:fix```

#### Test runner scripts

Run all the tests without watching: ```npm run test```
Run all the test in watching mode: ```npm run test:watch```
Run the vitest ui: ```npm run test:ui```
Run the tests and display the coverage report: ```npm run test coverage```

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

### Vitest
[Getting Started | Guide | Vitest](https://vitest.dev/guide/)

### Husky
[Husky - Git hooks](https://typicode.github.io/husky/#/)

### Storybook
[Install Storybook](https://storybook.js.org/docs/7.0/react/get-started/install/)

### Github Actions
[GitHub Actions Documentation](https://docs.github.com/en/actions)

## Sources

[Build an app using React Redux with TypeScript using the Redux-Toolkit package | by Jodiss Tribhu | ITNEXT](https://itnext.io/build-a-react-redux-with-typescript-using-redux-toolkit-package-d17337aa6e39) (2023-03-29)
[Create-React-App with TypeScript, ESLint, Prettier, and Github Actions | by Bryan Grill](https://brygrill.medium.com/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97) (2023-03-29)
[Ensuring React Testing Library best practices with ESLint ](https://blog.sapegin.me/til/react/ensuring-react-testing-library-best-practices-with-eslint/)

## How I build and set this template up

### Vite

```npm create vite@latest```

### ESLint, ESLint-AirBnB, Prettier config

```npx eslint --init```

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

```npx install-peerdeps --dev eslint-config-airbnb```

In the .eslintrc.json file remove “eslint:recommended” from the extends array, and add “airbnb” and “airbnb/hooks”.

```npm install eslint-config-airbnb-typescript```

After it add “airbnb-typescript” to the extends array in the .eslintrc.json file.

Now the array should be something similar to this:
   
```
"extends":
   [
      "airbnb",
      "airbnb/hooks",
      "airbnb-typescript",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
   ],
```
In the tsconfig.json file, there is an include array. Add the “.eslintrc.cjs” file to this array.

### Prettier

```npm install eslint-plugin-import eslint-import-resolver-typescript prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks --save-dev```
```touch .prettierrc```

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
   "tabWidth": 2,
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

You should create two files in the root folder to ignore unnecessary files and folders for prettier and eslint:

.prettierignore and .eslintignore

Add at least the following line to both of them:
```node_modules/```

### Testing

For React, it is recommended to install React Testing Library. You can do it with this command:
```npm install @testing-library/react @testing-library/jest-dom --save-dev```

For Vitest run the following command:
```npm install vitest @vitest/coverage-v8 @vitest/ui jsdom --save-dev```

In the vite.config.ts you should add a test object, similar to this one:
```
test: {
   exclude: [
   '**/{public,node_modules}/**',
   '**/.{idea,git,cache,output,temp,github,coverage}/**',
   '**/{vite,vitest,jest,build}.config.*',
   ],
   coverage: {
      provider: 'v8',
      watermarks: {
         lines: [70,90],
         functions: [70,90],
         branches: [70,90],
         statements: [70,90],
      },
   },
},
```
Feel free to adjust for yourself by the [config documentation](https://vitest.dev/config/).

#### Linter in tests

```npm install --save-dev eslint-plugin-testing-library eslint-plugin-jest-dom```

After successful install update the .eslintrc.cjs:
```
{
   "extends": [
   "plugin:testing-library/react",
   "plugin:jest-dom/recommended"
   ],
   "plugins": ["testing-library", "jest-dom"],
   "rules": {
      "testing-library/no-render-in-setup": "error",
      "testing-library/no-wait-for-empty-callback": "error",
      "testing-library/prefer-explicit-assert": "error",
      "testing-library/prefer-presence-queries": "error",
      "testing-library/prefer-screen-queries": "error",
      "testing-library/prefer-wait-for": "error"
   }
}
```

### Pre-commit hook with Husky

To install and init husky you should enter this command:
```npx husky-init && npm install```

It creates a basic pre-commit hook in the .husky folder. You should update with the scripts we created in the package.json file. Instead of the npm test add these lines to the pre-commit file:
```
npm run format
npm run lint:fix
npm run test:coverage
```
### React Router

You can install with npm:
```npm install react-router-dom```

### Storybook

Enter the following command:
```npx storybook@latest init```

Answer the following questions:
We have detected that you're using ESLint. Storybook provides a plugin that gives the best experience with Storybook and helps follow best practices: https://github.com/storybookjs/eslint-plugin-storybook#readme
Would you like to intall it?							yes


After init process finished create a .eslintignore and a .prettierignore file and add this line to both of them:
```.storybook/```

You can delete the generated stories folder generated in your src folder.

## Licenses of the components

### Favicon
[![The favicon of the website](/public/favicon.ico)](https://icon-icons.com/icon/bird-feather-social-twitter/127134)

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
