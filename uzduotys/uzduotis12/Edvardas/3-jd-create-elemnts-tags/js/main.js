console.log("Labas");
//sukureme tah/elementa
var footer=document.createElement("footer")
console.log(footer);
//========================
var txt=document.createTextNode("Prekes pavadinimas");
console.log(txt);

footer.appendChild(txt);
//idedame i savo setaine html elementa parasyta su js
document.querySelector('.container').appendChild( footer );


// uzduotis sukurti masyva su 5-
//--paveiksliukai ir turesim juos atspausdinti konteineri
var img="<img src='../../../2.jpg' width='400px'alt='nerastas'>";


var section=document.createElement("section");
document.querySelector('.container').appendChild(section);

section.innerHTML+=img;
section.innerHTML+=img;
section.innerHTML+=img;
//kitas budas
var pav=document.createElement('img')
console.log(pav);
pav.setAttribute("src",'../../../2.jpg');
pav.setAttribute("src",'../../../2.jpg');
pav.setAttribute("src",'../../../2.jpg');
section.appendChild(pav);
//sudedame i masyva
var sarasas=[pav,pav,pav];
sarasas.push(pav);
sarasas.push(pav);
console.log(sarasas);
//atspausdinam i html section elementa 5 paveiksliukus
for (var i = 0; i < sarasas.length; i++) {
    section.appendChild(sarasas[i]);
    console.log(sarasas[i]);


}
