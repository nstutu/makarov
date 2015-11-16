'use strict';

angular.module('myApp.plantemplate', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/plantemplate', {
		templateUrl: 'plan/plantemplate.html',
		controller: 'plantemplateCtrl'
	});
}])
.controller('plantemplateCtrl', ['$scope','$location', function($scope,$location){
	$scope.gotoIssue = function(){
		$location.url('/issue');
	}

	

}])