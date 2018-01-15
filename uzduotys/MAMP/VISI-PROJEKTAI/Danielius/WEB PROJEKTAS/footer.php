<?php require_once('katalogas_db.php');
$tel = getPreke3(1);
$tel1 = mysqli_fetch_assoc($tel);
 ?>

<footer class="row bg-dark aukstis-100">
    <div class="col-md-12">
    <p>&copy 2018</p>
    <a class="hide-on-med-and-up" href="tel:"> <?php echo $tel1['tel'] ?> </a>
</div>
</footer>
</div>

<script src="js/jquery-3.2.1.min.js"></script>
<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
<script src="libs/responsiveslides.min.js"></script>
<script src="./js/main.js">

</script>
</body>
</html>
