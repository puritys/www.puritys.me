
(function(){
    var a="start";
	function b(e){
        this.t={};this.tick=function(f,g,c){
            this.t[f]=[c?c:(new Date).getTime(),g]
        };this.tick(a,null,e)
    }
	var d=new b;window.jstiming={
        Timer:b,
        load:d
    };
	try{
        var h=null;
		if(window.chrome&&window.chrome.csi)
		h=Math.floor(window.chrome.csi().pageT);
		if(h==null)
		if(window.gtbExternal)h=window.gtbExternal.pageT();
		if(h==null)
		if(window.external)h=window.external.pageT;
		if(h)window.jstiming.pt=h
    }
	catch(i){};
});

function i(a,b,d){
    var c="on"+b;if(a.addEventListener)a.addEventListener(b,d,false);else if(a.attachEvent)a.attachEvent(c,d);else{
        var f=a[c];a[c]=function(){
            var g=f.apply(this,arguments),e=d.apply(this,arguments);return g==undefined?e:e==undefined?g:e&&g
        }
    }
}
;var j,k,l,m=window.gbar={},n={};
function _tvs(a,b){
    return a||b
}
function _tvn(a,b){
    var d=parseInt(a,10);return isNaN(d)?b:d
}function _tvf(a,b){
    var d=parseFloat(a);return isNaN(d)?b:d
}function _tvb(a,b){
    return a=="true"?true:a=="false"?false:b
}var o,p,q;

function r(a,b,d,c,f,g){
    var e=document.getElementById(a);
    if(e){
        var h=e.style;h.left=c?"auto":b+"px";h.right=c?b+"px":"auto";h.top=d+"px";h.visibility=p?"hidden":"visible";if(f&&g){
            h.width=f+"px";h.height=g+"px"
        }else{
            r(o,b,d,c,e.offsetWidth,e.offsetHeight);p=p?"":a
        }
    }
}

var v=function(a){
    a=a||window.event;var b,d=a.target||a.srcElement;a.cancelBubble=true;if(o!=null)s(d);else{
        b=document.createElement(Array.every||window.createPopup?"iframe":"div");b.frameBorder="0";o=b.id="gbs";b.src="javascript:''";d.parentNode.appendChild(b);i(document,"click",t);s(d);n.a&&n.a(function(){
            var c=document.getElementById("gbli");if(c){
                var f=c.parentNode;u(f,c);var g=c.d;f.removeChild(c);n.e(f,g);b.style.height=f.offsetHeight+"px"
            }
        })
    }
};

function s(a){
    var b=0;if(a.className!="gb3")a=a.parentNode;var d=a.getAttribute("aria-owns")||"gbi",c=a.offsetWidth,f=a.offsetTop>20?46:24;if(document.getElementById("tphdr"))f-=3;var g=false;do b+=a.offsetLeft||0;while(a=a.offsetParent);a=(document.documentElement.clientWidth||document.body.clientWidth)-b-c;var e;c=document.body;var h=document.defaultView;if(h&&h.getComputedStyle){
        if(c=h.getComputedStyle(c,""))e=c.direction
    }else e=c.currentStyle?c.currentStyle.direction:c.style.direction;e=e=="rtl";
    if(d=="gbi"){
        c=document.getElementById("gbi");u(c,document.getElementById("gbli")||c.firstChild);if(e){
            b=a;g=true
        }
    }else if(!e){
        b=a;g=true
    }p!=d&&t();r(d,b,f,g)
}var t=function(){
    p&&r(p,0,0)
};function u(a,b){
    for(var d,c=window.c;c&&(d=c.pop());){
        var f=a,g=d,e=b;if(!q){
            q="gb2";if(n.a){
                var h=n.b(f);if(h)q=h
            }
        }f.insertBefore(g,e).className=q
    }
}
var w=function(a,b,d){
    if((b=document.getElementById(b))&&a){
        a.className="gb4";
        var c=document.createElement("span");c.appendChild(a);c.appendChild(document.createTextNode(" | "));c.id=d;b.appendChild(c)
    }
};
m.qs=l;m.setContinueCb=k;m.pc=j;m.tg=v;m.close=t;m.addLink=w; 