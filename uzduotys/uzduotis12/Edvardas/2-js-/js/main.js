console.log("Labas");
//
// var x=$('.id-1');
// x.data("manoID",101);
var x=$('#preke'); //maemem DOM objekta
var musuID=x.data('id');
var vardas=x.data('name')
console.log("id:",musuID);
console.log("data-name:",vardas);

x.attr("data-id",199);
x.attr('id','reklama');
x.attr('class','bg-info aukstis-500')


//
var image=$('img');
image.attr("width","400px");
image.attr("heigth","400px");
image.attr('src','../../../2.jpg');
