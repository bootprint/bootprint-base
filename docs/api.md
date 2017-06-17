
# API-Documentation

This page describes the API of this Bootprint-module

* [Templates](#templates)
  * [Partials](#partials)
* [Handlebars Helpers](#helpers)
* [LessCSS](#lesscss)
    
# Templates

    
<a name="template-indexhtml"></a>
### index.html

<table>
    <tr>
        <th>Source file</th>
        <td>
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/templates/index.html.hbs">bootprint-base @ 1.0.0 / handlebars/templates/index.html.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/body.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/body.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/footer.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/footer.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/header.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/header.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/html-head-extra.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/html-head-extra.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/html-head.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/html-head.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/javascript-libs.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/javascript-libs.hbs</a>        </td>
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
<a href="https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/partials/base/title.hbs">bootprint-base @ 1.0.0 / handlebars/partials/base/title.hbs</a>        </td>
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

     

# Helpers 

(from [bootprint-base@1.0.0/handlebars/helpers.js](https://github.com/bootprint/bootprint-base/blob/v1.0.0/handlebars/helpers.js))

## Members

<dl>
<dt><a href="#toUpperCase">toUpperCase</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to uppercase</p>
</dd>
<dt><a href="#eachSorted">eachSorted</a> ⇒ <code>string</code></dt>
<dd><p>This block-helper can be used to iterate objects sorted by key. It behaves like the built-in
<code>{{#each ...}}</code>-helper except that it can only be used for objects and the output is in a
deterministic order (i.e. sorted).</p>
<p>Example template:</p>
<pre><code class="lang-handlebars">{{#eachSorted obj}}
   {{@index}} of {{@length}}: {{@key}}={{.}}
{{/eachSorted}}
</code></pre>
<p>With the data <code>{ b: &#39;another one&#39;, a: &#39;first&#39; }</code>, ignoring newlines and indents, this will output</p>
<pre><code class="lang-text">1 of 2: a=first
2 of 2: b=another one
</code></pre>
<p>The helper will set the following @-values according to the Handlebars documentation:
<code>@first</code>, <code>@index</code>, <code>@key</code>, <code>@last</code>, <code>@length</code></p>
</dd>
</dl>

<a name="toUpperCase"></a>

## toUpperCase ⇒ <code>string</code>
Converts a string to uppercase

**Kind**: global variable  
**Returns**: <code>string</code> - the uppercase string  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | the input string |

<a name="eachSorted"></a>

## eachSorted ⇒ <code>string</code>
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

**Kind**: global variable  
**Api**: public  



# LessCSS 

## Main LessCSS-files

* [highlight.js@9.12.0/styles/default.css](https://github.com/isagalaev/highlight.js/blob/v9.12.0/styles/default.css)  
* [bootprint-base@1.0.0/less/main.less](https://github.com/bootprint/bootprint-base/blob/v1.0.0/less/main.less)  
    
## LessCSS include paths

* [bootstrap@3.3.7/less](https://github.com/twbs/bootstrap/blob/v3.3.7/less)


