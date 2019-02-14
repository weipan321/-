// 轮播
new Swiper(".swiper-container",{
    
    loop : true,
    autoplay:{
        disableOnInteraction: true,
        delay: 2000,
    }

})

// 登录
username=$("#uname");
upwd=$("#pwd")
hidden=$(".hidden")
hidde=$("hidde")
username.blur(function(){
    var idd_reg=/^\d{5,11}/;
    var uname_str=username.value;
    // console.log(idd_reg.test(uname_str))
    //  var son=username.parent.;
    
    if(idd_reg.test(uname_str)){
        hidden.attr("class","success");
        hidden.html("正确")
    }else{
        hidden.attr("class","error");
        hidden.html("请输入正确的QQ账号")
    }
})
upwd.blur(function(){
    var psw_reg=/^.{6,20}$/;
    var psw_str=upwd.value;
    if(psw_reg.test(psw_str)){
        index=0;
        var symbol_reg=/[!\@\#\$\%\^\&\*\(\)]/;
        if(symbol_reg.test(psw_str)){
            index++;
        }
        var number_reg=/\d/;
        if(symbol_reg.test(psw_str)){
            index++
        }
        var letter_reg=/[a-z]/i;
        if(letter_reg.test(psw_str)){
            index++
        }
        var qiang_reg=/(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$)/;
        if(qiang_reg.test(psw_str)){
            index++
        }
        switch(index){
            case 0:
            case 1: hidde.attr("class","success");
                    hidde.html("弱");
                    break; 
            case 2: hidde.attr("class","success");
                    hidde.html("弱");
                    break; 
            case 3: hidde.attr("class","success");
                    hidde.html("中");
                    break; 
            case 4: hidde.attr("class","success");
                    hidde.html("强");
                    break;          
        }

    }else{
        hidde.attr("class","error");
        hidde.html="请输入正确的密码"
    }

})


