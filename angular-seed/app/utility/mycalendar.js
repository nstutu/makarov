'use strict';

angular.module('myApp.mycalendar', []).
controller('calCtrl', ['$scope', 'getMydate',function($scope,getMydate){
	$scope.itemType='dd';
	var date = getMydate(0);
	var firstDay= new Date();
	var varMonth = 0;
	var varYear = 0;
	setDayrows($scope.itemType);
	getCalendar();

	function getCalendar(){
		var items = setNewItem('dd');
		firstDay.setFullYear(date.year,date.month-1);
		firstDay.setDate(1);
		var today = getMydate(0).year + '-' + getMydate(0).month +'-' +getMydate(0).day;
		var curMonth = firstDay.getMonth()+1;
		var b = firstDay.getDay(firstDay);
		b=(b==0?7:b);
		firstDay.setDate(-b+1);
		for (var l = 0; l<6; l++) {
			for (var i = 0 ; i <=6 ; i++) {
				var d = firstDay.getDate();
				var m = firstDay.getMonth()+1;
				var y = firstDay.getFullYear();
				var f = y + '-' + m + '-' + d;
				var fm = (m==curMonth?'1':'0');
				var cd =(f==today?'1':'0') ;
				items[l][i]={"c":d,"f":f,"fm":fm,"t":"","cd":cd};
				firstDay.setDate(d+1);
			}	
		}
		items[1][2].t="9";
		$scope.items = items;
		$scope.calendarTitle = y + '年' + m +'月';
	}

	$scope.changeItem = function(type,m){
		switch(type){
			case 'dd':
				changeMonth();
				break;
			case 'mm':
				changeYear();
				break;
			case 'yy':
				changeDecade();
				break;
		}

		function changeMonth(){
			varMonth+=m;
			date=getMydate(varMonth);
			getCalendar();			
		}

		function changeYear(){
			var curyear = firstDay.getFullYear();
			console.log(varYear + ' ' + curyear);
			firstDay.setFullYear(curyear + m);
			getCalendarMonth();

		}
		
		function changeDecade(){

		}

	}


	function setNewItem(type){
		var items= new Array();
		var a=3;
		var b=4;
		switch(type){
			case 'dd':
				a=6;
				b=7;
				break;
			case 'mm':
				break;
			case 'yy':
				break;			
		}
		for (var i = 0; i <a; i++) {
			items[i]= new Array();
			for (var j = 0; j <b; j++) {
				items[i][j]= new Array();
			};			
		};
		return items;
	}

	function setDayrows(type){
		var dayrows = new Array();
		var v = 3;
		switch(type){
			case 'dd':
				v=6;
				break;
			case 'mm':
				break;
			case 'yy':
				break;
		}

		for (var i = 0; i < v; i++) {
			dayrows[i]=i;
		};
		$scope.dayrows = dayrows;
	}

	$scope.showCalendar = function(){
		switch($scope.itemType){
			case 'dd':
			$scope.itemType='mm';
			setDayrows('mm');
			getCalendarMonth();
			break;
			case 'mm':
			$scope.itemType='yy';
			setDayrows('yy');			
			getCalendarYear();
			break;
			case 'yy':
			$scope.itemType='dd';
			setDayrows('dd');
			getCalendar();
			break;
		}		
	}

	function getCalendarMonth(){
		var items = setNewItem('mm');
		var v = 1;
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 4; j++) {
				items[i][j]={"c":v,"f":"","fm":"","t":"","cd":""};
				v++;
			};
		};
		$scope.items = items;
		$scope.calendarTitle = firstDay.getFullYear() + '年';
	}


	function getCalendarYear(){
		var items = setNewItem('yy');
		var n = firstDay.getFullYear()%10;
		var firstYear = firstDay.getFullYear();		
		firstDay.setFullYear(firstYear-n);
		var s = firstDay.getFullYear();
		var v=0;
		for (var i = 0; i < 3; i++) {
			for (var j=0; j < 4; j++) {
				items[i][j]={"c":s+v-1,"f":"","fm":"","t":"","cd":""};
				v++;
			};
		};
		$scope.items = items;
		$scope.calendarTitle = (s) + '-' + (s+9);		
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