console.log("Labas");


// --------------------Array / Masyvai -----
names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log( names );
names[0] = "Marijus";
console.log( names );
var ilgis = names.length;
console.log( "masyvo ilgis: ", ilgis);

console.log( names.join("  ")   );

console.log("-------nerikiuotas----");
console.log(  names.join(", ")  );
console.log("-------rikiuotas-----");
console.log(  names.sort()  );

names.push("1966-12-21");
names.push("ID: 666555");
names.push("342525");
console.log(  names );
names.pop();    // IDEA: istriname paskutinta elementa
console.log("po istrinimo", names);
names.unshift("citrina");    // ideda i masyvo pradzia
console.log("Idedame i pradizia: citrina", names);
names.shift();   // istirna nulinta elementa is masyvo
names.shift();
names.shift();
console.log("po istrinimo: ", names);

delete names[2];   // istrina 2 elemntea ir palika skyle
console.log( names );

// 1 - nuo pirmo elemento;
// 0 - istrinti 0 elementu
//  "NAUJAS ZODIS", "Naujas vardas" -  iterpemi
names.splice(1, 0, "NAUJAS ZODIS", "Naujas vardas");  // itermep kelis elem
console.log(names);

// istriname "Naujas vardas"
names.splice(1, 1);
console.log(names);

var x = names; // negerai
var x = names.slice(1, 3);
console.log(x);

// console.log(names.join());
// console.log("masyvo ilgis " + names.length );
//....

// uzduotis  Array
// 1. i masyvo gala ideti elmenta “butelis vandens”
// 2. i masyvo pradzia ideti elmenta “ziebtuvelis”
// 3. istrinti 3-cia elmenta

// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");

var z = [];

for (var i = 0; i < 50; i++) {
   z.push("morka");
}

// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....






//
