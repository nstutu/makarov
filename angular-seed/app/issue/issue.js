'use strict';


angular.module('myApp.issue', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/issue', {
		templateUrl: 'issue/issue.html',
		controller: 'issueCtrl'
	});
}])
.controller('issueCtrl', ['$scope','$location','$anchorScroll', function($scope,$location,$anchorScroll){
	$scope.abc='abc';

	$scope.gotoAnchor= function(anchor){
		$location.hash(anchor);
		$anchorScroll();
	}
}])