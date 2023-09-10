module.exports = {
  extends: [
    'semistandard'
  ],
  rules: {
    'accessor-pairs': 2,
    'block-spacing': [2, 'always'],
    'comma-dangle': [0, 'never'],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'handle-callback-err': [2, '^(err|error)$'],
    // 'jsx-quotes': [2, 'prefer-single'], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'jsx-quotes': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    quotes: [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    semi: [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'padded-blocks': [2, 'never'],
    // 'space-before-blocks': [2, 'always'], //~~~~~~~~~~~~~~~~~~~~~
    'space-before-blocks': [0],
    // 'space-before-function-paren': [2, 'never'], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'space-before-function-paren': [0],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'prefer-const': 2,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'],
    'vue/multi-word-component-names': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'vue/html-self-closing': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'vue/attribute-hyphenation': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'eslintspace-before-blocks': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    '@typescript-eslint/no-empty-function': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // '@typescript-eslint/ban-types': [0], // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    "one-var": [0], // 连续声明~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    "no-var": [0], // 未声明~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // "indent": [0] // 缩进~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  }
};
