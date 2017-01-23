$(document).ready(function(){

	$("#log").click(function(){
		$.ajax({
			url:"../example/log/login.php",
			cache:false,
			type:"POST",
			success:function(data){$("#area").html(data);}
		});
	});

	$("#logb").live('click',function(){

		var luser=$.trim($("#loguser").val());
		var lpw=$.trim($("#logpw").val());

		if(luser == ""){
			$("#loguser").focus();
			alert("用户名不能为空！");
			return false;
		}

		if(lpw == ""){
			$("#logpw").focus();
			alert("密码不能为空！");
			return false;
		}

		pas="l_user="+luser;
		$.post("../example/log/check_log.php",pas,function(data){
			if(data == 0){
				alert("用户不存在！");
			}
			else {
				$.post("../example/log/check_login.php",pas+"&l_pw="+lpw,function(dat){    /*在传递的参数中再添加上密码时，需要加上&号*/
					if(dat == 1){
						alert("登陆成功！");
					}
					else {
						alert("密码错误！");
					}
				});
			}
		});

	});

});