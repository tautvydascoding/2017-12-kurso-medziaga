<?php
include('header.php');
require_once('katalogas_db.php');

$kont = getPreke3(1);

$kont1 = mysqli_fetch_assoc($kont);

 ?>





    <section class="row aukstis-600 pasl">
        <main class="col-md-8 fonas1">
            <div class="row aukstis-100 ">
                <div class="col-md-12 text-md-center text-sm-left">
                    <h2 class="fontas">Kontaktai</h2>
                </div>
            </div>
                <div class="row pasl">
                    <article class="col-md-5 col-sm-12 ausktis-500">
                        <h2><?php echo "Adresas" . ":" . "<br>" . $kont1['adresas']?> </h2>
                        <h2><?php echo "Telefonas" . ":" . "<br>" . $kont1['tel']?> </h2>
                        <button class="btn-lg" type="button" name="button"> Rasti žemėlapyje </button>
                    </article>
                    <div class="col-md-7 col-sm-12  aukstis-500" bg-dark>
                        <iframe class="maps"
  width="75%"
  height="400px"
  frameborder="0" style="border:1px solid black;"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDzyTkGFiAo8o-ds4ix21x1kQjpbc-0Q8o
    &q=K.+Baršausko+g.+65,+Kaunas+51433" allowfullscreen>
</iframe>
                    </div>
                </div>
            <div class="row">

            </div>
        </main>
        <aside class="col-md-4 #0097a7 cyan darken-2">
            <h2>Klausimas išsiųstas! Ačiū!</h2>
        </aside>
    </section>
    <div class="row pasl hide-on-med-and-up">
        <aside class="col-sm-12 #0097a7 cyan darken-2">
            <h2>Klausimas išsiųstas! Ačiū!</h2>
        </aside>
    </div>
<?php
include('footer.php');

 ?>
</div>