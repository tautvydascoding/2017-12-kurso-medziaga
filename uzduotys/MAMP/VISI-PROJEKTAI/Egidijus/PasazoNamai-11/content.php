
     <div class="container" >
         <section class="row">
             <baltas class="col-md-11 skaidrus">

                 <br><br><h1><i><b>DIENOS MENIU</b></i></h1><br><br><br><br>

                  <?php
                  require_once('./pasazas_db.php');
                  // deleteDoctor(6); testavimui
                  for ($i=0; $i < 7; $i++) {
                      $gydytojas = getDoctor($i); // Is DB gavome mysql objekta
                      $gydytojas = mysqli_fetch_assoc($gydytojas); // mysql verciame i masyva
                      include('./meniu-line.php');
                  }

                  // print_r($gydytojas); testas
                  // echo "<h2>".$gydytojas['name']."</h2>";
                  // echo "<h2>".$gydytojas['lname']."</h2>";
                  // echo "<h2>".$gydytojas['id']."</h2>";
                  ?>
                <br><br><h1><i><b>Skanaus !</b></i></h1><br><br><br><br>

             </baltas>
            
         </section>

     <!-- end container -->
    </div>
