<?php
$conexion = mysqli_connect("localhost", "root", "", "ramo");
mysqli_set_charset($conexion, "utf8");

$nombre = $_POST['nombre'];
$password = $_POST['pass'];

$consulta = "SELECT * FROM usuarios WHERE nombre='$nombre' AND pass='$password'";
$resultado = mysqli_query($conexion, $consulta);

$filas = mysqli_num_rows($resultado);

if($filas > 0){ 
    header("Location: RaMo.html");
    exit();
} else {
    header("Location: register.html");
    exit();
}

mysqli_free_result($resultado);
mysqli_close($conexion);
?>