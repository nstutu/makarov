'use strict';

angular.module('myApp.project', [])
.factory('getProjList', ['$http','$q','$rootScope', function($http,$q,$rootScope){
	var deferred = $q.defer();
	var promise = deferred.promise;
	var proj;
	promise.then(function(value){
		proj=value;

	});


	$q.resolve($http.get('res/json/proj.json'));

	return '123';
}]);