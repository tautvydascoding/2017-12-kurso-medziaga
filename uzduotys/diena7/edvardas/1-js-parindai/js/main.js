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
metinispajamuatlyginimas()
