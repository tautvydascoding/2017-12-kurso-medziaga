<!DOCTYPE html>
<?php
// Initialize the session
session_start();

// If session variable is not set it will redirect to login page
if(!isset($_SESSION['username']) || empty($_SESSION['username'])){
  header("location: login.php");
  exit;
}
?>


<html lang="lt">

<head>
    <meta charset="utf-8">
    <title>labas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">

    <link rel="stylesheet" href="./libs/bootstrap/css/bootstrap.min.css">
    <!-- !!! mano CSS failas visada patsa zemiausias -->
    <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
    <link rel="stylesheet" href="./css/main.css">

</head>

<body>




    <header class="row   bg-white mb-5">
        <div class="col-md-12">


            <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top ">
                <img class="mainlogo" src="jpg/sarologo.png" alt="logo">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul class="navbar-nav">
                        <li class="nav-link">
                            <img src="jpg\001-user.png" alt="" id="userlogo">
                            <a><b><?php echo $_SESSION['username']; ?></b></a>
                        </li>


                        <li class="nav-link">
                            <img src="jpg\002-logout.png" alt="" id="logoutlogo">
                            <a href="logout.php" class="">Sign Out</a>
                        </li>


                        </ul>

                    <!--  sena skiltis-->
                    <ul class="navbar-nav justify-content-end">

                        <li class="nav-item">
                            <a class="nav-link" href="index.php">Pagrindinis</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="ApieMus.php">Apie mus</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link scrool" href="#">Kontaktai</a>
                        </li>
                    </ul>


                </div>
            </nav>
        </div>
    </header>
