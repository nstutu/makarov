'use strict';

angular.module('myApp.mycalendar', []).
controller('calCtrl', ['$scope', function($scope){
	$scope.dayrows=["1","2","3","4","5","6","7"];
	$scope.items=[
		{"c":"d1","t":"1"},
		{"c":"d2","t":"0"},
		{"c":"d3","t":"0"},
		{"c":"d4","t":"0"},
		{"c":"d5","t":"0"},
		{"c":"d6","t":"0"},
		{"c":"d7","t":"0"},								
	];	
	$scope.date = getMydate();

	function getMydate(){
		var d= new Date();
		var year = d.getFullYear();
		var month = d.getMonth();
		var day= d.getDay();
		console.log(year + '年' + month + '月');
		return year + '年' + month + '月';
	};

}])