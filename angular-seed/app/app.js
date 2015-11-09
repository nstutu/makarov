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
	 '$rootScope',
	function($scope,$rootScope){
		$scope.curProj="全部项目";
		$scope.maxSize = 3;
		$scope.bigCurrentPage = 1;
		$scope.itemPerPage=10;
		//上面是mynav的参数 
		var sidebarVal = 0;
		$scope.bodycss='';
		$scope.framecss='';
		$scope.sidebarcss='hide';
		$scope.containercss='';
		$scope.toggleSideBar=function(){
			sidebarVal = sidebarVal==1?0:1;
			if(sidebarVal==0){
				$scope.bodycss='';
				$scope.framecss='';
				$scope.sidebarcss='hide';
				$scope.containercss='';
			}
			if(sidebarVal==1){
				$scope.bodycss='frame-body';
				$scope.framecss='frame-menu';
				$scope.sidebarcss='';
				$scope.containercss='frame-container';		
			}
		};


		
	
}])
.controller('myController', 
	['$scope',

	function($scope){

}])
.directive('mynav',['$http',function($http){
	return {
		restrict:'E',
		templateUrl:'home/nav.html',
		link:link
	}
	function link(scope,element,attr){
		$http.get('res/json/proj.json').success(function(data){
			scope.bigTotalItems = data.length;
			if(scope.bigTotalItems>scope.itemPerPage){
				scope.showpager=1;
				scope.projects=data.slice(0,10);
			}else{
				scope.showpager=0;
				scope.projects=data;
			}
			
			scope.pageChanged = function() {
				scope.projects=data.slice(scope.bigCurrentPage*10-10,scope.bigCurrentPage*10);
  			};
		});		
	}
}])
.run(function($rootScope,isLogin){
	$rootScope.islogin=isLogin.info;
	if(isLogin.info){
		$rootScope.nickname=isLogin.data.nickname;
		$rootScope.regdate=isLogin.data.regdate;
	}
});

