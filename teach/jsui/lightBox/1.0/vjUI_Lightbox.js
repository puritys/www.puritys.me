/*****
燈箱
need jquery
video
*******/
var vj_tmp_object=0;
function vjUI_LightBox(ob,lang){
	this.classNameImage='lightbox-image';
	this.classNameIframe='lightbox-iframe';
	this.classNameHref='lightbox-href';//ajax抓回來
	this.classNameText='lightbox-text';
	this.classNameVideo='lightbox-video';
	this.classOverlay='vjUI_overlay';
	this.parentID='lightBox';
	this.widthIframe=700;//iframe寬
	this.heightIframe=400;//iframe高
	this.widthText=100;//純文字的寬
	this.widthVideo=640;//影片的寬
	this.heightVideo=385;//影片的寬
	this.enableClose=0; //點擊內容時 不關閉視窗
	this.speed=50;//漸變速度
	this.minSpeed=30;//最小移動速度
	this.speed2=this.speed;
	this.timeout=20;//漸變一次的時間
	this.topStart=20;//距離上方的長
	this.maxWindow=1;//限制最大視窗
	this.moveMaxTime=20;//XX次要完成
	this.moveNow=0;
	this.ImageAy=Array();//圖片array
	var THIS=this;
	this.createName=function (){
		vj_tmp_object++;
		eval('vj_tmp_object'+vj_tmp_object+'=this;');
		return 'vj_tmp_object'+vj_tmp_object;
		
	};
	this.vbName=this.createName();
	if(ob){
		for(pro in ob){
			this[pro]=ob[pro];
		}
	}
	//語言
	this.lang=new Object();
	this.lang.browser='不支援此瀏覽器';
	if(lang){
		for(pro in lang){
			this.lang[pro]=lang[pro];
		}
	}
	
	
	//加進事件
	this.addEvent=function(){
		this.ImageAy=Array();
		$('.'+this.classNameImage).each(
			function (){
				THIS.addImage(this);
			}
		);
		$('.'+this.classNameImage).click(this.onclick);
		$('.'+this.classNameIframe).click(this.onclick);
		$('.'+this.classNameText).click(this.onclick);
		$('.'+this.classNameVideo).click(this.onclick);
		$('.'+this.classNameHref).click(this.onclick);
	};
	this.addImage=function(ob){

		var n=this.ImageAy.length;
		this.ImageAy[n]=Object;
		this.ImageAy[n].obj=ob;
		this.ImageAy[n].href=ob.href;
		this.ImageAy[n].title=ob.title;
		$(ob).attr({'img_num':n});
		$(ob).addClass(this.parentID+'lightb'+n);
	};
	this.close=function(){
		if(THIS.enableClose!=1){
			$('.'+THIS.classOverlay).remove();
			$('.'+THIS.parentID).remove();
		}
		THIS.enableClose=0;
	};
	
	this.onclick=function(event){
		THIS.overlay();
		THIS.addBox(this,event);
		if (window.event){
		  event.returnValue = false;
		}
		else{
		  event.preventDefault();
		}
		return false;
	};
	
	//overlay 
	this.overlay=function(){
		$('.'+this.classOverlay).remove();
		
		var c='<div class="'+this.classOverlay+'" ></div>';
		$(document.body).append(c);
	};
	this.onclick_to=function(i,event){
		THIS.overlay();
		
		//alert(i+' '+$(THIS.ImageAy[i].obj).attr('title'));
		//THIS.addBox(THIS.ImageAy[i].obj,event);
		
		THIS.addBox($('.'+this.parentID+'lightb'+i),event);
		
	}
	//增加顯示的parent
	this.addBox=function(ob,e){
		$('.'+THIS.parentID).remove();
		THIS.nowDiv=ob;
		var cs=$(ob).attr('class');
		if(!cs){return '';}
		THIS.showTitle=$(ob).attr('title');
		THIS.showAlt=$(ob).attr('sn');
		var c='<div class="'+THIS.parentID+'" ><div class="vjUI_lightbox_container">';
		c+='<div class="vjUI_lightbox_dataBox">';
		c+='<div class="vjUI_lightbox_loading"></div>';
		c+='</div>';
		c+='</div></div>';
		$(document.body).append(c);
		var hh=$(document).height();
		$('.'+this.classOverlay).css({height:hh});
		var ww=$(document).width();
		$('.'+this.classOverlay).css({width:ww});
		
		//先設一定寬
		var t2=$('.'+THIS.parentID+' .vjUI_lightbox_dataBox');
		var ww=parseInt($(t2).css('borderLeftWidth'))+parseInt($(t2).css('borderRightWidth'));
		
		$(t2).width(parseInt($(t2).width())-ww);
		
		 
		if(cs.search(RegExp(THIS.classNameImage,'i') )!=-1){
			//圖片燈箱
			THIS.imagePreload($(ob).attr('href'),THIS.showImage);
		}
		else if(cs.search(RegExp(THIS.classNameVideo,'i') )!=-1){
			//影片燈箱
			THIS.showVideo($(ob).attr('href'),$(ob).attr('title'));
		}
		else if(cs.search(RegExp(THIS.classNameIframe,'i') )!=-1){
			//iframe
			THIS.showIframe($(ob).attr('href'),$(ob).attr('title'));
		}
		else if(cs.search(RegExp(THIS.classNameHref,'i') )!=-1){
			//ajax
			THIS.showHref($(ob).attr('href'),$(ob).attr('title'));
		}
		
		//點擊lightbox 關閉
		$('.'+this.parentID).click(this.close);
		$('.'+this.classOverlay).click(this.close);
		$('.'+this.parentID+' .vjUI_lightbox_container').click(
		function(event){
			THIS.enableClose=1;
			if (window.event)
			  event.returnValue = false;
			else
			  event.preventDefault();
		});
	};
	//顯示圖片
	this.showImage=function(imgob){
		//先放大
		var t=$('.'+THIS.parentID+' .vjUI_lightbox_container');
		var t2=$('.'+THIS.parentID+' .vjUI_lightbox_dataBox');
		var ww=parseInt($(t2).css('borderLeftWidth'))+parseInt($(t2).css('borderRightWidth'));
		var width=imgob.width+ww;
		var hh=parseInt($(t2).css('borderTopWidth'))+parseInt($(t2).css('borderBottomWidth'));
		
		var height=imgob.height+hh;
		
		THIS.image=imgob;
		$(t).css({marginTop:$(window).scrollTop()+THIS.topStart});
		$(t2).width(parseInt($(t2).width())-ww);
		if(THIS.maxWindow==1){
			//檢查最大
			var ow=width;
			var oh=height;
			if(width>=(parseInt($(window).width())-70)){
				width=parseInt($(window).width())-70 ;
				height=(width/ow)*oh;
			}
			if(height>=(parseInt($(window).height())-70)){
				height=parseInt($(window).height())-70 ;
				width=(height/oh)*ow;
			}
		}
		THIS.animationBigger(width,height);
	};
	
	//漸變放大div
	this.animationBigger=function(width,height){
		var t=$('.'+THIS.parentID+' .vjUI_lightbox_container');
		var t2=$('.'+THIS.parentID+' .vjUI_lightbox_dataBox');
		var ww=parseInt($(t2).css('borderLeftWidth'))+parseInt($(t2).css('borderRightWidth'));
		var hh=parseInt($(t2).css('borderTopWidth'))+parseInt($(t2).css('borderBottomWidth'));
		var w=parseInt($(t).width());
		var h=parseInt($(t).height());
		var end=1;
		var d=width-w,sp;
		sp=THIS.speed2;
		if(d<0){
			sp=THIS.speed2*(-1);
		}
		var neww=w+sp;
		if( (width>neww-70 && width<neww+70) ){
			$(t).width(width);
		}
		else{
			$(t).width(neww);
			end=0;
		}
		//第二層寬
		var w2=parseInt($(t).width())-ww;
		$('.'+THIS.parentID+' .vjUI_lightbox_dataBox').width(w2);
		
		d=height-h;
		sp=THIS.speed2;
		if(d<0){
			sp=THIS.speed2*(-1);
		}
		var newh=h+sp;
		if( (height>newh-70 && height<newh+70)){
			$(t).height(height);
		}
		else{
			$(t).height(newh);
			end=0;
		}
		if( THIS.moveNow>=THIS.moveMaxTime ){
			end=1;
			$(t).width(width);
			$(t).height(height);
		}
		THIS.moveNow++;
		//第二層高
		var h2=parseInt($(t).height())-hh;
		$('.'+THIS.parentID+' .vjUI_lightbox_dataBox').height(h2);
		$(t).css({marginTop:$(window).scrollTop()+THIS.topStart});
		if(end==0){
			THIS.speed2=THIS.speed2-3;
			if(THIS.speed2<=THIS.minSpeed){
				THIS.speed2=THIS.minSpeed;
			}
			setTimeout(THIS.vbName+'.animationBigger('+width+','+height+')',THIS.timeout);
		}
		else{
			THIS.moveNow=0;
			$('.'+THIS.parentID+' .vjUI_lightbox_loading').remove();
			var w2=parseInt($(t).width())-ww;
			$('.'+THIS.parentID+' .vjUI_lightbox_dataBox').width(w2);
			
			var h2=parseInt($(t).height())-hh;
			$('.'+THIS.parentID+' .vjUI_lightbox_dataBox').height(h2);
			//輸出圖片
			var data='';
			data+='<div class="btnBox" style="width:'+w2+'px;">'
			//alert($(THIS.nowDiv).attr('img_num'));
			if($(THIS.nowDiv).attr('img_num')>0){
				data+='<div class="light_prev"><a href="#" onclick="'+THIS.vbName+'.onclick_to('+(parseInt($(THIS.nowDiv).attr('img_num'))-1)+',event);return false;">　</a></div>';
			}
			
			if($(THIS.nowDiv).attr('img_num')!=(THIS.ImageAy.length-1)){
				data+='<div class="light_next"><a href="#" onclick="'+THIS.vbName+'.onclick_to('+(parseInt($(THIS.nowDiv).attr('img_num'))+1)+',event);return false;">　</a></div>';
			}
			data+='</div>';
			data+='<div class="imageBox">'+THIS.createImageHTML(THIS.image.src,w2,h2)+'</div>';
			$('.'+THIS.parentID+' .vjUI_lightbox_dataBox').html(data);
			
			$('.'+THIS.parentID+' .vjUI_lightbox_dataBox').css({height:""});
			$('.'+THIS.parentID+' .vjUI_lightbox_container').css({height:""});
			
			var hh=$(document).height();
			$('.'+this.classOverlay).css({height:hh});
			var ww=$(document).width();
			$('.'+this.classOverlay).css({width:ww});
			THIS.speed2=THIS.speed;
		}
	};
	
	this.createImageHTML=function (src,w,h){
		var c='';
		c+='<div >';
		c+='<img src="'+src+'" width="'+w+'"   />';
		c+='</dov>';
		c+='<table style="width:100%;"><tr>';
		c+='<td align="left"><div class="imageText" align="left">'+THIS.showTitle+'</div></td>';
		c+='<td align="right"><div class="imageAlt" align="right">'+THIS.showAlt+'</div></td></tr>';
		c+='</table>';
		return c;
	};
	
	//預載圖片
	this.imagePreload=function(src,callBack){
		var image = new Image();
		image.onload = function() {
			callBack(this);
		};
		image.src=src;
	};
	
	//video
	this.showVideo=function(href,title){
		var t=$('.'+THIS.parentID+' .vjUI_lightbox_container');
		var t2=$('.'+THIS.parentID+' .vjUI_lightbox_dataBox');
		var ww=parseInt($(t2).css('borderLeftWidth'))+parseInt($(t2).css('borderRightWidth'));
		 
		$(t).css({marginTop:$(window).scrollTop()+THIS.topStart});
		$(t2).width(THIS.widthVideo);
		var data='<div id="vjUI_lightbox_flashVideo"></div>';
		data+='<div class="imageText">'+title+'</div>';

		$('.'+THIS.parentID+' .vjUI_lightbox_dataBox').html(data);
		$(t).css({height:"",width:(THIS.widthVideo+ww)+'px'});
		
		var so = new SWFObject(href, "flash", this.widthVideo,this.heightVideo,"9");
		so.addParam("wmode", "transparent");
		so.addParam("autoplay", "true");
		so.write("vjUI_lightbox_flashVideo");
	};
	
	//link iframe
	this.showIframe=function(href,title){
		var t=$('.'+THIS.parentID+' .vjUI_lightbox_container');
		var t2=$('.'+THIS.parentID+' .vjUI_lightbox_dataBox');
		var ww=parseInt($(t2).css('borderLeftWidth'))+parseInt($(t2).css('borderRightWidth'));
		 
		$(t).css({marginTop:$(window).scrollTop()+THIS.topStart});
		$(t2).width(THIS.widthIframe);
		$(t2).height(THIS.heightIframe-ww);
		var data='<iframe src="'+href+'" frameborder="0" style="background:white;width:'+THIS.widthIframe+'px;height:'+(THIS.heightIframe-ww)+'px;"></iframe>';
		$('.'+THIS.parentID+' .vjUI_lightbox_dataBox').html(data);
		$(t).css({height:THIS.heightIframe,width:(THIS.widthIframe+ww)+'px'});
		
	};
	
	//link
	this.showHref=function(href,title){
		var t=$('.'+THIS.parentID+' .vjUI_lightbox_container');
		var t2=$('.'+THIS.parentID+' .vjUI_lightbox_dataBox');
		var ww=parseInt($(t2).css('borderLeftWidth'))+parseInt($(t2).css('borderRightWidth'));
		 
		$(t).css({marginTop:$(window).scrollTop()+THIS.topStart});
		$(t2).width(THIS.widthIframe);
		var h=parseInt($(window).height())-120;
 
		$(t).css({height:"",width:(THIS.widthIframe+ww)+'px'});
		$.ajax({
			url:href,
			type:'post',
			data:'',
			beforeSend:function(){
				$('.'+THIS.parentID+' .vjUI_lightbox_dataBox').html('<div class="vjUI_lightbox_loading"></div>');
			},
			success:function(tx){
				$('.'+THIS.parentID+' .vjUI_lightbox_dataBox').html('<div id="lightHrefData" style="width:'+(THIS.widthIframe-ww/2)+'px;height:'+h+'px;">'+tx+'</div>');
			}
		});
	};
	
	this.addEvent();
}