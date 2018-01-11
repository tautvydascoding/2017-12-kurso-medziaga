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

            
            <p class="order"> Juozas </p>

            <section></section>
            
            <?php
                
                $sarasas = [];

                $sarasas = [12, 5, 6, 10, 5, 0];
                for ($i=0; $i < count($sarasas) ; $i++) { 
                    $x = $sarasas[$i];
                    // if ($x < 10) {
                    //     echo($sarasas[$i]) . ", ";
                    // }
                    // arba
                    if ($x >= 10) {
                        continue;
                    }
                    echo($sarasas[$i]) . ", ";
                }
    


            ?>



         <!-- end container -->
         </div>


         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

         <!-- !!! mano javaScript visada failo apacioje ir pats apatinis -->
         <script src="./js/jquery.min.js"></script>
         <script src="./js/main.js"></script>
             

         </script>
    </body>
</html>
