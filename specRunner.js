require.config({
    urlArgs: 'cb=' + Math.random(),
    paths: {
        jquery: 'assets/js/jquery',
        jasmine: 'assets/js/jasmine/jasmine',
        'jasmine-html': 'assets/js/jasmine/jasmine-html',
        spec: 'assets/js/jasmine/spec/'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});

require(['jquery', 'jasmine-html'], function ($, jasmine) {
    console.log("### "+jasmine);

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('spec/conceptSpec');



    $(function () {
        require(specs, function (spec) {
            jasmineEnv.execute();
        });
    });

});