function cdHeadCtrl($scope, cdCurrentColor, cdZoom, cdUrl, cdCamera, cdGallery, cdTTS) {
    'use strict';
    $scope.color = cdCurrentColor.get;
    $scope.zoomIn = cdZoom.zoomIn;
    $scope.zoomOut = cdZoom.zoomOut;
    $scope.openBox = cdUrl.openBox;
    $scope.confirm = cdUrl.confirm;
    $scope.capture = function () {
        cdCamera.capture();
        $scope.$apply();
    };
    $scope.openGallery = cdGallery.openGallery;
    $scope.speak = cdTTS.speakColor;
}
cdHeadCtrl.$inject = ['$scope', 'cdCurrentColor', 'cdZoom', 'cdUrl', 'cdCamera', 'cdGallery', 'cdTTS'];
cda.controller('cdFooterCtrl', cdHeadCtrl);