<?php
error_reporting(0);
include('login.php');
$nombre=$_POST['Correo'];
$password=$_POST['Password'];

$consulta="SELECT*FROM usuarios where Correo='$nombre' and password='$password'";
$resultado=mysqli_query($conexion,$consulta);

if (mysqli_num_rows($resultado) == 1) {
    header("location: RaMo.html");

}else{
    header("location: register.html");
}
mysqli_free_result($resultado);
mysqli_close($conexion);