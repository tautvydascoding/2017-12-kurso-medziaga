console.log("Labas");

$('h1').hide();
$('h2').click(function(event){
    $('h2').hide();
});

function uzdedaFona() {
    $('h3').css('background-color','red');
}
uzdedaFona();


// $('button').click(function(event){
//     $('body').css('background-color','black'),
//     $('body').css('color','white');
// });

// $('button').click(function(event){
//     $('body').addClass('bg-dark text-light');
// });

$('button').click(function(event){
    $('body').toggleClass('bg-dark text-light');
});

$("h4").on('mouseenter', isnyksta);

function isnyksta () {
    $("h4").fadeOut(3000);
    // $("#div2").fadeIn("slow");
    // $("#div3").fadeIn(3000);
}
// isnyksta ();

// function isnyksta2 ( x ) {
//     $( x ).fadeToggle(3000);
// }
// isnyksta2('h6');
// isnyksta2('h5');
// isnyksta2('img');

$('img').on('click', function () {
     // isnyksta2 ('h5');
     $ ('h5').fadeToggle(1000);
});

// $('img').on('mouseenter', function () {
//     $ (this).fadeTo(1100, 0.25);
// });
// $('img').on('mouseenter', function () {
//     $ (this).fadeTo(4000, 1);
// });
// $('img').on('mouseenter', function () {
//     $ (this).fadeTo(1100, 0.25);
//     var stilius = {
//         width: "500px",
//         height: "500px",
//     };
//     $(this).animate(stilius,4000);
// });


$('img').on('mouseenter', function () {
    $ (this).fadeTo(1100, 0.25);
    $ (this).css('position','absolute');
    var stilius = {
            top: 0,
            right: "0px",
            height: "5px",
            width: "5px",
            opacity: 0
    };
    $(this).animate(stilius,4000);
});
