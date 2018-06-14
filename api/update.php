<?php

	$data = json_decode(file_get_contents("php://input"));
	include "db.php";
	$sql = "UPDATE employee SET FirstName='$data->FirstName', LastName='$data->LastName',
	EmpCode='$data->EmpCode',Position='$data->Position', Office='$data->Office' WHERE EmployeeID = $data->EmployeeID";

	$qry = $conn->query($sql);
	if($data->FirstName){
	}
	$conn->close();

?>
