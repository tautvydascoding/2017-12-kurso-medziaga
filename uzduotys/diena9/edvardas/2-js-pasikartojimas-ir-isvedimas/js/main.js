console.log("Labas");




// ===================pasikartoti===================
 // 01 UZDUOTIS
// sukurti 2 kintamuosius  "vardas" lygius skirtingoms reiksmes ("tomas" ir "Jurgis")
//   f-jos printName() viduje  pabandyti abu atspausdinti varda i konsole

var vardas1 = "Tomas";
function printName() {
    var vardas2 = "Jurgis"
    console.log(vardas1);
    console.log(vardas2);
}
printName();

// 02 UZDUOTIS
// parasyti f-ja "getPelnas(pajamos, mokesciai, mokesciai2)", kuri apskaiciuoja pelna is  paduotu pajamu atimdama paduotus mokescius, ir poto vel atimdama mokescius2
// pajamos 1500, mokesciai 2.5%, mokesciai2  1.5%
function getPelnas(pajamos, mokesciai, mokesciai2) {
    var pelnas = 0;
    pelnas = pajamos - mokesciai - mokesciai2;
    console.log(pelnas);
}
getPelnas(1500, 2.5, 1.5);

function getPelnas2(pajamos, mokesciai, mokesciai2) {
    var pelnas = 0;
    pelnas = pajamos - mokesciai - mokesciai2;
    return pelnas;
}
var x = getPelnas2(2000, 20, 1.5);
console.log("pelnas: ", x);

// IF trumpesnis budas
// (salyga) ? jei true : jei false;
// (salyga) ? pintVardas() : pintError();
var x =10;
var y = 0;
( x == 999) ?   y = 1    :   y = -1;
console.log(y);


// iki 7 metu
// "Pliusines varles"
// nuo 7 iki 14
// "Mini telefonai"
// nuo 14 iki 18
// "new Music App"
// nuo 18 iki 24
// "Stok i sauliu sajunga"
// nuo 24 iki 65
// "Pensijos kaupimas - zusiregistruok"
// nuo 65
// "kelione i Bristona"
// sunkesne:
// iki 7 metu ir nuo 65 metu papildomai isvesti "Sokoladiniai zuikuciai 20% nuolaida"
var age = 19;
if( age < 7 || age > 65 ) {
    console.log("Pliusines varles");
} else if ( age < 14){
    console.log("mini telefonai");
} else if ( age < 18){
    console.log("new music app");
} else if ((age>=18) &&(age<24)){
    console.log("stokita i siauliu sajunga");
} else if (age < 64) {
    console.log("pensiju kaupimas");
}





// ====================Scope====================
//   UZDUOTIS  A
// sukurti funkcija "printDuomenys()" ,
// funkcijoje sukurti kintamaji: var vardas = "Tomas"
// kuri  atspausdina i konsole  kintamaji "vardas"
// iskviesti f-ja

//   UZDUOTIS  B
//  pabandykite i konsole atspausdinti kintamaji "vardas"
//  console.log( vardas) ;
var indai="keptuve";
kedes="6 kedes"
var z=10; //global
function printPavarde() {
    var pavarde="petrov"; //local
    var z=12;
    console.log("z:",z);//10
    console.log("pavarde:",pavarde);//petrov
    indai="5 puodai";//!jeigu
}
printPavarde();
// console.log("z:",z);
// console.log(pavarde);
console.log("indai:", indai);


//================local && global=========
var x = "x global";
function testLocalVar() {
   var y = "y local";
   z = "z global";
   console.log("x", x);
   console.log("y", y);
   console.log("z", z);
}
testLocalVar();
console.log("x", x);
console.log("z", z);
console.log("y", y);  // error


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
