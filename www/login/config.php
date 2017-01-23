<?php
	$conn=mysql_connect("localhost","root","") or die ("connect error");
	mysql_select_db("user",$conn) or die ("connect error");
	mysql_query("set names 'UTF8'");
?>
