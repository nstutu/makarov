'use strict';

angular.module('myApp.mycalendar', []).
controller('calCtrl', ['$scope', function($scope){
	$scope.dayrows=[0,1,2,3,4,5];
	$scope.date = getMydate(0);
	$scope.today= new Date();
	$scope.firstDay= new Date();
	$scope.varMonth = 0;
	getCalendar();

	function getCalendar(){
		var items = setNewItem();
		$scope.firstDay.setFullYear($scope.date.year,$scope.date.month-1);
		$scope.firstDay.setDate(1);
		var b = $scope.firstDay.getDay($scope.firstDay);
		b=(b==0?7:b);
		console.log(b);
		$scope.firstDay.setDate(-b+1);
		for (var l = 0; l<6; l++) {
			for (var i = 0 ; i <=6 ; i++) {
				var d = $scope.firstDay.getDate();
				var m = $scope.firstDay.getMonth()+1;
				var y = $scope.firstDay.getFullYear();
				var f = y + '-' + m + '-' + d;
				items[l][i]={"c":d,"f":f,"t":0};
				$scope.firstDay.setDate(d+1);
			}	
		}
		$scope.items = items;
		console.log($scope.items[1]);
	
	}




	$scope.addMonth = function(m){
		$scope.varMonth+=m;
		$scope.date=getMydate($scope.varMonth);
		getCalendar();
	}


	function getMydate(m){
		var da= new Date();
		var tempMonth = da.getMonth();
		var month = da.getMonth(da.setMonth(tempMonth+m))+1;
		var day= da.getDate();
		var year = da.getFullYear();
		var date = new Object();
		date.year=year;
		date.month=month;
		date.day=day;
		return date;
	}

	function setNewItem(){
		var items= new Array();
		for (var i = 0; i <6; i++) {
			items[i]= new Array();
			for (var j = 0; j <=6; j++) {
				items[i][j]= new Array();
			};			
		};
		console.log(items[0]);
		return items;
	}



}])