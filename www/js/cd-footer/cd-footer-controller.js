function cdFooterCtrl(cdCurrentColor, cdZoom, cdUrl, cdOpenImage, cdTTS) {
    this.color = cdCurrentColor.getColor;
    this.zoomIn = cdZoom.zoomIn;
    this.zoomOut = cdZoom.zoomOut;
    this.zoomInState = cdZoom.zoomInState;
    this.zoomOutState = cdZoom.zoomOutState;
    this.openBox = cdUrl.openBox;
    this.confirm = cdUrl.confirm;
    this.urlBoxState = cdUrl.getUrlBoxState;
    this.openImage = cdOpenImage.openImage;
    this.speak = cdTTS.speakColor;
}
angular.module('cda').controller('cdFooterCtrl', cdFooterCtrl);