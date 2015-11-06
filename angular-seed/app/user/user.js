'use strict';

angular.module('myApp.user', ['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/reg/:mail/:nick',{
	    templateUrl: 'user/reg.html',
	    controller: 'regCtrl'  	
  	})
	.when('/reg',{
		templateUrl: 'user/reg.html',
		controller: 'regCtrl'  	
	})
	.when('/login',{
		templateUrl: 'user/dologin.html',
		controller: 'dologinCtrl'  	
	})
	.when('/logout',{
		template: '<div ng-controller="dologoutCtrl">......</div>',
		controller: 'dologoutCtrl'  	
	})	
  	;
}])
.controller('regCtrl', ['$scope','$routeParams', function($scope,$routeParams){
	$scope.mail=$routeParams.mail;
	$scope.nick=$routeParams.nick;
}])
.controller('dologinCtrl', ['$scope','checklogin','myreload', function($scope,checklogin,myreload){
	$scope.dologin=function(){
		checklogin($scope.mail,$scope.pwd,$scope.checkcode);
		// myreload();
	}
	
}])
.controller('dologoutCtrl', ['myreload', function(myreload){
	localStorage.removeItem("a");
	myreload();
}])
.factory('isLogin',  function(){
	var result = new Object;
	result.info = false;
	if (localStorage.a && localStorage.a== 'ddddd' ){
		result.info = true;
		result.data = {"nickname":"老马卡","regdate":"2015-10-1"};
	}
	return result;
})
.factory('checklogin', ['$location',function($location){
	return function(a,b,c){
		localStorage.a="ddddd";
		$location.url("/home");
	}

}])
.factory('myreload', ['$window', function($window){
	return function (){
		$window.location='http://192.168.1.152:8080/app/index.html';
		$window.location.href();
	};
}])
;