/**
 * Created by admin on 2017/1/9.
 */
$(document).ready(function(){
    /*翻牌及传递页面*/
    //导入数据
    var playArrayNum
        ,phraseArray
        ,playArray
        ,numKiller
        ,arrNew
        ,arrPhrase;
    playArrayNum=localStorage.num;
    phraseArray=localStorage.phraseArray;
    playArray=localStorage.player;
    numKiller=localStorage.killer;
    //arrNew = playArray.split(",");
    //arrPhrase=phraseArray.split(",");
    console.log("总人数"+playArrayNum);
    console.log("成员"+playArray);
    //console.log(arrNew[4]);
    console.log("杀手的位置" + numKiller);
    console.log("词组"+phraseArray);
    //console.log("词组"+arrPhrase[0]);
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
        var playerIdentity=$('.showIdentity .transformBtn span').text();
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
                $('.hideIdentity').animate(opt[1], 300);
            })
            getPlayerInfo(playerIdentity);

        }else if(parseInt($('.showIdentity .transformBtn span').text())==playArrayNum){
            $('.showIdentity .card-show .circle').text($('.showIdentity .transformBtn span').text());
            $('.showIdentity .transformBtn a').text("隐藏并传递给法官");
        }else{
            window.open("judge.html");
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
