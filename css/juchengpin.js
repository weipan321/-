// 轮播
// new Swiper(".swiper-container",{
//     spaceBetween: 30,

//     loop : true,
//     autoplay:{
//         disableOnInteraction: true,
//         delay: 2000,
//         },
//         pagination: {
//             el: '.swiper-pagination',
//           },
//         //   loop : true,


// })
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 60,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    autoplay:{
                disableOnInteraction: true,
                 delay: 2000,
                 },
  });


// 登录
username=$("#uname");
upwd=$("#pwd");
hidden=$(".hidden");
hidde=$("hidde");
username.blur(function(){
    var idd_reg=/^\d{5,11}$/;
    var uname_str=username.value;
    if(idd_reg.test(uname_str)){
        hidden.attr("class","success");
        hidden.html("正确")
    }else{
        hidden.attr("class","error");
        hidden.html("请输入正确的QQ账号")
    }
})
upwd.blur(function(){
    var psw_reg=/^\d{6,20}/;
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


// 放大镜

// // 小图焦点
//  var focus=document.querySelector(".foucus");
// //  大图焦点
//  var big_wrap=document.querySelector(".big_details");
//  var big_bg=big_wrap.children[0];
//  console.log(big_bg)
// //  小图和大图的缩放比列
//  var prop=focus/big_wrap;
  // 1. 计算比例;

            // 小图焦点;
            var focus = document.querySelector(".focus");
            // 大图焦点;
            var big_wrap = document.querySelector(".wrap-big-magnifier");
            var small_wrap = document.querySelector(".wrap-small-magnifier");

            var big_bg = big_wrap.children[0];
            var small_bg = small_wrap.children[0];

            var choice_wrap = document.querySelector(".wrap-choice-magnifier");
            var choice_items = choice_wrap.children;

            // 计算比例;
            // 这是小图和大图的缩放比;

            // tip dispaly 设置结束之后用offset获取宽度和高度时是0;
            var prop = parseInt(getComputedStyle(big_wrap)["width"]) / parseInt(getComputedStyle(focus)["width"]);
            
            big_bg.style.width = prop * small_wrap.offsetWidth + "px";
            big_bg.style.height = prop * small_wrap.offsetHeight + "px";

            // canvas img ;

            // 鼠标移入显示;
            small_wrap.addEventListener("mouseenter" , toggle.bind(false,"show"));
            small_wrap.addEventListener("mouseleave" , toggle.bind(false,"hide"));

            function toggle(type){ 
                  var display = null;
                  if(type === "show"){
                        display = "block";
                  }else{
                        display = "none";
                  }
                  focus.style.display = display;
                  big_wrap.style.display = display;
            }

            small_wrap.addEventListener("mousemove",eleMove)

            function eleMove(evt){
                  var e = evt || window.event;
                  var _left = e.offsetX;
                  var _top = e.offsetY;

                  // 边界检测;

                  _left = _left - focus.offsetWidth / 2 ;
                  _top = _top - focus.offsetHeight / 2;

                  // 最小值边界判断;
                  _left = _left <= 0 ? 0 : _left;
                  _top = _top <= 0 ? 0 : _top;

                  // 最大值边界判断;

                  var maxLeft = small_wrap.offsetWidth - focus.offsetWidth;
                  var maxTop =  small_wrap.offsetHeight - focus.offsetHeight;


                  _left = _left >= maxLeft ? maxLeft : _left;
                  _top = _top >= maxTop ? maxTop : _top;

                  // 边界检测 end;  

                  // 左侧焦点移动;
                  focus.style.left = _left + "px";
                  focus.style.top = _top  + "px";
                  
                  // 右侧背景移动;

                  big_bg.style.left = -_left * prop + "px";
                  big_bg.style.top = -_top * prop + "px";

            }     

            choice_items = Array.from(choice_items);
            choice_items.forEach((item)=>{
                  item.addEventListener("click",choice.bind(false,item))
            })

            function choice(item){
                  // 1. 怎么获取路径啊?  data-big  data-samll;

                  // 先清空;
                  // console.log(item);      
                  choice_items.forEach((item)=>{
                        item.className = "";
                  })
                  // 给对应的目标添加acitve;
                  item.className = "active";

                  // 替换图片;
                  
                  // 1. 获取数据;
                  var bigSrc = item.getAttribute("data-big");
                  var smallSrc = item.getAttribute("data-small");

                  // console.log(bigSrc,smallSrc);
                  small_bg.src = smallSrc;
                  big_bg.src = bigSrc;
            }

// 购物车JS




            
             