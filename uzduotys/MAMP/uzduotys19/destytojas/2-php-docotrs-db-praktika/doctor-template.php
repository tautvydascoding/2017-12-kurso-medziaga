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
            $doc = getDoctor($_GET['id']); // mysql objektas su visais gygytojais
            $vienasGydytojas = mysqli_fetch_assoc( $doc  ); // pavercia i masyva

            print_r( $doc ); // pasitikrinimui
        ?>
    </body>
</html>
