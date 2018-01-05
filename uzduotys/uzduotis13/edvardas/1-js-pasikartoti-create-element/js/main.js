console.log("Labas");
//uzduotis- pasikartojimas
//a sukurti header elementa
var header=document.createElement('header')

// document.querySelector('.container').appendChild(header);

//                    cia tetis----------idedamie pries--------h1 elementa
document.querySelector('.container').insertBefore(header,document.querySelector('h1')  );
//tetis insertBefore

var h3=document.createElement('h3')
document.querySelector('header').appendChild(h3)
h3.innerHTML+="sveiki visi";

//b
