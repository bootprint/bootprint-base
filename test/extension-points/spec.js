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

describe('Extension points: bootprint-base', function () {
  this.timeout(10000)

  /**
   * Load bootprint-base and merge custom partials and less definitions for this tests
   * @param customize
   */
  function module (customize) {
    return customize
      .load(require('../..'))
      .merge({
        handlebars: {
          partials: path.join(__dirname, 'partials')
        },
        less: {
          main: path.join(__dirname, 'less', 'main.less')
        }
      })
  }

  var bptest = tester(module, __dirname, {name: 'extension-points-spec'})

  // Run bootprint. The parsed "index.html"-file (cheerio) is then available
  // under "bptest.$"
  before(bptest.run)

  it('should include a javascript-library', function () {
    expect(bptest.$('body *').last().toString())
      .to.equal('<script src="extension-points-spec.js" type="text/javascript"></script>')
  })

  it('should include the partial "base/header" in front of the body container', function () {
    expect(bptest.$('div.container').prev().toString())
      .to.equal('<header>header extension-points-spec</header>')
  })

  it('should include the partial "base/body" inside the body container', function () {
    expect(bptest.$('div.container').html().trim())
      .to.equal('body extension-points-spec')
  })

  it('should include the partial "base/footer" after the body container', function () {
    expect(bptest.$('div.container').next().toString())
      .to.equal('<footer>footer extension-points-spec</footer>')
  })

  it('should include the partial "base/html-head-extra" at the end of the head-tag', function () {
    expect(bptest.$('head *').last().toString())
      .to.equal('<html-head-extra>html-head-extra extension-points-spec</html-head-extra>')
  })

  it('should include the partial "base/title" inside the title tag', function () {
    expect(bptest.$('head > title').html().trim())
      .to.equal('title extension-points-spec')
  })

  it('should add less-definitions to the main.css file', function () {
    expect(bptest.read('main.css')).to.contain('bootprint-base.extensionpoints')
  })
})
