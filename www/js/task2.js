/**
 * Created by admin on 2016/11/17.
 */
$(document).ready(function(){
    var nKillerNum;
    var nPoliceNum;
    var nCivilianNum;
    var NumArray=[];
    var playerNum=$("#playerNum").val();
    var nSlider=$("#sliderBlock").val();

    $("#sliderBlock").val(6);
    $('#sliderBlock').bind('input propertychange', function() {
        slider();
       /* alert(playerNum)*/
    });
    $("#playerNum").change(function() {
        changeNum();
    });
    function changeNum(){
        $('#sliderBlock').val(playerNum);
        if(playerNum<6){
            alert("最少6人才能玩游戏哦！")
        }else if(n>20){
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
       playerNum=nSlider;

   }
    /*点击设置*/
    $(".setBtn").click(function(){
        var ListKiller="<li class='killer'>杀手</li>";
        var ListDoctor="<li class='doctor'>杀手</li>";
        var ListPolice="<li class='police'>警察</li>";
        var ListCivilian="<li class='civilian'>平民</li>";
        $(".playerAllocation .List").empty();
        var Arr=["ListKiller","ListDoctor","ListCivilian"];
        nslider=$("#sliderBlock").val();
        for(i=0;i<nslider;i++){
            $(".playerAllocation .List").append(ListCivilian);
        }
        if(nslider<6){
            alert("最少6人才能玩游戏哦！")
        }else if(nslider<8){
            nKillerNum=1;
        }else if(nslider<11){
            nKillerNum=2;
        }else if(nslider<16){
            nKillerNum=3;
        }else if(nslider<20){
            nKillerNum=4;
        }else{
            alert("人数太多分两拨吧");
            $('#playerNum').css("color","#f00");
        }



         fetch(nKillerNum,nslider);

            for(i=0;i<NumArray.length;i++){
                $(".playerAllocation .List li").eq(NumArray[i]).attr("class","killer");
                $(".playerAllocation .List li").eq(NumArray[i]).text("杀手");
            }


    });

    /*----------------随机产生m个（0-n）之间不同的数字----------------*/
    function fetch(m,n)  {
        if(m>n) {
            document.write("你输入的不合理");
        }else {
            for(var i=0;i<m;i++) {
                NumArray[i]=Math.round(n*Math.random());
                for(var j=0;j<i;j++){
                    if(NumArray[j]==NumArray[i]){
                        while (1){
                            NumArray[i]=parseInt(Math.random()*n);
                            if(NumArray[i]!=NumArray[j]){
                                j=-1;
                                break;
                            }

                        }

                    }
                }
            }
        }
    }
    /*翻牌效果*/
    var Default=function(){
        var playerNum=1;
        var playN=playerNum+1;
        $()
        $('.showIdentity .card-show .circle').text(playerNum);
        $('.hideIdentity .card-hide .circle').text(playerNum);
        $('.hideIdentity .transformBtn span').text(playerNum);
        $('.showIdentity .transformBtn span').text(playN);
    };
    Default();
   /* $('.hideIdentity .card-hide .circle').text(playerNum);*/
    $('.hideIdentity .transformBtn').click(function(){
        var opt=[{'width':0,'left':'50%'},{'width':'100%','left':0}];
        $('.hideIdentity .transformBtn span').text($('.showIdentity .transformBtn span').text());
        $('.hideIdentity .card-hide .circle').text($('.showIdentity .transformBtn span').text());
        $('.hideIdentity').stop().animate(opt[0],150,function(){
            $('.hideIdentity ').hide();
            $('.showIdentity').show();
            $('.showIdentity').animate(opt[1],150);
        })
    });
    $('.showIdentity .transformBtn').click(function(){
        $('.showIdentity .card-show .circle').text($('.showIdentity .transformBtn span').text());
        $('.showIdentity .transformBtn span').text(parseInt($('.showIdentity .transformBtn span').text())+1);
        var opt=[{'width':0,'left':'100%'},{'width':'100%','left':0}];
        $('.showIdentity').stop().animate(opt[1],150,function() {
            $('.showIdentity').hide();
            $('.hideIdentity').show();
            $('.hideIdentity').animate(opt[1], 150);
        })
    });
});
