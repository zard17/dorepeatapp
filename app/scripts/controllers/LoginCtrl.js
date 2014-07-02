'use strict';

angular.module('DoRepeatApp.controller')
  .controller('LoginCtrl', function ($scope, ezfb) {

    $scope.isLoggedIn = false;
    $scope.userName = 'anonymouse';

    updateLoginStatus(updateApiMe);

    $scope.setUser = function ($name) {
      $scope.userName = $name;
    };

    $scope.login = function () {
      ezfb.login(function (res) {
        if (res.authResponse) {
          updateLoginStatus(updateApiMe);
        }
      });
    };

    $scope.logout = function () {
      ezfb.logout(function () {
        updateLoginStatus(updateApiMe);
      });
    };

    function updateLoginStatus (more) {
      ezfb.getLoginStatus(function (res) {
        $scope.loginStatus = res;

        if ($scope.loginStatus.status === 'connected')
          $scope.isLoggedIn = true;
        else
          $scope.isLoggedIn = false;

        (more || angular.noop)();
      });
    }

    function updateApiMe () {
      ezfb.api('/me', function (res) {
        $scope.apiMe = res;
      });
    }
  })

  .run(function(ezfb) {
    ezfb.init( {
      appId: '219971484754812'
    });
  });
  
