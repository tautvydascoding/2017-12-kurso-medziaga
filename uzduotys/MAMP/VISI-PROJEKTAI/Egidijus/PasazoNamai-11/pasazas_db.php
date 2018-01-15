<?php


// 0) prisijungtiDB(....)
// 1) getDoctor($nr)
// 2) createDoctor($vardas, $pavarde)
// 3) deleteDoctor($nr)
// 4) editeDoctor($nr, $vardas, $pavarde)
// 5) getDoctors( $kiekis = 9999 )


define( 'HOST', 'localhost' );
define( 'DB_NAME', 'pasazas' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', 'root' );


$prisijungimas = mysqli_connect( HOST, DB_USER, DB_PASSWORD, DB_NAME);  // jeigu pakeistas mysql portas, reik nurodyti ir savo Port'a, pvz: 8889

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


 // ====================get doctor===================
 function getDoctor($nr) {  // $nr - yra local
     $sql_tekstas = "SELECT * FROM meniu WHERE id=$nr; "; // !!! visada pasitikrinti SQL komandas konsoleje

     // liepiam vykdyti musu SQL teksta
     $daktaras =  mysqli_query( getPrisijungimas(),  $sql_tekstas );

     if ($daktaras) {
         // echo "radom daktara:  $nr  <br>";
         return $daktaras;
     } else {
         echo "ERROR: tokio daktaro nere <br>";
         return NULL;
     }
 }
 // testuojame ar musu f-ja gerai veikia=============
// $x = getDoctor(2);
// // print_r( $x );  // gryzo mysql objektas
//
// $x = mysqli_fetch_assoc( $x ); // mysqli_fetch_assoc() - mysql objiekta pavercia i masyva (asociatyvu)
// $x = mysqli_fetch_array( $x );  // pavercia i masyva (paprasta IR asociatyvu)!!
// // Array ( [0] => 2 [id] => 2 [1] => Paul [name] => Paul [2] => Leo [lname] => Leo )
//
// // print_r( $x );
// // $vardas = $x['name'];
// // $pavarde = $x['lname'];
// $vardas = $x[1];
// $pavarde = $x[2];
//
// echo "<h2>$vardas $pavarde</h2>";

//===================create doctor===============
function createDoctor($vardas, $pavarde) {
    $vardas = mysqli_real_escape_string($vardas);
    $pavarde = mysqli_real_escape_string($pavarde);

    $sql_tekstas = "INSERT INTO doctors VALUES ('', '$vardas', '$pavarde');"   ;
    $result = mysqli_query( getPrisijungimas(), $sql_tekstas);

    if ( !$result) {
        echo "EROROR: sukurti nepavyko!! <br>" . mysqli_error( getPrisijungimas() );
    }
}

// createDoctor('Antanas2', "Stikline");
// createDoctor('Antanas', "Stikline");
// createDoctor('Antanas', "Stikline");
//=====================delete doctor ======================
function deleteDoctor($nr) {
    $sql_tekstas = "DELETE FROM doctors WHERE id= $nr;  ";
    $arPavyko = mysqli_query( getPrisijungimas(), $sql_tekstas);

    if ( !$arPavyko) {
         echo "ERROR: istrinti nepavyko nr: $nr" . mysqli_error( getPrisijungimas() );
    }
}
// deleteDoctor(11);
//==================update doctor===========================
// $nr - kuri gydytoja redaguosime
// $vardas - naujas vardas
// $pavarde - nauja pavarde
function editeDoctor($nr, $vardas, $pavarde) {
    $vardas = mysqli_real_escape_string($vardas);
    $pavarde = mysqli_real_escape_string($pavarde);

    $sql_tektas = "UPDATE doctors SET name='$vardas', lname='$pavarde'
                    WHERE id=$nr; ";

    $arPavyko =  mysqli_query( getPrisijungimas(), $sql_tektas);
     // UPDATE doctors SET name='Mike', lname='Pukuotukas'     WHERE id=12;
     if ( !$arPavyko) {
            echo "ERROR: redaguoti nepavyko nr: $nr" . mysqli_error( getPrisijungimas() );
     }
}

// editeDoctor(3, 'Onaite', 'Egliene');

// keisime tik varda, o pavarde paliksime ta pacia
// $x = getDoctor(3);
// $x = mysqli_fetch_assoc($x);
// editeDoctor(3, 'Marija', $x['lname'] );
//=======================================================

//===================create Mesage===============
 // print_r($_POST);
// $autorius = $_POST ['autorius'];
// $antreste = $_POST ['antraste'];
// $atsiliepimas = $_POST ['atsiliepimas'];

function createMessage($autorius, $antreste, $atsiliepimas) {
    // $autorius = mysqli_real_escape_string($autorius);
    // $pavarde = mysqli_real_escape_string($antreste);
    // $atsiliepimas = mysqli_real_escape_string($atsiliepimas);

    $sql_tekstas = "INSERT INTO atsiliepimai VALUES ('',CURRENT_TIMESTAMP,'$autorius', '$antreste', '$atsiliepimas');"   ;
    $result = mysqli_query( getPrisijungimas(), $sql_tekstas);

    if ( !$result) {
        echo "EROROR: sukurti nepavyko!! <br>" . mysqli_error( getPrisijungimas() );
    }
}

// createDoctor('Antanas2', "Stikline");

// ====================get atsiliepimas===================
function getatsiliepimas($nr) {  // $nr - yra local
    $sql_tekstas = "SELECT * FROM atsiliepimai WHERE id=$nr; "; // !!! visada pasitikrinti SQL komandas konsoleje

    // liepiam vykdyti musu SQL teksta
    $atsiliepimas1 =  mysqli_query( getPrisijungimas(),  $sql_tekstas );

    if ($atsiliepimas1) {
        // echo "radom atsiliepima:  $nr  <br>";
        return $atsiliepimas1;
    } else {
        echo "ERROR: tokio atsiliepimo nera <br>";
        return NULL;
    }
}

//===================create email===============
 // print_r($_POST);

function createEmail($klientas, $klientoEmail, $klientoKlausimas) {
    // $klientas1 = mysqli_real_escape_string($klientas);
    // $klientoEmail1 = mysqli_real_escape_string($klientoEmail);
    // $klientoKlausimas1 = mysqli_real_escape_string($klientoKlausimas);

    $sql_tekstas = "INSERT INTO laiskai VALUES ('',CURRENT_TIMESTAMP,'$klientas', '$klientoEmail', '$klientoKlausimas');"   ;
    $result = mysqli_query( getPrisijungimas(), $sql_tekstas);

    if ( !$result) {
        echo "EROROR: sukurti nepavyko!! <br>" . mysqli_error( getPrisijungimas() );
    }
}
// createDoctor('Antanas2', "Stikline");

// ====================get email===================
function getemail($nr) {  // $nr - yra local
    $sql_tekstas = "SELECT * FROM laiskai WHERE id=$nr; "; // !!! visada pasitikrinti SQL komandas konsoleje

    // liepiam vykdyti musu SQL teksta
    $laiskas1 =  mysqli_query( getPrisijungimas(),  $sql_tekstas );

    if ($laiskas1) {
        // echo "radom laiska:  $nr  <br>";
        return $laiskas1;
    } else {
        echo "ERROR: tokio emailo nera <br>";
        return NULL;
    }
}
