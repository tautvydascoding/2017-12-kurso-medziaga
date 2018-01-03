console.log("Labas");
// --------------------Array / Masyvai -----
names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log(names);

names[0] = "Marijus";
console.log(names);

var ilgis = names.length
console.log("masyvo ilgis: ", ilgis);

console.log(names.join());
console.log(names.join(" "));

console.log("-----nerikiuotas----");
console.log(   names.join(", "));
console.log("----rikiuotas----");
console.log(   names.sort());

names.push("1996-12-12")

names.pop(); // IDEA: istriname paskutini elementa
console.log("po istrinimo", names);

names.unshift("citrina");
console.log("idedame i pradzia: citrina", names);

names.shift();
console.log("trina pirma(nulini) is masyvo", names);

delete names[2];  //istrina elemento turini, bet palieka vieta
console.log(names);

names.splice(1, 0, "naujas zodis", "naujas vardas");// IDEA: nuo pirmo iterpiame (1 - nuo kur, 2 - trinti kiek, iterpiam ka)
console.log(names);
names.splice(1, 1);
console.log(names);
// console.log(names.join());
//console.log("masyvo ilgis " + names.length );
//....

// uzduotis  Array
// 1. i masyvo gala ideti elmenta “butelis vandens”

// 2. i masyvo pradzia ideti elmenta “ziebtuvelis”
// 3. istrinti 3-cia elmenta
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....






//
