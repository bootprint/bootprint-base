/*!
 * bootprint-base <https://github.com/bootprint/bootprint-base>
 *
 * Copyright (c) 2016 Nils Knappmeier.
 * Released under the MIT license.
 */

/* eslint-env mocha */

var chai = require('chai')
chai.use(require('dirty-chai'))
var expect = chai.expect

var path = require('path')
var tester = require('bootprint-unit-testing')

describe('Checking extension partials ', function () {
  this.timeout(10000)

  function module (customize) {
    return customize
      .load(require('../..'))
      .merge({
        handlebars: {
          partials: path.join(__dirname, 'partials')
        }
      })
  }

  var bptest = tester(module, __dirname, {})

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should include a javascript-library', function () {
    expect(bptest.$('script[src="myjslib.js"]').length).to.equal(1)
  })
})
