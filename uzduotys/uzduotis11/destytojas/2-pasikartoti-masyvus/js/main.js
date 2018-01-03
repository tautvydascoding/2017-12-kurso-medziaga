console.log("Labas");

// pasikartojimas array
// 1 sukurti masyva (uzpildyta 10 vardu)
// 2 atspausdinti masyva su for ciklu
// 3 atspausdinti masyva su while ciklu


// 1
var sarasas = ["Paulius", "Tomas", "Kastytis", "Antanas", "Jurgis"];
console.log( sarasas );
// arba
var sarasas2 = [];
sarasas2[0] = "Karolis";
sarasas2.push("Zilvinas");
sarasas2[2] = "Juodkalnis";
sarasas2[3] = "Saulius";
console.log( sarasas2.join( " :: ") );
console.log( sarasas2.toString() );

// 1.C sujungti abu masyvus
var visiSarasai = [];
visiSarasai = sarasas2.concat(sarasas);
console.log(visiSarasai);

//================ masyvo kopijavimas======================
var x = ["Jonas", "Antanas"];
// A uzduotis sukurti "y" kintamaji, kuris yra  "x" kopija
var y;
y = x;
console.log("kopija y: ", y );
// B pakeisti "y" masyva, o atapausdinti "x" ir "y" masyvus
y.unshift("pakeistas"); // i pradzia idedame

console.log("y: ", y);
console.log("x: ", x);

// !!! isvada - kopijuojant masyvus niekada nenaudoti "=" simbolio
// vietoj to naudoti ".slice(0, length)" komanda
var z = [];
z = x.slice(0, x.length);   // slice - kopijuoja nuo [0] iki [paskutinto] stalciaus
console.log("z: ", z);

z.push("33");
console.log("z po idejimo 33:", z );
console.log("x po z idejimo 33:", x );
//


// 2
for (var i = 0; i < visiSarasai.length; i++) {
     var x = visiSarasai[i];
     console.log(  x  );
}

// 3
var t = 0;
while ( t < visiSarasai.length) {
    var y = visiSarasai[t];
    console.log( y );
    t++;
}



//
