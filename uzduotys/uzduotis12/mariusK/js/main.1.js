console.log("Labas");

var sarasas = [];

var worker1 = {},
    worker2 = {},
    worker3 = {};

worker1.name = 'Ona';
worker1.lname = 'Jakutiene';
worker1.gimimo = 1963;
worker1.age = 23;
worker2 = {
    name: 'Jurgis',
    lname: 'Jurginis',
    gimimo: 1988,
    age: 24
};

worker3.name = 'Petras';
worker3.lname = 'Petrauskas';
worker3.gimimo = 1981;
worker3.age = 61;

sarasas.push(worker1);
sarasas.push(worker2);
sarasas.push(worker3);


// console.log(sarasas);

// pakeisti petro amziu i 62
// pakeisti onos varda i Janina

worker3.age = 62;
worker1.name = "Janina";

console.log(sarasas);

for (let i = 0; i < sarasas.length; i++) {
    console.log(sarasas[i].name);
    console.log(sarasas[i].lname);
    console.log(sarasas[i].gimimo);
    console.log(sarasas[i].age);
    console.log("--------------");
    
    
};
