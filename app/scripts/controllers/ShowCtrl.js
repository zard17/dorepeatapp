'use strict';

angular.module('DoRepeatApp.controller')
  .controller('ShowRepeatCtrl', ['$scope', 'RepeatResource', function ($scope, RepeatResource, $route, $routeParams, $location) {

    $scope.routeParams = $routeParams;
    console.log($scope.routeParams);

    $scope.repeatList = RepeatResource.selectRepeat();

    $scope.setRepeatIndexToUpdate = function (index) {
      RepeatResource.setRepeatIndexToUpdate(index);
      console.log('repeatIndexToUpdate = ' + $scope.getRepeatIndexToUpdate());
      
    }
    $scope.getRepeatIndexToUpdate = function () {
      return RepeatResource.getRepeatIndexToUpdate();
    }

    // handle template event
    $scope.setRepeatShow = function (title, $index) {
      console.log($index + ' ' + title + ' ' + $scope.repeatList[$index].show);
      $scope.repeatList[$index].show ? $scope.repeatList[$index].show = false : $scope.repeatList[$index].show = true;
    }
  }]);