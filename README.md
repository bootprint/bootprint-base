# bootprint-base 

[![NPM version](https://img.shields.io/npm/v/bootprint-base.svg)](https://npmjs.com/package/bootprint-base)
[![Travis Build Status](https://travis-ci.org/bootprint/bootprint-base.svg?branch=master)](https://travis-ci.org/bootprint/bootprint-base)
[![Coverage Status](https://img.shields.io/codecov/bootprint/bootprint-base.svg)](https://codecov.io/github/bootprint/bootprint-base)

> The base configuration used by other Bootprint modules



# Installation

```
npm -g install bootprint
npm -g install bootprint-base
```

## Usage


After installing the package globally, you can run bootprint with the command

```bash
bootprint base https://raw.githubusercontent.com/bootprint/bootprint-base/v2.0.0-rc4/examples/example.json target
```

`example.json` can be found in [examples/example.json](examples/example.json) in this project.

Bootprint will then generate the following files:

<pre><code>examples/target/
├── index.html
├── main.css
└── main.css.map
</code></pre> 


## Customizing

You can write your own module that customizes the partials and helpers in this module
(see [the bootprint documentation](https://github.com/bootprint/bootprint/blob/master/doc/modules.md)) for details.

The entrypoint JavaScript-file of such a module would look like.

```js
module.exports = function (customize) {
  return customize
    .load(require('bootprint-base'))
    .merge({
      // You customizations here
    })

// Add "package" metadata. This can be evaluated by documentation generators
module.exports.package = require('./package')
```

# API

see [docs/api.md](docs/api.md)


# License

`bootprint-base` is published under the MIT-license.

See [LICENSE](LICENSE) for details.


# Release-Notes
 
For release notes, see [CHANGELOG.md](CHANGELOG.md)
 
# Contributing guidelines

See [CONTRIBUTING.md](CONTRIBUTING.md).