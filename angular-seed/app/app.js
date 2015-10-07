'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.user',
  'myApp.view1',
  'myApp.view2',
  'myApp.home',

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('myController', ['$scope','$window','$location', function($scope,$window,$location){
	$scope.hidemenu=function(){
		angular.element($('#bs-example-navbar-collapse-1')).collapse('hide');
		console.log('aaaaaaa');
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

