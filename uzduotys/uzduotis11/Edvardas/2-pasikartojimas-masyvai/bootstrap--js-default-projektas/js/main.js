console.log("Labas");

//pasikartojimas array
//1 uzduotis sukurti masyva 10 vardu//
var sarasas=["Paulius","Tomas","kastytis","antanas","jurgis"];
console.log(sarasas);
//arba
var sarasas2=[]
sarasas2[0]="Karolis"
sarasas2[1]="vytas"
sarasas2[2]="rimvydas"
sarasas2[3]="marius"
console.log(sarasas2.join("::"));//atskiria
console.log(sarasas2.toString());//atskiria kableliais
//sujungiam masyvus
var visiSarasai=[];
visiSarasai=sarasas2.concat(sarasas);
console.log(visiSarasai);

//================masyvo kopijavimas=======================================
var x=["Jonas","Antanas"]
//uzduotis padaryti  "y" kintamaji,kuris yra kopija "x" kopija
var y;
y=x;
console.log("kopija y:",y);
//pakeisti "y" masyva,o atspausdinti "x" ir "y"masyvus
y.unshift("pakeistas");// ideda i pradzia
console.log("y:",y);
console.log("x:",x);
//!!!! isvada-kopijuojant masyvus niekada nenaudoti "=" simbolio
///vietoj to naudoti ".slice(0,lenght)"komanda
var z=[];
z= x.slice(0, x.length);//slice - kopijuoja nuo [0] iki [paskutinto]stalciaus
console.log("z:",z);
z.push("33");
console.log("z po idejimo 33:",x);
console.log("x po z idejimo 33:",x);

//2 uzduotis atsprausdinti masyva su for ciklu//,
for (var i = 0; i < visiSarasai.length; i++) {
var x=visiSarasai[i]
    console.log(x);
}



//3 atspausdinti masyva su while ciklu//
var t=0
while (t<visiSarasai.length) {
    var y=visiSarasai[t];
    console.log(y);
    t++;

}
