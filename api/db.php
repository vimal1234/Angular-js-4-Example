<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rest_api";
$conn = new mysqli($servername, $username, $password, $dbname);

?>