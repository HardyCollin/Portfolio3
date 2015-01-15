///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//
//
//$("document").ready(function(){
//    $(".youtypeinwhatitsis").css("background-color", "blue");
//});

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".class1").css("color", "yellow");
    $("div p:last-child").css("background-color", "blue");
    $("#alertButton").bind("click", alertButtonClick);
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    //$('h1').bind('click', mouseClick);
    
    $('#superHumans').accordion({header: "h3"});
    $('#superHumans').css('width', '400px');
    
    $("#uncover").click(function(){
    $("#blue").animate({right:'1400px'});
    });
    $("#cover").click(function(){
    $("#blue").animate({left:'0px'});
    
    
  });
  
    
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removeAPara').bind('click', removeAPara);
    
    $("#hide").click(function(){
    $("div").hide();
  });
    $("#show").click(function(){
    $("div").show();
  });

    
    
});

function alertButtonClick() {
    alert("this alert means a button was clicked");
}

function mouseOverMe(){
    $("h1").html('this is cool');
}
function mouseOutMe () {
    $('h1').html('it really isnt');
}
function removeAPara(){
    $('#randPara p:last').remove();
}
function addAPara () {
    $('#randPara').append('<p>ADDED</p>');
}
function replaceWText () {
    $('#replaceWText').text('');
}