/****
捲軸
不使用jquery
****/
var vj_tmp_object=0;
function vjUI_Scrillbar (ob,lang) {
	var self = this;
	this.classNameParent='vjUI_Scroller';//最外層div
	this.className='Scroller-Container';
	this.contentID="";//DIV id
	this.parentID='News';
	//this.scrollID='Scroller-Container';
	this.auto=true;
	this.eventHandler=function(){};
	this.scroller='';
	this.height=130;
	this.width=360;
	//padding 會影響content寬高
	this['padding-top']=0;
	this['padding-left']=0;
	this['padding-bottom']=0;
	this['padding-right']=0;
	this.scrollGap=5; //bar間距
	this.scrollArrowWidth=10;
	this.scrollArrowHeight=10;
	this.scrollWidth=50;
	this.scrollArrow=true;//上下箭頭是否出現
	this.scrollHandleHeight=20;
	this.scrollContent='<div class="Scrollbar-Up"></div>	  <div class="Scrollbar-Down"></div>	  <div class="Scrollbar-Track">		<div class="Scrollbar-Handle"></div>	  </div>';//捲軸資料
	this.scrollbarStyle='position:relative;float:left;';
	this.browser=navigator.userAgent;
	this.createName=function (){
		vj_tmp_object++;
		eval('vj_tmp_object'+vj_tmp_object+'=this;');
		return 'vj_tmp_object'+vj_tmp_object;
		
	};
	this.vbName=this.createName();
	
	for(pro in ob){
		this[pro]=ob[pro];
	}
	//語言
	this.lang=new Object();
	this.lang.browser='不支援此瀏覽器';
	if(lang){
		for(pro in lang){
			this.lang[pro]=lang[pro];
		}
	}
	
	
	/***計算捲軸寬高 座標****/
	this.calculateBar=function(){
 
		this.scrollHeight=this.height;
		this.contentWidth=this.width-this.scrollWidth;
		if(!this['padding-top']){this['padding-top']=0;}
		if(!this['padding-bottom']){this['padding-bottom']=0;}
		this.contentHeight=this.height-parseInt(this['padding-top'])-parseInt(this['padding-bottom']);
		
	};
	
	/****建立捲軸的scrollbar***/
	this.createScrollBarHTML=function(){
		var trackHeight=this.scrollHeight-(this.scrollArrowHeight+this.scrollGap)*2;
		var div=document.createElement('div');
		var u=document.createElement('div');
		u.className='Scrollbar-Up';
		var d=document.createElement('div');
		d.className='Scrollbar-Down';
		d.style.top=trackHeight+this.scrollArrowHeight+this.scrollGap*2+'px';
		var t=document.createElement('div');
		t.className='Scrollbar-Track';
		t.style.height=trackHeight+'px';
		t.style.top=this.scrollArrowHeight+this.scrollGap+'px';
		
		var h=document.createElement('div');
		h.className='Scrollbar-Handle';
		//計算handle的高
		var scrollHt=$("#"+this.parentID).attr('scrollHeight');
		var height=$("#"+this.parentID).height();
		var th=(height*trackHeight)/scrollHt;
		h.style.height=th+'px';
		t.appendChild(h);
		if(this.scrollArrow){
			div.appendChild(u);
			div.appendChild(d);
		}
		else{//沒有上下箭頭
			t.style.top='0px';
			t.style.height=this.scrollHeight+'px';
		}
		div.appendChild(t);
		return div;
	};
	
	this.reset = function () {
		//Arguments that were passed
		
		
		this._parentBox = document.getElementById(this.parentID);
		//設定最外層的css
		this._parentBox.style.overflow='hidden';
		this._parentBox.style.position='relative';
		
		if(this.contentID==''){
			var html=this._parentBox.innerHTML;
			this._parent=document.createElement('div');
			this._parent.innerHTML=html;
			this._parent.className=this.className;
			this._parentBox.innerHTML='';
			
			this._parentBox.appendChild(this._parent);
			
		}
		else{
			this._parent = document.getElementById(this.contentID);
		}
		//建立 scroller
		this.scroller=new jsScroller({parentID:this.parentID,width:this.width,height:this.height,className:this.className});

		if(this.scroller.totalHeight<this.height){
			return '';
		}
		this.contentDiv=this._parent;
		this.contentDiv.style.position='relative';
		this.contentDiv.className=this.className;
		if( this.browser.search('MSIE')!=-1 ){
			this.contentDiv.style.styleFloat ='left';//IE
		}
		else{
			this.contentDiv.style.cssFloat ='left';
		}

		this.contentDiv.style.width=this.contentWidth+'px';
		var div=this.createScrollBarHTML();
		div.height=this.scrollHeight;
		div.width=this.scrollWidth;
		
		var sty=this.scrollbarStyle.split(/;/);
		var n=sty.length,s;
		for(var i=0;i<n;i++){
			s=sty[i].split(/:/);
			if(s[1]){
				if(s[0]=='float'){
					if( this.browser.search('MSIE')!=-1 ){
						div.style.styleFloat =s[1];//IE
					}
					else{
						div.style.cssFloat =s[1];
					}
				}
				else{
					div.style[s[0]]=s[1];
				}
			}
		}

		this._parentBox.appendChild(div);
		this._src    = this.scroller;
		//Component Objects
		this._up   = this._findComponent("Scrollbar-Up", div);
		this._down = this._findComponent("Scrollbar-Down", div);
		this._yTrack  = this._findComponent("Scrollbar-Track", div);
		this._yHandle = this._findComponent("Scrollbar-Handle", this._yTrack);
		
		//Height and position properties
		this._trackTop = findOffsetTop(this._yTrack);
		this._trackHeight  = this._yTrack.offsetHeight;
		this._handleHeight = this._yHandle.offsetHeight;
		this._x = 0;
		this._y = 0;
		//Misc. variables
		this._scrollDist  = 25;
		this._scrollTimer = null;
		this._selectFunc  = null;
		this._grabPoint   = null;
		this._tempTarget  = null;
		this._tempDistX   = 0;
		this._tempDistY   = 0;
		this._disabled    = false;
		this._ratio = (this._src.totalHeight - this._src.viewableHeight)/(this._trackHeight - this._handleHeight);
		 
		this._yHandle.ondragstart  = function () {return false;};
		this._yHandle.onmousedown = function () {return false;};
		//滑鼠事件
		if (window.addEventListener){
			 this._src.content.addEventListener('DOMMouseScroll', this._scrollbarWheel, false);
		}
		else{
			this._addEvent(this._src.content, "mousewheel", this._scrollbarWheel);
		}
		this._removeEvent(this._parent, "mousedown", this._scrollbarClick);
		 
		this._addEvent(div, "mousedown", this._scrollbarClick);
	 
		with (this._yHandle.style) {
			top  = "0px";
			left = "0px";
		}
		this._moveContent();
		
		if (this._src.totalHeight < this._src.viewableHeight) {
			this._disabled = true;
			this._yHandle.style.visibility = "hidden";
			if (this.auto) this._parent.style.visibility = "hidden";
		} else {
			this._disabled = false;
			this._yHandle.style.visibility = "visible";
			this._parent.style.visibility  = "visible";
		}
		 
	};
	this._addEvent = function (o, t, f) {
		if (o.addEventListener) o.addEventListener(t, f, false);
		else if (o.attachEvent) o.attachEvent('on'+ t, f);
		else o['on'+ t] = f;
	};
	this._removeEvent = function (o, t, f) {
		if (o.removeEventListener) o.removeEventListener(t, f, false);
		else if (o.detachEvent) o.detachEvent('on'+ t, f);
		else o['on'+ t] = null;
	};
	this._findComponent = function (c, o) {
		if(!o){alert('找不到: '+c);}
		var kids = o.childNodes;
		for (var i = 0; i < kids.length; i++) {
			if (kids[i].className && kids[i].className == c) {
				return kids[i];
			}
		}
	};
	//Thank you, Quirksmode
	function findOffsetTop (o) {
		var t = 0;
		if (o.offsetParent) {
			while (o.offsetParent) {
				t += o.offsetTop;
				o  = o.offsetParent;
			}
		}
		return t;
	};
	this._scrollbarClick = function (e) {
		if (self._disabled) return false;
		
		e = e ? e : event;
		if (!e.target) e.target = e.srcElement;
		
		if (e.target.className.indexOf("Scrollbar-Up") > -1) self._scrollUp(e);
		else if (e.target.className.indexOf("Scrollbar-Down") > -1) self._scrollDown(e);
		else if (e.target.className.indexOf("Scrollbar-Track") > -1) self._scrollTrack(e);
		else if (e.target.className.indexOf("Scrollbar-Handle") > -1) self._scrollHandle(e);
		
		self._tempTarget = e.target;
		self._selectFunc = document.onselectstart;
		document.onselectstart = function () {return false;};
		
		self.eventHandler(e.target, "mousedown");
		self._addEvent(document, "mouseup", self._stopScroll, false);
		
		return false;
	};
	this._scrollbarDrag = function (e) {
		e = e ? e : event;
		var t = parseInt(self._yHandle.style.top);
		var v = e.clientY + document.body.scrollTop - self._trackTop;
		with (self._yHandle.style) {
			if (v >= self._trackHeight - self._handleHeight + self._grabPoint)
				top = self._trackHeight - self._handleHeight +"px";
			else if (v <= self._grabPoint) top = "0px";
			else top = v - self._grabPoint +"px";
			self._y = parseInt(top);
		}
		
		self._moveContent();
	};
	this._scrollbarWheel = function (e) {
		e = e ? e : event;
		var dir = 0;
 
		if (e.wheelDelta >= 120 || e.detail<0) dir = -1;
		if (e.wheelDelta <= -120 || e.detail>0) dir = 1;
		
		self.scrollBy(0, dir * 20);
		if (window.event)
		  e.returnValue = false;
		else
		  e.preventDefault();
	};
	this._startScroll = function (x, y) {
		this._tempDistX = x;
		this._tempDistY = y;
		this._scrollTimer = window.setInterval(function () {

			self.scrollBy(self._tempDistX, self._tempDistY); 
		}, 40);
	};
	this._stopScroll = function () {
		self._removeEvent(document, "mousemove", self._scrollbarDrag, false);
		self._removeEvent(document, "mouseup", self._stopScroll, false);
		
		if (self._selectFunc) document.onselectstart = self._selectFunc;
		else document.onselectstart = function () { return true; };
		
		if (self._scrollTimer) window.clearInterval(self._scrollTimer);
		self.eventHandler (self._tempTarget, "mouseup");
	};
	this._scrollUp = function (e) {this._startScroll(0, -this._scrollDist);};
	this._scrollDown = function (e) {
		this._startScroll(0, this._scrollDist);
	};
	this._scrollTrack = function (e) {
		var curY = e.clientY + document.body.scrollTop;
		this._scroll(0, curY - this._trackTop - this._handleHeight/2);
	};
	this._scrollHandle = function (e) {
		var curY = e.clientY + document.body.scrollTop;
		this._grabPoint = curY - findOffsetTop(this._yHandle);
		this._addEvent(document, "mousemove", this._scrollbarDrag, false);
	};
	this._scroll = function (x, y) {
		if (y > this._trackHeight - this._handleHeight) 
			y = this._trackHeight - this._handleHeight;
		if (y < 0) y = 0;
		
		this._yHandle.style.top = y +"px";
		this._y = y;
		this._moveContent();
	};
	this._moveContent = function () { 
		this._src.scrollTo(0, Math.round(this._y * this._ratio));
	};
	
	this.scrollBy = function (x, y) {
		this._scroll(0, (-this._src._y + y)/this._ratio);
	};
	this.scrollTo = function (x, y) {
		this._scroll(0, y/this._ratio);
	};
	this.swapContent = function (o, w, h) {
		this._removeEvent(this._src.content, "mousewheel", this._scrollbarWheel, false);
		this._src.swapContent(o, w, h);
		this.reset();
	};
	/**抓css屬性的值****/
	this.getCSSName=function(em,name){
		if(em.style[name]){
			return em.style[name];
		}
		var defaultView = em.ownerDocument.defaultView;
        if (defaultView ) {
            var computedStyle = defaultView.getComputedStyle(em, null );
            if (computedStyle ) {
               return computedStyle.getPropertyValue(name);
            }
        }

       else if(em.currentStyle){
            return em.currentStyle[name];
        }
		return -1;
	};
	
	//一開始設定
	this._parentBox = document.getElementById(this.parentID);
	var ay=Array('height','width','padding-top','padding-bottom','padding-left','padding-right');
	var n=ay.length,v;
	for(var i=0; i<n;i++){
		v=parseInt( this.getCSSName(this._parentBox,ay[i]) );
		if(v && v>=0){
			this[ay[i]]=v;
		}
	}

	this.calculateBar();//先算bar
	this.reset();
};


function jsScroller (ob,lang) {
	var self = this;
	this.width=400;
	this.height=180;
	this.parentID='News';
	for(pro in ob){
		this[pro]=ob[pro];
	}
	
	var o=document.getElementById(this.parentID);
	var list = o.getElementsByTagName("div");
	for (var i = 0; i < list.length; i++) {
		if (list[i].className.indexOf(this.className) > -1) {
			o = list[i];
			break;
		}
	}
	 
	
	//Private methods
	this._setPos = function (x, y) {
		if (x < this.viewableWidth - this.totalWidth) 
			x = this.viewableWidth - this.totalWidth;
		if (x > 0) x = 0;
		if (y < this.viewableHeight - this.totalHeight) 
			y = this.viewableHeight - this.totalHeight;

		if (y > 0) y = 0;
		this._x = x;
		this._y = y;
		with (o.style) {
			left = this._x +"px";
			top  = this._y +"px";
		}
		
	};
	
	//Public Methods
	this.reset = function () {
		this.content = o;
		this.totalHeight = o.offsetHeight;
		this.totalWidth	 = o.offsetWidth;
		this._x = 0;
		this._y = 0;
 
		with (o.style) {
			left = "0px";
			top  = "0px";
		}
	};
	this.scrollBy = function (x, y) {
		this._setPos(this._x + x, this._y + y);
	};
	this.scrollTo = function (x, y) {
		this._setPos(-x, -y);
	};
	this.stopScroll = function () {
		if (this.scrollTimer) window.clearInterval(this.scrollTimer);
	};
	this.startScroll = function (x, y) {
		this.stopScroll();
		this.scrollTimer = window.setInterval(
			function(){ self.scrollBy(x, y); }, 40
		);
	};
	this.swapContent = function (c, w, h) {
		o = c;
		var list = o.getElementsByTagName("div");
		for (var i = 0; i < list.length; i++) {
			if (list[i].className.indexOf("Scroller-Container") > -1) {
				o = list[i];
			}
		}
		if (w) this.viewableWidth  = w;
		if (h) this.viewableHeight = h;
		this.reset();
	};
	
	
	//variables
	this.content = o;
	this.viewableWidth  = this.width;
	this.viewableHeight = this.height-90;
	this.totalWidth	 = o.offsetWidth;
	this.totalHeight = o.offsetHeight;
	this.scrollTimer = null;
	
	this.reset();

};