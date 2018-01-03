console.log("Labas");

// sukurem Tag / elemeneta
var footer = document.createElement("footer");

console.log( footer );

var txt = document.createTextNode("<b>Neveikia b</b> pavadinimas");

console.log( txt );

footer.appendChild( txt );

// i savo svetaine idedame html-la parasyta su javascript
document.querySelector('.container').appendChild( footer );


// uzduotis:
// A su js sukurti 5 paveiksliukus.
// B juos usdeti i masyva
// C sukurti "section" elementa
// D jame atspasudinti visus paveikliuskus (neiseis, nes naudojam viena paveiksliuka)

var img = "<img src='../../../2.jpg' width='100px' alt='nerastas' >";
var section = document.createElement('section');
// i savo svetaine idedame html-la parasyta su javascript
document.querySelector('.container').appendChild( section );
// section.innerHTML += img;
// section.innerHTML += img;
// section.innerHTML += img;

// ARBA
var pav = document.createElement('img');
console.log( pav );
pav.setAttribute("src", '../../../2.jpg');
pav.setAttribute("width", '120px');
pav.setAttribute("alt", 'rasanti ranka');
section.appendChild( pav );
section.appendChild( pav );
section.appendChild( pav );
section.appendChild( pav );


// sudedame i masyva
var sarasas = [];
sarasas.push(pav);  // !!! kadangi kopijos, tik viena isveda
sarasas.push(pav);  // !!! kadangi kopijos, tik viena isveda
sarasas.push(pav);  // !!! kadangi kopijos, tik viena isveda

console.log( sarasas );
// i section elementa isvesim 5 paveikslikius
 // !!! kadangi kopijos, tik viena isveda
for (var i = 0; i < sarasas.length; i++) {
    // section.appendChild( sarasas[i] );
}



//
