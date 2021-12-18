<?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];



$header = 'From:' . $correo. "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombre . "\r\n";
$mensaje .= "Su e-mail es" . $correo. "\r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] .  "\r\n";
$mensaje .=" Enviado el : " . date('d/m/Y' , time());

$para = 'yulybeltran082@gmail.com';
$asunto = 'Mensaje Portafolio';


mail($para, $asunto, utf8_decode($mensaje), $header);
 

$header("<Location:index.html>");
?>