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
        var xhr=new XMLHttpRequest();
        xhr.open("POST","/student");
        var date="name="+$
    })



});
