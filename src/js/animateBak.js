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
                if(key === 'opacity'){
                    var speed = (target - parseFloat(getStyle(div)[key]))*100/8;
                    speed = (speed>0? Math.ceil(speed): Math.floor(speed));
                    var op = parseFloat(getStyle(div)[key]) + speed/100;
                    div.style[key]=  op;
                    if(parseFloat(getStyle(div)[key]) !==target ){
                        flag = false;
                    }
                }else{
                    var speed = (target - parseInt(getStyle(div)[key]))/8;
                    speed = (speed>0? Math.ceil(speed): Math.floor(speed));
                    div.style[key]= parseInt(getStyle(div)[key]) + speed +'px';
                    if(parseInt(getStyle(div)[key]) !==target ){
                        flag = false;
                    }
                }
            }
            if(flag === true){
                clearInterval(div.timer);    
            }
    },30);
}