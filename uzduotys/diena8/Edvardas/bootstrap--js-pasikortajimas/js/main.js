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

var vardas = "Romanas"
var pavarde = "Romanovas"
var klase = "10"
console.log(vardas, pavarde, klase)

//  02 UZDUOTIS
// sukurti funkcijas:
// printName()  printLName(), printClass() ,
// kurios atspausdina i konsole pirmos uzduoties kintamuosius
function printName(){
    console.log(vardas);

}
function printLastName(){
    console.log(pavarde);

}
function printclass(){
    console.log(klase);

}
printName();
printLastName();
printclass();





//  03 UZDUOTIS
// parasyti f-ja printVardasPavardKlase(name, lname, klase)


function printVardasPavardeKlase(name, LastName, klase) {
console.log(name, LastName, klase);

}
printVardasPavardeKlase("jonas", "jonauskas", 2);





//======================TEKSTO ISVEDIMAS===============
// UZDUOTIS
// Issimeginti komandas:

// document.write("Mano tekstas su js");
// window.alert("alabas");
// alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);

// document.write("Mano tekstas <B class='bg-info'>22</b> ");
// window.alert("alabas");
// alert("viso");
// console.log( window.vardas );
var ivestastekstas = prompt("edvardas");
console.log(ivestastekstas);
//=======================================
//  0 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,
//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas:  999.00 , 13.49, 100.05
//  ir vietoj x irasyti, koki nors teksta pvz: printKaina( 999.00);
function printKaina(x){
    console.log(x);
}
printKaina(999);
printKaina(5464);
printKaina(5146);


// 1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)
function pazymiuVidrukis(){
    var suma = 5+10+8+6+8;
    var vidurkis = suma / 5;
    console.log(vidurkis);
}


// 1.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)
function pazymiuVidurkis1(x1, x2, x3, x4, x5){
    var suma=x1+x2+x3+x4+x5
    var vidurkis=suma/5;
    console.log("vidurkis:",vidurkis)



}
pazymiuVidurkis1(5, 10 , 8 , 6 , 8)
pazymiuVidurkis1(2, 6 , 8 , 4, 8)
pazymiuVidurkis1(5, 2 , 8 , 1 , 8)
pazymiuVidurkis1(5, 4 , 5 , 5 , 4)

// 1.2 UZDUOTIS
// parasyti f-ja "getPazymiuVidurkis(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")
function pazymiuVidurkis2(x1, x2, x3, x4, x5){
    var suma=x1+x2+x3+x4+x5
    var vidurkis=suma/5;
    console.log(vidurkis)



}
pazymiuVidurkis2(5, 10 , 8 , 6 , 8)
pazymiuVidurkis2(2, 6 , 8 , 4, 8)
pazymiuVidurkis2(5, 2 , 8 , 1 , 8)
pazymiuVidurkis2(5, 4 , 5 , 5 , 4)


// 1.3 UZDUOTIS   ????/?
// parasyti f-ja "getPazymiuVidurkis()", kuriai galima paduoti 5 kintamuosius ir jie turi default/isankstine reiksmes "0",
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
function getPazymiuVidurkis(x1, x2, x3, x4, x5){
var vidurkis=(x1+x2+x3+x4+x5) /5;
return vidurkis;
}
var vidurkis=getPazymiuVidurkis(2,2,2,2,8);
console.log("vidurkis su return:",vidurkis);

function getName(){
var vardas="testas";
return vardas;
var vardas = "Justinas" //neivyks
}
var x = getName();
console.log(x);

function getAtlyginimas() {
var alga = 5 * 8 *21; //localus 842
return alga;
}
var x=getAtlyginimas(); //840
console.log("metines pajamos",x); //metines pajamos 840


//=============FOR   LOOP====================

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skiacius 50)
for (var i = 0; i < 50; i++) {
    console.log("azuolas", i+1);

}

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  INNERHTML pagalba
for (var i = 0; i < 60; i++) {
    document.write("<h2>Azuolas</h2>"+i)
    document.querySelector('section').innerHTML="sekcija<br>"; //iskelia ant ekrano zodi
    // var x =10;
    // x=x+1; // x=11
    // x+=1; //x=x+1

}
// kiek uzdirbsime per 20 metu,uzdirbdami 680 return,kai alga i menesi 2%
var kiekMenesiu= 20*12;
var menAtlyginimas=680;
var pokytis=2; //%
for (var i = 0; i <kiekMenesiu ; i++) {
    var padidejimas=(menAtlyginimas * pokytis) /100;
    console.log("padidejimas:",padidejimas)
    menAtlyginimas=menAtlyginimas+padidejimas;
    console.log("menAtlyginimas:",menAtlyginimas);

}
console.log("po dvidesimt metu",menAtlyginimas+padidejimas)
console.log("per dvidesimt metu gausime",menAtlyginimas);

// 2 A UZDUOTIS
// sukurti f-ja printX(xx) i browser langa
function printX(tekstas){
    console.log(tekstas);


}
// printX("karolis");

// 2B UZDUOTIS
// paleisti f-ja printX 100 kartu
for (var i = 0; i < 100; i++) {
    printX("alga:"+ (680 + i));
    // console.log("alga:", 680 + i);

}

//  3 UZDUOTIS
// paleisti f-ja printX 12 kartu ir atspausdinti <img ...

// 4 UZDUOTIS
// sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);  i konsole
