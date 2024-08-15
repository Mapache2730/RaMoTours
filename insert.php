<?php
$conexion = mysqli_connect("localhost", "root", "", "ramo");
mysqli_set_charset($conexion, "utf8");

$nombre = $_POST['nombre'];
$password = $_POST['pass'];


$insertar = "INSERT INTO usuarios (nombre, pass) VALUES ('$nombre', '$password')";
$resultado = mysqli_query($conexion, $insertar);

$filas = mysqli_query($conexion, $insertar);;

if($filas){ 
    header("Location: RaMo.html");
    exit();
} else {
    header("Location: register.html");
    exit();
}

mysqli_free_result($resultado);
mysqli_close($conexion);
?>
