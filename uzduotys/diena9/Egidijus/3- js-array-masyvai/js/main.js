console.log("Labas");
// --------------------Array / Masyvai -----
names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log( names );
names[0]= "Marijus";
console.log( names );
var ilgis = names.length;
console.log("masyvo ilgis", ilgis);

console.log (names.join(" , ") );

console.log ("----------nerikiuotas-----------");
console.log (names.join(" , ") );

console.log ("----------rikiuotas-----------");
console.log (names.sort() );

names.push("1966-12-21");
names.push("ID:1235464");
names.push("1966-12-21");
console.log ( names );

names.pop();
console.log("po istrynimo", names);

names.unshift("citrina"); // i masyvo pradzia
console.log("po istrynimo", names);

names.shift(); // trina 0 -ini elementa
console.log("po istrynimo", names);

delete names[2];
console.log ( names );

names.splice (1, 0, "naujas zodis", "Naujas vardas");
console.log(names);

names.splice (2, 1);
console.log(names);

// var = x;
// var x = names.splice(1,3)
// console.log(x);






// console.log(names.join());
// console.log("masyvo ilgis " + names.length );
//....

// uzduotis  Array
// 1. i masyvo gala ideti elmenta “butelis vandens”

// 2. i masyvo pradzia ideti elmenta “ziebtuvelis”
// 3. istrinti 3-cia elmenta
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
// var z [];
// for (var i = 0; i < 50; i++) {
//     z.push("morka")

// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....






//
