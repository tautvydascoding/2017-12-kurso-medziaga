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
            <!-- <form class="" action="index.html" method="post"> -->
            <form class="" action="email.php" method="get">
            <!-- <form class="" action="email" method="post"> -->

                <label for="Vardas">Jusu Vardas</label><br>
                <input type="text" name="vardas" value=""> <br>

                <label for="">El pastas</label><br>
                <input type="email" name="elpastas" value="" required> <br>

                <label for="">Klausimas</label><br>
                <textarea name="Klausimas" rows="8" cols="80"></textarea>

                <input type="hidden" name="" value="serial:1500">
                <input type="submit" name="" value="Klausti"></button>
                <!-- OR -->
                <button type="submit" name="button">Klausti</button>

            </form>
<?php
    print_r( $_GET ); // GLOBAL PHP masyvas
    print_r( $_POST ); // GLOBAL PHP masyvas
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
