console.log("Labas");


// paslepti h1
$('h1').hide();

// paslepti h2 , kai ant jo paspaudi
$('h2').click( function(event) {
     $('h2').hide();
});


function uzdedaFona() {
    $('h3').css('background-color', 'red');
}
uzdedaFona();



// uzduotis
// sukurti mygtuka/div, kuri paspaudus
// viso puslapio fonas taptu juodu/tamsiu
// o visi tekstai - taptu balti
$('button').click(function(event) {
     $('body').toggleClass('bg-dark  text-light');
});

$('h4').on('mouseenter', isnyksta  );

function isnyksta() {
    $('h4').fadeOut(3000);
}
// arba
$('h4').on('mouseenter', function(event) {
     $('h4').fadeOut(3000);
});
 // isnyksta();

 // =======
 function isnyksta2( x ) {
     $( x ).fadeToggle(3000);
 }
// isnyksta2('h6');
// isnyksta2('h5');
// isnyksta2('img');

$('img').on('click', function(){
    // isnyksta2('h5');
    // arba
     $( 'h5' ).fadeToggle(1000);
} );


$('img').on('mouseenter', function(){
    $(this).fadeTo(1100,  0.25);

    $(this).css('position', 'absolute');
    var stilius = {
        top: 0,
        right: "0px",
        width: "5px",
        height: "5px",
        opacity: 0
    };
    $(this).animate(stilius, 4000);
});

//
