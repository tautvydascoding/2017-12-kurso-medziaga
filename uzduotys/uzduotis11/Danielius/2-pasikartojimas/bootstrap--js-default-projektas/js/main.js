console.log("Labas");

var vardai = ["Jonas", "Petras", "Kazys", "Antanas", "Ona", "Ieva", "Egle", "Juste"];
var vardai2 = [];
console.log(vardai);
// for (var i = 0; i < vardai.length; i++) {
//     console.log(vardai);
// }

vardai2[0] = "Karolis";
vardai2[1] = "Petras";
vardai2[2] = "Jonas";
vardai2[3] = "Paulius";
vardai2[4] = "Antanas";
vardai2[5] = "A";
vardai2[6] = "B";
vardai2[7] = "C";

console.log(vardai2.join(" : "));
console.log(vardai2.toString());

//sujungti 2 masyvus
var visiVardai = [];
visiVardai = vardai.concat(vardai2);
console.log(visiVardai);

//masyvo kopijavimas - netinkamas naudoti "="
var x = ["Jonas", "Antanas"];
var y = x;
y[0] = "John";
console.log("y:",y,"x:", x);
//naudoti slice
var z = [];
z = x.slice(0, x.length);
z[0] = "Jonas";
console.log("z:", z, "x:", x);

//2 uzduotis
for (var i = 0; i < visiVardai.length; i++) {
    var x = visiVardai[i];
    console.log(x);
}
i=0;
while (i < visiVardai.length) {
    var x = visiVardai[i];
    console.log(x);
    i++;
}
