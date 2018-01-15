<?php


$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['comment'];

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "registration";
$url=('index.php');

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO users (name,email,comment)
    VALUES ('$name', '$email', '$message')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo '<META HTTP-EQUIV=Refresh CONTENT="0; URL='.$url.'">';



    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>

<?php

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
    $mail->Username = 'sudubacka01234@gmail.com';                 // SMTP username
    $mail->Password = 'codingschool';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('iskur@gmail.com', 'Uzsakymas');
    $mail->addAddress('sudubacka01234@gmail.com',$email,$name);     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo($email, $name);
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');
    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    //Content
    $mail->isHTML();                                  // Set email format to HTML
    $mail->Subject = $email;
    $mail->Body    = $message;
    $mail->AltBody = $message;
    $mail->send();
    echo 'Message has been sent';

} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>
