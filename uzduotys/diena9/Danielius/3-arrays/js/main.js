console.log("Hallo");
// --------------------Array / Masyvai -----
names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log(names);
names[0] = "Marijus";
console.log(names);
var ilgis = names.length;
console.log("masyvo ilgis:", ilgis);

console.log( names.join(" : ") );

console.log("------nerikiuotas------");
console.log( names.join(" "));
console.log("------surikiuotas------");
console.log( names.sort() );

names.push("1966-11-8");
names.push("ID: 844555");
names.push("85347290");

console.log( names);
names.pop(); // IDEA: istrinam paskutini variantas
console.log( names );
names.unshift("citrina");
console.log("idedam i masyvo pradzia", names );
names.shift();
names.shift();
names.shift();
console.log("po istrinimo", names);
delete names[2]; //istrina 2 elementa ir palieka skyle
console.log( names );
//1 - nuo pirmo elemento; 0 - istrinam 0 elementu; ir iterpiam du naujus elementus.
names.splice(1, 0, "Naujas zodis", "Naujas vardas");
console.log( names );

//istrinam su splice
names.splice(2, 1);
console.log( names );
//kopija
var x = names; //negerai
var x = names.slice(1, 3); //galim nurodyt kiek masyvo nukopijuot
console.log(x);
// console.log(names.join());
// console.log("masyvo ilgis " + names.length );
//....

// uzduotis  Array
names.push("butelis vandens");
console.log( names );
names.unshift("ziebtuvelis");
console.log( names );
names.splice(2, 1);
console.log( names );
// 1. i masyvo gala ideti elmenta “butelis vandens”

// 2. i masyvo pradzia ideti elmenta “ziebtuvelis”
// 3. istrinti 3-cia elmenta
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
var mas = [];
// for (var i = 0; i < 50; i++) {
//     mas.push(0);
// }
// console.log(mas);
// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;
var i = 0;
while (i < 50) {
    mas.push(1);
    i++;
}
console.log(mas);
var i = 1;
while (i < 50){
    mas[i] = (3);

i=i+2;
}
console.log(mas);
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....
var i = 4;
while (i < 50) {
    mas[i] = (9);
    i=i+5;
}
console.log(mas);





//
