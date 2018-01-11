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


            <!-- // uzduotis 1
            // A. susikurti meniu masyva: home, about, gallery, contact, blog 
            // B. atspausdinti visus meniu punktus i HTML (su html tag'ais) -->

            <?php    

            $meniu = ["home", "about", "gallery", "contact", "blog"]; 

            foreach ($meniu as $reiksme) {
                print('<h2>'. $reiksme . "</h2>" . "   ");
            }

            
            
            // uzduotis 2
// A. susirasti 6 nuotraukas
// B. susikurti nuotrauku pavadinimu masyva 
// C. atspausdinti visas nuotraukas su ciklu, po 3-ris i eilute
   // <img src="./img/1.jpg" alt=''  />
   
   echo ("<br>");

$fotoList = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

// foreach ($fotoList as $index => $value) {
//     print("<img src='./img/" . $value . " ' />" );
//     if ($index == 2) {
//         echo ("<br><br><br>");
//     }
// }

foreach ($fotoList as $index => $value) {
    printf("<img src='./img/%s' />", $value );
    if ($index == 2) {
        echo ("<br><br><br>");
    }
}
            
echo ("<br>");  
             // uzduotis 3
            // sukurti matrica, kurioje bus saugoma kiekvienos prekes info:
            //  Antraste, img pavadinimas, prekes aprasymas, kaina
            // A. sukurti masyva preke: Antraste, img pavadinimas, prekes aprasymas, kaina
            // B. i masyva visosPrekes, ideti "preke" masyva
            // C. atvaizduodi kiekvienoje eiluteje po 3 prekes (naudojant for arba foreach)
        
            
            // $prekes  = [
            //     $preke1 = ["vazonelis", "1.jpg", "Galite pasisodinti geliu", 20.99 ],
            //     $preke2 = ["kamuolys", "2.jpg", "zaiskite krepsini", 10.99  ],
            //     $preke3 = ["plaktukas", "3.jpg", "Kalk vini", 55.49  ]
            // ];
            
            // print($prekes[0][0] ." = ". $prekes[0][1] ." = ".  $prekes[0][2] ." = ".  $prekes[0][3]);

            // echo ("<br>");
            
            // for ($i=0; $i < count($prekes) ; $i++) { 
            //     echo "<img src='./img/" . $prekes[$i][1] . "' />";
            // }
            
            $test1 = ["x", "x", "x", "x", "x", "x", "x"];
            $test1 = ["y", "y", "y", "y", "y", "y", "y"];

            $testWhole = [ $test1, $test2 ];

            var_dump($testWhole);
            
            
            
            // paprastas isvedimas
            // printf("<h3>%s</h3> <input type='text' value=%s><br> <p>%s</p> <button>%.2f</button>", $prekes[0][0], $prekes[0][1], $prekes[0][2], $prekes[0][3] );

            
            // vieno ciklo ejimas per matrica
            // foreach ($prekes as $value) {
            //     printf("<h3>%s</h3> <input type=''text' value=%s><br> <p>%s</p> <button>%.2f</button>", $value[0], $value[1], $value[2], $value[3] );
            // }
            
            
            // dvieju ciklu ejimas per matrica
            // foreach ($prekes as $value) {
            //     print("<h3>$value[0]</h3> <input type=''text' value=$value[1]><br> <p>$value[2]</p> <button>$value[3]</button>");
            //     echo "<br /><br /><br />";
            // }
            


            
            $visosPrekes = [
            $vazonelis = ["antraste"=>"vazonelis", "nuotrauka"=>"1.jpg", "aprasymas"=>"Galite pasisodinti geliu", "kaina"=>20],
            $kamuoliukas = ["antraste"=>"kamuolys", "nuotrauka"=>"2.jpg", "aprasymas"=>"Zaiskite krepsini", "kaina"=>10],
            $plaktukas = ["antraste"=>"plaktukas", "nuotrauka"=>"3.jpg", "aprasymas"=>"Ar noretume ikalti vinį", "kaina"=>14]
            ];
            
            
            // print($visosPrekes[0][0]);
            // echo $visosPrekes[1][1];
            
            // <h2>"%s"</h2> <input type="text" value="%s"><br> <p>"%s"</p> <button>"%.2f"</button>  
            
            // foreach ($visosPrekes as $key => $value) {
                
            //     foreach ($value as $innerValue) {
            //         prinf("bandom: %s", $innerValue);
            //     }

            // }
            


            // visosp[0,1]
            // visosp[0,2]
            // visosp[0,3]

            // var_dump($visosPrekes);
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
