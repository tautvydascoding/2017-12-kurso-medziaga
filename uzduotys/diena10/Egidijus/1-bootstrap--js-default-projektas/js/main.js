console.log("Labas");
//  3 UZDUOTIS
// paleisti f-ja printX 12 kartu ir atspausdinti <img ...
var img = '<img src="" width="100px" height="100px">';
// document.querySelector('.container').innerHTML = "";
for (var i = 0; i < 12 ; i++) {
    console.log("martynas");
    document.querySelector('.container').innerHTML += img;
}
// x = 5;
// x = x + 10;
// var x = document.querySelector('.container');
// console.log(x);

var tekstas = document.querySelector('h1').innerHTML;
console.log("Paimtas tekstas yra:", tekstas);

document.querySelector('h1').html ("hacked");



// 4 UZDUOTIS
// sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);  i konsole


// uzduotis  Array
// 1. i masyvo gala ideti elmenta “butelis vandens”
// var vanduo = [];
// vanduo = ["buteliukas", "kibiras"];
// log = vanduo;


// vanduo.splice
// 2. i masyvo pradzia ideti elmenta “ziebtuvelis”
// 3. istrinti 3-cia elmenta


// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....
