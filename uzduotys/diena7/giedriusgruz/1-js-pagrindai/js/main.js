console.log("labas");

var adresas = "Kaunas, Savanoriu pr. 163";
console.log ( adresas);

adresas = "Kaunas, Gudu g. 2";
console.log( adresas );

console.log("Mano adresas: ", adresas);

var x = 100;
var V2ardas22435 = 1;
var X = 2;
var y = 10;
var atsakymas = 0;

atsakymas = (x + X + y) / 2;
console.log ( atsakymas );

var k = "99";
atsakymas = k + x;
console.log( atsakymas );

// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================


//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
var vardas = "Romas";
var pavarde = "Romanovas";
var amzius = 32 ;
var atlyginimas = 750 ;
console.log( vardas, pavarde, amzius, atlyginimas );

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" , kuri atspausdina i konsole pirmos uzduoties kintamuosius
function printvardaspavardeamziusatlyginimas() {
console.log( "vardas:", vardas );
console.log( "pavarde:", pavarde );
console.log( "amzius:", ++amzius );
console.log( "atlyginimas:", atlyginimas-- );
console.log( "atlyginimas:", atlyginimas );
}
printvardaspavardeamziusatlyginimas();
//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus uzduotis 1 kintamajam - atlyginimas)
function printMetinisPajamuDydis() {
    var x = 12;
    console.log( "metines pajamos: ", x * atlyginimas );
}
printMetinisPajamuDydis();

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
var salis = "Anglija: ";
var miestas = " Mancesteris, ";
var adresas = " Brocket way 15 ";
var pastoKodas = " N3 W5, 18 ";
function printAddressData () {
    console.log( salis, miestas, adresas, pastoKodas );
}
printAddressData ( );
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");

function printTekstas( x ) {
    console.log ( x );
}
printTekstas( "galim eiti pietauti" );

// 6. sukurti funkcija, kuri sudaugina du paduotus skaicius
function daugyba ( x1, x2 ) {
console.log( x1*x2 );
// arba
console.log( " sudauginus skaicius ");
// arba
console.log(" sudauginus skaicius: ", x1, " ir ", x2, "atsakymas yra =", x1*x2);
}
daugyba (50, 10);
daugyba (5, 0.5);
daugyba (50, -10);
// daugyba (5, labas);

// 7 uzduotis
// f-ja kuri paskaiciuoja trikampio ilgaja krastine (Pitagoro teorema)
//  pitagoro Teorema(x,y) x*x + y*y
var ats = Math.sqrt(x);

function teorema( x, y ) {
var teorema = (x*x) + (y*y);
teorema = Math.sqrt( teorema );
console.log( teorema );
// arba
console.log( Math.sqrt ( x*x + y*y ));
}
teorema(2, 3)
