'use strict';


angular.module('myApp.plan', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/plan', {
		templateUrl: 'plan/plan.html',
		controller: 'planCtrl'
	})
	.when('/planedit',{
		templateUrl: 'plan/planedit.html',
		controller: 'planeditCtrl'		
	})
}])
.controller('planCtrl', ['$scope','$location','$anchorScroll', function($scope,$location,$anchorScroll){


	$scope.gotoAnchor= function(anchor){
		$location.hash(anchor);
		$anchorScroll();
	};

	$scope.gotoPlanTemplate = function(){
		$location.url('/plantemplate');
	}


}])
.controller('planeditCtrl', ['$scope', function($scope){

}])