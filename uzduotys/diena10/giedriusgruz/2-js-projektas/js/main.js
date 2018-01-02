console.log("Labas");
//  sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais
//  "0" (kiekvienas stalcius turi but lugus "0")
var sarasas = [];
for (var i = 0; i < 50; i++) {
    // sarasas.push(0);
    sarasas[i] = 0;
}
console.log(sarasas);

// sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1
var t = 0;
var masyvas = [];
while ( t < 50) {
masyvas[t] =1;
    sarasas[t] = 1;
    t++;    // IDEA:   t=t+1
}
console.log(masyvas);

var arVedes = false; // IDEA: kol nevedes ieskosi zmonos
var saugiklis = 0;
while (arVedes == false) {
    console.log("ieskau zmonos");
    saugiklis++;
    if (saugiklis == 50) {
    break;
    }
}


// 5.2: kas antra masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, ........]
var masyvoIlgis = sarasas.length;
console.log(masyvoIlgis);
// for (var i = 1; i < masyvoIlgis; i= i + 2){
// kas antra pakeisti i "3"
// sarasas [i] = 3;}
// IDEA:  arba
for (var i= 0; i < masyvoIlgis; i++){
    // kas antra pakeisti i "3"
    if(i % 2 != 0){
        sarasas [i] = 3;
    }
}
console.log(sarasas);
