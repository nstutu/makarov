'use strict'
$(document).ready(function(){
	$('#showMobileMenuBtn').click(function(event) {
		$('#frameMain').toggleClass('frame-menu');
		$('#sidebar').toggleClass('hide');
		$('body').toggleClass('frame-body');
	});
});