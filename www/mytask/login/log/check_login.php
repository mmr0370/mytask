<?php
	include_once("../config.php");

	if($_POST['l_user'] && $_POST['l_pw']){
		$user=$_POST['l_user'];
		$pw=md5($_POST['l_pw']);

		$sql="select * from tb_admin where user= '$user' ";
		$query=mysql_query($sql);
		$row=mysql_fetch_array($query);

		if($row['password'] == $pw){
			echo 1;
		}
		else {
			echo 0;
		}
	}
?>
