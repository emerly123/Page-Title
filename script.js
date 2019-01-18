$("button").click(function(){
    $("#arrow").show();
    $("#click").show();
    $("body").css("background-color","red");
});

$("#arrow").dblclick(function(){
    $("#clearc").slideDown();
    $("#listen").show();
});

$("#clearc").hover(function(){
    $("#island").show();
    $("#clearc").hide();
    $("#clue").show();
});

$("h1").click(function(){
    $("#forest").show();
});

$("#forest").hover(function(){
    $("#forest").fadeOut();
    $("#bridge").fadeIn();
     $("#hbut").fadeIn();
});

$("#bridge").hover(function(){
    $("#buttone").show();
});

 $("#buttone").click(function(){
 $("#treasure").show();
});

 $("#buttone").click(function(){
    $("treasure").show();
    $("#forest").hide();
    $("#buttone").hide();
    $("#pirate").hide();
    $("#start").hide();
    $("#arrow").hide();
    $("#click").hide();
    $("#clearc").hide();
    $("#island").hide();
    $("#listen").hide();
    $("#arrow2").hide();
    $("#clue").hide();
    $("#bridge").hide();
    $("#hbut").hide();
    $("#winner").show();
     $("#look").hide();
});   
