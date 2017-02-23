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
