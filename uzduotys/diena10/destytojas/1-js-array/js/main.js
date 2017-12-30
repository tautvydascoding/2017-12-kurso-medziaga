console.log("Labas");
//  3 UZDUOTIS
// paleisti f-ja printX 12 kartu ir atspausdinti <img ...
var img = '<img src=""  width="100px" height="100px">';
for (var i = 0; i < 12; i++) {
     document.querySelector('.container').innerHTML += img;
}
// x = 5;
// x = x + 10;  // x += 10;
// var x =     document.querySelector('.container');
// console.log(x);
var tekstas = document.querySelector('h1').innerHTML;
console.log("paimtas tekstas yra:",  tekstas);
document.querySelector('h1').textContent = "Hacked";


// uzduotis  Array
// 1. i masyvo gala ideti elmenta “butelis vandens”

// 2. i masyvo pradzia ideti elmenta “ziebtuvelis”
// 3. istrinti 3-cia elmenta
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....
