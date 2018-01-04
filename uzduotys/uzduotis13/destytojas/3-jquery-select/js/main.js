console.log("Labas");


var x = $('.container');



$('.container h1').css( "color", "blue" );
// arba
// ieskomasis,  kur ieskoti
$('h1',        '.container').css( "color", "blue" );


$('h1, h3').css('color', "orange");
$('li:last').css('color', "#b1b1b1");
// arba
$('li').last().css('color', "red");


 $( "h4" ).css("color", "red").add( "h5" ).css( "background", "yellow" );


 // uzdeti klase
 $('h1:eq(1)').addClass('bg-warning aukstis-300');
 $('h1:last').addClass('bg-warning aukstis-300');
 $('h1').addClass('bg-warning aukstis-300');

$('button:not(.pirkti)').addClass('bg-dark');

$('button[name="antanas"]').addClass('bg-danger');
//
