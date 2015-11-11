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
	};

	$scope.itemArray = [
	{id: 1, name: 'first'},
	{id: 2, name: 'second'},
	{id: 3, name: 'third'},
	{id: 4, name: 'fourth'},
	{id: 5, name: 'fifth'},
	];

	$scope.selectedItem= $scope.itemArray[0];
}])