function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}
// requires and returns all modules that match
requireAll(require.context("./www/css/", true, /^\.\/.*\.css$/));
require('./www/fonts/material/material-icons.css');
require("./www/js/lib/angular/angular.min.js");
require("./www/js/lib/angular/angular-animate.js");
require("./www/js/lib/angular/angular-translate.min.js");
require("./www/js/lib/dist/mn-touch.min.js");
requireAll(require.context("./www/js/lib/ng-cordova-master/", true, /^\.\/.*\.js$/));
require("./www/js/app.js");
require("./www/js/cd-app-component.js");
require("./www/js/cd-translate-provider.js");
requireAll(require.context("./www/js/cd-common/", true, /^\.\/.*\.js$/));
requireAll(require.context("./www/js/cd-data/", true, /^\.\/.*\.js$/));
requireAll(require.context("./www/js/cd-head/", true, /^\.\/.*\.js$/));
requireAll(require.context("./www/js/cd-footer/", true, /^\.\/.*\.js$/));
requireAll(require.context("./www/js/cd-history/", true, /^\.\/.*\.js$/));
requireAll(require.context("./www/js/cd-image/", true, /^\.\/.*\.js$/));
