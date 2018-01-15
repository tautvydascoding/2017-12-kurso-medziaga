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

            <h1>Isijunkite Konsole</h1>
            <section class="row">
                <div class="col-md-6 bg-warning aukstis-100">
                    <h2>VARDAS</h2>
                </div>
                <div class="col-md-6 bg-success aukstis-100">
                    <h2>PAVARDE</h2>
                </div>
            </section>
            <?php
                require_once('./doctors_db.php');
                // deleteDoctor(6); testavimui
                for ($i=1; $i < 7; $i++) {
                    $gydytojas = getDoctor($i); // Is DB gavome mysql objekta
                    $gydytojas = mysqli_fetch_assoc($gydytojas); // mysql verciame i masyva
                    include('./doctor-line.php');
                }

                // print_r($gydytojas); testas
                // echo "<h2>".$gydytojas['name']."</h2>";
                // echo "<h2>".$gydytojas['lname']."</h2>";
                // echo "<h2>".$gydytojas['id']."</h2>";
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
