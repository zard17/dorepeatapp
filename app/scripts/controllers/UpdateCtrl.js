'use strict';

angular.module('DoRepeatApp.controller')
  .controller('UpdateRepeatCtrl', ['$scope', 'RepeatResource', function ($scope, RepeatResource, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.repeatIndexToUpdate = RepeatResource.getRepeatIndexToUpdate();
    $scope.repeatToUpdate = RepeatResource.selectRepeatByIndex($scope.repeatIndexToUpdate);

    // handle template operation
    $scope.updateRepeat = function () {
    	RepeatResource.updateRepeat($scope.repeatToUpdate, $scope.repeatIndexToUpdate);
    }

  }]);
