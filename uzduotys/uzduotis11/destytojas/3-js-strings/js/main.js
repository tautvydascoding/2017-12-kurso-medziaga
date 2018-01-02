console.log("Labas");


var txt, s, text, str, string, temp, tekstas;

tekstas = "Raudonkepuraite ejo per juoda miska ir ejo verkdama.";

ilgis = tekstas.length;
console.log("teksto ilgis:", ilgis);

var pozicija = 0;
pozicija = tekstas.indexOf('ejo', 20); // paieska - isveda pozicija, pirmo rastos frazes (parametras, nuo kurio i3eskoti)
console.log("iskoma fraze \"ejo\" ", pozicija);


pozicija = tekstas.search('juoda');
console.log('ieskom - juoda', pozicija);


// naudojant slice paimti paskutintus 10 simboliu
var paskutinisTekstas = "";

paskutinisTekstas = tekstas.slice(ilgis - 10, ilgis);
// arba
paskutinisTekstas = tekstas.slice( -10);  // kiek nuo galo atskaiciuoti
console.log("paskutinti simboliai: ", paskutinisTekstas);


var naujas = tekstas.replace('Raudonkepuraite', "Juozas");
console.log( naujas );


var x = naujas.toUpperCase();
console.log( x );


var y = tekstas[3];
console.log("3-ias simbolis:", y);

console.log(tekstas);
var sarasas = tekstas.split(" ");
console.log(sarasas);
sarasas = sarasas.toString();
// arba
// sarasas = sarasas.join(" ");

// uzduotis:
// sukeisti teksto pirma ir paskutine raidesvietomis
var txt = 'Antanas';
ilgis = txt.length;

// A
var x = txt[0];  // x = txt.slice(0, 1);
var y = txt[ txt.length -1 ];   // y = txt.slice(-1);
console.log(x, y);
// txt[0] = y; !!! taip Neveikia, nes tekstas nera masyvas
var vidurys = txt.slice(1, 6);
txt = y + vidurys + x;

console.log(txt);
// arba
// paversti visa teksta i masyva
var txt = 'Antanas';
var raides = txt.split("");  // tekta sudeda i masyva (kiekviena raide i atskira stalciu)
console.log(raides);

var pradine = raides[0];
var paskutine = raides[ txt.length -1 ];

raides[0] = paskutine;
console.log(raides);
raides[ txt.length -1] = pradine;
console.log(raides);

txt = raides.join("");
console.log(txt);


//
