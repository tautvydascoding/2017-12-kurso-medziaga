
<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// print_r( $_GET);
// print_r( $_POST);

$klientas = $_POST['vardas'];
$klientMail = $_POST['email'];
$klientKlaus = $_POST['klausimas'];





//Load composer's autoloader
require 'libs/PHPMailer-master/PHPMailerAutoload.php';
// require 'libs/PHPMailer-master/class.smtp.php';



$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();
    $mail->SMTPOptions = array(
               'ssl' => array(
                   'verify_peer' => false,
                   'verify_peer_name' => false,
                   'allow_self_signed' => true
               )
           );
                           // Set mailer to use SMTP
    $mail->Host = 'tls://smtp.gmail.com:587';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'webdan18@gmail.com';                 // SMTP username
    $mail->Password = 'webkurimas';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('from@example.com', 'Tinklapiu kurejas');
    $mail->addAddress('webdan18@gmail.com', 'Web Developers');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo("$klientMail", 'Information');
    // $mail->addCC('@gmail.com');
    // $mail->addBCC('bcc@example.com');
    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    //Content
    $mail->isHTML();                                  // Set email format to HTML

    $mail->Subject = 'Vartotojo klausimas';
    $mail->Body    = "$klientMail <br> $klientas <br> $klientKlaus";
    $mail->AltBody = "$klientKlaus";

    $arPavyko = $mail->send(); //grazina ar pavyko

    // echo 'Message has been sent';
    header('Location: contacts-ty.php');
} catch (Exception $e) {
    header('Location: contacts.php');
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
//=============================================
//kad i db detu
require_once('katalogas_db.php');
if ($arPavyko) {
    createKlaus($klientMail, $klientas, $klientKlaus);
}
