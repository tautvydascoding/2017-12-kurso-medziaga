<?php 
include("../php/dbConnection.php");

$picCountNew = $_POST['picCountNew'];


$sql = "SELECT * FROM apie_foto_ajax LIMIT $picCountNew";
$result = mysqli_query($prisijungimas, $sql);

//var_dump($result);

    while ($dbEilute = mysqli_fetch_assoc($result)) { 
        // $dbEilute['klase'];
        // echo "<br>";
    ?>


<div class="<?php echo $dbEilute['klase'];?>"> <img class="img-thumbnail" src="<?php echo $dbEilute['src'];?>" alt="sapnu gaudykles nuotrauka"></div>


<?php 
    } //end of for


?>