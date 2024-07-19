var startFunc = function () {

document.body.appendChild(img);
/**
document.body.appendChild(img1);
*/
if (p == 1){
player.start("http://wtt01.vplay888.com:58829/bl/wtQ01.flv")
}
    else { 
if (p == 2){
player.start("")
}
if (p == 3){
player.start("http://mmm1.66286662.net:8091/kk6/kkvideocg88.flv")
}
if (p == 4){
player.start("http://mmm1.66286662.net:8091/kk7/kkvideocg88.flv")
}
if (p == 5){
player.start("http://mmm1.66286662.net:8091/kk8/kkvideocg88.flv")
}
if (p == 6){
player.start("http://wtt01.vplay888.com:58829/bl/wtQ06.flv")
}
if (p == 7){
player.start("http://mmm1.66286662.net:8091/kk19/kkvideocg88.flv")
}
if (p == 8){
player.start("ws://43.241.17.124:8008/KKW/V8.flv")
}
if (p == 9){
player.start("http://wtt01.vplay888.com:58829/bl/wtQ09.flv")
}
if (p == 10){
player.start("http://wtt01.vplay888.com:58829/bl/wtQ10.flv")
}
if (p == 11){
player.start("")
}
if (p == 12){
player.start("http://mmm1.66286662.net:8091/kk28/kkvideocg88.flv")
}
if (p == 13){
player.start("http://mmm1.66286662.net:8091/kk3/kkvideocg88.flv")
}
if (p == 14){
player.start("http://mmm1.66286662.net:8091/kk2/kkvideocg88.flv")
}
if (p == 15){
player.start("http://mmm1.66286662.net:8091/kk1/kkvideocg88.flv")
}
if (p == 16){
player.start("http://mmm1.66286662.net:8091/kk10/kkvideocg88.flv")
}
if (p == 17){
player.start("http://mmm1.66286662.net:8091/kk11/kkvideocg88.flv")
}
if (p == 18){
player.start("http://mmm1.66286662.net:8091/kk31/kkvideocg88.flv")
}
if (p == 19){
player.start("http://v2.66286662.net:8000/kk32/kkvideocg88.flv")
}
if (p == 19){
player.start("http://v2.66286662.net:8000/kk33/kkvideocg88.flv")
}
if (p == 21){
player.start("http://v2.66286662.net:8000/kk34/kkvideocg88.flv")
}
if (p == 22){
player.start("http://v2.66286662.net:8000/kk35/kkvideocg88.flv")
}
if (p == 23){
player.start("http://v2.66286662.net:8000/kk36/kkvideocg88.flv")
}
if (p == 24){
player.start("http://v2.66286662.net:8000/kk13/kkvideocg88.flv")
}
if (p == 25){
player.start("http://v2.66286662.net:8000/kk14/kkvideocg88.flv")
}
if (p == 26){
player.start("http://v2.66286662.net:8000/kk15/kkvideocg88.flv")

}
if (p == 27){
player.start("http://v2.66286662.net:8000/kk16/kkvideocg88.flv")

}
if (p == 28){
player.start("http://v2.66286662.net:8000/kk17/kkvideocg88.flv")

}
if (p == 29){
player.start("http://v2.66286662.net:8000/kk18/kkvideocg88.flv")

}

else { 

player.start("http://bbb1.66286662.net:8000/kk" + p+"/kkvideocg88.flv")
	}
}
}
var stopFunc = function () {
	player.stop();
}
function initVideo() {
	player = new NodePlayer();
	player.setView('videoCanvas');
	player.setVolume(0);
	player.setScaleMode(0);
	player.setBufferTime(5000);

	player.on('error', (e) => {
	});
	player.on("start", () => {
	});
	player.on("stop", () => {
		closevedio();
	});
	player.on("videoInfo", (w, h) => {
	})
	player.on("audioInfo", (r, c) => {
	})
	player.on("stats", (stats) => {
	})
}
function openvideo() {
    var o = document.getElementById("videopannel").style.display;
    if (o == "none") {
	 	$('#lz_box').css("display", "none");
		$('#videopannel').css("display", "");
		if (player == null) {
			initvideoCanvas();
			initVideo();
		}
		startFunc();
	}
    else { 
	}	
}


var img = document.createElement("img");


img.src = "88/a1.png";
img.width = document.documentElement.clientWidth*0.22;
img.height = document.documentElement.clientWidth*0.13;
img.style.position = "fixed";
img.style.top = document.documentElement.clientWidth*0.25+"px";
img.style.left = "1px";
img.style.zIndex = "9999";

var img1 = document.createElement("img");

img1.src = "88/a1.png";
img1.width = document.documentElement.clientWidth*0.30;
img1.height = document.documentElement.clientWidth*0.18;
img1.style.position = "fixed";
img1.style.top = document.documentElement.clientWidth*0.32+"px";
img1.style.left = document.documentElement.clientWidth-img1.width-1+"px";
img1.style.zIndex = "9999";


function closevedio() {
	stopFunc();
}
function initvideoCanvas() {
    var canvas = document.getElementById("videoCanvas");
    var width = document.documentElement.clientWidth;
    var height = width * 108 / 192;
	if (canvas) {
		canvas.style.width = width + "px";
		canvas.style.height = height + "px";
	}
}
			initvideoCanvas();
			initVideo();

startFunc();