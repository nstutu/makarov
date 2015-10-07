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

.controller('homeCtrl',['$scope','$log','$location', function($scope,$log,$location) {
	$scope.goreg=function(){
		var mail = $scope.mailInput;
		var nick = $scope.nickInput;
		var url = '/reg/'+mail+'/'+nick;
		$location.url(url);
	}
}])
.controller('appCtrl', ['$scope', function($scope){
	
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
}])
.directive('mynav',function(){
	return {
		restrict:'E',
		templateUrl:'home/nav.html',
		link:link
	}
	function link(scope,element,attr){
		scope.projname='goodproj';
	}
})
;

