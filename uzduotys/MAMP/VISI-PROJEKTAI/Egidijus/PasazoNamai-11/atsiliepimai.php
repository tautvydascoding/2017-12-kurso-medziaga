    <?php
    require_once('./header.php')
      ?>
      <div class="container" >
          <section class="row">
              <baltas class="col-md-11 skaidrus">
              </baltas>
              <article class="col-md-11">
                      <br><br><h1><i><b>Čia galite palikti savo atsiliepimą</b></i></h1><br><br>
                      <h3>
                          <form class="form-group" action="ats.php" method="POST">
                              <div class="row">
                                  <div class="col-md-6">
                                      <label class="col-md-12" for="autorius">Jūsų vardas</label><br>
                                      <textarea name="autorius" rows="1" class="form-control"></textarea><br>
                                      <!-- <input type="text" name="autorius" value=""><br> -->
                                  </div>
                                  <div class="col-md-6">
                                      <label for="antraste">Atsiliepimo antraštė</label><br>
                                      <textarea name="antraste" rows="1" class="form-control"></textarea><br>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-12">
                                      <label for="atsiliepimas">Atsiliepimas</label><br>
                                      <textarea name="atsiliepimas" rows="8" class="form-control" required></textarea><br>
                                      <!-- <textarea name="atsiliepimas" rows="8" form-control required></textarea><br>                                       -->
                                  </div>
                              </div>
                              <button class="btn-defoult" type="submit" name="siusti">Siųsti atsiliepimą</button>
                          </form>
                     </h3>
                      <?php

                      // $autorius = $_POST['autorius'];
                      // $antreste = $_POST['antraste'];
                      // $atsiliepimas = $_POST['atsiliepimas'];
                      //
                      //     require_once('./pasazas_db.php');
                      //     createMessage($autorius, $antreste, $atsiliepimas);
                      ?>
                  <!-- </div> -->
              </article>
              <div class="col-md-11">

                  <br><h1><i><b>Atsiliepimų sąrašas</b></i></h1><br><br>
                  <section class="row">
                      <div class="col-md-2 aukstis-20">
                          "<h1><b><i>Data</i></b></h1>";
                      </div>
                      <div class="col-md-3 aukstis-20">
                          "<h1><b><i>Klientas</i></b></h1>";
                      </div>
                      <div class="col-md-3 aukstis-20">
                          "<h1><b><i>Antraštė</i></b></h1>";
                      </div>
                      <div class="col-md-4 aukstis-20">
                          "<h1><b><i>Atsiliepimas</i></b></h1>";
                      </div>
                  </section>
                  <?php
                  require_once('./pasazas_db.php');
                  // deleteDoctor(6); testavimui
                  for ($i=0; $i < 15; $i++) {
                  // for ($i=20; $i >0; $i--) {
                      $atsiliepimas1 = getatsiliepimas($i); // Is DB gavome mysql objekta
                      $atsiliepimas1 = mysqli_fetch_assoc($atsiliepimas1); // mysql verciame i masyva
                      include('./atsiliepimu-line.php');
                  }

                  // print_r($gydytojas); testas
                  // echo "<h2>".$gydytojas['name']."</h2>";
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
