<?php
	include_once("../config.php");

?>

<style type="text/css">
<!--
#userreg {
	border:1px solid black;
	width:380px;
	height:200px;
	margin:10px;
	background-color:orange;
}
#list {
	border:0px solid black;
	width:350px;
	height:100px;
	margin:10px;
	padding:10px;
}
#list input {
	width:120px;
	height:24px;
	margin-top:10px;
}
#button {
	border:0px solid black;
	height:50px;
	width:350px;
	margin:10px;
}
#button input {
	width:50px;
	margin-top:10px;
}
-->
</style>

<!--
<form action="" method="post">     由于使用了jquery提交，因此不再需要使用form表单提交，否则可能会出现：有时候能把注册信息写进数据库，有时候不能；当注册成功后，有时候能弹出提示框，有时候不能
-->

<div id="userreg">
	<div id="list">
		用户名：<input type="text" name="reguser" id="reguser" /><br>
		密&nbsp;&nbsp;&nbsp;码：<input type="password" name="regpw" id="regpw" />
	</div>
	<div id="button">
		<input type="submit" name="regbut" value="注册" id="regb" />
		<input type="reset" value="重写" />
	</div>
</div>

<!--
</form>
-->