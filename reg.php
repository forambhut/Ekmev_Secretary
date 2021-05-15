<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		tr:nth-child(even){
		background-color:#e4b9b8;
	}
	tr:nth-child(odd){
		background-color:rgb(155, 199, 156);
	}
	table{
		border-collapse: collapse;
		table-layout: auto;
		width: 100%;
	}
	</style>
</head>

<body>
<h1>Welcome</h1>
<h2 style="color: green"><b> Expense Management Details </b></h2>

<table>
<tr>
	<td>
		<?php 
			echo " <h3>Person's Name: ".$_POST['name']."</h3>";
		?>
	</td>
</tr>

<tr>
	<td>
		<?php 
			echo " <h3>Amount: ".$_POST['amount']."</h3>";
		?>
	</td>
</tr>

<tr>
	<td>
		<?php 
			echo " <h3>Date: ".$_POST['date']."</h3>";
		?>
	</td>
</tr>

<tr>
	<td>
		<?php 
			echo " <h3>Description: ".$_POST['message']."</h3>";
		?>
	</td>
</tr>

</table>
</body>
</html>