<?php



$clientName =  'name' ;
$clientEmail = 'testasCoding@gmail.com';
$clientTitle = 'antraste';
$clientQuestion = 'klausimas';




require './libs/PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';                 // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'testasCoding@gmail.com';           // SMTP username
    $mail->Password = 'slaptazodis';                      // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('----@gmail.com', 'Klientas');
    $mail->addAddress('testasCoding@gmail.com', 'Musu brand: puslapiu kurejai');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo( $clientEmail, $clientName);
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');


    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $clientTitle;
    $mail->Body    = "<b>$clientQuestion</b>";
    $mail->AltBody = $clientQuestion;

    $mail->send();  // issiuncia email


    echo '<br><br />Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
