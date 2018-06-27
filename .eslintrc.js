// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    "ecmaVersion":7
  },
  env: {
    browser: true,
    "es6": true,
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  plugins: [
    'react'
  ],
  // add your custom rules here
  rules: {
    'semi': ["error", "always"],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
