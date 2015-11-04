'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.user',
  'myApp.view1',
  'myApp.view2',
  'myApp.home',
  'myApp.issue',
  'myApp.mycalendar',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('bodyCtrl', 
	['$scope', 

	function($scope){
		var sidebarVal = 0;
		$scope.bodycss='';
		$scope.framecss='';
		$scope.sidebarcss='hide';
		$scope.toggleSideBar=function(){
			sidebarVal = sidebarVal==1?0:1;
			if(sidebarVal==0){
				$scope.bodycss='';
				$scope.framecss='';
				$scope.sidebarcss='hide';
			}
			if(sidebarVal==1){
				$scope.bodycss='frame-body';
				$scope.framecss='frame-menu';
				$scope.sidebarcss='';				
			}
		};
	
}])
.controller('myController', 
	['$scope',
	'$window',
	'$location', 
	function($scope,$window,$location){
		$scope.hidemenu=function(){
			angular.element($('#bs-example-navbar-collapse-1')).collapse('hide');
			console.log('aaaaaaa');
		};
}])
.directive('brandbar',['$rootScope',function($rootScope){
	var url='user/notlogin.html';
	if($rootScope.islogin){
		url='user/login.html';
	}
	return {
		restrict:'E',
		templateUrl:url,
		replace:true,
	};
}])
.run(function($rootScope,isLogin){
	$rootScope.islogin=isLogin.info;
	if(isLogin.info){
		$rootScope.nickname=isLogin.data.nickname;
		$rootScope.regdate=isLogin.data.regdate;
	}
});

