console.log("Labas");

var sarasas = [];
var worker1 = {},
    worker2 = {},
    worker3 = {};

worker1.name = "Ona";
worker1.lname = "Jakute";
worker1.gimimo = 1968;
worker1.age = 23;

worker2 = {
    name: "Jurgis",
    lname: "Jurgis",
    gimimo: 1988,
    age: 24
};

worker3.name = "Petras";
worker3.lname = "Petrauskas";
worker3.gimimo = 1981;
worker3.age = 61;

sarasas.push(worker1);
sarasas.push(worker2);
sarasas.push(worker3);

console.log(sarasas);

// uzduotis:
// A pakeisti Perto amziu i 62
// B pakeisti Onos varda i Janina
worker3.age = 63;
sarasas[2].age = 63;

worker1.name = "Janina";
console.log(sarasas);
console.log(worker3);
console.log(worker1);

// ------------------
for (var i = 0; i < sarasas.length; i++) {
     console.log( sarasas[i].name  );
     console.log( sarasas[i].lname  );
     console.log( sarasas[i].gimimo  );
     console.log( sarasas[i].age  );
     console.log( "==============" );
}





//
