console.log("Labas");


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
//    // kodas
// } else if (salyga) {
//
// } else {
//     // ?
// }

// A uzduotis
// susikurti : vardas1 = "Tomas", vardas2 = "Antanas"
// patikrinti:
// jeigu vardai sutampa, i konsole pranesti apie tai
// jeigu vardai nesutampa - parasysi "vardai yra skirtingi"

var vardas1 = "Karolis";
var vardas2 = "Karolis";

if (vardas1 == vardas2) {
    console.log(vardas1, vardas2);
    console.log("vardai sutampa");
} else {   // priesingu atveju
    console.log(vardas1, vardas2);
    console.log("vardai yra skirtingi");
}

// B
// Papildomai patikrinti uzdavini A.
// Jeigu vardas1 yra "Tomas" - pasisveikinti su juo

var vardas1 = "Karolis";
var vardas2 = "Tomas";

if (vardas1 == vardas2) {
    console.log(vardas1, vardas2);
    console.log("vardai sutampa");
} else if (vardas1 == "Tomas") {
    console.log("Labas Tomai");
} else {// priesingu atveju
    console.log(vardas1, vardas2);
    console.log("vardai yra skirtingi");
}
// C
// Patikrinti ar varda1 yra "Tomas", IR butinai vardas2  yra "Karolis"
var vardas1 = "Karolis";
var vardas2 = "Tomas1111";

// || - arba
if (vardas2 == "Tomas"  && vardas1 == "Karolis" ) {
    console.log("Labas Tomai ir Karoli");
}
// D
// Patikrinti ar bent vienas is vardu "Tomas"
// || - arba
if (vardas2 == "Tomas"  || vardas1 == "Tomas" ) {
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
