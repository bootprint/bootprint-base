# Release notes

<a name="current-release"></a>
# Version 2.0.0-rc.1 (Sun, 25 Jun 2017 08:02:39 GMT)

* [a1b36bb](https://github.com/bootprint/bootprint-base/commit/a1b36bb) Use "thought-plugin-bootprint" for docs and update other deps - Nils Knappmeier
* [dd6bffd](https://github.com/bootprint/bootprint-base/commit/dd6bffd) Add test for including less files - Nils Knappmeier
* [25cd4ec](https://github.com/bootprint/bootprint-base/commit/25cd4ec) BREAKING: Partial "base/html-head.hbs" is not public API anymore - Nils Knappmeier
* [f00e943](https://github.com/bootprint/bootprint-base/commit/f00e943) BREAKING: Stop creating links to "definition"-elements - Nils Knappmeier
* [143364f](https://github.com/bootprint/bootprint-base/commit/143364f) Add more helper tests for edge-cases... - Nils Knappmeier
* [8d86608](https://github.com/bootprint/bootprint-base/commit/8d86608) BREAKING: Remove bootstrap.js and jquery.js - Nils Knappmeier
* [087951d](https://github.com/bootprint/bootprint-base/commit/087951d) BREAKING: Major chore changes, drop support for node before 6.0 - Nils Knappmeier
* [5a88c4c](https://github.com/bootprint/bootprint-base/commit/5a88c4c) Remove lodash dependency - Nils Knappmeier
* [8c274ee](https://github.com/bootprint/bootprint-base/commit/8c274ee) Update dependencies, use Standard as dev-dependency, fix code-style - Nils Knappmeier
* [d7cf28b](https://github.com/bootprint/bootprint-base/commit/d7cf28b) Update dependencies to enable Greenkeeper 🌴 (#5) - greenkeeper[bot]
* [04837ad](https://github.com/bootprint/bootprint-base/commit/04837ad) Use jquery 2 because of bootstrap compatibility - Nils Knappmeier
* [eb06bdc](https://github.com/bootprint/bootprint-base/commit/eb06bdc) Typo correction - Nils Knappmeier
* [cd0f12b](https://github.com/bootprint/bootprint-base/commit/cd0f12b) Option to remove the javascript-bundle from the page - Nils Knappmeier
* [14a0fd1](https://github.com/bootprint/bootprint-base/commit/14a0fd1) Extract contents of the <head>-tag into distinct partial - Nils Knappmeier



# Version 1.0.0 (Fri, 23 Dec 2016 21:44:49 GMT)

* [79e2e95](https://github.com/bootprint/bootprint-base/commit/79e2e95) Prepare for 1.0 release - Nils Knappmeier

# Version 0.8.0 (Sun, 18 Dec 2016 14:09:55 GMT)

* [915eef1](https://github.com/bootprint/bootprint-base/commit/915eef1) Use "uglify" to add the jQuery and Bootstrap JavaScript files. - Nils Knappmeier

# Version 0.7.3 (Thu, 24 Nov 2016 21:33:41 GMT)

* [1e79060](https://github.com/bootprint/bootprint-base/commit/1e79060) Include `highlight.js`-styles into less file (fixes bootprint/bootprint#16). - Nils Knappmeier

# Version 0.7.2 (Tue, 15 Mar 2016 14:21:10 GMT)

* [d6b24d6](https://github.com/bootprint/bootprint-base/commit/d6b24d6) Fix "npm test" script - Nils Knappmeier
* [b7f76c0](https://github.com/bootprint/bootprint-base/commit/b7f76c0) Adjust travis-configuration - Nils Knappmeier
* [033c47e](https://github.com/bootprint/bootprint-base/commit/033c47e) Move to bootprint-organization and enable ghook for StandardJS - Nils Knappmeier

## v0.7.1 - 2016-02-10

* Now really: Create borders around tables created through markdown (fixes nknapp/bootprint-openapi#52)


## v0.7.0 - 2016-02-10

* Create borders around tables created through markdown (fixes nknapp/bootprint-openapi#52)

## v0.6.3 - 2015-10-21

* Remove `bootprint` as peer-dependency, because `npm` versions 1 and 2 download it needlessly.

## v0.6.2 - 2015-10-19

# Fix

* Re-add missing Handlebars-dependency

## v0.6.1 - 2015-10-19

# Fix

* Add `files`-property to package.json

## v0.6.0 - 2015-10-15 

### Add

* `equal`-helper to compare two values

### Change 

* The `eachSorted` helper now sorts in a case-insensitive manner. 

## v0.5.1 - 2015-08-13
### Fix

* `bootprint-swagger#62`: md-helper is not loosing html-tags anymore

## v0.5.0 - 2015-07-20
### Change

* Align configuration to `customize-engine-handlebars`
** `preprocessor` is moved to `handlebars.preprocessor`.
** `handlebars.template` is deprecated. `handlebars.templates` should point to a 
    directory containing an `index.html.hbs` file.
    

## v0.3.1 - 2015-06-18
## Fix

- `toUpperCase`-helper must execute `String.prototype.toUpperCase` instead of returning it (see [nknapp/bootprint-swagger#5](https://github
.com/nknapp/bootprint-swagger/issues/5))

## v0.3.0 - 2015-06-17
### Add

- New helper `htmlId` which strips characters that are illegal in HTML ID-attributes.
