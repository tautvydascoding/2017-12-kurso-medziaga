console.log("Labas");


// pasikartojimas array
// 1 sukurti masyva arba du masyvus ( poto papildyti iki 10 vardu)
// 2 atspausdinti su for ciklu
// 3 atspausdinti masyva su while ciklu

// 1
var sarasas=["Paulius", "Tomas", "Kastytis", "Antanas", "Jurgis"];
console.log( sarasas );

// kita budas - susikurti tuscia ir poto uzpildyti
var sarasas2 = [];
sarasas2[0] = "Karolis";
sarasas2[1] = "Zilvinas";
sarasas2[2] = "Juodkalnis";
sarasas2[3] = "Saulius";

//Sujungia masyvo reiksmes i viena stringa
console.log( sarasas2.join( " :: " ));
console.log( sarasas2.toString( ));


// sujungimas
var visiSarasai = [];
visiSarasai = sarasas2.concat (sarasas);
// arba visiSarasai = sarasas.concat (sarasas2);  prie saraso pridejo sarasa2
console.log(visiSarasai);




// _---------------------Masyvo kopijavimas----------------------
var x = ["Jonas", "Antanas"];
// A sukurti y kintamaji, kuris yra "x" kopija
var y;
y = x;
console.log("kopija y:", y);
// B pakeisti y kintamaji, atspausdinti x ir y masyvus
y.unshift("pakeistas");//

console.log("y:", y);
console.log("x:", x);

// ----------ISVADA NEPATARTINA MASYVUOSE NAUDOTI LYGYB$S----------
// ____________GERIAU NAUDOTI ".slice (0, lenght) komanda"______________

var z = [];
z = x.slice(0, x.lenght);
console.log("z: ", z);


z.push("33");
console.log("z po idejimo 33:", z);
console.log("x po idejimo 33:", x);


// 2 atspausdinti su FOR ciklu
for (var i = 0; i < visiSarasai.length; i++) {
    var x = visiSarasai[i];
    console.log( x );
}

// 3 atspausdinti su WHILE ciklu (While neskirta dirbti su masyvais).
var t = 0;
while (t < visiSarasai.lenght) {
    var y = visiSarasai[t];
    console.log( y );
    t++;
}
