<?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$ctex = $_POST['mensaje'];

$header = 'From:' . $correo . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombre . "/r/n";
$mensaje .= "Su e-mail es" . $correo . "\r\n";
$mensaje .= "Mensaje: " . $_POST['ctex'] .  "\r\n";
$ctex .=" Enviado el : " . date('d/m/Y' , time());

$para ='yulybeltran082@gmail.com';
$asunto = 'Asunto del mensaje';


mail($para, $asunto, utf8_decode($ctex), $header);
 

header("Location:index.html");
?>