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

            $x  = ['tomas', 21, 'kaunas'];
            $x[1] = 23;
            echo 'Miestas:' . $x[2] . '<br>';   // "."   sujungia stringus i viena

            print_r( $x );  // ! atspausdina visa masyva
            print('mietas' . $x[2] . '<br>');    // kaip echo - isveda i ekrana

            printf("Misku ejo %s jis buvo kiles is %s", $x[0], $x[2]);  //  %.2f  - po kablelio isves 2 skaicius pvz. 150.99 Eur

            // programuotojui issivesti visa imanoma info apie kintamaji eg. $x
            // kuo dazniau naukokite pasitikrinimui!!
            var_dump($x);

            // uzduotis 1
            // A. susikurti meniu masyva: home, about, gallery, contact, blog
            // B. atspausdinti visus meniu punktus i HTML (su html tag'ais)
            $menu = ['home', 'about', 'gallery', 'contact', 'blog'];
            // print_r($menu);  // pasitikrinimui
            // B
            echo "<nav>
                     <ul>
                        <li> $menu[0]</li>
                        <li> $menu[1]</li>
                        <li> $menu[2]</li>
                        <li> $menu[4]</li>
                        <li> $menu[3]</li>
                     </ul>
                </nav>";

                // nelabai geras, bet ir nieko blogo
                echo "  <nav>" ;
                echo "         <ul>" ;
                echo "            <li> $menu[0]</li>" ;
                echo "            <li> $menu[1]</li>" ;
                echo "            <li> $menu[2]</li>" ;
                echo "            <li> $menu[4]</li>" ;
                echo "            <li> $menu[3]</li>" ;
                echo "         </ul>" ;
                echo "    </nav> <br>";

                printf("<nav>
                         <ul>
                            <li>  %s </li>
                            <li>  %s </li>
                            <li>  %s </li>
                            <li>  %s </li>
                            <li>  %s </li>
                         </ul>
                    </nav><br>",
                     $menu[0], $menu[1], $menu[2],$menu[4], $menu[3]);

                     ?>
                     <!-- =========rasome HTML ====================-->
                        <nav>
                              <ul>
                                 <li> <?php echo $menu[0]; ?> </li>
                                 <li> <?php echo $menu[1]; ?></li>
                                 <li> <?php echo $menu[2]; ?></li>
                                 <li> <?php echo $menu[4]; ?></li>
                                 <li> <?php echo $menu[3]; ?></li>
                              </ul>
                         </nav>

                    <!-- ===============nuo cia rasysime PHP ======-->
                     <?php


            // uzduotis 2
            // A. susirasti 6 nuotraukas
            // B. susikurti nuotrauku pavadinimu masyva
            // C. atspausdinti visas nuotraukas su ciklu, po 3-ris i eilute
            // <img src='./img/1.jpg' alt=''  />

            // B
            $nuotraukos = ['1.jpg','2.jpg','3.jpg','4.jpg'];
            // C
            // for ($i=0; $i < count($nuotraukos); $i++) {
            for ($i=0; $i < 4; $i++) {
                // echo "<img src='./img/1.jpg' width='200px;' alt=''  />";
                if( $i % 3 === 0) { // % - modulio dalyba, kur grazina liekana. Mes tikriname, ar padalinus is 3, liekana yra 0
                // if( $i === 3 ) {
                    echo "<br />";
                }
                echo "<img src='./img/$nuotraukos[$i]' width='200px;' alt=''  />";
            }


            // uzduotis 3
            // sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
            //  Antraste, img pavadinimas, prekes aprasymas, kaina
            // A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
            // B. i masyva visosPrekes, ideti "preke" masyva
            // C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach)
            $preke1 = ['Nike bateliai', '1.jpg', 99.99, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'];
            $preke2 = ['Raisteliai', '2.jpg', 2.00, 'Raisteliai tratata consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'];
            $preke3 = ['Svoriai', '3.jpg', 250.00, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'];

            // $preke1 = getPrekes(33);  // taip eshop'e buna
            $visosPrekes = [];
            $visosPrekes[0] = $preke1;
            $visosPrekes[1] = $preke2;
            $visosPrekes[2] = $preke3;

            // print_r(  $visosPrekes ); // pasitestavimui

            for ($i=0; $i < 3; $i++) {
                // !!! echo nesutaria su matircom ir su masyvais, kuriu stalciai turi pavadinimus
                echo "<h2> " . $visosPrekes[$i][0] . "</h2>";

                // 3 budai
                // printf("<img src='./img/" . $visosPrekes[$i][1] . "' width='200px;' alt=''  />");
                // printf("<img src='./img/%s' width='200px;' alt=''  />", $visosPrekes[$i][1]);
                echo "<img src='./img/" . $visosPrekes[$i][1] . "' width='200px;' alt=''  />" ;
                echo "<button class='btn btn-lg bg-success text-light'>" . $visosPrekes[$i][2] . "</button>";
                echo "<p>" . $visosPrekes[$i][3] . " </p>";
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
