
function begin_to_orz() {
    document.getElementById("mainarea").innerHTML=photo1+"\
    <span style="\"font-size:" 48px;color:="" #ff0000\"="">叶康杰是我们的红太阳，没有他我们会死！</span>\
    <div id="\"orz\"" align="\"center\""> <button style="\"font-size:" 30px;="" color:="" #ff0000\"="" onclick="\"orzorz()\"">来膜拜叶康杰啊</button> </div>\
";
}
function orzorz() {
    document.getElementById("orz").innerHTML="\
    <p style="\"margin:10px\"">\
        <span style="\"font-size:" 40px;="" color:="" #ff0000\"="">\
            膜拜成功！\
        <br>\
        叶康杰又变强了！但是你还是那么垃圾！\
        </span>\
    </p>\
    <button style="\"font-size:" 24px\"="" onclick="\"ORZINF()\"" id="\"orzbutton\"">继续膜拜1次</button>\
    <div style="\"font-size:" 50px;background:rgba(255,255,255,0.7);width:auto\"="" id="\"orzTimes\""></div>\
    <div style="\"font-size:" 40px;color:red\"="" id="\"ykjtql\""></div>\
";
    document.title="您已经开始膜拜YKJ啦！你又被吊打了！";
}

var orzCount=0;

var sayslist=new Array(
    "你个菜逼我今天AK了",
    "NOI怎么这么水啊，这不是用来随手AK的吗",
    "louhc你个菜逼虽然我要和你在一起但是你还是好菜啊",
    "你怎么还在乱膜啊？？？你快吸掉我RP的0.000000001‰了",
    "今天考试又是三个傻逼题，我不仅AK了还把2048玩到了2^1000000",
    "怎么我出的题全场爆零啊，我以为会有人负分的啊",
    "你们还是naive，我怎么可能不AK？",
    "今天题真的水，你们不AK的都退役吧"
);

function ORZINF() {
    orzCount+=1;
    document.getElementById("orzTimes").innerHTML='叶康杰涨了'+orzCount+'rp!!!';
    alert('YKJ对于你这个菜鸡只好说：'+sayslist[Math.floor(Math.random()*sayslist.length)]);
}
