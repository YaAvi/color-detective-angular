angular.module('cda').filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
