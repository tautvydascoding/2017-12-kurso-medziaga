console.log("Labas");


var adresas = "Kaunas, Savanoriu pr. 163";
console.log( adresas );

adresas = "Kaunas, Gudu g. 2";
console.log( adresas );


console.log("Mano adresas: ",  adresas);

var x = 100;
// var V2ardas22435 = 1;
var X = 2;
var y = 10;
var atsakymas = 0;

atsakymas = ((x + X + y)) / 2;
console.log(  atsakymas );


var k = "99";
atsakymas = k / x;
console.log( atsakymas );
// f-ja kuri isveda kintamojo tipa
// typeof( k );




// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================


//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
var vardas, pavarde, amzius, atlyginimas;
vardas = "tomas";
pavarde = "tomutaitis";
amzius = 21;
atlyginimas = 1000;
console.log( vardas,   pavarde, amzius, atlyginimas);
console.log("mano amzius: ", amzius);

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius() {
    console.log("vardas: ", vardas);
    console.log("pavarde: ", pavarde);
    console.log("amzius: ", ++amzius);
    console.log("atlyginimas: ", atlyginimas--);
    console.log("atlyginimas: ", atlyginimas);
}

printVardasPavardeAmzius();

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus uzduotis 1 kintamajam - atlyginimas)

function printMetinisPajamuDydis() {
    var x = 12;
    var ats = atlyginimas * x;
    console.log("metines pajamos:" , ats);
    // arba
    // console.log("metines pajamos:" ,  atlyginimas * 12);
}
printMetinisPajamuDydis();



//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

var 


//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");








//
