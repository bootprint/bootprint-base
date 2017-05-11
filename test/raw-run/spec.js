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
var tester = require('bootprint-unit-testing')

describe('If run without any overrides, ', function () {
  this.timeout(10000)
  var bptest = tester(require('../..'), __dirname, {})

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should include the main.css file', function () {
    expect(bptest.$('link[rel="stylesheet"][href="main.css"]').length).to.equal(1)
  })

  it('should generate a container div', function () {
    expect(bptest.$('body > div.container').length).to.equal(1)
  })
})
