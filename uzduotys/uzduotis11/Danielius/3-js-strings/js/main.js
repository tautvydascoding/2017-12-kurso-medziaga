console.log("Labas");

var tekstas = "ejo raudonkepuraite ir ejo, ir sutiko vilka";
ilgis = tekstas.length;
console.log(ilgis);

 var poz = 0;
 poz = tekstas.indexOf('ejo'); //ieskomos frazes pozicija
 console.log("ieskoma fraze\"ejo\"", poz);

poz = tekstas.search('vilka');
console.log("pozicija", poz);
//atskaiciuojam nuo galo
// var kopija = tekstas.slice(ilgis - 10, ilgis);
var kopija = tekstas.slice(-10);
console.log(kopija);

var naujas = tekstas.replace('raudonkepuraite', 'Juozas');
console.log(naujas);
//didziosios raides
x = naujas.toUpperCase();
console.log(x);


//galima teksta koreguot kaip masyva-----not recommended-----
// var y = tekstas[1];
// console.log(y);

//-------sudeda i masyva pagal nurodyta skyrikli----
var sarasas = tekstas.split(" ");
console.log(sarasas);
sarasas = sarasas.join(" ");
console.log(sarasas);


var txt = "Antanas";
ilgis = txt.length;
var z = txt.replace('A','s');
console.log(z);
var d = z.replace('s', 'a');
console.log(d);
