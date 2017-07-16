var Handlebars = require('handlebars')
delete require.cache[require.resolve('marked')]
var marked = require('marked')
delete require.cache[require.resolve('marked')]
var cheerio = require('cheerio')
var highlight = require('highlight.js')

highlight.configure({
  'useBR': true
})

var renderer = new marked.Renderer()

// Renderer for HTML-tables with Bootstrap-classes
renderer.table = function (header, body) {
  return '<table class="table table-bordered">\n' +
    '<thead>\n' +
    header +
    '</thead>\n' +
    '<tbody>\n' +
    body +
    '</tbody>\n' +
    '</table>\n'
}

marked.setOptions({
  highlight: function (code, name) {
    var highlighted
    if (name) {
      highlighted = highlight.highlight(name, code).value
    } else {
      highlighted = highlight.highlightAuto(code).value
    }
    return highlight.fixMarkup(highlighted)
  },
  renderer: renderer
})

/**
 * Default Handlebars-helpers for `bootprint-base`
 * @name helpers
 */
module.exports = {
  toUpperCase,
  eachSorted,
  equal,
  md,
  ifeq,
  ifcontains,
  json,
  htmlId
}

/**
 * Converts a string to uppercase
 * @param {string} value the input string
 * @returns {string} the uppercase string
 * @access public
 * @memberOf helpers
 */
function toUpperCase (value) {
  return value ? value.toUpperCase() : ''
}
/**
 * This block-helper can be used to iterate objects sorted by key. It behaves like the built-in
 * `{{#each ...}}`-helper except that it can only be used for objects and the output is in a
 * deterministic order (i.e. sorted).
 *
 * Example template:
 *
 * ```handlebars
 * {{#eachSorted obj}}
 *    {{@index}} of {{@length}}: {{@key}}={{.}}
 * {{/eachSorted}}
 * ```
 *
 * With the data `{ b: 'another one', a: 'first' }`, ignoring newlines and indents, this will output
 *
 * ```text
 * 1 of 2: a=first
 * 2 of 2: b=another one
 * ```
 *
 * The helper will set the following @-values according to the Handlebars documentation:
 * `@first`, `@index`, `@key`, `@last`, `@length`
 * @returns {string}
 * @access public
 * @memberOf helpers
 */
function eachSorted (context, options) {
  var ret = ''
  var data
  if (typeof context !== 'object') {
    return ret
  }
  var keys = Object.keys(context)
  keys.sort(function (a, b) {
    // http://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-in-javascript
    a = String(a).toLowerCase()
    b = String(b).toLowerCase()
    /* istanbul ignore next: Should never happen, since all keys are different, but just to be sure... */
    if (a === b) return 0
    if (a > b) return 1
    return -1
  }).forEach(function (key, index) {
    if (options.data) {
      data = Handlebars.createFrame(options.data || {})
      data.index = index
      data.key = key
      data.length = keys.length
      data.first = index === 0
      data.last = index === keys.length - 1
    }
    ret = ret + options.fn(context[key], {data: data})
  })
  return ret
}

/**
 * Checks whether two values a equal as in `value1 == value2` (not `===`)
 * @param value1
 * @param value2
 * @returns {boolean}
 * @access public
 * @memberOf helpers
 */
function equal (value1, value2) {
  return value1 == value2 // eslint-disable-line
}
/**
 * Render a markdown-formatted text as HTML.
 * @param {string} `value` the markdown-formatted text
 * @param {boolean} `options.hash.stripParagraph` the marked-md-renderer wraps generated HTML in a &lt;p>-tag by default.
 *      If this options is set to true, the &lt;p>-tag is stripped.
 * @returns {Handlebars.SafeString} a Handlebars-SafeString containing the provieded
 *      markdown, rendered as HTML.
 * @access public
 * @memberOf helpers
 */
function md (value, options) {
  if (!value) {
    return value
  }
  var html = marked(value)
  // We strip the surrounding <p>-tag, if
  if (options.hash && options.hash.stripParagraph) {
    var $ = cheerio('<root>' + html + '</root>')
    // Only strip <p>-tags and only if there is just one of them.
    if ($.children().length === 1 && $.children('p').length === 1) {
      html = $.children('p').html()
    }
  }
  return new Handlebars.SafeString(html)
}

/**
 * Block helper that compares to values. The body is executed if both value equal.
 * Example:
 *
 * ```hbs
 * {{#ifeq value 10}}
 *    Value is 10
 * {{else}}
 *    Value is not 10
 * {{/ifeq}}
 * ```
 *
 * @param {object} `v1` the first value
 * @param {object} `v2` the second value
 * @access public
 * @memberOf helpers
 */
function ifeq (v1, v2, options) {
  // http://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional
  if (v1 === v2) {
    return options.fn(this)
  }
  return options.inverse(this)
}

/**
 * Converts a javascript-object into a stringified highlighted JSON-object
 * @param {object} value the javascript object
 * @param {object=} options Handlebars options
 * @param {object=} options.hash parameters passed via `{{json abc=x}}`
 * @param {number=} options.hash.space Amount of indent to use when formatting JSON (default: 4)
 *   Set to "0" for a one-line JSON
 *
 * @returns {string}
 * @access public
 * @memberOf helpers
 */
function json (value, options) {
  if (!value) {
    return ''
  }
  var space = (options && options.hash && options.hash.space != null) ? options.hash.space : 4

  var schemaString = require('json-stable-stringify')(value, {space})
  var highlightedString = highlight.highlight('json', schemaString).value
  return new Handlebars.SafeString(highlightedString)
}
/**
 * Executes the block, if an object is part of an array
 * @param {object[]} array the array
 * @param {object} object the javascript object
 * @param {object} options the Handlebars options
 * @returns {string}
 * @access public
 * @memberOf helpers
 */
function ifcontains (array, object, options) {
  if (array && array.indexOf(object) >= 0) {
    return options.fn(this)
  }
  return options.inverse(this)
}

/**
 * Replace all characters that may not be used in HTML id-attributes by '-'.
 * There is still the restriction that IDs may only start with letters, which
 * is not addressed by this helper.
 *
 * @param {string} value the input value
 * @returns {string} the value after replacement and escaping
 *
 * @access public
 * @memberOf helpers
 */
function htmlId (value) {
  return value.replace(/[^A-Za-z0-9-_:.]/g, '-')
}
