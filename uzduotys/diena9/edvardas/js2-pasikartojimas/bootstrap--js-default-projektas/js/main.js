console.log("Labas");


// ===================pasikartoti===================
 // 01 UZDUOTIS
// sukurti 2 kintamuosius  "vardas" lygius skirtingoms reiksmes ("tomas" ir "Jurgis")
//  viena sukurti paprastai, kita savo f-jos printName() viduje
// pabandyti abu atspausdinti i konsole
var vardas1="Edvardas";
var vardas2="Tomas";
function printName(){
    console.log(vardas1,vardas2);
}
printName();


// 02 UZDUOTIS
// parasyti f-ja "getPelnas(pajamos, mokesciai, mokesciai2)", kuri apskaiciuoja pelna is  paduotu pajamu atimdama paduotus mokescius, ir poto vel atimdama mokescius2
// pajamos 1500, mokesciai 2.5%, mokesciai2  1.5%
function getPelnas(pajamos,mokesciai,mokesciai2){
    var pelnas=0;
    pelnas=pajamos-mokesciai-mokesciai2;
    console.log(pelnas);

}
getPelnas(1500,2.5,1.5);




function getPelnas2(pajamos,mokesciai,mokesciai2){
    var pelnas=0;
    pelnas=pajamos-mokesciai-mokesciai2;
    return pelnas;


}
var x=getPelnas2(2000,20,1.5);
console.log("pelnas:",x);

// IF trumpesnis budas
// (salyga) ? jei true : jei false;
// (salyga) ? pintVardas() : pintError();
var x=10;
var y=0;
(x==10)? y=1:y=-1;
console.log(y);

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
