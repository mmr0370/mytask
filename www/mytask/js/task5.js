/**
 * Created by qiangxl on 2017/1/17.
 */
$(document).ready(function(){
    /*登录注册界面切换*/
    $(".tabBtn .btn").click(function(){
        $(".tabBtn .btn").removeClass("active");
        $(this).addClass("active");
        //alert($(".tabBtn .btn").index(this));
        var index=$(".tabBtn .btn").index(this);
        $(".tabCon .userBox").hide();
        $(".tabCon .userBox").eq(index).show();
    });
    /*注册界面ajax数据保存*/
    $(".login-submit").click(function(){
     //“登录”按钮单击事件
            //获取用户名称
            //var telNum = $(".telNum").val();
            var username = $(".username").val();
            //获取输入密码
            var passWord = $(".password").val();
            //var verifyCode=$(".code").val();
           // alert(typeof (telNum));
            //开始发送数据
        console.log(username,passWord)
        if(username==""||username==null||username==undefined){
            alert("用户名不能为空");
        }else if(passWord==""||passWord==null||passWord==undefined){
            alert("密码不能为空");
        }
          $.ajax({ //请求登录处理页
                url: "http://dev.admin.carrots.ptteng.com/a/login", //登录处理页
                Type: "POST",
                //传送请求数据
                data: {
                    name: username,
                    pwd:  passWord
                },
              dateType:"Object",
              success: function () { //登录成功后返回的数据
                    //根据返回值进行状态显示
                    if (ajax.status == 200) {//注意是True,不是true
                        $(".clsShow").html("操作提示，登录成功！");
                    }
                    else {
                        $("#divError").show().html("用户名或密码错误！");
                    }
                }
             })

    })



});
