console.log("Labas");

var adresas = "Kaunas, savanoriu pr.163";
console.log( adresas );

adresas = "Kaunas, savanoriu pr.2";
console.log( adresas );

console.log("Mano adresas:", adresas);

var x = 100;
var y = 2;
var z = 10;
var atsakymas = 0;

atsakymas = (x + y + z) / 2;

console.log( "Atsakymas:", atsakymas );
var k = "99"

// atsakymas = k + x;
// console.log( "Atsakymas:", atsakymas );

atsakymas = k/x;
console.log( "Atsakymas:", atsakymas );

// ==============patarimai==========
// reiksme  - kintamasis  / variable
// "reiksme" - tekstas/ reiksme/ value
// reiksme() - f-jos paleidimas
// =============================


//  1 UZDUOTIS
// sukurti kintamuosius (ir jiems priskirti reiksmes):
// vardas, pavarde, amzius, atlyginimas
var vardas, pavarde, amzius, atlyginimas;
vardas = "tomas";
pavarde ="tomaitis";
amzius = 21;
atlyginimas = 1000;
console.log (vardas,  pavarde, amzius, atlyginimas);
console.log ("Mano amzius: ", amzius);

//  2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" ,
// kuri atspausdina i konsole pirmos uzduoties kintamuosius
function printVardasPavardeAmzius() {
    console.log("vardas: ", vardas);
    console.log("pavarde: ", pavarde);
    console.log("amzius: ", ++amzius);
    console.log("atlyginimas: ", atlyginimas++);
    console.log("atlyginimas: ", atlyginimas);
}
printVardasPavardeAmzius ();

//  3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()" ,
// kuri  atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas yra lygus uzduotis 1 kintamajam - atlyginimas)

function printMetinisPajamuDydis() {
    atlyginimas = atlyginimas * 12
    console.log("12 atlyginimu: ", atlyginimas);
}
printMetinisPajamuDydis()


//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius

var salis, miestas, adresas, pastoKodas;
salis = "Lietuva";
miestas = "Kaunas";
adresas = "Kursiu g.";
pastoKodas = "LT 752103";
function printAddressData() {
    console.log("Salis: ", salis);
    console.log("miestas: ", miestas);
    console.log("adresas: ", adresas);
    console.log("pastoKodas: ", pastoKodas);
}
printAddressData()

//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta
// pvz: printTekstas( "Jokubo istorijos");

function printTekstas(sk) {   // var sk =
    console.log(sk);
}
printTekstas (122); // var sk = 122
printTekstas (999); // var sk = 999
printTekstas ("labas krabas"); // var sk = "labas krabas"

// 6 Uzduotis
// du skaiciai susidaugina ir isvesti atsakymas


function daugyba (x,y,z) {
    z = x * y;
    // console.log("sudauginti skaiciai: ", z);

    // console.log("sudauginti skaiciai: ", x * y);
    console.log("sudauginti skaiciai: ", x, "ir", y,"yra",z);


}
daugyba (50,10);
daugyba (5,0.5);
daugyba (5,-1);
daugyba (5,"labas");

// 7 Uzduotis
// pitagoro torema izambines ilgiui skaiciuoti

function izambinesIlgis(x,y,z,ats) {
z = x*x + y*y;
ats = Math.sqrt(z);

console.log("Izambines ilgis: ",ats);
}

izambinesIlgis (4,1);
izambinesIlgis (5,0.5);
izambinesIlgis (5,-1);
izambinesIlgis (5,"labas");
