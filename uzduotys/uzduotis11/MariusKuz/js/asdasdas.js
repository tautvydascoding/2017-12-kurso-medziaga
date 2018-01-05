console.log("Labas");

const DIV = document.querySelector("#cia");
const ANTRASTE = document.querySelector("#cia h1");


// Sukuria naują HTML elementą su tekstu
function sukurtiHTMLelem (tag, text) {
    // tag = "'"+tag+"'";
    let sukurtas = document.createElement(tag);
    sukurtas.textContent = text;
    // console.log(sukurtas);
    DIV.append(sukurtas);
return sukurtas;

}


// var string = "Antanas";
// var pakeistas;
// sukurtiHTMLelem("h2", string);

// pakeistas = string.slice(0, string.length);
// let pirmas, paskutinis;


// pakeistas = string.split("");

// pirmas = pakeistas.slice(0,1);
// paskutinis = pakeistas.slice((pakeistas.length - 1), pakeistas.length);
// // var kiekis = pakeistas.length - 1;
// // console.log("kiekis: " + kiekis);

// pakeistas.shift();
// pakeistas.pop();

// pakeistas.unshift(paskutinis);
// pakeistas.push(pirmas);


// console.log("pirmas: " + pirmas + " paskutinis: " + paskutinis);

// pakeistas = pakeistas.join("");

// console.log(pakeistas);





// sukurtiHTMLelem("h3", pakeistas);


var mokinys = {
    vardas: "tomas",
    pavarde: "pavardenis",
    klase: "7b",
    pazymiai: [6, 5, 7, 10, 8]
}

console.log(mokinys);


var tevas = {
    vardas: "Juozas",
    pavarde: "Derkintis",
    vaikas: {} 
}

var vaikas = {
    klase: "9a",
    vardas: "Kaziukas"
}

tevas.vaikas = mokinys;

tevas.vardas = "Kazimieras";

console.log(tevas);
