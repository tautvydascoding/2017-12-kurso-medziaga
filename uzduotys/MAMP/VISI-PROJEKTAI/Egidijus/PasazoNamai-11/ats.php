<?php


          require_once('pasazas_db.php');
          $autorius1 = $_POST['autorius'];
          $antreste1 = $_POST['antraste'];
          $atsiliepimas1 = $_POST['atsiliepimas'];
          createMessage($autorius1, $antreste1, $atsiliepimas1);
          header("Location:atsiliepimai.php");
