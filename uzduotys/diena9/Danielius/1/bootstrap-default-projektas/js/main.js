console.log("labas");

// ===================pasikartoti===================
 // 01 UZDUOTIS
// sukurti 2 kintamuosius  "vardas" lygius skirtingoms reiksmes ("tomas" ir "Jurgis")
//  viena sukurti paprastai, kita savo f-jos printName() viduje
// pabandyti abu atspausdinti i konsole
var vardas = "Tomas";
function printName() {
    var vardas = "Jurgis";
    console.log(vardas);
}
console.log(vardas);
printName();

// 02 UZDUOTIS
// parasyti f-ja "getPelnas(pajamos, mokesciai, mokesciai2)", kuri apskaiciuoja pelna
// is  paduotu pajamu atimdama paduotus mokescius, ir poto vel atimdama mokescius2
// pajamos 1500, mokesciai 2.5%, mokesciai2  1.5%
function getPelnas(pajamos, mokesciai, mokesciai2) {
    var pajmok = pajamos - ((pajamos * mokesciai)/100);
    var pelnas = pajmok - ((pajmok * mokesciai2)/100);
    // console.log(pelnas);
    return pelnas;
}
var x = getPelnas(1500, 9, 15);
console.log("pelnas: ", x);


// IF trumpesnis budas
// (salyga) ? jei true : jei false;
// (salyga) ? pintVardas() : pintError();

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

function printDuomenys(x) {
document.write(x);
}
printDuomenys("<h2>BMW pinga, nes daugeja</h2>");
printDuomenys("<h2>isdjgiosjfskf</h2>");
printDuomenys("<h2> iodfjsfjsuifjdsufj </h2>");
//  1.2 UZDUOTIS
//  sukurti funkcija "printStraipsnis(x)" ,
//  kuri atspausdina i DOM-a (ekrana) "x" reiksme

//  1.3 UZDUOTIS
//  iskviesti f-jaS 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipnsnius:  "Lorem1 ....",   "Lorem2 ....",   "Lorem3 ....",


//=======================================
