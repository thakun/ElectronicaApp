<?php

$server = "localhost";
$username = "root";
$password = "";
$database = "componentes";

$con = new mysqli($server, $username, $password, $database);

if ($con->connect_errno) {
    echo "Fallo al contenctar a MySQL: (" . $con->connect_errno . ") " . $con->connect_error;
}

$sql = "SELECT componente.idcomponente,componente.nombre,categoria.nombre as categoria,categoria.descripcion as descripcion,imagenes.url FROM componente left join categoria on categoria.idcategoria = componente.idcategoria left join imagenes on componente.idcomponente = imagenes.idcomponente";

if ($resultado = $con->query($sql)){
    echo json_encode($resultado->fetch_all());
}
else{
    echo false;
}

mysqli_close($con);


