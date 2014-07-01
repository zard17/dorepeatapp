'use strict';


angular.module('DoRepeatApp.controller')
  .controller('MainCtrl', ['$scope', 'RepeatResource', function ($scope, RepeatResource) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.repeatList = RepeatResource.selectRepeat();

    $scope.save_repeat = function () {
      console.log($scope.repeat.title);
      console.log($scope.repeat.description);
      console.log($scope.repeat.checklist);
      $scope.repeatList.push($scope.repeat);
    }

    $scope.setRepeatShow = function (title, $index) {
      console.log($index + ' ' + title + ' ' + $scope.repeatList[$index].show);
      $scope.repeatList[$index].show ? $scope.repeatList[$index].show = false : $scope.repeatList[$index].show = true;
    }
  }])

  .controller('ShowRepeatCtrl', ['$scope', 'RepeatResource', function ($scope, RepeatResource, $route, $routeParams, $location) {
    $scope.routeParams = $routeParams;
    console.log($scope.routeParams);

    $scope.repeat = {
      title: '',
      description: '',
      checklist: '',
      show: false
    };

  }]);



