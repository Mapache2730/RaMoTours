<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ramo";

// Crear conexión
$ramo = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($ramo->connect_error) {
    die("Connection failed: " . $ramo->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (usuario, contrasena) VALUES ('$usuario', '$contrasena')";

    if ($ramo->query($sql) === TRUE) {
        echo "Registro exitoso. <a href='RaMo.html'>Inicia sesión aquí</a>";
    } else {
        echo "Error: " . $sql . "<br>" . $ramo->error;
    }

    $ramo->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="StyleLogin.css">
</head>
<body>
<p>Registro creado exitosamente <a href="login.html">Inicia secion aquí</a></p>
    
</body>
</html>
