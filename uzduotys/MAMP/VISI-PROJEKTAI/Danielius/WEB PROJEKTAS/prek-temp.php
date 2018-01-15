<!DOCTYPE html>
<html lang="lt">
    <head>
        <meta charset="utf-8">
        <title>Hestina</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        <link rel="stylesheet" href="../libs/bootstrap/css/bootstrap.css">
        <link rel="stylesheet" href="../css/main.css">

    </head>
    <body>
        <ul id="dropdown1" class="dropdown-content">
  <li><a href="../katalogas1.php">Vestuvinės</a></li>
    <li class="divider"></li>
  <li><a href="../katalogas2.php">Proginės</a></li>
        </ul>
        <div class="navbar-fixed">

        <nav class="#0097a7 cyan darken-2">
            <a href="../index.php" class="brand-logo center">
                <img src="../img/logo.png" alt="logo" height="58px" width="200px">
            </a>

            <a class="logoright" href="tel:+37064233620"> +37064233620 </a>
            <div class="nav-wrapper">
                <a  data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul class="left hide-on-med-and-down">

                    <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Katalogai<i class="material-icons right">arrow_drop_down</i></a></li>
                    <li ><a href="../index.php">Pagrindinis</a></li>
                    <li><a href="../contacts.php">Kontaktai</a></li>
                </ul>

            </div>
        </nav>
        </div>

    <ul class="side-nav #0097a7 cyan darken-1" id="mobile-demo">
        <li> <a href="index.php">Katalogai </a> </li>
        <li> <a href="index.php"> Pagrindinis </a> </li>
        <li> <a href="contacts.php">Kontaktai </a></li>

    </ul>



    <?php
           require_once('katalogas_db.php');


           $vsuk = getPreke( $_GET['id']); //mysql objektas

           $vsuk1 = mysqli_fetch_assoc($vsuk);
           // print_r($vsuk1);
            ?>

                <div class="container-fluid">

           <section class="row mt-2">
               <main class="col-md-4 preke">
                  <?php echo "<img src='../img/vest/" . $vsuk1['foto'] . "' width='100%' height='100%' alt='foto'/>"."<br />" ?>
              </main>
                <div class="col-md-4 border border-primary">
                    <h2 class="text-center">Aprašymas</h2> <br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3 class="f1 border border-primary w-50 text-center"><?php echo "Kaina" ." ".$vsuk1['kaina']. " " . "Eur" ?></h3>
                    <h3 class="text-center  w-100"><a href="../contacts.php">Patiko? Susisiekite su mumis!</a></h3>
                </div>
           </section>
           <footer class="row bg-dark aukstis-100">
               <div class="col-md-12">
               &copy
           </div>
           </footer>
           </div>

           <script src="../js/jquery-3.2.1.min.js"></script>
           <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> -->
           <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
           <script src="../libs/responsiveslides.min.js"></script>
           <script src="../js/main.js">

           </script>
       </div>
           </body>
           </html>
