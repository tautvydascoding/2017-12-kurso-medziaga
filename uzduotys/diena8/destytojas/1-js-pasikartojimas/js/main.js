console.log("Labas");



// ===================pasikartoti  F-jas===================
//  01 UZDUOTIS
// sukurti 3 Globalius kintamuosius:  vardas , pavarde, klase   (ir jiems priskirti reiksmes):
// atspausdinti visus kintamuosius
var vardas , pavarde, klase;
vardas = "tomas";
pavarde = "tomulaitis";
klase = 7;
console.log(vardas, pavarde, klase);

// var false true null

//  02 UZDUOTIS
// sukurti funkcijas:
// printName()  printLName(), printClass() ,
// kurios atspausdina i konsole pirmos uzduoties kintamuosius

function printName() {
    console.log(vardas);
}

function printLName() {
    console.log(pavarde);
}

function printClass() {
    console.log(klase);
}
printClass();
printLName();
printName();

//  03 UZDUOTIS
// parasyti f-ja printVardasPavardeKlase(name, lname, klase)
// kuria iskviesti 3 kartus su skirtingais zmoniu vardasi ir pavardem

function  printVardasPavardeKlase(name, lname, klase) { // local
    console.log(name, lname, klase);
}
printVardasPavardeKlase("jonas", "jonauskas", 2  );

// ==============================================





//======================TEKSTO ISVEDIMAS===============
// UZDUOTIS
// Issimeginti komandas:

// document.write("Mano <b class='bg-info'> 222</b> ");

// window.alert("alabas");
// alert("Viso");
// console.log( window.vardas );
// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);

//=======================================
//  0 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas:  999.00 , 13.49, 100.05
//  ir vietoj x irasyti, koki nors teksta pvz: printKaina( 999.00);

function printKaina(x) {
    console.log(x);
}
printKaina(9999.00);
printKaina(123.05);
printKaina(13.21);

// 1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)
function pazymiuVidurkis() {
    var suma = 5 + 10 + 8 + 6 + 8;
    var vidurkis = suma / 5;
    console.log( vidurkis);
}
pazymiuVidurkis();

// 1.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis1(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis1(x1, x2, x3, x4, x5) {
    var suma = x1 + x2 + x3 + x4 + x5;
    var vid = suma / 5;
    console.log("vidurkis: ", vid);
}
pazymiuVidurkis1(5, 10 , 8 , 6 , 8);
pazymiuVidurkis1(9, 9 , 9 , 9 , 9);
pazymiuVidurkis1(4, 4 , 4 , 5 , 5);

// 1.2 UZDUOTIS
// parasyti f-ja "getPazymiuVidurkis2(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")
function getPazymiuVidurkis2(x1, x2, x3, x4, x5) {
    // var suma = x1 + x2 + x3 + x4 + x5;
    // var vid = suma / 5;
    // arba
    var vidurkis = (x1 + x2 + x3 + x4 + x5) / 5;  // local
    return vidurkis;
}
var vid = getPazymiuVidurkis2(1, 10, 1 );
console.log("vidurkis su return: ", vid);


function getAtlyginimas() {
    var alga = 5 * 8  * 21;  // localus   840
    return alga;
}
var x = getAtlyginimas();         // 840
console.log("metines pajamos", x);// "metines pajamos 840"

function getName() {
    var vardas = "testas";
    return  vardas;

    var vardas = "Justinas"; // neivyks
}
var x = getName();
console.log(x);

// 1.3 UZDUOTIS   ????/?
// parasyti f-ja "getPazymiuVidurkis()", kuriai galima paduoti 5 kintamuosius ir jie turi default/isankstine reiksmes "0",
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu

function getPazymiuVidurkis3(x1 = 0, x2 = 0, x3 = 0, x4 = 0, x5 = 0) {
    var vidurkis = (x1 + x2 + x3 + x4 + x5) / 5;  // local
    return vidurkis;
}
var vid = getPazymiuVidurkis3(1, 10, 1 );
console.log("vidurkis su return: ", vid);

//=============FOR   LOOP====================

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skiacius 50)

    for (var i = 0; i < 50; i++) {
         console.log("azuolas", i);
    }

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  innerHTML pagalba

for( var i = 0; i < 20; i++) {
    // document.write("<h2> Azuolas</h2>" + i); // i ekrana narsykleje isves
    document.querySelector('section').innerHTML += "Azuolas<br>";

    // var x = 10;
    // x = x + 1;  // x = 11
    // x += 1;     // x = x + 1;
}
// kiek uzdirbsime per 20 metu , uzdirbdami 680 return, kai alga i menesi pakyla 2%
var kiekMenesiu = 20 * 12;
var menAtlyginimas = 680;
var algosPokytis = 1;  // 2%
for (var i = 0; i < kiekMenesiu; i++) {
      var padidejimas = (menAtlyginimas * algosPokytis) / 100; // 1 men = 13.60, 2 men ~14eur
         // console.log( "padidejimas:", padidejimas );
      menAtlyginimas = menAtlyginimas +  padidejimas;
          // console.log( "menAtlyginimas:", menAtlyginimas );
}
console.log("po dvidesimt metu gausime", menAtlyginimas + padidejimas);


// 2 A UZDUOTIS
// sukurti f-ja printX(xx) i browser langa
function pritX(tekstas) {
    console.log( tekstas );
}
// pritX("karolis");
// 2B UZDUOTIS
// paleisti f-ja printX 100 kartu
for (var i = 0; i < 100; i++) {
    pritX( "alga: " + (680 + i) );
}


// 3.0
// isisvesti straipsni

//  3 UZDUOTIS
// paleisti f-ja printX 12 kartu ir atspausdinti <img ...

// 4 UZDUOTIS
// sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);  i konsole




//
