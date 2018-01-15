


<?php include ('./header.php');

// GALERIJOS VALDYMAS - NUOTRAUKU PILDYMAS =============//
$galerija1 = ["./img/1.jpg", "testukas 1 pavadinimas"];
$galerija2 = ["./img/2.jpg", "testukas 2 pavadinimas"];
$galerija3 = ["./img/1.jpg", "testukas 3 pavadinimas"];
$galerija4 = ["./img/2.jpg", "testukas 4 pavadinimas"];
$galerija5 = ["./img/2.jpg", "testukas 4 pavadinimas"];
$galerija6 = ["./img/2.jpg", "testukas 4 pavadinimas"];
$galerija7 = ["./img/2.jpg", "testukas 4 pavadinimas"];
$galerija8 = ["./img/2.jpg", "testukas 4 pavadinimas"];
$galerija9 = ["./img/2.jpg", "testukas 4 pavadinimas"];
$nuotraukos = [$galerija1, $galerija2, $galerija3, $galerija4, $galerija5, $galerija6, $galerija7, $galerija8];
// function nuotraukos() {
//     global $nuotraukos;
// // echo "<div class='col-md-3 img-fluid'><img src='" . $nuotraukos[0][0] . "' width='100%' alt=''></div>";
//     print_r("<div class='col-md-3 img-fluid'><img class='materialboxed' src='" . $nuotraukos[$i][0] . "' width='100%' alt=''></div>");
// };
function nuotraukos() {
    global $nuotraukos;
for ($i=0; $i < count($nuotraukos); $i++) {

        print_r("<div class='col-md-3 img-fluid'>
                <img class='materialboxed' data-caption='" . $nuotraukos[$i][1] . "' src='" . $nuotraukos[$i][0] . "' width='100%' alt=''></div>");
    }};

?>


 <!-- <div class="carousel">
   <a class="carousel-item" href="#one!"><img  width='500px' src="./img/2.jpg"></a>
   <a class="carousel-item" href="#two!"><img width='500px' src="./img/2.jpg"></a>
   <a class="carousel-item" href="#three!"><img width='500px' src="./img/2.jpg"></a>
 </div> -->
<div id='galerijaaa' class="container">
    <div class="row">
        <?php
nuotraukos();
         ?>
    </div>
<!-- <div class="row">
    <div class="col-md-3 img-fluid">
        <img src="./img/1.jpg" width='100%' alt="">
    </div>
    <div class="col-md-3 img-fluid">
<img src="./img/1.jpg" width='100%' alt="">
    </div>
    <div class="col-md-3 img-fluid">
<img src="./img/1.jpg" width='100%' alt="">
    </div>
    <div class="col-md-3 img-fluid">
<img src="./img/1.jpg" width='100%' alt=""> -->
    </div>





<?php
include ('./scriptai.php');
 ?>
