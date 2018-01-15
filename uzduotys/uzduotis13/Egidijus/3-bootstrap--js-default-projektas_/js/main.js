console.log("Labas");

var x = $('.container');

$('.container h1').css ("color", "blue");
$('.container h1, h3').css ("color", "orange");
// teti galima dviem budais
$('li:last').css('color','red');
//arba
$('li').last().css('color','green');


$('h4').css('color','red').add('h5').css("background", "yellow");

$('h1:eq(1)').addClass("bg-warning aukstis-300");

$('button:not(.pirkti)').addClass("bg-info");

$('button[name="antanas"]').addClass("bg-danger");
