'use strict';

angular.module('myApp.user', ['ngRoute'])

.factory('isLogin',  function(){
	var result = false;
	if (localStorage.a && localStorage.a== 'ddddd' ){
		result = true;
	}
	return result;
});