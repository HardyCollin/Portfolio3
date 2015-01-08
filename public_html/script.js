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
    
});

function alertButtonClick() {
    alert("this alert means a button was clicked");
}
