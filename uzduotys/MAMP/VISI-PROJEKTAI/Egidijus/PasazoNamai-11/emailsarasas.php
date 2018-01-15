    <?php
    require_once('./header.php')
      ?>
      <div class="container" >
          <section class="row">
              <baltas class="col-md-11 skaidrus">
              </baltas>
              <div class="col-md-11">
                  <br><br><br><h1><i><b>EL laiškų sąrašas</b></i></h1><br><br>
                  <section class="row">
                      <div class="col-md-1 aukstis-20">
                          "<h1><b><i>Data</i></b></h1>";
                      </div>
                      <div class="col-md-2 aukstis-20">
                          "<h1><b><i>Klientas</i></b></h1>";
                      </div>
                      <div class="col-md-4 aukstis-20">
                          "<h1><b><i>El paštas</i></b></h1>";
                      </div>
                      <div class="col-md-5 aukstis-20">
                          "<h1><b><i>Laiškas</i></b></h1>";
                      </div>
                  </section>
                  <?php
                  require_once('./pasazas_db.php');
                  // deleteDoctor(6); testavimui
                  for ($i=0; $i < 10; $i++) {
                  // for ($i=20; $i >0; $i--) {
                      $laiskas1 = getemail($i); // Is DB gavome mysql objekta
                      $laiskas1 = mysqli_fetch_assoc($laiskas1); // mysql verciame i masyva
                      include('./email-line.php');
                  }

                  // print_r($laiskas1); //testas
                  // echo "<h2>".$laiskas1['data']."</h2>";
                  // echo "<h2>".$gydytojas['lname']."</h2>";
                  // echo "<h2>".$gydytojas['id']."</h2>";
                  ?>
              </div>


          </section>
      <!-- end container -->
     </div>

      <?php
      require_once('./footer.php')
      ?>
