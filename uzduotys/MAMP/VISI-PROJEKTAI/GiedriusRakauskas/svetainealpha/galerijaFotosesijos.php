<?php
include('./header.php');

 ?>


<div class="container mysqlGalerija">
    <div class="row">


    <?php
    require_once('./galerijaMysql.php');
    $nuotrauka = getNuotrauka('fotosesijos');
    $vienaNuotrauka = mysqli_fetch_assoc( $nuotrauka );

    while($vienaNuotrauka) :
    ?>
<div class="col-md-<?php echo $vienaNuotrauka['atributas'];?> col-md-offset-<?php echo $vienaNuotrauka['atitraukimas'];?>" img-fluid">
    <img class='materialboxed' data-caption="<?php echo $vienaNuotrauka['aprasymas']?>" src="./img/fotosesijos/<?php echo $vienaNuotrauka['linkas']?>.jpg" width="100%" alt="">
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
