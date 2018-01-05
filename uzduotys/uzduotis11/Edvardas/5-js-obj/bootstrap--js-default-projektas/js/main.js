console.log("Labas");
// PASIKARTOTI
// js saugosime mokinio informacija:
// 			mokinio: vardo, pavardes, kelintokas. mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// Uzdavinys:
// 1) isvesti i console mokinio informacija.
// 2) pasirasyti funkcija, kuri is duotu 5 pazymiu, grazintu ju vidurki

var mokinys={
    vardas:"tomas",
    pavarde:"tomukas",
    klase:"7b",
    pazymiai:[6,5,9,10,8]


};
console.log(mokinys);





// uzduotis: sukurti 2 objektus:
// 1) tevas : vardas, pavarde, vaikas
// 2) vaikas: klase, vardas
// 3) priskirti tevo objekui (kintamajam) vaika
var tevas={
vardas:"Evaldas",
pavarde:"Syvis",
vaikai:{}

};
console.log(tevas);

tevas.vardas="Pranas";  //keiciam varda
console.log(tevas);

var vaikas={
    klase:"10b",
    vardas:"Edvardas"

};

tevas.vaikai=vaikas; //itraukiame kitamaji vaika i teva(objekta)
console.log(tevas);
