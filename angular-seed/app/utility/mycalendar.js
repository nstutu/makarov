'use strict';

angular.module('myApp.mycalendar', []).
controller('calCtrl', ['$scope', 'getMydate',function($scope,getMydate){
	$scope.itemType='dd';
	$scope.dayrows=getItemHeader(itemType);
	$scope.date = getMydate(0);
	$scope.firstDay= new Date();
	$scope.varMonth = 0;
	getCalendar();

	function getCalendar(){
		var items = setNewItem();
		$scope.firstDay.setFullYear($scope.date.year,$scope.date.month-1);
		$scope.firstDay.setDate(1);
		var today = getMydate(0).year + '-' + getMydate(0).month +'-' +getMydate(0).day;
		var curMonth = $scope.firstDay.getMonth()+1;
		var b = $scope.firstDay.getDay($scope.firstDay);
		b=(b==0?7:b);
		$scope.firstDay.setDate(-b+1);
		for (var l = 0; l<6; l++) {
			for (var i = 0 ; i <=6 ; i++) {
				var d = $scope.firstDay.getDate();
				var m = $scope.firstDay.getMonth()+1;
				var y = $scope.firstDay.getFullYear();
				var f = y + '-' + m + '-' + d;
				var fm = (m==curMonth?'1':'0');
				var cd =(f==today?'1':'0') ;
				items[l][i]={"c":d,"f":f,"fm":fm,"t":"","cd":cd};
				$scope.firstDay.setDate(d+1);
			}	
		}
		items[1][2].t="9";
		$scope.items = items;
	}




	$scope.changeItem = function(m){
		$scope.varMonth+=m;
		$scope.date=getMydate($scope.varMonth);
		getCalendar();
	}


	function setNewItem(){
		var items= new Array();
		for (var i = 0; i <6; i++) {
			items[i]= new Array();
			for (var j = 0; j <=6; j++) {
				items[i][j]= new Array();
			};			
		};
		return items;
	}

	function getItemHeader(type){
		var dayrows = new Array();
		var v = 3;
		switch(type){
			case 'dd':
				v=6;
				break;
			case 'mm':
				v=3;
				break;
			case 'yy':
				v=3;
				break;
		}

		for (var i = 0; i < v; i++) {
			dayrows[i]=i;
		};
		return dayrows;
	}

	function setItemType(type){
		$scope.itemType=type;
	}


}])
.factory('getMydate',  function(){
	return function (m){
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
	};
})