console.log("Labas");

// --------------------Array / Masyvai -----
names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log(names);
console.log(names.join());
console.log("masyvo ilgis " + names.length );
names[0] = "Marijus";
console.log(names);
var ilgis = names.length;
console.log("masyvo ilgis:", ilgis);

console.log(names.join(", ") );

console.log("-----nerikiuotas------");
console.log(  names.join(", ") );
console.log("----rikiuotas------");
console.log( names.sort() );

names.push("1966-12-21");
names.push("ID: 652887");
names.push("KROKAS");
console.log( names );
names.pop();          // IDEA: istrinam paskutini elementa
names.unshift("citrina");        // IDEA: idedame i pradzia
console.log("idedame i pradzia: citrina", names);
names.shift();                    // IDEA: istriname 0 elementa
console.log("istriname 0 elementa", names);

delete names[2];         // IDEA:   istriname butent nurodyta elementa
console.log("istriname butent 2 elementa", names);

// 1- nuo pirmoelemento;
// 0- istrinti 0 elementu;
names.splice(1, 0, "NAUJAS zodis", "Naujas vardas") // IDEA: nuo 1 iterpem
console.log("nuo 1 iterpem 2 naujus zodzius", names );

// istriname "Naujas vardas"
names.splice(3, 1);
console.log("istryneme Naujas vardas", names);

var x = names;  // IDEA:  taip negalima nurodyti
var x = names.slice(0,5);
console.log(x);
//....

// uzduotis  Array
// 1. i masyvo gala ideti elmenta “butelis vandens”
names[6] = "butelis vandens";
console.log(names);

// 2. i masyvo pradzia ideti elmenta “ziebtuvelis”
names.unshift("ziebtuvelis");
console.log(names);

// 3. istrinti 3-cia elmenta
names.splice (2, 1);
console.log(names);
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");

// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....
