// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================


// ===================pasikartoti  F-jas===================
//  01 UZDUOTIS
// sukurti 3 Globalius kintamuosius:  vardas , pavarde, klase   (ir jiems priskirti reiksmes):
// atspausdinti visus kintamuosius
var vardas = "Giedrius";
var pavarde = "Rakauskas";
var klase = "1";
console.log(vardas, pavarde, klase);
//  02 UZDUOTIS
// sukurti funkcijas:
// printName()  printLName(), printClass() ,
// kurios atspausdina i konsole pirmos uzduoties kintamuosius
function v() {
    console.log(vardas);
}

function p() {
    console.log(pavarde);
}

function kl() {
    console.log(klase);
}
v();
p();
kl();

//  03 UZDUOTIS
// parasyti f-ja printVardasPavardKlase(name, lname, klase)

// ==============================================
function visi3() {
    console.log(vardas, pavarde, klase);
}
visi3();
//======================TEKSTO ISVEDIMAS===============
// UZDUOTIS
// Issimeginti komandas:

// document.write("Mano tekstas su js");
document.write("Mano tekstas pagal uzduoti");
// window.alert("alabas");
window.alert("Sveiki");
// alert("Viso");
alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda");
var issokantislangas = prompt("vardas pls");
// console.log(ivestasTekstas);
console.log(issokantislangas);
//=======================================
//  0 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
function uzd0(x) {
    console.log(x);
}

//  kuri atspausdina i konsole "x" reiksme

//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas:  999.00 , 13.49, 100.05
uzd0(990);
uzd0(13.49);
uzd0(100.05);
//  ir vietoj x irasyti, koki nors teksta pvz: printKaina( 999.00);

// 1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)
function uzd1(x, y, z, q, w) {
    console.log((x + y + z + q + w) / 5);
}
uzd1(5, 10, 8, 6, 8);
// 1.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

// 1.2 UZDUOTIS
// parasyti f-ja "getPazymiuVidurkis(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")
function uzd12(x, y, z, q, w) {
    var ats = ((x + y + z + q + w) / 5);
    console.log(ats);
    return ats;
}
uzd12(10, 8, 7, 6, 5);
//PITAGORO PVZ
function pitagoroteorema(x, y) {
    var z = (x * x + y * y);
    var t = Math.sqrt(z);
    console.log(t);
}
pitagoroteorema(2, 2);
// 1.3 UZDUOTIS   ????/?
// parasyti f-ja "getPazymiuVidurkis()", kuriai galima paduoti 5 kintamuosius ir jie turi default/isankstine reiksmes "0",
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
var x1, x2, x3, x4, x5 = null;

function uzd13(x1, x2, x3, x4, x5) {
    var ats = (x1 + x2 + x3 + x4 + x5) / 5;
    console.log(ats);
    return ats;
}
uzd13(1, 2, 3, 4, 5);
//=============FOR   LOOP====================

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skiacius 50)
function uzduotis1(medis) {
    for (var i = 0; i < 50; i++) {
        console.log(medis);
    }

}
uzduotis1("azuolas");
// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  INNERHTML pagalba
function uzduotis12(medis) {

    for (var i = 0; i < 50; i++) {
    document.getElementById("yolo").innerHTML += medis;
    }
}
uzduotis12('azuolas');
// 2 A UZDUOTIS
// sukurti f-ja printX(xx) i browser langa
function uzd2(i) {
    document.getElementById("yolo").innerHTML += i;

}
// 2B UZDUOTIS
// paleisti f-ja printX 100 kartu
for (var i = 0; i < 100; i++) {
uzd2('nebeeezinau <br>');
}
//  3 UZDUOTIS
// paleisti f-ja printX 12 kartu ir atspausdinti <img ...
function uzd3(y) {
for (var i = 0; i < 12; i++) {
uzd2('gal jau zinau <br>');
}
document.getElementById("yolo").innerHTML += y;
}
uzd3('<img src="+" alt="cia bus paveiksliukas">');
// 4 UZDUOTIS
// sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);  i konsole

    function uzd4() {
    document.write('<br>');
    for (var i = 0; i < 60; i++) {
        document.write('-');
}
for (var i = 0; i < 60; i++) {
    document.write('<br>|');}
}
uzd4();


function konsole() {
    for (var i = 0; i < 60; i++) {
        console.log("-");
}
for (var i = 0; i < 60; i++) {
    console.log('<br>|');}

}
konsole();

// BANDAU NUO LENTOS LENTELE DARYTI //
//LINIJA
function linija() {
    for (var i = 0; i < 80; i++) {
    document.write('-');}
}
// Vardas pavarde

// Zemyn stulpelis
function stulpas() {
    for (var i = 0; i < 20; i++) {
    document.write('<br>|');}
}
linija();
document.write('<br>Vardas           Pavarde<br>');
linija();
stulpas();
// kiek uzdirbsi po 20m, nuo 680euriuku, kai pakyla po 2proc.
 var km = 12;
 var ma = 680;
 var ap = 2;
 for (var i=0; i < km; i++) {
     padidejimas = (ma * ap) / 100;
     ma = padidejimas + ma;
 }
 console.log("po 20m gausiu", ma);
