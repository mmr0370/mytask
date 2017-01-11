/**
 * Created by admin on 2017/1/9.
 */
$(document).ready(function(){
    var n=$("#sliderBlock").val();;
    console.log(n);
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
    $('.showIdentity .transformBtn').click(function(nSlider){
        if(parseInt($('.showIdentity .transformBtn span').text())<nSlider){
            $('.showIdentity .card-show .circle').text($('.showIdentity .transformBtn span').text());
            $('.showIdentity .transformBtn span').text(parseInt($('.showIdentity .transformBtn span').text())+1);
            var opt=[{'width':0,'left':'100%'},{'width':'100%','left':0}];
            $('.showIdentity').stop().animate(opt[1],150,function() {
                $('.showIdentity').hide();
                $('.hideIdentity').show();
                $('.hideIdentity').animate(opt[1], 150);
            })
        }else{
            alert(1);
        }

    });
});
