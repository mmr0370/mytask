$(document).ready(function(){

	$("#reg").click(function(){
		$.ajax({
			url:"../example/reg/register.php",
			cache:false,
			type:"POST",
			success:function(data){$("#area").html(data);}
		});
	});

	$("#regb").live('click',function(){

		var user=$.trim($("#reguser").val());
		var pw=$.trim($("#regpw").val());

		if(user == ""){
			$("#reguser").focus();
			alert("输入用户名！");
			return false;
		}

		if(pw == ""){
			$("#regpw").focus();
			alert("输入密码！");
			return false;
		}

		pass="u_name="+user;
		$.post("../example/reg/check_reg.php",pass,function(data){
			if(data == 0){
				alert("用户已存在！");
			}
			else{                                      /*变量和变量之间要有符号'&'*/
				$.post("../example/reg/check_reg.php","u_name1="+user+"&u_pw1="+pw,function(data){    /*两次的变量明不能一样(e.g.u_name和u_name1)，否则会出现问题*/
					if(data == 1){
						alert("写入成功！");
					}
				});
			}
		});

	});

});