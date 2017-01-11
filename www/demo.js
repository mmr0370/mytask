/**
 * Created by admin on 2017/1/10.
 */
/**
 * Created by 志波 on 2016/10/21.
 */
"use strict";


var range=document.getElementById("range");
var ra_value=range.value; //滑轮的值
var Num=document.getElementById("Num"); //显示的人数
var set_peopleNum = document.getElementsByClassName("set");
var x=0;
var y=0;
var i;
var click=0; //判断有没有点击设置
var maxRA_value=18; //最多的人数
var setNum_changeNum;


function less() {
    if(ra_value>6){
        ra_value--;
    }
    else{
        alert("最少6个人");
    }
    document.getElementById("range").value=ra_value;
    Num.value=ra_value;
}     //-1

function plus() {
    if(ra_value<18){
        ra_value++;
    }
    else{
        alert("最多18个人");
    }
    document.getElementById("range").value=ra_value;
    Num.value=ra_value;
}     //+1

function change(){
    ra_value=range.value;
    Num.value=ra_value;
}     //滑轮改变人数

function on_change() {
    if(Num.value>=6&&Num.value<=18&&isNaN(Num.value)===false&&Num.value%1===0){
        range.value=Num.value;
    }
    else {
        alert("请输入6到18的整数");
        Num.value=6;
        range.value=6;
    }
}   //输入框输入数字，且判断是否正确

function set() {
    click=1;
    if (ra_value >= 6 && ra_value <= 7) {
        var arr = [];
        for (i=0;i<ra_value;i++){
            arr.push(i+1);
        }
        for (i = 0; i < maxRA_value; i++) {
            set_peopleNum[i].style.display = "none";   //重新隐藏
            set_peopleNum[i].childNodes[1].innerHTML = "水　民　";   //重置身份
            set_peopleNum[i].childNodes[0].style.backgroundColor = "#29bde0";  //重置颜色
        }
        for (i = 0; i < ra_value; i++) {
            set_peopleNum[i].style.display = "inline-block";
        }
        var newArr=gRandomArr(arr,1);//抽取一个杀手
        for(i=0;i<newArr.length;i++){
            set_peopleNum[newArr[i]-1].childNodes[1].innerHTML = "杀　手　";
            set_peopleNum[newArr[i]-1].childNodes[0].style.backgroundColor = "#fab344";
        }
        //数组转化成字符串并存储与本地
        var playerStr = JSON.stringify(newArr);
        localStorage.ids = playerStr;
        localStorage.idx = ra_value;
        console.log("杀手的数字" + playerStr);
        console.log("玩家的人数" + ra_value);
    }      //当人数为6到7 1个杀手
    else if (ra_value >= 8 && ra_value <= 11) {
        var arr = [];
        for (i=0;i<ra_value;i++){
            arr.push(i+1);
        }
        for (i = 0; i < maxRA_value; i++) {
            set_peopleNum[i].style.display = "none";   //重新隐藏
            set_peopleNum[i].childNodes[1].innerHTML = "水　民　";   //重置身份
            set_peopleNum[i].childNodes[0].style.backgroundColor = "#29bde0";  //重置颜色
        }
        for (i = 0; i < ra_value; i++) {
            set_peopleNum[i].style.display = "inline-block";
        }
        var newArr=gRandomArr(arr,2);
        for(i=0;i<newArr.length;i++){
            set_peopleNum[newArr[i]-1].childNodes[1].innerHTML = "杀　手　";
            set_peopleNum[newArr[i]-1].childNodes[0].style.backgroundColor = "#fab344";
        }
        //数组转化成字符串并存储与本地
        var playerStr = JSON.stringify(newArr);
        localStorage.ids = playerStr;
        localStorage.idx = ra_value;
        console.log("杀手的数字" + playerStr);
        console.log("玩家的人数" + ra_value);
    } //当人数为8到11 2个杀手
    else if (ra_value >= 12 && ra_value <= 15) {
        var arr = [];
        for (i=0;i<ra_value;i++){
            arr.push(i+1);
        }
        for (i = 0; i < maxRA_value; i++) {
            set_peopleNum[i].style.display = "none";   //重新隐藏
            set_peopleNum[i].childNodes[1].innerHTML = "水　民　";   //重置身份
            set_peopleNum[i].childNodes[0].style.backgroundColor = "#29bde0";  //重置颜色
        }
        for (i = 0; i <ra_value; i++) {
            set_peopleNum[i].style.display = "inline-block";
        }
        var newArr=gRandomArr(arr,3);
        for(i=0;i<newArr.length;i++){
            set_peopleNum[newArr[i]-1].childNodes[1].innerHTML = "杀　手　";
            set_peopleNum[newArr[i]-1].childNodes[0].style.backgroundColor = "#fab344";
        }
        //数组转化成字符串并存储与本地
        var playerStr = JSON.stringify(newArr);
        localStorage.ids = playerStr;
        localStorage.idx = ra_value;
        console.log("杀手的数字" + playerStr);
        console.log("玩家的人数" + ra_value);
    }//当人数为12到15 3个杀手
    else{
        var arr = [];
        for (i=0;i<ra_value;i++){
            arr.push(i+1);
        }
        for (i = 0; i < maxRA_value; i++) {
            set_peopleNum[i].style.display = "none";   //重新隐藏
            set_peopleNum[i].childNodes[1].innerHTML = "水　民　";   //重置身份
            set_peopleNum[i].childNodes[0].style.backgroundColor = "#29bde0";  //重置颜色
        }
        for (i = 0; i < ra_value; i++) {
            set_peopleNum[i].style.display = "inline-block";
        }
        var newArr=gRandomArr(arr,4);
        for(i=0;i<newArr.length;i++){
            set_peopleNum[newArr[i]-1].childNodes[1].innerHTML = "杀　手　";
            set_peopleNum[newArr[i]-1].childNodes[0].style.backgroundColor = "#fab344";
        }
        //数组转化成字符串并存储与本地
        var playerStr = JSON.stringify(newArr);
        localStorage.ids = playerStr;
        localStorage.idx = ra_value;
        console.log("杀手的数字" + playerStr);
        console.log("玩家的人数" + ra_value);
    }                                      //当人数大于15 4个杀手
    setNum_changeNum=ra_value;
}       //点击设置输出

var gRandomArr = function( arr, length ){
    var newArr = [],
        index;
    for( i=0; i < length; i++ ){
        // 利用数组长度生成随机索引值
        index = parseInt( Math.random() * arr.length );
        // 将随机索引对应的数组元素添加到新的数组中
        newArr.push( arr[index] );
        // 删除原数组中随机生成的元素
        arr.splice( index, 1 );
    }
    return newArr;
};   //从人数中抽取杀手，抽奖

function to_take3() {
    if (click===1&&setNum_changeNum===range.value){   //防止点击设置后，又更改人数，就发牌的现象
        location.href = "JS3.html";
    }
    else {
        alert("请点击设置再发牌")
    }
}           //发牌


