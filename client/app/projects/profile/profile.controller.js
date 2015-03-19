'use strict';

angular.module('observatory3App')
.controller('ProjectsProfileCtrl', function ($scope, $http, $stateParams) {
    $http.get('/api/projects/'+ $stateParams.username + '/' + $stateParams.project).success(function(project){
        $scope.project = project;
    });

});