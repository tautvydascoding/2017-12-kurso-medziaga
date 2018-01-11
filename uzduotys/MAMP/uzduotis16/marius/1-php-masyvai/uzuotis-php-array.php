// uzduotis 1
// A. susikurti meniu masyva: home, about, gallery, contact, blog 
// B. atspausdinti visus meniu punktus i HTML (su html tag'ais)

<?php    

$meniu = ["home", "about", "gallery", "contact", "blog"]; 

foreach ($meniu as $reiksme) {
    print('<h2>'. $reiksme . "</h2>");
}

echo ("<br>");
?>


// uzduotis 2
// A. susirasti 6 nuotraukas
// B. susikurti nuotrauku pavadinimu masyva 
// C. atspausdinti visas nuotraukas su ciklu, po 3-ris i eilute
   // <img src="./img/1.jpg" alt=''  />
   
<?php 

$fotoList = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

foreach ($fotoList as $index => $value) {
    print("<img src='./img/" . $value . " ' " );
    if ($index == 2) {
        echo ("<br>");
    }
}




?>   
   
   
   
   // uzduotis 3
// sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
//  Antraste, img pavadinimas, prekes aprasymas, kaina
// A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
// B. i masyva visosPrekes, ideti "preke" masyva
// C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach)


