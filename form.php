<?php

// Recupera los datos del formulario
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$tema = $_POST['tema'];
$mensaje = $_POST['mensaje'];

// Construye el mensaje de correo electrónico
$asunto = "Contacto Portfolio";
$contenido = "Nombre: $nombre\n\nTeléfono: $telefono\n\nCorreo: $correo\n\nTema: $tema\n\nMensaje:\n$mensaje";

// Envía el correo electrónico
$destinatario = "alansuarez641@hotmail.com";
$headers = "From: $nombre <$correo>";
mail($destinatario, $asunto, $contenido, $headers);

// Redirige al usuario a una página de confirmación
header("Location: pages/succes.html");

?>
