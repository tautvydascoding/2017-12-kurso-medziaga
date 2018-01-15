<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
// print_r( $_GET); //GLOBALUS PHP MASYVAS
// print_r( $_POST); // GLOBALUS PHP MASYVAS
if (isset($_GET['emailas'])) {


$klientas = $_GET['vardas'];
$klientoPastas = $_GET['emailas'];
$klientoKlausimas = $_GET['klausimas'];



require 'libs/PHPMailer-master/PHPMailerAutoload.php';
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {

    $mail->SMTPOptions = array(
    'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
    )
    );
    $mail->Host = 'tls://smtp.gmail.com:587';
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    // $mail->Host = 'smtp.gmail.com:587';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'giedriustestas@gmail.com';                 // SMTP username
    $mail->Password = 'giedriustestas123';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('giedriustestas@gmail.com', 'Klausimas is Redos webo');
    $mail->addAddress('giedriustestas@gmail.com', "Laiskas is: $klientas");     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo($klientoPastas, $klientas);      //Į kurį emailą atreply'int
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Klausimas is Redos webo:$klientas";
    $mail->Body    = $klientoKlausimas;
    $mail->AltBody = $klientoKlausimas;

    $arPavykoIssiusti = $mail->send(); //send() grazina ar jai pavyko

    echo "<br /><br /><div class='container'>
    <p class='pavyko'><i class='fa fa-check' aria-hidden='true'></i>
    Jūsų žinutę gavome, susisieksime nurodytu el. paštu!
    </p>
    </div>";
} catch (Exception $e) {
    echo 'Klaida, seni kažko pridirbai.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}

//============================naujai cia=======================//
if($arPavykoIssiusti) {
    include('./scriptai.php');
    include('./emailMysql.php');
    createForma('', $klientas, $klientoPastas);
    // BANDAU ISVEDIMA

// createKlientas($klientas, $klientoPastas, $klientoKlausimas);
}// reikia include komandos, kad butu funkcija aprasyta
}
