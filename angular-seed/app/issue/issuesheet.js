'use strict';

angular.module('myApp.issuesheet', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/issuesheet', {
		templateUrl: 'issue/issuesheet.html',
		controller: 'issuesheetCtrl'
	});
}])
.controller('issuesheetCtrl', ['$scope','$location','$rootScope', function($scope,$location,$rootScope){
	$scope.gotoIssue = function(){
		$location.url('/issue');
	}

	$rootScope.mynav.isnav=0;
}])