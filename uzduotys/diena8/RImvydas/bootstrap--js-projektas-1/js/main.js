console.log("Labas");
// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================


// ===================pasikartoti  F-jas===================
//  01 UZDUOTIS
// sukurti 3 Globalius kintamuosius:  vardas , pavarde, klase   (ir jiems priskirti reiksmes):
// atspausdinti visus kintamuosis

var vardas, pavarde, klase;
vardas="tomas";
pavarde="tamulaitis";
klase="pirma";
console.log(vardas, pavarde, klase);

//  02 UZDUOTIS
// sukurti funkcijas:
// printName()  printLName(), printClass() ,
// kurios atspausdina i konsole pirmos uzduoties kintamuosius

function printName() {
  console.log(vardas);
}
printName ()

function printName() {
  console.log(vardas);
}

function printLame() {
  console.log(pavarde);
}

function printClass() {
  console.log(klase);
}
printClass ()
printName ()
printLame ()

//  03 UZDUOTIS
// parasyti f-ja printVardasPavardKlase(name, lname, klase)

function printVardasPavardeKlase(name, lname, klase) {
console.log(name, lname, klase);
}
printVardasPavardeKlase ("jonas", "jonukas", "maryte");

// ==============================================





//======================TEKSTO ISVEDIMAS===============
// UZDUOTIS
// Issimeginti komandas:

// document.write("Mano tekstas su js");
// window.alert("alabas");
// alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);

document.write("Mano tekstas <b class='bg-info'> 222</b>")


//=======================================
//  0 UZDUOTIS
//  sukurti funkcija "printKaina(x)" ,


//  kuri atspausdina i konsole "x" reiksme
//  iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas:  999.00 , 13.49, 100.05
//  ir vietoj x irasyti, koki nors teksta pvz: printKaina( 999.00);

function printkaina(x) {
  console.log(x);

}
printkaina (999.00);
printkaina (13.49);
printkaina (100.05);



// 1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis()", kuri apskaiciuoja vidurki is  5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

// 1.1 UZDUOTIS
// parasyti f-ja "pazymiuVidurkis(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
// suskaiciuoti pazymiu vidurki, 5, 10 , 8 , 6 , 8  (ir atspausdintu vidurki)

function pazymiuVidurkis1(x1, x2, x3) {
  var suma = x1+x2+x3;
  var vidurkis = suma/5;
  console.log("vidurkis: ", vidurkis)
}
pazymiuVidurkis1 (5, 10, 8);
pazymiuVidurkis1 (9, 9, 9);

//kiek uzdirbame per 20 metu, uzdirbdami 680 return, kai alga pakyla 1%

var kiekMenesiu = 20 * 12;
var menAlga = 680;
var algosPokytis = 2; //2 %
for (var i = 0; i < KiekMenesiu; i++) {
  var padidejimas = (menAlga * algosPokytis)/100;
  menAlga = menAlga + (menAlga * 0.01);
}
console.log("po 20 metu gausime ", menAlga);
// 1.2 UZDUOTIS
// parasyti f-ja "getPazymiuVidurkis(x1, x2, x3, x4, x5)", kuriai galima paduoti 5 kintamuosius,
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atskymas;")

function getPazymiuVidurkis2(x1, x2, x3, x4, x5) {
  var vidurkis = (x1+x2+x3+x4+x5/5);
  return vidurkis;
}
var vid = getPazymVidurkis2(1, 10, 1, 3, 5);
console.log("vidurkis su return: ", vid);

function getName() {
  return vardas = "Justinas";
}
var x = getName ();
console.log(x);


function getAtlyginimas () {
  var alga = 5 * 8 * 21;
  return alga;
}
var x = getAtlyginimas ();
console.log("metines pajamos", x);
// 1.3 UZDUOTIS   ????/?
// parasyti f-ja "getPazymiuVidurkis()", kuriai galima paduoti 5 kintamuosius ir jie turi default/isankstine reiksmes "0",
// kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu

function getPazymiuVidurkis3(x1=0, x2=0, x3=0, x4=0, x5=0) {
  var vidurkis = (x1+x2+x3+x4+x5/5);
  return vidurkis;
}
var vid = getPazymiuVidurkis3(1, 10, 1, 3, 4, 6);
console.log("vidurkis su return: ", vid);

//=============FOR   LOOP====================

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole  (! bandant tai padaryti, atsiras skiacius 50)

for (var i = 0; i < 50; i++) {
console.log("azuolas", i+1);
}

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi "<h2> Azuolas</h2> " i <article> elementa su  INNERHTML pagalba

for (var i = 0; i < 20; i++) {
//  document write("<h2> Azuolas</h2>" + i)
}
document.querySelector('section').innerHTML += "Azuolas<br>";
// 2 A UZDUOTIS
// sukurti f-ja printX(xx) i browser langa

function pritX(tekstas) {

}

// 2B UZDUOTIS
// paleisti f-ja printX 100 kartu

for (var i = 0; i < 100; i++) {
  pritX("alga:" + (680 + i));
}

//  3 UZDUOTIS
// paleisti f-ja printX 12 kartu ir atspausdinti <img ...

// 4 UZDUOTIS
// sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);  i konsole
