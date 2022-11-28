<?php

$correo = $_POST['correo'];
$nombre = $_POST['nombre'];
$nombre = $_POST['nombre2'];
$mensaje = $_POST['mensaje'];

$destinatario = "jefersonmesa13@gmail.com";
$destinatario = "sd2882418@gmail.com";
$asunto = "Envio de correo de prueba con PHP";
$cuerpo = '
    <html>
        <head>
            <title>Prueba de envio de correo</title>
        </head>

        <body>
            <h1>Solicitud de contacto desde correo de prueba</h1>
            <p>
                Contacto: '.$nombre . ' - ' . $nombre2 .' <br>
                mensaje: '.$mensaje.'
            </p>
        </body>
    </html>

';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Contect-type: text/html; charset=UTF8\r\n";

$headers .="FROM: $nombre <$correo>\r\n";
mail($destinatario, $asunto, $cuerpo, $headers);

echo "Correo Enviado";
?>

<a href="index.html">Volver a Inicio</a>