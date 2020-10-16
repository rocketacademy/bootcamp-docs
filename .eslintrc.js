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
  // ESLint settings for Gitbook JavaScript
  rules: {
    // Gitbook formatting
    // Sometimes we have partial code that doesn't warrant variable usage
    'no-unused-vars': 'off',
    // Sometimes we have partial code that assumes a prior definition above
    'no-undef': 'off',

    // Course curriculum exceptions
    // Allow console for students to debug
    'no-console': 'off',
    // Allow param reassignments to properties of arrays or objects
    'no-param-reassign': ['error', { props: false }],

    // Spell checker
    'spellcheck/spell-checker': [1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: 'en_GB',
        skipWords: [
          'etc',
          'gitbook',
          'dict',
          'aff',
          'utils',
        ],
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
