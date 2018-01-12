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
        echo "Sekmingai prisijungta prie DB <br>";
    } else {
        die ('prisijungti prie DB nepavyko' . mysqli_connect_error() );
    };
    return $prisijungimas;
}

// getPrisijungimas();



// 1. getDoctors($nr) ==========================================

function getDoctor($nr) {
    $sql_textas = "SELECT * FROM doctors WHERE id=$nr";
    // echo $sql_textas; 

    // Liepti vykdyti musu sql texto query
    $resultatas = mysqli_query( getPrisijungimas(), $sql_textas );
    
    if ($resultatas) {
        echo "radom daktara: $nr <br>";
        return $resultatas;
    } else {
        echo "ERROR: tokio daktaro nera <br>";
        return null;
    }
}

// testuojame ar f-ja gerai veikia gauname msql objekta reikia perversti
$x = getDoctor(2);
// print_r($x); //mysqli objektas

// sudedame i assod masyva 
$x = mysqli_fetch_assoc( $x );
echo "<br><br>";
print_r( $x );
echo "<br><br>";


foreach ($x as $key => $value) {
    echo "<h2> $key: $value , </h2>";
}

$vardas = $x['name'];
$pavarde = $x['lname'];

echo "<h3> $vardas $pavarde </h3><br> ";


echo "<h3>Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you
know, shot. I write the best placeholder text, and I'm the biggest developer on
the web by far... While that's mock-ups and this is politics, are they really so
different? Lorem Ipsum better hope that there are no 'tapes' of our conversations before he
starts leaking to the press! I write the best placeholder text, and I'm the
biggest developer on the web by far... While that's mock-ups and this is
politics, are they really so different? An ‘extremely credible source’ has
called my office and told me that Barack Obama’s placeholder text is a fraud. </h3><br> ";