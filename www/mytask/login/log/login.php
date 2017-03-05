<?php
	include_once("../config.php");

?>

<style type="text/css">
<!--
#userlog {
	border:1px solid black;
	width:380px;
	height:200px;
	margin:10px;
	background-color:orange;
}
#list1 {
	border:0px solid black;
	width:350px;
	height:100px;
	margin:10px;
	padding:10px;
}
#list1 input {
	width:120px;
	height:24px;
	margin-top:10px;
}
#button1 {
	border:0px solid black;
	height:50px;
	width:350px;
	margin:10px;
}
#button1 input {
	width:50px;
	margin-top:10px;
}
-->
</style>

<div id="userlog">
	<div id="list1">
		用户名：<input type="text" name="loguser" id="loguser" /><br>
		密&nbsp; &nbsp; 码：<input type="password" name="logpw" id="logpw" />
	</div>
	<div id="button1">
		<input type="submit" name="login" id="logb" value="登录" />
		<input type="reset" value="重写" />
	</div>
</div>