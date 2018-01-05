console.log("Labas");


// uzduotis - pasikartojimas
// A sukurti "header" elementa
// B sukurti h3 su tekstu viduje ir ideti "header" elemeneta
// C header'i ideti i body

var header, antraste;

header = document.createElement('header');
// console.log( header );

antraste = document.createElement('h3');
// console.log( antrate );

header.appendChild( antraste );


// tekto idejimas------------
antraste.innerHTML += "<b>Sveiki</b> visi";
// console.log( antraste );
// ARBA
var tekstas = document.createTextNode('Viso gero');
antraste.appendChild( tekstas );
// console.log( antraste );

// idedame i puslapi================================
// document.querySelector('body').appendChild( header );
// ARBA
//          tetis                                  ka idedame       pries ka idedame
document.querySelector('.container').insertBefore(  header,     document.querySelector('h1')  );
// tetis.insertBefore( newitem, priesKa);

//
