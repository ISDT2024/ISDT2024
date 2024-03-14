var speed=30;
var banner1=document.getElementById('banner1');
var banner2=document.getElementById('banner2');
var banner=document.getElementById('banner');
//console.log("vivi");
banner2.innerHTML=banner1.innerHTML;
function marQuee(){
	//console.log(banner2.offsetWidth-banner.scrollLeft);
	if(banner2.offsetWidth-banner.scrollLeft<=0){
		banner.scrollLeft-=banner1.offsetWidth;
	}
	else{
		banner.scrollLeft++;
	}
	
}
var MyMar=setInterval(marQuee,speed)
banner.onmouseover=function() {clearInterval(MyMar)}
banner.onmouseout=function() {MyMar=setInterval(marQuee,speed)}