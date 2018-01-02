  console.log("labas");
var adresas = "Kaunas, Savanoriu pr. 163";
console.log( adresas );

adresas = "Kaunas, Gudu g. 2";
console.log( adresas );



console.log("mano adresas:", adresas);

var x = 100;
var  X = 2;
var y = 10;
var atsakymas = 0;
atsakymas = (x + X + y) / 2;
console.log( atsakymas );

var k = "99";
atsakymas = k / x ;
console.log ( atsakymas );
typeof( k );
//f-ja kuri isveda kintamojo tipa
//  01 UZDUOTIS
// sukurti 3 Globalius kintamuosius:  vardas , pavarde, klase   (ir jiems priskirti reiksmes):
// atspausdinti visus kintamuosius

var vardas = "Romanas"
var pavarde = "Sedrikas"
var amzius = "25metai"
var atlyginimas = "1000"
console.log(vardas, pavarde, amzius, atlyginimas)

//  02 UZDUOTIS
// sukurti funkcijas:
// printName()  printLName(), printClass() ,
// kurios atspausdina i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius(){
    console.log("vardas:", vardas);
    console.log("pavarde:", pavarde);
    console.log("amzius:", ++amzius);
    console.log("atlyginimas:", atlyginimas--);
    console.log("atlyginimas:", atlyginimas);
}
printVardasPavardeAmzius();
//  03 UZDUOTIS
// parasyti f-ja printVardasPavardKlase(name, lname, klase)
function metinispajamuatlyginimas(){
var x = 12;
var ats = atlyginimas * x;
console.log("metines pajamos:" , ats);
// arba console.log("metines pajamos:" , atlyginimas *12); taip daro patyrusieji

}
metinispajamuatlyginimas();

//  4 UZDUOTIS
// A) sukurti kintamuosius:  salis, miestas, adresas, pastoKodas
// B) sukurti f-ja "printAddressData()",  kuri atspausdina i konsole visus siuos kintamuosius
var salis = "lietuva"
var miestas = "kaunas"
var adresas = "Dubajau g 24"
var pastoKodas = "568652"
console.log(salis, miestas, adresas, pastoKodas)
 function printAddressData(){
    console.log("salis", salis)
    console.log("miestas", miestas)
    console.log("adresas", adresas)
    console.log("pastoKodas", pastoKodas)
}
printAddressData();
//  5 UZDUOTIS
// sukurti funkcija "printTekstas(x)" ,
//  kuri atspausdina i konsole "x" reiksmes
// iskviesti f-ja ir vietoj x irasyti koki nors teksta pvz: printTekstas( "Jokubo istorijos");
function printTekstas(sk){ // sukuria var =
    console.log( sk );

}
printTekstas(122); // var sk=122

//uzduotis 6 sukurti f-ja kuri sudaugina du duotus skaicius
function printdaugyba(b1, y2) {
    var ats = b1 * y2;
//  console.log("sudauginus skaicius: ", b1 * x2);
    console.log( "sudauginti skaicius: ", b1 , " ir ", y2 , "atsakymas yra = ", ats );
}
printdaugyba(50, 10);
printdaugyba(0, 10);
printdaugyba(50, -10);
printdaugyba(5, 0.5);
printdaugyba(5, "labas");

//7 UZDUOTIS
// f-ja kur ipaskaiciuoja trikampio ilaja krastine (pitagoro teorema)
// pitagoro teorema (x,y)   x*x + y*y
function pitagoroTeorema(x, y) {
    var istrizaine = (x*x) + (y*y);
    istrizaine = Math.sqrt(istrizaine);
    console.log( istrizaine);
    // arba
    console.log(  Math.sqrt( x*x + y*y ) );
}
pitagoroTeorema(2, 3);
