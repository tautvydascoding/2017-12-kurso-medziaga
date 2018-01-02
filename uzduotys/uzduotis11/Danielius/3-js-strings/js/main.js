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

//A
var x = txt[0];
var y = txt[txt.length -1 ];
console.log(x, y);
// txt[0] = y; neveikia nes tekstas ne masyvas

var vidurys = txt.slice(1, txt.length -1 );
txt = y + vidurys + x;
console.log(txt);
txt = "Antanas";
var raides = txt.split(""); //paverciam teksta i masyva
console.log(raides);
var pradine = raides[0];
var paskutine = raides[ txt.length -1 ];
raides[0] = paskutine;
raides[ txt.length -1 ] = pradine;
txt = raides.join("");
console.log(txt);
