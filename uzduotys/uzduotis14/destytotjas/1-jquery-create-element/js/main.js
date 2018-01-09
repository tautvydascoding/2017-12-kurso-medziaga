console.log("Labas");


var tekstas = "";

// kai nieko i "()" nerasai - paimamamas tektas

tekstas = $('h1')[0]; // DOM objektas\
// console.log(tekstas);
//tekstas = $('h1')[0].text(); // !!! error text() - neveiks, kaip ir kitos jquery komandos/actions   (nes [] grazina ne jquery objekta)

tekstas = $('h1').eq(0).text();
// arba
// tekstas = $('h1:first').text();
console.log(tekstas);

// keiciam h1 tekstas
// .html - suveiks parasytas html
$('h1').eq(0).html(' <b>naujas</b> tekstas ');
// .text - neveiks html kodas/tagai
$('h1').eq(1).text(' <b>naujas</b> tekstas ');


// is ivedimo lauko imam ivesta tekstas
var ivestis = "";
ivestis = $('input[name="unername"]').val();

console.log( ivestis );
// arba
$('h1:first').text(   ivestis );

$('input').on('keypress', function() {
    ivestis = $('input[name="unername"]').val();
    $('h1').eq(0).text(  ivestis  );

    if(ivestis.length < 8) {
        // nudazysime raudonai
        $('input[name="unername"]').addClass('bg-warning');
        $('input[name="unername"]').removeClass('bg-success');
        console.log("trinu");
    } else {
        $('input[name="unername"]').removeClass('bg-warning');
        $('input[name="unername"]').addClass('bg-success');
    }
});

$('h1').eq(1).html("<button>Tegistruotis </button>");
$('h1').eq(1).html("<button>Tegistruotis </button>");



var x = $('h1:first');

// h1 perkelsime i .container elmento apacia
$('.container').append( x  );
// h1 perkelsime po .container elmentu
$('.container').after( x  );

var b = $('button');
// b - ka perkelti      '.container'-  i kur perkelti
$(b).appendTo( '.container' );

//
// !!! surasti visus h3
var x = $('h3');

// sukurti h3 nauja elementa (reik nurodyti "<" simbolius)
var x = $('<header> <h3> Labas </h3></header>');
// imano taip uzrasyti, bet nepatartina, nes sunkaiu skaityti
// var x = $('<header> \
//                 <h3> Labas </h3> \
//         </header>');

$('.container').prepend( x );

// append, prepend ,... moka kurti elementus
$('.container').append( '<footer> &copy 2018 </footer>');

// istrina vaikus "h3" - vietoj ju ideda nauja teksta "pakeistas"
x.text("pakeistas");
$('.container').prepend( x );
//
