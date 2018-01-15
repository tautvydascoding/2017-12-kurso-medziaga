console.log("Labas");
var tekstas="";
//kai nieko i "()" nerasai-paimamas tekstas
tekstas=$('h1')[0];//DOM objektas js
// tekstas=$('h1')[0].text();////error text()-neveiks.kaip ir kitos jquery komandos/actions
//(nes []grazina ne jquery)

tekstas=$('h1').eq(0).text();//jq budas pajimti
console.log(tekstas);

//keiciam h1
//.html-suveiks parasytas html
$('h1').eq(0).html('<b>naujas</b> tekstas');
//.text-neveiks html kodas
$('h1').eq(1).text('<b>naujas</b> tekstas');
//is ivedimo lauko imam ivesta tekstas
var ivestis="";
ivestis=$('input[name="username"]').val();

console.log(ivestis);
//arba
//jq console log budas
$('h1:first').text(ivestis);

$('input').on('keypress',function(){

    ivestis=$('input[name="username"]').val();
    $('h1').eq(0).text( ivestis );

    //nudazysime teksta raudonai
    if(ivestis.length< 8){
        $('input[name="username"]').addClass('bg-warning')
        $('input[name="username"]').removeClass('bg-success')

    }else{
        $('input[name="username"]').removeClass('bg-warning')
        $('input[name="username"]').addClass('bg-succsses')


    }


});
$("h1").eq(1).html("<button>Registruotis</button>");
$("h1").eq(2).html("<button>Registruotis</button>");
//h1 perkelsim i .container elemento apacia
var x=$('h1:first');
$('.container').append(x);
//perkeliame po containeriu
$('.container').after(x);

var b=$('button');
// b- ka perkeliame ///.container i kur perkeliame
$(b).appendTo('container');
//
//!!!surasti visus h3
var x=$('h3');
//sukurit h3 elemento kurimas(reik nurodyti("<")simbolius
var x=$('<header><h3>Labas</h3></header>');

$('.container').prepend(x);
//prepend,..moka kurti elementus

$('.container').append('<footer>&copy2018</footer>');
//istrina vaikus"h3"-vietoj ju ideda nauja teksta "pakeista"
$('.container').prepend(x.text("pakeistas"));
