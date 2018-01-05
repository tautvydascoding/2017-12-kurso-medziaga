console.log("Labas");

// Sukuria naują HTML elementą su tekstu
function sukurtiHTMLelem (tag, text) {
    // tag = "'"+tag+"'";
    let sukurtas = document.createElement(tag);
    sukurtas.textContent = text;
    // console.log(sukurtas);
    DIV.append(sukurtas);
return sukurtas;
}



const PATH = document.querySelector('.container');

var header, antraste, parag; 

header = document.createElement('header');
antraste = document.createElement('h3');
antraste.textContent = "Naujai sukurtas H3";
parag = document.createElement('p');
parag.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, mollitia?";
parag2 = document.createElement('li');
parag2.textContent = "Naujas paragrafas";

PATH.appendChild(header);
PATH.appendChild(antraste);
document.querySelector('ul').insertBefore(parag2, document.querySelector('li'));
document.querySelector('ul').insertAdjacentElement("beforeend", parag2);

console.log('header: '+ header);
console.log('antraste: '+ antraste);








