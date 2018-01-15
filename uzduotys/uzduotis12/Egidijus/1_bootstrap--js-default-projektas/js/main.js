console.log("Labas");

var sarasas = [];
    worker1 = {},
    worker2 = {},
    worker3 = {};

worker1.name = "Ona";
worker1.lname = "Jakute";
worker1.gimimo = 1968;
worker1.age = 23;

// arba
worker2 = {
    name: "Jurgis",
    lname: "Jurginis",
    gimimo: 1988,
    age: 24
};

worker3.name = "Pertas";
worker3.lname = "Petrauskas";
worker3.gimimo = 1981;
worker3.age = 61;

sarasas.push(worker1);
sarasas.push(worker2);
sarasas.push(worker3);

console.log(sarasas);

// A Pakeisti petro amziu i 62;
// B Pakeisti Onos varda i Janina;

worker3.age = 62;
// arba per masyva
sarasas[0].name = "Janina";
console.log(worker3);
console.log(worker1);


for (var i = 0; i < sarasas.length; i++) {
    console.log(sarasas[i].name );
    console.log(sarasas[i].lname );
    console.log(sarasas[i].gimimo );
    console.log(sarasas[i].age );
    console.log("________________");

}
