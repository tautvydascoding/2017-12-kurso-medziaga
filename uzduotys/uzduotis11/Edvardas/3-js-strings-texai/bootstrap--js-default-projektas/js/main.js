console.log("Labas");
//strings-tekstai
var text,s,text,string,temp,tekstas;
tekstas="raudonkepuraite ejo per juoda miska ir sutiko pikta vilka.";
ilgis=tekstas.length;
console.log("teksto ilgis:",ilgis);


var pozicija=0;
pozicija=tekstas.indexOf('pikta');
console.log("ieskoma fraze\"pikta\"",pozicija); //paieska isveda pozicija,pirmos rastos frazes(parametras,nuo kurio ieskoti)


pozicija=tekstas.search('juoda');
console.log('ieskom, - juoda',pozicija); //suranda zodzio pozicija


//naudojant slice pajimti paskutinius 10 simobliu
var paskutinisTekstas="";

paskutinisTekstas=tekstas.slice(ilgis-10,ilgis);
//arba
paskutinisTekstas=tekstas.slice(-10);//kiek nuo galo atskaiciuoti
console.log("paskutinti simboliai:",paskutinisTekstas);


//teksto pakeitimas,is vieno zodzio i kita

var naujas=tekstas.replace('raudonkepuraite','makakinas');
console.log(naujas);

var x =naujas.toUpperCase(); //isvercia visa sakini didziosiomis raidemis
console.log(x);

var y=tekstas[3];
console.log("3-ias simbolis:",y);
console.log(tekstas);
var sarasas=tekstas.split(" ");
console.log(sarasas);
sarasas= sarasas.toString();
//arba
sarasas=sarasas.join(" ");

var txt='Antanas';
ilgis=txt.lenght;
