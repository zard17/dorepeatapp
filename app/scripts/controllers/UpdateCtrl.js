angular.module('DoRepeatApp.controller')
  .controller('UpdateRepeatCtrl', ['$scope', 'RepeatResource', function ($scope, RepeatResource, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    console.log($scope.routeParams);

    $scope.repeatList = RepeatResource.selectRepeat();

  }]);
