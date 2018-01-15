console.log("Labas");

var ieskome= "audis";
ieskome = ieskome.slice(1, -1);
console.log(ieskome);
switch (ieskome) {
    case "chromuoti":
                    console.log("ieskoma fraze buvo - chromuoti");
                    break;
    case "audi":
                    console.log("ieskoma fraze buvo - audi");
                    break;
    case "udi":
                    console.log("ieskoma fraze buvo - udi");
                    break; 
    case "BMW":
                    console.log("ieskoma fraze buvo - BMW");
                    break;
    case "VOLVO":
                    console.log("ieskoma fraze buvo - VOLVO");
                    break;

    default:
        console.log("ieskomos frazes atitikimu nera");
}
