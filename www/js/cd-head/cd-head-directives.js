'use strict';

cda.directive('cdHistoryButton', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="history-button" ng-click="historyButton()">' +
                '<i class="material-icons">&#xE889;</i>' +
                '</div>'
    };
});

cda.directive('cdTitle', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="title">Color Detective</div>'
    };
});

cda.directive('cdBrowseButtons', function () {
    return {
        restrict: 'E',
        template: '<div id="next-button" ng-disabled="last" ng-click="next()">' +
                '<i class="material-icons">&#xE315;</i>' +
                '</div>' +
                '<div id="prev-button" ng-disabled="first" ng-click="prev()">' +
                '<i class="material-icons">&#xE314;</i>' +
                '</div>'
    };
});

cda.directive('cdDonateButton', function () {
    return {
        restrict: 'E',
        template: '<div onclick="location.href=' +
                "'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G29WRUWENX9SU';" +
                '" class="donate">' +
                '<i class="material-icons">&#xE227;</i>' +
                '</div>'
    };
});

cda.directive('cdHead', function () {
    return {
        restrict: 'E',
        replace: true,
        controller: 'cdHeadCtrl',
        template: '<div id="head" style="background-color:rgb({{color().r-15}},{{color().g-15}},{{color().b-15}}); color:{{color().style.font}}">' +
                '<div><cd-history-button/></div>' +
                '<div><cd-title/></div>' +
                '<div><cd-browse-buttons/></div>' +
                '<div><cd-donate-button/></div>' +
                '</div>'
    };
});