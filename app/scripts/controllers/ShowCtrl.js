'use strict';

angular.module('DoRepeatApp.controller')
  .controller('ShowRepeatCtrl', function ($scope, RepeatHandle, $routeParams) {

    $scope.routeParams = $routeParams;
    console.log($scope.routeParams);

    function setRepeatListCallback(repeatList) {
      $scope.repeatList = repeatList;
    }
    RepeatHandle.selectRepeatList(setRepeatListCallback);

    $scope.setRepeatIndexToUpdate = function (index) {
      RepeatHandle.setRepeatIndexToUpdate(index);
      console.log('repeatIndexToUpdate = ' + $scope.getRepeatIndexToUpdate());
    };

    $scope.getRepeatIndexToUpdate = function () {
      return RepeatHandle.getRepeatIndexToUpdate();
    };

    // handle template event
    $scope.setRepeatShow = function (title, $index) {
      console.log($index + ' ' + title + ' ' + $scope.repeatList[$index].show);
      $scope.repeatList[$index] = $scope.repeatList[$index] ? false : true;
    };
  });