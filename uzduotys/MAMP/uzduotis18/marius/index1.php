<!DOCTYPE html>
<!DOCTYPE html>
<!DOCTYPE html>
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
        <?php 
        require_once("./dbFunctions.php");

        
        for ($i=1; $i < 5 ; $i++) { 
            # code...
            $gydytojas = getDoctor($i);
            $gydytojas = mysqli_fetch_assoc($gydytojas);
            include('gyd_eilute.php');
        }

        // echo "<h2>" . $gydytojas['name'] . "</h2>";
               
        ?>

        <?php           ?>

        

        

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
