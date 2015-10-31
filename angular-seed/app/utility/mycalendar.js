'use strict';

angular.module('myApp.mycalendar', []).
controller('calCtrl', ['$scope', 'getMydate',function($scope,getMydate){
	$scope.itemType='dd';
	var f1= new Date();
	var f1curMonth = 0;
	var f1curYear = 0;
	var f2= new Date();
	var f3= new Date();
	var today = getMydate(0).year + '-' + getMydate(0).month +'-' +getMydate(0).day;	
	var varYear = 0;
	setDayrows($scope.itemType);
	getCalendar();

	function getCalendar(){
		var items = setNewItem('dd');
		f1.setFullYear(f1.getFullYear(),f1.getMonth(),1);
		f1curMonth = f1.getMonth()+1;
		f1curYear = f1.getFullYear();
		var b = f1.getDay();
		b=(b==0?7:b);
		f1.setDate(-b+1);
		for (var l = 0; l<6; l++) {
			for (var i = 0 ; i <=6 ; i++) {
				var d = f1.getDate();
				var m = f1.getMonth()+1;
				var y = f1.getFullYear();
				var f = y + '-' + m + '-' + d;
				var fm = (m==f1curMonth?'1':'0');
				var cd =(f==today?'1':'0') ;
				items[l][i]={"c":d,"f":f,"fm":fm,"t":"","cd":cd};
				f1.setDate(d+1);
			}	
		}
		items[1][2].t="9";
		f2.setFullYear(f1curYear);
		$scope.items = items;
		$scope.calendarTitle = f1curYear + '年' + f1curMonth +'月';
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
			var vm = f1curMonth-1;
			var vy = f1curYear;
			f1.setFullYear(vy,vm+m);
			console.log(f1);
			getCalendar();
		}

		function changeYear(){
			var vy = f2.getFullYear();
			f2.setFullYear(vy + m);
			getCalendarMonth();
		}
		
		function changeDecade(){
			var vy = f3.getFullYear();
			f3.setFullYear(vy + 10*m);
			getCalendarYear();
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
		var cd =0;
		var md = getMydate(0);
		var cm = md.year + '-' + md.month;
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 4; j++) {
				var f=f2.getFullYear() + '-' + v;
				cd=(cm==f?1:0);
				items[i][j]={"c":v+"月","f":f,"fm":1,"t":"","cd":cd};
				v++;
			};
		};
		f3.setFullYear(f2.getFullYear());
		$scope.items = items;
		$scope.calendarTitle = f2.getFullYear() + '年';
	}

	function getCalendarYear(){
		var items = setNewItem('yy');
		var n = f3.getFullYear()%10;
		var firstYear = f3.getFullYear();
		f3.setFullYear(firstYear-n);
		var s = f3.getFullYear();
		var v=0;
		var fm=1;
		var cd = 0;
		var cm = getMydate(0).year;
		for (var i = 0; i < 3; i++) {
			for (var j=0; j < 4; j++) {
				fm=((v==0 || v== 11)?0:1);
				cd=(cm==s+v-1?1:0);
				items[i][j]={"c":s+v-1,"f":s+v-1,"fm":fm,"t":"","cd":cd};
				v++;
			};
		};
		$scope.items = items;
		$scope.calendarTitle = s + '-' + (s+9);		
	}

	$scope.changeCalendar = function(item){
		switch($scope.itemType){
			case 'mm':
				$scope.itemType='dd';
				setDayrows('dd');
				var y = item.substring(0,4);				
				var m = item.substring(5);
				f1.setFullYear(y,m-1);
				getCalendar();
			break;
			case 'yy':
				$scope.itemType='mm';
				setDayrows('mm');
				f2.setFullYear(item);
				getCalendarMonth();
			break;
		}	
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