<div class="container-fluid kontaktaiFonas">
<img src="./img/kontaktai.jpg" alt="">


<?php
include('./header.php');
//
 ?>



<div class="container kontaktai">

    <div class="row virsutine">
        <div class="col-md-6">
            <div class="row"><p>
                <i class="fa fa-address-card" aria-hidden="true"></i>Reda Lukoševičiūtė
            </p></div>
            <div class="row"><p>
                <i class="fa fa-phone" aria-hidden="true"></i> +370 636 39292
            </p></div>
            <div class="row"><p>
                <i class="fa fa-envelope" aria-hidden="true"></i>reda.lukoseviciute1@gmail.com
            </p></div>
            <div class="row"><p>
                <i class="fa fa-map-marker" aria-hidden="true"></i>Kaunas, Lietuva
            </p></div>
        </div>
        <div class="col-md-6">
            <form name="forma" class="" action="" method="get" onsubmit="return validateForm()">

                <label for="vardas">Jūsų vardas</label><br />
                <input type="text" name="vardas" value="" placeholder="Įveskite vardą"><br />

                <label for="emailas">Jūsų el. paštas</label><br />
                <input type="email" name="emailas" value="" placeholder="Įveskite el. paštą" required><br />

                <label for="klausimas">Jūsų klausimas</label><br />
                <textarea name="klausimas" rows="8" cols="80" required></textarea>
                <br /><br />

                <button type="submit" name="button" class='btn btn-lg'>Klausti</button>

            </form>
        </div>
    </div>

</div>


<?php
include('./email.php');
include('./scriptai.php');
 ?>
</div>
