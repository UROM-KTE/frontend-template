# Template for web application projects in DHTE (dhte-frontend-template)

## Used technologies

- Vite
- React
- Redux, Redux Toolkit
- TypeScript
- SWC
- ESLint (AirBnB)
- Prettier
- Husky

## Using the project

After downloaded or used as template or checkout it, run ```pnpm install```.
To check outdated dependencies, you should use the following command: ```pnpm outdated```
To update dependencies run ```pnpm update```

Dangerous, but you can update to the next major version all the dependencies with the following way:
1. Make a backup of your current `package.json` file.
2. Install npm-check-updates: ```npm install -g npm-check-updates```
3. Run ncu: ```ncu -u```
4. Reinstall the project: ```pnpm install```

### Scripts

#### Development and build

Start developer mode. The application starts in developer mode on [http://localhost:5173/](http://localhost:5173/): `pnpm run dev`
Preview of the application: ```pnpm run vite preview```
Build the application: ```pnpm run build```

#### Formatting and linting

Run the prettier code formatter: ```pnpm run format```
Run the linter (ESLint): ```pnpm run lint```
or with automatic fix: ```pnpm run lint:fix```

#### Test runner scripts

Run all the tests without watching: ```pnpm run test```
Run all the test in watching mode: ```pnpm run test:watch```
Run the vitest ui: ```pnpm run test:ui```
Run the tests and display the coverage report: ```pnpm run test coverage```

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

### Github Actions
[GitHub Actions Documentation](https://docs.github.com/en/actions)

### Redux
[Redux Homepage](https://redux.js.org/)

### Redux Toolkit
[Redux Toolkit documentation](https://redux-toolkit.js.org/)

## Sources

[Build an app using React Redux with TypeScript using the Redux-Toolkit package | by Jodiss Tribhu | ITNEXT](https://itnext.io/build-a-react-redux-with-typescript-using-redux-toolkit-package-d17337aa6e39) (2023-03-29)
[Create-React-App with TypeScript, ESLint, Prettier, and Github Actions | by Bryan Grill](https://brygrill.medium.com/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97) (2023-03-29)
[Ensuring React Testing Library best practices with ESLint ](https://blog.sapegin.me/til/react/ensuring-react-testing-library-best-practices-with-eslint/)

## How I built and set this template's first version up

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

```//TODO: We have to check the configuration based on this page``` [testing-library/eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) 

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

### SCSS

```npm install sass --save-dev```

### TypeScript CSS Modules plugin

```npm install typescript-plugin-css-modules --save-dev```

Create a Global.d.ts file in your src folder with the following content:
declare module '*.module.css';
declare module '*.module.scss';
(You can add your flavour of css, you want to use).

In the tsconfig.json file add the following property to the CompilerOptions object:
"plugins": [
{ "name": "typescript-plugin-css-modules" }
]

Add the css file to your component’s folder with the name: <component>.module.css

   In your component import it like this:
   import styles from ’./Component.module.css’;
   And use like this:
   ```<div className={styles.divClassNameInCss}></div>```
   or like this:
   ```<div className={styles[‘divClassNameInCss’]}></div>```

   For more information, read the documentation:
   typescript-plugin-css-modules - npm

### Redux, Redux Toolkit

Run the following command:
```npm install react-redux @reduxjs/toolkit --save```


### Switch to pnpm

From v0.0.2 I use pnpm as package manager.

I removed the node_modules folder and the package-lock.json file. The latter is not necessary, but this chanmge was part of a larger dependency upgrade so I didn't need it.

I added the following to the package.json file's ```script``` section:
   ```"preinstall": "npx only-allow pnpm"```

Then I run the ```pnpm install``` command.

## Licenses of the components

### Favicon

[![The favicon of the website](/public/favicon.ico)](https://icon-icons.com/icon/bird-feather-social-twitter/127134)

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
