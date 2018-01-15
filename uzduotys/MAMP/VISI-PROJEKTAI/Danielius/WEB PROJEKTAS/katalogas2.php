    <?php
        include_once('header.php');

     ?>

    <div class="container-fluid">
        <div class="row mb-0 mt-2">
            <div class=" col-md-12 text-center fonasp">
                <h2>Proginės suknelės</h2>
            </div>
        </div>
        <section class="row fonasp mb-0">
            <?php
                require_once('katalogas_db.php');

                $prog = getPrekes2(); //mysql objektas

                $prog1 = mysqli_fetch_assoc( $prog ); //--> turning to array - paima viena eilute is db

                // print_r( $doct);

                // echo "<h2>" . $doct['name'] . " " . $doct['lname'] . "</h2>";
                while ($prog1) :

              ?>
              <div class="col-lg-3 col-md-4 mt-2">

                <a class="round" href="prog-temp.php/?id=<?php echo $prog1['id'];?>">
                    <?php echo "<img src='img/prog/" . $prog1['foto'] . "' width='200px' height='90%' alt='foto'/>"."<br />"?>
                </a>
                <a class="mgt" href="prog-temp.php/?id=<?php echo $prog1['id'];?>">
                    <?php echo"<h2>" . $prog1['kaina'] ." "."Eur". "</h2>"?>
                </a>

            </div>

                <?php
                $prog1 = mysqli_fetch_assoc( $prog );
                endwhile;
                 ?>
         <!-- end container -->
         

        </section>
    <?php
        include_once("footer.php")
      ?>
  </div>
