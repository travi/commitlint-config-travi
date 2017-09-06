# shareable config for [commitlint](https://github.com/marionebl/commitlint)

[![license](https://img.shields.io/github/license/travi/commitlint-config-travi.svg)](LICENSE)

[![Build Status](https://img.shields.io/travis/travi/commitlint-config-travi.svg?style=flat)](https://travis-ci.org/travi/commitlint-config-travi)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/travi/commitlint-config-travi.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Purpose

This is my [shareable config](https://marionebl.github.io/commitlint/#/concepts-shareable-config)
for [commitlint](https://github.com/marionebl/commitlint). My config mostly
follows [angular commit convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit),
as implemented in [@commitlint/config-angular](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-angular).

Beyond what is implemented in the `@commitlint/config-angular`, I also enable
a [type](https://marionebl.github.io/commitlint/#/reference-rules?id=type-enum)
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
$ echo "module.exports = {extends: ['travi']};" > commitlint.config.js
```

### Define the npm script for [husky](https://github.com/typicode/husky)

```json
{
  "scripts": {
    "commitmsg": "commitlint -e"
  }
}
```
