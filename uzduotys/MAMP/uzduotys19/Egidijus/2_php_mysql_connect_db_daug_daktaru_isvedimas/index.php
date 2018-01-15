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
             $gydytojai = getDoctors(); //Mysql objektas su visais gydytojais
             $vienasgydytojas = mysqli_fetch_assoc($gydytojai); //paverciame i masyva (associatyvu) viena eilute is DB


             // print_r($vienasgydytojas);
             echo "<h2>".$vienasgydytojas[id]."".$vienasgydytojas['name']."".$vienasgydytojas['lname']."</h2>";
             ?>
             <a href="./doctor_template.php/?id=1"> // galima paduoti ir daugiau varda pavarde ?id=1&'name'&
                 <?php echo $vienasgydytojas[id]."".$vienasgydytojas['name']."".$vienasgydytojas['lname']; ?>
             </a>

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
