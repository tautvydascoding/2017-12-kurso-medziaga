console.log("Labas");

//  3 UZDUOTIS
// paleisti f-ja printX 12 kartu ir atspausdinti <img ...
var img = '<img src="" width="100px" height="100px">';
for (var i = 0; i < 12; i++){
    console.log("Martynas");
    document.querySelector('.container').innerHTML += img;
}
var x = document.querySelector('.container');
console.log(x);
// 4 UZDUOTIS
// sukurti f-jas piestiEilute(x); spausdintiStulpeli(x);  i konsole
var tekstas = document.querySelector('h1').innerHTML;
console.log("paimtas tekstas yra:", tekstas);

document.querySelector('h1').textContent ="Hacked";
