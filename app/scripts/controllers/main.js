'use strict';

angular.module('sampleAppApp', ['ngRoute'])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.repeat = {
      title: '',
      description: '',
      checklist: '',
      show: false
    };

    $scope.repeat_list = [
      {"title": "Go to a gym", "description": "exercise every morning at 8 o'clock", "checklist": ['run 10 km', 'crunch 50 times'], "show" : false},
      {"title": "Study English", "description": "Study Good Morning Pops everyday", "checklist": ['listen to broadcast', 'write down essay'], "show" : false},
      {"title": "Eat lunch", "description": "Eat fresh food without meat", "checklist": ['drink milk'], "show" : false}
      ];
    //$scope.repeat_list = list;

    $scope.save_repeat = function () {
      console.log($scope.repeat.title);
      console.log($scope.repeat.description);
      console.log($scope.repeat.checklist);
      $scope.repeat_list.push($scope.repeat);
    }

    $scope.setRepeatShow = function (title, $index) {
      console.log($index + ' ' + title + ' ' + $scope.repeat_list[$index].show);
      $scope.repeat_list[$index].show ? $scope.repeat_list[$index].show = false : $scope.repeat_list[$index].show = true;
    }
  })

  .config(function($routeProvider) {
  	$routeProvider
      .when('/my_repeats', {templateUrl: 'scripts/templates/my_repeats.tmpl.html'})
  		.when('/create_repeat', {templateUrl: 'scripts/templates/create_repeat.tmpl.html'})
  		.otherwise({redirectTo: '/'});
  });
