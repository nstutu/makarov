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
	$scope.curProj="全部项目";
	$scope.maxSize = 3;
	$scope.bigCurrentPage = 1;
	$scope.itemPerPage=10;
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
.controller('homeCtrl',['$scope','$log','$location', function($scope,$log,$location) {
	$scope.goreg=function(){
		var mail = $scope.mailInput;
		var nick = $scope.nickInput;
		var url = '/reg/'+mail+'/'+nick;
		$location.url(url);
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
;

