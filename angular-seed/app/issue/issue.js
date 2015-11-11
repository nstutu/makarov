'use strict';


angular.module('myApp.issue', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/issue', {
		templateUrl: 'issue/issue.html',
		controller: 'issueCtrl'
	});
}])
.controller('issueCtrl', ['$scope','$location','$anchorScroll', function($scope,$location,$anchorScroll){
	$scope.abc='abc';

	$scope.gotoAnchor= function(anchor){
		$location.hash(anchor);
		$anchorScroll();
	}

	$scope.people = [
	{ name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
	{ name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
	{ name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
	{ name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
	{ name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
	{ name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
	{ name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
	{ name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
	{ name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
	{ name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
	];	
}])