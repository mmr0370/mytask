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
    var playArray=new Array();  //存储杀手和平民组成数组
    var NumArray=[];
    var phraseArray=new Array();
    var phraseList=$(".phraseList");
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
        var playerNum=$("#playerNum").val();
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
    /*存储词组*/
    $("#phraseList1").change(function(){
        var phrase1=$("#phraseList1").val();
        localStorage.phraseList1=phrase1;
        console.log("词组1" + phrase1);
    });
    $("#phraseList2").change(function(){
        var phrase2=$("#phraseList2").val();
        localStorage.phraseList2=phrase2;
        console.log("词组1" + phrase2);
    });
    /*设置玩家配比*/
    $(".setBtn").click(function(){
        var nslider=$("#sliderBlock").val();
        var nkillerNum=Math.round(nslider/5);
        var listArr=[];
        fetch(nkillerNum,nslider);
        $(".playerAllocation .List").empty();
        for(var i=0;i<nslider;i++){
            listArr[i]="平民";
        }
        console.log("平民22"+listArr);
        console.log("shashou"+NumArray);
        for(var i=0;i<NumArray.length;i++){
            listArr.splice(NumArray[i],1,"杀手");
            console.log(NumArray[i]);
        }
        console.log("数组"+listArr);
        for(i=0;i<nslider;i++){
            $(".playerAllocation .List").append("<li class='civilian'></li>");
            $(".playerAllocation .List li").eq(i).text(listArr[i]);
            for(var j=0;j<NumArray.length;j++){
                $(".playerAllocation .List li").eq(NumArray[j]).attr("class","killer");
            }
        }

        //数组转化成字符串并存储与本地
        localStorage.player =listArr;
        localStorage.killer=NumArray;
        localStorage.num = listArr.length;
        console.log($("cizu1"+".playerAllocation li").length);
        console.log($("#phraseList1").val());
        console.log($("#phraseList2").val());
        console.log("全部玩家"+listArr);
        console.log("杀手的位置" + NumArray);
        console.log("玩家总数" + listArr.length);
    });


    /*跳转到发牌页面*/
    $("#dealCard").click(function(nslider){
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
    var playArrayNum
        ,phraseArray
        ,playArray
        ,numKiller
        ,arrPhrase
        ,playA
        ,phrase1
        ,phrase2;
    leadDate();
    Default();
    function leadDate(){
        playArrayNum=localStorage.num;
        phrase1=localStorage.phraseList1;
        phrase2=localStorage.phraseList2;
        arrPhrase=[phrase1,phrase2];
        playArray=localStorage.player;
        numKiller=localStorage.killer;
        playA= playArray.split(",");
        //arrPhrase=phraseArray.split(",");
        console.log("总人数"+playArrayNum);
        console.log("成员"+playArray);
        console.log(playA[4]);
        console.log("杀手的位置" + numKiller);
        console.log("词组"+phraseArray);
        console.log("词组"+arrPhrase[0]);
    }
    function Default(){
        var playerNum=1;
        var playN=playerNum+1;
        $(".role").text(playA[0]);
        $('.showIdentity .card-show .circle').text(playerNum);
        $('.hideIdentity .card-hide .circle').text(playerNum);
        $('.hideIdentity .transformBtn span').text(playerNum);
        $('.showIdentity .transformBtn span').text(playN);
        if(playA[0]=="平民"){
            $("keyWord").text(arrPhrase[0]);
        }else{
            $("keyWord").text(arrPhrase[1]);
        }
    };
    $('.hideIdentity .transformBtn').click(function(){
        var opt=[{'width':0,'left':'50%'},{'width':'100%','left':0}];
        var playerIdentity=$('.showIdentity .transformBtn span').text();
        $('.hideIdentity .transformBtn span').text($('.showIdentity .transformBtn span').text());
        $('.hideIdentity .card-hide .circle').text($('.showIdentity .transformBtn span').text());
        $('.hideIdentity').stop().animate(opt[0],300,function(){
            $('.hideIdentity ').hide();
            $('.showIdentity').show();
            $('.showIdentity').animate(opt[1],300);
        })
        getPlayerInfo(playerIdentity);
    });
    $('.showIdentity .transformBtn').click(function(){
        if(parseInt($('.showIdentity .transformBtn span').text())<playArrayNum){
            var playerIdentity=$('.showIdentity .transformBtn span').text();
            $('.showIdentity .card-show .circle').text(playerIdentity);
            $('.showIdentity .transformBtn span').text(parseInt(playerIdentity)+1);
            var opt=[{'width':0,'left':'100%'},{'width':'100%','left':0}];
            $('.showIdentity').stop().animate(opt[1],300,function() {
                $('.showIdentity').hide();
                $('.hideIdentity').show();
                $('.hideIdentity').animate(opt[1], 300);
            })
        }else if(parseInt($('.showIdentity .transformBtn span').text())==playArrayNum){
            $('.showIdentity .card-show .circle').text($('.showIdentity .transformBtn span').text());
            $('.showIdentity .transformBtn a').text("隐藏并传递给法官");
        }else{
            window.open("judge.html");
        }
    });
    function getPlayerInfo(playerIdentity){
        $(".role").text(playA[parseInt(playerIdentity)-1]);
        if(playA[parseInt(playerIdentity)-1]=="平民"){
            $(".keyWord").text(arrPhrase[0]);
        }else{
            $(".keyWord").text(arrPhrase[1]);
        }
    }
    /*法官查看页面*/
    var cardList
        ,arrIndex=[]
        ,saveArr=[]
        ,i
        ,obj;
        cardList="<li class='cardList'>"
        + "<div class='cardBox'>"
            +"<div class='cardName1'>"
            +"</div>"
            +"<div class='cardNum'>"
            +"</div>"
            +"</div>"
            +"</li>"

for(i=0;i<playArrayNum;i++){
    $("#diaryCon").append(cardList);
    arrIndex[i]=i+1;
    $("#diaryCon .cardNum").eq(i).text(arrIndex[i]+"号");
}

$("#diaryCon  .cardName1").hover(function() {
    var index=$(".introForm .cardName1").index(this);
    $(this).text(playA[index]);
   $(this).attr("class","cardName");
},function(){
    $(this).attr("class","cardName1");
    $(this).text("");
});
/*法官查看页面结束*/
/*法官台本*/
$(".discuss").click(function(){
   $(this).css({"background":"#7eb8f3"});
   $(this).addClass("clicked");
   alert("请玩家一次发言");
   $(this).find(".blueTriangle").addClass("change");
});


    $(".vote").click(function(){
        if($('.discuss').hasClass('clicked')){
        window.open("task13-2.html");
        }else{
            alert("请按顺序执行任务");
        }
    });
    /*投票页面*/
    for(i=0;i<playArrayNum;i++){
        $("#vote").append(cardList);
        arrIndex[i]=i+1;
     $("#vote .cardNum").eq(i).text(arrIndex[i]+"号");
    }
    //投票给选手
    $("#vote .cardBox").click(function(){
        var $this=$(this);
        if($this.attr("title")==="checked"){
           $(this).removeAttr("title");
        }else{
            $("#vote .cardBox").removeAttr("title");
            $this.attr("title","checked");
            var dieNum=$("#vote .cardBox").index(this);
            localStorage.dieNum=dieNum;
        }

        console.log("个数"+$("[title=checked]").length);
        console.log("位置"+dieNum);
    });

    //投死

    $("#cardDie").click(function(){
        if($("[title=checked]").length===0){
            alert("请投票");
        }else{
                $("#vote [title='checked']").attr("name","die");
                $("#vote [title='checked']").removeAttr("title");
            var dieNum=localStorage.dieNum;
                console.log("位置"+dieNum);
                window.open("libretto.html");
        }
    });
    //法官日志
    for(i=0;i<playArrayNum;i++){
        var dieNum=localStorage.dieNum;
        $("#judgeLog").append(cardList);
        arrIndex[i]=i+1;
        $("#judgeLog .cardNum").eq(i).text(arrIndex[i]+"号");
        console.log("杀手位置"+dieNum);
        $("#judgeLog .cardName").eq(dieNum).attr("name","die");
    }
    $("#judgeLog .cardName1").hover(function() {
        var index=$(".introForm .cardName1").index(this);
        $(this).text(playA[index]);
        $(this).attr("class","cardName");
    },function(){
        $(this).attr("class","cardName1");
        $(this).text("");
    });
});
