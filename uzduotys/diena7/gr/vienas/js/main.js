var x = 100;
var vienas = 1;
var du = 2;
var simtas = "100";

ats = (x + vienas + du) / 2;
console.log( ats );
atsakymas = (simtas + vienas + du);
console.log( atsakymas );
typeof( x );
console.log( typeof( x ) );

var vardas = "Giedrius";
var pavarde = "Rakauskas";
var amzius = 23;
var alga = 100;
uzd1 = vardas + pavarde + amzius;
mpd = 12 * alga;
var salis, miestas, adresas, pk;
salis ="Lietuva";
miestas = "Kaunas";
adresas = "Gal 33";
pk = "27569";
console.log( uzd1, mpd );
function uzd4() {
    console.log(salis);
    console.log(miestas);
    console.log(adresas);
    console.log(pk);
}
console.log(uzd4());
function uzd5() {
    console.log(x);
}
x = uzd4();
console.log(uzd5());

// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus uzduotis 1 kintamajam - atlyginimas)




//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius


//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
function busmatyt(x) {
    console.log(x);
}
busmatyt("Jokubo istorijos");
