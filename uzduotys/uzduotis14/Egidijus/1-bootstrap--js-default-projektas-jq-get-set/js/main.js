console.log("Labas");


var tekstas = "";
var tekstas1 = "";

//tekstas = $('h1').text()
tekstas = $('h1').eq(2).text()
console.log(tekstas);

tekstas1 = $('h1')[0]
console.log(tekstas1);

// $('h1').text('naujas tekstas');
// console.log(tekstas);

$('h1').eq(0).html('<b>naujas </b> tekstas');
console.log(tekstas);

// is ivedimo lauko imame teksta
var ivestis = "";
ivestis = $('input[name="username"]').val();

console.log(ivestis);

$('h1:first').text(  ivestis );

$("input").on('keypress',function() {
    ivestis = $('input[name="username"]').val();
    $('h1').eq(0).text( ivestis );

    if(ivestis.length < 8) {
        $('input[name="username"]').addClass('bg-warning');
        $('input[name="username"]').removeClass('bg-success');
        console.log("trinu");
    } else {
        $('input[name="username"]').addClass('bg-success');
        $('input[name="username"]').removeClass('bg-warning');
    }
});

$('h1').eq(1).html('<button>Registruotis</button>');
$('h1').eq(1).html('<button>Registruotis</button>');

var x = $('h1:first');

$ ('.container').append (x);

var b = $('button');
// b- ka perkelti '.container' - kur perkelti
$(b).appendTo('.container');



var x = $('<heder> \ <h3> labas </h3> \ </heder>');
$('.container').prepend( x );

$('.container').append( '<footer> &copy 2018 </footer>' );

//istrynem h3 elemto turini
$('.container').prepend( x.text("pakeistas"));
// arba
x.text("pakeistas2");
$('.container').prepend( x );
