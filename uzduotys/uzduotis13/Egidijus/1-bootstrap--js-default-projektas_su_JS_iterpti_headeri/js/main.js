console.log("Labas");

// pasikartojimas
// A sukurti headeri
// B sukurti h3 elementa
// C header'i ideti i body;

var header, antraste, h3;

header = document.createElement('header'); // siuo metu header yra kintamasis (pavadinimas), o ne objektas

antraste = document.createElement('h3');

//teksto idejimas
antraste.innerHTML += "Sveiki visi";
// ARBA teksto idejimas kitaip
var tekstas = document.createTextNode('visogero');
antraste.appendChild (tekstas);

document.querySelector('body').insertBefore(header, document.querySelector('h1'));
