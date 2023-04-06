<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // ruta a PHPMailer

// crea un nuevo objeto de correo electrónico
$mail = new PHPMailer(true);

try {
  // Configura el servidor SMTP
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'alansuarez641@hotmail.com';
  $mail->Password = 'Newellsoldboys123';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;

  // Configura los datos del correo electrónico
  $mail->setFrom('tu-email@gmail.com', 'Tu Nombre');
  $mail->addAddress('alansuarez641@hotmail.com', 'Destinatario');
  $mail->Subject = 'Nuevo mensaje del formulario';
  $mail->Body = 'Nombre: ' . $_POST['nombre'] . "\r\n" .
                'Email: ' . $_POST['email'] . "\r\n" .
                'Mensaje: ' . $_POST['mensaje'];

  // Envia el correo electrónico
  $mail->send();
  echo 'El mensaje se ha enviado correctamente';
} catch (Exception $e) {
  echo 'Error al enviar el mensaje: ' . $mail->ErrorInfo;
}


?>
