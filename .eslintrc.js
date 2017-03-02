// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    
    // required to lint *.vue files
    plugins: [
    'html'
  ],
    // add your custom rules here
    'rules': {
        "indent": ["error", 4]
    }
}