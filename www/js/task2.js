/**
 * Created by admin on 2016/11/17.
 */
$(document).ready(function(){
    var nKillerNum;
    var nPoliceNum;
    var nCivilianNum;
    $("#sliderBlock").val(6);
    $('#sliderBlock').bind('input propertychange', function() {
        slider();
    });
    $("#playerNum").change(function() {
        changeNum();
    });
    function changeNum(){
      var playerNum=$("#playerNum").val();
        $('#sliderBlock').val(playerNum);
        if(playerNum<6){
            alert("最少6人才能玩游戏哦！")
        }else if(playerNum<9){
            nKillerNum=1;
            nPoliceNum=1;
            nCivilianNum=playerNum-nPoliceNum-nKillerNum;
        }else if(playerNum<12){
            nKillerNum=2;
            nPoliceNum=1;
            nCivilianNum=playerNum-nPoliceNum-nKillerNum;
        }else if(playerNum<16){
            nKillerNum=3;
            nPoliceNum=2;
            nCivilianNum=playerNum-nPoliceNum-nKillerNum;
        }else if(playerNum<20){
            nKillerNum=4;
            nPoliceNum=2;
            nCivilianNum=playerNum-nPoliceNum-nKillerNum;
        }else{
            alert("人数太多分两拨吧");
            $('#playerNum').css("color","#f00");
        }
    }
   /* 点击”+“滑块数值增加*/
    $(".add").click(function(){
        add();
    });
    /* 点击”-“滑块数值减少*/
    $(".reduce").click(function(){
        reduce();
    });

    /* 滑块数值增加*/
    function add(){
        var nSlider=$("#sliderBlock").val();
        if (nSlider<20){
            nSlider++;
        }
        $("#sliderBlock").val(nSlider);
        $("#playerNum").val(nSlider);
    }
    /* 滑块数值减少*/
    function reduce(){
        var nSlider=$("#sliderBlock").val();
        if (nSlider>6){
            nSlider--;
        }
        $("#sliderBlock").val(nSlider);
        $("#playerNum").val(nSlider);
    }
    /*滑块赋值*/
   function slider(){
       var nSlider=$("#sliderBlock").val();
       $("#playerNum").val(nSlider);
   }
    /*点击设置*/
    $(".setBtn").click(function(){
        var ListKiller="<li class='killer'>杀手</li>";
        var ListDoctor="<li class='doctor'>杀手</li>";
        var ListPolice="<li class='police'>警察</li>";
        var ListCivilian="<li class='civilian'>平民</li>";
        $(".playerAllocation .List").html(ListCivilian);
        var Arr=["ListKiller","ListDoctor","ListCivilian"];
        nslider=$("#sliderBlock").val();
        if(n>=6&&n<8){

        }
    });


});