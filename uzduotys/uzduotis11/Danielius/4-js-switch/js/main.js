console.log("Labas");


var ieskome = "audi";

ieskome = ieskome.slice( 1, ieskome.length -1 );
console.log(ieskome);
switch (ieskome) {
    case "balti":

    console.log('ieskoma fraze - balti');

        break;
    case "audi":

    console.log('ieskoma fraze - audi');

        break;
    case "volvo":

    console.log('ieskoma fraze - volvo');

        break;
    case "MB":

    console.log('ieskoma fraze - MB');

        break;
    default: //veikia kaip else, jei neras atitikimo vykdys sita koda:
        console.log("ieskomos frazes nera");
}
