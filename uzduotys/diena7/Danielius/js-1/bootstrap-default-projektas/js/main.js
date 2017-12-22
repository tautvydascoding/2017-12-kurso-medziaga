// console.log('Labas');
//
// var adresas = "Kaunas, Savanoriu g., 5454";
// console.log( adresas );
// adresas = "Kaunas, Gudu g. 2";
// console.log( adresas );
//
// console.log("Mano adresas:", adresas); //galima isvardinti daugiau kintamuju eiluteje

// var x = 100;
// var y = 5;
// var z = 15;
// var atsakymas = 0;

// atsakymas = (x + y + z) / 2;
// console.log( atsakymas );
//
// var k = "99";
// atsakymas = k + x;
// console.log( atsakymas );
//
// atsakymas = k / x;
// console.log( atsakymas );
// typeof( k );
var vardas, pavarde, amzius, atlyginimas;
vardas = "Petras";
pavarde = "Petrauskas";
amzius = "40";
atlyginimas = "1000"

console.log(vardas, pavarde, amzius, atlyginimas);
console.log("amzius:", amzius );
function printVardasPavardeAmzius() {
    console.log("vardas:", vardas);
    console.log("pavarde:", pavarde);
    console.log("amzius:", ++amzius);
    console.log("atlyginimas:", atlyginimas--);
    console.log("atlyginimas:", atlyginimas);

}
printVardasPavardeAmzius();

function printMpd() {
    // ilgas budas
    // var x = 12;
    // var ats = atlyginimas * x;
    // console.log("metines pajamos:", ats);
    console.log("metines pajamos:", atlyginimas * 12);
}
printMpd();

var salis, miestas, adresas, pastoKodas;
salis = "Lietuva";
miestas = "Kaunas";
adresas = "Aaa g., 11";
pastoKodas = "LT-54876";

function printAddressData() {
    console.log("Salis:", salis);
    console.log("Miestas:", miestas);
    console.log("Adresas:", adresas);
    console.log("Pasto kodas:", pastoKodas);

}
printAddressData();

function printTekstas(x,y) { //var x = 'Labas'
    console.log(x + y);

}
// printTekstas("Labas");
printTekstas(999,80);


function daugyba(x, y){
// return x * y;
console.log("sudauginus:",x, "ir", y, "gaunam", x * y);
}
daugyba(50, 10);
daugyba(0, 10);
daugyba(50, -10);
daugyba(5, 0.5);
daugyba(5, "labas");

function pitagc(x, y) {
    // console.log(Math.sqrt(x*x + y*y));
    var istrizaine = (x*x) + (y*y);
    istrizaine = Math.sqrt( istrizaine );
    console.log( istrizaine );
}
pitagc(4.5, 6);
