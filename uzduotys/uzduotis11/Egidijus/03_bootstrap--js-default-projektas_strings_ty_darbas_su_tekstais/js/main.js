console.log("Labas");

var txt, s, text, string, temp, tekstas;
tekstas = "Raudonkepuraite ejo per juoda miska. It oliau ejo verkdama.";

ilgis = tekstas.length;
console.log(ilgis);

var pozicija = 0;
pozicija = tekstas.indexOf ("ejo");
console.log("ieskoma fraze  \" ejo \"  ", pozicija);


// search
pozicija = tekstas.search("juoda");
console.log("ieskom juoda", pozicija);

// replace

// slice  ------------paimti paskutinius 10 simboliu
var paskitinisTekstas = "";
paskitinisTekstas = tekstas.slice(-10);
// ARBA paskitinisTekstas = tekstas.slice(ilgis - 10, ilgis);
// paskitinisTekstas = tekstas.slice(35, ilgis);
console.log("Pskutiniai simboliai:", paskitinisTekstas);

var naujas = tekstas.replace ("Raudonkepuraite", "Juozas");
console.log( naujas );

var x = naujas.toUpperCase();
console.log( x );

var y = tekstas[3];
console.log("3-ias simbolis", y);

console.log(tekstas);
var sarasas = tekstas.split (" ");
console.log(sarasas);

// Sukeisti zodzio pirma ir paskutine raides
var txt = "Antanas";
txt1 = txt.slice(-1);
console.log("txt:",txt);
console.log("txt1:", txt1);

txt2 = txt.slice(1,txt.length-1);
// arba txt2 = txt.slice(1,6);
console.log("txt2:",txt2);

txt3 = txt.slice(0,1);
console.log("txt3:",txt3);

txt4 = txt1 + txt2 + txt3
console.log("txt4:",txt4);
