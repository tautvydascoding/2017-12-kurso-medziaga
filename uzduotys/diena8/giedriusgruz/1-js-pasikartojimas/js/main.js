console.log("Labas");

// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================


// ===================pasikartoti  F-jas===================
//  01 UZDUOTIS
// sukurti 3 Globalius kintamuosius:  vardas , pavarde, klase   (ir jiems priskirti reiksmes):
// atspausdinti visus kintamuosius
var vardas = "Jonas";
var pavarde = "Jonaitis";
var klase = "6"
console.log(vardas, pavarde, klase);
// arba galima var vardas, pavarde, klase;
//  ir tada priskirti vard

//  02 UZDUOTIS
// sukurti funkcijas:
// printName()  printLName(), printClass() ,
// kurios atspausdina i konsole pirmos uzduoties kintamuosius
function printName () {
    console.log(vardas);
}
printName ();

function printLName (){
    console.log(pavarde);
}
printLName ();

function printClass() {
    console.log(klase);
}
printClass ();

//  03 UZDUOTIS
// parasyti f-ja printVardasPavardKlase(name, lname, klase)

// ==============================================
function printVardasPavardKlase() {
    console.log(vardas, pavarde, klase);
}
printVardasPavardKlase ();
// arba galima

function  printVardasPavardKlase1(name, lname, klase) {
    console.log(name, lname, klase);
}
printVardasPavardKlase1("Jonas", "Jonaitis", 2);

//======================TEKSTO ISVEDIMAS===============
// UZDUOTIS
// Issimeginti komandas:

// document.write("Mano tekstas <b class='bg-info'> su js</b>");
// pasimato html

// window.alert("alabas");
// alert("Viso");
console.log( window.vardas );

// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);


//=======================================
//  0 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas:  999.00 , 13.49, 100.05
//  ir vietoj x irasyti, koki nors teksta pvz: printKaina( 999.00);

function printKaina ( x ) {
    console.log( x );
    }
printKaina (10);
printKaina (15);
printKaina (38);

// 1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis () {
var suma = 5 + 10 + 8 + 6 + 8;
var vidurkis = suma / 5;
console.log( vidurkis );
}
pazymiuVidurkis ();

// 1.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis1( x1, x2 , x3, x4, x5 ) {
var suma =  x1 + x2 + x3 + x4 + x5;
var  vidurkis = suma / 5;
console.log( vidurkis );
}
pazymiuVidurkis1 ( 5, 10 , 8 , 6 , 8);
pazymiuVidurkis1 ( 3, 17 , 4 , 9 , 4);
pazymiuVidurkis1 ( 1, 2 , 7 , 9 , 8);

// 1.2 UZDUOTIS
// parasyti f-ja "getPazymiuVidurkis(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")

function pazymiuVidurkis4( x1, x2 , x3, x4, x5 ) {
var vidurkis =  (x1 + x2 + x3 + x4 + x5) / 5;
return vidurkis;
}
var x = pazymiuVidurkis4 (2, 4, 6, 8, 11);
console.log( "pazymiu vidurkis", x);



function getName() {
    var vardas = "testas";
    return vardas;

    var vardas = " Justinas";
    // return neleis rodyti vardas, o rodys Testas
}
var x = getName ();
console.log(x);


function getAtlyginimas () {
    var alga =  5 * 8 * 21;
    return alga;
    console.log( vidurkis );
    }
var x = getAtlyginimas ();
console.log( "metinis atlyginimas", x);

// 1.3 UZDUOTIS   ????/?
// parasyti f-ja "getPazymiuVidurkis()", kuriai galima paduoti 5 kintamuosius ir jie turi default/isankstine reiksmes "0",
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu

function pazymiuVidurkis6( x1 = 122, x2 = 113, x3 = 989, x4 = 554, x5 = 777) {
var vidurkis =  (x1 + x2 + x3 + x4 + x5) / 5;
return vidurkis;
}
var x = pazymiuVidurkis6 (1, 3, 9, 4, 17);
console.log( "vidurkis su return", x);


//=============FOR   LOOP====================

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skiacius 50)

for (var i = 0; i < 50; i++) {
   console.log( "azuolas", i);
}

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  INNERHTML pagalba

for (var i = 0; i < 20; i++) {
// document.write( "<h2> Azuolas </h2>");
document.querySelector('section').innerHTML += "Azuolas<br>"
}


// UZDUOTIS
// kiek uzdirbsime per 20metu, uzdirbdami 680return. kai
// alga i menesi pakyla 2%

var kiekMenesiu = 20 * 12;
var menAlga = 680;
var algosPokytis = 2;
for (var i = 0; i < kiekMenesiu; i++){
    var padidejimas = (menAlga * algosPokytis) / 100;
    menAlga = (menAlga + padidejimas );
}
console.log( "po dvidesimties metu gausime", menAlga);
console.log( "padidejimas", padidejimas);


// 2 A UZDUOTIS
// sukurti f-ja printX(xx) i browser langa
function printX( tekstas ) {
    console.log( tekstas);
}
// printX("Karolis");
// 2B UZDUOTIS
// paleisti f-ja printX 100 kartu
for (var i = 0; i < 100; i++) {
    printX( "alga:" + (680 + i));
    // console.log( "alga:", 680 + i);
}
// paleisti f-ja printX 12 kartu ir atspausdinti <img ...

// 4 UZDUOTIS
// sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);  i konsole




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
