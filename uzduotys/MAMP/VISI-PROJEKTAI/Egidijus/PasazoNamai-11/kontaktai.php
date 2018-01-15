    <?php
    require_once('./header.php')
      ?>

    <div class="container">
      <section class="row">
          <baltas class="col-md-11 skaidrus">
          </baltas>
          <article class="col-md-11">
             <h3 class="row">
                 <div class="col-md-6">
                     <b><i>

                         <sh>
                             <br><br>RESTORANAS „PASAŽO NAMAI“<br><br>
                             Sporto g. 14, Raseiniai<br><br>
                             Darbo laikas:<br>
                             I–IV 11.00–19.00<br>
                             IV–VI 11.00–20.00   <br><br>
                             Tel. nr.:<br>
                         </sh>
                         <sh>
                             <!-- <a href="tel:+370 655 00156"> +37065642456 -->
                             <a href="tel:+37065500156"> +370 655 00156</a>
                             <br><br>
                         </sh>
                         <sh>El. paštas:</sh><br>
                    <sh>
                        <a href="pasazas1@gmail.com">pasazas1@gmail.com<br><br></a>
                    </sh>
                        </i></b>
                     <!-- https://www.facebook.com/Pasa%C5%BEo-namai-1387709018189730/ -->
                 </div>
                 <div class="col-md-6">
                     <br><br><B><i>Čia galite užregistruoti savo klausimą:</i><br><br>
                     <!-- <form class="row form-group" action="pasazas_db.php" method="get"> -->

                     <!-- <form class="form-group" action="#" method="get"> -->
                     <form class="form-group" action="email.php" method="post">
                         <div class="row">
                             <div class="col-md-6">
                                 <label for="vardas"><i>Jūsų vardas</i></label><br>
                                 <input type="text" name="vardas" value=""> <br>
                                 <!-- <input type="text" name="autorius" value=""><br> -->
                             </div>
                             <div class="col-md-6">
                                 <label for="elpastas"><i>Jūsų el. paštas</i></label><br>
                                 <input type="email" name="elpastas" value="" required> <br>
                             </div>
                        </div>
                                <input type="hidden" name="kodas" value="serial:1500">
                        <div class="row">
                            <div class="col-md-12">
                                <label for="klausimas" class=""><i>Jūsų klausimas</i></label><br>
                                <textarea name="klausimas" rows="6" class="form-control" required></textarea><br>
                            </div>
                        </div>
                         <button class="btn-defoult" type="submit" name="button">Klausti</button></b>
                     </form>
                     <?php
                     // print_r($_GET);
                     // print_r($_POST);
                    //  $autorius = $_POST ['autorius'];
                    //  $antreste = $_POST ['antraste'];
                    //  $atsiliepimas = $_POST ['atsiliepimas'];
                    // require_once('./pasazas_db.php');
                    // createMessage($autorius, $antreste, $atsiliepimas);
                    // header("Location:kontaktai.php");

                     ?>

                     <!-- <img src="./img/Restoranas_Pasazo_namai_Raseiniai_2.png" alt="Restoranas_Pasazo_namai_Raseiniai" style="width:96%"> -->
                 </div>
             </h3>
             <!--Google map-->
            <aside class="row">
                <div class="col-md-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1691.7449356161897!2d23.109895197420546!3d55.379495993003495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e686f0392a2811%3A0x7b99abd71c375aa1!2sSporto+G.+14%2C+Raseiniai!5e1!3m2!1sen!2slt!4v1515549319723" width="95%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </aside>
        </article>

      </section>

<!-- ========Konteinerio pabaiga============= -->
</div>
<!-- <button class="btn-defoult" onclick="document.getElementById('demo').innerHTML=Date()">Kiek dabar valandų?</button>
<p id="demo"></p><br> -->

<?php
  include_once('./footer.php')
?>
