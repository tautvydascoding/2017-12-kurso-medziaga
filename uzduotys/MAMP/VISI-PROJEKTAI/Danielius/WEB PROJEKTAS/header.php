<!DOCTYPE html>
<html lang="lt">
    <head>
        <meta charset="utf-8">

        <title>Hestina</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        <link rel="stylesheet" href="./libs/bootstrap/css/bootstrap.css">
        <link rel="stylesheet" href="./css/main.css">

        <?php require_once('katalogas_db.php');
        $tel = getPreke3(1);
        $tel1 = mysqli_fetch_assoc($tel);
         ?>
    </head>
    <body>
        <ul id="dropdown1" class="dropdown-content">
  <li><a href="katalogas1.php">Vestuvinės</a></li>
    <li class="divider"></li>
  <li><a href="katalogas2.php">Proginės</a></li>
        </ul>
        <div class="navbar-fixed">

        <nav class="#0097a7 cyan darken-2">
            <a href="index.php" class="brand-logo center">
                <img src="img/logo.png" alt="Hestina" height="58px" width="200px">
            </a>
            <a class="hide-on-small-only logoright" href="tel:+37060782050"> <?php echo $tel1['tel'] ?> </a>

            <div class="nav-wrapper">
                <a  data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul class="left hide-on-med-and-down">

                    <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Katalogai<i class="material-icons right">arrow_drop_down</i></a></li>
                    <li ><a href="index.php">Pagrindinis</a></li>
                    <li><a href="contacts.php">Kontaktai</a></li>
                </ul>

            </div>
        </nav>
        </div>

    <ul class="side-nav #0097a7 cyan darken-1" id="mobile-demo">
        <li> <a href="katalogas1.php">Vestuvinės </a> </li>
        <li> <a href="katalogas2.php">Proginės </a> </li>
        <li> <a href="index.php"> Pagrindinis </a> </li>
        <li> <a href="contacts.php">Kontaktai </a></li>

    </ul>
