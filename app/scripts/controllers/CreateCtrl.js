'use strict';

angular.module('DoRepeatApp.controller')
  .controller('CreateRepeatCtrl', function ($scope, RepeatHandle) {

    $scope.repeatContainer = {};

    $scope.saveRepeat = function () {
      console.log($scope.repeatContainer.title);
      console.log($scope.repeatContainer.description);
      console.log($scope.repeatContainer.checklist);
      RepeatHandle.addNewRepeat($scope.repeatContainer);
    };
  });