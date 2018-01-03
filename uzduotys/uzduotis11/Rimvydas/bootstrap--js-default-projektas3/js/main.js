console.log("Labas");

var s, txt, string, temp, tekstas;
tekstas = "Raudonkepuraite ejo per juoda miska ir ejo verkdama";
ilgis = tekstas.length;
console.log("teksto ilgis:", ilgis);

var pozicija = 0;
pozicija = tekstas.indexOf('ejo'); //paieska, randa pirma pasikartojima
console.log("ieskoma fraze \"ejo\" ", pozicija);

pozicija = tekstas.search('juoda-');
console.log("ieskome juoda", pozicija);

//naudojant slice paimti paskutinius 10 simboliu
var paskutinisTekstas = "";
console.log(ilgis);
paskutinisTekstas = tekstas.slice(ilgis - 10, ilgis);
console.log("paskutinti simboliai: ", paskutinisTekstas);

//replace
var naujas = tekstas.replace('Raudonkepuraite', 'Juozas');
console.log(naujas);

//sukeisti pirma ir paskutine raide vietomis zodyje Antanas

var txt = "Antanas";
ilgis = txt.length;

//A

var x = txt[0];  // arba x = txt.slice(0,1);
var y = txt[txt.length-1];  // y = txt.slice(-1);
console.log(x, y);
//txt[0] = y; neveikia, nes tekstas nera masyvas
var vidurys = txt.slice(1,6);
txt = y + vidurys + x;
console.log(txt);
//arba paversti teksta i masyvas

var raides = txt.split(""); //teksta sudeda i masyvas
console.log(raides);
var pradine = raides[0];
var paskutine = raides[txt.length -1];
raides[0] = paskutine;
console.log(raides);
raides[txt.length -1] = pradine;
console.log(raides);
txt = raides.join("");
console.log(txt);
