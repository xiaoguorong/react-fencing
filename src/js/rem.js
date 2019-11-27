window.onload = function(){
    resize(1920,"x");
}
function resize(originSize,type){
    // originSize = 750;
    // type = x
    type = type || "x";
    if(type === "x"){
        //自适应
        var width = document.documentElement.clientWidth;//设备的宽度
        var scalex = width/originSize*100+"px";
        document.getElementsByTagName("html")[0].style.fontSize = scalex;
    }else if(type === "y"){
        var height = document.documentElement.clientHeight;
        var scaley = height/originSize+"px";
        document.getElementsByTagName("html")[0].style.fontSize = scaley;
        //先写死
    }
}
resize(1920,"x");

window.onresize = function(){
   resize(1920,"x"); 
}