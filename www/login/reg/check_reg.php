<?php
	include_once("../config.php");

	if($_POST['u_name']){
		$name=$_POST['u_name'];
		$pw=$_POST['u_pw'];

		$sql="select * from tb_admin where user = '$name'";
		$que=mysql_query($sql);
		$row=mysql_fetch_array($que);

		if($row['user']){
			echo 0;
		}
		else {
			echo 1;
		}
	}

	if($_POST['u_name1']){
		$name=$_POST['u_name1'];
		$pw=md5($_POST['u_pw1']);
		$sq="insert into tb_admin (id,user,password)"."values(' ', '$name', '$pw')";

		if(mysql_query($sq)){
			echo 1;
		}
	}
?>
