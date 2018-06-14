<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "DELETE FROM employee  WHERE EmployeeID = $data->EmployeeID";

$result = $conn->query($sql);

echo json_encode($data);

$conn->close();
?>
