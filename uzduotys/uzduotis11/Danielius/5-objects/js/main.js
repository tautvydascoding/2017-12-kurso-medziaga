console.log("Labas");

// PASIKARTOTI
// js saugosime mokinio informacija:
// 			mokinio: vardo, pavardes, kelintokas. mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// Uzdavinys:
// 1) isvesti i console mokinio informacija.
// 2) pasirasyti funkcija, kuri is duotu 5 pazymiu, grazintu ju vidurki

var mokinys = {//tuscias js objektas
vardas: "tomas",
pavarde: "tomukas",
klase: "7b",
pazymiai: [4, 8, 6, 10, 9, 3]
};
console.log(mokinys);
// uzduotis: sukurti 2 objektus:
// 1) tevas : vardas, pavarde, vaikas
// 2) vaikas: klase, vardas
// 3) priskirti tevo objekui (kintamajam) vaika
var tevas = {
    vardas: "Petras",
    pavarde: "Petrauskas",
    vaikas: {}
};

var vaikas = {
    klase: "4h",
    vardas: "Antanas"
};
tevas.vardas = "Kazys";

tevas.vaikas = vaikas;
console.log(tevas);
