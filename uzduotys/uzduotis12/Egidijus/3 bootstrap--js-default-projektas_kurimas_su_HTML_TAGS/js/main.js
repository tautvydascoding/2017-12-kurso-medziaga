console.log("Labas");

var footer = document.createElement("footer");

console.log(footer);

var txt = document.createTextNode ("Prekes pavadinimas");

console.log(txt);

footer.appendChild(txt);

// I savo svetaine idedame html-la parasyta su javaScript
document.querySelector(".container").appendChild(footer);


Uzduotis:
// A su js sukurti 5 paveiksliukus;
// B juos sudeti i masyva;
// C sukurtis "section" elementai
// D jame atspausdinti visus paveiksliukus

var img = "<img src='../../../2.jpg' width='100px' alt='nerastas'>"; // cia kaip paprasta tekstas

var section = document.createElement('section');
// I savo svetaine idedame html-la parasyta su javaScript
document.querySelector(".container").appendChild(section);
section.innerHTML += img;
section.innerHTML += img;
section.innerHTML += img;
section.innerHTML += img;

// ARBA
var pav = document.createElement('img');
console.log(pav);
pav.setAttribute("src",'../../../2.jpg');
pav.setAttribute("width",'150px');
pav.setAttribute("alt",'ranka');
section.appendChild( pav );

// sudedam i masyva
var sarasas = [pav, pav, pav];
// ARBA
sarasas.push (pav);
sarasas.push (pav);
console.log(sarasas);
// i section elementa isvesim 5 paveiksliukus
for (var i = 0; i < sarasas.length; i++) {
    section.appendChild (sarasas[i]);
    console.log(sarasas[i]);
}
