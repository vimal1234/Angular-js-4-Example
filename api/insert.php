<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "INSERT INTO employee (FirstName,LastName, EmpCode, Position, Office)
VALUES ('$data->FirstName', '$data->LastName', '$data->EmpCode','$data->Position','$data->Office')";
if($data->FirstName){
  $qry = $conn->query($sql);
}
$conn->close();

?>
