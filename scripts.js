$(document).ready(function(){
    $("#mainfield").show();
	$(".cornerplanet").show();
	$(".mainrocket").show();
    $("#shipchoice").hide();
    $("#crewchoice").hide();
    $("#temchoice").hide();
	$("#menuimg1").css("opacity","1");
	$("#menuimg2").css("opacity","0.75");
	$("#menuimg3").css("opacity","0.75");
	$("#menuimg4").css("opacity","0.75");
});

function main(){
    $("#mainfield").show();
	$(".cornerplanet").show();
	$(".mainrocket").show();
    $("#shipchoice").hide();
    $("#crewchoice").hide();
    $("#temchoice").hide();
	$("#menuimg1").css("opacity","1");
	$("#menuimg2").css("opacity","0.75");
	$("#menuimg3").css("opacity","0.75");
	$("#menuimg4").css("opacity","0.75");
};

function ships(){
    $("#mainfield").hide();
	$(".cornerplanet").hide();
	$(".mainrocket").hide();
    $("#shipchoice").show();
    $("#crewchoice").hide();
    $("#temchoice").hide();
	$("#menuimg2").css("opacity","1");
	$("#menuimg1").css("opacity","0.75");
	$("#menuimg3").css("opacity","0.75");
	$("#menuimg4").css("opacity","0.75");
};

function crew(){
    $("#mainfield").hide();
	$(".cornerplanet").hide();
	$(".mainrocket").hide();
    $("#shipchoice").hide();
    $("#crewchoice").show();
    $("#temchoice").hide();
	$("#menuimg3").css("opacity","1");
	$("#menuimg1").css("opacity","0.75");
	$("#menuimg2").css("opacity","0.75");
	$("#menuimg4").css("opacity","0.75");
};

function weather(){
    $("#mainfield").hide();
	$(".cornerplanet").hide();
	$(".mainrocket").hide();
    $("#shipchoice").hide();
    $("#crewchoice").hide();
    $("#temchoice").show();
	$("#menuimg4").css("opacity","1");
	$("#menuimg1").css("opacity","0.75");
	$("#menuimg2").css("opacity","0.75");
	$("#menuimg3").css("opacity","0.75");
};