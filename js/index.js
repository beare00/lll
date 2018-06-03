//导航部分特效
var ul=document.getElementById('nav');
var a=ul.getElementsByTagName('a');
for(var i=0;i<a.length;i++) {
	a[i].onclick=function(){
		for(var i=0;i<a.length;i++){
			a[i].className='';
		}
		this.className='active';
	}
}
//选项卡切换特效
var order=document.getElementById('order');
var li=order.getElementsByTagName('li');
var orderContent=document.getElementById('orderContent');
var div=orderContent.getElementsByTagName('div');
for(var i=0;i<li.length;i++) {
	li[i].index=i;
	li[i].onclick=function(){
		for(var i=0;i<li.length;i++){
			li[i].className='';
			div[i].className='';
		}
		this.className='active';
		div[this.index].className='show';
	}
}