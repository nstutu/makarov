'use strict';

angular.module('myApp.user', ['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/reg/:mail/:nick',{
	    templateUrl: 'user/reg.html',
	    controller: 'regCtrl'  	
  	});
}])
.controller('regCtrl', ['$scope','$routeParams', function($scope,$routeParams){
	$scope.mail=$routeParams.mail;
	$scope.nick=$routeParams.nick;
}])
.factory('isLogin',  function(){
	var result = false;
	if (localStorage.a && localStorage.a== 'ddddd' ){
		result = true;
	}
	return result;
});