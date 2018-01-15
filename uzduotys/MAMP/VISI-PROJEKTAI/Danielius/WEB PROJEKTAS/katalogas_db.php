<?php


// UPDATE mysql.user SET user='newusername',
//  password=PASSWORD('newpassword') WHERE user='root';
//  FLUSH PRIVILEGES;

define( 'HOST', 'localhost' );
define( 'DB_NAME', 'prekes' );
define( 'DB_USER', 'dans' );
define( 'DB_PASS', 'slaptazodis' );

$prisijungimas = mysqli_connect( HOST, DB_USER, DB_PASS, DB_NAME );

mysqli_set_charset($prisijungimas, 'utf-8');

function getPrisijungimas(){
    global $prisijungimas;
    if ($prisijungimas) {
        // echo "Prisijungete sekmingai! <br>";
    } else {

        die('Prisijungti prie duomenu bazes napvyko <br>' . mysqli_connect_error() );
    }
    return $prisijungimas;
}

getPrisijungimas();

//--------------------get preke------------------
function getPreke($nr){
    $sql_tekstas = " SELECT * FROM vestuvines WHERE id = $nr; "; 

    $vestsuk1 = mysqli_query( getPrisijungimas(), $sql_tekstas);
    if ($vestsuk1) {

        return $vestsuk1;
    }else {
        echo "ERROR: Nera <br>";
        return NULL;
    }
}
function getPreke2($nr){
    $sql_tekstas = " SELECT * FROM progines WHERE id = $nr; ";

    $vestsuk1 = mysqli_query( getPrisijungimas(), $sql_tekstas);
    if ($vestsuk1) {

        return $vestsuk1;
    }else {
        echo "ERROR: Nera <br>";
        return NULL;
    }
}
function getPreke3($nr){
    $sql_tekstas = " SELECT * FROM kontaktai WHERE id = $nr; "; //pasitikrinti ar veikia konsolej pries naudojant

    $vestsuk1 = mysqli_query( getPrisijungimas(), $sql_tekstas);
    if ($vestsuk1) {

        return $vestsuk1;
    }else {
        echo "ERROR: Nera <br>";
        return NULL;
    }
}


//------------------------creatKlausr------------

function createKlaus($email, $vardas, $klaus){

    // $email = mysqli_real_escape_string($email);
    // $vardas = mysqli_real_escape_string($vardas);
    // $klaus = mysqli_real_escape_string($klaus);

    $sql_txt = "INSERT INTO klausimai VALUES ('', '$email', '$vardas', '$klaus');";

    $createrow = mysqli_query(getPrisijungimas(), $sql_txt);

    if (!$createrow) {
    echo "ERROR: FAIL <BR>" . mysqli_error( getPrisijungimas());
    }
}


//-------------------deletePreke------------------

function deletePreke($nr){
    $sql_txt = "DELETE FROM doctors WHERE id =$nr; " ;
    $result = mysqli_query( getPrisijungimas(), $sql_txt);
    if (!$result) {
        echo "SUGEDO! <BR>" . mysqli_error( getPrisijungimas());
    }
}
// deleteDoctor(8);

//----------------editPreke---------------------------

function editPreke($nr, $vardas, $pavarde){
    //apsaugai:
    $vardas = mysqli_real_escape_string($vardas);
    $pavarde = mysqli_real_escape_string($pavarde);

    $sql_txt = "UPDATE doctors SET name ='$vardas', lname='$pavarde' WHERE id=$nr; ";
    mysqli_query( getPrisijungimas(), $sql_txt);
}




//------------------getPrekes-------------

function getPrekes(){
    $sql_txt = "SELECT * FROM vestuvines;";
    $vsuk = mysqli_query( getPrisijungimas(), $sql_txt);
    return $vsuk;
}

function getPrekes2(){
    $sql_txt1 = "SELECT * FROM progines;";
    $prog = mysqli_query( getPrisijungimas(), $sql_txt1);
    return $prog;

}
