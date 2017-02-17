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
    $(".registerBox-submit").click(function(){
     //“登录”按钮单击事件
            //获取用户名称
            var telNum = $(".telNum").val();
            var username = $(".username").val();
            //获取输入密码
            var passWord = $(".password").val();
            var verifyCode=$(".code").val();
           // alert(typeof (telNum));
            //开始发送数据
        if(telNum==""||telNum==null||telNum==undefined){
                alert(1);
        }else{
            alert(2)
        }
         /* $.ajax({ //请求登录处理页
                url: "http://120.92.4.210:10010/a/user", //登录处理页
                Type: "POST",
                //传送请求数据
                data: {
                    mobile: telNum,
                    nick: username,
                   password:passWord,
                    verity:verifyCode
                },
              dateType:"string",
              /!*  success: function (strValue) { //登录成功后返回的数据
                    //根据返回值进行状态显示
                    if (strValue == "True") {//注意是True,不是true
                        $(".clsShow").html("操作提示，登录成功！" + strValue);
                    }
                    else {
                        $("#divError").show().html("用户名或密码错误！" + strValue);
                    }
                }*!/
            })*/

    })



});
