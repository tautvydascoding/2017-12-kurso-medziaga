console.log("Hello");
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
var vardas1, vardas2;
vardas1 = "Jonas";
vardas2 = "Kazys";

// if (vardas1 == vardas2) {
//     console.log("Sutampa");
// }
// else if (vardas1 == "Jonas") {
//     console.log("Labas, Jonai!");
// }
// else {
//     console.log("Vardai nesutampa!!!");
// }

if (vardas1 == "Jonas" || vardas2 == "Jonas") {
console.log("Vienas is vardu yra Jonas");
}
// else if (vardas2 == "Jonas") {
//     console.log("Vienas is vardu yra Jonas");
// }
else {
    console.log("Nei vienas is vardu nera Jonas");
}

if (vardas1 == "Jonas" && vardas2 == "Kazys") {
    console.log("Labas Jonai ir Kazy");
}
// else if (vardas1 == "Jonas") {
//     console.log("Labas, Jonai!");
// }





// turesime vartotojo amziu
var age = 6;
// gapal ji, turesiem isvesti tamtikra reklamos teksta
if (age < 7) {
    console.log("Pliusines varles");
    console.log("Sokoladiniai zuikuciai");

}else if (age >= 7 && age < 14) {
    console.log("Mini telefonai");
}else if (age >= 14 && age < 18) {
    console.log("new music app");
}else if (age >= 18 && age < 24 ) {
    console.log("stok i sauliu sajunga");
}else if (age >= 24 && age < 65) {
    console.log("Pensijos kaupimas");
}else if (age >= 65) {
    console.log("Kelione i Birstona");
    console.log("Sokoladiniai zuikuciai");
}

// nebutina visas salygas vienoj eilutej rasyt - pvz.:
// if (age < 7) } else if (age < 14)
// ------------------------------------------------

// if (age < 7 || age >= 65) {
//     console.log("Sokoladniai zuikuciai 20% nuolaida");
//     if (age > 65) {
//         console.log("KiB");
//     }else {
//         console.log("Pliusinai krokodilai");
//     }
// }

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


var v1, v2, v3;
v1 = "Tomas";
// v2 = "Paulius";
// v3 = "Airidas";

if (v1 == "Tomas") {
    document.write("<h2>Masinoms 10% nuolaida</h2>");
    console.log("Masinoms 10% nuolaida");
}else if (v1 == "Paulius") {
    console.log("Buitinei technikai 30% nuolaida");
}else {
    console.log("5% nuolaida kelionems");
}

// 2 UZDUOTIS
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
