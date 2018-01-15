<!DOCTYPE html>
<html lang="lt">
    <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="./libs/bootstrap/css/bootstrap.css">
        <!-- !!! mano CSS failas visada patsa zemiausias -->
        <link rel="stylesheet" href="./css/main.css">

    </head>
    <body>
         <div class="container">

            <h1>Isijunkite Konsole</h1>
            <?php
            $x=['tomas',22,'kaunas'];
            $x[1]=23;
            echo 'miestas:'.$x[2].'<br>'; //'.' sujungia stringus-veikia kaip pliusas
            print('miestas' .$x[2].'<br>'); //kaip echo-isveda i ekrana
            print_r($x); //!atspausdina visa masyva
            printf('misku ejo %s jis buvo kiles is %s',
            $x[0],
            $x[2]);
            // uzduotis 1
            // A. susikurti meniu masyva: home, about, gallery, contact, blog
            // B. atspausdinti visus meniu punktus i HTML (su html tag'ais)
            $navbar=['home','abouth','gallery','contact','blog'];
            // print_r($navbar); // pasitikrinimui
            echo"<nav>
                  <ul>
                  <li>$navbar[0]</li>
                  <li>$navbar[1]</li>
                  <li>$navbar[2]</li>
                  <li>$navbar[3]</li>
                  <li>$navbar[4]</li>



                  </ul>
                 </nav>";
                  ?>

                  <nav>
                        <ul>
                        <li>$navbar[0]</li>
                        <li>$navbar[1]</li>
                        <li>$navbar[2]</li>
                        <li>$navbar[3]</li>
                        <li>$navbar[4]</li>



                        </ul>
                       </nav>
                       <?php
                       // var_dump($vars...);//programuotojui issivesti visas imanoma info apie kintamaji $x -naudoti pasitikrinimui!!


                       // uzduotis 2
                       // A. susirasti 6 nuotraukas
                       // B. susikurti nuotrauku pavadinimu masyva
                       // C. atspausdinti visas nuotraukas su ciklu, po 3-ris i eilute
                          // <img src="./img/1.jpg" alt=''  />
                          $nuotraukos=['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];

                          for ($i=0; $i < 4; $i++) {
                              if ($i%3==0) {//%-modulio dalyba,kur grazina liekana.mes tikriname,ar padalinus is 3,liekana yra 0
                                  echo "<br>";
                                  # code...
                              }
                              echo"<img src='./img/$nuotraukos[$i]' width='200px;' alt=''  />";


                          }
                          // uzduotis 3
                       // sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
                       //  Antraste, img pavadinimas, prekes aprasymas, kaina
                       // A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
                       // B. i masyva visosPrekes, ideti "preke" masyva
                       // C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach)
                       $preke1=['nike bateliai','img1.jpg',99.99,'sdfsdf ssdfg sdfs dgdsgdfgd gd fgdfgdsfg d,'];
                       $preke2=['nike raisteliai','img2.jpg',99.50,'sdfsdf ssdfg sdfs dregterd fgdfgdsfg d,'];
                       $preke3=['nike padas','img1.jpg',99.70,'sdfsdf ssdfg sdfs dfggkgd fgdfgdsfg d,'];

                       $visosPrekes=[];
                       $visosPrekes[0]=$preke1;
                       $visosPrekes[1]=$preke2;
                       $visosPrekes[2]=$preke3;
                       // print_r($visosPrekes)
                       for ($i=0; $i < 3; $i++) {
                           // !!!!echo nesutaria su matricom ir masyvais,kuriu stslciai turi ne skaiciu pavadinimus
                           //h2,img,button,p
                           echo "<h2>". $visosPrekes[$i][0] ."<h2/>";
                           // printf("<img src='./img/$visosPrekes[$i][0]' width='200px;' alt=''  />");
                           //prinf isvedimo budas
                           // printf("<img src='./img/%s' width='200px;' alt=''  />",$visosPrekes[$i][1]);
                           //echo isvedimo budas
                           echo "<img src='./img/".$visosPrekes[$i][1]."'width='200px;' alt='' />";
                           echo "<button class='btn btn-lg bg-success text-light'>".$visosPrekes[$i][2]."</button>";
                           echo "<p>".$visosPrekes[$i][3]."</p>

                           ";



                           }


                        ?>






         <!-- end container -->
         </div>


         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

         <!-- !!! mano javaScript visada failo apacioje ir pats apatinis -->
         <script src="./js/main.js">
              // komentaras   var y;
             // progrtamuoju
             /*
                komentaras
            */

         </script>
    </body>
</html>
