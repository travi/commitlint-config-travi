const config = require('@commitlint/config-angular');

module.exports = {
  extends: ['@commitlint/config-angular'],
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
