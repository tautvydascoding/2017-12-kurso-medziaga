console.log("labas");
var adresas = "Kaunas, Savanoriu pr.162";
console.log(adresas);

adresas = "Kaunas, Gudu";
console.log(adresas);

console.log("mano adresas: ", adresas);

var x = 100;
// var vjkju8i = 1;
var X = 2;
var y = 10
var atsakymas = 0;

atsakymas = ((x + X + y)) / 2;
console.log(atsakymas);

var k = "99";
atsakymas = k + x;
console.log(atsakymas);

typeof (y);


// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================


//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas

var vardas = "Vardenis";
var pavarde = "Pavardenis";
var amzius = 99;
var atlyginimas = 100;

console.log(vardas, pavarde, amzius, atlyginimas);

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius () {
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

function printMetinisPajamuDydis () {
  var metinesPajamos = atlyginimas * 12;
  console.log("metines pajamos: ", metinesPajamos);
}

printMetinisPajamuDydis ();

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

var a = "salis";
var y = "miestas";
var z = "adresas";
var v = "pastoKodas";
function printAddressData () {

console.log(a, y, z, v);
}
printAddressData ()





//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");


function printTekstas(x) {

  console.log(x);
}
printTekstas (122);  //var x =122
printTekstas ('labas rytas');

//5 uzduotis
function DAUGYBA(x, y) {
console.log("sudauginus skaicius: ", x * y );
}
DAUGYBA (50, 10);
DAUGYBA (5, 0.5);
DAUGYBA (5, "labas");

//7 uzduotis (Pitagoro teorema)

function Pitagoro(x, y) {
  console.log("ilgoji krastine: ", Math.sqrt(x*x+y*y));
}
Pitagoro (2, 3);
