<?php
    $destino= "techosvalentini@gmail.com";
    $nombre = $_POST["nombre"];
    $zona = $_POST["zona"];
    $correo = $_POST["correo"];
    $numero = $_POST["numero"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre: ". $nombre . "\nLocalidad: " . $zona . "\nCorreo: " . $correo . "\nTelefono: ". $numero . "\nMensaje: " . $mensaje
    mail($destino,"¡Nuevo cliente!",$contenido);
    header("Location:gracias.html")
?>