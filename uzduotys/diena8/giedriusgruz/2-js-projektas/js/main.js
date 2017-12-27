console.log("Labas2");
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

// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja

//   UZDUOTIS  B
//  pabandykite i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;


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


//  1.1 UZDUOTIS
//  sukurti funkcija "printAntraste(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes:  "BMW pinga, nes daugeja", "Greik pageres orai", "Vasaros vis salteja"

//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme

//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",


//=======================================

// =================if  teorija====================

// if (salyga) {
//     // jei true
//     //
//     //
// } else {
//     // jei false
// }


// if ( salyga ) {
//     // jei salyga tenkinama
// }
//
// if ( salyga ) {
//     // jei salyga tenkinama
// } else {
//     // jei salyga netenkinama  / priesingu atveju
// }
//
// if (salyga) {
// kodas
// } else if (salyga) {
//
// } else {
//     // ?
// }

// UZDUOTIS A
//  susikurti: vardas1, vardas2
// patikrinti: jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu nesutampa - parasyti "vardai yra skirtingi"
var vardas1 = "Tomas";
var vardas2 = "Jonas";
if (vardas1 == vardas2) {
    console.log("vardai sutampa");
} else {
    console.log(vardas1, vardas2);
    console.log( "vardai yra skirtingi");
}


// UZDUOTIS B
// Papildomai patikrinti uzdavini A. Jeigu vardas yra "Tomas" - pasisveikinti su juo

var vardas1 = "Tomas";
var vardas2 = "Jonas";
if (vardas1 == vardas2) {
    console.log("vardai sutampa");
}
else if (vardas1 == "Tomas") {
    console.log( "Labas Tomai");
}
else {
    console.log(vardas1, vardas2);
    console.log( "vardai yra skirtingi");
}

// C
// Patikrinti ar vardas1 yra "Tomas", vardas2 yra "Jonas"

var vardas1 = "Tomas";
var vardas2 = "Jonas";
if (vardas1 == "Tomas" && vardas2 == "Jonas") {
    console.log("Labas Tomai ir Jonai");
}


// Patikrinti ar bent vienas is vardu "Tomas"

var vardas1 = "Tomas";
var vardas2 = "Jonas";
if (vardas1 == "Tomas" || vardas2 == "Tomas") {
    console.log("Labas Tomai");
}

//=============IF====================

// 1 UZDUOTIS
// turesime vartotojo amziu
// var age = 24;
// gapal ji, turesiem isvesti tamtikra reklamos teksta


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



// 2 UZDUOTIS
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
