var verb = require('verb');

require("../bootprint-verb-helpers")(verb, require("./"));





verb.task('default', function () {
    verb.src(['.verb.md'])
        .pipe(verb.dest('./'));
});
