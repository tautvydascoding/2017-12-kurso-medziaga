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
//
// } else if (salyga) {
//
// } else {
//     // ?
// }

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


// var age = 65;
// if (age < 7) {
//     console.log("Pliusines varles");
//     console.log("Sokoladiniai zuikuciai 20% nuolaida");
// } else { if (age < 14) {
//     console.log("Mini telefonai");
// } else { if (age < 18) {
//     console.log("new Music App");
// } else { if (age < 24) {
//     console.log("Stok i sauliu sajunga");
// } else { if (age < 65) {
//     console.log("Pensijos kaupimas - zusiregistruok");
// }
// else {
//     console.log("kelione i Bristona");
//     console.log("Sokoladiniai zuikuciai 20% nuolaida");
// }
// }
// }
// }
// }

var age = 14;
if (age < 7 || age >= 65) {
    console.log("Sokoladiniai zuikuciai 20% nuolaida");
    if (age >= 65) { console.log("kelione i Bristona");
    }
    else {console.log("Pliusines varles");}
}

else if (age < 14) {
    console.log(age);
    console.log("Mini telefonai");
} else if (age < 18) {
    console.log(age);
    console.log("new Music App");
} else if (age < 24) {
    console.log(age);
    console.log("Stok i sauliu sajunga");
} else if (age < 65) {
    console.log("Pensijos kaupimas - zusiregistruok");
}
else {
    console.log(age);
    console.log("Sokoladiniai zuikuciai 20% nuolaida");
}


// 2 UZDUOTIS
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
