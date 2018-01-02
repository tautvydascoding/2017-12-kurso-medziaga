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

// jei vardai sutampa, i konsole isvesti, kad sutampa,
// jei ne - kad nesutampa

var Vardas1="Domas"; Vardas2="Tomas";
if (Vardas1==Vardas2) {
console.log("Sutampa:", Vardas1, "su", Vardas2);
} else {
console.log("Nesutampa:", Vardas1, "su", Vardas2);
}

var Vardas1="Tomas"; Vardas2="Domas";
if (Vardas1==Vardas2) {
        console.log("Sutampa:", Vardas1, "su", Vardas2);
        if (Vardas1="Tomas") {
        console.log("Labas Tomai");
        }
} else {
        console.log("Nesutampa:", Vardas1, "su", Vardas2);
        if (Vardas1="Tomas") {
        console.log("Labas Tomai");
        }
}

var Vardas1="Tomas"; Vardas2="Domas";
if (Vardas1==Vardas2) {
console.log("Sutampa:", Vardas1, "su", Vardas2);
} else if (Vardas1=="Tomas") {
console.log("Labas Tomai");
 } else {
console.log("Nesutampa:", Vardas1, "su", Vardas2);
}


// else if

var Vardas1="Tomas"; Vardas2="Domas";
if (Vardas1==Vardas2) {
console.log("Sutampa:", Vardas1, "su", Vardas2);
} else {
console.log("Nesutampa:", Vardas1, "su", Vardas2);
if (Vardas1="Tomas") {
console.log("Labas Tomai");
}
}

var vardas3="Tomas"; vardas4="Karolis";
if (vardas3 == "Tomas" && vardas4 == "Karolis") {
    console.log("Labas Tomai ir Karoli");
}

var vardas3="Tomas"; vardas4="Karolis";
if (vardas3 == "Tomas" || vardas4 == "Karolis") {
    console.log("Labas Tomai ir Karoli");
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
