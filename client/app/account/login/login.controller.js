'use strict';

angular.module('observatory3App')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.id,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    // Check URL for token
    if ($location.search().token){
      // Attempt to login with token
      var token = $location.search().token;
      Auth.loginWithResetToken(token)
        .then(function(){
          $location.path('/settings'); // allow user to change password
        });
    }
  });
