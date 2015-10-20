'use strict';

angular.module('myApp.mycalendar', []).
controller('calCtrl', ['$scope', function($scope){
	$scope.dayrows=["1","2","3","4","5","6","7"];
	$scope.items=[
		{"c":"d1","t":"1","curmonth":"","curday":""},
		{"c":"d2","t":"0","curmonth":"curmonth","curday":""},
		{"c":"d3","t":"99","curmonth":"curmonth","curday":""},
		{"c":"d4","t":"0","curmonth":"curmonth","curday":"curday"},
		{"c":"d5","t":"0","curmonth":"curmonth","curday":""},
		{"c":"d6","t":"0","curmonth":"curmonth","curday":""},
		{"c":"d7","t":"0","curmonth":"curmonth","curday":""},								
	];
	$scope.date = getMydate(0);
	$scope.varMonth = 0;
	$scope.addMonth = function(m){
		$scope.varMonth+=m;
		$scope.date=getMydate($scope.varMonth);
	};


	function getMydate(m){
		var d= new Date();
		var tempMonth = d.getMonth();
		var month = d.getMonth(d.setMonth(tempMonth+m))+1;
		var day= d.getDay();
		var year = d.getFullYear();
		var date = new Object();
		date.year=year;
		date.month=month;
		date.day=day;
		return date;
	};

}])