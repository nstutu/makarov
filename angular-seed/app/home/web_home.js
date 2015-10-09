'use strict';

angular.module('myApp.home', [
	'ngRoute',
	'myApp.user',
	'myApp.project',
	])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])
.controller('appCtrl', ['$scope', function($scope){

}])
.controller('homeCtrl',['$scope','$log','$location', function($scope,$log,$location) {
	$scope.goreg=function(){
		var mail = $scope.mailInput;
		var nick = $scope.nickInput;
		var url = '/reg/'+mail+'/'+nick;
		$location.url(url);
	}
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
.directive('mynav',['$http',function($http){
	return {
		restrict:'E',
		templateUrl:'home/nav.html',
		link:link
	}
	function link(scope,element,attr){
		$http.get('res/json/proj.json').success(function(data){
			scope.projects=data;
		});		
	}
}])
;

