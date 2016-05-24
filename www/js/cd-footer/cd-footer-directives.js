'use strict';

cda.directive('cdColorName', function () {
    return {
        restrict: 'E',
        template: '<div id="color" ng-click="speak(color().name)" style="background-color:{{color().style.color}}">' +
                    '<p>{{color().name}}</p>' +
                '</div>'
    };
});

cda.directive('cdButtons', function () {
    return {
        restrict: 'E',
        template: '<div class="button-div">' +
                    '<div class="button" ng-click="zoomOut()" style="background-color:rgb({{color().r-40}},{{color().g-40}},{{color().b-40}});" id="zoom-out-button"><i class="material-icons">&#xE900;</i></div>' +
                    '<div class="button" ng-click="openBox()" style="background-color:rgb({{color().r-30}},{{color().g-30}},{{color().b-30}});" id="url-button"><i class="material-icons">&#xE80B;</i></div>' +
                    '<div class="button" ng-click="capture($scope)" style="background-color:rgb({{color().r-15}},{{color().g-15}},{{color().b-15}});" id="camera-button"><i class="material-icons">&#xE3B0;</i></div>' +
                    '<div class="button" ng-click="openGallery()" style="background-color:rgb({{color().r-30}},{{color().g-30}},{{color().b-30}});" id="gallery-button"><i class="material-icons">&#xE3B6;</i></div>' +
                    '<div class="button" ng-click="zoomIn()" style="background-color:rgb({{color().r-40}},{{color().g-40}},{{color().b-40}});" id="zoom-in-button"><i class="material-icons">&#xE8FF;</i></div>' +
                '</div>'
    };
});

cda.directive('cdUrlBox', function () {
    return {
        restrict: 'E',
        template: '<div id="image-url" style="background-color:rgb({{color().r-30}},{{color().g-30}},{{color().b-30}});">' +
                    '<input type="text" id="url-input" placeholder="image url">' +
                    '<div id="url-confirm" style="background-color:rgb({{color().r-15}},{{color().g-15}},{{color().b-15}});" ng-click="confirm()"><i class="material-icons">&#xE163;</i></div>' +
                '</div>'
    };
});

cda.directive('cdFooter', function () {
    return {
        restrict: 'E',
        replace: true,
        controller: 'cdFooterCtrl',
        template: '<div id="wrapper" style="color:{{color().style.font}};">' +
                '<div><cd-color-name/></div>' +
                '<div><cd-buttons/></div>' +
                '<div><cd-url-box/></div>' +
            '</div>'
    };
});