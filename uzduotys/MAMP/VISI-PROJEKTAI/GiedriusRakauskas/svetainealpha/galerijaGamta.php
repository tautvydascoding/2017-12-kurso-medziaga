<?php
include('./header.php');

 ?>


<div class="container mysqlGalerija">
    <div class="row">


    <?php
    require_once('./galerijaMysql.php');
    $nuotrauka = getNuotrauka('gamta');
    $vienaNuotrauka = mysqli_fetch_assoc( $nuotrauka );

    while($vienaNuotrauka) :
    ?>
<div class="col-md-<?php echo $vienaNuotrauka['atributas'];?>">
    <img class='materialboxed' data-caption="<?php echo $vienaNuotrauka['aprasymas']?>" src="./img/gamta/<?php echo $vienaNuotrauka['linkas']?>.jpg" width="100%" alt="">
</div>

<?php
$vienaNuotrauka = mysqli_fetch_assoc( $nuotrauka ); //LABAI SVARBU, KAD SUSTABDYTU CIKLA
endwhile ?>
</div></div>

<?php
include('./scriptai.php') ?>



























 <?php
 include('./scriptai.php')
  ?>
