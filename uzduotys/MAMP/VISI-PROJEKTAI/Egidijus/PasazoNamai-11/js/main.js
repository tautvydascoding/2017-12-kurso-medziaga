console.log("Labas");

$(document).ready(function(){
    $("a.nav-link").mouseover(function(){
        $(this).css("background-color", "lightgray");
        $(this).css("color", "black");
    });
    $("a.nav-link").mouseout(function(){
        $(this).css("background-color", "#392527");
        $(this).css("color", "#D0CBCC");
    });
});
