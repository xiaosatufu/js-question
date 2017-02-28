/**
 * ios设备中无法自动播放音频文件的问题。
 * 微信中，用微信自带的JS能够实现自动播放。
 * 可是没有绑定的好像就不行了。
 * 这是一个折中的办法，触摸时再播放音频文件
 */
var audio  = document.getElementById('J_BgAudio');
document.addEventListener('touchstart', function(){
    audio.play();
}, false);



// jquery ajax POST 例子详解
    function test(){
   $.ajax({
            //提交数据的类型 POST GET
            type:"POST",
            //提交的网址
            url:"testLogin.aspx",
            //提交的数据
            data:{Name:"sanmao",Password:"sanmaoword"},
            //返回数据的格式
            datatype: "html",//"xml", "html", "script", "json", "jsonp", "text".
            //在请求之前调用的函数
            beforeSend:function(){$("#msg").html("logining");},
            //成功返回之后调用的函数
            success:function(data){
           $("#msg").html(decodeURI(data));
            }   ,
            //调用执行后调用的函数
            complete: function(XMLHttpRequest, textStatus){
               alert(XMLHttpRequest.responseText);
               alert(textStatus);
                //HideLoading();
            },
            //调用出错执行的函数
            error: function(){
                //请求出错处理
            }
         });

  }
