<?php
define( 'HOST', 'localhost' );
define( 'DB_NAME', 'galerija' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', 'root' );
$prisijungimas = mysqli_connect( HOST, DB_USER, DB_PASSWORD, DB_NAME);
mysqli_set_charset($prisijungimas, 'utf8');

function getPrisijungimas() {
    // !!! funciju viduje, neiseina pasiekti kintamuju, kurie aprasyti virs f-jos
    global $prisijungimas;  // paskelbiam, kad norime prieiti prie globalaus kintamojo

    if( $prisijungimas ) {
        // echo "Prisijungerte sekmingai <br>";
    } else {
        die ('Prisijungti prie DB nepavyko: ' . mysqli_connect_error()  );
    }
    return $prisijungimas;
}
getPrisijungimas();

function getNuotrauka($albumas) {
    $sql_tekstas = "SELECT * FROM $albumas;";
    $rezultatas = mysqli_query(getPrisijungimas(), $sql_tekstas);
    return $rezultatas;
}












 ?>
