# shareable config for [commitlint](https://github.com/marionebl/commitlint)

[![license](https://img.shields.io/github/license/travi/commitlint-config-travi.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/commitlint-config-travi.svg?maxAge=2592000)](https://www.npmjs.com/package/commitlint-config-travi)

[![Build Status](https://img.shields.io/travis/com/travi/commitlint-config-travi.svg?style=flat)](https://travis-ci.com/travi/commitlint-config-travi)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/travi/commitlint-config-travi.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Purpose

This is my [shareable config](https://marionebl.github.io/commitlint/#/concepts-shareable-config)
for [commitlint](https://github.com/marionebl/commitlint). My config mostly
follows [angular commit convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit),
as implemented in the ["soft fork"](https://github.com/marionebl/commitlint/issues/146)
as [@commitlint/config-conventional](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional).

Beyond what is implemented in the `@commitlint/config-conventional`, I also
enable a [type](https://marionebl.github.io/commitlint/#/reference-rules?id=type-enum)
of `wip` for commits that don't fit the default types. This is most often
because the does not complete one of default types, but is instead progress
toward one.

## Usage

### Installation

```sh
$ npm install commitlint-config-travi -D
```

### Define the config for your project

```sh
$ echo "module.exports = {extends: ['travi']};" > .commitlintrc.js
```

### Define the [husky](https://github.com/typicode/husky) hook

([in a `.huskyrc.json`](https://github.com/typicode/husky#upgrading-from-014),
for example)

```json
{
  "hooks": {
    "commit-msg": "commitlint -e"
  }
}
```
