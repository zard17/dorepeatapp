'use strict';

angular.module('DoRepeatApp.controller')
  .controller('CreateRepeatCtrl', ['$scope', 'RepeatResource', function ($scope, RepeatResource) {

    $scope.repeatContainer = {};
    $scope.repeatList = RepeatResource.selectRepeat();

    $scope.saveRepeat = function () {
      console.log($scope.repeatContainer.title);
      console.log($scope.repeatContainer.description);
      console.log($scope.repeatContainer.checklist);
      RepeatResource.addNewRepeat($scope.repeatContainer);
    }
  }]);