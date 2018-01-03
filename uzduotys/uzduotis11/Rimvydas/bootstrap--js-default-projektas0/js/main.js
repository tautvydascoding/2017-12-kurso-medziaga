console.log("Labas");

//pasikartojimas array
//1 sukurti masyva (10 vardu)
//2 atspausdinti masyva su for ciklu
//3 atspausdinti masyva su while ciklu

//1
var sarasas = ["Paulius", "Tomas", "Kastytis"];
console.log(sarasas);
//arba
var sarasas2 = [];
sarasas2[0] = "Karolis";
sarasas2[1] = "Zilvinas";
console.log(sarasas2.toString());

//sujungti abu masyvus
var visiSarasai = [];
visiSarasai = sarasas2.concat(sarasas);
console.log(visiSarasai);

//masyvo kopijavimas
var x = ["Jonas", "Antanas"];

//padaryti y, kuris yra x kopija
var y;
y=x;
console.log("kopija y: ", y);

//pakeisti y masyva, o atspausdinti x ir y masyvus
y.unshift("pakeistas"); //idedame i pradzia

console.log("y: ", y);
console.log("x: ", x);
//isvada - kopijuojant masyvus nenaudoti = simbolio, o naudoti .slice(0, Length) komanda
//kopijuoja nuo 0 iki paskutinio
var z = [];
z = x.slice(0, x.length);
console.log("z:", z);

z.push("33");
console.log("z po idejimo 33:", z);
console.log("x po z idejimo 33:", x);

//2 uzduotis

for (var i = 0; i < visiSarasai.length; i++) {
var x = visiSarasai[i];
console.log(x);
}

//3 uzduotis

var t = 0;
while ( t < visiSarasai.lenght) {
  var y = visiSarasai[t];
  console.log(y);
  t++
}
