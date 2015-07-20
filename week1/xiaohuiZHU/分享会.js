$(document).ready(function(e) {
    $("#1").click( function() {
		$("#one").show(1000);
		$("#two").hide(100);
		$("#three").hide(100);
	});
	$("#2").click( function() {
		$("#two").show(1000);
		$("#one").hide(100);
		$("#three").hide(100);
	});
	$("#3").click( function() {
		$("#three").show(1000);
		$("#one").hide(100);
		$("#two").hide(100);
	});
});