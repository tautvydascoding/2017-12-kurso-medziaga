<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'libs/PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPOptions = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
        )
        );
    $mail->Host = 'tls://smtp.gmail.com:587';

    $mail->SMTPDebug = 3;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    // $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'testams752@gmail.com';                 // SMTP username
    $mail->Password = 'LabaiSlaptas';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    // $mail->Port = 587;                                    // TCP port to connect to
    $mail->Port = 465;                                    // TCP port to connect to

    
    
    //Recipients
    $mail->setFrom('iskur@gmail.com', 'Is Kur');                //Kas siuncia, (email bus tas is kurio siunciama, vardas veikia)
    $mail->addAddress('marius752@gmail.com', 'Add Adress');     // Kam siunciu
    // $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo('aadReplyTo@gmail.com', 'addReplyTo'); // prideti kam bus reply kai paspaus (i cia eis pastas is uzpildytos formos)
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Noriu paklausti';
    $mail->Body    = '<b>atejo</b>';
    $mail->AltBody = 'Jus kieti!';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Klaida, seni kazko pridirbai.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
