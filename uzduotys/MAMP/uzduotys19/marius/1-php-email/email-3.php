<?php
$to      = 'testasCoding@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: testasCoding@gmail.com' . "\r\n" .
    'Reply-To: testasCoding@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
