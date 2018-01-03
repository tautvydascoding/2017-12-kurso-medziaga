console.log("Labas");
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais "0" (kiekvienas stalcius turi but lygus "0");
var sarasas = [];
for (var i = 0; i < 50; i++) {
    // sarasas.push( 0 );
    sarasas[i]=0;
}
console.log (sarasas);


// 5.1  sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;
var t = 0;
var masyvas = [];
while (t < 50) {
    masyvas[t] = 1;
    t++; // t =t + 1;
}
console.log (masyvas);


// var arvedes = falce;
// var saugiklis = 0;
// // kol nevedes iesko zmonos
// // while (arvedes == falce) {
// while (!arvedes) {
//         // kodas
//     console.log('ieskau');
//         // apsauga:
//     saugiklis++;
//     if (saugiklis == 500) {
//         // return;
//         break;
//     }
// }



// 5.2: kas antra ^ masyvo elementa pakeisti i "3"
// [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, ....

// masyvas

for (var i = 1; i < 50; i++) {
    // sarasas.push( 0 );
     masyvas[i++]= 3;
}
console.log (masyvas);

var masyvoIlgis = sarasas.lenght;
console.log(masyvoIlgis);
// for (var i = 1; i < masyvoIlgis ; i = i + 2) {
//      masyvas[i]= 3;
// }
// console.log (masyvas);
for (var i = 0; i < masyvoIlgis ; i++) {
        if (i % 2 != 0) { // tikrina ar nelyginis
            sarasas [i] = 3;
        }
}
console.log ("%:",sarasas);

// 5.3: kas 5-ta ^ masyvo elementa pakeisti i "9"
// [1, 3, 1, 3, 9, 3, 1, 3, 1, 9, ....
