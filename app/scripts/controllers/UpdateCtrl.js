'use strict';

angular.module('DoRepeatApp.controller')
  .controller('UpdateRepeatCtrl', function ($scope, RepeatHandle, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.repeatIndexToUpdate = RepeatHandle.getRepeatIndexToUpdate();
    $scope.repeatToUpdate = RepeatHandle.selectRepeatByIndex($scope.repeatIndexToUpdate);

    // handle template operation
    $scope.updateRepeat = function () {
      RepeatHandle.updateRepeat($scope.repeatToUpdate, $scope.repeatIndexToUpdate);
    };
  });
