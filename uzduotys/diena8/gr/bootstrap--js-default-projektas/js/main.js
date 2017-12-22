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
function amzius() {
    var txt;
    var x = prompt("Prašome įvesti savo amžių:");
    if (x == null || x == "") {
        txt = "Sugrįžkite kai prisiminsite";
    } else {
        bandau(x);
    }
}



function bandau(x) {
if (x > 150) {document.querySelector(".container h1").innerHTML = 'NUSTOKITE MELUOTI';} else {
if (x <= 7) {
document.querySelector('.container h1').innerHTML = 'Pliušinės varlės';}
    else {if (x <= 14 & x > 7 ) {
        document.querySelector('.container h1').innerHTML = 'Mini telefonai';}
        else {if (x <= 18 & x > 14 ) {
            document.querySelector('.container h1').innerHTML = 'New Music App';}
            else {if (x <= 24 & x > 18 ) {
                document.querySelector(".container h1").innerHTML = 'Prisijunk prie Šaulių sąjungos';}
                else {if (x <= 64 & x > 24 ) {
                    document.querySelector(".container h1").innerHTML = 'Pensijos kaupimas = užsiregistruok';}
                    else {if (x >= 65 ) {
                        document.querySelector(".container h1").innerHTML = 'Kelionė į Birštoną';}
            }}
}}}}

if (x > 7 & x >= 65 & x < 150 ) {document.querySelector(".container h2").innerHTML = 'Šokoladiniai zuikučiai 20% nuolaida';} else {
    document.querySelector(".container h2").innerHTML = 'Niko nebus';
}}
// 2 UZDUOTIS
// sukurti 3 vardus "Tomas", "Paulius", "Airidas"
// kai "if"-ui padauodame Toma - isvesti "Masinoms 10% nuolaida"
// kai "if"-ui padauodame Pauliu - isvesti "Buitinei technikai  30% nuolaida"
// kai "if"-ui padauodame bet ka kita - isvesti "5% nuolaida kelionems"
var vardai = ["Tomas", "Paulius", "Airidas"];
function vardas(x) {
if ( x == vardai[0]) {
document.querySelector('.container h3').innerHTML = 'Mašinoms 10% nuolaida';
} else {if ( x == vardai[1]) {
    document.querySelector('.container h3').innerHTML = 'Buitinei technikai 30% nuolaida';
} else {
    document.querySelector('.container h3').innerHTML = '5% nuolaida kelionėms';
}



}}
vardas("sa");
