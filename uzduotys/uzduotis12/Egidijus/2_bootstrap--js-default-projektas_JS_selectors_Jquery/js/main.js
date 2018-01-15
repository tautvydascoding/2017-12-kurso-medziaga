console.log("Labas");

// PAEMIMAS
var x = $("#preke"); // paima visa objekta DOM
var musuID= x.data("id");
var musuID= x.data("name");

console.log("id:", musuID);
// console.log("name:", vardas);
// PAKEITIMAS
x.attr("data-id", 199);
x.attr("id", "reklama");
x.attr("class", "bg-info aukstis-500");

var paveiksliukas = $("img");
paveiksliukas.attr("heigth", "400px");
paveiksliukas.attr("width", "400px");
paveiksliukas.attr("src", "../../../2.jpg");
