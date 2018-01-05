console.log("Labas");
var sarasas=[];
var darbuotojas1={};
var darbuotojas2={};
var darbuotojas3={};
//vienas budas
darbuotojas1.name="ona";
darbuotojas1.lname="jakute";
darbuotojas1.gimimo="1968";
darbuotojas1.age="23";
//antras budas
darbuotojas2={
    name:"jurgis",
    lname:"jurgis",
    gimimo:1988,
    age:24
}
darbuotojas3={
    name:"petras",
    lname:"petrauskas",
    gimimo:1981,
    age:61
}
sarasas.push(darbuotojas1);
sarasas.push(darbuotojas2);
sarasas.push(darbuotojas3);
console.log(sarasas);

//A uzduotis pakeisti petro amziu
darbuotojas3.age=62;
console.log(darbuotojas3);
//kitas budas
// sarasas[3].age=65;
// console.log(sarasas);
//B pakeisti onos varda i janina
darbuotojas1.name="janina";
console.log(darbuotojas1);
//kitas budas
// sarasas[1].name=janina;
// console.log(sarasas)

//atsispausdinsim savo sarasa su 4 ciklu
for (var i = 0; i < sarasas.length; i++) {
    console.log(sarasas[i].name);
    console.log(sarasas[i].lname);
    console.log(sarasas[i].gimimo);
    console.log(sarasas[i].age);
    console.log("========"); //sukuria atskirimo zenkla tarp darbuotoju

}
