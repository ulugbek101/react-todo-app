# Todo app (React + TypeSctipt)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Cloning a project
```js
git clone https://github.com/ulugbek101/react-todo-app.git
cd react-todo-app
```

## Installing dependencies and run
```js
npm install
npm run dev
```

## Expanding the ESLint configuration

If you are developing a production application, I recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
