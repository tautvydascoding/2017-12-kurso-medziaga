<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function


// print_r( $_GET ); // global PHP masyvas
// print_r( $_POST);  // global PHP masyvas

$klientas = $_GET['vardas'];
$klientoEmail = $_GET['elpastas'];
$klientoKlausimas = $_GET['klausimas'];

//Load composer's autoloader
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
    // $mail->Host = 'smtp.gmail.com';                    // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'testascoding@gmail.com';           // SMTP username
    $mail->Password = 'slaptazodis';                      // SMTP password
    // $mail->SMTPSecure = 'tls';                           // Enable TLS encryption, `ssl` also accepted
    $mail->SMTPSecure = 'ssl';                              // Enable TLS encryption, `ssl` also accepted
    // $mail->Port = 587;                                   // TCP port to connect to
    $mail->Port = 465;                                      // TCP port to connect to

    //Recipients
    $mail->setFrom('-----prezidentas@gmail.com', 'Tinklapiu kurejai'); // cia mes
    $mail->addAddress('testascoding@gmail.com', 'Tinklapiu kurejai');  // kliento el pastas
    // $mail->addAddress('ellen@example.com');                    // Name is optional
    $mail->addReplyTo($klientoEmail, $klientas);    // ~

    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Kliento klausimas';
    $mail->Body    = $klientoKlausimas;
    $mail->AltBody = $klientoKlausimas;  // email klientai kurie nesugeba atvaizduoti HTML

    $arPavykoIssiusti =  $mail->send(); // send() - grazina ar jai pavyko

    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Klaida, seni kazko pridirbai.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}


//============================
if($arPavykoIssiusti) {
    // createDoctor($klientas, $klientoEmail, $klientoKlausimas);
}
