const config = require('@commitlint/config-conventional');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', 'kebab-case'],
    'type-enum': [
      2,
      'always',
      [
        ...config.rules['type-enum'][2],
        'wip'
      ]
    ]
  }
};
