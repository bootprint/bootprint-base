
# API-Documentation

This page describes the API of this Bootprint-module

* [Templates](#templates)
  * [Partials](#partials)
* [Handlebars Helpers](#helpers)
  * from [bootprint-base@2.0.0-rc4](#helpers-bootprint-base)
* [LessCSS](#lesscss)
    
# Templates

    
<a name="template-indexhtml"></a>
### index.html

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc4/handlebars/templates/index.html.hbs">bootprint-base @ 2.0.0-rc4 / handlebars/templates/index.html.hbs</a>        </td>
    </tr>
        <tr>
            <th>Structure</th>
            <td>
<pre><code>
<a href="#template-indexhtml">index.html</a>
│ <i>Default template for rendering the HTML-page.
│     ...</i>
├─┬ <a href="#partial-basehtml-head">base/html-head</a>
│ │ <i>This partial is rendered into the `<head>`-tag of ...</i>
│ ├── <a href="#partial-basetitle">base/title</a>
│ │   <i>This partial is rendered into the HTML-title in th...</i>
│ └── <a href="#partial-basehtml-head-extra">base/html-head-extra</a>
│     <i>This partial is added inside the <head>-tag, after...</i>
├── <a href="#partial-baseheader">base/header</a>
│   <i>This partial is displayed at the top of the HTML-b...</i>
├── <a href="#partial-basebody">base/body</a>
│   <i>This partial is displayed at the inside a `.contai...</i>
├── <a href="#partial-basefooter">base/footer</a>
│   <i>This partial is displayed at the bottom of the HTM...</i>
└── <a href="#partial-basejavascript-libs">base/javascript-libs</a>
    <i>This partial is rendered below the `footer`-partia...</i>
</code></pre>    


</td>
        </tr>
</table>

```
Default template for rendering the HTML-page.
    It can be replaced by another template if needed. However, in the average case,
    it should be left unmodified since it calls partials that can be overridden instead.

    The template includes the result of the Less-compiler (`main.css`)
    and places the other partials (`base/header`, `base/body` and `base/footer`)
    above, within and below a `div.container`-element.

    @public
```

    

## Partials

<a name="partial-basebody"></a>
### base/body

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc4/handlebars/partials/base/body.hbs">bootprint-base @ 2.0.0-rc4 / handlebars/partials/base/body.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#template-indexhtml">index.html</a>
            </td>
        </tr>
</table>

```
This partial is displayed at the inside a `.container`-element in the HTML-body.
    It is empty and can be overridden to include custom content in
    the Bootprint-result.

    @param {object} $context$ the whole input data

    @public
```

<a name="partial-basefooter"></a>
### base/footer

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc4/handlebars/partials/base/footer.hbs">bootprint-base @ 2.0.0-rc4 / handlebars/partials/base/footer.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#template-indexhtml">index.html</a>
            </td>
        </tr>
</table>

```
This partial is displayed at the bottom of the HTML-body.
    It is empty and can be overridden to include custom content in
    the Bootprint-result.

    @param {object} $context$ the whole input data
    @public
```

<a name="partial-baseheader"></a>
### base/header

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc4/handlebars/partials/base/header.hbs">bootprint-base @ 2.0.0-rc4 / handlebars/partials/base/header.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#template-indexhtml">index.html</a>
            </td>
        </tr>
</table>

```
This partial is displayed at the top of the HTML-body.
    It is empty and can be overridden to include custom content in
    the Bootprint-result.

    @param {object} $context$ the whole input data
    @public
```

<a name="partial-basehtml-head-extra"></a>
### base/html-head-extra

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc4/handlebars/partials/base/html-head-extra.hbs">bootprint-base @ 2.0.0-rc4 / handlebars/partials/base/html-head-extra.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-basehtml-head">base/html-head</a>
            </td>
        </tr>
</table>

```
This partial is added inside the <head>-tag, after the
    other declarations of the "base/html-head"-partial.

    @param {object} $context$ the whole input data
    @public
```

<a name="partial-basehtml-head"></a>
### base/html-head

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc4/handlebars/partials/base/html-head.hbs">bootprint-base @ 2.0.0-rc4 / handlebars/partials/base/html-head.hbs</a>        </td>
    </tr>
        <tr>
            <th>Uses partials</th>
            <td>
                    <a href="#partial-basetitle">base/title</a>, 
                    <a href="#partial-basehtml-head-extra">base/html-head-extra</a>
            </td>
        </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#template-indexhtml">index.html</a>
            </td>
        </tr>
</table>

```
This partial is rendered into the `<head>`-tag of the page.
    Additional tags can be placed in the partial `base/html-head-extra.hbs`.

    This partial can also be overridden to replace its contents, but beware
    that changes to this file may happen without incrementing the major version.
    @access private
```

<a name="partial-basejavascript-libs"></a>
### base/javascript-libs

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc4/handlebars/partials/base/javascript-libs.hbs">bootprint-base @ 2.0.0-rc4 / handlebars/partials/base/javascript-libs.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#template-indexhtml">index.html</a>
            </td>
        </tr>
</table>

```
This partial is rendered below the `footer`-partial of the page. You can include
    a javascript-bundle here that can be created by using `customize-engine-uglify`
```

<a name="partial-basetitle"></a>
### base/title

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc4/handlebars/partials/base/title.hbs">bootprint-base @ 2.0.0-rc4 / handlebars/partials/base/title.hbs</a>        </td>
    </tr>
        <tr>
            <th>Used by</th>
            <td>
                    <a href="#partial-basehtml-head">base/html-head</a>
            </td>
        </tr>
</table>

```
This partial is rendered into the HTML-title in the `<head>`-tag of the page.
    It can be overridden in order to display a custom title.
```

     


<a name="helpers-bootprint-base"></a>
# Helpers (bootprint-base)

(from [bootprint-base@2.0.0-rc4/handlebars/helpers.js](https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc4/handlebars/helpers.js)
)

<a name="helpers"></a>

## helpers
Default Handlebars-helpers for `bootprint-base`

**Kind**: global variable  

* [helpers](#helpers)
    * [.toUpperCase(value)](#helpers.toUpperCase) ⇒ <code>string</code>
    * [.eachSorted()](#helpers.eachSorted) ⇒ <code>string</code>
    * [.equal(value1, value2)](#helpers.equal) ⇒ <code>boolean</code>
    * [.md(&#x60;value&#x60;)](#helpers.md) ⇒ <code>Handlebars.SafeString</code>
    * [.ifeq(&#x60;v1&#x60;, &#x60;v2&#x60;)](#helpers.ifeq)
    * [.json(value, [options])](#helpers.json) ⇒ <code>string</code>
    * [.ifcontains(array, object, options)](#helpers.ifcontains) ⇒ <code>string</code>
    * [.htmlId(value)](#helpers.htmlId) ⇒ <code>string</code>

<a name="helpers.toUpperCase"></a>

### helpers.toUpperCase(value) ⇒ <code>string</code>
Converts a string to uppercase

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>string</code> - the uppercase string  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input string |

<a name="helpers.eachSorted"></a>

### helpers.eachSorted() ⇒ <code>string</code>
This block-helper can be used to iterate objects sorted by key. It behaves like the built-in
`{{#each ...}}`-helper except that it can only be used for objects and the output is in a
deterministic order (i.e. sorted).

Example template:

```handlebars
{{#eachSorted obj}}
   {{@index}} of {{@length}}: {{@key}}={{.}}
{{/eachSorted}}
```

With the data `{ b: 'another one', a: 'first' }`, ignoring newlines and indents, this will output

```text
1 of 2: a=first
2 of 2: b=another one
```

The helper will set the following @-values according to the Handlebars documentation:
`@first`, `@index`, `@key`, `@last`, `@length`

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  
<a name="helpers.equal"></a>

### helpers.equal(value1, value2) ⇒ <code>boolean</code>
Checks whether two values a equal as in `value1 == value2` (not `===`)

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  

| Param |
| --- |
| value1 | 
| value2 | 

<a name="helpers.md"></a>

### helpers.md(&#x60;value&#x60;) ⇒ <code>Handlebars.SafeString</code>
Render a markdown-formatted text as HTML.

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>Handlebars.SafeString</code> - a Handlebars-SafeString containing the provieded
     markdown, rendered as HTML.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| `value` | <code>string</code> | the markdown-formatted text |
| `options.hash.stripParagraph` | <code>boolean</code> | the marked-md-renderer wraps generated HTML in a &lt;p>-tag by default.      If this options is set to true, the &lt;p>-tag is stripped. |

<a name="helpers.ifeq"></a>

### helpers.ifeq(&#x60;v1&#x60;, &#x60;v2&#x60;)
Block helper that compares to values. The body is executed if both value equal.
Example:

```hbs
{{#ifeq value 10}}
   Value is 10
{{else}}
   Value is not 10
{{/ifeq}}
```

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| `v1` | <code>object</code> | the first value |
| `v2` | <code>object</code> | the second value |

<a name="helpers.json"></a>

### helpers.json(value, [options]) ⇒ <code>string</code>
Converts a javascript-object into a stringified highlighted JSON-object

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>object</code> | the javascript object |
| [options] | <code>object</code> | Handlebars options |
| [options.hash] | <code>object</code> | parameters passed via `{{json abc=x}}` |
| [options.hash.space] | <code>number</code> | Amount of indent to use when formatting JSON (default: 4)   Set to "0" for a one-line JSON |

<a name="helpers.ifcontains"></a>

### helpers.ifcontains(array, object, options) ⇒ <code>string</code>
Executes the block, if an object is part of an array

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;object&gt;</code> | the array |
| object | <code>object</code> | the javascript object |
| options | <code>object</code> | the Handlebars options |

<a name="helpers.htmlId"></a>

### helpers.htmlId(value) ⇒ <code>string</code>
Replace all characters that may not be used in HTML id-attributes by '-'.
There is still the restriction that IDs may only start with letters, which
is not addressed by this helper.

**Kind**: static method of [<code>helpers</code>](#helpers)  
**Returns**: <code>string</code> - the value after replacement and escaping  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input value |




# LessCSS 

## Main LessCSS-files

* [highlight.js@9.12.0/styles/default.css](https://github.com/isagalaev/highlight.js/blob/v9.12.0/styles/default.css)  
* [bootprint-base@2.0.0-rc4/less/main.less](https://github.com/bootprint/bootprint-base/blob/v2.0.0-rc4/less/main.less)  
    
## LessCSS include paths

* [bootstrap@3.3.7/less](https://github.com/twbs/bootstrap/blob/v3.3.7/less)


