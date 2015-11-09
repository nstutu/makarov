'use strict';


angular.module('myApp.issue', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/issue', {
		templateUrl: 'issue/issue.html',
		controller: 'issueCtrl'
	});
}])
.controller('issueCtrl', ['$scope', function($scope){
	$scope.abc='abc';
}])