'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.user',
  'myApp.view1',
  'myApp.view2',
  'myApp.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('myController', ['$scope','$window','$location', function($scope,$window,$location){
	$scope.wo=function(){
		$window.alert($window.innerWidth);
		$window.alert(localStorage.a);
	};
	var uu='/view2';
	// $location.path(uu);
}])
.directive('brandbar',['isLogin',function(isLogin){
	var url='user/notlogin.html';
	if(isLogin){
		url='user/login.html';
	}
	return {
		restrict:'E',
		templateUrl:url,
		replace:true,
	};
}]);

