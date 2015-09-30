'use strict';

angular.module('myApp.home', [
	'ngRoute',
	'myApp.user'
	])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl',['$scope', function($scope) {
	$scope.oo='abcaaaa';
}])
.directive('myweb',['isLogin',function(isLogin){
	var url='home/webhome.html';
	if(isLogin){
		url='home/apphome.html';
	}	
	return {
		restrict:'E',
		templateUrl:url,
	};
}]);