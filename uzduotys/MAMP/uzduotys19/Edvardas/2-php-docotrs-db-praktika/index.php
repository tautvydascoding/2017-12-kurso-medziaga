<!DOCTYPE html>
<html lang="lt">
    <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="./libs/bootstrap/css/bootstrap.css">
        <!-- !!! mano CSS failas visada patsa zemiausias -->
        <link rel="stylesheet" href="./css/main.css">

    </head>
    <body>
         <div class="container">

         <?php
            require_once('./doctors_db.php');
            $gydytojai = getDoctors(); // mysql objektas su visais gygytojais
            $vienasGydytojas = mysqli_fetch_assoc( $gydytojai  ); // paverciame i masyva (associatyvus) viena eilute is DB

            // print_r( $vienasGydytojas );
            while ( $vienasGydytojas ) :
         ?>
                    <a href="./doctor-template.php/?id=<?php   echo     $vienasGydytojas['id'];  ?>">
                         <?php  echo $vienasGydytojas['name']. " " . $vienasGydytojas['lname'];  ?>
                    </a>
                    <br>

            <?php
                    // 
                    $vienasGydytojas = mysqli_fetch_assoc( $gydytojai  ); // paverciame i masyva (associatyvus) viena eilute is DB
            endwhile;
             ?>

         <!-- end container -->
         </div>


         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

         <!-- !!! mano javaScript visada failo apacioje ir pats apatinis -->
         <script src="./js/main.js">
              // komentaras   var y;
             // progrtamuoju
             /*
                komentaras
            */

         </script>
    </body>
</html>
