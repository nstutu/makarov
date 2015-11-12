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

	$scope.gotoIssueSheet = function(){
		$location.url('/issuesheet');
	}

	$scope.itemArray = [
	{id: 1, name: '张三'},
	{id: 2, name: '李四'},
	{id: 3, name: '王五'},
	{id: 4, name: '赵六'},
	{id: 5, name: '钱七'},
	];

	$scope.selectedItem= $scope.itemArray[0];

	$scope.itemArray2 = [
	{id: 1, name: 'A项目'},
	{id: 2, name: 'B项目'},
	{id: 3, name: 'C项目'},
	{id: 4, name: 'D项目'},
	{id: 5, name: 'E项目'},
	];

	$scope.selectedItem2= $scope.itemArray2[0];

	$scope.itemArray3 = [
	{id: 1, name: '事项单1'},
	{id: 2, name: '本周工作安排2'},
	{id: 3, name: '下周工作安排3'},
	{id: 4, name: '下下周工作'},
	{id: 5, name: '杂项单'},
	];

	$scope.selectedItem3= $scope.itemArray3[0];	

}])