/**
 * Created by admin on 2016/11/17.
 */
$(document).ready(function(){
    var nKillerNum; //杀手数量
    var nPoliceNum; //警察数量
    var nCivilian; //平民数量
    var sliderId=$("#sliderBlock");   //获取滑块
    var playerNumId=$("#playerNum");   //获取游戏人数
    var nSlider=$("#sliderBlock").val(); //滑块值
    var NumArray=[];
    sliderId.bind('input propertychange', function() {
        /*滑块滑动*/
        slider();
    });
    playerNumId.bind('change', function() {
        /*设置游戏人数*/
        setNum();
    });
    $("#add").click(function(){
        add();
    });
    $("#reduce").click(function(){
        reduce();
    });

    /*滑块赋值*/
    function slider(){
        var nSlider=$("#sliderBlock").val();
        $("#playerNum").val(nSlider);
        playerNum=nSlider;
    }
    /*游戏人数赋值*/
    function setNum(){
        var playNum=$("#playerNum").val();
        if(playNum<6){
            alert("游戏人数在6-20之间");
            playNum=$("#playerNum").val(6);
            $("#sliderBlock").val(6);
        }else if(playNum>20){
            alert("游戏人数在6-20之间");
            playNum=$("#playerNum").val(20);
            $("#sliderBlock").val(20);
        }else{
            $("#sliderBlock").val(playNum);

        }
    }
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
    /*设置玩家配比*/
    $(".setBtn").click(function(){
        var ListKiller="<li class='killer'>杀手</li>";
        var ListDoctor="<li class='doctor'>杀手</li>";
        var ListPolice="<li class='police'>警察</li>";
        var ListCivilian="<li class='civilian'>平民</li>";
        var playArray=new Array();  //存储杀手和平民组成数组
        var phraseList=$(".phraseList");
        var phraseArray=new Array();
        for(var i=0;i<phraseList.length;i++){
            phraseArray[i]=$(".phraseList").eq(i).val();
        }
        console.log("词组"+phraseArray);
        var nslider=$("#sliderBlock").val();
        var nkillerNum=Math.round(nslider/5);
        $(".playerAllocation .List").empty();
        var Arr=["ListKiller","ListDoctor","ListCivilian"];

        for(i=0;i<nslider;i++){
            $(".playerAllocation .List").append(ListCivilian);
        }
        fetch(nkillerNum,nslider);

        for(i=0;i<NumArray.length;i++){
            $(".playerAllocation .List li").eq(NumArray[i]).attr("class","killer");
            $(".playerAllocation .List li").eq(NumArray[i]).text("杀手");
        }


        for(var i=0;i<$(".playerAllocation li").length;i++){
            player=$(".playerAllocation li").eq(i).text();
            playArray[i]=player;
        }
        //数组转化成字符串并存储与本地
        localStorage.player = playArray;
        localStorage.killer=NumArray;
        localStorage.num = playArray.length;
        localStorage.phraseArray=phraseArray;
        console.log($(".playerAllocation li").length);
        console.log($("#phraseList1").val());
        console.log($("#phraseList2").val());
        console.log(playArray);
        console.log("全部玩家"+playArray);
        console.log("杀手的位置" + NumArray);
        console.log("玩家总数" + playArray.length);
        console.log("词组"+phraseArray);
    });
    /*跳转到发牌页面*/
    $("#dealCard").click(function(nslider){
        /*存储词组*/
        localStorage.phraseList1=$("#phraseList1").val();
        localStorage.phraseList2=$("#phraseList1").val();

        if( $(".playerAllocation .List").html()==""){
            alert("请设置玩家配比");
        }else if($("#phraseList2").val()==""||$("#phraseList1").val()==""){
            alert("请设置水民词组");
        }else{
            window.open("task6-5.html");
        }
    });

    /*----------------随机产生m个（0-n）之间不同的数字----------------*/
    function fetch(m,n)  {
        if(m>n) {
            document.write("你输入的不合理");
        }else {
            for(var i=0;i<m;i++) {
                NumArray[i]=Math.floor(n*Math.random());
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

    /*翻牌及传递页面*/
    //导入数据
    playArray=localStorage.player;
    NumArray=localStorage.killer;
    playArrayNum=localStorage.num;
    phraseArray=localStorage.phraseArray;
    var arrNew = playArray.split(",");
    var arrPhrase=phraseArray.split(",");
    console.log("总人数"+playArrayNum);
    console.log("成员"+playArray);
    console.log(arrNew[4]);
    console.log("杀手的位置" + NumArray);
    console.log("词组"+phraseArray);
    console.log("词组"+arrPhrase[0]);
    /*翻牌效果*/
    var Default=function(){
        var playerNum=1;
        var playN=playerNum+1;
        $(".role").text(arrNew[0]);
        $('.showIdentity .card-show .circle').text(playerNum);
        $('.hideIdentity .card-hide .circle').text(playerNum);
        $('.hideIdentity .transformBtn span').text(playerNum);
        $('.showIdentity .transformBtn span').text(playN);
        if(arrNew[0]=="平民"){
            $("keyWord").text(arrPhrase[0]);
        }else{
            $("keyWord").text(arrPhrase[1]);
        }

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
        getPlayerInfo(playerIdentity);
    });
    $('.showIdentity .transformBtn').click(function(){
        if(parseInt($('.showIdentity .transformBtn span').text())<playArrayNum){
            var playerIdentity=$('.showIdentity .transformBtn span').text();
            $('.showIdentity .card-show .circle').text(playerIdentity);
            $('.showIdentity .transformBtn span').text(parseInt(playerIdentity)+1);
            var opt=[{'width':0,'left':'100%'},{'width':'100%','left':0}];
            $('.showIdentity').stop().animate(opt[1],150,function() {
                $('.showIdentity').hide();
                $('.hideIdentity').show();
                $('.hideIdentity').animate(opt[1], 150);
            })
            getPlayerInfo(playerIdentity);

        }else if(parseInt($('.showIdentity .transformBtn span').text())==playArrayNum){
            $('.showIdentity .card-show .circle').text($('.showIdentity .transformBtn span').text());
            $('.showIdentity .transformBtn a').text("隐藏并传递给法官");
        }else{
            window.open("task6-2.html");
        }
    });

    function getPlayerInfo(playerIdentity){
        $(".role").text(arrNew[parseInt(playerIdentity)-1]);
        if(arrNew[parseInt(playerIdentity)-1]=="平民"){
            $(".keyWord").text(arrPhrase[0]);
        }else{
            $(".keyWord").text(arrPhrase[1]);
        }
    }


});
