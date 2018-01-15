<?php
$x = ["tomas", 21, "kaunas"];
$x[1]= 23;
echo "Miestas:".$x[2]."<br>";
print_r($x); // atspausdina visa masyva
print('miestas'.$x[2])."<br>";  //kaip echo

printf("Misku ejo %s jis buvo kiles is %s", $x[0], $x[2])."<br>";

$x1 = ["Home", "about", "gallery", "contact", "blog"];
print_r($x1)."<br>";

// printf("
// <nav>
//     <ul>
//         <li> %s </li>
//         <li> %s </li>
//         <li> %s </li>
//         <li> %s </li>
//         <li> %s </li>
//     </ul>
// </nav><br>",
//     $x1[0],$x1[1]$x1[2],$x1[4],$x1[3]);
//
// echo "
// <nav>
//     <ul>
//         <li>$x1[0]</li>
//         <li>$x1[1]</li>
//         <li>$x1[2]</li>
//         <li>$x1[4]</li>
//         <li>$x1[3]</li>
//     </ul>
// </nav>";
?>

<br><a><b>SU ECHO</b></a>
<?php
echo "<nav>";
echo "    <ul>";
echo "        <li>$x1[0]</li>";
echo "        <li>$x1[1]</li>";
echo "        <li>$x1[2]</li>";
echo "        <li>$x1[4]</li>";
echo "        <li>$x1[3]</li>";
echo "    </ul>";
echo "</nav>";


$nuotraukos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

// for ($i=0; $i < count($nuotraukos); $i++) {
for ($i=0; $i < 4; $i++) {
    if ($i % 2 === 0) { // modulio dalyba, kur grazina liekana
        echo "<br />";
    }
    echo "<img src='./img/$nuotraukos[$i]' width='200px' alt=''  />";
}


 ?>

 <ul>  <a><b>SU HTML ECHO</b></a>

     <li><?php echo $x1[1]; ?></li>
     <li><?php echo $x1[2]; ?></li>
     <li><?php echo $x1[4]  ?></li>
     <li><?php echo $x1[0] ?></li>
     <li><?php echo $x1[3] ?></li>
 </ul>

<!--
// printf("
// <nav>
//     <ul>
//         <li>$x1[0]</li>
//         <li>$x1[1]</li>
//         <li>$x1[2]</li>
//         <li>$x1[3]</li>
//         <li>$x1[4]</li>
//     </ul>
// </nav>");

// <! // uzduotis 1
// // A. susikurti meniu masyva: home, about, gallery, contact, blog
// // B. atspausdinti visus meniu punktus i HTML (su html tag'ais)
//
//
// // uzduotis 2
// // A. susirasti 6 nuotraukas
// // B. susikurti nuotrauku pavadinimu masyva
// // C. atspausdinti visas nuotraukas su ciklu, po 3-ris i eilute
//    // <img src="./img/1.jpg" alt=''  />
//
//


//
//
//    // uzduotis 3
// // sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
// //  Antraste, img pavadinimas, prekes aprasymas, kaina
// // A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
// // B. i masyva visosPrekes, ideti "preke" masyva
// // C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach) -->
<?php
$preke1 = ['Nike bateliai','1.jpg','99.99','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'];
$preke2 = ['Raisteliai','2.jpg','0.99','22222222222222222222222222Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'];
$preke3 = ['Svoriai','3.jpg','249.99','33333333333333333Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.'];

// $preke1 = getPrekes(33);
$visosPrekes = [];
$visosPrekes [0] = $preke1;
$visosPrekes [1] = $preke2;
$visosPrekes [2] = $preke3;

// print_r( $visosPrekes);

for ($i=0; $i < 4; $i++) {
            echo "<h2>".$visosPrekes[$i][0]."</h2>";
            // printf ("<img src='./img/".$visosPrekes[$i][1]."' width='50px' alt=''  /></br></br>");
            echo "<img src='./img/"$visosPrekes[$i][1]"width ='50px' alt=''  />";
            echo "<button class='btn btn-lg bt-success text-light'>".$visosPrekes[$i][2]."</button>";
            // echo "<button class='btn btn-lg bt-success text-light' type='button' name='Pirkti'>".'Pirkti '.$visosPrekes[$i][2]."</button>";
            echo "<h6>".$visosPrekes[$i][3]."</h6>";
}
    // echo "<img src='./img/$visosPrekes[$i]' width='200px' alt=''  />";


?>
