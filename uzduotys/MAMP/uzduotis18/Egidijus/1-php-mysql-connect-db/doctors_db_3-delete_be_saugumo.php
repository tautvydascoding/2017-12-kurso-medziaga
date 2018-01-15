<?php

// 1) getDoctor ($nr)
// 2) createDoctor ($vardas, $pavarde)
// 3) deleteDoctor ($nr)
// 4) editDoctor($nr)
// 5) getDoctors($kiekis = 9999)
// $sarasas = ["Tomas", "Tomauskis", 21, "6512"];
//
// // kai reikia vus masyvo reiksniu
// foreach ($sarasas as $reiksme) { // reiksme bus - stalciaus reiksme
//     echo $reiksme."<br>";
// }

// // // arba galima naudoti
// // for ($i=0; $i < count($sarasas); $i++) {
// //     echo $reiksme."<br>";
// // }
//
// $sarasas2 = ['name'=>"Tomas2", 'lname'=>"Tomauskis2", 212, "65122"];
//
// foreach ($sarasas as $pavadinimas=>$reiksme) { // reiksme bus - stalciaus reiksme
//     echo $pavadinimas.":".$reiksme."<br>";
// }
//

define("HOST", "localhost");
define("DB_NAME", "hospital12");
define("DB_USER", "root");
define("DB_PASSWORD", "root");

// mysqli_connect(HOST, DB_USER, DB_PASSWORD, DB_NAME, MSQL Porto skaiciukai)
// $prisijungimas = mysqli_connect(HOST, DB_USER, DB_PASSWORD, DB_NAME);

// function getprisijungimas ($prisijungimas) {
//
// if ($prisijungimas) {
//     echo "Prisijungete sekmingai<br>";
// } else {
//     die ("Nepavyko". mysqli_error());
// }
//     return $prisijungimas;
// }
// getprisijungimas($prisijungimas);
// echo "kazka";

// arba paskelbiam kad norim prie globalaus kintamojjo
$prisijungimas = mysqli_connect(HOST, DB_USER, DB_PASSWORD, DB_NAME);
function getprisijungimas () {
    global $prisijungimas; // arba paskelbiam kad norim prie globalaus kintamojjo

if ($prisijungimas) {
    // echo "Prisijungete sekmingai<br>";
} else {
    die ("Nepavyko". mysqli_error());
}
    return $prisijungimas;
}
getprisijungimas();

// =========================== Get Doctor =================
// function getDoctor($nr) { // $nr - yra Local
//         $sql_tekstas = "SELECT * FROM doctors WHERE id=$nr";
//         // echo $sql_tekstas;
// //liepiam vykdyti musu SQL teksta
//     $daktaras = mysqli_query(getprisijungimas(), $sql_tekstas );
//
//     if ($daktaras) {
//             echo "radom daktara:$nr <br>";
//             return $daktaras;
//     } else {
//             echo "Error: Tokio daktaro neradom <br>";
//             return NULL;
//     }
// }
// getDoctor(3);
// // Testuojam ar funkcija gerai veikia
//
// $x = getDoctor(2);
// print_r ($x);
// $x = mysqli_fetch_assoc( $x ); // Si funkcija SQL objekta pavercia i masyva (asociatyvu, t.y. stalciukai tures pavadinimus)
// // $x = mysqli_fetch_array( $x ); // Si funkcija SQL objekta pavercia i masyva (paprasta !!! ir asociatyvu, t.y. stalciukai tures pavadinimus)
// echo "<br><br>";
// print_r ($x);
//
// $vardas= $x['name'];
// $pavarde= $x['lname'];
//
// echo "<h2>$vardas $pavarde<h2>";

// ================== create doctor ===========================
// function creatDoctor($vardas, $pavarde){
//     $sql_tekstas = " INSERT INTO doctors VALUES ('','$vardas','$pavarde');";
//     $result = mysqli_query( getprisijungimas(), $sql_tekstas);
//     if (!$result) {
//         echo "Erorr: sukurti nepavyko !!!! <br>".mysqli_error(getprisijungimas());
//     }
// }
//
// creatDoctor('Antanas2','Stikline');

// ================== DELETE doctor ===========================

function deleteDoctor($nr){
    $sql_tekstas = "DELETE FROM doctors WHERE id=$nr;";
    $arpavyko = mysqli_query( getprisijungimas(), $sql_tekstas);
    if (!$arpavyko) {
        echo "Erorr: trinti nepavyko nr.: $nr !!!! <br>".mysqli_error(getprisijungimas());
    }
}

deleteDoctor(11);
