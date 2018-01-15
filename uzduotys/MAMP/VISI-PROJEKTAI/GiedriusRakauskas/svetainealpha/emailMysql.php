<?php
// include('email.php');
define( 'HOST', 'localhost' );
define( 'DB_NAME', 'kontaktai' );
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
// getPrisijungimas();
function createForma($numeris, $x, $z) {
    // $x = mysqli_real_escape_string($x);
    // $z = mysqli_real_escape_string($z);

    $sql_tekstas = "INSERT INTO info VALUES ('', '$x', '$z');"   ;
    $result = mysqli_query( getPrisijungimas(), $sql_tekstas);

    if ( !$result) {
        echo "EROROR: sukurti nepavyko!! <br>" . mysqli_error( getPrisijungimas() );
    }
}
function getEmail() {
    $sql_tekstas = "SELECT * FROM info";
    $emailas = mysqli_query(getPrisijungimas(), $sql_tekstas);
    $x = mysqli_fetch_assoc($emailas);

    foreach ($x as $vardas => $emailas) {
        echo "$vardas : $emailas <br />";
    }

    // if ($emailas) {
    //     return $emailas;
    // } else {
    //     echo "Neveikia, bice";
    //     return NULL;
    // }


}
?>
