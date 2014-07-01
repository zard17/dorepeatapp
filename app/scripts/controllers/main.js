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
      checklist: ''
    };

    $scope.repeat_list = [
      {"title": "Go to a gym", "description": "exercise every morning at 8 o'clock", "checklist": ['run 10 km', 'crunch 50 times']},
      {"title": "Study English", "description": "Study Good Morning Pops everyday", "checklist": ['listen to broadcast', 'write down essay']},
      {"title": "Eat lunch", "description": "Eat fresh food without meat", "checklist": ['drink milk']}
      ];
    //$scope.repeat_list = list;

    $scope.save_repeat = function () {
      console.log($scope.repeat.title);
      console.log($scope.repeat.description);
      console.log($scope.repeat.checklist);
      $scope.repeat_list.push($scope.repeat);
    };
  })

  .config(function($routeProvider) {
  	$routeProvider
      .when('/my_repeats', {templateUrl: 'scripts/templates/my_repeats.tmpl.html'})
  		.when('/new_repeat', {templateUrl: 'scripts/templates/new_repeat.tmpl.html'})
  		.otherwise({redirectTo: '/'});
  });
