console.log("Labas");






// var article = document.getElementById('preke');
//  article.dataset.id = 20;
// var y = article.dataset.id;
// console.log("y", y);
//
// var x = $('#preke');
// x.attr("data-id", 101);
// console.log("x", x);

var x = $('#preke');  // paemem DOM objekta
var musuID = x.data('id');
var vardas = x.data('name');

console.log("id:", musuID);
console.log("data-name:", vardas);

x.attr("data-id", 199);
x.attr('id', 'reklama');
x.attr('class', 'bg-info  aukstis-500');

var paveiksliukas = $('img');
paveiksliukas.attr('heigth', '400px');
paveiksliukas.attr('width', '400px');
paveiksliukas.attr('src', '../../../2.jpg');


//
