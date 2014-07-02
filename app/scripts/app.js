'use strict';

angular.module('DoRepeatApp', []);
angular.module('DoRepeatApp', ['ngRoute']);
angular.module('DoRepeatApp', ['DoRepeatApp.controller', 'loginModule']);

angular.module('DoRepeatApp.controller', ['ngRoute', 'DoRepeatApp.service']);
angular.module('DoRepeatApp.service', ['ngResource']);


angular.module('DoRepeatApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/my_repeats', {
        templateUrl: 'scripts/templates/my_repeats.tmpl.html', 
        controller: 'ShowRepeatCtrl'})
      .when('/create_repeat', {
        templateUrl: 'scripts/templates/create_repeat.tmpl.html'
        })
      .when('/update_repeat', {
        templateUrl: 'scripts/templates/update_repeat.tmpl.html', 
        controller: 'UpdateRepeatCtrl'})
      .otherwise({redirectTo: '/'});
  }]);
