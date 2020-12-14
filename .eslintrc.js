module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    // Markdown setup from here https://github.com/eslint/eslint-plugin-markdown
    'plugin:markdown/recommended',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: [
    'spellcheck',
  ],
  // ESLint settings for GitBook JavaScript
  rules: {
    // GitBook formatting
    // Sometimes we have partial code that doesn't warrant variable usage
    'no-unused-vars': 'off',
    // Sometimes we have partial code that assumes a prior definition above
    'no-undef': 'off',
    // Disable prefer-const for GitBook because some variables are declared
    // and used in different blocks
    'prefer-const': 'off',

    // Course curriculum exceptions
    // Allow console for students to debug
    'no-console': 'off',
    // Allow param reassignments to properties of arrays or objects
    'no-param-reassign': ['error', { props: false }],

    // in sequelize we need to combine commonJS and import with file
    // extensions (mjs)
    'import/extensions': 'off',

    // no errors for an import statement
    // eslint checks file paths
    'import/no-unresolved': 'off',

    //
    'import/prefer-default-export': 'off',
    
    // allow multi line arrow functions for readability
    'arrow-body-style' : 'never',
    
    // allow throw of non objects
    'no-throw-literal' : 'off'

    // no max length for code examples
    'max-len' : 'off'

    // Spell checker
    'spellcheck/spell-checker': [1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: 'en_GB',
        skipIfMatch: [
          'http://[^s]*',
          '^[-\\w]+[-\\w\\.]+$', // For MIME Types
        ],
        skipWordIfMatch: [
          '^foobar.*$', // words that begin with foobar will not be checked
        ],
        minLength: 2,
      },
    ],
  },
};
