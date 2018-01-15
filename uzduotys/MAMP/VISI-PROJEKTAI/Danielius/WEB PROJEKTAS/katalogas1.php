    <?php
        include_once('header.php');

     ?>

    <div class="container-fluid">
        <div class="row mb-0 mt-2">
            <div class=" col-md-12 text-center fonasp">
                <h2>Vestuvinės suknelės</h2>
            </div>
        </div>
        <section class="row fonasp mb-0 ">
            <?php
                require_once('katalogas_db.php');

                $vsuk = getPrekes(); //mysql objektas

                $suk1 = mysqli_fetch_assoc( $vsuk ); //--> turning to array - paima viena eilute is db

                // print_r( $doct);
                $euras = '&#8364';
                // echo "<h2>" . $doct['name'] . " " . $doct['lname'] . "</h2>";
                while ($suk1) :

              ?>
              <div class="col-lg-3 col-md-4 mt-2">

                <a class="round" href="prek-temp.php/?id=<?php echo $suk1['id'];?>">
                    <?php echo "<img src='img/vest/" . $suk1['foto'] . "' width='200px' height='90%' alt='foto'/>"."<br />"?>
                </a>
                <a class="mgt" href="prek-temp.php/?id=<?php echo $suk1['id'];?>">
                    <?php echo"<h2>" . $suk1['kaina'] ." "."Eur". "</h2>"?>
                </a>

            </div>

                <?php
                $suk1 = mysqli_fetch_assoc( $vsuk );
                endwhile;
                 ?>
         <!-- end container -->
     </section>

    <?php
        include_once("footer.php")
      ?>
  </div>
