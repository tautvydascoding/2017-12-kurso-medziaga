<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <img src="../../../2.jpg" alt="">
        <?php
            require_once('./doctors_db.php');
            $doc = getDoctor($_GET['id']);
            $gydytojai = getDoctors($_GET['id']); //Mysql objektas su visais gydytojais
            $vienasgydytojas = mysqli_fetch_assoc($gydytojai); //paverciame i masyva (associatyvu) viena eilute is DB

            print_r($doc);
        ?>
    </body>
</html>
