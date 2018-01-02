console.log("Labas");
// --------------------Array / Masyvai -----
names = ["Tomas", "Pietkus", 25, "VDU - inzinerija"];

console.log(names);
console.log(names.join());
console.log("masyvo ilgis " + names.length );
//....

// uzduotis  Array
// 1. i masyvo gala ideti elmenta “butelis vandens”

// 2. i masyvo pradzia ideti elmenta “ziebtuvelis”
// 3. istrinti 3-cia elmenta
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
var sarasas = [];
for (var i = 0; i < 50; i++) {
    sarasas.push( 0 );
    // ARBA sarasas[i]=0;
}
console.log(sarasas);
// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;
var t = -1;
var masyvas = [];
while (t < 50) {
    t++;
    masyvas[t]=1;
}
console.log(masyvas);
// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....
for (var z = 1; z < masyvas.length; z++) {
    masyvas[z++]=3;
}
console.log(masyvas);
// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....

for (var q = 0; q < masyvas.length; q++) {
    q = q + 3;
    masyvas[q]=9;
}
console.log(masyvas);





//
