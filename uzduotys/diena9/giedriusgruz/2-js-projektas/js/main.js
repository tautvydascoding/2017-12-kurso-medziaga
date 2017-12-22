console.log("Labas");
// ===================pasikartoti===================
 // 01 UZDUOTIS
// sukurti 2 kintamuosius  "vardas" lygius skirtingoms reiksmes ("tomas" ir "Jurgis")
//   f-jos printName() viduje pabandyti abu atspausdinti i konsole

var vardas = "Tomas";
var vardas1 = "Jurgis";
function printName() {
    console.log(vardas, vardas1);
}
printName ();

// 02 UZDUOTIS
// parasyti f-ja "getPelnas(pajamos, mokesciai, mokesciai2)", kuri apskaiciuoja pelna is  paduotu pajamu atimdama paduotus mokescius, ir poto vel atimdama mokescius2
// pajamos 1500, mokesciai 2.5%, mokesciai2  1.5%

// IF trumpesnis budas
// (salyga) ? jei true : jei false;
// (salyga) ? pintVardas() : pintError();
var x = 10;
var y = 0;
(x == 999) ? y = 1  :  y = -1;
console.log(y);


function getPelnas(pajamos, mokesciai, mokesciai2) {
    var pelnas = 0;
    pelnas = pajamos - mokesciai - mokesciai2;
    console.log(pelnas);
}
getPelnas(1500, 2.5, 1.5);

// Kitas variantas

function getPelnas2(pajamos, mokesciai, mokesciai2) {
    var pelnas = 0;
    pelnas = pajamos - mokesciai - mokesciai2;
    return pelnas;
}
var x = getPelnas2 (2000, 20, 1.5);
console.log( "pelnas: ", x, "euru");

// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja

function printDuomenys() {
    var vardas = "Tomas";
    console.log(vardas);
}
printDuomenys ();

//   UZDUOTIS  B
//  pabandykite i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;

var x = "vardas";
console.log( x );

//================local && global=========
//var x = "x global";
//function testLocalVar() {
//    var y = "y local";
//    z = "z global";
//    console.log("x", x);
//    console.log("y", y);
//    console.log("z", z);
//}
//testLocalVar();
//console.log("x", x);
//console.log("z", z);
//console.log("y", y);  // error


//======================TEKSTO ISVEDIMAS===============

//=============IF====================

// 1 UZDUOTIS
// turesime vartotojo amziu
// var age = 24;
// gapal ji, turesiem isvesti tamtikra reklamos teksta

var age = 24;
if (age < 7 ) {
console.log("Pliusines varles");
} else if (age < 14) {
    console.log("Mini telefonai");
} else if (age < 18){
    console.log("new Music App");
} else if (age < 24){
    console.log("Stok i sauliu sajunga");
} else  if (age < 65){
    console.log("Pensijos kaupimas - zusiregistruok");
} else  {
console.log("kelione i Bristona");
}
// Salygos:

// iki 7 metu
// "Pliusines varles"
//
// nuo 7 iki 14
// "Mini telefonai"
//
// nuo 14 iki 18
// "new Music App"
//
// nuo 18 iki 24
// "Stok i sauliu sajunga"
//
// nuo 24 iki 65
// "Pensijos kaupimas - zusiregistruok"
// nuo 65
// "kelione i Bristona"
// sunkesne:
// iki 7 metu ir nuo 65 metu papildomai isvesti "Sokoladiniai zuikuciai 20% nuolaida"


var z = 10;               // IDEA:  Globalus ir ir po skliaustu
function printPavarde() {
var pavarde = "Petrov";   // IDEA: Lokalus - SKLIAUSTUOSE
console.log("z :", z);
console.log("pavarde: ", pavarde);
indai = "5 puodai";
}
printPavarde ();
console.log("indai:", indai);
// pries ir po skliaustu - GLOBALUS
// skliaustuose - LOKALUS



//  1.1 UZDUOTIS
//  sukurti funkcija "printAntraste(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes:  "BMW pinga, nes daugeja", "Greik pageres orai", "Vasaros vis salteja"

//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme

//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",
