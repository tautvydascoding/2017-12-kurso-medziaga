console.log(5555);

var vardas = "Jonas";
var pavarde = "Jonenas";
var klase = "8a";
console.log(vardas, pavarde, klase);

function printName() {
    console.log("Vardas:", vardas);
}
function printLName() {
    console.log("Pavarde:", pavarde);
}
function printClass() {
    console.log("Klase:", klase);
}
printName ();
printLName();
printClass();

function printVardasPavardeKlase(vardas, pavarde, klase) {

    console.log("Vardas:", vardas, "pavarde:", pavarde, "klase:", klase);

}
printVardasPavardeKlase("Antanas", "Antanauskas", 10);

document.write("JavaScript JavaScript <b class='bg-info'>JavaScript JavaScript</b> JavaScript JavaScript JavaScript JavaScript ");

// window.alert("Good Afternoon");
// alert("Viso");
// var ivestasTekstas = prompt("Ivestkite savo varda");
// console.log(ivestasTekstas);
function printKaina(x) {
console.log(x);
}
printKaina(999.00);
printKaina(13.49);
printKaina(100.05);
printKaina(999.00);

// function pazymiuVidurkis() {
//         console.log("Vidurkis:", (5+10+8+6+8)/5);
// }
//
// pazymiuVidurkis();
//
// function pazymiuVid(a, b, c, d, e) {
//     console.log((a+b+c+d+e)/5);
// }
// pazymiuVid(5, 10, 8, 6, 8);


// function getPazymiuVid(a, b, c, d, e) {
//     return (a+b+c+d+e)/5;
//
// }
//
// var x = getPazymiuVid(5,10,8,6,8);
// document.getElementById("demo").innerHTML = x;

function getPazVid(a=0 , b=0, c=0, d=0, e=0) {
console.log((a+b+c+d+e)/5);
}
getPazVid(10,2,8,5,2);



// var text = "";
// var i;

for (i = 0; i < 50; i++) {
    // text += "Azuolas" + i + "<br>";
    console.log("azuolas", i);
}

// console.log(i);

// var text = "";
// var i;
// for (i = 0; i < 51; i++) {
//     text += "<h2>Azuolas</h2>";
// }
// document.getElementsByClassName('el')[0].innerHTML = text;
// console.log(i);
// for (var i = 0; i < 20; i++) {
//     document.write("<h2> Azuolas</h2>" + i);
// }
// document.querySelector('section').innerHTML += "Azuolas<br>";
// uzdavinys
// kiek uzdirbsim per 20 metu, uzdirbdami 680, i menesi kylant algai 2%
// var kiekMen = 20*12;
// var menAlga = 680;
// var algosPok = 2; //2proc
// for (var i = 0; i < kiekMen; i++) {
//     var padidejimas = (menAlga * algosPok)/100;
//     // console.log("padidejimas", padidejimas);
//     menAlga = menAlga + padidejimas;
//     // console.log("men alga:", menAlga);
// }
// console.log("po 20m. gausim ", menAlga + padidejimas);
//
//
// function printX(x) {
// console.log(x);
// }
// for (var i = 0; i < 100; i++) {
//     printX("Alga " + (680 + i));
// }
//
// // ----------------------------------------------------------------
//
