angular.module('cda').config(function ($translateProvider) {
  $translateProvider.translations('en', {
    'SELECTED_COLOR': 'Selected Color'
  });
  $translateProvider.preferredLanguage('en');
});