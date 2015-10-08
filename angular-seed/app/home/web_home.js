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
.controller('appCtrl', ['$scope','getProjList','$q','$rootScope', function($scope,getProjList,$q,$rootScope){
	var deferred = $q.defer();
	var promise = deferred.promise;
	var proj;
	promise.then(function(value){
		console.log(value);
		$scope.proj=value;
	});
	deferred.resolve(getProjList);
	// $rootScope.$apply();
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

