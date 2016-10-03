(function (angular) {
  'use strict';
  angular.module('app')
    .controller('homeController', ['$scope', '$http', function ($scope, $http) {
      $scope.showData = function( ){


     $scope.names = []; 
	$http.get("../mockJson/mock.json").success(function(response){ 
		$scope.names = response;  
	});
     
         
}


      $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
      }
      $scope.offset = 0;
      $scope.navButtons = [];

      // $scope.buildNavButtons = function () {
      //   for (var i = 0, len = ($scope.names.length / $scope.perPage); i < len; i = i + 1) {
      //     $scope.navButtons.push(i);
      //   }
      // }


    }]);
  angular.module('mainApp').filter('pagination', function () {
    return function (input, start) {
      start = +start;
      return input.slice(start);
    };
  });

})(window.angular);
