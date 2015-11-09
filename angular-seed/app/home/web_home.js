'use strict';

angular.module('myApp.home', [
	'ngRoute',
	'myApp.user',
	'myApp.project',
	'ui.bootstrap',
	])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])
.controller('appCtrl', ['$scope', function($scope){
	$scope.issueShow=true;
	$scope.planShow=true;
	$scope.toggleIssue=function(type){
		if (type=='issue'){
			$scope.issueShow=true;
			angular.element($('button.btn-issue')).addClass('active');	
			angular.element($('button.btn-sheet')).removeClass('active');	
		}
		if (type=='sheet'){
			$scope.issueShow=false;	
			angular.element($('button.btn-sheet')).addClass('active');	
			angular.element($('button.btn-issue')).removeClass('active');				
		}
		if (type=='plan'){
			$scope.planShow=true;	
			angular.element($('button.btn-plan')).addClass('active');	
			angular.element($('button.btn-mile')).removeClass('active');				
		}	
		if (type=='mile'){
			$scope.planShow=false;	
			angular.element($('button.btn-mile')).addClass('active');	
			angular.element($('button.btn-plan')).removeClass('active');				
		}			
	}
}])
.directive('myweb',['$rootScope',function($rootScope){
	var url='home/webhome.html';
	if($rootScope.islogin){
		url='home/apphome.html';
	}	
	return {
		restrict:'E',
		templateUrl:url,
	};
}])
.controller('homeCtrl',['$scope','$location', function($scope,$location) {

	$scope.goreg=function(){
		var mail = $scope.mailInput;
		var nick = $scope.nickInput;
		var url = '/reg/'+mail+'/'+nick;
		$location.url(url);
	}
}])
;

