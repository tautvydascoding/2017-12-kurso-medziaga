<?php 


// 1. getDoctors($nr)
// 2. Create Doctor ($vardas, $pavarde)
// 3. deleteDoctor($nr)
// 4. editDoctor($nr, $vardas, $pavarde);
// 5. getDoctors($kiekis = 9999);



define('HOST', 'localhost');
define('DB_NAME', 'hospital12');
define('DB_USER', 'root');
define('DB_PASSWORD', 'labukas5');


$prisijungimas = mysqli_connect( HOST, DB_USER, DB_PASSWORD, DB_NAME );    // pask parametras pportas


function getPrisijungimas() {
    global $prisijungimas;   // nes f-cijos viduje $prisijungimas nepasiekiamas nes local scope 
    if ($prisijungimas) {
       // echo "Sekmingai prisijungta prie DB <br>";
    } else {
        die ('prisijungti prie DB nepavyko' . mysqli_connect_error() );
    };
    return $prisijungimas;
}

//1. Create Doctor ($vardas, $pavarde)=======================================

function createDoctor($vardas, $pavarde) {
    
    $sql_textas = "INSERT INTO doctors VALUES ('', '$vardas', '$pavarde')";
    // echo $sql_textas; 
    $rezultatas = mysqli_query(getPrisijungimas(), $sql_textas);
    if (!$rezultatas) {
        echo "sukurti nepavyko <br>". mysqli_error(getPrisijungimas() );    
    } else {echo "sql ivykdyta"; }
}


//2. editDoctor($nr, $vardas, $pavarde))=======================================

function editDoctor($nr, $vardas, $pavarde) {
    
    $sql_textas = "UPDATE doctors SET name='$vardas', lname='$pavarde' WHERE id=$nr";
    echo $sql_textas; 
    $rezultatas = mysqli_query(getPrisijungimas(), $sql_textas);
    if (!$rezultatas) {
        echo "update nepavyko <br>". mysqli_error(getPrisijungimas() );    
    } else {echo "sql ivykdyta"; }
}


//3. deleteDoctor($nr)=======================================

function deleteDoctor($nr) {
    
    $sql_textas = "DELETE FROM doctors WHERE id=$nr";
    echo $sql_textas; 
    $rezultatas = mysqli_query(getPrisijungimas(), $sql_textas);
    if (!$rezultatas) {
        echo "istrynei nepavyko <br>". mysqli_error(getPrisijungimas() );    
    } else {echo "sql ivykdyta"; }
}

// 4. getDoctors($nr) ==========================================

function getDoctor($nr) {
    $sql_textas = "SELECT * FROM doctors WHERE id=$nr";
    // echo $sql_textas; 

    // Liepti vykdyti musu sql texto query
    $resultatas = mysqli_query( getPrisijungimas(), $sql_textas );
    
    if ($resultatas) {
        //echo "radom daktara: $nr <br>";
        return $resultatas;
    } else {
        echo "ERROR: tokio daktaro nera <br>";
        return null;
    }
}

// testuojame ar f-ja gerai veikia gauname msql objekta reikia perversti
// $x = getDoctor(2);
// print_r($x); //mysqli objektas

// sudedame i assod masyva 
// $x = mysqli_fetch_assoc( $x );
// echo "<br><br>";
// print_r( $x );
// echo "<br><br>";


// foreach ($x as $key => $value) {
//     echo "<h2> $key: $value , </h2>";
// }

// $vardas = $x['name'];
// $pavarde = $x['lname'];

// echo "<h3> $vardas $pavarde </h3><br> ";