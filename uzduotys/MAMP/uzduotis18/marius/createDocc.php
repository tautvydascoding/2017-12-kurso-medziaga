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



//2. Create Doctor ($vardas, $pavarde)=======================================

function createDoctor($vardas, $pavarde) {
    
    $sql_textas = "INSERT INTO doctors VALUES ('', '$vardas', '$pavarde')";
    // echo $sql_textas; 
    $rezultatas = mysqli_query(getPrisijungimas(), $sql_textas);
    if (!$rezultatas) {
        echo "sukurti nepavyko <br>". mysqli_error(getPrisijungimas() );    
    } else {echo "sql ivykdyta"; }
}

createDoctor('Marius', 'Dactaras');