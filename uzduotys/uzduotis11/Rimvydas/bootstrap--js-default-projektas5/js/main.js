// PASIKARTOTI
// js saugosime mokinio informacija:
// 			mokinio: vardo, pavardes, kelintokas. mokinio matematikos pazymiai (6, 5, 9 , 10, 8)
// Uzdavinys:
// 1) isvesti i console mokinio informacija.
// 2) pasirasyti funkcija, kuri is duotu 5 pazymiu, grazintu ju vidurki

var mokinys = {
  vardas: "tomas",
  pavarde: "tomukas",
  klase: "7b",
  pazymiai: [6, 5, 9, 10, 8,]
};
console.log(mokinys);


// uzduotis: sukurti 2 objektus:
// 1) tevas : vardas, pavarde, vaikas: {}
// 2) vaikas: klase, vardas
// 3) priskirti tevo objekui (kintamajam) vaika

var tevas = {
  vardas: "Juozas",  // lokalus ir nera pasiekiami isoreje
  pavarde: "Juozinas",
  vaikas: {}
};
console.log(tevas);
tevas.vardas = "Pranas";
console.log(tevas);

var vaikas = {
  klase: 9,
  vardas: "Ignas"
};

//3.1
tevas.vaikai = vaikas;
console.log(tevas);
