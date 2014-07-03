'use strict';

angular.module('DoRepeatApp', ['DoRepeatApp.controller']);

angular.module('DoRepeatApp.controller', ['ngRoute', 'DoRepeatApp.service', 'ezfb']);
angular.module('DoRepeatApp.service', ['ngResource']);


angular.module('DoRepeatApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/my_repeats', {
        templateUrl: 'scripts/templates/my_repeats.tmpl.html',
        controller: 'ShowRepeatCtrl'
      })
      .when('/create_repeat', {
        templateUrl: 'scripts/templates/create_repeat.tmpl.html',
        controller: 'CreateRepeatCtrl'
      })
      .when('/update_repeat', {
        templateUrl: 'scripts/templates/update_repeat.tmpl.html',
        controller: 'UpdateRepeatCtrl'
      })
      .otherwise({redirectTo: '/'});
  }]);
