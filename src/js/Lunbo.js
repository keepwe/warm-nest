import $ from "jquery"
function getStyle(ele) {
    if(ele.currentStyle){
        return ele.currentStyle;
    }else{
        return getComputedStyle(ele,null);
    }
}
function animate(div,obj) {
    clearInterval(div.timer);
    div.timer =  setInterval(function () {
            var flag = true;
            for(var key in obj){
                var target = obj[key];
                if(key == 'opacity'){
                    var speed = (target - parseFloat(getStyle(div)[key]))*100/8;
                    speed = (speed>0? Math.ceil(speed): Math.floor(speed));
                    var op = parseFloat(getStyle(div)[key]) + speed/100;
                    div.style[key]=  op;
                    if(parseFloat(getStyle(div)[key]) !=target ){
                        flag = false;
                    }
                }else{
                    var speed = (target - parseInt(getStyle(div)[key]))/8;
                    speed = (speed>0? Math.ceil(speed): Math.floor(speed));
                    div.style[key]= parseInt(getStyle(div)[key]) + speed +'px';
                    if(parseInt(getStyle(div)[key]) !=target ){
                        flag = false;
                    }
                }
            }
            if(flag == true){
                clearInterval(div.timer);    
            }
    },30);
}
function Broadcast() {
	let item = document.querySelector(".homebanner");
        let list = item.querySelectorAll(".homebannerlist li");
        let pageLi = document.querySelectorAll(".homebannernav li");
        let rightBtn = document.getElementById("rightBtn");
        let leftBtn = document.getElementById("leftBtn");
        let count = 0;//默认显示第一个图片
        list[count].style.opacity = 1;
        showNowItem(0);
        rightBtn.onclick = function () {
            animate(list[count],{opacity:0});
            count++;
            if(count===list.length){
                count = 0;
            }
            showNowItem(count);
            animate(list[count],{opacity:1});
        };
        leftBtn.onclick = function () {
            animate(list[count],{opacity:0});
            count--;
            console.log(count);
            if(count===-1){
                count = list.length-1;
            }
            showNowItem(count);
            animate(list[count],{opacity:1});
        };
        let autoPlayTimer = setInterval(function () {
            rightBtn.onclick();
        },2000);
        item.onmouseenter = function () {
            clearInterval(autoPlayTimer);
        };
        item.onmouseleave = function () {
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(function () {
                rightBtn.onclick();
            },2000);
        };
        function showNowItem(count){
            for (let i = 0;i<pageLi.length;i++){
                pageLi[i].style.color="#fff";
                pageLi[i].style.background="#f00";
            }
            pageLi[count].style.color="#000";
            pageLi[count].style.background="#fff";
        }
        for (let i = 0;i<pageLi.length;i++){
            pageLi[i].onmouseenter = function () {
                clearInterval(autoPlayTimer);
                showNowItem(i);
                animate(list[i],{opacity:1});
                animate(list[count],{opacity:0});
                count = i;
            };
            pageLi[i].onmouseleave = function () {
                clearInterval(autoPlayTimer);
                autoPlayTimer = setInterval(function () {
                    rightBtn.onclick();
                },1500);
            }
        }
}
export default Broadcast;
