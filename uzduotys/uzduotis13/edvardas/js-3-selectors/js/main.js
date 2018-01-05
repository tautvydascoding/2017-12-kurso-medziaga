console.log("Labas");

var x=$('container');

$('.container h1').css("color","blue");
//arba
//ieskomasis-kur jieskai
$('h1',       '.container').css("color","blue");

$('h1,h3').css('color',"orange")
//last-paskutinis elementas
$("li:last").css('color','orange')
//arba
$('li').last().css('color',"red");


//prastas budas daug pakeitimu vienoje eiluteje
$("h4").css("color","red").add("h2").css("background","yellow");


//uzdedam kalse elementui
//eq-gali pats pasirinkti pagal iskaiciavima;last-paskutinis elementams
//
 $( "h1:eq(1)" ).addClass( "bg-warning aukstis-300" );

 $('button:not(.registracija)').addClass('bg-dark');
 $('button[name="antanas"]').addClass('bg-danger');
