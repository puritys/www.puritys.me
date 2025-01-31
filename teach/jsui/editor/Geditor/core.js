//table 壞了
function f(a){
    throw a;
}var i=true,j=null,l=false,o,aaa=[];function aa(a){
    return function(){
        return aaa[a].apply(this,arguments)
    }
}
var ba=ba||{},ca=this,da=j,ea=".",baa="var ";function fa(a,b,c){
    a=a.split(ea);c=c||ca;!(a[0]in c)&&c.execScript&&c.execScript(baa+a[0]);for(var d;a.length&&(d=a.shift());)if(!a.length&&q(b))c[d]=b;else c=c[d]?c[d]:c[d]={}
}
function ga(a,b){
    for(var c=a.split(ea),d=b||ca,e;e=c.shift();)if(d[e])d=d[e];else return j;return d
}
function ha(){}
function ia(a){
    a.V=function(){
        return a.U5||(a.U5=new a)
    }
}
var ja="object",caa="[object Array]",la="number",daa="splice",ma="array",eaa="[object Function]",faa="call",na="function",oa="null";
function pa(a){
    var b=typeof a;if(b==ja)if(a){
        if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)==caa||typeof a.length==la&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable(daa))return ma;if(!(a instanceof Object)&&(Object.prototype.toString.call(a)==eaa||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable(faa)))return na
    }else return oa;else if(b==na&&typeof a.call=="undefined")return ja;
    return b
}

function q(a){
    return a!==undefined
}
function qa(a){
    return a===j
}
function sa(a){
    return a!=j
}
function ta(a){
    return pa(a)==ma
}
function ua(a){
    var b=pa(a);return b==ma||b==ja&&typeof a.length==la
}
var va="string";
function wa(a){
    return typeof a==va
}
var xa="boolean";
function ya(a){
    return typeof a==xa
}
function za(a){
    return typeof a==la
}
function Aa(a){
    return pa(a)==na
}
function Ba(a){
    a=pa(a);return a==ja||a==ma||a==na
}function Ca(a){
    return a[gaa]||(a[gaa]=++haa)
}
var gaa="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),haa=0;function iaa(){
    return Function.prototype.call.apply(Function.prototype.bind,arguments)
}function jaa(a,b){
    var c=b||ca;if(arguments.length>2){
        var d=Array.prototype.slice.call(arguments,2);return function(){
            var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)
        }
    }else return function(){
        return a.apply(c,arguments)
    }
}
var kaa="native code";
function s(){
    s=Function.prototype.bind&&Function.prototype.bind.toString().indexOf(kaa)!=-1?iaa:jaa;
	 
	return s.apply(j,arguments)
}
function Da(a){
    var b=Array.prototype.slice.call(arguments,1);return function(){
        var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)
    }
}
var Ea=Date.now||function(){
    return+new Date
},laa="JavaScript",maa="var _et_ = 1;",Fa="script",Ga="text/javascript";
function naa(a){
    if(ca.execScript)ca.execScript(a,laa);else if(ca.eval){
        if(da==j){
            ca.eval(maa);if(typeof ca._et_!="undefined"){
                delete ca._et_;da=i
            }else da=l
        }if(da)ca.eval(a);else{
            var b=ca.document,c=b.createElement(Fa);c.type=Ga;c.defer=l;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)
        }
    }else f(Error("goog.globalEval not available"))
}function t(a,b){
    function c(){}c.prototype=b.prototype;a.z=b.prototype;a.prototype=new c;a.prototype.constructor=a
}
Function.prototype.bind=Function.prototype.bind||function(a){
    if(arguments.length>1){
        var b=Array.prototype.slice.call(arguments,1);b.unshift(this,a);return s.apply(j,b)
    }else return s(this,a)
};function x(){}x.prototype.Bg=l;x.prototype.wa=function(){
    if(!this.Bg){
        this.Bg=i;this.A()
    }
};x.prototype.A=function(){};function y(a){
    a&&typeof a.wa==na&&a.wa()
};function Ha(a,b){
    a=Number(a);b=Number(b);this.start=a<b?a:b;this.end=a<b?b:a
}Ha.prototype.Ba=function(){
    return new Ha(this.start,this.end)
};function oaa(a,b){
    var c=Math.max(a.start,b.start),d=Math.min(a.end,b.end);return c<=d?new Ha(c,d):j
};function Ia(a,b,c){
    for(var d in a)b.call(c,a[d],d,a)
}function paa(a,b,c){
    for(var d in a)if(b.call(c,a[d],d,a))return i;return l
}function Ja(a){
    var b=[],c=0,d;for(d in a)b[c++]=a[d];return b
}function Ka(a){
    var b=[],c=0,d;for(d in a)b[c++]=d;return b
}function La(a,b){
    for(var c in a)if(a[c]==b)return i;return l
}function Ma(a){
    for(var b in a)return l;return i
}function Na(a,b){
    var c;if(c=b in a)delete a[b];return c
}var Oa='"';
function Pa(a,b,c){
    if(b in a)f(Error('The object already contains the key "'+b+Oa));a[b]=c
}function Qa(a){
    var b={},c;for(c in a)b[c]=a[c];return b
}var qaa="toString",raa=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString",qaa,"valueOf"];function Ra(a){
    for(var b,c,d=1;d<arguments.length;d++){
        c=arguments[d];for(b in c)a[b]=c[b];for(var e=0;e<raa.length;e++){
            b=raa[e];if(Object.prototype.hasOwnProperty.call(c,b))a[b]=c[b]
        }
    }
}var saa="Uneven number of arguments";
function Sa(){
    var a=arguments.length;if(a==1&&ta(arguments[0]))return Sa.apply(j,arguments[0]);if(a%2)f(Error(saa));for(var b={},c=0;c<a;c+=2)b[arguments[c]]=arguments[c+1];return b
}function Ta(){
    var a=arguments.length;if(a==1&&ta(arguments[0]))return Ta.apply(j,arguments[0]);for(var b={},c=0;c<a;c++)b[arguments[c]]=i;return b
};var z="";function Ua(a){
    this.stack=Error().stack||z;if(a)this.message=String(a)
}t(Ua,Error);Ua.prototype.name="CustomError";function Va(a,b){
    return a.lastIndexOf(b,0)==0
}function Wa(a,b){
    var c=a.length-b.length;return c>=0&&a.indexOf(b,c)==c
}var Xa="\n";function Ya(a){
    return a.replace(/(\r\n|\r|\n)/g,Xa)
}function Za(a){
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,z)
}function $a(a,b){
    var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1
}var taa=/^[a-zA-Z0-9\-_.!~*'()]*$/;function ab(a){
    a=String(a);if(!taa.test(a))return encodeURIComponent(a);return a
}var bb=" ";
function cb(a){
    return decodeURIComponent(a.replace(/\+/g,bb))
}
var db="&amp;",eb="&lt;",fb="&gt;",gb="&quot;",hb="&",ib="<",jb=">";function kb(a,b){
    if(b)return a.replace(uaa,db).replace(vaa,eb).replace(waa,fb).replace(xaa,gb);else{
        if(!yaa.test(a))return a;if(a.indexOf(hb)!=-1)a=a.replace(uaa,db);if(a.indexOf(ib)!=-1)a=a.replace(vaa,eb);if(a.indexOf(jb)!=-1)a=a.replace(waa,fb);if(a.indexOf(Oa)!=-1)a=a.replace(xaa,gb);return a
    }
}var uaa=/&/g,vaa=/</g,waa=/>/g,xaa=/\"/g,yaa=/[&<>\"]/,zaa="\\$1",Aaa="\\x08";
function lb(a){
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,zaa).replace(/\x08/g,Aaa)
}function mb(a,b){
    return Array(b+1).join(a)
}function nb(){
    return Array.prototype.join.call(arguments,z)
}function pb(){
    return Math.floor(Math.random()*2147483648).toString(36)+(Math.floor(Math.random()*2147483648)^Ea()).toString(36)
}var Baa="(\\d*)(\\D*)",qb="g";
function rb(a,b){
    for(var c=0,d=Za(String(a)).split(ea),e=Za(String(b)).split(ea),g=Math.max(d.length,e.length),h=0;c==0&&h<g;h++){
        var k=d[h]||z,m=e[h]||z,n=RegExp(Baa,qb),p=RegExp(Baa,qb);do{
            var r=n.exec(k)||[z,z,z],u=p.exec(m)||[z,z,z];if(r[0].length==0&&u[0].length==0)break;c=sb(r[1].length==0?0:parseInt(r[1],10),u[1].length==0?0:parseInt(u[1],10))||sb(r[2].length==0,u[2].length==0)||sb(r[2],u[2])
        }while(c==0)
    }return c
}function sb(a,b){
    if(a<b)return-1;else if(a>b)return 1;return 0
};function tb(a){
    return a[a.length-1]
}var ub=Array.prototype,vb=ub.indexOf?function(a,b,c){
    return ub.indexOf.call(a,b,c)
}:function(a,b,c){
    c=c==j?0:c<0?Math.max(0,a.length+c):c;if(wa(a)){
        if(!wa(b)||b.length!=1)return-1;return a.indexOf(b,c)
    }for(c=c;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1
},wb=ub.forEach?function(a,b,c){
    ub.forEach.call(a,b,c)
}:function(a,b,c){
    for(var d=a.length,e=wa(a)?a.split(z):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)
};
function xb(a,b,c){
    var d=a.length,e=wa(a)?a.split(z):a;for(d=d-1;d>=0;--d)d in e&&b.call(c,e[d],d,a)
}
var yb=ub.filter?function(a,b,c){
    return ub.filter.call(a,b,c)
}:function(a,b,c){
    for(var d=a.length,e=[],g=0,h=wa(a)?a.split(z):a,k=0;k<d;k++)if(k in h){
        var m=h[k];if(b.call(c,m,k,a))e[g++]=m
    }return e
},zb=ub.map?function(a,b,c){
    return ub.map.call(a,b,c)
}:function(a,b,c){
    for(var d=a.length,e=Array(d),g=wa(a)?a.split(z):a,h=0;h<d;h++)if(h in g)e[h]=b.call(c,g[h],h,a);return e
},Ab=ub.some?function(a,b,c){
    return ub.some.call(a,b,c)
}:function(a,b,c){
    for(var d=a.length,e=wa(a)?a.split(z):a,g=0;g<d;g++)if(g in
        e&&b.call(c,e[g],g,a))return i;return l
},Bb=ub.every?function(a,b,c){
    return ub.every.call(a,b,c)
}:function(a,b,c){
    for(var d=a.length,e=wa(a)?a.split(z):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return l;return i
};function Cb(a,b,c){
    b=Caa(a,b,c);return b<0?j:wa(a)?a.charAt(b):a[b]
}function Caa(a,b,c){
    for(var d=a.length,e=wa(a)?a.split(z):a,g=0;g<d;g++)if(g in e&&b.call(c,e[g],g,a))return g;return-1
}function Db(a,b){
    return vb(a,b)>=0
}
function Eb(a){
    if(!ta(a))for(var b=a.length-1;b>=0;b--)delete a[b];a.length=0
}function Fb(a,b){
    Db(a,b)||a.push(b)
}function Hb(a,b,c){
    Da(Ib,a,c,0).apply(j,b)
}function Jb(a,b){
    var c=vb(a,b),d;if(d=c>=0)Kb(a,c);return d
}function Kb(a,b){
    return ub.splice.call(a,b,1).length==1
}function Lb(){
    return ub.concat.apply(ub,arguments)
}function Mb(a){
    if(ta(a))return Lb(a);else{
        for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b
    }
}var Daa="callee";
function Nb(a){
    for(var b=1;b<arguments.length;b++){
        var c=arguments[b],d;if(ta(c)||(d=ua(c))&&c.hasOwnProperty(Daa))a.push.apply(a,c);else if(d)for(var e=a.length,g=c.length,h=0;h<g;h++)a[e+h]=c[h];else a.push(c)
    }
}function Ib(a){
    return ub.splice.apply(a,Ob(arguments,1))
}function Ob(a,b,c){
    return arguments.length<=2?ub.slice.call(a,b):ub.slice.call(a,b,c)
}
function Eaa(a,b){
    for(var c=b||a,d={},e=0,g=0;g<a.length;){
        var h=a[g++],k=Ba(h)?Ca(h):h;if(!Object.prototype.hasOwnProperty.call(d,k)){
            d[k]=i;c[e++]=h
        }
    }c.length=e
}function Pb(a,b,c){
    c=c||Qb;for(var d=0,e=a.length,g;d<e;){
        var h=d+e>>1,k;k=c(b,a[h]);if(k>0)d=h+1;else{
            e=h;g=!k
        }
    }return g?d:~d
}function Sb(a,b){
    ub.sort.call(a,b||Qb)
}
function Faa(a,b){
    for(var c=0;c<a.length;c++)a[c]={
        index:c,
        value:a[c]
    };var d=b||Qb;Sb(a,function(e,g){
        return d(e.value,g.value)||e.index-g.index
    });for(c=0;c<a.length;c++)a[c]=a[c].value
}function Tb(a,b,c){
    if(!ua(a)||!ua(b)||a.length!=b.length)return l;var d=a.length;c=c||Gaa;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return l;return i
}function Qb(a,b){
    return a>b?1:a<b?-1:0
}function Gaa(a,b){
    return a===b
}function Haa(a,b,c){
    c=Pb(a,b,c);if(c<0){
        Ib(a,-(c+1),0,b);return i
    }return l
}
function Ub(a,b,c){
    b=Pb(a,b,c);return b>=0?Kb(a,b):l
}function Iaa(){
    for(var a=[],b=0;b<arguments.length;b++){
        var c=arguments[b];ta(c)?a.push.apply(a,Iaa.apply(j,c)):a.push(c)
    }return a
};var Vb="StopIteration"in ca?ca.StopIteration:Error("StopIteration");function Wb(){}Wb.prototype.next=function(){
    f(Vb)
};Wb.prototype.Ph=function(){
    return this
};function Jaa(a){
    if(a instanceof Wb)return a;if(typeof a.Ph==na)return a.Ph(l);if(ua(a)){
        var b=0,c=new Wb;c.next=function(){
            for(;;){
                if(b>=a.length)f(Vb);if(b in a)return a[b++];else b++
            }
        };return c
    }f(Error("Not implemented"))
}
function Kaa(a,b,c){
    if(ua(a))try{
        wb(a,b,c)
    }catch(d){
        if(d!==Vb)f(d)
    }else{
        a=Jaa(a);try{
            for(;;)b.call(c,a.next(),undefined,a)
        }catch(e){
            if(e!==Vb)f(e)
        }
    }
};function Laa(a){
    if(typeof a.Zh==na)return a.Zh();if(ua(a)||wa(a))return a.length;var b=0,c;for(c in a)b++;return b
}function Xb(a){
    if(typeof a.Oc==na)return a.Oc();if(wa(a))return a.split(z);if(ua(a)){
        for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b
    }return Ja(a)
}function Maa(a){
    if(typeof a.zf==na)return a.zf();if(typeof a.Oc!=na){
        if(ua(a)||wa(a)){
            var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b
        }return Ka(a)
    }
}
function Naa(a,b){
    if(typeof a.contains==na)return a.contains(b);if(typeof a.bG==na)return a.bG(b);if(ua(a)||wa(a))return Db(a,b);return La(a,b)
}function Yb(a,b,c){
    if(typeof a.forEach==na)a.forEach(b,c);else if(ua(a)||wa(a))wb(a,b,c);else for(var d=Maa(a),e=Xb(a),g=e.length,h=0;h<g;h++)b.call(c,e[h],d&&d[h],a)
}
function Oaa(a,b,c){
    if(typeof a.every==na)return a.every(b,c);if(ua(a)||wa(a))return Bb(a,b,c);for(var d=Maa(a),e=Xb(a),g=e.length,h=0;h<g;h++)if(!b.call(c,e[h],d&&d[h],a))return l;return i
};function Zb(a){
    this.Xf={};this.Wb=[];var b=arguments.length;if(b>1){
        if(b%2)f(Error(saa));for(var c=0;c<b;c+=2)this.set(arguments[c],arguments[c+1])
    }else a&&$b(this,a)
}o=Zb.prototype;o.$b=0;o.Ax=0;o.Zh=function(){
    return this.$b
};o.Oc=function(){
    ac(this);for(var a=[],b=0;b<this.Wb.length;b++)a.push(this.Xf[this.Wb[b]]);return a
};o.zf=function(){
    ac(this);return this.Wb.concat()
};o.Sd=function(a){
    return bc(this.Xf,a)
};
o.bG=function(a){
    for(var b=0;b<this.Wb.length;b++){
        var c=this.Wb[b];if(bc(this.Xf,c)&&this.Xf[c]==a)return i
    }return l
};o.kb=function(a,b){
    if(this===a)return i;if(this.$b!=a.Zh())return l;var c=b||Paa;ac(this);for(var d,e=0;d=this.Wb[e];e++)if(!c(this.get(d),a.get(d)))return l;return i
};function Paa(a,b){
    return a===b
}o.Mg=function(){
    return this.$b==0
};o.clear=function(){
    this.Xf={};this.Ax=this.$b=this.Wb.length=0
};
o.remove=function(a){
    if(bc(this.Xf,a)){
        delete this.Xf[a];this.$b--;this.Ax++;this.Wb.length>2*this.$b&&ac(this);return i
    }return l
};function ac(a){
    if(a.$b!=a.Wb.length){
        for(var b=0,c=0;b<a.Wb.length;){
            var d=a.Wb[b];if(bc(a.Xf,d))a.Wb[c++]=d;b++
        }a.Wb.length=c
    }if(a.$b!=a.Wb.length){
        var e={};for(c=b=0;b<a.Wb.length;){
            d=a.Wb[b];if(!bc(e,d)){
                a.Wb[c++]=d;e[d]=1
            }b++
        }a.Wb.length=c
    }
}o.get=function(a,b){
    if(bc(this.Xf,a))return this.Xf[a];return b
};
o.set=function(a,b){
    if(!bc(this.Xf,a)){
        this.$b++;this.Wb.push(a);this.Ax++
    }this.Xf[a]=b
};function $b(a,b){
    var c,d;if(b instanceof Zb){
        c=b.zf();d=b.Oc()
    }else{
        c=Ka(b);d=Ja(b)
    }for(var e=0;e<c.length;e++)a.set(c[e],d[e])
}o.Ba=function(){
    return new Zb(this)
};o.Ph=function(a){
    ac(this);var b=0,c=this.Wb,d=this.Xf,e=this.Ax,g=this,h=new Wb;h.next=function(){
        for(;;){
            if(e!=g.Ax)f(Error("The map has changed since the iterator was created"));if(b>=c.length)f(Vb);var k=c[b++];return a?k:d[k]
        }
    };return h
};
function bc(a,b){
    return Object.prototype.hasOwnProperty.call(a,b)
};function cc(a){
    this.a=new Zb;a&&dc(this,a)
}var ec="o";function fc(a){
    var b=typeof a;return b==ja&&a||b==na?ec+Ca(a):b.substr(0,1)+a
}o=cc.prototype;o.Zh=function(){
    return this.a.Zh()
};function gc(a,b){
    a.a.set(fc(b),b)
}function dc(a,b){
    for(var c=Xb(b),d=c.length,e=0;e<d;e++)gc(a,c[e])
}o.remove=function(a){
    return this.a.remove(fc(a))
};o.clear=function(){
    this.a.clear()
};o.Mg=function(){
    return this.a.Mg()
};o.contains=function(a){
    return this.a.Sd(fc(a))
};o.Oc=function(){
    return this.a.Oc()
};o.Ba=function(){
    return new cc(this)
};
o.kb=function(a){
    return this.Zh()==Laa(a)&&Qaa(this,a)
};function Qaa(a,b){
    var c=Laa(b);if(a.Zh()>c)return l;if(!(b instanceof cc)&&c>5)b=new cc(b);return Oaa(a,function(d){
        return Naa(b,d)
    })
}o.Ph=function(){
    return this.a.Ph(l)
};function Raa(a,b,c){
    c=c||ca;var d=c.onerror;c.onerror=function(e,g,h){
        d&&d(e,g,h);a({
            message:e,
            fileName:g,
            n8:h
        });return Boolean(b)
    }
}var Saa="()\n",Taa="[exception trying to get caller]\n",Uaa="[...long stack...]",Vaa="[...reached max depth limit...]",Waa="[end]";function Xaa(a){
    for(var b=[],c=arguments.callee.caller,d=0;c&&(!a||d<a);){
        b.push(hc(c));b.push(Saa);try{
            c=c.caller
        }catch(e){
            b.push(Taa);break
        }d++;if(d>=50){
            b.push(Uaa);break
        }
    }a&&d>=a?b.push(Vaa):b.push(Waa);return b.join(z)
}
var Yaa="[...circular reference...]",ic="(",jc=", ",kc="true",Zaa="false",$aa="[fn]",lc="...",aba=")\n";
function bba(a,b){
    var c=[];if(Db(b,a))c.push(Yaa);else if(a&&b.length<50){
        c.push(hc(a)+ic);for(var d=a.arguments,e=0;e<d.length;e++){
            e>0&&c.push(jc);var g;g=d[e];switch(typeof g){
                case ja:g=g?ja:oa;break;case va:g=g;break;case la:g=String(g);break;case xa:g=g?kc:Zaa;break;case na:g=(g=hc(g))?g:$aa;break;default:g=typeof g
            }if(g.length>40)g=g.substr(0,40)+lc;c.push(g)
        }b.push(a);c.push(aba);try{
            c.push(bba(a.caller,b))
        }catch(h){
            c.push(Taa)
        }
    }else a?c.push(Uaa):c.push(Waa);return c.join(z)
}var cba="[Anonymous]";
function hc(a){
    a=String(a);if(!mc[a]){
        var b=/function ([^\(]+)/.exec(a);mc[a]=b?b[1]:cba
    }return mc[a]
}var mc={};function nc(a,b){
    this.x=q(a)?a:0;this.y=q(b)?b:0
}nc.prototype.Ba=function(){
    return new nc(this.x,this.y)
};
function oc(a,b){
    this.width=a;
	this.height=b;
}
function pc(a,b){
    if(a==b)return i;if(!a||!b)return l;return a.width==b.width&&a.height==b.height
}o=oc.prototype;o.Ba=function(){
    return new oc(this.width,this.height)
};o.Mg=function(){
    return!(this.width*this.height)
};o.ceil=function(){
    this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this
};o.floor=function(){
    this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this
};
o.round=function(){
    this.width=Math.round(this.width);this.height=Math.round(this.height);return this
};o.scale=aa(11);var qc,rc,sc,tc,uc,vc,wc,xc;function yc(){
    return ca.navigator?ca.navigator.userAgent:j
}function zc(){
    return ca.navigator
}uc=tc=sc=rc=qc=l;var Ac,Bc="Opera",Cc="MSIE";if(Ac=yc()){
    var dba=zc();qc=Ac.indexOf(Bc)==0;rc=!qc&&Ac.indexOf(Cc)!=-1;tc=(sc=!qc&&Ac.indexOf("WebKit")!=-1)&&Ac.indexOf("Mobile")!=-1;uc=!qc&&!sc&&dba.product=="Gecko"
}var Dc=qc,A=rc,Ec=uc,Fc=sc,eba=tc,fba=zc(),Gc=fba&&fba.platform||z;vc=Gc.indexOf("Mac")!=-1;wc=Gc.indexOf("Win")!=-1;xc=Gc.indexOf("Linux")!=-1;
var gba=!!zc()&&(zc().appVersion||z).indexOf("X11")!=-1,Hc;a:{
    var Ic=z,Jc;if(Dc&&ca.opera){
        var Kc=ca.opera.version;Ic=typeof Kc==na?Kc():Kc
    }else{
        if(Ec)Jc=/rv\:([^\);]+)(\)|;)/;else if(A)Jc=/MSIE\s+([^\);]+)(\)|;)/;else if(Fc)Jc=/WebKit\/(\S+)/;if(Jc){
            var hba=Jc.exec(yc());Ic=hba?hba[1]:z
        }
    }if(A){
        var Lc,iba=ca.document;Lc=iba?iba.documentMode:undefined;if(Lc>parseFloat(Ic)){
            Hc=String(Lc);break a
        }
    }Hc=Ic
}var Mc=Hc,jba={};function Nc(a){
    return jba[a]||(jba[a]=rb(Mc,a)>=0)
};var kba,Oc="9",lba=!A||Nc(Oc),mba=A&&!Nc(Oc);function Pc(a){
    return(a=a.className)&&typeof a.split==na?a.split(/\s+/):[]
}function Rc(a){
    var b=Pc(a),c;c=Ob(arguments,1);for(var d=0,e=0;e<c.length;e++)if(!Db(b,c[e])){
        b.push(c[e]);d++
    }c=d==c.length;a.className=b.join(bb);return c
}function Sc(a){
    var b=Pc(a),c;c=Ob(arguments,1);for(var d=0,e=0;e<b.length;e++)if(Db(c,b[e])){
        Ib(b,e--,1);d++
    }c=d==c.length;a.className=b.join(bb);return c
}function Tc(a,b){
    return Db(Pc(a),b)
}function Uc(a,b,c){
    c?Rc(a,b):Sc(a,b)
};function Vc(a){
    return a?new Wc(Xc(a)):kba||(kba=new Wc)
}function Yc(a,b,c){
    return Zc(document,a,b,c)
}var $c="528";function ad(a){
    return a.querySelectorAll&&a.querySelector&&(!Fc||bd(document)||Nc($c))
}var cd="*";
function Zc(a,b,c,d){
    a=d||a;b=b&&b!=cd?b.toUpperCase():z;if(ad(a)&&(b||c))return a.querySelectorAll(b+(c?ea+c:z));if(c&&a.getElementsByClassName){
        a=a.getElementsByClassName(c);if(b){
            d={};for(var e=0,g=0,h;h=a[g];g++)if(b==h.nodeName)d[e++]=h;d.length=e;return d
        }else return a
    }a=a.getElementsByTagName(b||cd);if(c){
        d={};for(g=e=0;h=a[g];g++){
            b=h.className;if(typeof b.split==na&&Db(b.split(/\s+/),c))d[e++]=h
        }d.length=e;return d
    }else return a
}var dd="style",nba="class",oba="for";
function pba(a,b){
    Ia(b,function(c,d){
        if(d==dd)a.style.cssText=c;else if(d==nba)a.className=c;else if(d==oba)a.htmlFor=c;else if(d in qba)a.setAttribute(qba[d],c);else a[d]=c
    })
}var ed="height",fd="width",rba="type",qba={
    cellpadding:"cellPadding",
    cellspacing:"cellSpacing",
    colspan:"colSpan",
    rowspan:"rowSpan",
    valign:"vAlign",
    height:ed,
    width:fd,
    usemap:"useMap",
    frameborder:"frameBorder",
    type:rba
},sba="500",tba="9.50";
function gd(a){
    a=a||window;var b=a.document;if(Fc&&!Nc(sba)&&!eba){
        if(typeof a.innerHeight=="undefined")a=window;b=a.innerHeight;var c=a.document.documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;a=new oc(a.innerWidth,b)
    }else{
        a=bd(b);if(Dc&&!Nc(tba))a=l;a=a?b.documentElement:b.body;a=new oc(a.clientWidth,a.clientHeight)
    }return a
}function hd(a){
    return a?a.parentWindow||a.defaultView:window
}function id(){
    return uba(document,arguments)
}var vba=' name="',wba=' type="';
function uba(a,b){
    var c=b[0],d=b[1];if(!lba&&d&&(d.name||d.type)){
        c=[ib,c];d.name&&c.push(vba,kb(d.name),Oa);if(d.type){
            c.push(wba,kb(d.type),Oa);var e={};Ra(e,d);d=e;delete d.type
        }c.push(jb);c=c.join(z)
    }c=a.createElement(c);if(d)if(wa(d))c.className=d;else ta(d)?Rc.apply(j,[c].concat(d)):pba(c,d);b.length>2&&xba(a,c,b,2);return c
}
function xba(a,b,c,d){
    function e(h){
        if(h)b.appendChild(wa(h)?a.createTextNode(h):h)
    }for(d=d;d<c.length;d++){
        var g=c[d];ua(g)&&!(Ba(g)&&g.nodeType>0)?wb(yba(g)?Mb(g):g,e):e(g)
    }
}var zba="CSS1Compat";function bd(a){
    return a.compatMode==zba
}function jd(a){
    for(var b;b=a.firstChild;)a.removeChild(b)
}function Aba(a,b){
    b.parentNode&&b.parentNode.insertBefore(a,b)
}function Bba(a,b){
    b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)
}
function ld(a){
    return a&&a.parentNode?a.parentNode.removeChild(a):j
}function md(a,b){
    var c=b.parentNode;c&&c.replaceChild(a,b)
}function Cba(a){
    return nd(a.firstChild,i)
}function nd(a,b){
    for(;a&&a.nodeType!=1;)a=b?a.nextSibling:a.previousSibling;return a
}function od(a,b){
    if(a.contains&&b.nodeType==1)return a==b||a.contains(b);if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a
}var Dba="sourceIndex";
function Eba(a,b){
    if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(Dba in a||a.parentNode&&Dba in a.parentNode){
        var c=a.nodeType==1,d=b.nodeType==1;if(c&&d)return a.sourceIndex-b.sourceIndex;else{
            var e=a.parentNode,g=b.parentNode;if(e==g)return Fba(a,b);if(!c&&od(e,b))return-1*Gba(a,b);if(!d&&od(g,a))return Gba(b,a);return(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:g.sourceIndex)
        }
    }d=Xc(a);c=d.createRange();c.selectNode(a);c.collapse(i);d=d.createRange();
    d.selectNode(b);d.collapse(i);return c.compareBoundaryPoints(ca.Range.START_TO_END,d)
}function Gba(a,b){
    var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return Fba(d,a)
}function Fba(a,b){
    for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1
}
function Hba(){
    var a,b=arguments.length;if(b){
        if(b==1)return arguments[0]
    }else return j;var c=[],d=Infinity;for(a=0;a<b;a++){
        for(var e=[],g=arguments[a];g;){
            e.unshift(g);g=g.parentNode
        }c.push(e);d=Math.min(d,e.length)
    }e=j;for(a=0;a<d;a++){
        g=c[0][a];for(var h=1;h<b;h++)if(g!=c[h][a])return e;e=g
    }return e
}function Xc(a){
    return a.nodeType==9?a:a.ownerDocument||a.document
}function pd(a){
    return Fc?a.document||a.contentWindow.document:a.contentDocument||a.contentWindow.document
}var Iba="textContent";
function qd(a,b){
    if(Iba in a)a.textContent=b;else if(a.firstChild&&a.firstChild.nodeType==3){
        for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b
    }else{
        jd(a);a.appendChild(Xc(a).createTextNode(b))
    }
}var Jba={
    SCRIPT:1,
    STYLE:1,
    HEAD:1,
    IFRAME:1,
    OBJECT:1
},Kba={
    IMG:bb,
    BR:Xa
},Lba="innerText";
function rd(a){
    if(mba&&Lba in a)a=Ya(a.innerText);else{
        var b=[];Mba(a,b,i);a=b.join(z)
    }a=a.replace(/ \xAD /g,bb).replace(/\xAD/g,z);A||(a=a.replace(/ +/g,bb));if(a!=bb)a=a.replace(/^\s*/,z);return a
}function Mba(a,b,c){
    if(!(a.nodeName in Jba))if(a.nodeType==3)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,z)):b.push(a.nodeValue);else if(a.nodeName in Kba)b.push(Kba[a.nodeName]);else for(a=a.firstChild;a;){
        Mba(a,b,c);a=a.nextSibling
    }
}
function yba(a){
    if(a&&typeof a.length==la)if(Ba(a))return typeof a.item==na||typeof a.item==va;else if(Aa(a))return typeof a.item==na;return l
}function Wc(a){
    this.a=a||ca.document||document
}o=Wc.prototype;o.P=Vc;function sd(a){
    return a.a
}o.G=function(a){
    return wa(a)?this.a.getElementById(a):a
};o.L=function(){
    return uba(this.a,arguments)
};o.createElement=function(a){
    return this.a.createElement(a)
};o.createTextNode=function(a){
    return this.a.createTextNode(a)
};
function td(a){
    return!Fc&&bd(a.a)?a.a.documentElement:a.a.body
}function ud(a){
    a=!Fc&&bd(a.a)?a.a.documentElement:a.a.body;return new nc(a.scrollLeft,a.scrollTop)
}o.appendChild=function(a,b){
    a.appendChild(b)
};o.append=function(a){
    xba(Xc(a),a,arguments,1)
};o.DP=jd;o.Rx=Aba;o.XH=Bba;o.Ap=ld;o.K$=md;o.hh=Cba;o.dx=aa(14);o.contains=od;o.q_=pd;o.IT=qd;o.YG=rd;function vd(a,b){
    this.o=b;this.b=[];if(a>this.o)f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));for(var c=0;c<a;c++)this.b.push(this.a?this.a():{})
}t(vd,x);vd.prototype.a=j;vd.prototype.k=j;vd.prototype.$c=function(){
    if(this.b.length)return this.b.pop();return this.a?this.a():{}
};function wd(a,b){
    a.b.length<a.o?a.b.push(b):Nba(a,b)
}function Nba(a,b){
    if(a.k)a.k(b);else if(Ba(b))if(Aa(b.wa))b.wa();else for(var c in b)delete b[c]
}
vd.prototype.A=function(){
    vd.z.A.call(this);for(var a=this.b;a.length;)Nba(this,a.pop());delete this.b
};var xd=[];var yd,Oba=!A||Nc(Oc),zd="8",Pba=A&&!Nc(zd);function B(a,b){
    this.type=a;this.currentTarget=this.target=b
}t(B,x);o=B.prototype;o.A=function(){
    delete this.type;delete this.target;delete this.currentTarget
};o.$q=l;o.ez=i;o.stopPropagation=function(){
    this.$q=i
};o.preventDefault=function(){
    this.ez=l
};function Qba(a){
    a.preventDefault()
};
function Ad(a,b){
    a&&this.init(a,b)
}
t(Ad,B);var Rba=[1,4,2];o=Ad.prototype;o.target=j;o.Bf=j;o.aH=0;o.FP=0;o.clientX=0;o.clientY=0;o.TB=0;o.UB=0;o.i0=0;o.keyCode=0;o.Ct=0;o.ctrlKey=l;o.Fg=l;o.Jd=l;o.qi=l;o.Z9=l;o.Tc=j;
var Bd="mouseover",Cd="mouseout",Dd="keypress";
o.init=function(a,b){
    var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){
        if(Ec)try{
            d=d.nodeName&&d
        }catch(e){
            d=j
        }
    }else if(c==Bd)d=a.fromElement;else if(c==Cd)d=a.toElement;this.Bf=d;this.aH=a.offsetX!==undefined?a.offsetX:a.layerX;this.FP=a.offsetY!==undefined?a.offsetY:a.layerY;this.clientX=a.clientX!==undefined?a.clientX:a.pageX;this.clientY=a.clientY!==undefined?a.clientY:a.pageY;this.TB=a.screenX||0;this.UB=a.screenY||0;this.i0=a.button;this.keyCode=
    a.keyCode||0;this.Ct=a.charCode||(c==Dd?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.Fg=a.altKey;this.Jd=a.shiftKey;this.qi=a.metaKey;this.Z9=vc?a.metaKey:a.ctrlKey;this.state=a.state;this.Tc=a;delete this.ez;delete this.$q
};
var Ed="click";
//觸發事件
function Fd(a,b){
    return Oba?a.Tc.button==b:a.type==Ed?b==0:!!(a.Tc.button&Rba[b])
}
o.stopPropagation=function(){
    Ad.z.stopPropagation.call(this);if(this.Tc.stopPropagation)this.Tc.stopPropagation();else this.Tc.cancelBubble=i
};
o.preventDefault=function(){
    Ad.z.preventDefault.call(this);var a=this.Tc;if(a.preventDefault)a.preventDefault();else{
        a.returnValue=l;if(Pba)try{
            if(a.ctrlKey||a.keyCode>=112&&a.keyCode<=123)a.keyCode=-1
        }catch(b){}
    }
};o.A=function(){
    Ad.z.A.call(this);this.Bf=this.currentTarget=this.target=this.Tc=j
};var Gd;Gd="ScriptEngine"in ca&&ca.ScriptEngine()=="JScript";var Hd="0",Sba=Gd?ca.ScriptEngineMajorVersion()+ea+ca.ScriptEngineMinorVersion()+ea+ca.ScriptEngineBuildVersion():Hd;function Tba(){}var Uba=0;o=Tba.prototype;o.key=0;o.Ru=l;o.OF=l;var Vba="Invalid listener argument";o.init=function(a,b,c,d,e,g){
    if(Aa(a))this.a=i;else if(a&&a.handleEvent&&Aa(a.handleEvent))this.a=l;else f(Error(Vba));this.Wj=a;this.b=b;this.src=c;this.type=d;this.capture=!!e;this.gC=g;this.OF=l;this.key=++Uba;this.Ru=l
};o.handleEvent=function(a){
    if(this.a)return this.Wj.call(this.gC||this.src,a);return this.Wj.handleEvent.call(this.Wj,a)
};var Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Wba="5.7";
(function(){
    function a(){
        return{
            $b:0,
            Mi:0
        }
    }function b(){
        return[]
    }function c(){
        function u(w){
            return h.call(u.src,u.key,w)
        }return u
    }function d(){
        return new Tba
    }function e(){
        return new Ad
    }var g=Gd&&!(rb(Sba,Wba)>=0),h;Nd=function(u){
        h=u
    };if(g){
        Id=function(){
            return k.$c()
        };Jd=function(u){
            wd(k,u)
        };Kd=function(){
            return m.$c()
        };Ld=function(u){
            wd(m,u)
        };Md=function(){
            return n.$c()
        };Od=function(){
            wd(n,c())
        };Pd=function(){
            return p.$c()
        };Qd=function(u){
            wd(p,u)
        };Rd=function(){
            return r.$c()
        };Sd=function(u){
            wd(r,
                u)
        };var k=new vd(0,600);k.a=a;var m=new vd(0,600);m.a=b;var n=new vd(0,600);n.a=c;var p=new vd(0,600);p.a=d;var r=new vd(0,600);r.a=e
    }else{
        Id=a;Jd=ha;Kd=b;Ld=ha;Md=c;Od=ha;Pd=d;Qd=ha;Rd=e;Sd=ha
    }
})();var Td={},Ud={},Vd={},Wd={};
function Xd(a,b,c,d,e){
    if(b)if(ta(b)){
        for(var g=0;g<b.length;g++)Xd(a,b[g],c,d,e);return j
    }else{
        d=!!d;var h=Ud;b in h||(h[b]=Id());h=h[b];if(!(d in h)){
            h[d]=Id();h.$b++
        }h=h[d];var k=Ca(a),m;h.Mi++;if(h[k]){
            m=h[k];for(g=0;g<m.length;g++){
                h=m[g];if(h.Wj==c&&h.gC==e){
                    if(h.Ru)break;return m[g].key
                }
            }
        }else{
            m=h[k]=Kd();h.$b++
        }g=Md();g.src=a;h=Pd();h.init(c,g,a,b,d,e);c=h.key;g.key=c;m.push(h);Td[c]=h;Vd[k]||(Vd[k]=Kd());Vd[k].push(h);if(a.addEventListener){
            if(a==ca||!a.UN)a.addEventListener(b,g,d)
        }else a.attachEvent(Xba(b),
            g);return c
    }else f(Error("Invalid event type"))
}function Yd(a,b,c,d,e){
    if(ta(b)){
        for(var g=0;g<b.length;g++)Yd(a,b[g],c,d,e);return j
    }a=Xd(a,b,c,d,e);Td[a].OF=i;return a
}function Zd(a,b,c,d,e){
    if(ta(b)){
        for(var g=0;g<b.length;g++)Zd(a,b[g],c,d,e);return j
    }d=!!d;a=$d(a,b,d);if(!a)return l;for(g=0;g<a.length;g++)if(a[g].Wj==c&&a[g].capture==d&&a[g].gC==e)return ae(a[g].key);return l
}
function ae(a){
    if(!Td[a])return l;var b=Td[a];if(b.Ru)return l;var c=b.src,d=b.type,e=b.b,g=b.capture;if(c.removeEventListener){
        if(c==ca||!c.UN)c.removeEventListener(d,e,g)
    }else c.detachEvent&&c.detachEvent(Xba(d),e);c=Ca(c);e=Ud[d][g][c];if(Vd[c]){
        var h=Vd[c];Jb(h,b);h.length==0&&delete Vd[c]
    }b.Ru=i;e.tS=i;Yba(d,g,c,e);delete Td[a];return i
}
function Yba(a,b,c,d){
    if(!d.oD)if(d.tS){
        for(var e=0,g=0;e<d.length;e++)if(d[e].Ru){
            var h=d[e].b;h.src=j;Od(h);Qd(d[e])
        }else{
            if(e!=g)d[g]=d[e];g++
        }d.length=g;d.tS=l;if(g==0){
            Ld(d);delete Ud[a][b][c];Ud[a][b].$b--;if(Ud[a][b].$b==0){
                Jd(Ud[a][b]);delete Ud[a][b];Ud[a].$b--
            }if(Ud[a].$b==0){
                Jd(Ud[a]);delete Ud[a]
            }
        }
    }
}
function be(a,b,c){
    var d=0,e=b==j,g=c==j;c=!!c;if(a==j)Ia(Vd,function(m){
        for(var n=m.length-1;n>=0;n--){
            var p=m[n];if((e||b==p.type)&&(g||c==p.capture)){
                ae(p.key);d++
            }
        }
    });else{
        a=Ca(a);if(Vd[a]){
            a=Vd[a];for(var h=a.length-1;h>=0;h--){
                var k=a[h];if((e||b==k.type)&&(g||c==k.capture)){
                    ae(k.key);d++
                }
            }
        }
    }return d
}function $d(a,b,c){
    var d=Ud;if(b in d){
        d=d[b];if(c in d){
            d=d[c];a=Ca(a);if(d[a])return d[a]
        }
    }return j
}var ce="on";function Xba(a){
    if(a in Wd)return Wd[a];return Wd[a]=ce+a
}
function de(a,b,c,d,e){
    var g=1;b=Ca(b);if(a[b]){
        a.Mi--;a=a[b];if(a.oD)a.oD++;else a.oD=1;try{
            for(var h=a.length,k=0;k<h;k++){
                var m=a[k];if(m&&!m.Ru)g&=ee(m,e)!==l
            }
        }finally{
            a.oD--;Yba(c,d,b,a)
        }
    }return Boolean(g)
}function ee(a,b){
    var c=a.handleEvent(b);a.OF&&ae(a.key);return c
}
function fe(a,b){
    if(wa(b))b=new B(b,a);else if(b instanceof B)b.target=b.target||a;else{
        var c=b;b=new B(b.type,a);Ra(b,c)
    }c=1;var d,e=b.type,g=Ud;if(!(e in g))return i;g=g[e];e=i in g;var h;if(e){
        d=[];for(h=a;h;h=h.Iu)d.push(h);h=g[i];h.Mi=h.$b;for(var k=d.length-1;!b.$q&&k>=0&&h.Mi;k--){
            b.currentTarget=d[k];c&=de(h,d[k],b.type,i,b)&&b.ez!=l
        }
    }if(l in g){
        h=g[l];h.Mi=h.$b;if(e)for(k=0;!b.$q&&k<d.length&&h.Mi;k++){
            b.currentTarget=d[k];c&=de(h,d[k],b.type,l,b)&&b.ez!=l
        }else for(d=a;!b.$q&&d&&h.Mi;d=d.Iu){
            b.currentTarget=
            d;c&=de(h,d,b.type,l,b)&&b.ez!=l
        }
    }return Boolean(c)
}var Zba="window.event";
function ge(a,b){
    if(!Td[a])return i;var c=Td[a],d=c.type,e=Ud;if(!(d in e))return i;e=e[d];var g,h;if(yd===undefined)yd=A&&!ca.addEventListener;if(yd){
        g=b||ga(Zba);var k=i in e,m=l in e;if(k){
            if(g.keyCode<0||g.returnValue!=undefined)return i;a:{
                var n=l;if(g.keyCode==0)try{
                    g.keyCode=-1;break a
                }catch(p){
                    n=i
                }if(n||g.returnValue==undefined)g.returnValue=i
            }
        }n=Rd();n.init(g,this);g=i;try{
            if(k){
                for(var r=Kd(),u=n.currentTarget;u;u=u.parentNode)r.push(u);h=e[i];h.Mi=h.$b;for(var w=r.length-1;!n.$q&&w>=0&&
                    h.Mi;w--){
                    n.currentTarget=r[w];g&=de(h,r[w],d,i,n)
                }if(m){
                    h=e[l];h.Mi=h.$b;for(w=0;!n.$q&&w<r.length&&h.Mi;w++){
                        n.currentTarget=r[w];g&=de(h,r[w],d,l,n)
                    }
                }
            }else g=ee(c,n)
        }finally{
            if(r){
                r.length=0;Ld(r)
            }n.wa();Sd(n)
        }return g
    }d=new Ad(b,this);try{
        g=ee(c,d)
    }finally{
        d.wa()
    }return g
}Nd(ge);xd[xd.length]=function(a){
    ge=a(ge);Nd(ge)
};function he(a){
    this.k=a
}t(he,x);var $ba=new vd(0,100);he.prototype.a=function(a,b,c,d,e){
    if(ta(b))for(var g=0;g<b.length;g++)this.a(a,b[g],c,d,e);else aca(this,Xd(a,b,c||this,d||l,e||this.k||this));return this
};function ie(a,b,c,d,e,g){
    if(ta(c))for(var h=0;h<c.length;h++)ie(a,b,c[h],d,e,g);else aca(a,Yd(b,c,d||a,e||l,g||a.k||a));return a
}function aca(a,b){
    if(a.Wb)a.Wb[b]=i;else if(a.Bi){
        a.Wb=$ba.$c();a.Wb[a.Bi]=i;a.Bi=j;a.Wb[b]=i
    }else a.Bi=b
}
he.prototype.b=function(a,b,c,d,e){
    if(this.Bi||this.Wb)if(ta(b))for(var g=0;g<b.length;g++)this.b(a,b[g],c,d,e);else{
        a:{
            c=c||this;e=e||this.k||this;d=!!d;if(a=$d(a,b,d))for(b=0;b<a.length;b++)if(a[b].Wj==c&&a[b].capture==d&&a[b].gC==e){
                a=a[b];break a
            }a=j
        }if(a){
        a=a.key;ae(a);if(this.Wb)Na(this.Wb,a);else if(this.Bi==a)this.Bi=j
    }
    }return this
};function je(a){
    if(a.Wb){
        for(var b in a.Wb){
            ae(b);delete a.Wb[b]
        }wd($ba,a.Wb);a.Wb=j
    }else a.Bi&&ae(a.Bi)
}he.prototype.A=function(){
    he.z.A.call(this);je(this)
};
he.prototype.handleEvent=function(){
    f(Error("EventHandler.handleEvent not implemented"))
};var ke,le,me,ne,oe,pe,qe;qe=pe=oe=ne=me=le=ke=l;var re=yc(),bca="Firefox",cca="Chrome",dca="Safari";if(re)if(re.indexOf(bca)!=-1)ke=i;else if(re.indexOf("Camino")!=-1)le=i;else if(re.indexOf("iPhone")!=-1||re.indexOf("iPod")!=-1)me=i;else if(re.indexOf("iPad")!=-1)ne=i;else if(re.indexOf("Android")!=-1)oe=i;else if(re.indexOf(cca)!=-1)pe=i;else if(re.indexOf(dca)!=-1)qe=i;var se=ke,eca=le,fca=me,te=ne,gca=oe,ve=pe,we=qe;var xe="span",ye="position: absolute; top: -50000px; white-space:nowrap;";function ze(){
    this.a=id(xe,{
        style:ye
    });document.body.appendChild(this.a);this.b=this.a;this.k={};this.o={};this.N=new he(this)
}t(ze,x);ia(ze);var Ae="1.9",hca=Ec&&Nc(Ae),ica=72/2.54,Be=72/25.4;o=ze.prototype;o.Xy=j;o.cE=j;o.Xp=j;o.DQ=l;o.Pt=j;o.HJ=te;o.cD=0;function jca(a,b,c,d,e){
    if(b!=a.cD){
        a.cD=b;a.HJ=b!=0||te;a.Xy=j;a.Xp&&c&&kca(a,i,i,d,e)
    }
}
var Ce="IFRAME",lca="position: absolute; top: -50000px; border: 0; z-index: -50000; width: 50000px",De='javascript:""',Ee="SPAN",mca="position: absolute; top: -50000px; white-space:nowrap;overflow: hidden",Fe="load";
function kca(a,b,c,d,e){
    if(b&&(!a.Xp||c)){
        ld(a.Xp);c=a.Xp=id(Ce,{
            style:lca,
            frameborder:0,
            src:De
        });var g=id(Ee,{
            style:mca
        },c);document.body.appendChild(g);if((Fc?c.document:c.contentDocument)||c.contentWindow&&c.contentWindow.document)a.$P(d);else{
            a.Pt=j;a.DQ=i;e&&e();ie(a.N,c,Fe,s(a.$P,a,d))
        }
    }a.b=b&&a.Pt?a.Pt:a.a
}var nca='<!DOCTYPE html><html><body><span style="position:absolute; white-space:nowrap;',oca=" overflow:auto;",pca='"></span></body></html>';
o.$P=function(a){
    var b=pd(this.Xp);b.open();b.write(nca+(A?oca:z)+pca);b.close();this.b=this.Pt=b.body.firstChild;a&&a();this.DQ=l
};var Ge='<span style="',He='">',Ie="</span>";function Je(a,b,c){
    var d=a.k,e=a.cD;d[e]||(d[e]={});d=d[e];d[b]||(d[b]={});if(!d[b][c]){
        e=a.HJ?50:1;a=Ke(a,nb(Ge,b,He,mb(c,e),Ie),i);a.width/=e;d[b][c]=a
    }return d[b][c]
}function qca(a,b,c){
    var d=a.o,e=a.cD;d[e]||(d[e]={});d=d[e];if(!d[b]){
        e=a.HJ?50:1;a=Ke(a,mb(b,e),c);a.width/=e;d[b]=a
    }return d[b]
}
function rca(a,b,c){
    if(hca){
        a=b.getBoundingClientRect();a=a.right-a.left
    }else a=b.offsetWidth;return new oc(a,(c?b.firstChild||b:b).offsetHeight)
}function Ke(a,b,c){
    a.b.innerHTML=b;return rca(a,a.b,c)
}function sca(a,b){
    var c=!(A?b.parentElement:b.parentNode);if(c){
        a.a.innerHTML=z;a.a.appendChild(b)
    }var d=rca(a,b);c&&ld(b);return d
}function Le(a,b,c){
    a=b*Me(a);return c?a:Math.round(a)
}var tca="1in";
function Me(a){
    if(a.Xy)return a.Xy;a.a.innerHTML=z;a.a.style.width=tca;a.a.style.height=tca;a.Xy=a.a.offsetHeight/72;a.a.style.width=z;a.a.style.height=z;return a.Xy
}var Ne="100px",Oe="scroll";function Pe(a){
    if(a.cE)return a.cE;a.a.innerHTML=z;a.a.style.width=Ne;a.a.style.height=Ne;a.a.style.overflowY=Oe;a.cE=a.a.offsetWidth-a.a.scrollWidth;a.a.style.width=z;a.a.style.height=z;a.a.style.overflowY=z;return a.cE
}
o.A=function(){
    ze.z.A.call(this);y(this.N);delete this.N;delete this.k;delete this.o;delete this.a;delete this.b;delete this.Xp;delete this.Pt
};var Qe="en",Re="US";
function Se(a){
    this.WV=a;this.ZL=new Ha(a.mip||0,sa(a.map)?a.map:Number.MAX_VALUE);this.b=a.am||3;this.eF=a.ak||z;this.zY=a.bl||z;this.nZ=!!a.ci;this.LJ=a.cpn||0;this.dK=a.crn||0;this.VV=!!a.ccs;this.aM=a.csie||[];this.k=a.docid;this.hC=a.domain||z;this.PM=a.durl||z;this.ya=a.element;this.QM=a.email||z;this.B5=!!a.eaa;this.HZ=!!a.eaalf;this.eL=!!a.ear;this.wL=!!a.eac;this.J5=!!a.eacl;this.iA=!!a.easr;this.fF=!!a.ebc;this.qA=!!a.ebk;this.nda=!!a.ecer;this.fM=!!a.ecqs;this.RM=!!a.ecb;this.gM=!!a.ecso;
    this.M=!!a.ec;this.iM=!!a.ecsc;this.nM=!!a.ecm;this.d6=!!a.ecd;this.f6=!!a.ecdbc;this.sM=!!a.ecsi;this.tM=!!a.edm;this.rA=!!a.edc2;this.AL=!!a.ed;this.od=!!a.edo;this.Oa=!!a.edr;this.o=!!a.eeq;this.Y8=!!a.eeqac;this.Od=!!a.eex;this.i9=!!a.eedd;this.W9=!!a.eeidd;this.sA=!!a.efr;this.Fa=!!a.ef;this.t$=!!a.efcr;this.Ia=!!a.ehf;this.y$=!!a.eis;this.tA=!!a.eia;this.Qaa=!!a.eidc;this.ha=!!a.eimg;this.bba=!!a.eipad;this.vM=!!a.ej;this.qV=!!a.esco;this.eb=!!a.el;this.hba=!!a.els;this.kba=!!a.elis;this.xM=
    !!a.eld;this.oba=!!a.em;this.Q=!!a.enst;this.SM=!!a.ensui;this.uA=!!a.epb;this.vA=!!a.epcol;this.Ye=!!a.epset;this.a=!!a.epa;this.sba=!!a.epudc;this.tba=!!a.ep;this.wU=!!a.epc;this.DU=!!a.epf;this.RU=!!a.epps;this.BL=!!a.eps;this.cV=!!a.epub;this.Bb=!!a.erts;this.FM=!!a.erh;this.zM=!!a.erd;this.Zb=!!a.ertl;this.Qa=!!a.er;this.hV=!!a.erti;this.XE=!!a.esvcm;this.iB=!!a.esc;this.xB=!!a.esud;this.sV=!!a.est;this.Mh=!!a.etoc;this.F=!!a.et;this.JM=!!a.etm;this.YE=!!a.etr;this.HV=!!a.eupc;this.NM=!!a.ewd;
    this.PV=!!a.ewf;this.cF=!!a.ewc;this.eM=!!a.ecl;this.aC=!!a.ol;this.J=this.Zb&&a.rtl;this.Eq=a.l||Qe;this.jW=a.mau||z;this.CL=a.mdu||z;this.gF=a.ogi||z;this.mW=a.iiu;this.vC=a.psi||z;var b=a.l,c;if(b)c=(c=b.match(/[-_]([a-zA-Z]{2}|\d{3})([-_]|$)/))?c[0].replace(/[_-]/g,z):z;else c=z;c=c;this.oW=b==Qe||c==Re?Re:c;this.Nh=a.up;this.TM=a.ud;this.aW=a.un;this.VM=a.wf||j;this.CN=a.wfsl||[]
}t(Se,x);o=Se.prototype;o.aD=j;o.G=function(){
    return this.ya
};o.Bj=function(){
    return this.aW
};o.ue=function(){
    return!this.QM
};
function Te(a){
    return a.b!=3
}o.Ba=function(a){
    var b=Qa(this.WV);if(a)for(var c in a)b[c]=a[c];return new Se(b)
};o.A=function(){
    Se.z.A.call(this);delete this.ZL;delete this.aM;delete this.ya;delete this.aD;delete this.CN
};var Ue=":",Ve="//",We="@",Xe="?",Ye="#";function Ze(a,b,c,d,e,g,h){
    var k=[];a&&k.push(a,Ue);if(c){
        k.push(Ve);b&&k.push(b,We);k.push(c);d&&k.push(Ue,d)
    }e&&k.push(e);g&&k.push(Xe,g);h&&k.push(Ye,h);return k.join(z)
}var $e=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");function af(a){
    return a&&decodeURIComponent(a)
}function bf(a,b){
    return b.match($e)[a]||j
}
function cf(a){
    var b=a.indexOf(Ye);return b<0?j:a.substr(b+1)
}function ef(a){
    if(a[1]){
        var b=a[0],c=b.indexOf(Ye);if(c>=0){
            a.push(b.substr(c));a[0]=b=b.substr(0,c)
        }c=b.indexOf(Xe);if(c<0)a[1]=Xe;else if(c==b.length-1)a[1]=undefined
    }return a.join(z)
}var ff="=";function uca(a,b,c){
    if(ta(b))for(var d=0;d<b.length;d++){
        c.push(hb,a);b[d]!==z&&c.push(ff,ab(b[d]))
    }else if(b!=j){
        c.push(hb,a);b!==z&&c.push(ff,ab(b))
    }
}function gf(a,b,c){
    for(c=c||0;c<b.length;c+=2)uca(b[c],b[c+1],a);return a
}
function hf(a,b){
    var c=gf([],a,b);c[0]=z;return c.join(z)
}function jf(a,b){
    for(var c in b)uca(c,b[c],a);return a
}function kf(a){
    a=jf([],a);a[0]=z;return a.join(z)
}function lf(a){
    return ef(arguments.length==2?gf([a],arguments[1],0):gf([a],arguments,1))
}function vca(a,b,c,d){
    b=b;for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){
        var g=a.charCodeAt(b-1);if(g==38||g==63){
            g=a.charCodeAt(b+e);if(!g||g==61||g==38||g==35)return b
        }b+=e+1
    }return-1
}var wca=/#|$/;
function mf(a,b){
    var c=a.search(wca),d=vca(a,0,b,c);if(d<0)return j;else{
        var e=a.indexOf(hb,d);if(e<0||e>c)e=c;d+=b.length+1;return cb(a.substr(d,e-d))
    }
};function nf(){
    this.a=[];this.b={}
}t(nf,x);o=nf.prototype;o.Bi=1;o.QD=0;o.fb=function(a,b,c){
    var d=this.b[a];d||(d=this.b[a]=[]);var e=this.Bi;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.Bi=e+3;d.push(e);return e
};o.rf=function(a,b,c){
    if(a=this.b[a]){
        var d=this.a;if(a=Cb(a,function(e){
            return d[e+1]==b&&d[e+2]==c
        }))return this.uv(a)
    }return l
};
o.uv=function(a){
    if(this.QD!=0){
        if(!this.k)this.k=[];this.k.push(a);return l
    }var b=this.a[a];if(b){
        var c=this.b[b];c&&Jb(c,a);delete this.a[a];delete this.a[a+1];delete this.a[a+2]
    }return!!b
};o.zx=function(a){
    var b=this.b[a];if(b){
        this.QD++;for(var c=Ob(arguments,1),d=0,e=b.length;d<e;d++){
            var g=b[d];this.a[g+1].apply(this.a[g+2],c)
        }this.QD--;if(this.k&&this.QD==0)for(;b=this.k.pop();)this.uv(b);return d!=0
    }return l
};
o.clear=function(a){
    if(a){
        var b=this.b[a];if(b){
            wb(b,this.uv,this);delete this.b[a]
        }
    }else{
        this.a.length=0;this.b={}
    }
};o.Zh=function(a){
    if(a){
        var b=this.b[a];return b?b.length:0
    }a=0;for(b in this.b)a+=this.Zh(b);return a
};o.A=function(){
    nf.z.A.call(this);delete this.a;delete this.b;delete this.k
};
var of="default";
//pf物件
function pf(a,b){
	//showObject(b);
    this.o=a;
	this.k={};
	this.b=b?Qa(b):{};
	this.Gb()||(this.k[of]=i);
	this.a=new nf
}

t(pf,x);var qf=l;o=pf.prototype;o.A=function(){
    pf.z.A.call(this);this.a.wa();delete this.a;delete this.b
};o.ra=function(){
    return this.o
};var rf="enabled";

o.Gb=function(){
    return!!this.Ec(rf)
};o.Aa=function(a,b){
    var c=b||of,d=i;if(a){
        delete this.k[c];for(var e in this.k){
            d=l;break
        }
    }else{
        this.k[c]=i;d=l
    }this.setProperty(rf,d)
};var sf="visible";o.Ta=function(){
    return!!this.Ec(sf)
};
o.Z=function(a){
    this.setProperty(sf,a)
};o.Vx=aa(13);var tf="selected";o.Ac=function(a){
    this.setProperty(tf,a)
};var uf="keys";o.zf=function(){
    return this.Ec(uf)
};var vf="value";o.ea=function(){
    return this.Ec(vf)
};o.zb=function(a){
    this.setProperty(vf,a)
};o.Ec=function(a){
    return this.b[a]
};var wf="change";o.setProperty=function(a,b){
    var c=this.b[a];if(b!=c){
        this.b[a]=b;this.a.zx(wf,a,b,c)
    }
};var xf="action";function yf(a,b){
    if(a.Gb()&&!qf){
        var c=a.b.selected;sa(c)&&a.Ac(!c);a.a.zx(xf,b)
    }
}
o.fb=function(a,b,c){
    return this.a.fb(a,b,c)
};o.rf=function(a,b,c){
    return this.a.rf(a,b,c)
};o.uv=function(a){
    return this.a.uv(a)
};var xca="radio";function yca(a,b){
    wb(a,function(c){
        b&&c.setProperty(xca,i);c.fb(wf,function(d,e){
            d==tf&&e&&wb(a,function(g){
                g!=c&&g.Ac(l)
            })
        })
    })
};function zca(a){
    return function(){
        return a
    }
}var Aca=zca(i);function Bca(a){
    return function(){
        f(Error(a))
    }
};var Cca=l;
function Dca(a,b,c,d,e){
    var g={};g.label=b;
	g.visible=i;
	g.hint=e||b;
	if(c)g.keys=c;
	if(d)g.icon=d;
	 
	return new pf(a,g)
}
function zf(a,b){
    var c=a.Ec(uf);ta(c)||(c=[c]);c.push(b);a.setProperty(uf,c)
}

var Eca="docs-icon-img docs-icon-",Fca="docs-new-menu",Gca="New",Hca="docs-document",Ica="Document",Af="document",Jca="docs-presentation",Kca="Presentation",Lca="presentation",Mca="docs-punch",Nca="Punch",Oca="punch",Pca="docs-spreadsheet",Qca="Spreadsheet",Rca="spreadsheet",Sca="docs-form",Tca="Form",Uca="form",
Vca="docs-drawing",
Wca="Drawing",
Xca="drawing",
Yca="docs-template",
Zca="From template...",
$ca="docs-new-custom",ada="docs-download-menu",bda="Download as",cda="docs-file-menu",dda="docs-open",
eda="Open...",fda="Ctrl+O",gda="docs-upload-custom",hda="docs-upload",ida="Upload...",jda="docs-revisions",kda="See revision history",lda="docs-file-custom",mda="docs-rename",nda="Rename...",oda="docs-make-copy",pda="Make a copy...",qda="docs-save",rda="Save",sda="Ctrl+S",tda="save",uda="docs-save-close",vda="Save & Close",wda="docs-custom-inline",xda="docs-print-preview",yda="Print preview",zda="docs-print",Bf="Print",Ada="Ctrl+P",Cf="print",Bda="docs-edit-menu",Cda="docs-copy",Df="Copy",Dda="Ctrl+C",
Ef="copy",Eda="docs-copypaste-custom",Fda="docs-cut",Ff="Cut",Gda="Ctrl+X",Gf="cut",Hda="docs-edit-custom",Ida="docs-paste",Hf="Paste",Jda="Ctrl+V",If="paste",Kda="docs-redo",Lda="Redo",Mda="Ctrl+Y",Nda="Ctrl+Shift+Z",Jf="redo",Kf="-rtl",Oda="docs-select-all",Pda="Select all",Qda="Ctrl+A",Rda="docs-select-none",Sda="Select none",Tda="Ctrl+Shift+A",Uda="docs-undo",Vda="Undo",Wda="Ctrl+Z",Lf="undo",Xda="docs-insert-menu",Yda="docs-shape",Zda="Shape",$da="shapes",aea="docs-text-box",bea="Text box",cea=
"textbox",dea="docs-image",eea="Image...",fea="image",gea="docs-format-menu",hea="docs-bold",iea="Bold",jea="Ctrl+B",C="bold",kea="docs-font-family",lea="Font",mea="docs-font-size",nea="Font size",oea="docs-italic",pea="Italic",qea="Ctrl+I",E="italic",rea="docs-strikethrough",sea="Strikethrough",tea="strikethrough",uea="docs-subscript",vea="Subscript",wea="Ctrl+,",xea="subscript",yea="docs-superscript",zea="Superscript",Aea="Ctrl+.",Bea="superscript",Cea="docs-text-color",Dea="Text color",Eea="text-color",
Fea="docs-text-bgcolor",Gea="Text background color",Hea="text-bgcolor",Iea="docs-underline",Jea="Underline",Kea="Ctrl+U",Mf="underline",Lea="docs-no-fill",Mea="Transparent",Nea="no-color",Oea="docs-no-line",Pea="docs-fill-color",Qea="Fill color",Rea="fill-color",Sea="docs-line-color",Tea="Line color",Uea="line-color",Vea="docs-line-width",Wea="Line width",Xea="line-width",Yea="docs-view-menu",Zea="docs-view-custom",$ea="docs-zoom-in",afa="Zoom in",bfa="Ctrl+Shift+Right",cfa="docs-zoom-out",dfa="Zoom out",
efa="Ctrl+Shift+Left",ffa="docs-view-compact",gfa="Compact controls",hfa="Ctrl+Shift+F",ifa="docs-hide-controls",jfa="Hide controls",kfa="docs-tools-menu",lfa="docs-preferences",mfa="Preferences...",nfa="docs-table-menu",ofa="docs-help-menu",pfa="docs-help-center",qfa="Google Docs Help Center",rfa="docs-help-forum",sfa="Learn from other Google users",tfa="docs-help-video",ufa="Watch a video introduction",vfa="docs-help-shortcuts",wfa="Keyboard shortcuts",xfa="Ctrl+/",yfa="docs-feedback",zfa="Report an issue",
Afa="docs-help-custom",Bfa="docs-clipboard",Cfa="Web clipboard",Dfa="clipboard",Efa="docs-clipboard-copy",Ffa="docs-clipboard-paste-from-server",Gfa="Paste from server",Hfa="docs-clipboard-clear-items",Ifa="Clear all items",Jfa="docs-clipboard-help",Kfa="Web clipboard help",Lfa="docs-create",Mfa="docs-revisions-zoomin",Nfa="docs-revisions-zoomout",Ofa="docs-revisions-revert",Pfa="docs-revisions-show",Qfa="docs-revisions-close",Rfa="docs-revisions-sidebar",Sfa="docs-revisions-diff",Tfa="docs-chat-sidebar",
Ufa="docs-docos-pane",Vfa="Shift+Delete",Wfa="Ctrl+Insert",Xfa="Shift+Insert",Yfa="Ctrl+Shift+V",Zfa="docs-menubar-focus",$fa="Alt+Shift+F",aga="Alt+F";
function bga(a){
    function b(c,d,e,g,h){
        return Dca(c,d,e,g?Eca+g:g,h)
    }
	Cca=i;a=!!a;
	/*
	
	*/
	F={
        Jv:b(Fca,Gca),
        dA:b(Hca,Ica,j,Af),
        gA:b(Jca,Kca,j,Lca),//presentation
        hA:b(Mca,Nca,j,Oca),//docs-punch
        rM:b(Pca,Qca,j,Rca),//docs-spreadsheet
        fA:b(Sca,Tca,j,Uca),//docs-form
        eA:b(Vca,Wca,j,Xca),//Drawings
        qM:b(Yca,Zca),
        kF:b($ca,z),
        Uz:b(ada,bda),
        lV:b(cda,z),
        OPEN:b(dda,eda,fda),
        pX:b(gda,z),
        pA:b(hda,ida),
        Mv:b(jda,kda),
        WL:b(lda,z),
        Fo:b(mda,nda),
        Iv:b(oda,pda),
        Pl:b(qda,rda,sda,tda),
        qF:b(uda,vda),
        uM:b(wda,z),
        Eo:b(xda,yda),
        rk:b(zda,Bf,Ada,Cf),
        eV:b(Bda,z),
        Wi:b(Cda,Df,Dda,Ef),
        OU:b(Eda,z),
        Yi:b(Fda,
            Ff,Gda,Gf),
        TL:b(Hda,z),
        $i:b(Ida,Hf,Jda,If),
        Lv:b(Kda,Lda,[Mda,Nda],Jf+(a?Kf:z)),
        mA:b(Oda,Pda,Qda),
        DM:b(Rda,Sda,Tda),
        Tv:b(Uda,Vda,Wda,Lf+(a?Kf:z)),
        OV:b(Xda,z),
        Bca:b(Yda,Zda,j,$da), //insert
        Cca:b(aea,bea,j,cea),
        Aca:b(dea,eea,j,fea),
        oV:b(gea,z),
        Jl:b(hea,iea,jea,C),
        Ev:b(kea,lea),
        Fv:b(mea,nea),
        Ml:b(oea,pea,qea,E),
        Pv:b(rea,sea,j,tea),
        Qv:b(uea,vea,wea,xea),
        Rv:b(yea,zea,Aea,Bea),
        oA:b(Cea,Dea,j,Eea),
        nA:b(Fea,Gea,j,Hea),
        Ql:b(Iea,Jea,Kea,Mf),
        Yca:b(Lea,Mea,j,Nea),
        Zca:b(Oea,Mea,j,Nea),
        Wba:b(Pea,Qea,j,Rea),
        Hca:b(Sea,Tea,
            j,Uea),
        Kca:b(Vea,Wea,j,Xea),
        sX:b(Yea,z),
        OM:b(Zea,z),
        Uda:b($ea,afa,bfa),
        Vda:b(cfa,dfa,efa),
        Ho:b(ffa,gfa,hfa),
        Bo:b(ifa,jfa),
        fX:b(kfa,z),
        lF:b(lfa,mfa),
        bX:b(nfa,z),
        wV:b(ofa,z),
        Wz:b(pfa,qfa),
        Xz:b(rfa,sfa),
        Yz:b(tfa,ufa),
        Ao:b(vfa,wfa,xfa),
        Ur:b(yfa,zfa),
        vV:b(Afa,z),
        Cv:b(Bfa,Cfa,j,Dfa),
        $E:b(Efa,z,j,Ef),
        KU:b(Ffa,Gfa,j,If),
        Sz:b(Hfa,Ifa),
        aF:b(Jfa,Kfa),
        Pba:b(Lfa,z),
        lA:b(Mfa,afa),
        pF:b(Nfa,dfa),
        kA:b(Ofa,z),
        oF:b(Pfa,z),
        Nv:b(Qfa,z),
        Ov:b(Rfa,z),
        jA:b(Sfa,z),
        ZE:b(Tfa,z),
        SL:b(Ufa,z)
    };
	F.hA.Z(l);
	F.DM.Z(l);
	F.Jl.Ac(l);
	F.Ml.Ac(l);
    F.Ql.Ac(l);
	F.Ho.Ac(l);
	F.Bo.Ac(l);
	F.Bo.Z(l);
	if(!vc){
        zf(F.Yi,Vfa);
		zf(F.Wi,Wfa);
		zf(F.$i,Xfa)
    }
	ve&&zf(F.$i,Yfa);
	F.ZE.Z(l);
	F.Ov.Z(l);
	Nf={
        cA:Dca(Zfa,z,$fa)
    };
	ve&&zf(Nf.cA,aga)
}

var F={},Nf={};
function Of(a,b){
    this.Q=a;this.b={};this.M=b;this.a={};Cca||bga(a.J);this.F(a);for(var c in this.a){
        var d=this.a[c],e=[],g;for(g in d){
            var h=this.b[d[g]];e.push(h);h.Ac(l)
        }yca(e,i)
    }
	this.k={};
	Pf(this,F.Uz);
	Pf(this,F.Iv);
	Pf(this,F.kF);
	Pf(	this,F.dA);
	 Pf(this,F.eA);
	Pf(this,F.fA);
	Pf(this,F.Jv);
	Pf(this,F.gA);
	Pf(this,F.OPEN);
	Pf(this,F.Eo);Pf(this,F.rk);Pf(this,F.Fo);Pf(this,F.Mv);Pf(this,F.Pl);Pf(this,F.qF);Pf(this,F.pA);Pf(this,F.Wi);Pf(this,F.Yi);Pf(this,F.$i);Pf(this,F.Lv);Pf(this,F.mA);Pf(this,F.Tv);
    Pf(this,F.Wz);Pf(this,F.Xz);Pf(this,F.Ao);Pf(this,F.Yz);Pf(this,F.Ur);Pf(this,F.Jl);Pf(this,F.Ev);Pf(this,F.Fv);Pf(this,F.Ml);Pf(this,F.Pv);Pf(this,F.Qv);Pf(this,F.Rv);Pf(this,F.oA);Pf(this,F.nA);Pf(this,F.Ql);
	cga(this)
}
t(Of,x);function cga(a){
    for(var b in a.k)a.k[b].Aa(l);a.J(a.Q)
}function Pf(a,b){
    a.k[b.ra()]=b
}
var dga="docs-icon-",ega="docs-icon-img ",fga="kix-icon-accessible-img kix-icon-";
function G(a,b,c,d,e,g,h,k,m,n,p){
    e=e&&(Va(e,dga)?ega+e:fga+e);
	var r={};
	
	r.enabled=!k;
	r.hint=d;
	r.icon=e;
	r.keys=g;r.label=c;r.value=h;r.visible=i;r.stop_child_propagation=!!p;c=a.b[b]=new pf(b,r);n&&a.M.bind(c);
	if(m){
        a.a[m]||(a.a[m]={});a.a[m][sa(h)&&(wa(h)||ya(h)||za(h))?h:b]=b
    }
	return c
}

function Qf(a,b,c,d){
    a.k[b.ra()]||Pf(a,b);a.b[b.ra()]=b;c&&b.Aa(i);d&&a.M.bind(b)
}
function H(a,b){
    return a.b[b]||j
}function Rf(a,b,c){
    (a=H(a,b))&&a.Aa(c)
}var Sf="icon";
function Tf(a,b,c){
    if(a=H(a,b)){
        b=a.Ec(Sf);var d=!Wa(b,Kf);if(c&&!d)a.setProperty(Sf,b.substring(0,b.length-4));else!c&&d&&a.setProperty(Sf,b+Kf)
    }
}function gga(a,b,c){
    if(!a.a[b])return j;return H(a,a.a[b][c])
}function Uf(a,b,c){
    (a=gga(a,b,c))&&a.Ac(i)
}Of.prototype.A=function(){
    Of.z.A.call(this);delete this.Q;for(var a in this.b)!a in F&&y(this.b[a]);delete this.b;delete this.a;delete this.k
};function Vf(){}t(Vf,x);o=Vf.prototype;o.UN=i;o.Iu=j;o.HK=function(a){
    this.Iu=a
};o.addEventListener=function(a,b,c,d){
    Xd(this,a,b,c,d)
};o.removeEventListener=function(a,b,c,d){
    Zd(this,a,b,c,d)
};o.dispatchEvent=function(a){
    return fe(this,a)
};o.A=function(){
    Vf.z.A.call(this);be(this);this.Iu=j
};function Wf(a,b){
    this.a=a||1;this.b=b||Xf;this.k=s(this.Yaa,this);this.o=Ea()
}t(Wf,Vf);Wf.prototype.enabled=l;var Xf=ca.window;o=Wf.prototype;o.tb=j;o.setInterval=function(a){
    this.a=a;if(this.tb&&this.enabled){
        this.stop();this.start()
    }else this.tb&&this.stop()
};var Yf="tick";o.Yaa=function(){
    if(this.enabled){
        var a=Ea()-this.o;if(a>0&&a<this.a*0.8)this.tb=this.b.setTimeout(this.k,this.a-a);else{
            this.dispatchEvent(Yf);if(this.enabled){
                this.tb=this.b.setTimeout(this.k,this.a);this.o=Ea()
            }
        }
    }
};
o.start=function(){
    this.enabled=i;if(!this.tb){
        this.tb=this.b.setTimeout(this.k,this.a);this.o=Ea()
    }
};o.stop=function(){
    this.enabled=l;if(this.tb){
        this.b.clearTimeout(this.tb);this.tb=j
    }
};o.A=function(){
    Wf.z.A.call(this);this.stop();delete this.b
};function Zf(a,b,c){
    if(Aa(a)){
        if(c)a=s(a,c)
    }else if(a&&typeof a.handleEvent==na)a=s(a.handleEvent,a);else f(Error(Vba));return b>2147483647?-1:Xf.setTimeout(a,b||0)
}function $f(a){
    Xf.clearTimeout(a)
};function ag(a,b,c,d,e,g){
    this.b=a;this.M=b;this.k=c;this.F=d;this.J=e;this.o=g;this.a=[]
}t(ag,x);o=ag.prototype;o.init=function(){
    Zf(this.vT,this.b,this)
};o.log=function(a,b){
    this.a.push([a,b])
};o.OO=function(a,b){
    hga(this,b,a,this.F)
};function hga(a,b,c,d){
    if(sa(window.jstiming)){
        var e=new window.jstiming.Timer(c);e.name=d;for(d=0;d<b.length;d++){
            var g=a.o(b[d][0]),h=b[d][1];g&&e.tick(g,undefined,c+h)
        }window.jstiming.report(e,a.k,a.M)
    }
}
o.vT=function(){
    if(this.a.length>0){
        var a=this.a,b=Ea();hga(this,a,b,this.J);this.clear()
    }Zf(this.vT,this.b,this)
};o.clear=function(){
    this.a.length=0
};o.A=function(){
    ag.z.A.call(this);this.a=j
};function bg(){}bg.prototype.init=ha;bg.prototype.clear=ha;bg.prototype.OO=ha;bg.prototype.log=ha;var cg=")";function dg(a){
    return eval(ic+a+cg)
}function eg(a){
    return(new fg).ia(a)
}
function fg(){}
fg.prototype.ia=function(a){
    var b=[];gg(this,a,b);return b.join(z)
};
var hg="[",ig=",",jg="]",kg="{",lg="}";
function gg(a,b,c){
    switch(typeof b){
        case va:iga(a,b,c);break;case la:c.push(isFinite(b)&&!isNaN(b)?b:oa);break;case xa:c.push(b);break;case "undefined":c.push(oa);break;case ja:if(b==j){
            c.push(oa);break
        }if(ta(b)){
            var d=b.length;c.push(hg);for(var e=z,g=0;g<d;g++){
                c.push(e);gg(a,b[g],c);e=ig
            }c.push(jg);break
        }c.push(kg);d=z;for(e in b)if(b.hasOwnProperty(e)){
            g=b[e];if(typeof g!=na){
                c.push(d);iga(a,e,c);c.push(Ue);gg(a,g,c);d=ig
            }
        }c.push(lg);break;case na:break;default:f(Error("Unknown type: "+typeof b))
    }
}
var mg={
    '"':'\\"',
    "\\":"\\\\",
    "/":"\\/",
    "\u0008":"\\b",
    "\u000c":"\\f",
    "\n":"\\n",
    "\r":"\\r",
    "\t":"\\t",
    "\u000b":"\\u000b"
},jga=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,kga="\\u",lga="000",mga="00";function iga(a,b,c){
    c.push(Oa,b.replace(jga,function(d){
        if(d in mg)return mg[d];var e=d.charCodeAt(0),g=kga;if(e<16)g+=lga;else if(e<256)g+=mga;else if(e<4096)g+=Hd;return mg[d]=g+e.toString(16)
    }),Oa)
};var nga=document.location.protocol=="https:"?"https://gg.google.com/csi":"http://csi.gstatic.com/csi",ng={},qg="unknown";function oga(a){
    return a?a.toString():qg
};function rg(a){
    this.o=a||Ea;this.a={};this.b=[];this.k=new bg;this.saveInitialLoadStats=this.S$;
	this.getInitialLoadStats=this.t_
}
t(rg,x);
ia(rg);

var sg="1",tg="2",ug="3",vg="4",wg="5",xg="6",yg="7",pga="10",zg={
    gX:Hd,
    JU:sg,
    ZV:tg,
    PU:ug,
    $V:vg,
    NU:wg,
    MU:xg,
    rW:yg,
    IU:zd,
    EW:Oc,
    vU:pga
};o=rg.prototype;o.yI=l;o.Kg=j;o.Gb=function(){
    return this.yI
};o.Aa=function(a){
    this.yI=a
};var qga="tl",rga="lj",sga="ka",tga="cf",uga="slka",vga="al",wga="chv",xga="cov",yga="coe",zga="lm",Aga="pm";
o.S$=function(a){
    var b=a.el-a.sl,c=a.ejl-a.sjl,d=a.eac-a.sac,e=a.ecf-a.scf,g=a.easl-a.sasl,h=a.al-a.sl,k=a.chv-a.sl,m=a.cov-a.sl,n=a.coe-a.sl,p=a.ml,r=a.mp;this.Kg={};this.Kg[zg.gX]=b;this.Kg[zg.ZV]=c;this.Kg[zg.PU]=d;this.Kg[zg.IU]=e;this.Kg[zg.EW]=g;this.Kg[zg.vU]=h;this.Kg[zg.JU]=k;this.Kg[zg.NU]=m;this.Kg[zg.MU]=n;this.Kg[zg.$V]=p;this.Kg[zg.rW]=r;this.k.OO(a.sl,[[qga,b],[rga,c],[sga,d],[tga,e],[uga,g],[vga,h],[wga,k],[xga,m],[yga,n],[zga,p],[Aga,r]])
};

o.t_=function(){
    return eg(this.Kg)
};
function Ag(a,b,c){
    if(a.yI){
        var d=a.o();a.a[b]||(a.a[b]={});a.a[b][c]||(a.a[b][c]=[]);a=a.a[b][c];b=Pb(a,d);if(b<0)a.splice(-(b+1),0,d);else{
            for(c=a.length;b<c&&d==a[b];)b++;a.splice(b,0,d)
        }
    }
}function Bg(a,b,c){
    for(var d=0;d<c.length;d++)Ag(a,b,c[d])
}function Cg(a,b,c){
    if(a.Gb()){
        var d=a.a[b];if(d){
            d=d[c];if(!(!d||d.length==0)){
                d=d.pop();b={
                    kj:b,
                    name:c,
                    startTime:d,
                    duration:a.o()-d
                };c=a.b.length;for(d=0;d<c;d++)a.b[d](b)
            }
        }
    }
}function Dg(a,b,c){
    for(var d=0;d<c.length;d++)Cg(a,b,c[d])
}
o.A=function(){
    rg.z.A.call(this);delete this.b;delete this.a
};function Eg(a){
    this.k=a
}o=Eg.prototype;o.W=function(){
    return this.k
};o.shift=function(){
    return this
};o.ia=function(){
    var a={};a.loc_type=this.k;return a
};o.jn=function(a){
    return!a||this.k!=a.W()?1:0
};o.kb=function(a){
    return this.jn(a)==0
};function J(a,b){
    this.k=0;this.a=a;this.b=!!b
}t(J,Eg);J.prototype.ia=function(){
    var a=J.z.ia.call(this);a.si=this.a;a.aps=this.b;return a
};J.prototype.jn=function(a){
    var b=J.z.jn.call(this,a);if(b!=0)return b;if(a.W()==0)return this.a-a.a;return-1
};J.prototype.shift=function(a,b){
    return new J(this.a+a,q(b)?b:this.b)
};function Fg(a){
    this.R=a
}t(Fg,x);function Gg(a){
    for(var b={},c=0;c<a.length;c++)b[a[c]]=i;return b
}var Hg="\uefff",Ig="\ueffe",Jg="\u0003",Kg="\u0010",Lg="\u0012",Mg="\u001c",Ng="\u0011",Og=[Hg,Ig,Xa,Jg,Kg,Lg,Mg,Ng],Bga=Gg(Og),Pg="\u001d",Qg="\u001e",Rg="\u001b",Sg="\u0019",Tg="\u001f",Ug="\u001a",Vg="\u000c",Cga=Gg([Hg,Ig,Pg,Qg,Rg,Sg,Tg,Ug,Vg,Xa,Jg,Mg,Ng,Lg,Kg]),Dga=RegExp("[\u0000-\u0008\n\u000c-\u001f\ue000-\uf8ff]",qb),Ega=Gg([Hg,Ig,Jg,Kg,Lg,Mg,Ng]),Fga="For performance reasons, get indices of markers that are not paragraph markers or are not being tracked in the marker index cache is not allowed.";
Fg.prototype.b=function(a){
    a!=Xa&&this.R.log(Error(Fga));return Wg(this,a,0,Xg(this)-1)
};function Wg(a,b,c,d){
    var e=[];for(c=c;c<=d;c++){
        c=a.indexOf(b,c);if(c==-1||c>d)break;e.push(c)
    }return e
}function Yg(a,b){
    if(b>Xg(a)-1)return Zg(a,Xg(a)-1)+1;if(b<=1)return 1;var c=a.lastIndexOf(Xa,b-1);for(c=Math.max(c,0);c<b-1&&Bga[bh(a,c+1)];)c++;return c+1
}var Gga="Should not call getParagraphEndIndex with an index past the last spacer index.";
function ch(a,b){
    var c=Xg(a)-1;b>c&&a.R.log(Error(Gga));var d=a.indexOf(Xa,b);return d==-1||d>c?c:d
}var Hga="Should not call getStartOfSection with an out of bounds spacer index: ";function Zg(a,b){
    if(b<0){
        a.R.log(Error(Hga+b));return 0
    }return a.lastIndexOf(Jg,b)
}var Iga="Cannot check for paragraph start with an out of bounds spacer index: ";function dh(a,b){
    if(b<1){
        a.R.log(Error(Iga+b));return l
    }for(var c=b-1;c>=0;c--)if(eh(a,c))return fh(a,c);return i
}function fh(a,b){
    return bh(a,b)==Xa
}
function gh(a,b){
    return bh(a,b)==Jg
}function eh(a,b){
    return!Ega[bh(a,b)]
}var hh="\u000b",ih="\t";function jh(a){
    return a==Xa||a==hh||a==ih||a==bb
}function kh(a,b){
    return a.length>0?RegExp(hg+lb(a.join(z))+jg,b?z:qb):j
}Fg.prototype.A=function(){
    Fg.z.A.call(this);delete this.R
};function lh(a,b,c){
    return yb(a,function(d){
        return Pb(b,d,c)<0
    })
}function mh(a,b,c){
    for(var d in a)if(d.length!=0){
        var e=Number(d);if(!isNaN(e))if(b.call(c,e,a[e],a))break
    }
}function nh(a){
    var b=[];mh(a,function(c){
        b.push(c);return l
    });Sb(b);return b
}function oh(a,b,c){
    var d=[];mh(a,function(e,g,h){
        d[e>=b?e+c:e]=h[e];return l
    });return d
}
function ph(a,b,c){
    var d=a.length,e=c||Qb;if(d)var g=e(b,a[d-1]);if(d==0||g>0)a[d]=b;else if((d==1||e(b,a[d-2])>0)&&g<0){
        a[d]=a[d-1];a[d-1]=b
    }else return Haa(a,b,c);return i
};function qh(){
    this.a={};var a=ca._docs_flag_initialData;a&&Ra(this.a,a)
}ia(qh);qh.prototype.get=function(a){
    return this.a[a]
};function rh(a,b){
    var c=a.get(b);return wa(c)?c==kc||c==sg:!!c
}function sh(a,b){
    var c=a.get(b);return sa(c)?String(c):z
};function th(){
    return qh.V()
};function uh(){}t(uh,x);uh.prototype.update=function(a){
    for(var b in a){
        var c=a[b];q(c)&&this.Kb(b,c)
    }
};function vh(){}t(vh,uh);o=vh.prototype;o.ce=function(a){
    var b={},c;for(c in a){
        var d;if(this.vh(c)){
            var e=this.ea(c);d=j;if(e){
                d=a[c];d=sa(d)?e.ce(d):e.ia()
            }
        }else d=this.ea(c);b[c]=d
    }return b
};o.ea=function(){};o.vh=function(){
    return l
};o.qf=function(a){
    for(var b in a){
        var c=this.ea(b);if(this.vh(b)){
            if(!c.qf(a[b]))return l
        }else if(c!=a[b])return l
    }return i
};o.kb=function(a){
    if(!a)return l;if(this==a)return i;return this.qf(a.ia())
};function wh(a){
    this.a=a
}t(wh,vh);var xh="autogen",yh="cell",zh="comment",Ah="doco_anchor",Bh="equation",Ch="equation_function",Dh="footnote",Eh="headings",Fh="horizontal_rule",Gh="language",Hh="link",Ih="list",Jh="paragraph",Kh="row",Lh="spellcheck",Mh="tbl",K="text",
Jga={
    Bba:xh,
    Iba:yh,
    Oba:zh,
    Qba:Ah,
    Rba:Af,
   // Tba:Bh,
    Uba:Ch,
    bca:Dh,
    ica:Eh,
    sca:Fh,
    //YV:Gh,
    jF:Hh,
    hM:Ih,
    gda:Jh,
    qda:Kh,
    wda:Lh,
    Cda:Mh,
    TEXT:K
},Nh={},Kga={},Oh={},Ph=[],Qh={};o=wh.prototype;o.Yd=0;o.W=function(){
    return this.a
};o.fh=function(){
    return[]
};
o.Ef=function(){
    return l
};o.Wt=function(){
    return l
};o.jR=function(){
    return l
};o.AA=function(){
    return i
};o.Mj=function(){
    return i
};o.lw=function(){
    return i
};function Rh(a){
    Qh[a.a]||(Qh[a.a]=a.Me());return Qh[a.a]
}o.MB=function(){
    return[]
};o.Xm=function(a,b){
    var c=this.ea(a);return this.vh(a)?c.kb(b):c==b
};o.kb=function(a){
    if(!a)return l;if(this==a)return i;if(this.W()!=a.W())return l;for(var b=Rh(this),c=0;c<b.length;c++){
        var d=b[c];if(!this.Xm(d,a.ea(d)))return l
    }return i
};
function Sh(a,b){
    if(!b)return l;var c=a.Yd>0,d=b.Yd>0;if(c!=d)return l;if(!c&&!d)return a.kb(b);if(a==b)return i;if(a.W()!=b.W())return l;c=a.LB();for(d=0;d<c.length;d++){
        var e=c[d],g=a.Jm(e);if(g){
            var h=a.ea(g);g=b.ea(g);if(h&&g)continue;else if(h!=g)return l
        }if(!a.Xm(e,b.ea(e)))return l
    }return i
}o.Jm=function(){
    return j
};o.KB=function(){
    return{}
};o.LB=function(){
    return[]
};
function Th(a,b){
    var c=a.Ba();if(b.W()!=a.W()||!(a.Yd>0))return c;for(var d=a.LB(),e=0;e<d.length;e++){
        var g=d[e],h=c.Jm(g);if(h&&a.ea(h)){
            c.Kb(g,b.ea(g));c.Kb(h,l)
        }
    }return c
}o.Kb=function(a,b){
    if(this.KB()[a]){
        var c=this.ea(a);if(c&&!b)this.Yd--;else!c&&b&&this.Yd++
    }
};var Uh="ens";function Wh(a,b,c,d){
    if(rh(th(),Uh))if(b=Xh(b))for(var e in a){
        var g=b.Jm(e);if(g&&(d||a[g]==undefined))a[g]=!!c
    }
}function Yh(a,b,c){
    if(rh(th(),Uh))if(b=Xh(b)){
        b=b.KB();for(var d in b)a[d]=!!c
    }
}
function Lga(a,b){
    var c,d=j;mh(a,function(e,g){
        if(d){
            for(var h=d,k=c||h.ia(),m=Rh(h),n=0;n<m.length;n++){
                var p=m[n];h.Xm(p,g.ea(p))||(k[p]=undefined)
            }c=k
        }else{
            d=g;if(b){
                h=d;k=Rh(h);for(m=0;m<k.length;m++){
                    n=k[m];if(h.vh(n)||!h.Xm(n,b[n]))b[n]=undefined
                }h=b
            }else h=d.ia();c=h
        }return l
    });return c||{}
}function Zh(a){
    var b=a();Nh[b.W()]=b;Kga[b.W()]=a;if(b.Ef()){
        b=b.fh();for(var c=0;c<b.length;c++){
            var d=b[c];if(!Oh[d]){
                Ph.push(d);Oh[d]=[]
            }Oh[d].push(a)
        }
    }
}
function Xh(a){
    var b=Kga[a];if(!b)f(Error("The style for type: "+a+" is not registered."));return b()
}function $h(a){
    return(a=Nh[a])?a.Ef():i
}function ai(a){
    return(a=Nh[a])?a.jR():l
};function bi(){
    this.a={}
}t(bi,x);bi.prototype.Bm=function(){
    return this.a
};bi.prototype.A=function(){
    bi.z.A.call(this);delete this.a
};function Mga(){}t(Mga,Vf);var ci="stateChange";function di(a,b){
    B.call(this,ci,a);this.state=b
}t(di,B);function ei(){}t(ei,vh);o=ei.prototype;o.CC=j;o.Sf=function(){
    return this.CC
};var Nga="bg_c";o.Kb=function(a,b){
    switch(a){
        case Nga:this.CC=b
    }
};o.ea=function(a){
    switch(a){
        case Nga:return this.CC
    }ei.z.ea.call(this,a)
};o.ia=function(){
    var a={};a.bg_c=this.CC;return a
};function fi(a){
    this.a=Af;this.b=new ei;this.update(a||{})
}t(fi,wh);var gi="ds_b",hi="ds_mb",ii="ds_ml",ji="ds_mr",ki="ds_mt",li="ds_pw",mi="ds_ph",Oga={
    Dba:gi,
    Oca:hi,
    Pca:ii,
    Qca:ji,
    Rca:ki,
    fda:li,
    eda:mi
};o=fi.prototype;
o.Iq=72;
o.Hq=72;
o.Fq=72;
o.Gq=72;
o.Ty=612;  // ruler-inner的寬 612+72*2
o.Sy=G_config.contentHeight;  //792
function ni(a){
    return Le(ze.V(),a.Fq)
}function oi(a){
    return Le(ze.V(),a.Gq)
}function pi(a){
    return Le(ze.V(),a.Hq)
}function qi(a){
    return Le(ze.V(),a.Iq)
}function ri(a){
    return Le(ze.V(),a.Ty)
}function si(a){
    return a.Ty-a.Gq-a.Hq
}
function ti(a){
    return Le(ze.V(),si(a))
}function ui(a){
    return a.Sy-a.Iq-a.Fq
}function vi(a){
    return Le(ze.V(),a.Sy)
}o.Ef=function(){
    return i
};o.fh=function(){
    return[Jg]
};o.Kb=function(a,b){
    switch(a){
        case gi:this.b.update(b);break;case hi:this.Fq=b;break;case ii:this.Gq=b;break;case ji:this.Hq=b;break;case ki:this.Iq=b;break;case mi:this.Sy=b;break;case li:this.Ty=b
    }
};
o.ia=function(){
    var a={};a.ds_b=this.b.ia();a.ds_mb=this.Fq;a.ds_ml=this.Gq;a.ds_mr=this.Hq;a.ds_mt=this.Iq;a.ds_ph=this.Sy;a.ds_pw=this.Ty;return a
};o.ea=function(a){
    switch(a){
        case gi:return this.b;case hi:return this.Fq;case ii:return this.Gq;case ji:return this.Hq;case ki:return this.Iq;case mi:return this.Sy;case li:return this.Ty
    }return fi.z.ea.call(this,a)
};o.vh=function(a){
    switch(a){
        case gi:return i
    }return l
};o.Me=function(){
    return Ja(Oga)
};o.Ba=function(){
    return new fi(this.ia())
};
o.A=function(){
    fi.z.A.call(this);y(this.b);delete this.b
};Zh(function(){
    return new fi
});function wi(a,b){
    this.a=a;this.update(b)
}t(wi,uh);o=wi.prototype;o.HC=0;o.GC=0;o.PB=function(){
    return this.HC
};function xi(a){
    return Le(ze.V(),a.PB())
}o.JB=function(){
    return this.GC
};function yi(a){
    return Le(ze.V(),a.JB())
}o.W=function(){
    return this.a
};var Pga="i_ht",Qga="i_wth";o.Kb=function(a,b){
    switch(a){
        case Pga:this.GC=b;break;case Qga:this.HC=b
    }
};o.ce=function(a){
    var b={};b.eo_type=this.a;for(var c in a)switch(c){
        case Pga:b[c]=this.GC;break;case Qga:b[c]=this.HC
    }return b
};
o.ia=function(){
    var a={};a.eo_type=this.a;a.i_wth=this.HC;a.i_ht=this.GC;return a
};function zi(a){
    this.a=new Zb;this.b=a||j
}t(zi,x);o=zi.prototype;o.set=function(a,b){
    this.a.set(a,b)
};o.zf=function(){
    return this.a.zf()
};o.Sd=function(a){
    return this.a.Sd(a)
};o.remove=function(a){
    this.a.remove(a)
};o.execute=function(a){
    var b=this.a.get(a)||this.b;if(b)return b.apply(undefined,Array.prototype.slice.call(arguments,1));return j
};o.A=function(){
    zi.z.A.call(this);this.a.clear();delete this.a;delete this.b
};function Ai(a,b,c){
    this.o=a;this.k=b;c&&this.update(c)
}t(Ai,uh);var Bi="bookmark",Rga=[Bi];Ai.prototype.W=function(){
    return this.o
};Ai.prototype.ra=function(){
    return this.k
};var Ci=new zi;function Di(a,b,c){
    return Ci.execute(a,b,c)
}Ai.prototype.Kb=function(){};Ai.prototype.ce=function(){
    return{}
};Ai.prototype.ia=function(){
    return{}
};var Ei="header-footer";function Fi(a,b){
    Ai.call(this,Ei,a,b);this.b=b.hfe_hft
}t(Fi,Ai);Fi.prototype.ia=function(){
    var a={};a.hfe_hft=this.b;return a
};Ci.set(Ei,function(a,b){
    return new Fi(a,b)
});function Gi(a,b,c,d){
    this.top=a;this.right=b;this.bottom=c;this.left=d
}Gi.prototype.Ba=function(){
    return new Gi(this.top,this.right,this.bottom,this.left)
};Gi.prototype.contains=function(a){
    a=!this||!a?l:a instanceof Gi?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom;return a
};
function Sga(a,b){
    if(a==b)return i;if(!a||!b)return l;return a.top==b.top&&a.right==b.right&&a.bottom==b.bottom&&a.left==b.left
};function Hi(a,b,c,d){
    this.left=a;this.top=b;this.width=c;this.height=d
}Hi.prototype.Ba=function(){
    return new Hi(this.left,this.top,this.width,this.height)
};function Ii(a,b){
    if(a==b)return i;if(!a||!b)return l;return a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height
}
Hi.prototype.contains=function(a){
    return a instanceof Hi?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height
};function Ji(a,b){
    var c=Xc(a);if(c.defaultView&&c.defaultView.getComputedStyle)if(c=c.defaultView.getComputedStyle(a,j))return c[b]||c.getPropertyValue(b);return z
}function Ki(a,b){
    return Ji(a,b)||(a.currentStyle?a.currentStyle[b]:j)||a.style[b]
}var Li="position";function Mi(a){
    return Ki(a,Li)
}function Ni(a,b,c){
    var d,e=Ec&&(vc||gba)&&Nc(Ae);if(b instanceof nc){
        d=b.x;b=b.y
    }else{
        d=b;b=c
    }a.style.left=Oi(d,e);a.style.top=Oi(b,e)
}
function Pi(a){
    a=a?a.nodeType==9?a:Xc(a):document;var b;if(b=A){
        b=Vc(a);b=!bd(b.a)
    }if(b)return a.body;return a.documentElement
}function Tga(a){
    var b=a.getBoundingClientRect();if(A){
        a=a.ownerDocument;b.left-=a.documentElement.clientLeft+a.body.clientLeft;b.top-=a.documentElement.clientTop+a.body.clientTop
    }return b
}var Qi="fixed",Ri="absolute",Uga="static";
function Vga(a){
    if(A)return a.offsetParent;var b=Xc(a),c=Ki(a,Li),d=c==Qi||c==Ri;for(a=a.parentNode;a&&a!=b;a=a.parentNode){
        c=Ki(a,Li);d=d&&c==Uga&&a!=b.documentElement&&a!=b.body;if(!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||c==Qi||c==Ri))return a
    }return j
}var Si="TR";
function Ti(a){
    var b,c=Xc(a),d=Ki(a,Li),e=Ec&&c.getBoxObjectFor&&!a.getBoundingClientRect&&d==Ri&&(b=c.getBoxObjectFor(a))&&(b.screenX<0||b.screenY<0),g=new nc(0,0),h=Pi(c);if(a==h)return g;if(a.getBoundingClientRect){
        b=Tga(a);a=ud(Vc(c));g.x=b.left+a.x;g.y=b.top+a.y
    }else if(c.getBoxObjectFor&&!e){
        b=c.getBoxObjectFor(a);a=c.getBoxObjectFor(h);g.x=b.screenX-a.screenX;g.y=b.screenY-a.screenY
    }else{
        b=a;do{
            g.x+=b.offsetLeft;g.y+=b.offsetTop;if(b!=a){
                g.x+=b.clientLeft||0;g.y+=b.clientTop||0
            }if(Fc&&Mi(b)==
                Qi){
                g.x+=c.body.scrollLeft;g.y+=c.body.scrollTop;break
            }b=b.offsetParent
        }while(b&&b!=a);if(Dc||Fc&&d==Ri)g.y-=c.body.offsetTop;for(b=a;(b=Vga(b))&&b!=c.body&&b!=h;){
            g.x-=b.scrollLeft;if(!Dc||b.tagName!=Si)g.y-=b.scrollTop
        }
    }return g
}function Ui(a){
    var b=new nc;if(a.nodeType==1)if(a.getBoundingClientRect){
        var c=Tga(a);b.x=c.left;b.y=c.top
    }else{
        c=ud(Vc(a));a=Ti(a);b.x=a.x-c.x;b.y=a.y-c.y
    }else{
        b.x=a.clientX;b.y=a.clientY
    }return b
}
function Vi(a,b,c){
    if(b instanceof oc){
        c=b.height;b=b.width
    }else{
        if(c==undefined)f(Error("missing height argument"));c=c
    }a.style.width=Oi(b,i);a.style.height=Oi(c,i)
}var L="px";function Oi(a,b){
    if(typeof a==la)a=(b?Math.round(a):a)+L;return a
}var Wga="display",Wi="none",Xi="hidden",Yi="inline";
function Zi(a){
    var b=Dc&&!Nc(pga);if(Ki(a,Wga)!=Wi)return b?new oc(a.offsetWidth||a.clientWidth,a.offsetHeight||a.clientHeight):new oc(a.offsetWidth,a.offsetHeight);var c=a.style,d=c.display,e=c.visibility,g=c.position;c.visibility=Xi;c.position=Ri;c.display=Yi;if(b){
        b=a.offsetWidth||a.clientWidth;a=a.offsetHeight||a.clientHeight
    }else{
        b=a.offsetWidth;a=a.offsetHeight
    }c.display=d;c.position=g;c.visibility=e;return new oc(b,a)
}var Xga={},Yga="opacity",Zga="MozOpacity",$ga="filter",aha="alpha(opacity=";
function $i(a,b){
    var c=a.style;if(Yga in c)c.opacity=b;else if(Zga in c)c.MozOpacity=b;else if($ga in c)c.filter=b===z?z:aha+b*100+cg
}function aj(a,b){
    a.style.display=b?z:Wi
}var bj=Ec?"MozUserSelect":Fc?"WebkitUserSelect":j,bha="-$1",cj=";";function cha(a){
    var b=[];Ia(a,function(c,d){
        b.push(Xga[d]||(Xga[d]=d.replace(/([A-Z])/g,bha).toLowerCase()),Ue,c,cj)
    });return b.join(z)
};function dj(){
    this.a=[]
}t(dj,vh);o=dj.prototype;o.Oc=function(){
    return this.a
};var ej="cv";o.ce=function(a){
    for(var b in a)switch(b){
        case ej:return dha(this,a[b])
    }return{}
};var fj="delete",gj="insert",hj="reference",ij="set";function dha(a,b){
    var c=b.opIndex,d=b.opValue;switch(b.op){
        case fj:d=a.AK(a.a[c]);return jj(gj,c,d);case gj:return kj(c);case hj:d=a.a[c].ce(d);return lj(c,d);case ij:return a.ia()
    }return{}
}o.ea=function(a){
    switch(a){
        case ej:return this.a
    }
};
o.nv=function(a){
    a=a||1;if(a==1)return Mb(this.a);else{
        for(var b=[],c=0;c<this.a.length;c++)b.push(this.a[c].nv(a-1));return b
    }
};o.qf=function(a){
    for(var b in a)switch(b){
        case ej:return eha(this,a[b])
    }return l
};o.Kb=function(a,b){
    switch(a){
        case ej:var c=b.opIndex,d=b.opValue;switch(b.op){
            case fj:Kb(this.a,c);break;case gj:var e=this.cB(d);Ib(this.a,c,0,e);break;case hj:c<this.a.length&&this.a[c].update(d);break;case ij:Eb(this.a);for(c=0;c<d.length;c++){
                e=this.cB(d[c]);this.a.push(e)
            }
        }
    }
};
o.ia=function(){
    var a=zb(this.a,this.AK,this);return jj(ij,undefined,a)
};function eha(a,b){
    var c=b.opIndex,d=b.opValue;switch(b.op){
        case fj:case gj:return l;case hj:return a.a[c].qf(d);case ij:c=a.a;if(d.length!=c.length)return l;for(var e=0;e<c.length;e++)if(!a.zO(c[e],d[e]))return l;return i;default:return l
    }
}o.zO=function(a,b){
    return a==this.cB(b)
};o.cB=function(a){
    return a
};o.AK=function(a){
    return a
};o.bO=function(){};
o.A=function(){
    dj.z.A.call(this);for(var a=0;a<this.a.length;a++)this.bO(this.a[a]);delete this.a
};function jj(a,b,c){
    var d={};d.op=a;if(sa(b))d.opIndex=b;if(sa(c))d.opValue=c;a={};a.cv=d;return a
}function lj(a,b){
    for(var c=ta(a)?a:[a],d=c.length-1;d>=0;d--)b=jj(hj,c[d],b);return b
}function kj(a){
    return jj(fj,a)
};function mj(a){
    this.a=[];this.b=a
}t(mj,dj);o=mj.prototype;o.zO=function(a,b){
    return a.qf(b)
};o.cB=function(a){
    return this.b(a)
};o.AK=function(a){
    return a.ia()
};o.bO=function(a){
    y(a)
};o.A=function(){
    mj.z.A.call(this);delete this.b
};function nj(a){
    this.update(a)
}t(nj,vh);o=nj.prototype;o.dy=0;o.Rq=0;o.Gk=function(){
    return this.dy
};function oj(a){
    return Le(ze.V(),a.Rq)
}function fha(a){
    var b=ze.V();a=a/Me(b);return Le(b,(Math.floor(a/36)+1)*36)
}var pj="tbs_al",qj="tbs_of";o.Kb=function(a,b){
    switch(a){
        case pj:this.dy=b;break;case qj:this.Rq=b
    }
};o.ea=function(a){
    switch(a){
        case pj:return this.dy;case qj:return this.Rq
    }
};o.ce=function(a){
    var b={},c;for(c in a)switch(c){
        case pj:b[c]=this.dy;break;case qj:b[c]=this.Rq
    }return b
};
o.ia=function(){
    var a={};a.tbs_al=this.dy;a.tbs_of=this.Rq;return a
};function gha(a){
    return new nj(a)
};function rj(a){
    this.a=Jh;this.k=new mj(gha);this.b=hha;this.update(a||{})
}t(rj,wh);var iha="ps_",jha="_i";function sj(a){
    return iha+a+jha
}
var tj=sj(vga),xj=sj("hd"),yj=sj("ifl"),zj=sj("il"),Aj=sj("ir"),Bj=sj("ls"),Cj=sj("sa"),Dj=sj("sb"),Ej="ps_al",Fj="ps_hd",Gj="ps_hdid",Hj="ps_ifl",Ij="ps_il",Jj="ps_ir",Kj="ps_ls",Lj="ps_ltr",Mj="ps_sa",Nj="ps_sb",Oj="ps_ts",kha={
    xba:Ej,
    yba:tj,
    hca:Fj,
    qca:xj,
    pca:Gj,
    wca:Hj,
    xca:yj,
    yca:Ij,
    zca:zj,
    uca:Jj,
    vca:Aj,
    Ica:Kj,
    Jca:Bj,
    Nca:Lj,
    sda:Mj,
    tda:Cj,
    uda:Nj,
    vda:Dj,
    Dda:Oj
},Pj={};Pj.ps_al=tj;Pj.ps_hd=xj;Pj.ps_ifl=yj;Pj.ps_il=zj;Pj.ps_ir=Aj;Pj.ps_ls=Bj;Pj.ps_sa=Cj;Pj.ps_sb=Dj;var lha=Ka(Pj),mha=Ta(Ja(Pj));
rj.prototype.LB=function(){
    return lha
};rj.prototype.KB=function(){
    return mha
};rj.prototype.Jm=function(a){
    return Pj[a]
};var hha=i;o=rj.prototype;o.ay=0;o.vF=l;o.Ai=0;o.GH=l;o.Nt=z;o.Ci=0;o.SH=l;o.Rj=0;o.TH=l;o.$p=0;o.RH=l;o.Cy=1.15;o.pJ=l;o.dv=0;o.UK=l;o.Gz=0;o.VK=l;o.fh=function(){
    return[Xa]
};o.Ef=function(){
    return i
};o.Wt=function(){
    return i
};o.Gk=function(){
    return this.ay
};function Qj(a){
    return a.Ai
}function Rj(a){
    return Le(ze.V(),a.Ci)
}function Sj(a){
    return Le(ze.V(),a.Rj)
}
function Tj(a){
    return Le(ze.V(),a.$p)
}o.Ic=function(){
    return this.b
};function Uj(a){
    return a.k.Oc()
}
o.Kb=function(a,b){
    rj.z.Kb.call(this,a,b);switch(a){
        case Ej:this.ay=b;break;case tj:this.vF=b;break;case Fj:this.Ai=b;break;case xj:this.GH=b;break;case Gj:this.Nt=b;break;case Hj:this.Ci=b;break;case yj:this.SH=b;break;case Ij:this.Rj=b;break;case zj:this.TH=b;break;case Jj:this.$p=b;break;case Aj:this.RH=b;break;case Kj:this.Cy=b;break;case Bj:this.pJ=b;break;case Lj:this.b=b;break;case Mj:this.dv=b;break;case Cj:this.UK=b;break;case Nj:this.Gz=b;break;case Dj:this.VK=b;break;case Oj:this.k.update(b)
    }return j
};
o.ia=function(){
    var a={};a.ps_al=this.ay;a.ps_hd=this.Ai;a.ps_hdid=this.Nt;a.ps_ifl=this.Ci;a.ps_il=this.Rj;a.ps_ir=this.$p;a.ps_ltr=this.b;a.ps_ls=this.Cy;a.ps_sa=this.dv;a.ps_sb=this.Gz;a.ps_ts=this.k.ia();if(rh(th(),Uh)){
        a[tj]=this.vF;a[xj]=this.GH;a[yj]=this.SH;a[zj]=this.TH;a[Aj]=this.RH;a[Bj]=this.pJ;a[Cj]=this.UK;a[Dj]=this.VK
    }return a
};
o.ea=function(a){
    switch(a){
        case Ej:return this.ay;case tj:return this.vF;case Fj:return this.Ai;case xj:return this.GH;case Gj:return this.Nt;case Hj:return this.Ci;case yj:return this.SH;case Ij:return this.Rj;case zj:return this.TH;case Jj:return this.$p;case Aj:return this.RH;case Kj:return this.Cy;case Bj:return this.pJ;case Lj:return this.b;case Mj:return this.dv;case Cj:return this.UK;case Nj:return this.Gz;case Dj:return this.VK;case Oj:return this.k
    }return rj.z.ea.call(this,a)
};
o.vh=function(a){
    return a==Oj
};o.Me=function(){
    return Ja(kha)
};o.Ba=function(){
    return new rj(this.ia())
};o.A=function(){
    rj.z.A.call(this);y(this.k);delete this.k
};function qha(a){
    var b={};if(a<0||a>6)a=6;switch(a){
        case 0:b.ps_sa=0;b.ps_sb=0;break;case 1:b.ps_sa=6;b.ps_sb=24;break;case 2:b.ps_sa=4;b.ps_sb=18;break;case 3:b.ps_sa=4;b.ps_sb=14;break;case 4:b.ps_sa=2;b.ps_sb=12;break;case 5:b.ps_sa=2;b.ps_sb=11;break;default:b.ps_sa=2;b.ps_sb=10
    }return b
}
function rha(a){
    a=qha(a);if(rh(th(),Uh)){
        Yh(a,Jh,i);Wh(a,Jh,l,i)
    }return a
}Zh(function(){
    return new rj
});function Vj(a){
    this.a=K;this.update(a||{})
}t(Vj,wh);var sha="ts_";function Wj(a){
    return sha+a+jha
}var Xj=Wj("bgc"),Yj=Wj("bd"),Zj=Wj("fgc"),$j="ff",ak=Wj($j),bk=Wj("fs"),ck=Wj("it"),dk=Wj("st"),ek=Wj("un"),fk=Wj("va"),gk="ts_bgc",hk="ts_bd",ik="ts_fgc",jk="ts_ff",kk="ts_fs",lk="ts_it",mk="ts_st",nk="ts_un",ok="ts_va",tha={
    BU:gk,
    Eba:Xj,
    Jl:hk,
    Fba:Yj,
    dca:ik,
    eca:Zj,
    Ev:jk,
    $ba:ak,
    Fv:kk,
    aca:bk,
    Ml:lk,
    Fca:ck,
    Pv:mk,
    yda:dk,
    Ql:nk,
    Lda:ek,
    rX:ok,
    Rda:fk
},pk={};pk.ts_bgc=Xj;pk.ts_bd=Yj;pk.ts_it=ck;pk.ts_st=dk;
pk.ts_un=ek;pk.ts_fgc=Zj;pk.ts_ff=ak;pk.ts_fs=bk;pk.ts_va=fk;var uha=Ka(pk),vha=Ta(Ja(pk)),wha=[0,13,7,3,1,0,-1];o=Vj.prototype;o.LB=function(){
    return uha
};o.KB=function(){
    return vha
};o.Jm=function(a){
    return pk[a]||j
};o.Wl=l;o.GA=l;o.du=j;o.EA=l;var qk="#000000";o.Uw=qk;o.FB=l;var rk="Arial";o.rp=rk;o.AB=l;o.eh=11;o.BB=l;o.Uk=l;o.tC=l;o.Hz=l;o.wE=l;o.Lz=l;o.GE=l;var sk="nor";o.rq=sk;o.NE=l;o.Id=j;function tk(a){
    return a.rq!=sk?a.eh*0.6:a.eh
}o.Nm=function(){
    return this.rq
};
function uk(a){
    if(!a.Id)a.Id=cha(xha(a));return a.Id
}var vk="pt",wk="transparent",M="normal",yha="line-through",zha="baseline",xk="sub",yk="sup",Aha="super";
function xha(a){
    var b={};b.fontSize=tk(a)+vk;b.fontFamily=a.rp;b.color=a.Uw;b.backgroundColor=a.du==j?wk:a.du;b.fontWeight=a.Wl?C:M;b.fontStyle=a.Uk?E:M;var c=[];a.Lz&&c.push(Mf);a.Hz&&c.push(yha);b.textDecoration=c.length>0?c.join(bb):Wi;switch(a.rq){
        case sk:b.verticalAlign=zha;break;case xk:b.verticalAlign=xk;break;case yk:b.verticalAlign=Aha
    }return b
}
o.Kb=function(a,b){
    Vj.z.Kb.call(this,a,b);switch(a){
        case gk:if(this.du!=b){
            this.du=b;this.Id=j
        }break;case Xj:if(this.EA!=b){
            this.EA=b;this.Id=j
        }break;case hk:if(this.Wl!=b){
            this.Wl=b;this.Id=j
        }break;case Yj:if(this.GA!=b){
            this.GA=b;this.Id=j
        }break;case ik:if(this.Uw!=b){
            this.Uw=b;this.Id=j
        }break;case Zj:if(this.FB!=b){
            this.FB=b;this.Id=j
        }break;case jk:if(this.rp!=b){
            this.rp=b;this.Id=j
        }break;case ak:if(this.AB!=b){
            this.AB=b;this.Id=j
        }break;case kk:if(this.eh!=b){
            this.eh=b;this.Id=j
        }break;case bk:if(this.BB!=
            b){
            this.BB=b;this.Id=j
        }break;case lk:if(this.Uk!=b){
            this.Uk=b;this.Id=j
        }break;case ck:if(this.tC!=b){
            this.tC=b;this.Id=j
        }break;case mk:if(this.Hz!=b){
            this.Hz=b;this.Id=j
        }break;case dk:if(this.wE!=b){
            this.wE=b;this.Id=j
        }break;case nk:if(this.Lz!=b){
            this.Lz=b;this.Id=j
        }break;case ek:if(this.GE!=b){
            this.GE=b;this.Id=j
        }break;case ok:if(this.rq!=b){
            this.rq=b;this.Id=j
        }break;case fk:if(this.NE!=b){
            this.NE=b;this.Id=j
        }
    }
};
function Bha(a,b){
    var c={};c.ts_bgc=a.du;c.ts_bd=a.Wl;c.ts_fgc=a.Uw;c.ts_fs=a.eh;c.ts_ff=a.rp;c.ts_it=a.Uk;c.ts_st=a.Hz;c.ts_un=a.Lz;c.ts_va=a.rq;if(rh(th(),Uh)&&!b){
        c[Xj]=a.EA;c[Yj]=a.GA;c[Zj]=a.FB;c[bk]=a.BB;c[ak]=a.AB;c[ck]=a.tC;c[dk]=a.wE;c[ek]=a.GE;c[fk]=a.NE
    }return c
}o.ia=function(){
    return Bha(this)
};function zk(a){
    return Bha(a,i)
}
o.ea=function(a){
    switch(a){
        case gk:return this.du;case Xj:return this.EA;case hk:return this.Wl;case Yj:return this.GA;case ik:return this.Uw;case Zj:return this.FB;case jk:return this.rp;case ak:return this.AB;case kk:return this.eh;case bk:return this.BB;case lk:return this.Uk;case ck:return this.tC;case mk:return this.Hz;case dk:return this.wE;case nk:return this.Lz;case ek:return this.GE;case ok:return this.rq;case fk:return this.NE
    }return Vj.z.ea.call(this,a)
};o.Me=function(){
    return Ja(tha)
};
o.kb=function(a){
    if(!a)return l;if(this==a)return i;if(this.W()!=a.W())return l;if(this.Yd>0||a.Yd>0)return Vj.z.kb.call(this,a);return uk(this)==uk(a)
};o.Ba=function(){
    return new Vj(this.ia())
};function Ak(a){
    var b={};b.ts_un=l;b.ts_fgc=qk;rh(th(),Uh)&&a&&Wh(b,K,i);return b
}function Cha(a,b){
    var c={},d=b?b.eh:11;if(a<0||a>6)a=6;c.ts_fs=d+wha[a];c.ts_bd=a!=0||l;return c
}Zh(function(){
    return new Vj
});function Bk(a){
    this.a=new Vj;this.update(a)
}t(Bk,uh);var Dha=[3,5,7],Eha=[0,1,2];o=Bk.prototype;o.Om=0;o.zI=0;o.AI=0;o.uE=1;function Ck(a){
    return a.Om
}function Dk(a){
    switch(a.Om){
        case 3:case 4:case 5:case 6:case 7:return i;default:return l
    }
}var Fha="b_gt",Gha="b_ts",Hha="b_ifl",Iha="b_il",Jha="b_sn";o.Kb=function(a,b){
    switch(a){
        case Fha:this.Om=b;break;case Gha:this.a.update(b);break;case Hha:this.zI=b;break;case Iha:this.AI=b;break;case Jha:this.uE=b
    }
};
o.ce=function(a){
    var b={},c;for(c in a)switch(c){
        case Fha:b.b_gt=this.Om;break;case Gha:b.b_ts=this.a.ia();break;case Hha:b.b_ifl=this.zI;break;case Iha:b.b_il=this.AI;break;case Jha:b.b_sn=this.uE
    }return b
};o.ia=function(){
    var a={};a.b_gt=this.Om;a.b_ts=this.a.ia();a.b_ifl=this.zI;a.b_il=this.AI;a.b_sn=this.uE;return a
};o.A=function(){
    Bk.z.A.call(this);y(this.a);delete this.a
};function Ek(a,b){
    Ai.call(this,Ih,a);this.b=Fk(i,(new Vj).ia());this.update(b)
}t(Ek,Ai);var Gk=j;function Hk(a,b){
    return a.b[b]||new Bk({})
}var Kha="le_nb";Ek.prototype.Kb=function(a,b){
    switch(a){
        case Kha:for(var c in b)this.b[Lha(c)].update(b[c])
    }
};Ek.prototype.ce=function(a){
    var b={},c=this.b,d={};a=a.le_nb;for(var e in a){
        var g=c[Lha(e)];d[e]=g.ce(a[e])
    }b.le_nb=d;return b
};var Ik="nl_";Ek.prototype.ia=function(){
    for(var a=this.b,b={},c=0;c<a.length;c++)b[Ik+c]=a[c].ia();a={};a.le_nb=b;return a
};
Ek.prototype.A=function(){
    Ek.z.A.call(this);for(var a in this.b)y(this.b[Number(a)]);delete this.b
};function Fk(a,b,c,d){
    var e=[];a=a?Dha:Eha;for(var g=0;g<=8;g++){
        var h=36*g,k={};k.b_gt=c==8||c==9?c:sa(c)&&g==d?c:a[g%a.length];k.b_ts=b;k.b_ifl=18+h;k.b_il=36+h;e[g]=new Bk(k)
    }return e
}function Lha(a){
    if(!Gk)for(var b=Gk={},c=0;c<=8;c++)b[Ik+c]=c;return Gk[a]
}Ci.set(Ih,function(a,b){
    return new Ek(a,b)
});function Jk(a){
    this.a=Ih;this.update(a||{})
}t(Jk,wh);var Kk="ls_id",Lk="ls_nest",Mha={
    Lca:Kk,
    Wca:Lk
};o=Jk.prototype;o.Yb=j;o.Rb=0;o.fh=function(){
    return[Xa]
};o.Ef=function(){
    return i
};o.Wt=function(){
    return i
};function Mk(a){
    return a.Yb
}o.Kb=function(a,b){
    switch(a){
        case Kk:this.Yb=b;break;case Lk:this.Rb=b
    }
};o.ia=function(){
    var a={};a.ls_nest=this.Rb;a.ls_id=this.Yb;return a
};o.ea=function(a){
    switch(a){
        case Lk:return this.Rb;case Kk:return this.Yb
    }return Jk.z.ea.call(this,a)
};o.Me=function(){
    return Ja(Mha)
};
o.Ba=function(){
    return new Jk(this.ia())
};Zh(function(){
    return new Jk
});var Nha=RegExp("[\\u0028\\u005B\\u00AB\\u2018\\u201C\\u3008\\u300A\\u300C\\u300E\\u3010\\u3014\\u3016\\u3018\\u301D\\uFF08\\uFF3B\\uFF5F\\uFF5B]"),Oha=RegExp("[\\u002C\\u0029\\u005D\\u00BB\\u2019\\u201D\\u3001\\u3009\\u300B\\u300D\\u300F\\u3011\\u3015\\u3017\\u3019\\u301F\\u3005\\u303B\\u30FC\\u30FD\\u30FE\\u30A1\\u30A3\\u30A5\\u30A7\\u30A9\\u30C3\\u30E3\\u30E5\\u30E7\\u30EE\\u30F5\\u30F6\\u3041\\u3043\\u3045\\u3047\\u3049\\u3063\\u3083\\u3085\\u3087\\u308E\\u3095\\u3096\\u31F0\\u31F1\\u31F2\\u31F3\\u31F4\\u31F5\\u31F6\\u31F7\\u31F8\\u31F9\\u31FA\\u31FB\\u31FC\\u31FD\\u31FE\\u31FF\\u2010\\u2013\\u301C\\u30A0\\u0021\\u002E\\u003A\\u003B\\u003F\\u203C\\u2047\\u2048\\u2049\\u3001\\u3002\\u30FB\\uFF01\\uFF1F\\uFF09\\uFF3D\\uFF5D\\uFF60]"),
Pha=RegExp("[\\u2F00-\\u30FF\\u3190-\\u319F\\u31C0-\\u3AEF\\u4E00-\\u9FCF\\uF900-\\uFAFF\\uFE10-\\uFE1F\\uFE30-\\uFE4F\\uFF00-\\uFFEF]"),Qha=RegExp("[\\u3000-\\u30FF\\u3200-\\u9FFF\\uF900-\\uFAFF\\uFF00-\\uFFEF]");for(var Rha={
    "!":i,
    "@":i,
    "#":i,
    $:i,
    "%":i,
    "^":i,
    "&":i,
    "*":i,
    "(":i,
    ")":i,
    "+":i,
    "=":i,
    "\\":i,
    "|":i,
    "{":i,
    "}":i,
    "[":i,
    "]":i,
    ";":i,
    ":":i,
    "'":i,
    '"':i,
    "/":i,
    "?":i,
    ".":i,
    ",":i,
    "<":i,
    ">":i,
    "~":i,
    "`":i,
    "\u201c":i,
    "\u201d":i,
    "\u00bf":i,
    "\u00a1":i
},Sha={
    "\u2018":i,
    "\u2019":i,
    "-":i
},Tha=[Pg,Qg,Rg,Sg,Tg,Ug,Vg],Uha={},Ok=0;Ok<Tha.length;Ok++)Uha[Tha[Ok]]=i;var Pk="s";function Qk(a,b){
    for(var c=a;c<Xg(b);c++){
        if(c!=a&&Rk(c,b))break;if(Sk(c,b,i)&&Tk(c+1,b)!=Pk)return c+1
    }return c
}
function Uk(a,b){
    for(var c=a-1;c>=0;c--)if(Rk(c,b)||Vk(c,b))return c;return 0
}var Wk="p",Xk="w";function Tk(a,b){
    return jh(bh(b,a))||!eh(b,a)?Pk:bh(b,a)in Rha?Wk:Uha[bh(b,a)]?ec:Xk
}function Sk(a,b,c){
    var d=c?a+1:a-1;return d<0||d>=Xg(b)||Rk(a,b)||Tk(a,b)!=Tk(d,b)||Qha.test(bh(b,c?a+1:a))
}function Yk(a,b){
    for(var c=a,d=Xg(b),e=a;e<d;e++)if(e==d-1||Sk(e,b,i)&&!jh(bh(b,e))){
        c=e+1;break
    }return c
}function Vha(a,b){
    for(var c=a;c>=0;c--)if(Sk(c,b,l))return c;return a
}
function Vk(a,b){
    if(Rk(a,b))return i;return Sk(a,b,l)&&Tk(a,b)!=Pk
}function Rk(a,b){
    return fh(b,a)||bh(b,a)==ih||!eh(b,a)
}function Zk(a,b,c){
    var d=b.start,e=b.end;if(Vk(d,a)&&Yk(e,a)==e+1&&Tk(d,a)!=Pk&&Tk(e,a)!=Pk&&Tk(d-1,a)==Pk)if(bh(a,e+1)==bb)return new Ha(d,e+1);else if(!fh(a,e+1)&&bh(a,d-1)==bb&&!c)return new Ha(d-1,e);return b.Ba()
};function $k(a,b,c){
    b=al(a,b);return bl(a.o,c,b).length>0
};function cl(a){
    var b=dl(a);return $k(a,b,zh)||$k(a,b,Dh)
};var el=[0,2];function fl(a,b){
    if(!b||b.start!=b.end)return j;return Wha(a,el,b.start)
}function Xha(a,b){
    if(b.W()==0)return Wha(a,el,b.a);else for(var c=a.pb(b.ra()),d=c.a,e=0;e<el.length;e++)if(d.W()==el[e])return c;return j
}function Wha(a,b,c){
    c=bl(a.o,Yi,c);if(c.length>0){
        a=a.pb(c[0]);if(a.W()==Yi){
            c=a.a;for(var d=0;d<b.length;++d)if(c.W()==b[d])return a
        }
    }return j
};var Yha=kh([Ug,Qg,hh,Jg,ih,Kg,Ng,Lg,Mg,Vg,Xa]);function Zha(a,b){
    var c=a.lastIndexOf(Ug,b-1);if(c<1)return j;var d=a.indexOf(Qg,c);return b<=d?new Ha(c,d):j
}function gl(a,b){
    return!!Zha(a,b)
}
function $ha(a,b){
    b=b.Ba();var c=a.indexOf(Ug,b.start),d=a.indexOf(Qg,b.start);if(c<1&&d<1)return b;var e=c>1&&c<d?c:b.start;c=a.lastIndexOf(Ug,b.end);d=a.lastIndexOf(Qg,b.end);var g=c>1&&c<d?d:b.end;var h=c=0;d=1;for(e=e;e<=g;e++){
        var k=bh(a,e);switch(k){
            case Ug:case Sg:h++;break;case Qg:case Rg:h--;break;case Pg:if(h<d)d=h
        }if(h<c)c=h;if(k==Qg&&e<g){
            e=a.indexOf(Ug,e);if(e<1)break;e=e-1
        }
    }g=-c;h=h-c;if(d==c){
        g++;h++
    }c=b;d=g;for(h=h;d>0&&c.start>0;){
        c.start--;g=bh(a,c.start);switch(g){
            case Ug:case Sg:d--;
                break;case Qg:case Rg:d++
        }
    }for(d=Xg(a);h>0&&c.end<d;){
        c.end++;g=bh(a,c.end);switch(g){
            case Ug:case Sg:h++;break;case Qg:case Rg:h--
        }
    }return b
};function hl(a){
    this.a=a
}t(hl,vh);hl.prototype.W=function(){
    return this.a
};hl.prototype.Kb=function(){};var aia="lnk_type";hl.prototype.ea=function(a){
    switch(a){
        case aia:return this.a
    }
};hl.prototype.ia=function(){
    var a={};a.lnk_type=this.a;return a
};function il(a){
    this.a=0;this.update(a)
}t(il,hl);o=il.prototype;o.KC=z;o.xd=function(){
    return this.KC
};var bia="ulnk_url";o.ea=function(a){
    switch(a){
        case bia:return this.KC
    }return il.z.ea.call(this,a)
};var jl="http://";o.Kb=function(a,b){
    switch(a){
        case bia:var c=b;if(c&&c.charAt(0)!=Ye&&!bf(1,c))c=jl+c;this.KC=c;break;default:il.z.Kb.call(this,a,b)
    }
};o.ia=function(){
    var a=il.z.ia.call(this);a.ulnk_url=this.KC.toString();return a
};var cia="www.google.com",dia="/url",kl="q";function ll(a){
    var b=a;try{
        if(af(bf(3,a))==cia&&af(bf(5,a))==dia)b=mf(a,kl)
    }catch(c){}return b?b:z
};var ml=/^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i,eia={
    ".":i,
    ",":i,
    " ":i,
    '"':i,
    "'":i,
    "-":i,
    "\u201c":i,
    "\u201d":i,
    "\u2018":i,
    "\u2019":i
},fia={
    ac:i,
    ad:i,
    ae:i,
    af:i,
    ag:i,
    ai:i,
    al:i,
    am:i,
    an:i,
    ao:i,
    aq:i,
    ar:i,
    as:i,
    at:i,
    au:i,
    aw:i,
    ax:i,
    az:i,
    ba:i,
    bb:i,
    bd:i,
    be:i,
    bf:i,
    bg:i,
    bh:i,
    bi:i,
    bj:i,
    bm:i,
    bn:i,
    bo:i,
    br:i,
    bs:i,
    bt:i,
    bv:i,
    bw:i,
    by:i,
    bz:i,
    ca:i,
    cc:i,
    cd:i,
    cf:i,
    cg:i,
    ch:i,
    ci:i,
    ck:i,
    cl:i,
    cm:i,
    cn:i,
    co:i,
    cr:i,
    cu:i,
    cv:i,
    cx:i,
    cy:i,
    cz:i,
    de:i,
    dj:i,
    dk:i,
    dm:i,
    "do":i,
    dz:i,
    ec:i,
    ee:i,
    eg:i,
    er:i,
    es:i,
    et:i,
    eu:i,
    fi:i,
    fj:i,
    fk:i,
    fm:i,
    fo:i,
    fr:i,
    ga:i,
    gb:i,
    gd:i,
    ge:i,
    gf:i,
    gg:i,
    gh:i,
    gi:i,
    gl:i,
    gm:i,
    gn:i,
    gp:i,
    gq:i,
    gr:i,
    gs:i,
    gt:i,
    gu:i,
    gw:i,
    gy:i,
    hk:i,
    hm:i,
    hn:i,
    hr:i,
    ht:i,
    hu:i,
    id:i,
    ie:i,
    il:i,
    im:i,
    "in":i,
    io:i,
    iq:i,
    ir:i,
    is:i,
    it:i,
    je:i,
    jm:i,
    jo:i,
    jp:i,
    ke:i,
    kg:i,
    kh:i,
    ki:i,
    km:i,
    kn:i,
    kp:i,
    kr:i,
    kw:i,
    ky:i,
    kz:i,
    la:i,
    lb:i,
    lc:i,
    li:i,
    lk:i,
    lr:i,
    ls:i,
    lt:i,
    lu:i,
    lv:i,
    ly:i,
    ma:i,
    mc:i,
    md:i,
    me:i,
    mg:i,
    mh:i,
    mk:i,
    ml:i,
    mm:i,
    mn:i,
    mo:i,
    mp:i,
    mq:i,
    mr:i,
    ms:i,
    mt:i,
    mu:i,
    mv:i,
    mw:i,
    mx:i,
    my:i,
    mz:i,
    na:i,
    nc:i,
    ne:i,
    nf:i,
    ng:i,
    ni:i,
    nl:i,
    no:i,
    np:i,
    nr:i,
    nu:i,
    nz:i,
    om:i,
    pa:i,
    pe:i,
    pf:i,
    pg:i,
    ph:i,
    pk:i,
    pl:i,
    pm:i,
    pn:i,
    pr:i,
    ps:i,
    pt:i,
    pw:i,
    py:i,
    qa:i,
    re:i,
    ro:i,
    rs:i,
    ru:i,
    rw:i,
    sa:i,
    sb:i,
    sc:i,
    sd:i,
    se:i,
    sg:i,
    sh:i,
    si:i,
    sj:i,
    sk:i,
    sl:i,
    sm:i,
    sn:i,
    so:i,
    sr:i,
    st:i,
    su:i,
    sv:i,
    sy:i,
    sz:i,
    tc:i,
    td:i,
    tf:i,
    tg:i,
    th:i,
    tj:i,
    tk:i,
    tl:i,
    tm:i,
    tn:i,
    to:i,
    tp:i,
    tr:i,
    tt:i,
    tv:i,
    tw:i,
    tz:i,
    ua:i,
    ug:i,
    uk:i,
    um:i,
    us:i,
    uy:i,
    uz:i,
    va:i,
    vc:i,
    ve:i,
    vg:i,
    vi:i,
    vn:i,
    vu:i,
    wf:i,
    ws:i,
    ye:i,
    yt:i,
    yu:i,
    za:i,
    zm:i,
    zw:i,
    tel:i,
    biz:i,
    com:i,
    edu:i,
    gov:i,
    "int":i,
    mil:i,
    net:i,
    org:i,
    pro:i
};
function gia(a){
    if(a.Ha().Ua().W()!=0)return j;return nl(a.Ka(Hh,dl(a)))
}function ol(a,b){
    var c=pl(a.Ha()),d,e;if(c){
        d=nl(a.Ka(Hh,c.start));e=nl(a.Ka(Hh,c.end));d=d?ql(a.k,Hh,c.start):c.start;e=e?e=rl(a,Hh,c.end):c.end;c=0
    }else{
        c=a.Wa();if(nl(a.Ka(Hh,c))){
            d=ql(a.k,Hh,c);e=rl(a,Hh,c);c=1
        }else{
            e=d=c;c=2
        }
    }b.start=d;b.end=e;return c
}function hia(a,b){
    var c=nl(a.Ka(Hh,b.start));if(c)return c;c=rl(a,Hh,b.start);return c+1>b.end?j:nl(a.Ka(Hh,c+1))
}function sl(a){
    return a.charAt(0)==Ye
}
var iia="mailto",jia="aim",tl="/";function ul(a){
    if(/\s/.test(a))return l;if(/\.\.+/.test(a))return l;if(ml.test(a))return l;if(eia[a.charAt(a.length-1)])return l;var b=l;if(!/^[^:\/?#.]+:/.test(a)){
        a=jl+a;b=i
    }a=a.match($e);if(vb([iia,jia],a[1])!=-1)return i;var c=a[3];if(!c||b&&c.indexOf(ea)==-1||c!=c.toLowerCase()&&c!=c.toUpperCase())return l;if(b){
        b=c.substring(c.lastIndexOf(ea)+1);if(!fia[b])return l
    }b=a[5];return!b||b.indexOf(tl)==0
}var vl="mailto:";
function kia(a){
    var b=ul(a),c=!b&&ml.test(a);if(!b&&!c)return z;if(c&&!bf(1,a))return vl+a;return a
}var wl="kix-insert-link";function lia(a,b,c){
    var d={};d.url=b;if(c)d.text=c;yf(H(a,wl),d)
};function xl(a,b,c,d){
    c=a.b(c);if(!c.length)return l;c=Pb(c,b);if(c>=0)return i;c=-c-1;a=a.b(d);b=Pb(a,b);if(b>=0)return i;return c>-b-1
};function yl(a,b,c){
    return Math.min(Math.max(a,b),c)
};function zl(a){
    return Al(a,a.Wa())
}function Al(a,b){
    return xl(a.fa(),b,Kg,Ng)
}function mia(a,b,c,d){
    a=a.fa();var e=Xg(a),g=0,h=bh(a,b);if(h==Kg){
        h=c.call(d,h,b);if(h==l)return b;b++
    }for(b=b;b<=e;b++){
        h=bh(a,b);switch(h){
            case Kg:g++;break;case Ng:g--;if(g==0)continue
        }if(g<=0){
            h=c.call(d,h,b);if(g<0||h==l)return b
        }
    }return Xg(a)
}
function Bl(a,b,c,d){
    a=a.fa();var e=0,g=bh(a,b);if(g==Ng){
        g=c.call(d,g,b);if(g==l)return b;b--
    }for(b=b;b>0;b--){
        g=bh(a,b);switch(g){
            case Ng:e++;break;case Kg:e--;if(e==0)continue
        }if(e<=0){
            g=c.call(d,g,b);if(e<0||g==l)return b
        }
    }return 1
}var nia=" is not inside a table.";
function Cl(a,b){
    var c;var d=a.fa();c=d.b(Kg);if(c.length){
        d=d.b(Ng);var e=Pb(c,b);if(e>=0)c=c[e];else{
            e=-e-2;var g=Pb(d,b);if(g<0)g=-g-2;else g--;if(g>=e)c=-1;else{
                for(;e>=0;){
                    if(g<0||e==0)break;if(c[e]>d[g])break;e--;g--
                }c=c[e]
            }
        }
    }else c=1;if(c<0)f(Error("TableUtil.getTableStartIndex: Spacer index "+c+nia));return c
}
function Dl(a,b){
    var c;var d=a.fa();c=d.b(Kg);if(c.length){
        d=d.b(Ng);var e=Pb(c,b);if(e<0)e=-e-2;e++;var g=Pb(d,b);if(g<0){
            g=-g-1;if(g>=e)c=-1;else{
                for(;g<d.length;){
                    if(e>=c.length)break;if(d[g]<c[e])break;e++;g++
                }c=d[g]
            }
        }else c=d[g]
    }else c=1;if(c<0)f(Error("TableUtil.getTableEndIndex: Spacer index "+c+nia));return c
}
function oia(a,b){
    if(bh(a.fa(),b)!=Kg)f(Error("tableStartIndex should be a table start marker."));var c=0;mia(a,b,function(d){
        switch(d){
            case Lg:c=0;break;case Mg:c++
        }return i
    });return c
}function pia(a,b,c){
    var d=a.fa(),e=bh(d,b);if(e==c)return b;e==Kg&&b--;e=Cl(a,b);for(var g=b;;){
        bh(d,g)==Ng&&g--;b=d.lastIndexOf(Ng,g);if(b<0)b=1;g=d.lastIndexOf(c,g);if(g<e)break;if(g>b)return g;g=Cl(a,b-1)
    }return 1
}function El(a,b){
    return pia(a,b,Lg)
}
function qia(a,b,c){
    var d=a.fa();c.indexOf(bh(d,b))>=0&&b++;for(var e=Dl(a,b),g=b;;){
        b=d.indexOf(Kg,g);if(b<0||b>e)b=Xg(d)-1;var h=d.indexOf(Ng,g);if(h>e+1)h=-1;var k;k=d;g=g;for(var m=c,n=e,p=[],r=0;r<m.length;r++){
            var u=k.indexOf(m.charAt(r),g);if(u>0&&(!n||u<n))p.push(u)
        }k=p.length>0?Math.min.apply(j,p):-1;var w;if(h>=0&&k>=0)w=Math.min(h,k);else if(h>=0)w=h;else if(k>=0)w=k;if(!w)break;if(w<b)return w-1;g=Dl(a,b)+1
    }return e-1
}function Fl(a,b){
    return qia(a,b,Lg)
}
function Gl(a,b){
    return pia(a,b,Mg)
}var ria="\u0012\u001c";function Hl(a,b){
    return qia(a,b,ria)
}function sia(a,b){
    var c=0;Bl(a,b,function(d){
        d==Lg&&c++;return i
    });return c-1
}function tia(a,b){
    var c=a.Ha();if(c.Ua().W()!=0)return b;c=c.a.a;if(b>=c){
        c=a.fa();if(bh(c,b-1)==Ng)for(b++;!eh(c,b);)b++;return b
    }if(!Al(a,b))return b;c=c-1;if(b==c)return b;var d=Hl(a,b);if(c<=d)return b;var e=Fl(a,b);if(c<=e)return d+2;return e+3
}
function uia(a,b){
    var c=a.Ha();if(c.Ua().W()!=0)return b;c=c.a.a;if(b<c)return b;if(!Al(a,b))return b;var d=Gl(a,b);if(c>=d)return b;var e=El(a,b);if(c>=e)return d-1;return bh(a.fa(),e-1)==Kg?e-2:e-1
}
function via(a,b,c){
    var d=Al(a,b),e=Al(a,c+1);if(d&&e){
        var g=Cl(a,b),h=Cl(a,c);if(g==h){
            a:{
                h=b;e=c;c=El(a,h);d=El(a,e);if(c==d){
                    b=Gl(a,h);g=Gl(a,e);if(b>c&&g>d){
                        if(b!=g){
                            a=Hl(a,e);a={
                                start:b+1,
                                end:a,
                                Bu:i,
                                Nq:i
                            }
                        }else a={
                            start:h,
                            end:e,
                            Bu:l,
                            Nq:l
                        };break a
                    }
                }a=Fl(a,e);a={
                    start:c+2,
                    end:a,
                    Bu:i,
                    Nq:i
                }
            }return a
        }else if(g>h){
            b=b;c=c;e=l;d=El(a,c);g=b;if(d<b){
                d=Gl(a,c);if(d<b){
                    h=wia(a,b,h);g=El(a,h);b=g+2
                }else{
                    c=Hl(a,c);e=i;for(g=d;g>b;)g=Gl(a,g-1);b=g+1
                }
            }else{
                c=Fl(a,c);e=i;for(g=d;g>b;)g=El(a,g-1);b=g+2
            }return{
                start:b,
                end:c,
                Bu:i,
                Nq:e
            }
        }else{
            h=Dl(a,b);g=Dl(a,c);if(h>g){
                b=b;e=c;c=l;d=Fl(a,b);g=e;if(d>e){
                    d=Hl(a,b);if(d>e){
                        h=xia(a,e,h);g=Fl(a,h)
                    }else{
                        b=Gl(a,b);c=i;for(g=d;g<e;)g=Hl(a,g+1)
                    }
                }else{
                    b=El(a,b);c=i;for(g=d;g<e;)g=Fl(a,g+1)
                }return{
                    start:b,
                    end:g,
                    Bu:c,
                    Nq:i
                }
            }
        }
    }g=h=l;if(d){
        d=wia(a,b,1);b=El(a,d)+2;h=i
    }if(e){
        d=xia(a,c,-1);c=Fl(a,d);g=i
    }return{
        start:b,
        end:c,
        Bu:h,
        Nq:g
    }
}function wia(a,b,c){
    var d=Cl(a,b);for(b=b+1;Al(a,d-1);){
        var e=Cl(a,d-1);if(e<=c)break;b=d;d=e
    }return b-1
}
function xia(a,b,c){
    var d=Dl(a,b);for(b=b-1;Al(a,d+1);){
        var e=Dl(a,d+1);if(e>=c&&c>0)break;b=d;d=e
    }return b+1
};var Il="resize";function Jl(a){
    this.Dp=a||window;this.mD=Xd(this.Dp,Il,this.h0,l,this);this.ob=gd(this.Dp);if(Fc&&wc||Dc&&this.Dp.self!=this.Dp.top)this.RE=window.setInterval(s(this.GN,this),500)
}t(Jl,Vf);o=Jl.prototype;o.mD=j;o.Dp=j;o.ob=j;o.RE=j;o.A=function(){
    Jl.z.A.call(this);if(this.mD){
        ae(this.mD);this.mD=j
    }if(this.RE){
        window.clearInterval(this.RE);this.RE=j
    }this.ob=this.Dp=j
};o.h0=function(){
    this.GN()
};o.GN=function(){
    var a=gd(this.Dp);if(!pc(a,this.ob)){
        this.ob=a;this.dispatchEvent(Il)
    }
};function Kl(a,b){
    this.b=!!b;this.a=a;this.wo=new Jl;this.N=new he(this);this.N.a(this.wo,Il,this.k)
}t(Kl,Vf);Kl.prototype.b=l;Kl.prototype.k=function(a){
    this.dispatchEvent(a);this.Ld()
};var Ll="a";Kl.prototype.Ld=function(){
    this.dispatchEvent(Ll)
};Kl.prototype.A=function(){
    Kl.z.A.call(this);this.N.wa();this.wo.wa();this.a=j
};var Ml="iframe",yia="position:absolute;width:9em;height:9em;top:-99em",N="div",zia="position: absolute; visibility: hidden; top: -1000px",Aia="height:7px",Nl="h",Bia="height:8px",Ol="e",Cia="height:9px",Pl="l",Dia="height:10px",Eia="height:11px",Fia="height:12px",Gia="height:13px",Hia="height:14px",Ql="r",Iia="height:15px",Jia="height:16px",Rl="d";
function Sl(a){
    a=this.F=a||Vc();this.b=a.L(Ml,{
        style:yia
    });a=a.a.body;a.insertBefore(this.b,a.firstChild);this.k=this.b.contentWindow||pd(this.b).parentWindow||pd(this.b).defaultView;a=this.F;this.ya=a.L(N,{
        style:zia
    },a.L(N,{
        style:Aia
    },Nl),a.L(N,{
        style:Bia
    },Ol),a.L(N,{
        style:Cia
    },Pl),a.L(N,{
        style:Dia
    },Pl),a.L(N,{
        style:Eia
    },ec),a.L(N,{
        style:Fia
    },Xk),a.L(N,{
        style:Gia
    },ec),a.L(N,{
        style:Hia
    },Ql),a.L(N,{
        style:Iia
    },Pl),a.L(N,{
        style:Jia
    },Rl));a.a.body.appendChild(this.ya);this.o();Xd(this.k,Il,this.o,l,this)
}
t(Sl,Vf);Sl.prototype.a=0;
var Kia={
    "-4":[6,14,22,32,42,54,66,80,94],
    "-3":[6,13,22,31,41,51,63,77,91],
    "-2":[5,12,21,30,40,51,64,77,92],
    "-1":[6,13,21,31,42,54,66,79,93],
    "0":[7,15,24,34,45,57,70,84,99],
    "1":[7,14,23,33,44,55,68,81,96],
    "2":[7,15,23,33,43,55,68,81,96],
    "3":[7,15,23,33,44,56,68,82,97],
    "4":[7,14,23,33,43,55,67,81,96],
    "5":[7,14,23,33,44,55,68,82,97],
    "6":[7,14,23,33,43,55,68,82,96]
},Lia={
    "-4":0.5,
    "-3":Math.pow(1.2,-3),
    "-2":Math.pow(1.2,-2),
    "-1":Math.pow(1.2,-1),
    "0":1,
    "1":1.2,
    "2":Math.pow(1.2,2),
    "3":Math.pow(1.2,3),
    "4":Math.pow(1.2,
        4),
    "5":Math.pow(1.2,5),
    "6":Math.pow(1.2,6),
    "7":3
};Sl.prototype.o=function(){
    for(var a=this.ya,b=a.childNodes.length,c=[],d=1;d<b;d++)c.push(a.childNodes[d].offsetTop);var e=0;paa(Kia,function(g,h){
        for(var k=0;k<b-1;k++)if(c[k]-g[k]!=0)return l;e=Number(h);return i
    });if(e==0)if(window.outerWidth/window.innerWidth>2)e=7;if(this.a!=e){
        this.a=e;this.dispatchEvent(wf)
    }
};Sl.prototype.A=function(){
    Sl.z.A.call(this);Zd(this.k,Il,this.o,l,this);this.k=j;ld(this.b);delete this.b;ld(this.ya);delete this.ya
};function Tl(a,b,c){
    this.Dq=a;this.b=b;this.a=c;this.qd=s(this.I9,this)
}t(Tl,x);o=Tl.prototype;o.mE=l;o.RS=0;o.tb=j;o.XG=function(){
    if(!this.tb&&!this.RS)Mia(this);else this.mE=i
};o.stop=function(){
    if(this.tb){
        $f(this.tb);this.tb=j;this.mE=l
    }
};o.A=function(){
    Tl.z.A.call(this);this.stop()
};o.I9=function(){
    this.tb=j;if(this.mE&&!this.RS){
        this.mE=l;Mia(this)
    }
};function Mia(a){
    a.tb=Zf(a.qd,a.b);a.Dq.call(a.a)
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Ul(a,b){
    this.b=[];this.a=[j,j];this.o=a;this.F=b||j
}
o=Ul.prototype;
o.Xh=-1;
o.Uy=0;
o.RK=l;
o.bY=l;
o.cancel=aa(5);

o.tY=function(a){
    Vl(this,a);this.Uy--;this.Uy==0&&this.Xh>=0&&Wl(this)
};
function Vl(a,b){
    a.Xh=b instanceof Error?1:0;a.a[a.Xh]=b;Wl(a)
}function Nia(a){
    if(a.Xh>=0){
        if(!a.RK)f(new Xl(a));a.RK=l
    }
}o.ij=function(a){
    Nia(this);Vl(this,a)
};o.BG=function(a){
    Nia(this);Vl(this,a instanceof Error?a:Error(a))
};function Oia(a,b,c,d){
    a.b.push([b,c,d]);a.Xh>=0&&Wl(a);return a
}
function Pia(a){
    return Ab(a.b,function(b){
        return Aa(b[1])
    })
}
function Wl(a){
    if(a.k&&a.Xh!=0&&Pia(a)){
        ca.clearTimeout(a.k);delete a.k
    }for(var b=a.b,c=a.Xh,d=a.a[c],e=l,g;b.length>0&&a.Uy==0;){
        var h=b.shift(),k=h[c];if(k)try{
            var m=k.call(h[2]||a.F,d);if(m!==undefined)d=m;c=d instanceof Error?1:0;if(d instanceof Ul){
                g=s(a.tY,a);a.Uy++
            }
        }catch(n){
            c=1;d=n;Pia(a)||(e=i)
        }
    }a.Xh=c;a.a[c]=d;if(g&&a.Uy){
        Oia(d,g,g,void 0);d.bY=i
    }if(e)a.k=ca.setTimeout(function(){
        f(d)
    },0)
}
function Xl(a){
    Ua.call(this);this.a=a
}
t(Xl,Ua);Xl.prototype.message="Already called";function Yl(){}t(Yl,x);Yl.prototype.xc=function(){};function Zl(a,b){
    this.a=a;this.b=b
}Zl.prototype.execute=function(a){
    if(this.a){
        this.a.call(this.b||j,a);this.a=this.b=j
    }
};Zl.prototype.abort=function(){
    this.b=this.a=j
};xd[xd.length]=function(a){
    Zl.prototype.execute=a(Zl.prototype.execute)
};function $l(a,b){
    this.XN=a;this.k=b;this.a=[];this.FD=[];this.b=[]
}t($l,x);o=$l.prototype;o.GP=j;o.yJ=Yl;o.Vc=j;o.ra=function(){
    return this.k
};o.WG=function(){
    return this.GP
};o.Zy=function(a,b){
    return am(this,this.a,a,b)
};function am(a,b,c,d){
    a=new Zl(c,d);b.push(a);return a
}o.pc=function(){
    return!!this.Vc
};function bm(a){
    return a.Vc
}function Qia(a,b){
    var c=new a.yJ;c.xc(b());a.Vc=c;c=cm(a,a.b,b());if(c=!!c|!!cm(a,a.a,b()))Ria(a,4);else a.FD.length=0
}var Sia="Module errback failures: ";
function Ria(a,b){
    var c=cm(a,a.FD,b);c&&window.setTimeout(Bca(Sia+c),0);a.b.length=0;a.a.length=0
}function cm(a,b,c){
    a=[];for(var d=0;d<b.length;d++)try{
        b[d].execute(c)
    }catch(e){
        a.push(e)
    }b.length=0;return a.length?a:j
}o.A=function(){
    $l.z.A.call(this);y(this.Vc)
};function dm(){
    this.a={};this.b=[];this.k=[];this.o=[];this.J={};this.F=this.M=new $l([],z)
}t(dm,x);ia(dm);o=dm.prototype;o.RX=l;o.QR=j;o.v8=j;o.$F=0;o.GR=l;o.kU=l;o.zJ=j;function em(a,b){
    return a.a[b]
}o.mP=function(){
    return this.zJ
};var Tia="active",Uia="idle",Via="userActive",Wia="userIdle";function fm(a){
    var b=a.b.length>0;if(b!=a.GR){
        Xia(a,b?Tia:Uia);a.GR=b
    }b=a.o.length>0;if(b!=a.kU){
        Xia(a,b?Via:Wia);a.kU=b
    }
}function Yia(a,b){
    if(a.b.length==0)gm(a,b);else{
        a.k.push(b);fm(a)
    }
}
function gm(a,b,c,d){
    if(a.a[b].pc())f(Error("Module already loaded: "+b));b=Zia(a,b);if(!a.RX&&b.length>1){
        var e=b.shift();a.k=b.concat(a.k);b=[e]
    }if(!c)a.$F=0;a.b=b;fm(a);c=Mb(b);b=s(a.h3,a);e=s(a.i3,a);a.QR.o(c,a.a,j,b,e,!!d)
}function Zia(a,b){
    for(var c=[b],d=Mb(a.a[b].XN);d.length;){
        var e=d.pop();if(!a.a[e].pc()){
            c.unshift(e);Array.prototype.unshift.apply(d,a.a[e].XN)
        }
    }Eaa(c);return c
}function hm(a,b){
    Qia(a.a[b],s(a.mP,a));Jb(a.o,b);Jb(a.b,b);a.b.length==0&&im(a);fm(a)
}
function jm(a,b,c,d,e,g,h){
    var k=a.a[b];if(k.pc()){
        c=new Zl(c,d);h?c.execute(a.zJ):window.setTimeout(s(c.execute,c),0)
    }else if(Db(a.b,b)||Db(a.k,b)){
        c=k.Zy(c,d);if(g){
            a.o.push(b);fm(a)
        }
    }else{
        c=k.Zy(c,d);if(!e){
            g&&a.o.push(b);Yia(a,b)
        }
    }return c
}o.load=function(a,b){
    var c=this.a[a],d=new Ul;if(c.pc())d.ij(this.zJ);else if(Db(this.b,a)||Db(this.k,a)){
        c.Zy(d.ij,d);am(c,c.FD,d.BG,d);if(b){
            this.o.push(a);fm(this)
        }
    }else{
        c.Zy(d.ij,d);am(c,c.FD,d.BG,d);b&&this.o.push(a);Yia(this,a)
    }return d
};
o.h3=function(a){
    this.$F++;if(a==401){
        km(this,0);this.k.length=0
    }else if(a==410){
        km(this,3);im(this)
    }else if(this.$F>=3){
        km(this,1);im(this)
    }else{
        var b=this.b.pop();this.b.length=0;gm(this,b,i,a==8001)
    }
};o.i3=function(){
    km(this,2);im(this)
};var lm="error";
function km(a,b){
    var c=a.b.pop();a.b.length=0;var d=yb(a.k,function(m){
        return Db(Zia(a,m),c)
    });c&&Fb(d,c);for(var e=0;e<d.length;e++){
        Jb(a.k,d[e]);Jb(a.o,d[e])
    }var g=a.J.error;if(g)for(e=0;e<g.length;e++)for(var h=g[e],k=0;k<d.length;k++)h(lm,d[k],b);a.a[c]&&Ria(a.a[c],b);fm(a)
}function im(a){
    for(;a.k.length;){
        var b=a.k.shift();if(!a.a[b].pc()){
            gm(a,b);return
        }
    }fm(a)
}o.Zy=function(a,b){
    ta(a)||(a=[a]);for(var c=0;c<a.length;c++){
        var d=a[c],e=b,g=this.J;g[d]||(g[d]=[]);g[d].push(e)
    }
};
function Xia(a,b){
    for(var c=a.J[b],d=0;c&&d<c.length;d++)c[d](b)
}o.A=function(){
    dm.z.A.call(this);wb(Ja(this.a),y);this.J=this.k=this.o=this.b=this.a=j
};function $ia(a){
    this.type=a
};function mm(a){
    this.k=1;this.o=a
}t(mm,Eg);mm.prototype.ra=function(){
    return this.o
};mm.prototype.ia=function(){
    var a=mm.z.ia.call(this);a.id=this.o;return a
};mm.prototype.jn=function(a){
    var b=mm.z.jn.call(this,a);if(b!=0)return b;if(a.W()==1)return $a(this.o,a.ra());return 1
};var nm="kix";function om(a){
    return(a||nm)+ea+pb()
};function pm(){}ia(pm);pm.prototype.a=0;pm.V();function qm(a){
    this.F=a||Vc();this.YD=aja
}t(qm,Vf);qm.prototype.Zb=pm.V();var aja=j;o=qm.prototype;o.Gt=j;o.qb=l;o.ya=j;o.YD=j;o.Y=j;o.rb=j;o.Kd=j;o.Rh=j;o.yL=l;o.ra=function(){
    return this.Gt||(this.Gt=Ue+(this.Zb.a++).toString(36))
};o.G=function(){
    return this.ya
};o.wb=function(a){
    this.ya=a
};function rm(a){
    return a.Fa||(a.Fa=new he(a))
}var bja="Unable to set parent component";function sm(a,b){
    if(a==b)f(Error(bja));if(b&&a.rb&&a.Gt&&tm(a.rb,a.Gt)&&a.rb!=b)f(Error(bja));a.rb=b;qm.z.HK.call(a,b)
}
var cja="Method not supported";o.HK=function(a){
    if(this.rb&&this.rb!=a)f(Error(cja));qm.z.HK.call(this,a)
};o.P=function(){
    return this.F
};o.L=function(){
    this.ya=this.F.createElement(N)
};o.Ma=function(a){
    um(this,a)
};o.kK=function(a){
    um(this,a.parentNode,a)
};
var vm="Component already rendered";function um(a,b,c){
    if(a.qb)f(Error(vm));a.ya||a.L();b?b.insertBefore(a.ya,c||j):a.F.a.body.appendChild(a.ya);if(!a.rb||a.rb.qb)a.ta()
}
function wm(a,b){
    if(a.qb)f(Error(vm));else if(b&&a.Hg(b)){
        a.yL=i;if(!a.F||a.F.a!=Xc(b))a.F=Vc(b);a.Mb(b);a.ta()
    }else f(Error("Invalid element to decorate"))
}
o.Hg=function(){
    return i
};
o.Mb=function(a){
    this.ya=a
};
o.ta=function(){
    this.qb=i;xm(this,function(a){
        !a.qb&&a.G()&&a.ta()
    })
};o.Vb=function(){
    xm(this,function(a){
        a.qb&&a.Vb()
    });this.Fa&&je(this.Fa);this.qb=l
};
o.A=function(){
    qm.z.A.call(this);this.qb&&this.Vb();if(this.Fa){
        this.Fa.wa();delete this.Fa
    }xm(this,function(a){
        a.wa()
    });!this.yL&&this.ya&&ld(this.ya);this.rb=this.Y=this.ya=this.Rh=this.Kd=j
};o.K=function(){
    return this.Y
};o.Vn=function(a){
    this.Y=a
};o.Na=function(a,b){
    this.gj(a,ym(this),b)
};
o.gj=function(a,b,c){
    if(a.qb&&(c||!this.qb))f(Error(vm));if(b<0||b>ym(this))f(Error("Child component index out of bounds"));if(!this.Rh||!this.Kd){
        this.Rh={};this.Kd=[]
    }if(a.rb==this){
        this.Rh[a.ra()]=a;Jb(this.Kd,a)
    }else Pa(this.Rh,a.ra(),a);sm(a,this);Ib(this.Kd,b,0,a);if(a.qb&&this.qb&&a.rb==this){
        c=this.cb();c.insertBefore(a.G(),c.childNodes[b]||j)
    }else if(c){
        this.ya||this.L();b=zm(this,b+1);um(a,this.cb(),b?b.ya:j)
    }else this.qb&&!a.qb&&a.ya&&a.ta()
};
o.cb=function(){
    return this.ya
};
function ym(a){
    return a.Kd?a.Kd.length:0
}function tm(a,b){
    var c;if(a.Rh&&b){
        c=a.Rh;c=b in c?c[b]:void 0;c=c||j
    }else c=j;return c
}function zm(a,b){
    return a.Kd?a.Kd[b]||j:j
}function xm(a,b,c){
    a.Kd&&wb(a.Kd,b,c)
}o.removeChild=function(a,b){
    if(a){
        var c=wa(a)?a:a.ra();a=tm(this,c);if(c&&a){
            Na(this.Rh,c);Jb(this.Kd,a);if(b){
                a.Vb();a.ya&&ld(a.ya)
            }sm(a,j)
        }
    }if(!a)f(Error("Child is not in parent component"));return a
};function Am(a){
    qm.call(this,a.P());this.a=a
}t(Am,qm);o=Am.prototype;o.XC=0;o.YC=0;o.ER=l;
function Bm(a,b,c){
    if(a.G()){
        b=Math.round(b);c=Math.round(c);if(!(a.ER&&a.YC==c&&a.XC==b)){
            a.XC=b;a.YC=c;if(a.G()){
                Ni(a.G(),b,c);a.ER=i
            }
        }
    }
}o.Cc=function(){
    return this.XC
};o.bc=function(){
    return this.YC
};o.xb=l;o.Ab=i;o.N=j;o.setActive=function(a){
    this.xb=a
};o.Ta=function(){
    return this.Ab
};o.Z=function(a){
    if(this.G()&&a!=this.Ab){
        this.G().style.display=a?z:Wi;this.Ab=a
    }
};
function Cm(a){
    return a.N||(a.N=new he(a))
}o.Vb=function(){
    Am.z.Vb.call(this);this.N&&je(this.N)
};o.A=function(){
    Am.z.A.call(this);delete this.a;y(this.N);delete this.N
};function Dm(a,b,c){
    Am.call(this,b);this.J=a;this.k=c
}t(Dm,Am);var O="DIV",dja="kix-blockview";Dm.prototype.L=function(){
    this.wb(this.P().L(O,dja))
};Dm.prototype.W=function(){
    return this.J
};Dm.prototype.sq=function(){
    return this.G().offsetHeight
};Dm.prototype.A=function(){
    Dm.z.A.call(this);delete this.k
};function Em(){
    this.a=[];this.k=0
}Em.prototype.b=function(a){
    this.k+=a;this.a.push(this.k)
};Em.prototype.o=function(a){
    if(a<0)return 0;return this.a[a]
};Em.prototype.F=function(a){
    a=Math.min(this.a.length,a);this.a.length=a;this.k=a<=0?0:this.a[a-1]
};function Fm(a){
    this.a=[];this.J=a;this.k=new Em
}Fm.prototype.b=function(a,b){
    b&&this.J.a<0?this.a.push(a-b,b):this.a.push(a);this.k.b(a,b)
};Fm.prototype.o=function(a){
    var b;if(this.J.a!=0){
        b=this.J;a=this.a.slice(0,a+1);for(var c=Lia[b.a],d=0,e=0;e<a.length;e++){
            var g=a[e],h=Lia[b.a];d+=g==0?0:Math.max(1,Math.floor(g*h))
        }c>1&&d++;b=Math.floor(d/c)
    }else b=this.k.o(a);return b
};Fm.prototype.F=function(a){
    this.a.length=Math.min(this.a.length,a);this.k.F(a)
};function Gm(a){
    this.a=[];this.b=[];this.k=a
}t(Gm,x);Gm.prototype.ea=function(a){
    var b=this.a,c;if(b.length>a){
        var d=0,e=this.b;for(c=e.length-1;c>=0;c--){
            if(e[c].index>a)break;d+=e[c].In
        }return b[a]+d
    }Hm(this,a);if(b.length<=a){
        d=this.k;for(c=b.length;c<=a;c++)b[c]=d(c-1,b[c-1])
    }return b[a]
};Gm.prototype.indexOf=function(a){
    var b=this.a;Hm(this,b.length);if(a<=b[b.length-1]){
        a=Pb(b,a);return a<0?-a-2:a
    }var c=this.k,d,e;do{
        e=b.length;d=c(e-1,b[e-1]);b.push(d)
    }while(b[e]<a);return a==d?e:e-1
};
function Im(a,b){
    Hm(a,b);a.b.length=0;a.a.length=Math.min(a.a.length,b)
}function eja(a,b){
    var c=b.index;return a>c?-1:a<c?1:0
}function Hm(a,b){
    var c=a.b;if(c.length!=0){
        var d=0,e=c.length-1,g=c[e].index;b=Math.min(b,a.a.length-1);if(!(g>b)){
            for(;g<=b;g++){
                if(e>=0&&c[e].index==g)d+=c[e--].In;a.a[g]+=d
            }c.length=e+1;if(g+1<a.a.length&&d!=0)c[e+1]={
                index:g+1,
                In:d
            }
        }
    }
}Gm.prototype.A=function(){
    Gm.z.A.call(this);delete this.a;delete this.k
};function Jm(a,b){
    Dm.call(this,0,a.a,b);this.b=a
}t(Jm,Dm);o=Jm.prototype;o.iu=function(){
    return this.b.Rc()
};o.sq=function(){
    return this.b.yn
};o.mR=function(a,b,c){
    return this.b.Gf(a,b,c)
};o.nR=function(a,b,c){
    fja(this.b,a,b,c)
};o.oR=function(){
    Km(this.b)
};o.ta=function(){
    Jm.z.ta.call(this);this.Na(this.b.$a(),i)
};o.A=function(){
    Jm.z.A.call(this);y(this.b);delete this.b
};function Lm(a,b,c){
    Dm.call(this,1,a,c);this.o=b;this.Na(b)
}t(Lm,Dm);o=Lm.prototype;o.ta=function(){
    Lm.z.ta.call(this);this.o.Ma(this.G())
};o.nR=function(a,b,c){
    this.o.Di(a,b,c)
};o.iu=function(){
    return this.o.kd()
};o.oR=function(){};o.mR=function(a,b,c){
    return this.o.wh(a,b,c)
};o.A=function(){
    Lm.z.A.call(this);delete this.o
};function Mm(a){
    Am.call(this,a)
}t(Mm,Am);Mm.prototype.xc=function(){};Mm.prototype.wh=function(){
    return j
};function Nm(a,b,c,d){
    this.b=a;this.height=b;this.a=c;this.Ic=d
};function gja(a,b,c){
    this.ze=a;this.a=b;this.b=c
}gja.prototype.k=0;function hja(a){
    return Pb(a.b,a.k,function(b,c){
        if(c.top<b&&c.top+c.height>b)return 0;return Qb(b,c.top)
    })<0
};function P(a){
    this.a=Gd?[]:z;a!=j&&this.append.apply(this,arguments)
}P.prototype.set=function(a){
    this.clear();this.append(a)
};if(Gd){
    P.prototype.b=0;P.prototype.append=function(a,b){
        if(b==j)this.a[this.b++]=a;else{
            this.a.push.apply(this.a,arguments);this.b=this.a.length
        }return this
    }
}else P.prototype.append=function(a,b){
    this.a+=a;if(b!=j)for(var c=1;c<arguments.length;c++)this.a+=arguments[c];return this
};P.prototype.clear=function(){
    if(Gd)this.b=this.a.length=0;else this.a=z
};
P.prototype.toString=function(){
    if(Gd){
        var a=this.a.join(z);this.clear();a&&this.append(a);return a
    }else return this.a
};function Om(){
    this.a={}
}ia(Om);var ija=RegExp("([\\u05BE\\u05C0\\u05C3\\u05C6\\u05D0-\\u05F4\\u07C0-\\u07EA\\u07F4-\\u07F5\\u07FA-\\u0815\\u081A\\u0824\\u0828\\u0830-\\u083E\\u200F\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB4F])|([\\u0030-\\u0039\\u00B2-\\u00B3\\u00B9\\u06F0-\\u06F9\\u2070\\u2074-\\u2079\\u2080-\\u2089\\u2488-\\u249B\\uFF10-\\uFF19])|([\\u002B\\u002D\\u207A-\\u207B\\u208A-\\u208B\\u2212\\uFB29\\uFE62-\\uFE63\\uFF0B\\uFF0D])|([\\u0023-\\u0025\\u00A2-\\u00A5\\u00B0-\\u00B1\\u0609-\\u060A\\u066A\\u09F2-\\u09F3\\u09FB\\u0AF1\\u0BF9\\u0E3F\\u17DB\\u2030-\\u2034\\u20A0-\\u20B8\\u212E\\u2213\\uA838-\\uA839\\uFE5F\\uFE69-\\uFE6A\\uFF03-\\uFF05\\uFFE0-\\uFFE1\\uFFE5-\\uFFE6])|([\\u0600-\\u0603\\u0660-\\u0669\\u066B-\\u066C\\u06DD])|([\\u002C\\u002E-\\u002F\\u003A\\u00A0\\u060C\\u202F\\u2044\\uFE50\\uFE52\\uFE55\\uFF0C\\uFF0E-\\uFF0F\\uFF1A])|([\\u000A\\u000D\\u001C-\\u001E\\u0085\\u2029])|([\\u0009\\u000B\\u001F])|([\\u000C\\u0020\\u1680\\u180E\\u2000-\\u200A\\u2028\\u205F\\u3000])|([\\u0021-\\u0022\\u0026-\\u002A\\u003B-\\u0040\\u005B-\\u0060\\u007B-\\u007E\\u00A1\\u00A6-\\u00A9\\u00AB-\\u00AC\\u00AE-\\u00AF\\u00B4\\u00B6-\\u00B8\\u00BB-\\u00BF\\u00D7\\u00F7\\u02B9-\\u02BA\\u02C2-\\u02CF\\u02D2-\\u02DF\\u02E5-\\u02ED\\u02EF-\\u02FF\\u0374-\\u0375\\u037E-\\u0385\\u0387\\u03F6\\u058A\\u0606-\\u0607\\u060E-\\u060F\\u06E9\\u07F6-\\u07F9\\u0BF3-\\u0BF8\\u0BFA\\u0C78-\\u0C7E\\u0CF1-\\u0CF2\\u0F3A-\\u0F3D\\u1390-\\u1399\\u1400\\u169B-\\u169C\\u17F0-\\u180A\\u1940-\\u1945\\u19DE-\\u19FF\\u1FBD\\u1FBF-\\u1FC1\\u1FCD-\\u1FCF\\u1FDD-\\u1FDF\\u1FED-\\u1FEF\\u1FFD-\\u1FFE\\u2010-\\u2027\\u2035-\\u2043\\u2045-\\u205E\\u207C-\\u207E\\u208C-\\u208E\\u2100-\\u2101\\u2103-\\u2106\\u2108-\\u2109\\u2114\\u2116-\\u2118\\u211E-\\u2123\\u2125\\u2127\\u2129\\u213A-\\u213B\\u2140-\\u2144\\u214A-\\u214D\\u2150-\\u215F\\u2189-\\u2211\\u2214-\\u2335\\u237B-\\u2394\\u2396-\\u2487\\u24EA-\\u26AB\\u26AD-\\u27FF\\u2900-\\u2B59\\u2CE5-\\u2CEA\\u2CF9-\\u2CFF\\u2E00-\\u2FFB\\u3001-\\u3004\\u3008-\\u3020\\u3030\\u3036-\\u3037\\u303D-\\u303F\\u309B-\\u309C\\u30A0\\u30FB\\u31C0-\\u31E3\\u321D-\\u321E\\u3250-\\u325F\\u327C-\\u327E\\u32B1-\\u32BF\\u32CC-\\u32CF\\u3377-\\u337A\\u33DE-\\u33DF\\u33FF\\u4DC0-\\u4DFF\\uA490-\\uA4C6\\uA60D-\\uA60F\\uA673\\uA67E-\\uA67F\\uA700-\\uA721\\uA788\\uA828-\\uA82B\\uA874-\\uA877\\uFD3E-\\uFD3F\\uFDFD\\uFE10-\\uFE19\\uFE30-\\uFE4F\\uFE51\\uFE54\\uFE56-\\uFE5E\\uFE60-\\uFE61\\uFE64-\\uFE68\\uFE6B\\uFF01-\\uFF02\\uFF06-\\uFF0A\\uFF1B-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF65\\uFFE2-\\uFFE4\\uFFE8-\\uFFFD])|([\\u202A])|([\\u202D])|([\\u0608\\u060B\\u060D\\u061B-\\u064A\\u066D-\\u066F\\u0671-\\u06D5\\u06E5-\\u06E6\\u06EE-\\u06EF\\u06FA-\\u070D\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\uFB50-\\uFD3D\\uFD50-\\uFDFC\\uFE70-\\uFEFC])|([\\u202B])|([\\u202E])|([\\u202C])|([\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DE-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962-\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2-\\u09E3\\u0A01-\\u0A02\\u0A3C\\u0A41-\\u0A51\\u0A70-\\u0A71\\u0A75-\\u0A82\\u0ABC\\u0AC1-\\u0AC8\\u0ACD\\u0AE2-\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D-\\u0B56\\u0B62-\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C56\\u0C62-\\u0C63\\u0CBC\\u0CCC-\\u0CCD\\u0CE2-\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62-\\u0D63\\u0DCA\\u0DD2-\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECD\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86-\\u0F87\\u0F90-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039-\\u103A\\u103D-\\u103E\\u1058-\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085-\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927-\\u1928\\u1932\\u1939-\\u193B\\u1A17-\\u1A18\\u1A56\\u1A58-\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80-\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BA9\\u1C2C-\\u1C33\\u1C36-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DFF\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099-\\u309A\\uA66F-\\uA672\\uA67C-\\uA67D\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA825-\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31-\\uAA32\\uAA35-\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26])|([\\u0000-\\u0008\\u000E-\\u001B\\u007F-\\u0084\\u0086-\\u009F\\u00AD\\u070F\\u200B-\\u200D\\u2060-\\u206F\\uFEFF])");
function Pm(a,b){
    var c=a.a[b];if(c==j){
        for(var d=ija.exec(b),e=d?d.length:0,g=1;c==j;g++)if(g>=e)c=0;else if(d[g])c=g;a.a[b]=c
    }return c
};/*

 Copyright (C) 2001-2009, International Business Machines Corporation and
 others.  All Rights Reserved.
*/
function jja(){
    this.b=0;this.o=[];this.k=[];this.J=this.Q=this.a=this.M=this.ha=this.F=0;this.Fa=[]
}function kja(a,b,c){
    if(a.M==2&&b<c)return a.k[b];return Qm(a,b)
}function lja(a){
    return 1<<(a&-65)
}var mja=[1,2],nja=[2048,16384],oja=[4096,32768];function Qm(a,b){
    return a.ha?a.o[b]>>6:a.F
}function pja(a){
    if(!(a.a&57346)&&!(a.a&32&&a.a&384984))return 0;if(!(a.a&6181))return 1;return 2
}
var qja=[0,1,2,7,8,3,9,6,5,4,4,10,10,12,10,10,10,11,10],rja=[[1,2,4,5,7,15,17,7,9,7,0,7,3,4],[1,34,36,37,39,47,49,39,41,39,1,1,35,0],[33,2,36,37,39,47,49,39,41,39,2,2,35,1],[33,34,38,38,40,48,49,40,40,40,3,3,3,1],[33,34,4,37,39,47,49,74,11,74,4,4,35,2],[33,34,36,5,39,47,49,39,41,76,5,5,35,3],[33,34,6,6,40,48,49,40,40,77,6,6,35,3],[33,34,36,37,7,47,49,7,78,7,7,7,35,4],[33,34,38,38,8,48,49,8,8,8,8,8,35,4],[33,34,4,37,7,47,49,7,9,7,9,9,35,4],[97,98,4,101,135,111,113,135,142,135,10,135,99,2],[33,34,4,
37,39,47,49,39,11,39,11,11,35,2],[97,98,100,5,135,111,113,135,142,135,12,135,99,3],[97,98,6,6,136,112,113,136,136,136,13,136,99,3],[33,34,132,37,7,47,49,7,14,7,14,14,35,4],[33,34,36,37,39,15,49,39,41,39,15,39,35,5],[33,34,38,38,40,16,49,40,40,40,16,40,35,5],[33,34,36,37,39,47,17,39,41,39,17,39,35,6]],sja=[[[0,1,0,2,0,0,0,0],[0,1,3,3,20,20,0,1],[0,1,0,2,21,21,0,2],[0,1,3,3,20,20,0,2],[32,1,3,3,4,4,32,1],[32,1,32,2,5,5,32,1]],[[1,0,2,2,0,0,0,0],[1,0,1,3,20,20,0,1],[1,0,2,2,0,0,0,1],[1,0,1,3,5,5,0,1],
[33,0,33,3,4,4,0,0],[1,0,1,3,5,5,0,0]]];function Rm(a,b,c,d,e){
    var g=b.b,h;h=d;c=g[b.state][c];b.state=c&15;c=c>>4;g=g[b.state][7];if(c!=0)switch(c){
        case 1:b.k=h;break;case 2:d=b.k;break;default:f("Internal ICU error in processPropertySeq_")
    }if(g!=0||d<h){
        b=b.a+g;for(d=d;d<e;d++)a.k[d]=b
    }
}
function tja(a,b,c,d,e){
    var g=new uja,h,k,m,n;g.state=0;g.a=a.k[b];g.b=sja[g.a&1];Rm(a,g,d,b,b);m=a.o[b]==17?1+d:0;d=b;h=0;for(b=b;b<=c;b++){
        n=b>=c?e:qja[a.o[b]&-65];k=m;n=rja[k][n];m=n&31;n=n>>5;if(b==c&&n==0)n=1;if(n!=0){
            k=rja[k][13];switch(n){
                case 1:Rm(a,g,k,d,b);d=b;break;case 2:h=b;break;case 3:Rm(a,g,k,d,h);Rm(a,g,4,h,b);d=b;break;case 4:Rm(a,g,k,d,h);d=h;h=b;break;default:f("Internal ICU error in resolveImplicitLevels_")
            }
        }
    }Rm(a,g,e,c,c)
}function uja(){}
function vja(a,b){
    this.a=a;this.F=b||wja||(wja=new Sm)
}var wja=j;function xja(a,b,c){
    for(var d=a.o;;){
        for(var e=b,g;b<a.k;){
            g=kja(a.a,b,a.b);if(g!=c)break;b++
        }b>e&&d.push(a.F.b(e,b,c));if(b>=a.k||g<c)return b;e=d.length-1;b=xja(a,b,c+1);for(var h=d.length;++e<--h;){
            var k=d[e];d[e]=d[h];d[h]=k
        }
    }
}function Tm(a,b,c){
    this.k=a;this.b=b;this.a=c
}function Sm(){}Sm.prototype.b=function(a,b,c){
    return new Tm(a,b,c)
};var yja=RegExp("[\u0626\u0628\u062a-\u062e\u0633-\u0647\u0649-\u064a\u066e-\u066f\u0678-\u0687\u069a-\u06bf\u06c1-\u06c2\u06cc\u06ce\u06d0-\u06d1\u06fa-\u06fc\u06ff\u0712-\u0714\u071a-\u071d\u071f-\u0727\u0729\u072b\u072d-\u072e\u074e-\u0758\u075c-\u076a\u076d-\u0770\u0772\u0775-\u0777\u077a-\u077f\u07ca-\u07ea\u07fa\u200d]"),zja=RegExp("[\u0622-\u0625\u0627\u0629\u062f-\u0632\u0648\u0671-\u0673\u0675-\u0677\u0688-\u0699\u06c0\u06c3-\u06cb\u06cd\u06cf\u06d2-\u06d3\u06d5\u06ee-\u06ef\u0710\u0715-\u0719\u071e\u0728\u072a\u072c\u072f\u074d\u0759-\u075b\u076b-\u076c\u0771\u0773-\u0774\u0778-\u0779]"),
Aja={};function Bja(a,b){
    for(var c=b-1;c>=1;--c){
        var d=bh(a,c);if(Pm(Om.V(),d)!=17)return d
    }return j
}var Um="D",Vm="R",Wm="N";function Xm(a){
    var b=Aja[a];if(!b){
        b=yja.test(a)?Um:zja.test(a)?Vm:Wm;Aja[a]=b
    }return b
};function Cja(a,b,c,d,e){
    this.k=new P;this.M=a;this.Fa=new oc(0,0);this.o=this.J=b;this.F=this.Q=c;this.ha=l;this.b=this.a=d;this.Oa=e
}o=Cja.prototype;o.$C=0;o.nI=0;o.yw=0;o.ZC=0;o.QA=0;o.pv=0;o.YF=z;o.LD=j;o.TS=z;o.Ju=0;o.MD=0;o.ZJ=0;o.aG=l;o.Wy=j;o.Vt=l;o.FR=0;o.EH=l;var Ym='<a href="',Dja='" style="text-decoration: none;"',Eja=' target="_blank"',Fja='<span style="font-size:',Gja='pt;">';
function Hja(a,b,c){
    var d=uk(a);if(b){
        b=b.xd();c.append(Ym,b,Dja);sl(b)||c.append(Eja);c.append(jb)
    }a.Nm()!=sk&&c.append(Fja+a.eh+Gja);c.append(Ge,d,He)
}var Zm="</a>";function Ija(a,b,c){
    c.append(Ie);a.Nm()!=sk&&c.append(Ie);b&&c.append(Zm)
}var $m="&nbsp;",an="\u2018",Jja="&lsquo;",bn="\u2019",Kja="&rsquo;",cn="\u201c",Lja="&ldquo;",dn="\u201d",Mja="&rdquo;";
function Nja(a){
    switch(a){
        case bb:return $m;case ih:return z;case jb:return fb;case ib:return eb;case hb:return db;case an:return Jja;case bn:return Kja;case cn:return Lja;case dn:return Mja;default:return a
    }
}var Oja='<bdo dir="',en="ltr",fn="rtl",Pja='"><span style="',Qja="</span></bdo>";function Rja(a,b,c,d){
    c=uk(c);return qca(a,nb(Oja,d?en:fn,Pja,c,He,b,Qja))
}function gn(a){
    if(!a.aG)return a.$C;if(a.yw>0)return a.yw;Sja(a);return a.yw
}
o.Pb=function(){
    if(!this.aG)return this.ZC;if(this.QA>0)return this.QA;Sja(this);return this.QA
};function Sja(a){
    var b=Rja(a.M,a.YF,a.J,a.Oa);a.QA=b.height;a.yw=a.nI>0?a.nI:b.width
}function Tja(a,b,c){
    a.k.append(b);a.LD=c;a.MD=a.$C+c.width;a.ZJ=Math.max(a.ZC,c.height)
}function Uja(a,b,c){
    if(!a.o.kb(b)||a.F!=c){
        var d=a.k;Ija(a.o,a.F,d);Hja(b,c,d);a.o=b;a.F=c
    }
}
function Vja(a,b){
    if(b)a.Wy=b;if(a.TS!=bb)a.pv=0;a.YF=a.k.toString();a.$C=a.MD;a.ZC=a.ZJ;a.b=a.Ju;var c=a.LD;a.Fa=c?c:new oc(0,0);a.LD=j;a.yw=0;a.EH=i
};function Wja(a,b,c){
    this.b=a;this.R=b;this.a=c
}function hn(a,b,c,d){
    a=b.length;var e=a-1;if(b[e].Vt){
        a--;e--
    }if(a){
        var g=b[0];Hja(g.J,g.Q,c);for(g=0;g<a;g++){
            var h=b[g];if(!d||g!=e||!(h.pv>0))c.append(h.YF)
        }b=b[e];Ija(b.o,b.F,c)
    }
};function jn(a){
    qm.call(this,a)
}t(jn,qm);function kn(a){
    this.a=a
}t(kn,x);kn.prototype.W=function(){
    return this.a
};kn.prototype.k=function(){
    return 0
};function Xja(a,b){
    for(var c=l,d=a.length-1,e;e=a[d];d--)switch(e.k(b)){
        case 2:c=i;break;case 3:c=i;case 1:Kb(a,d);y(e)
    }return c
};function ln(a,b){
    var c=a.P();qm.call(this,c);this.b=a;this.k=new Wja(a.J,a.R,b);this.a=new P
}t(ln,jn);o=ln.prototype;o.Qf=j;o.dl=j;var Yja="render_line_contents",Zja="Unable to calculate bidi runs.",$ja="&lrm;",aka="&rlm;",bka='<bdo dir="ltr">',cka='<bdo dir="rtl">',dka="</bdo>",eka="<span>",fka='">&nbsp;</span>',mn='<span class="',nn="goog-inline-block",gka="kix-lineview-text-block",hka='" style="width:',on="px;",ika='unicode-bidi:bidi-override;">',pn="left",qn="right";
o.Ii=function(a){
    if(a.W()==Yja){
        this.a.clear();this.dl=a.o;for(var b=a.o.NR,c=a.o.zN,d=a.o.Ic,e=0;e<b.length;e++){
            var g=this.k,h=b[e];c=c;var k=d,m=this.a,n=new P;if(rn(h))if(g.a.a>=0){
                var p=g;k=k;var r=n,u=h.ok,w=jka(p.a,u);if(!w){
                    p.R.log(Error(Zja));hn(p,u,r,i)
                }u=l;for(var v=w.length,D=0;D<v;D++){
                    var I=w[D],W=I.ok;if(W.length){
                        I=I.Ic();var Q=I!=k;if(Q){
                            if(u)r.append(k?$ja:aka);r.append(I?bka:cka)
                        }u=Q;hn(p,W,r,D==v-1&&!Q);Q&&r.append(dka)
                    }
                }
            }else hn(g,h.ok,n,i);g=g;h=h;n=n;m=m;if(c){
                m.append(eka,
                    kka(c),Ie);if(!rn(h)){
                    c=h.XT;c=g.b?lka(g.b,c):uk(c);m.append(Ge,c,fka)
                }
            }if(rn(h))m.append(mn,nn,bb,gka,hka,Math.ceil(h.J-h.o)+on,g.a.a>=0?ika:He,n.toString(),Ie);c=j
        }this.G().style.height=a.height+L;b=this.G();b.style.direction=d?en:fn;b.style.textAlign=d?pn:qn;A&&this.P().DP(this.Qf);a.Ta&&mka(this);this.Qf.style.paddingTop=a.Q+L
    }
};var nka="kix-lineview-content",oka="kix-lineview";o.L=function(){
    var a=this.P();this.Qf=a.L(O,nka);this.wb(a.L(O,oka,this.Qf))
};
var pka="_temp",qka="margin",sn="padding",rka="Should have a content element during redraw.";
function mka(a){
    if(a.dl){
        a.Qf.innerHTML=a.a.toString();for(var b=a.dl.a,c=0;c<b.length;c++){
            var d=b[c];d.G()||d.L();var e=a.P(),g=e.G(nb(Ca(d),pka));e.K$(d.G(),g);a.qb&&!d.qb&&d.ta()
        }b=a.dl.NR;var h=a.dl.zN,k=a.dl.k;c=a.dl.Ic;if(a.Qf){
            d=a.Qf.childNodes;g=k;e=0;tn(a,a.Qf,qka,k,c);if(h){
                e=b[0].Mr.a-un(h,k);tn(a,d[0],sn,e,c);g+=(h.ob||vn(h)).width+e;e=1
            }for(h=0;h<b.length;h++){
                g=b[h].Mr.a-g;g+=b[h].o;(k=d[h+e])&&tn(a,k,sn,Math.floor(g),c);g=b[h].Mr.Dm
            }
        }else a.b.R.log(Error(rka));a.dl=j
    }
}
var wn="Left",xn="Right";function tn(a,b,c,d,e){
    b.style[c+(e?wn:xn)]=(c==sn?Math.max(0,d):d)+L;b.style[c+(e?xn:wn)]=z
}o.A=function(){
    ln.z.A.call(this);delete this.a;delete this.Qf;delete this.b;delete this.dl;delete this.k
};function yn(a,b,c,d){
    this.a=Yja;this.o=a;this.height=b;this.Ta=c;this.Q=d
}t(yn,kn);yn.prototype.A=function(){
    yn.z.A.call(this);delete this.o
};yn.prototype.k=function(a){
    if(a.W()==this.W())return 1;return 0
};var zn=[],An="M";zn[1E3]=An;zn[900]="CM";zn[500]=Um;zn[400]="CD";var Bn="C";zn[100]=Bn;zn[90]="XC";var Cn="L";zn[50]=Cn;zn[40]="XL";var Dn="X";zn[10]=Dn;zn[9]="IX";var En="V";zn[5]=En;zn[4]="IV";var Fn="I";zn[1]=Fn;var In=[1E3,900,500,400,100,90,50,40,10,9,5,4,1];function Jn(a,b){
    for(var c=z,d=0;d<In.length;d++)for(var e=In[d];a>=e;){
        a-=e;c+=zn[e]
    }return b?c:c.toLowerCase()
}function Kn(a,b){
    var c=b?65:97;a--;for(var d=a/26,e=a%26,g=z,h=0;h<=d;h++)g+=String.fromCharCode(c+e);return g
}
function Ln(a,b){
    if(b.length&&Mn(a,b)){
        var c=a.Hc(Ih,b[0]),d=c.Yb;if(d)if(Dk(Hk(a.pb(d),c.Rb)))return i
    }return l
};var ska="&#9675;",tka="&#9632;",uka="&#10004;",vka="&#9634;",wka="&#9679;";function Nn(a,b,c){
    this.a=b;switch(this.a.Om){
        case 1:b=ska;break;case 2:b=tka;break;case 8:b=uka;break;case 9:b=vka;break;case 3:b=On(a,c)+ea;break;case 4:b=Kn(On(a,c),i)+ea;break;case 5:b=Kn(On(a,c),l)+ea;break;case 6:b=Jn(On(a,c),i)+ea;break;case 7:b=Jn(On(a,c),l)+ea;break;default:b=wka
    }this.o=b;this.k=Sj(a.Ka(Jh,c))
}t(Nn,x);Nn.prototype.b=j;Nn.prototype.ob=j;var xka='" style="';
function kka(a){
    var b;if(!(b=a.b)){
        b=uk(a.a.a);a.b=nb(mn,nn,bb,gka,xka,b,He,a.o,Ie);b=a.b
    }return b
}function vn(a){
    var b=kka(a);a.ob=qca(ze.V(),b);return a.ob
}function un(a,b){
    var c=(a.ob||vn(a)).width;return a.k-b<c?fha(b+c):a.k
}Nn.prototype.A=function(){
    Nn.z.A.call(this);delete this.a;delete this.ob
};function yka(a,b,c,d,e,g,h){
    this.b=a;this.Ub=b;this.a=c;this.k=d;this.zN=e;this.NR=g;this.Ic=h
};function Pn(){
    this.a={}
}t(Pn,x);Pn.prototype.o=function(a,b){
    var c=zka(this,a,b.K());return c&&c.o(a,b)
};Pn.prototype.b=function(a,b){
    var c=zka(this,a,b);return!!c&&c.b(a,b)
};function zka(a,b,c){
    return(a=a.a[Ca(c)])?a[bh(c.fa(),b)]:j
}Pn.prototype.register=function(a,b,c){
    b=Ca(b);this.a[b]||(this.a[b]={});this.a[b][c]=a
};Pn.prototype.A=function(){
    Pn.z.A.call(this);delete this.a
};function Qn(a,b,c){
    this.a=a;this.M=b||j;this.J=!!c
}t(Qn,x);o=Qn.prototype;o.ig=j;o.Os=j;o.K=function(){
    return j
};o.Vn=function(){};o.$h=function(){
    return this.ig
};o.Yw=function(){
    return this.Os
};o.Va=function(){
    return this.M
};o.WA=function(a){
    return a.L(O,this.Va())
};function Rn(a,b){
    return a.WI(b)
}o.WI=function(a){
    var b=this.a.start-a.a.start;return b!=0?b:this.a.end-a.a.end
};o.A=function(){
    Qn.z.A.call(this);this.ig=j
};function Sn(a,b,c,d){
    this.left=a;this.top=b;this.width=c;this.height=d
}o=Sn.prototype;
o.Cc=function(){
    return this.left
};o.bc=function(){
    return this.top
};o.Ed=function(){
    return this.width
};o.Pb=function(){
    return this.height
};o.kb=function(a){
    if(!a)return l;return this.left==a.left&&this.width==a.width&&this.top==a.top&&this.height==a.height
};function Aka(a,b){
    return a.kb(b)
}function Tn(a,b,c,d){
    Sn.call(this,a,b,c,d)
}t(Tn,Sn);function Bka(a){
    this.R=a;this.a=[];this.b=[];this.k=[]
}var Cka="Spacer is in block, but not in any of its words.";
function Dka(a,b){
    var c=a.k,d=a.k.length,e=a.b,g=a.b.length,h=b.a,k=c[c.length-1].Ub;if(d==1&&g==0)return{
        x:c[0].a,
        SE:j
    };var m=b.b||h>k;m&&h>0&&h--;h=Math.min(h,k);var n,p;for(k=0;k<d;k++){
        n=c[k];if(h<=n.Ub){
            p=c[k+1];break
        }
    }c=n.a;k=p?p.b:g;for(g=n.b;g<k;g++){
        n=e[g];if(h>=n.ze&&h<=n.Ub){
            if(h==n.Ub&&m&&!n.b)return{
                x:c+n.width,
                SE:n
            };if(n.a)return{
                x:c,
                SE:n
            };else{
                m&&h++;if(n.b){
                    e=h;h=n.Ub;c-=1
                }else{
                    e=n.ze;h=h-1
                }for(k=e;k<=h;k++)c+=a.a[k].width;return{
                    x:c,
                    SE:n
                }
            }
        }c+=n.width
    }a.R.log(Error(Cka));return j
}
function Un(a,b,c,d,e){
    var g=a.length;if(g>0){
        g=a[g-1];if(b==g.Cc()+g.Ed()){
            g.width+=c;return
        }
    }a.push(new Tn(b,d,c,e))
}function Eka(a,b,c,d,e,g,h,k,m){
    if(d>c||e<b)return i;if(d>=b&&e<=c){
        Un(a,g,h,k,m);return i
    }return l
}function Fka(a,b,c,d,e,g){
    this.ze=b-a;this.Ub=c-a;this.width=d;this.b=e;this.a=g||j
}function Gka(a,b,c,d,e){
    this.Ub=b-a;this.b=c;this.a=d;this.Dm=e
};function Hka(a,b,c,d,e,g,h,k,m,n,p){
    this.Ub=a;this.b=b;this.ok=c;this.J=d;this.height=e;this.F=g;this.k=h;this.o=k;this.XT=m;this.a=n;this.Mr=p
}function rn(a){
    return a.ok.length>0&&!a.ok[0].Vt
};function Ika(a,b,c,d,e,g,h,k){
    this.F=a;this.o=b;this.ha=c;this.M=d;this.a=e;this.k=g;this.J=h;this.Q=k?k:ze.V();this.b=new Vj
}o=Ika.prototype;o.nm=0;o.Cs=0;o.Ew=0;o.pL=j;o.fv=j;o.AE=0;o.Xn=0;o.jL=j;o.qJ=j;o.LG=l;o.ED=0;var Vn='<span id="',Jka='_temp"></span>',Wn="\u0640",Kka='<span class="goog-inline-block" style="width:',Lka='px;">&nbsp;</span>';
function Xn(a,b,c,d,e,g,h,k,m,n){
    var p=Math.max(d.end-d.start,0),r=a.a.b.length,u=b,w=Xg(a.F)-1,v=a.k.a>=0,D=!!n;a.nm=0;a.Cs=0;a.Ew=0;a.fv=j;a.AE=0;a.Xn=0;a.LG=l;a.ED=0;a.b=new Vj;a.jL=a.o.Lb(K);a.qJ=a.o.Lb(Hh);Mka(a,b,i);a.Cs=Math.max(m,Rja(a.Q,$m,a.b,e).height);a.Ew=a.Cs;var I=p;m=[];var W=b,Q=j;for(n=j;(I>=0||D||fh(a.F,W))&&u<=w&&W<=w;){
        g=g&&a.nm==0;a:{
            Q=a;var ka=b;W=W;var ra=w,Gb=c,kd=I,Gn=p,PC=h,FNa=k,EW=v,nha=d.start,GNa=g;D=D;for(var FW=Q.F,oha=Q.M,pha=Q.ha,ob=0,GW=EW?Nka(Q.k,W):NaN,uj=new Cja(Q.Q,
                Q.b,Q.pL,W,EW?!(GW&1):e),vj=bh(FW,W),Rb=pha.o(W,oha),Bs=void 0,HNa=Q.ED;W<=ra;W+=ob){
                if(vj==Xa||vj==hh){
                    uj.Vt=i;break
                }var zw=vj==ih;if(zw)if(W>ka){
                    Q.LG=i;Q=j;break a
                }Mka(Q,W);if(Bs=Rb){
                    var $g=Q;ob=Bs;var Nk=W;Rb=uj;ob.xc(Nk,Gn);for(var ue=ob.yq(),Qc=void 0,og=void 0,Vh=Nk+ue;Vh>=Nk;Vh--){
                        Qc||(Qc=$g.jL[Vh]);if($g.J&&!og)og=$g.qJ[Vh];if(Qc&&(!$g.J||og))break
                    }Qc=Qc?Oka($g,Qc):Rb.J;$g=og?Pka($g,og):Rb.Q;Qc=Qc;if(!(Rb.Ju>=Rb.a)){
                        Tja(Rb,nb(Vn,Ca(ob),Jka),ob.Qg());Uja(Rb,Qc,$g);Rb.Ju=Rb.a+ob.yq()-1
                    }ob=ue
                }else if(zw){
                    ob=
                    Q;b:{
                        $g=Q;Nk=Gb;Rb=nha;ue=j;Qc=$g.o.Ka(Jh,ka);og=Uj(Qc);for(Vh=0;Vh<og.length;Vh++){
                            var Mp=og[Vh],ah=oj(Mp);if(ah>Rb&&(!ue||ah<oj(ue)))ue=Mp
                        }$g=dh($g.F,Nk);Nk=Rj(Qc);og=Sj(Qc);if($g&&Nk<og&&og>Rb)if(!ue||oj(ue)>og){
                            Rb={
                                In:Sj(Qc),
                                YM:0
                            };break b
                        }Rb=ue?{
                            In:oj(ue),
                            YM:ue.Gk()
                        }:j
                    }ob=ob;Rb=Rb;ue=nha;Qc=uj;ob.fv=Rb?Rb.YM:0;ob.AE=Rb?Rb.In:fha(ue);ob.Xn=ob.fv==0?ob.AE-ue:0;if(!(Qc.Ju>=Qc.a)){
                        Tja(Qc,Nja(ih),new oc(ob.Xn,0));Qc.ha=i;Qc.Ju=Qc.a
                    }ob=1
                }else{
                    ob=uj;var wj=vj;ah=FW;Rb=W;ue=Q.b;Qc=Q.pL;$g=PC+(FNa>HNa?
                        1:0);var pg=EW;if(ob.ha)ob=1;else{
                        Nk=uk(ue);ob.aG=i;og=Rb;Vh=wj;Mp=Nja(wj);var df=void 0;if(pg){
                            pg=void 0;pg=void 0;for(var HW=Xg(ah),Aw=Rb+1;Aw<HW;Aw++){
                                var Hn=bh(ah,Aw);if(Pm(Om.V(),Hn)==17){
                                    pg||(pg=new P);pg.append(Hn)
                                }else break
                            }if(pg=pg?pg.toString():z){
                                og+=pg.length;Vh+=pg;Mp+=pg
                            }wj=Pm(Om.V(),wj);if(wj==13){
                                HW=Vh;Aw=og;df=ob.M;pg=wj=z;Hn=bh(ah,Rb);if(Xm(Hn)==Um){
                                    if((Hn=Bja(ah,Rb))&&Xm(Hn)==Um)wj=Wn;if(Aw+1<Xg(ah)){
                                        ah=bh(ah,Aw+1);if(Xm(ah)==Um||Xm(ah)==Vm)pg=Wn
                                    }
                                }else if(Xm(Hn)==Vm)if((Hn=Bja(ah,
                                    Rb))&&Xm(Hn)==Um)wj=Wn;if(wj!=z||pg!=z){
                                    ah=Je(df,Nk,wj+HW+pg);df=Je(df,Nk,wj+pg);df=new oc(ah.width-df.width,ah.height)
                                }else df=j
                            }else if(1<<wj&120832){
                                df=new oc(0,0);Mp=z
                            }
                        }if(!df){
                            df=Je(ob.M,Nk,Mp);if(Vh==bb&&$g>0){
                                df=new oc(df.width+$g,df.height);Mp=nb(Kka,df.width,Lka);ob.nI+=df.width
                            }
                        }Uja(ob,ue,Qc);ob.k.append(Mp);if(Vh==bb)ob.pv+=df.width;ob.MD=ob.$C+df.width;ob.ZJ=Math.max(ob.ZC,df.height);ob.LD=df;ob.TS=Vh;ob.Ju=og;Rb=og-Rb+1;ob.FR+=Rb;ob=Rb
                    }
                }if(uj.MD-uj.pv>kd)if(D){
                    if(!uj.EH){
                        Vja(uj,Bs);Qka(Q,
                            uj,Gb,W,ob)
                    }break
                }else if(GNa&&!zw)break;else{
                    Q=j;break a
                }Vja(uj,Bs);vj==bb&&Q.ED++;Qka(Q,uj,Gb,W,ob);ue=W+ob;zw=bh(FW,ue);Rb=pha.o(ue,oha);vj=vj;Qc=zw;Bs=W==ra?i:Bs||Rb?i:vj==ih?i:GW>=0&&GW!=Nka(Q.k,ue)?i:Pha.test(vj)&&!Nha.test(vj)&&!Oha.test(Qc)?i:Rka(vj)!=Rka(Qc);if(Bs)break;vj=zw
            }Q=uj
        }if(!Q)break;u=Q.b;if((ka=Q.EH)||Q.Vt)m.push(Q);if(!ka)break;ka=gn(Q);a.nm+=ka;a.Cs=Math.max(a.Cs,Q.Pb());if(!Q.Wy)a.Ew=Math.max(a.Ew,Q.Pb());n=Q;D=l;I-=ka;W=u+1
    }g=0;if(n&&n.pv>0){
        a.nm-=gn(n);g=n.FR
    }if(!qa(a.fv)&&
        a.fv!=0){
        a:{
            h=a.AE-d.start;k=a.nm;switch(a.fv){
                case 2:p=Math.max(h-k,0);break a;case 1:p=yl(h-k/2,0,p-k);break a;default:p=h
            }
        }a.Xn=p;a.nm+=a.Xn;a.a.a[b-c]=new oc(a.Xn,0);a.a.b.splice(r,0,new Fka(c,b,b,a.Xn,l,j))
    }b=d?d.start:0;r=new Gka(c,Q&&Q.Vt?u-1:u,r,b,b+a.nm);var Cs;if(a.k.a>=0)Cs=jka(a.k,m);if(Cs)for(b=0;b<Cs.length;b++){
        d=Cs[b];p=d.ok;p.length&&Ska(a,p,c,d.Ic()!=e)
    }else Ska(a,m,c,l);c=[];for(e=0;e<m.length;e++){
        Cs=m[e];Cs.Wy&&c.push(Cs.Wy)
    }return new Hka(u,a.ED-g,m,a.nm,a.Cs,a.Ew,a.LG,a.Xn,
        a.b,c,r)
}function Ska(a,b,c,d){
    a=a.a.b;for(var e=a.length,g=b.length,h=0;h<g;h++){
        var k=b[h];if(k.Vt)break;a[e+(d?g-1-h:h)]=new Fka(c,k.a,k.b,gn(k),d,k.Wy)
    }
}function Qka(a,b,c,d,e){
    b=b.Fa;if(e==1)a.a.a[d-c]=b;else{
        var g=b.width,h=g%e;g=(g-h)/e;e=d+e;for(d=d;d<e;++d){
            var k=new oc(g+h,b.height);h=0;a.a.a[d-c]=k
        }
    }
}function Oka(a,b){
    var c=a.M.J;if(c){
        a:{
            var d=b.rp;if(!Yn(d))if(!c.a.jI(new Zn(d,b.Wl?C:M,b.Uk?E:M))){
                c=b.ia();c.ts_ff=rk;c=new Vj(c);break a
            }c=b
        }return c
    }return b
}
function Rka(a){
    if(a==Xa)return Xa;else if(a==hh)return hh;else if(a==ih)return ih;else if(jh(a))return bb;return Ll
}function Mka(a,b,c){
    if(c){
        c=a.o.Ka(K,b);b=a.o.Ka(Hh,b)
    }else{
        c=a.jL[b];b=a.qJ[b]
    }if(c)a.b=Oka(a,c);if(b)a.pL=Pka(a,b)
}function Pka(a,b){
    if(!a.J)return j;var c=b.Se;return c&&c.W()==0?c:j
};function $n(a,b,c,d){
    this.a=a||0;this.F=!!b;this.o=!!c;this.k=!!d;this.b=[]
};function ao(a){
    this.a=a
}t(ao,x);ao.prototype.A=function(){
    ao.z.A.call(this);delete this.a
};function bo(a,b){
    this.a=a;this.k=new Bka(a.R);this.b={};var c=a.K();this.F=new Ika(c.fa(),c,co,a,this.k,b,Te(eo(this.a)));this.o=new ln(a,b)
}t(bo,ao);o=bo.prototype;o.Th=0;o.Nr=0;o.yn=0;o.zs=0;o.RI=0;o.hg=i;o.zn=0;o.VF=0;o.AO=i;o.qr=j;var Tka="Called getHeight with a non-zero segment: ";o.Pb=function(a){
    if(a!=0){
        this.a.R.log(Error(Tka+a));return 0
    }return this.yn
};o.Rc=function(){
    return this.RI
};o.ii=function(){
    return 1
};function Km(a){
    a.Th=a.yn=a.Nr=0;var b=a.k;b.a=[];b.b=[];b.k=[];a.qr=j
}
o.dc=function(a,b,c,d,e){
    b=Uka(this,a,b,c,d,e);this.Ma(0);e&&fja(this,a);return b
};var Vka="Called layout with a non-zero segment: ";
o.xh=function(a,b,c,d,e,g){
    var h=new $n,k=fo(a);if(!k||c!=0){
        c!=0&&this.a.R.log(Error(Vka+c));h.F=this.Pb(0)>d.y;return h
    }c=this.Rc();if(k.index==b&&k.type==fj&&k.b.fa().length>=c){
        go(a,b,-c);h.a=3;h.b.push(this.o);return h
    }h.a=c==0?2:1;k=d.x;e=e.y;if(!g.b){
        g.b=g.a.Oc();Sb(g.b,Wka)
    }g=Uka(this,b,k,e,g.b,i);e=b+this.Rc()-1;ho(a.a,a.b.start,e,g);a=this.a.a;g=Ka(this.a.k.a);for(e=0;e<g.length;e++)Xka(a,g[e],b,b+this.Rc()-1);h.F=this.Pb(0)>d.y;return h
};
o.Aq=function(a,b){
    var c=new Ha(b,b+this.Rc()-1),d=io(a.b,c),e=this.a.k,g=[],h;for(h in a.a){
        var k=h,m=jo(a.a[k],c.start);m&&m.start<=c.start&&m.end>=c.end&&g.push(k)
    }for(h=0;h<d.length;h++){
        var n=d[h];k=ko(e,n)[0]||j;if((!k||Db(g,n))&&this.b[n])lo(this,this.b[n]);else if(k)if(m=k.Ln(c)){
            k=b;var p=m;m=this.b[n];if(m==j){
                m=[];this.b[n]=m
            }var r=lh(m,p,Rn);lo(this,r);n=m;r=r;for(var u=Rn,w=0;w<r.length;w++)Ub(n,r[w],u);for(n=0;n<m.length;n++)m[n].Vn(p[n].K());n=yb(m,s(this.QS,this,k));Yka(this,k,n);
            p=lh(p,m,Rn);mo(this,k,p);k=m;m=p;p=Rn;for(n=0;n<m.length;n++)ph(k,m[n],p)
        }
    }no(a,c)
};var Zka="redraw",$ka="lineviewRedraw";
function Uka(a,b,c,d,e,g){
    var h=rg.V();Ag(h,Zka,$ka);a.zn=c;var k=a.a.K(),m=oo(a,Jh,b);a.hg=m.Ic();var n=dh(k.b,b),p=n?Rj(m):Sj(m),r=Tj(m);c=Math.max(0,c-p-r);r=n&&po(a,b);c=ala(a,b,p,c,d,0,e,r);e=a.Rc();a.RI=c.Ub-b+1;a.AO=a.RI==1&&(fh(k.b,b)||bh(k.b,b)==hh);k=0;if(fh(a.a.K().b,c.Ub)&&!(po(a,b)&&po(a,c.Ub+1)))k=Le(ze.V(),m.dv);p=0;if(n&&!(po(a,b)&&po(a,b-1))){
        n=0;if(b>1){
            b=oo(a,Jh,b-1);n=Le(ze.V(),b.dv)
        }p=Math.max(Le(ze.V(),m.Gz)-n,0)
    }b=a.zs=Math.max(c.b,p);a.yn=Math.round(a.Th+a.Nr*(m.Cy-1)+k+b);
    d=d+b+a.yn;m=a.a.K();b=c.Ub+a.Rc();if(fh(a.a.K().b,b)&&bh(m.fa(),b+1)==Kg)a.yn+=Math.max(0,a.VF-d);a.qr=new yn(c,a.yn,g,a.zs);Cg(h,Zka,$ka);return a.Rc()-e
}

function oo(a,b,c){
    a=a.a.K();c>0&&fh(a.b,c)&&b!=Jh&&b!=Ih&&c--;return a.Ka(b,c)
}

function po(a,b){
    return Mk(oo(a,Ih,b))!=j
}
function fja(a,b,c,d){
    if(!(a.Rc()<=0)){
        var e=b+a.Rc()-1;if(!(c&&(e<c.start||b>c.end))){
            c=new Ha(b,e);e=a.a.k;d=d?[d]:e.b.zf();for(var g=0;g<d.length;g++){
                var h=d[g],k=e.b.execute(h,c)||[],m=a.b[h];if(m==j){
                    m=[];a.b[h]=m
                }var n=lh(m,k,Rn);lo(a,n);h=m;n=n;for(var p=Rn,r=0;r<n.length;r++)Ub(h,n[r],p);for(h=0;h<m.length;h++)m[h].Vn(k[h].K());h=yb(m,s(a.QS,a,b));Yka(a,b,h);k=lh(k,m,Rn);mo(a,b,k);m=m;k=k;h=Rn;for(n=0;n<k.length;n++)ph(m,k[n],h)
            }
        }
    }
}
function lo(a,b){
    for(var c=0;c<b.length;c++){
        var d=b[c];bla(a,d);y(d)
    }
}
function bla(a,b){
    var c=b.$h();if(c)for(var d=0;d<c.length;d++)a.o.P().Ap(c[d])
}
o.QS=function(a,b){
    var c=cla(this,a,b.a,b.J);return!(b.Os&&Tb(b.Os,c,Aka))
};function Yka(a,b,c){
    for(var d=0;d<c.length;d++)bla(a,c[d]);mo(a,b,c)
}var dla="kix-overlay",ela="kix-unprintable",fla="top: ",gla="px; left: ",hla="px; width: ",qo="px; height: ";
function mo(a,b,c){
    for(var d=0;d<c.length;d++){
        var e=c[d],g=cla(a,b,e.a,e.J),h=a.o.P();e=e;g=g;var k=h;if(!(e.ig&&e.Os&&Tb(e.Os,g,Aka))){
            e.Os=g;if(!e.ig)e.ig=[];g=e.Yw();var m=g.length;if(e.ig.length<m)for(var n=e.ig.length;n<m;n++){
                var p=e.WA(k);Rc(p,dla,ela);e.ig.push(p)
            }else if(e.ig.length>m)e.ig=Ob(e.ig,0,m);for(k=0;k<e.ig.length;k++){
                m=e.ig[k].style;n=m.cssText;p=g[k].Ed();var r=g[k].Pb();m.cssText=n+nb(fla,g[k].bc(),gla,g[k].Cc(),hla,p,qo,r,on)
            }
        }e=e.ig;for(g=0;g<e.length;g++)h.appendChild(a.o.G(),
            e[g])
    }
}
function cla(a,b,c,d){
    var e=a.k,g=d?a.zs:0;d=d?a.Th:a.yn;var h=c.start-b,k=c.end-b,m=e.k,n=e.b,p=m.length;if(p==0)b=[new Tn(0,0,0,0)];else if(h>m[p-1].Ub)b=[new Tn(m[p-1].Dm,g,0,d)];else{
        for(var r=[],u=0,w,v=0;v<p;v++,u=w){
            var D=m[v],I=D.a;w=D.Ub;if(!Eka(r,h,k,u,w,I,D.Dm-I,g,d)){
                u=v==p-1?n.length:m[v+1].b;I=I;for(var W=D.b;W<u;W++,I+=D){
                    var Q=n[W];D=Q.width;if(!Eka(r,h,k,Q.ze,Q.Ub,I,D,g,d))if(Q.a){
                        var ka=b+Q.ze;Q=Q.a.uR(new Ha(Math.max(c.start-ka,0),Math.min(c.end-ka,Q.Ub-Q.ze+1)));for(ka=0;ka<Q.length;++ka){
                            var ra=
                            Q[ka];ra.left+=I;ra.top+=0
                        }ka=r;Q=Q;ra=void 0;ra=void 0;if(Q.length>0){
                            ra=Q[0];Un(ka,ra.Cc(),ra.Ed(),ra.bc(),ra.Pb());for(ra=1;ra<Q.length;ra++)ka.push(Q[ra])
                        }
                    }else{
                        var Gb=ra=0;for(ka=Q.ze;ka<=Q.Ub;ka++){
                            var kd=e.a[ka].width;if(ka<h||ka>k){
                                if(ka>k==Q.b)ra+=kd
                            }else Gb+=kd
                        }Un(r,I+ra,Gb,g,d)
                    }
                }
            }
        }b=r
    }if(!a.hg){
        b.reverse();for(c=b.length-1;c>=0;c--){
            e=b[c];e.left=a.zn-e.left-e.width
        }
    }return b
}
function ala(a,b,c,d,e,g,h,k){
    var m=a.a.K(),n=[],p=new Ha(c,c+d);Km(a);var r=j,u=0;if(k){
        r=a.a.K();var w=oo(a,Ih,b);r=Hk(r.pb(w.Yb),w.Rb);r=new Nn(m,r,b);u=(r.ob||vn(r)).height;p.start=un(r,p.start)
    }w=ila(a,b,b,p,n,i,u);if(!w.length){
        p=Xn(a.F,b,b,p,a.hg,i,0,0,u,i);p.a.length>0&&Nb(n,p.a);a.Th=Math.max(a.Th,p.height);a.Nr=Math.max(a.Nr,p.F);w.push(p)
    }p=w[w.length-1].Ub;var v=new Ha(c,c+d),D=jla(a,v,e+g,h);if(D){
        Eb(n);w.length=0;Km(a);for(var I=b,W=D.b,Q=l,ka=0;ka<W.length;ka++){
            if(k&&!Q)W[ka].start=
                un(r,W[ka].start);var ra=ila(a,I,b,W[ka],n,l,u);if(ra.length){
                w=Lb(w,ra);p=ra[ra.length-1].Ub;I=p+1;Q=i
            }if(I>b&&(I>ro(m)||fh(m.b,p)))break
        }if(!Q){
            Eb(n);return ala(a,b,c,d,e,D.a-e+1,h,k)
        }
    }a:{
        b=oo(a,Jh,b).Gk();d=w[w.length-1].Mr.Dm-v.start;switch(b){
            case 1:b=Math.max(0,(v.end-v.start-d)/2);break a;case 2:b=Math.max(0,v.end-v.start-d);break a;default:b=0
        }
    }b=b;d=w;e=a.k.k;for(h=0;h<d.length;h++){
        k=d[h].Mr;k.a+=b;k.Dm+=b;e.push(k)
    }return new yka(g,p,n,c,r,w,a.hg)
}
function ila(a,b,c,d,e,g,h){
    for(var k=oo(a,Jh,b),m=[],n=new Ha(d.start,d.end),p=a.a.K();;){
        if(n.start>=n.end||b>=Xg(p.fa()))break;d=Xn(a.F,b,c,n,a.hg,g,0,0,h);a.Th=Math.max(a.Th,d.height);a.Nr=Math.max(a.Nr,d.F);if(!d.ok.length)break;if(!d.k&&k.Gk()==3&&d.Ub!=ch(p.fa(),b)){
            var r=d.Mr;r=n.end-n.start-(r.Dm-r.a);d=Xn(a.F,b,c,n,a.hg,g,Math.floor(r/d.b),Math.max(Math.floor(r)%d.b-1,0),h)
        }d.a.length>0&&Nb(e,d.a);m.push(d);if(!d.k)break;g=l;b=d.Ub+1;n.start=d.Mr.Dm
    }return m
}
o.Ma=function(a){
    if(!(a>0))if(this.qr){
        this.o.Ii(this.qr);this.qr=j
    }
};o.xq=function(){
    return!!this.qr
};o.$a=function(){
    return this.o
};
function jla(a,b,c,d){
    for(var e=c+a.Th,g=[],h=0,k;k=d[h];h++)if(!(k.top+k.height<=c)){
        if(k.top>e)break;g.push(k)
    }if(g.length==0)return j;Sb(g,function(p,r){
        return Qb(p.left,r.left)
    });if(a.hg){
        c=b.start;b=b.end
    }else{
        c=a.zn-b.end;b=a.zn-b.start
    }d=[];e=Number.MAX_VALUE;k=g.length-1;for(h=0;h<=k;h++){
        var m,n;if(a.hg){
            m=g[h];n=m.left
        }else{
            m=g[k-h];n=a.zn-m.left-m.width
        }c<n&&d.push(new Ha(c,n));c=Math.max(n+m.width,c);m=m.top+m.height;e=Math.min(e,m);a.VF=Math.max(a.VF,m)
    }c<b&&d.push(new Ha(c,b));return new kla(d,
        e)
}o.Fb=function(a,b,c){
    return so(this,c)
};var lla="Called getPositionForCoordinates on a line.";o.Lm=function(){
    this.a.R.log(Error(lla));return j
};o.Zc=function(a){
    if(a.W()==0&&a.a<this.Rc())return this;return j
};var mla="Called getLineSpacerRange with a location outside this line.";o.Nc=function(a){
    var b=this.Rc();if(a.a>=b){
        this.a.R.log(Error(mla));return j
    }return new Ha(0,b-1)
};o.Dc=function(){
    return j
};
function so(a,b){
    b=a.hg?b:a.zn-1-b;var c=a.k,d=c.k,e=d[0];if(!e)return j;if(b<e.a||a.AO)return new J(0);for(var g=0,h;;e=h){
        h=d[++g];if(!(h&&e.a==e.Dm))if(!h||b<h.a)break
    }c=c.b;d=e.a;g=h?h.b:c.length;for(var k=e.b;k<g;k++){
        h=c[k];if(d+h.width>b){
            if(!h.a){
                a:{
                    e=b-d;c=a.k;d=void 0;if(h.b){
                        g=-1;for(d=h.ze;d<=h.Ub;d++)g+=c.a[d].width;e=g-e
                    }for(d=h.ze;d<=h.Ub;d++){
                        g=c.a[d].width;if(e<g/2){
                            h=new J(d);break a
                        }e-=g
                    }h=new J(d,i)
                }return h
            }b-=d;a.hg||(b=h.width-1-b);if((e=h.a.Fb(b,0))&&e.W()!=0)return e;return new J(h.ze+
                (e?e.a:0))
        }d+=h.width
    }return new J(e.Ub+1,i)
}function to(a,b,c){
    if(A&&c&&b<c)return b;return 1.7*b
}function nla(a,b){
    var c=uo(a.a.K(),K,b);return to(a,tk(c),c.eh)
}o.ut=function(){
    return 0
};
o.Gf=function(a,b,c){
    if(a.W()!=0)return j;var d=Dka(this.k,a.shift(-b));if(!d)return j;var e=d.SE,g=d.x;d=this.hg!=(e?e.b:l);if(e&&e.a){
        var h=e.a.QI(a,b+e.ze,c);if(h){
            this.hg||(g+=e.width-1);h.a.x=Math.floor((this.hg?g:this.zn-1-g)+h.a.x);h.a.y+=this.zs;if(!c&&h.height==j)h.height=nla(this,a,b);if(h.Ic==j)h.Ic=d;return h
        }
    }e=Math.floor(this.hg?g:this.zn-1-g);g=this.zs;var k=uo(this.a.K(),K,a),m=k.eh;h=this.Nr;var n=to(this,m);m=to(this,tk(k),m);var p=this.Th;k=k.Nm();if(n<p||k==xk)switch(k){
        case sk:case yk:g+=
            (h<p?4:0)+p-n-(A?h/n:1.5*h/n);break;case xk:g+=p-m/2-2
    }e=new nc(e,g);a=c?j:nla(this,a,b);return new Nm(0,a,e,d)
};o.A=function(){
    bo.z.A.call(this);delete this.k;for(var a in this.b)for(var b=this.b[a],c=0;c<b.length;c++)y(b[c]);delete this.b;delete this.qr;y(this.o);delete this.o
};function kla(a,b){
    this.b=a;this.a=b
}var co=new Pn;function vo(){
    this.b=new jja
}vo.prototype.a=NaN;vo.prototype.k=j;vo.prototype.o=0;vo.prototype.wc=function(){
    return this.a
};function Nka(a,b){
    b-=a.a;return b>=0&&b<a.b.b?kja(a.b,b,a.b.Q):NaN
}
function jka(a,b){
    var c=b.length;if(c==0)return a.a>=0?[]:j;var d=b[c-1],e=b[0].a-a.a,g=d.b+1-a.a;if(!(e>=0&&e<=g&&g<=a.b.b))return j;c=new wo(a.a,b);var h=a.b;d=d.pv>0?d.a-a.a:g;var k=h.ha?0:h.F;h=new vja(h,c);h.k=sa(g)&&g<h.a.b?g:h.a.b;h.b=h.a.Q;if(d<h.b)h.b=d;h.o=[];xja(h,e||0,k);e=h.o;return c.a==c.k.length?e:j
}function ola(a,b,c){
    this.k=a;this.b=b;this.a=c
}var pla=Om.V();function xo(a,b,c,d){
    Tm.call(this,a,b,c);this.ok=d
}t(xo,Tm);xo.prototype.Ic=function(){
    return!(this.a&1)
};
function wo(a,b){
    this.o=a;this.k=b;this.a=0
}t(wo,Sm);wo.prototype.b=function(a,b,c){
    for(var d=this.o+b,e=this.k,g=this.a,h=g,k=e.length;h<k&&e[h].b<d;)h++;d=g==0&&h==k?e:e.slice(g,h);this.a=h;return new xo(a,b,c,d)
};function yo(){
    this.a=new vo
};function qla(a,b,c){
    this.b=a;this.a=b;this.offsetTop=c
};function zo(a,b,c,d){
    this.k=a;this.b=b||[];this.a=c||j;this.Nf=d||j
}t(zo,x);zo.prototype.W=function(){
    return this.k
};zo.prototype.Lb=function(){
    return this.b
};zo.prototype.ia=function(){
    var a={};a.stsl_type=this.k;if(this.a){
        a.stsl_leading=this.a.ia();a.stsl_leadingType=this.a.W()
    }if(this.Nf){
        a.stsl_trailing=this.Nf.ia();a.stsl_trailingType=this.Nf.W()
    }var b=[];mh(this.b,function(c,d){
        b[c]=d.ia();return l
    });a.stsl_styles=b;return a
};
function rla(a,b){
    var c=b.stsl_type,d=b.stsl_leadingType,e=j;if(d){
        e=Xh(d);e.update(b.stsl_leading)
    }d=b.stsl_trailingType;var g=j;if(d){
        g=Xh(d);g.update(b.stsl_trailing)
    }var h=[];mh(b.stsl_styles,function(k,m){
        if(m){
            var n=Xh(c);n.update(m);h[k]=n
        }return l
    });return new zo(c,h,e,g)
}zo.prototype.A=function(){
    zo.z.A.call(this);this.b&&mh(this.b,function(a,b){
        y(b);return l
    });delete this.b;y(this.a);delete this.a;y(this.Nf);delete this.Nf
};function Ao(a,b,c,d,e,g){
    this.o=a;this.k=b;this.b=c||[];this.Cd=d||{};this.yf=e||{};this.a=g||{}
}t(Ao,x);o=Ao.prototype;o.fa=function(){
    return this.o
};o.ji=function(){
    return this.k
};o.Uf=function(a){
    for(var b=this.k,c=0;c<b.length;c++)if(b[c].W()==a)return b[c];b=this.b;for(c=0;c<b.length;c++)if(b[c].W()==a)return b[c];return j
};
o.ia=function(){
    var a={};a.dsl_spacers=this.fa();var b=[];mh(this.k,function(h,k){
        b[h]=k.ia();return l
    });a.dsl_styleslices=b;var c=[];mh(this.b,function(h,k){
        c[h]=k.ia();return l
    });a.dsl_metastyleslices=c;a.dsl_entitypositionmap=this.Cd;var d={},e={},g;for(g in this.yf){
        d[g]=this.yf[g].ia();e[g]=this.yf[g].W()
    }a.dsl_entitymap=d;a.dsl_entitytypemap=e;d={};for(g in this.a)d[g]=this.a[g].ia();a.dsl_relateddocslices=d;return a
};
o.A=function(){
    Ao.z.A.call(this);for(var a=0;a<this.k.length;a++)y(this.k[a]);delete this.k;delete this.Cd;for(var b in this.yf)y(this.yf[b]);delete this.yf
};function Bo(a,b,c){
    var d=a.fa();c=q(c)?c:d.length-1;if(b>c)return new Ao(z,[]);d=d.substring(b,c+1);var e=sla(a.ji(),b,c),g=sla(a.b,b,c),h=a.Cd,k={},m;for(m in h){
        var n=m;k[n]=h[n].slice(b,c+1)
    }var p={},r=a.yf;for(n in k)mh(k[n],function(u,w){
        for(var v=0,D;D=w[v];v++)p[D]=r[D];return l
    });return new Ao(d,e,g,k,p,Qa(a.a))
}
function sla(a,b,c){
    for(var d=[],e=0,g;g=a[e];e++){
        var h=g.Lb().slice(b,c+1);d.push(new zo(g.W(),h))
    }return d
}function tla(a){
    for(var b=[],c=a.ji(),d=0,e;e=c[d];++d)b.push(new zo(e.W(),undefined,e.a));b=new Ao(z,b);return Co(a,b,0,i)
}
function Co(a,b,c,d){
    var e=a.fa(),g=b.fa(),h=g.length,k=e.length;e=nb(e.substr(0,c),g,e.substr(c));g=ula(a.ji(),b.ji(),c,k,h,d);k=ula(a.b,b.b,c,k,h,d);c=vla(a.Cd,b.Cd,c,h);h=Qa(a.yf);var m=b.yf,n;for(n in m)h[n]=m[n];if(d)for(n in h){
        m=h[n];h[n]=Di(m.W(),n,m.ia())
    }a=Qa(a.a);b=b.a;for(n in b)a[n]=b[n];if(d)for(n in a)a[n]=tla(a[n]);return new Ao(e,g,k,c,h,a)
}
function vla(a,b,c,d){
    var e=new cc;dc(e,Ka(a));dc(e,Ka(b));var g={};e=e.Oc();for(var h=0,k;k=e[h];h++){
        var m=[],n=a[k];n&&mh(n,function(w){
            var v=w>=c?w+d:w;if(n[w])m[v]=Mb(n[w]);return l
        });for(var p=nh(b[k]),r=0;r<p.length;r++){
            var u=p[r];m[u+c]=Mb(b[k][u])
        }g[k]=m
    }return g
}
function ula(a,b,c,d,e,g){
    for(var h={},k={},m={},n=0,p;p=a[n];n++){
        var r=p.W();h[r]=[];mh(p.Lb(),function(w,v){
            h[r][w>=c?w+e:w]=g?v.Ba():v;return l
        });if(c==0){
            if(p=p.Nf)m[r]=g?p.Ba():p
        }else if(c==d)if(p=p.a)k[r]=g?p.Ba():p
    }for(n=0;a=b[n];n++){
        r=a.W();h[r]=h[r]||[];p=oh(a.Lb(),0,c);for(var u in p)h[r][u]=g?p[u].Ba():p[u];if(c==0){
            if(p=a.a)k[r]=g?p.Ba():p
        }else if(c==d)if(p=a.Nf)m[r]=g?p.Ba():p
    }b=[];for(u in h){
        d=u;b.push(new zo(d,h[d],k[d],m[d]))
    }return b
}
function wla(a){
    var b=a.dsl_spacers,c=[];mh(a.dsl_styleslices,function(m,n){
        c[m]=rla(zo.prototype,n);return l
    });var d=[];mh(a.dsl_metastyleslices,function(m,n){
        d[m]=rla(zo.prototype,n);return l
    });var e=a.dsl_entitypositionmap,g=a.dsl_entitymap,h=a.dsl_entitytypemap,k;for(k in g)g[k]=Di(h[k],k,g[k]);a=a.dsl_relateddocslices;for(k in a)a[k]=wla(a[k]);return new Ao(b,c,d,e,g,a)
};function Do(a,b){
    this.Y=a;this.b={};this.a=new Eo;this.k=new Eo;this.uc=[];this.xm=[];this.R=b
}t(Do,Vf);o=Do.prototype;o.Cl=j;function xla(a,b){
    a.uc=[];mh(b,function(c,d){
        this.uc[c]=d;return l
    },a)
}var yla="Calling insertDelta with invalid parameters - index:",zla=" delta:";
//b位置  c字串長度
function Fo(a,b,c){
	//showObject(c);
    if(b<0||c<=0){
		
		a.R.log(Error(yla+b+zla+c));
	}
	else{
		//showObject(a.b['kix-overlay-selection'] );
		//alert(b+' '+c);
        a.k.shift(b,c);
		Ala(a,b,c);
		a.Cl=j;
		
		for(var d in a.b){
			a.b[d].shift(b,c);
		}
		//showObject(a.a);
		a.a.shift(b,c)||Go(a.a,b,b+c-1)
    }
}

var Bla="forceRedraw";function Ho(a){
    a.dispatchEvent(Bla)
}
var Cla="Calling redrawRange with an invalid range: [";function Io(a,b,c){
    b<0||c<0||c<b?a.R.log(Error(Cla+b+jc+c+jg)):Go(a.k,b,c)
}var Dla="Calling redrawOverlay with an invalid range: [";function Xka(a,b,c,d){
    if(c<0||d<0||d<c)a.R.log(Error(Dla+c+jc+d+jg));else{
        a.b[b]||(a.b[b]=new Eo);Go(a.b[b],c,d)
    }
}var Ela="Calling deleteSpacers with invalid params: startIndex =",Fla=", number of spacers = ";
function Gla(a,b,c){
    var d=c.fa().length;if(b<0||d==0)a.R.log(Error(Ela+b+Fla+d));else{
        var e=b+d-1;a.Cl=j;a.k.remove(b,e,i);var g=a.a.remove(b,e,i),h;for(h in a.b)a.b[h].remove(b,e,i);for(h=0;h<g.length;h++){
            var k=g[h].end-b,m=Bo(c,0,g[h].start-b-1);c=Bo(c,k+1);c=Co(c,m,0,void 0)
        }m=c;k=nh(a.xm);h=[];for(g=0;g<k.length;g++){
            c=k[g];if(c>e)break;c>=b&&c<=e&&h.push(c)
        }if(h.length==0)g=m;else{
            m=new Hla(m);for(g=0;c=h[g];g++){
                k=0;for(var n;n=a.xm[c][k];k++){
                    var p=m,r=c-b;n=n;var u=n.ra(),w=n.W(),v=p.Cd[w];
                    v||(v=p.Cd[w]=[]);(w=v[r])||(w=v[r]=[]);w.push(u);p.yf[u]=n
                }delete a.xm[c]
            }g=m
        }c=0;m=nh(a.uc);for(h=0;h<m.length;h++){
            k=m[h];if(k>=b&&k<=e+1){
                p=a.uc[k];g=Co(g,p,k-b+c);c+=p.fa().length;delete a.uc[k]
            }if(k>e)break
        }if(g.fa().length>0)a.uc[b]=g;else delete a.uc[b];Ala(a,b+1,-d)
    }
}function Ila(a,b,c){
    var d=a.xm[b];d||(d=a.xm[b]=[]);(a=Di(c.W(),c.ra(),c.ia()))&&d.push(a)
}
/***insert content  插入資料*****/
function Ala(a,b,c){
	

    var d=[];
	mh(a.uc,function(g){
        d[g>b?g+c:g]=this.uc[g];return l
    },a);
	a.uc=d;
	var e=[];
	mh(a.xm,function(g){
        e[g>b?g+c:g]=this.xm[g];return l
    },a);
	a.xm=e;
	//showObject(a.xm);
	
}function Jo(a){
    return a.Cl||(a.Cl=nh(a.uc))
}function Ko(a,b){
    var c=a.Km(b);return c?c.index:-1
}function Lo(a,b){
    var c=a.Km(b);return c?c.type:Wi
}function io(a,b){
    var c=[],d;for(d in a.b){
        var e=d;Mo(a.b[e],b.start,b.end)&&c.push(e)
    }return c
}var Jla="Next redraw is DELETE but no deleted document slice.";
o.Km=function(a){
    var b=a?a.start:0;a=a?a.end:Number.MAX_VALUE;var c=Mo(this.a,b,a),d=Mo(this.k,b,a),e=Jo(this),g=Pb(e,b);if(g<0)g=-g-1;e=e[g];if(!q(e)||e<=b||e>a+1)e=-1;if(d&&(!c||d.start<c.start)&&(e<0||d.start<e))return new No(d.start,d.end);if(c&&(e<0||c.start<e))return new Oo(c.start,c.end);if(e>=0){
        b=this.uc[e]||j;if(!b){
            this.R.log(Error(Jla));return j
        }return new Po(e,b)
    }return j
};function Qo(a,b){
    var c=a.uc[b];return c?c.fa():z
}function Ro(a,b,c,d){
    d&&a.Gd(d);d=So(a,0,b);To(a,b-1,c,[],d)
}
function So(a,b,c){
    for(var d=[],e=Jo(a),g=0;g<e.length;g++){
        var h=e[g];if(h>=b&&h<=c){
            d[h]=a.uc[h];delete a.uc[h];a.Cl=j
        }
    }return d
}function Uo(a,b,c,d){
    d&&a.Gd(d);ho(a,0,b,c)
}function ho(a,b,c,d){
    a.k.remove(b,c);var e=a.a.remove(b,c);b=So(a,b,c);To(a,c,d,e,b)
}function Vo(a,b){
    var c=b?Wo(a.Y,b):0;return new Ha(c,Xo(a.Y,c))
}o.Gd=function(){};var Yo="range";
o.DB=function(a,b){
    var c=Ob(arguments,2);Ib(c,0,0,j);Ib(c,0,0,j);var d=this.Km(),e=d?d.type:Wi;for(d=d?d.index:-1;e!=Wi;){
        c[0]=d;c[1]=e;var g=d,h=e,k=h==fj?Qo(this,g).length:0;if(a.apply(b,c))break;e=(d=this.Km())?d.type:Wi;d=d?d.index:-1;if(d==g&&e==h&&(e!=fj||k==Qo(this,d).length))switch(Lo(this)){
            case gj:Uo(this,Ko(this),1);break;case fj:Ro(this,Ko(this),-1);break;case Yo:Uo(this,Ko(this),0)
        }
    }
};
function To(a,b,c,d,e){
    for(var g=0,h=0,k;k=d[h];h++)g+=k.end-k.start+1;mh(e,function(m,n){
        g-=n.fa().length;return l
    });c=g-c;if(c>0)Kla(a,b,c);else c<0&&Lla(a,b,c,d,e)
}
function Kla(a,b,c){
    for(b=b+1;c>0;){
        var d=jo(a.a,b),e=d?Math.max(d.start,b):Number.MAX_VALUE,g=b,h=Jo(a);g=Pb(h,g);if(g<0)g=-g-1;h=(g<h.length?h[g]:j)||Number.MAX_VALUE;e=Math.min(e,h);if(b<e){
            d=Math.min(c,e-b);Go(a.a,b,b+d-1);c-=d;b=e
        }else if(e==h){
            d=a.uc[h];e=Bo(d,c);g=e.fa().length;if(g>0)a.uc[h]=e;else delete a.uc[h];a.Cl=j;c-=d.fa().length-g
        }else b=Math.min(h,d.end+1)
    }
}
function Lla(a,b,c,d,e){
    var g=b;c=Math.abs(c);for(var h=nh(e),k=j,m=-1;c>0;){
        k||(k=d.pop());var n=k?Math.min(k.end,g):-1;if(m<0&&h.length>0)m=h.pop()-1;var p=Math.max(n,m);if(g>p){
            g=Zo(a.Y,g-Math.min(c,g-p)+1,g);n=a.uc[b+1];a.uc[b+1]=n?Co(n,g,0):g;a.Cl=j;c-=g.fa().length;g=p
        }else if(p==m){
            m=e[m+1];m=Bo(m,m.fa().length-c);n=a.uc[b+1];a.uc[b+1]=n?Co(n,m,0):m;a.Cl=j;c-=m.fa().length;m=-1
        }else{
            g=Math.max(m,k.start-1);if(g<k.start)k=j
        }
    }
}
o.clear=function(a){
    var b=0,c=Number.MAX_VALUE;if(a){
        a=Vo(this,a);b=a.start;c=a.end
    }this.a.remove(b,c);this.k.remove(b,c);this.Cl=j;mh(this.uc,function(e){
        e>=b&&e<=c&&delete this.uc[e];return l
    },this);for(var d in this.b)this.b[d].remove(b,c)
};o.A=function(){
    Do.z.A.call(this);y(this.a);delete this.a;y(this.k);delete this.k;delete this.uc
};function $o(a,b){
    this.index=a;this.type=b
}$o.prototype.a=function(a){
    return!!a&&this.index==a.index&&this.type==a.type
};
function Oo(a,b){
    $o.call(this,a,gj);this.Ub=b
}t(Oo,$o);Oo.prototype.a=function(a){
    return Oo.z.a.call(this,a)&&this.Ub==a.Ub
};function No(a,b){
    $o.call(this,a,Yo);this.Ub=b
}t(No,$o);No.prototype.a=function(a){
    return No.z.a.call(this,a)&&this.Ub==a.Ub
};function Po(a,b){
    $o.call(this,a,fj);this.b=b
}t(Po,$o);Po.prototype.a=function(a){
    return Po.z.a.call(this,a)&&this.b.fa()==a.b.fa()
};function ap(a,b){
    this.a=a;this.b=b
}t(ap,x);function fo(a){
    return a.a.Km(a.b)
}
function go(a,b,c){
    var d=a.a;a=So(d,a.b.start,b);To(d,b-1,c,[],a)
}ap.prototype.A=function(){
    ap.z.A.call(this);delete this.a;delete this.b
};function bp(a){
    this.b=a;this.a={}
}t(bp,x);function no(a,b){
    var c=a.b,d=b.start,e=b.end,g;for(g in c.b)c.b[g].remove(d,e);for(var h in a.a)a.a[h].remove(b.start,b.end)
}bp.prototype.A=function(){
    bp.z.A.call(this);delete this.b;delete this.a
};function Eo(a){
    this.a=[];if(a)for(var b=0,c;c=a[b];b++)this.a.push(c.Ba())
}t(Eo,x);Eo.prototype.nv=function(){
    return this.a
};
function Mo(a,b,c){
    if((a=jo(a,b))&&a.start<=c)return new Ha(Math.max(a.start,b),Math.min(a.end,c));return j
}function jo(a,b){
    for(var c=0,d;d=a.a[c];c++)if(d.end>=b)return d;return j
}
function Go(a,b,c){
    b=new Ha(b,c);c=l;
	//showObject(b);
	for(var d=[],e=0;e<a.a.length;e++){
        var g=a.a[e];
		if(Math.max(b.start,g.start)>Math.min(b.end,g.end)+1){
            if(!c&&b.end<g.start){
                d.push(b);c=i
            }
			d.push(g)
        }else{
            if(!(b.start<=g.start&&b.end>=g.end)){
                b.start=Math.min(b.start,g.start);b.end=Math.max(b.end,g.end)
            }if(!c){
                d.push(b);c=i
            }
        }
    }
	c||d.push(b);
	a.a=d
	 
}
Eo.prototype.shift=function(a,b){
    if(b<=0)return l;for(var c=l,d=0;d<this.a.length;d++){
        var e=this.a[d];if(a<=e.start){
            e.start+=b;e.end+=b
        }else if(a<=e.end+1){
            e.end+=b;c=i
        }
    }return c
};
Eo.prototype.remove=function(a,b,c){
    for(var d=[],e=b-a+1,g=[],h=0,k;k=this.a[h];h++)if(k.end<a)d.push(k);else if(k.start>b){
        if(c){
            k.start-=e;k.end-=e
        }d.push(k)
    }else if(k.start>=a&&k.end<=b)g.push(k);else if(k.start<=a&&k.end>=b){
        g.push(new Ha(a,b));if(c){
            k.end-=e;d.push(k)
        }else{
            k.start<a&&d.push(new Ha(k.start,a-1));k.end>b&&d.push(new Ha(b+1,k.end))
        }
    }else if(k.start<=a&&k.end>=a){
        g.push(new Ha(a,k.end));k.end=a-1;d.push(k)
    }else if(k.start<=b&&k.end>=b){
        g.push(new Ha(k.start,b));if(c){
            var m=tb(d),
            n=k.end-b;if(m&&m.end==a-1)m.end+=n;else{
                k.start=a;k.end=k.start+n-1;d.push(k)
            }
        }else{
            k.start=b+1;d.push(k)
        }
    }this.a=d;return g
};Eo.prototype.A=function(){
    Eo.z.A.call(this);delete this.a
};function Hla(a){
    Ao.call(this,a.fa(),a.ji(),a.b,a.Cd,a.yf,a.a)
}t(Hla,Ao);function cp(a,b){
    Am.call(this,a);this.J=b;this.Q=new Ha(0,0);this.b=[];this.k=new Gm(s(this.p$,this));this.o=new Gm(s(this.f7,this));var c=a.M;a.P();this.ha=c?new Fm(c):new Em
}t(cp,Mm);var Mla=A&&!Nc(7);o=cp.prototype;o.yG=function(a,b){
    return b>=ro(a)||b==Xo(a,b)
};o.iT=0;o.jT=0;o.nn=0;o.MC=0;o.tq=0;o.fy=0;o.HI=0;o.h7=j;o.g9=0;o.NC=0;o.aE=0;o.Gl=j;o.fK=0;o.dL=l;var Nla="Attempted to set invalid width: ";function dp(a,b){
    if(b!=a.J)b<1?a.a.R.log(Error(Nla+b)):Ola(a,b,a.tq,a.jT,a.fy,a.iT)
}o.Ed=function(){
    return this.J
};
function ep(a){
    return a.J-a.nn-a.MC
}function fp(a,b,c,d,e){
    if(q(c))a.jT=c;if(q(e))a.iT=e;
	Ola(a,a.J,q(b)?b:a.tq,q(c)?c:a.MC,q(d)?d:a.fy,q(e)?e:a.nn)
}
function Ola(a,b,c,d,e,g){
    for(;b-g-d<1&&g+d>0;){
        d=Math.max(0,d-1);g=Math.max(0,g-1)
    }if(c!=a.tq){
        a.cb().style.paddingTop=c+L;a.tq=c
    }if(e!=a.fy){
        a.cb().style.paddingBottom=e+L;a.fy=e
    }c=l;if(g!=a.nn){
        a.cb().style.paddingLeft=g+L;a.nn=g;c=i
    }if(d!=a.MC){
        a.cb().style.paddingRight=d+L;a.MC=d;c=i
    }
	if(b!=a.J||c){
        a.J=b;
		a.cb().style.width=ep(a)+L
    }
	
	
}
o.kd=function(){
    return this.k.ea(this.b.length)
};
var Pla="Provider asked for index past the end of the plugins array.";o.p$=function(a,b){
    if(a<0)return 0;if(a>=this.b.length){
        this.a.R.log(Error(Pla));return b+1
    }return b+this.b[a].iu()
};o.f7=function(a){
    if(a<0){
        this.ha.b(this.tq);return this.tq
    }if(a>=this.b.length)return Number.MAX_VALUE;this.ha.b(this.b[a].sq());return this.ha.o(a+1)
};function gp(a,b){
    Im(a.o,b);a.ha.F(b)
}o.ta=function(){
    cp.z.ta.call(this);var a=new yo;a=new Jm(new bo(this.a,a.a),a);this.b[0]=a;this.gj(a,0,i)
};
var Qla="kix-boxview-content",Rla="kix-boxview";
o.L=function(){
    var a=this.Qf=this.VA();
	Rc(a,Qla);
	this.wb(this.P().L(O,Rla,a))
};
var hp="width: ";
o.VA=function(){
    return this.P().L(O,{
        style:hp+ep(this)+on
    })
};
o.cb=function(){
    return this.Qf
};
function ip(a,b,c){
    if(c<a.b.length){
        a.Na(b);b.kK(a.b[c].G())
    }else a.Na(b,i);Im(a.k,c);gp(a,c);Ib(a.b,c,0,b)
}
var Sla="Should never remove the first paragraph.";
function Tla(a,b,c){
    if(a.b.length<=1)a.a.R.log(Error(Sla));else{
        var d=a.b[b];Ula(a,c,b,-d.sq());Ro(a.a.a,c.ze+a.k.ea(b),-d.iu());if(a.b.length==1)d.oR();else{
            Im(a.k,b);gp(a,b);Kb(a.b,b);a.removeChild(d,i);y(d)
        }
    }
}
function Ula(a,b,c,d){
    if(!(d==0||b.b.length==0)){
        var e=l,g=a.o.ea(c);c=c;for(var h,k;h=a.b[c],k=a.b[c+1];c++){
            g+=h.sq();if(h.k!=k.k){
                e=i;break
            }
        }if(e){
            a=g;a-=d;for(e=0;g=b.b[e];e++)if(g.top>=a)g.top+=d
        }
    }
}
var Vla="Missing positioned embedded object view.";
function jp(a,b,c){
    var d=a.b[b],e=c.ze+a.k.ea(b),g=d.sq(),h=a.a.K(),k=a.a.o.a;if(b<=0||a.b[b].k!=a.b[b-1].k)for(var m=kp(h,e),n=0;n<m.length;n++){
        var p=m[n],r=k[p];if(r){
            if(!r.qb||r.wq!=d){
                r=a;p=h.pb(p);var u=d,w=c.b,v=r.a.o.a[p.ra()];v.G()||v.L();v.G().style.position=Ri;Bm(v,Le(ze.V(),p.Eu),Le(ze.V(),p.Fu));v.qb?r.P().appendChild(u.G(),v.G()):v.Ma(u.G());v.wq=u;Wla(r,v,w)
            }
        }else a.a.R.log(Error(Vla))
    }k=d.k.a;if(a.dL){
        if(k.k!=a.fK){
            m=a.fK;p=h.fa();n=Yg(p,e);u=ch(p,e)+1;r=h.Ka(Jh,n).Ic();k.k=j;k.a=
            NaN;if(u>=n){
                p=new ola(p,n,u-n);k.o=r?0:1;r=k.b;u=k.o;if(u<0||u>61)u=126|u&1;r.b=p.a;r.F=u;r.M=0;r.J=1;r.o=[];r.k=[];r.Fa=[];r.ha=(u&126)==126?u:0;if(r.b){
                    u=0;var D;w=r.a=0;v=(r.F&126)==126;var I=0,W,Q;if(Q=v)W=w=r.F&1?64:0;else W=0;for(u=0;u<r.b;){
                        D=Pm(pla,bh(p.k,p.b+u));r.a|=1<<D;r.o[u++]=D|W;if(Q){
                            if(D==0){
                                Q=l;if(W!=0){
                                    W=0;for(D=I;D<u;D++)r.o[D]&=-65
                                }continue
                            }if(D==1||D==13){
                                Q=l;if(W==0){
                                    W=64;for(D=I;D<u;D++)r.o[D]|=64
                                }continue
                            }
                        }if(D==7)if(u<r.b){
                            r.J++;if(Q=v){
                                I=u;W=w
                            }
                        }
                    }if(v)r.F=Qm(r,0);r.a|=mja[r.F&
                    1];r.Q=r.b;r.Fa[r.J-1]=r.b;p=0;u=Qm(r,0);w=0;v=pja(r);if(!(v!=2&&r.J==1))if(r.J==1&&!(r.a&120832))for(p=0;p<r.b;++p)r.k[p]=u;else{
                        I=u;Q=0;D=[];var ka=0,ra=0;for(p=r.a=0;p<r.b;++p){
                            v=r.o[p]&-65;switch(v){
                                case 11:case 12:W=I+2&-130;if(W<=61){
                                    D[Q++]=I;I=W;if(v==12)I|=128
                                }else if((I&-129)==61)++ra;else++ka;r.a|=262144;break;case 14:case 15:W=(I&-129)+1|1;if(W<=61){
                                    D[Q++]=I;I=W;if(v==15)I|=128
                                }else++ra;r.a|=262144;break;case 16:if(ra>0)--ra;else if(ka>0&&(I&-129)!=61)--ka;else if(Q>0){
                                    --Q;I=D[Q]
                                }r.a|=
                                262144;break;case 7:ra=ka=Q=0;u=Qm(r,p);if(p+1<r.b){
                                    I=Qm(r,p+1);r.Fa[w++]=p+1
                                }r.a|=128;break;case 18:r.a|=262144;break;default:if(u!=I){
                                    u=I;r.a|=(u&128)!=0?oja[u&1]|-2147483648:nja[u&1]|-2147483648
                                }if((u&128)==0)r.a|=1<<v
                            }r.k[p]=u
                        }if((r.a&516056)!=0)r.a|=mja[r.F&1];v=pja(r)
                    }r.M=v;switch(r.M){
                        case 0:r.Q=0;break;case 1:r.Q=0;break;default:if(r.J<=1&&(r.a&-2147483648)==0)tja(r,0,r.b,Qm(r,0)&1,Qm(r,r.b-1)&1);else{
                            u=0;w=Qm(r,0);v=r.k[0];W=w<v?v&1:w&1;do{
                                p=u;w=v;for(I=p>0&&(r.o[p-1]&-65)==7?Qm(r,p)&1:W;++u<
                                    r.b&&r.k[u]==w;);v=u<r.b?r.k[u]:Qm(r,r.b-1);W=(w&-129)<(v&-129)?v&1:w&1;if((w&128)==0)tja(r,p,u,I,W);else{
                                    do r.k[p++]&=-129;while(p<u)
                                }
                            }while(u<r.b)
                        }if((r.a&383872)!=0)for(p=r.Q;p>0;){
                            for(;p>0;){
                                u=lja(r.o[--p]);if(!(u&383872))break;r.k[p]=Qm(r,p)
                            }for(;p>0;){
                                u=lja(r.o[--p]);if((u&382976)!=0)r.k[p]=r.k[p+1];else if((u&384)!=0){
                                    r.k[p]=Qm(r,p);break
                                }
                            }
                        }
                    }
                }else{
                    if((u&126)==126)r.F&=1;if(r.F&1){
                        r.a=2;r.M=1
                    }else{
                        r.a=1;r.M=0
                    }r.J=0
                }k.a=n;k.k=m==undefined?j:m
            }
        }
    }else{
        k.k=j;k.a=NaN
    }k=a.o.ea(b);m=a.bc()+a.o.ea(b+
        1)<a.Q.start?0:a.bc()+a.o.ea(b)>a.Q.end?2:1;n=d.b.dc(e,ep(a),k,c.b,m==1);p=a.k;r=b+1;if(!(!n||r>=p.a.length)){
        p=p.b;if(p.length==0)p[0]={
            index:r,
            In:n
        };else{
            u=Pb(p,r,eja);if(u>=0)p[u].In+=n;else p.splice(-(u+1),0,{
                index:r,
                In:n
            })
        }
    }a.g9++;e=e+d.iu()-1;Uo(a.a.a,e,n,m);if(g=d.sq()-g){
        gp(a,b);Ula(a,c,b,g)
    }c.k=k+d.sq();return fh(h.b,e)
}o.dc=function(a,b){
    var c=Xla(this.a.K());if(sa(c))this.dL=c;else{
        c=eo(this.a);this.dL=c.Zb&&(c.J||c.fF)
    }this.fK++;this.Gl=j;this.a.a.DB(this.g7,this,a,b||[])
};
var Yla="nextRedrawIndex: ",Zla=" is before start of spacerIndex: ",$la="A paragraph redraw was triggered at the end of the document.";
o.g7=function(a,b,c,d){
    if(a<c){
        this.a.R.log(Error(Yla+a+Zla+c));return i
    }if(a>c+this.kd())return i;b=this.k.indexOf(a-c);b=Math.min(b,this.b.length-1);c=new gja(c,b,d);d=this.a.a;a:{
        a=c.a;b=a-1;a=this.b[a];var e=this.b[b];if(e&&e.W()==0)if(jp(this,b,c)&&e.k==a.k){
            c.a=b;break a
        }ama(this,c)
    }for(;;){
        b=this.k.ea(c.a+1)+c.ze;if(hja(c)&&Ko(d)!=b)break;b=Lo(d);if(b==Wi)return i;if(b==fj){
            if(c.a>=this.b.length-1)a=l;else{
                a=c.a+1;lp(this,a,this.b[a].k,c);a=i
            }if(a)continue
        }if(this.yG.call(this,this.a.K(),c.ze+
            this.k.ea(c.a+1)-1)){
            d=c.a+1;for(c=c;this.b[d];)Tla(this,d,c);return i
        }if(b==gj)bma(this,c);else{
            c.a++;if(c.a>=this.b.length){
                this.a.R.log(Error($la));break
            }ama(this,c)
        }
    }return l
};
function bma(a,b){
    var c=b.ze+a.k.ea(b.a+1),d=bh(a.a.K().fa(),c);if(mp.Sd(d)){
        d=mp.execute(d,a.a,c);var e=new Lm(a.a,d,new yo),g=b.a+1;ip(a,e,g);Uo(a.a.a,c,1);d.xc(c);d.Gd(c,a.NC-a.o.ea(g),a.aE);d.dc(c);b.a++
    }else{
        c=a.a.a;for(d=new yo;;){
            if(Lo(c)!=gj)break;b.a++;e=d;g=b.a;ip(a,new Jm(new bo(a.a,e.a),e),g);if(jp(a,b.a,b))break
        }
    }
}
function ama(a,b){
    var c=a.a.a,d=Ko(c),e=a.b[b.a],g=a.k.ea(b.a)+b.ze;switch(Lo(c)){
        case Wi:return;case fj:var h=Qo(c,d).charAt(0);if(d==g&&Qo(c,d).length>=e.iu()&&mp.Sd(h)){
            lp(a,b.a,e.k,b);return
        }break;case gj:c=bh(a.a.K().fa(),d);if(d==g&&mp.Sd(c)){
            b.a>0&&b.a--;bma(a,b);return
        }
    }if(e.W()==1){
        d=b.a;Im(a.k,d);gp(a,d);e.o.dc(g)
    }else{
        e=b.a;for(g=a.b[e].k;;){
            if(jp(a,e,b)){
                lp(a,e+1,g,b);break
            }d=Ko(a.a.a);if(hja(b)&&d!=a.k.ea(e+1)+b.ze)break;d=a.b[e+1];if(!d||d.k!=g){
                d=g;c=e+1;ip(a,new Jm(new bo(a.a,d.a),
                    d),c)
            }e++
        }b.a=e
    }
}function lp(a,b,c,d){
    for(var e;e=a.b[b];){
        if(e.k!=c)break;Tla(a,b,d)
    }
}function cma(a,b){
    return a.top-b.top
}var dma="The plugin is not in the document.";function Wla(a,b,c){
    var d=b.wq;if(d)if(d.qb){
        a=b.bc()+np(a,d);d=b.Qg();ph(c,new Hi(b.Cc(),a,d.width,d.height),cma)
    }else a.a.R.log(Error(dma))
}o.Di=function(a,b,c){
    ema(this,a,b,undefined,c,i)
};
function ema(a,b,c,d,e,g){
    for(var h=a.Gl||(a.Gl=op(a)),k=h.Xs;k<h.Xs+h.UA;k++){
        if(d){
            var m=d.Xs,n=d.UA;if(k>=m&&k<m+n)continue
        }m=a.b[k];if(g||m.W()!=1)m.nR(b+a.k.ea(k),c,e)
    }
}o.wh=function(a,b,c){
    switch(a.W()){
        case 0:var d=pp(this,a.shift(-b)),e=this.b[d];if(!e)break;var g=this.k.ea(d);a=e.mR(a,b+g,c);if(!a)break;a.a.x+=this.nn;a.a.y+=this.o.ea(d);return a;case 1:a=this.a.o.a[a.ra()];d=a.Cc()+2+this.nn;a=a.bc()+2+np(this,a.wq);return a=new Nm(0,j,new nc(d,a),i)
    }return j
};var fma="Unknown plugin type: ";
o.Fb=function(a,b,c){
    a-=this.nn;var d=this.a.o.a;if(!c)for(var e in d){
        var g=d[e];c=np(this,g.wq)+g.bc();var h=g.Cc(),k=g.Qg().width;g=g.Qg().height;if(a>=h&&a<=h+k&&b>=c&&b<=c+g)return new mm(e)
    }d=this.o.indexOf(b);d=Math.max(0,Math.min(this.b.length-1,d));e=this.b[d];switch(e.W()){
        case 0:a=so(e.b,a);break;case 1:a=e.o.Fb(Math.max(a,0),b-this.o.ea(d));break;default:this.a.R.log(Error(fma+e.W()));return j
    }return a?a.shift(this.k.ea(d)):j
};
o.Dc=function(a,b,c){
    c-=this.nn;var d=pp(this,a),e=this.k.ea(d),g=this.b[d];if(!g)return j;if(g.W()==0)return gma(this,d,b,c);if(a=g.o.Dc(a.shift(-e),b,c))return a.shift(e);return gma(this,d,b,c)
};function gma(a,b,c,d){
    b+=c?-1:1;var e=a.b[b];if(!e)return j;a=a.k.ea(b);if(e.W()==0)return so(e.b,d).shift(a);if(c=e.o.Fb(d,c?Number.MAX_VALUE:0,i))return c.shift(a);return j
}
o.Zc=function(a){
    var b=pp(this,a),c=this.b[b];if(!c)return j;switch(c.W()){
        case 1:b=this.k.ea(b);return c.o.Zc(a.shift(-b));case 0:return c.b;default:return j
    }
};function pp(a,b){
    var c=qp(a.a.K(),b);if(c>a.k.ea(a.b.length))return-1;var d=a.k.indexOf(c),e;if(b.W()==0)e=b.b;else if(b.W()==1)c=Yg(a.a.K().fa(),c);if(e&&a.k.ea(d)==c)return Math.max(d-1,0);return d
}var hma="Requested plugin was not within this boxview.";
function np(a,b){
    for(var c=0,d;d=a.b[c];c++)if(d==b)return a.o.ea(c);a.a.R.log(Error(hma));return a.bc()
}o.Nc=function(a){
    var b=pp(this,a),c=this.k.ea(b);b=this.b[b];if(!b)return j;if(b.W()==0)return new Ha(c,c+b.iu()-1);if(a=b.o.Nc(a.shift(-c))){
        a.start+=c;a.end+=c;return a
    }return j
};
o.Gd=function(a,b,c){
    var d=this.Gl||(this.Gl=op(this));this.Gl=j;this.NC=b;this.aE=c;this.Q=new Ha(this.NC-this.aE*1,this.NC+this.aE*2);for(var e=0,g;g=this.b[e];e++)g.W()==1&&g.o.Gd(this.k.ea(e)+a,b-this.o.ea(e),c);e=this.kd();e>0&&ema(this,a,new Ha(a,a+e),d);a=this.Gl||(this.Gl=op(this));for(e=a.Xs;e<a.Xs+a.UA;e++){
        g=this.b[e];g.W()==0&&mka(g.b.$a())
    }
};
function op(a){
    var b=a.o.indexOf(a.Q.start-a.bc());if(b<a.b.length){
        var c=a.o.indexOf(a.Q.end-a.bc());if(c>=0){
            b=Math.max(b,0);c=Math.min(a.b.length-1,c);return{
                Xs:b,
                UA:c-b+1
            }
        }
    }return{
        Xs:0,
        UA:0
    }
}var ima="minHeight";function jma(a,b){
    b=Math.max(0,b);if(b!=a.HI){
        a.HI=b;var c=Mla?ed:ima;a.cb().style[c]=b+L
    }
}o.Te=function(){
    return Math.max(this.o.ea(this.b.length),this.HI+this.tq)+this.fy
};o.A=function(){
    cp.z.A.call(this);delete this.b;delete this.h7;delete this.Gl
};var mp=new zi;function rp(a,b){
    cp.call(this,a,0);a.F.register(this.ra(),b);this.yG=kma
}t(rp,cp);o=rp.prototype;o.GI=i;o.FI=l;o.UD=j;o.IA=j;function kma(a,b){
    return bh(a.fa(),b+1)==Ig
}var lma="kix-autogenregionview-border",mma="kix-autogenregionview-reload-button",nma="kix-autogenregionview";o.VA=function(){
    this.IA=this.P().L(O,lma);this.UD=this.P().L(O,mma);return this.P().L(O,nma,this.UD,this.IA)
};o.Y6=function(){
    var a={};a.spi=sp(this.a.F,this.ra());return a
};var oma="kix-autogenregionview-highlighted";
function pma(a,b){
    if(a.Kj!=b){
        a.Kj=b;a.M&&a.M.Z(b);Uc(a.G(),oma,b);aj(a.IA,b)
    }
}o.Z6=function(){
    var a;a=this.a.K().Wa();a=a>sp(this.a.F,this.ra())&&a<sp(this.a.F,this.ra())+this.kd();pma(this,a)
};var tp="kix_app";o.ta=function(){
    rp.z.ta.call(this);Te(eo(this.a))?pma(this,l):jm(dm.V(),tp,this.a7,this,undefined,undefined,i)
};var up="kix-refresh-autogenerated-region",vp="cursorMove";
o.a7=function(){
    var a=this.a,b=bm(em(dm.V(),tp));this.M=new (b.sP());this.Na(this.M);var c=a.b,d=a.K();this.M.Ma(this.UD);this.M.Z(this.Kj);c=H(c,up);wp(a,b.jt()).a(this.M,c,b.aP(),s(this.Y6,this));Cm(this).a(d,vp,this.Z6)
};o.Zc=function(a){
    return rp.z.Zc.call(this,a.shift(-1))
};o.Fb=function(a,b){
    var c=rp.z.Fb.call(this,a,b,i);return c?c.shift(1):j
};o.wh=function(a,b){
    return rp.z.wh.call(this,a,b+1)
};o.Nc=function(a){
    if(a=rp.z.Nc.call(this,a.shift(-1))){
        a.start+=1;a.end+=1;return a
    }return j
};
o.Dc=function(a,b,c){
    return(a=rp.z.Dc.call(this,a.shift(-1),b,c))?a.shift(1):j
};o.kd=function(){
    return rp.z.kd.call(this)+(this.GI?1:0)+(this.FI?1:0)
};o.dc=function(a){
    dp(this,ep(this.rb.rb));var b=this.a.K(),c=b.fa().indexOf(Ig,a+1);if(c==-1)c=ro(b);this.a.a.DB(this.B$,this,a,c)
};var qma="AutogenRegionView should never commit its start marker.";
o.B$=function(a,b,c,d){
    if(a>d)return i;switch(b){
        case gj:b=this.a.a;switch(bh(this.a.K().fa(),a)){
            case Hg:this.a.R.log(Error(qma));this.GI=i;Uo(b,a,1);break;case Ig:this.FI=i;Uo(b,a,1);break;default:rp.z.dc.call(this,c+1)
        }break;case fj:b=this.a.a;switch(Qo(b,a).charAt(0)){
            case Hg:this.GI=l;Ro(b,a,-1);break;case Ig:this.FI=l;Ro(b,a,-1);break;default:rp.z.dc.call(this,c+1)
        }break;default:b=this.a.a;switch(bh(this.a.K().fa(),a)){
            case Hg:case Ig:Uo(b,a,0);break;default:rp.z.dc.call(this,c+1)
        }
    }return l
};
o.Di=function(a,b,c){
    rp.z.Di.call(this,a+1,b,c)
};o.A=function(){
    this.a.F.unregister(this.ra());delete this.UD;delete this.IA;delete this.M;rp.z.A.call(this)
};mp.set(Hg,function(a,b){
    return new rp(a,b)
});function xp(a,b,c,d,e){
    this.Y=a;this.a=b;this.F=d;this.k=c;this.b={};this.M=s(this.J,this);this.Q=e
}t(xp,x);xp.prototype.o=j;function rma(a,b){
    if(b)a.Y.a.a?yp(a.a,a.k,0):zp(a.a,a.k);else if(a.Y.a.a)ko(a.a,a.k)[0]=a;else a.a.wg(a.k,a.M);if(a.Y.a.a){
        a.a.addRange(a.k,0,Number.MAX_VALUE);Ap(a.a)
    }
}function sma(a){
    if(a.Y.a.a){
        a.a.addRange(a.k,0,Number.MAX_VALUE);Ap(a.a)
    }else Bp(a.a,undefined,a.k)
}xp.prototype.Ln=function(a){
    return this.J(a)||[]
};var tma="kix-commentoverlaymanager-overlay";
xp.prototype.J=function(a){
    for(var b=this.Y,c=[],d=a.start,e=Math.min(rl(b,this.F,d),a.end);d<a.end;){
        for(var g=Cp(b.Ka(this.F,d)),h=j,k=0,m;m=g[k];k++){
            this.b[m]=this.b[m]||[];if(this.Q(m)){
                if(!h){
                    h=new Qn(new Ha(d,e),tma);c.push(h)
                }this.b[m].push(h)
            }
        }d=e+1;e=Math.min(rl(b,this.F,d),a.end)
    }return c
};var uma="kix-commentoverlaymanager-overlay-highlighted";function Dp(a,b,c){
    a.b[b]&&xb(a.b[b],function(d,e,g){
        if(d.Bg)Kb(g,e);else if(d=d.$h())for(e=0;e<d.length;e++)Uc(d[e],uma,c)
    })
}
xp.prototype.A=function(){
    xp.z.A.call(this);for(var a in this.b)for(var b=this.b[a],c=0;c<b.length;c++)y(b[c]);delete this.b
};var vma="docs-icon-img-container",wma="kix-icon-accessible-img",xma="-sprite",yma="docs-icon";function Ep(a,b,c){
    var d=id(O,nb(vma,bb,wma,bb,a,xma));d.innerHTML=$m;a=new P(yma,bb,nn,bb,a);if(b)for(var e=0;e<b.length;e++){
        var g=b[e];a.append(bb);a.append(g)
    }b=id(O,a.toString(),[d]);if(c)b.title=c;return b
};var zma=/#(.)(.)(.)/,Fp="'",Ama="#$1$1$2$2$3$3";function Gp(a){
    if(!Bma.test(a))f(Error(Fp+a+"' is not a valid hex color"));if(a.length==4)a=a.replace(zma,Ama);return a.toLowerCase()
}var Bma=/^#(?:[0-9a-f]{3}){1,2}$/i;function Hp(a,b,c,d){
    if(!ta(a)||!ta(b))f(Error("Start and end parameters must be arrays"));if(a.length!=b.length)f(Error("Start and end points must be the same length"));this.k=a;this.J=b;this.duration=c;this.F=d;this.a=[]
}t(Hp,Vf);var Ip={},Jp=j;function Cma(){
    Xf.clearTimeout(Jp);var a=Ea(),b;for(b in Ip)Dma(Ip[b],a);Jp=Ma(Ip)?j:Xf.setTimeout(Cma,20)
}function Kp(a){
    a=Ca(a);delete Ip[a];if(Jp&&Ma(Ip)){
        Xf.clearTimeout(Jp);Jp=j
    }
}o=Hp.prototype;o.Gj=0;o.TO=0;o.qg=0;o.startTime=j;o.EO=j;o.fJ=j;
var Ema="play",Fma="resume";function Lp(a,b){
    if(b||a.Gj==0){
        a.qg=0;a.a=a.k
    }else if(a.Gj==1)return l;Kp(a);a.startTime=Ea();if(a.Gj==-1)a.startTime-=a.duration*a.qg;a.EO=a.startTime+a.duration;a.fJ=a.startTime;a.qg||a.jl();Np(a,Ema);a.Gj==-1&&Np(a,Fma);a.Gj=1;var c=Ca(a);c in Ip||(Ip[c]=a);Jp||(Jp=Xf.setTimeout(Cma,20));Dma(a,a.startTime);return i
}var Op="stop";o.stop=function(a){
    Kp(this);this.Gj=0;if(a)this.qg=1;Pp(this,this.qg);Np(this,Op);this.Gu()
};var Gma="destroy";
o.A=function(){
    this.Gj!=0&&this.stop(l);Np(this,Gma);Hp.z.A.call(this)
};var Hma="finish";function Dma(a,b){
    a.qg=(b-a.startTime)/(a.EO-a.startTime);if(a.qg>=1)a.qg=1;a.TO=1E3/(b-a.fJ);a.fJ=b;Aa(a.F)?Pp(a,a.F(a.qg)):Pp(a,a.qg);if(a.qg==1){
        a.Gj=0;Kp(a);Np(a,Hma);a.Gu()
    }else a.Gj==1&&a.MJ()
}function Pp(a,b){
    a.a=Array(a.k.length);for(var c=0;c<a.k.length;c++)a.a[c]=(a.J[c]-a.k[c])*b+a.k[c]
}var Qp="animate";o.MJ=function(){
    Np(this,Qp)
};var Rp="begin";o.jl=function(){
    Np(this,Rp)
};var Sp="end";
o.Gu=function(){
    Np(this,Sp)
};function Np(a,b){
    a.dispatchEvent(new Ima(b,a))
}function Ima(a,b){
    B.call(this,a);this.o=b.a;this.x=b.a[0];this.y=b.a[1];this.F=b.a[2];this.duration=b.duration;this.qg=b.qg;this.k=b.TO;this.state=b.Gj;this.b=b
}t(Ima,B);function Tp(a,b,c,d,e){
    Hp.call(this,b,c,d,e);this.b=a
}t(Tp,Hp);Tp.prototype.o=ha;Tp.prototype.MJ=function(){
    this.o();Tp.z.MJ.call(this)
};Tp.prototype.Gu=function(){
    this.o();Tp.z.Gu.call(this)
};Tp.prototype.jl=function(){
    this.o();Tp.z.jl.call(this)
};function Up(a,b,c){
    if(b.length!=2||c.length!=2)f(Error("Start and end points must be 2D"));Tp.apply(this,arguments)
}t(Up,Tp);Up.prototype.o=function(){
    this.b.style.left=Math.round(this.a[0])+L;this.b.style.top=Math.round(this.a[1])+L
};
function Vp(a,b,c,d){
    Up.call(this,a,[a.offsetLeft,a.offsetTop],b,c,d)
}t(Vp,Up);Vp.prototype.jl=function(){
    this.k=[this.b.offsetLeft,this.b.offsetTop];Vp.z.jl.call(this)
};function Wp(a,b,c,d,e){
    if(za(b))b=[b];if(za(c))c=[c];Tp.call(this,a,b,c,d,e);if(b.length!=1||c.length!=1)f(Error("Start and end points must be 1D"))
}t(Wp,Tp);Wp.prototype.o=function(){
    $i(this.b,this.a[0])
};Wp.prototype.show=function(){
    this.b.style.display=z
};function Xp(a,b,c){
    Wp.call(this,a,1,0,b,c)
}t(Xp,Wp);
Xp.prototype.jl=function(){
    this.show();Xp.z.jl.call(this)
};Xp.prototype.Gu=function(){
    this.b.style.display=Wi;Xp.z.Gu.call(this)
};function Yp(a,b,c){
    Wp.call(this,a,0,1,b,c)
}t(Yp,Wp);Yp.prototype.jl=function(){
    this.show();Yp.z.jl.call(this)
};function Jma(a){
    return 1-Math.pow(1-a,3)
};function Zp(a,b,c,d,e){
    cp.call(this,a,c);this.Ia=d;this.Wh=b;this.M=e
}t(Zp,cp);o=Zp.prototype;o.VI=j;o.Gs=j;o.Kj=l;var Kma="kix-icon-delete-note";o.dG=function(){
    var a=[];if(!Te(eo(this.a))){
        this.P();this.Gs=Ep(Kma);a.push(this.Gs)
    }return a
};o.L=function(){
    Zp.z.L.call(this);var a=this.G();a.style.position=Ri;Rc(a,this.M)
};var Lma="kix-noteview-header";o.VA=function(){
    var a=this.P(),b=this.dG();this.VI=a.L(O,Lma,b);return a.L(O,undefined,this.VI)
};var $p="mousedown";
o.ta=function(){
    Zp.z.ta.call(this);var a=Le(ze.V(),7);fp(this,a+16,a,a,a);a=this.a.R;this.Gs&&Cm(this).a(this.Gs,Ed,aq(a,this.I7,this)).a(this.Gs,$p,aq(a,this.UI,this));this.Z(!this.Ia)
};var Mma="kix-noteview-highlighted";o.xe=function(a){
    if(a!=this.Kj){
        Uc(this.G(),Mma,a);this.Kj=a
    }
};o.I7=function(){
    this.Z(l);var a=this.dP();if(a)if(a=H(this.a.b,a)){
        var b={};b.eId=this.Wh;yf(a,b)
    }
};o.UI=function(a){
    a.stopPropagation()
};
function bq(a,b,c,d){
    if(!(!q(c)||!q(b)||!a.Ta()))if(d){
        if(d=a.G()){
            b=Math.round(b);c=Math.round(c);if(!(a.bc()==c&&a.Cc()==b)){
                Lp(new Vp(d,[b,c],500,Jma));a.XC=b;a.YC=c
            }
        }
    }else Bm(a,b,c)
}o.Te=function(){
    return Zp.z.Te.call(this)+4
};o.A=function(){
    Zp.z.A.call(this);this.Gs=this.VI=j
};var Nma="kix-commentview";function cq(a,b,c,d){
    Zp.call(this,a,b,c,d,Nma)
}t(cq,Zp);o=cq.prototype;o.vw=j;o.Su=j;o.IH=j;var Oma="kix-icon-reply-comment",Pma="kix-icon-close-comment";o.dG=function(){
    var a=cq.z.dG.call(this);if(!Te(eo(this.a))){
        this.Su=Ep(Oma);a.push(this.Su)
    }this.vw=Ep(Pma);a.push(this.vw);return a
};var Qma="kix-commentview-highlighted-arrow";o.L=function(){
    cq.z.L.call(this);var a=this.P();this.IH=Ep(Qma);a.appendChild(this.G(),this.IH)
};
o.ta=function(){
    cq.z.ta.call(this);Cm(this).a(this.vw,Ed,this.u1).a(this.vw,$p,this.UI);this.Su&&Cm(this).a(this.Su,Ed,this.f4).a(this.Su,$p,this.UI)
};var dq="kix-delete-comment";o.dP=function(){
    return dq
};var eq="close";o.u1=function(){
    this.Z(l);this.dispatchEvent(eq)
};o.xe=function(a){
    cq.z.xe.call(this,a);this.IH.style.visibility=a?sf:Xi
};var fq="kix-reply-to-comment";o.f4=function(){
    var a={};a.eId=this.Wh;yf(H(this.a.b,fq),a)
};o.A=function(){
    cq.z.A.call(this);this.Su=this.vw=j
};function gq(a){
    qm.call(this,a.P());this.a=a
}t(gq,qm);o=gq.prototype;o.KI=0;o.LI=0;o.qR=l;function hq(a,b,c){
    if(a.G()){
        b=Math.round(b);c=Math.round(c);if(!(a.qR&&a.LI==c&&a.KI==b)){
            a.KI=b;a.LI=c;if(a.G()){
                Ni(a.G(),b,c);a.qR=i
            }
        }
    }
}o.Cc=function(){
    return this.KI
};o.bc=function(){
    return this.LI
};o.xb=l;o.Ab=i;o.setActive=function(a){
    this.xb=a
};o.Ta=function(){
    return this.Ab
};o.Z=function(a){
    if(this.G()&&a!=this.Ab){
        this.G().style.display=a?z:Wi;this.Ab=a
    }
};o.A=function(){
    gq.z.A.call(this);delete this.a
};function iq(a,b){
    gq.call(this,a);this.M=b
}t(iq,gq);function jq(a,b){
    iq.call(this,a,b);this.b={}
}t(jq,iq);o=jq.prototype;o.yO=0;o.xO=0;o.HB=function(a,b){
    return this.b[Rma(this,a,b)]||j
};function Rma(a,b,c){
    for(var d in a.b){
        var e=a.b[d],g;if(g=e.Ta()){
            var h=e.G();if(h){
                e=h.offsetLeft;g=e+h.offsetWidth;var k=h.offsetTop;h=k+h.offsetHeight;g=b>e&&b<g&&c>k&&c<h
            }else g=l
        }if(g)return d
    }return j
}o.MG=function(a){
    return this.b[kq(this,a)]||j
};
function kq(a,b){
    var c=a.a.K(),d=a.b,e;for(e in d){
        var g=d[e],h=Wo(c,e);if(b>=h&&b<=h+g.kd()+1)return e
    }return j
}o.Gd=function(a,b){
    this.yO=a;this.xO=b;var c=this.b,d=this.a.K(),e;for(e in c){
        var g=Wo(d,e);g>0&&c[e].Gd(g,a,b)
    }
};o.LC=function(a,b){
    var c=this.b,d=this.a.K(),e;for(e in c)c[e].Di(Wo(d,e)+1,a,b)
};o.Zc=function(a){
    var b=this.a.K(),c=kq(this,qp(b,a));if(!c)return j;return this.b[c].Zc(a.shift(-Wo(b,c)-1))
};
o.Fb=function(a,b,c){
    var d=Rma(this,a,b);if(!d)return j;var e=this.b[d];b-=e.bc();a-=e.Cc();if(a=e.Fb(a,b,c))return a.shift(Wo(this.a.K(),d)+1);return j
};o.Nc=function(a){
    var b=kq(this,a.a);if(!b)return j;var c=this.b[b];b=Wo(this.a.K(),b)+1;if(a=c.Nc(a.shift(-b))){
        a.start+=b;a.end+=b;return a
    }return j
};o.Dc=function(a,b,c){
    var d=kq(this,a.a);if(!d)return j;var e=this.b[d];d=Wo(this.a.K(),d);if(a=e.Dc(a.shift(-d-1),b,c))return a.shift(d+1);return j
};
o.ey=function(a,b){
    var c=kq(this,a.a);if(!c)return j;var d=this.b[c];c=Wo(this.a.K(),c);if(c=d.wh(a,c+1,b)){
        c.a.x+=d.Cc();c.a.y+=d.bc()
    }return c
};o.A=function(){
    jq.z.A.call(this);for(var a in this.b)y(this.b[a])
};function lq(a,b){
    jq.call(this,a,b)
}t(lq,jq);o=lq.prototype;o.JH=j;var Sma="kix-noteviewmanager-fade1",Tma="kix-noteviewmanager-fade2",Uma="kix-noteviewmanager-fade3",Vma="kix-noteviewmanager";o.L=function(){
    for(var a=this.P(),b=Le(ze.V(),150),c=[Sma,Tma,Uma],d=[],e=0,g;g=c[e];e++)d.push(a.L(O,{
        "class":g,
        style:hp+b+on
    }));this.wb(a.L(O,Vma,d))
};var mq="flush";o.ta=function(){
    lq.z.ta.call(this);var a=this.a.K();rm(this).a(a,vp,this.G7).a(a,mq,this.H7)
};
o.dc=function(){
    var a=this.a,b=a.K(),c=nq(b,this.TC()),d=this.b;a=a.a;var e=Ko(a),g=l,h=l;switch(Lo(a)){
        case fj:h=a.uc[e]||j;if(h.fa().charAt(0)==Jg){
            if((d=h.Cd[this.TC()])&&d[0]){
                d=d[0][0];h=this.b;if(g=h[d]){
                    b=g.kd()+1;this.fT(g);this.removeChild(g,i);delete h[d];y(g);d=b
                }else d=0;Ro(a,e,-d);g=i
            }break
        }case gj:h=i;case Yo:b=al(b,e);if(b<c.length)if(c=c[b]){
            g=c[0];if(!d[g]){
                c=Le(ze.V(),150);c=this.RN(g,c);this.Na(c,i);c.Gd(Wo(this.a.K(),g),this.yO,this.xO);this.b[g]=c;oq(this)
            }Uo(a,b,b==e&&h?1:0);
            d[g].dc(b+1);g=i
        }
    }g&&oq(this);return l
};o.Ed=function(){
    return Le(ze.V(),150)+4
};o.fT=function(){};o.Z=function(a){
    if(a!=this.Ta()){
        lq.z.Z.call(this,a);a&&oq(this)
    }
};o.G7=function(){
    var a=this.a.K();if(a.Ha().Ua().W()==0){
        var b=dl(a),c=this.b,d=this.yP(b);d=d?this.TI(d):[];for(var e in c)c[e].xe(Db(d,e));for(var g=0;e=d[g];g++){
            var h=c[e];h&&h.Z(i)
        }d=cl(a);e=j;if(d){
            b=al(a,b);e=bl(a.o,this.TC(),b)[0];if(h=c[e]){
                this.Z(i);h.Z(i);h.xe(i)
            }
        }this.bU(e);oq(this)
    }
};o.bU=function(){};
o.H7=function(){
    cl(this.a.K())||oq(this)
};function oq(a){
    if(a.Ta()){
        var b=a.a.K(),c=a.b;if(!Ma(c)){
            for(var d=l,e=pq(b.k,a.oy()),g=ro(b),h={},k=a.rb,m=0;m<e.length;++m){
                var n=e[m];if(n>=g)break;for(var p=a.TI(b.Ka(a.oy(),n)),r=0,u;u=p[r];r++){
                    var w=c[u];if(!h[u]&&w&&w.Ta()){
                        var v=qq(k,new J(n));if(v){
                            h[u]=v.y+a.bc();if(w.Kj){
                                d=u!=a.JH;a.JH=u
                            }
                        }
                    }
                }
            }b=Ka(h);Faa(b,function(D,I){
                return Qb(h[D],h[I])
            });Wma(a,b,h,d)
        }
    }
}
function Wma(a,b,c,d){
    var e=a.b;a=a.JH;for(var g=vb(b,a),h=a?c[a]-5:Number.MAX_VALUE,k=g-1,m;m=b[k];k--){
        var n=e[m],p=n.Te();h=Math.min(h-p,c[m]);bq(n,0,h,d);h-=5
    }h=0;if((k=e[a])&&k.Ta()){
        bq(k,0,c[a],d);h=k.bc()+k.Te()+5
    }for(k=g+1;m=b[k];k++){
        n=e[m];p=n.Te();h=Math.max(h,c[m]);bq(n,0,h,d);h=h+p+5
    }
};function rq(a,b){
    this.type=1;this.anchor=a;this.position=b
}t(rq,$ia);var sq="main_page",Xma="kix-overlay-comment";function tq(a){
    jq.call(this,a,new rq(sq,qn));this.k=new xp(a.K(),a.k,Xma,zh,s(this.W5,this))
}t(tq,lq);o=tq.prototype;o.Fr=j;o.W5=function(a){
    return Wo(this.a.K(),a)>=0
};var uq="kix-show-comments";o.ta=function(){
    tq.z.ta.call(this);rma(this.k);this.Fr=H(this.a.b,uq);this.Fr.fb(xf,this.mQ,this);this.Fr.Ac(i)
};o.Vb=function(){
    tq.z.Vb.call(this);this.Fr.rf(xf,this.mQ,this)
};
o.RN=function(a,b){
    var c=this.a,d=i,e=this.a.K().Lb(zh);mh(e,function(g,h){
        if(Db(Cp(h),a)){
            d=l;return i
        }return l
    });c=new cq(c,a,b,d);rm(this).a(c,eq,this.z1);sma(this.k);return c
};o.TI=function(a){
    return Cp(a)
};o.TC=function(){
    return zh
};o.yP=function(a){
    return this.a.K().Ka(this.oy(),a)
};o.oy=function(){
    return zh
};o.fT=function(a){
    rm(this).b(a,eq);var b=this.k;a=a.Wh;Dp(b,a,l);delete b.b[a]
};o.Z=function(a){
    var b=this.Ta();tq.z.Z.call(this,a);if(a!=b){
        this.Fr.Ac(a);rma(this.k,!a)
    }
};
o.bU=function(a){
    this.Fr.Aa(!$k(this.a.K(),dl(this.a.K()),zh));var b=this.k;if(a!=b.o){
        Dp(b,b.o,l);Dp(b,a,i);b.o=a
    }
};o.z1=function(){
    oq(this)
};o.mQ=function(){
    this.Z(!this.Ta())
};o.A=function(){
    tq.z.A.call(this);y(this.k);delete this.k;delete this.Fr
};var Yma="role";function vq(a,b){
    if(Ec){
        a.setAttribute(Yma,b);a.k=b
    }
}var Zma="aria-";function wq(a,b,c){
    Ec&&a.setAttribute(Zma+b,c)
};var $ma="focusout",xq="blur",yq="focusin",zq="focus";function Aq(a){
    this.ya=a;a=A?$ma:xq;this.a=Xd(this.ya,A?yq:zq,this,!A);this.b=Xd(this.ya,a,this,!A)
}t(Aq,Vf);Aq.prototype.handleEvent=function(a){
    var b=new Ad(a.Tc);b.type=a.type==yq||a.type==zq?yq:$ma;try{
        this.dispatchEvent(b)
    }finally{
        b.wa()
    }
};Aq.prototype.A=function(){
    Aq.z.A.call(this);ae(this.a);ae(this.b);delete this.ya
};var Bq="525";function ana(a,b,c,d,e){
    if(!A&&!(Fc&&Nc(Bq)))return i;if(vc&&e)return Cq(a);if(e&&!d)return l;if(!c&&(b==17||b==18))return l;if(A&&d&&b==a)return l;switch(a){
        case 13:return i;case 27:return!Fc
    }return Cq(a)
}
function Cq(a){
    if(a>=48&&a<=57)return i;if(a>=96&&a<=106)return i;if(a>=65&&a<=90)return i;if(Fc&&a==0)return i;switch(a){
        case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return i;default:return l
    }
};function Dq(a,b,c){
    this.target=a;this.F=b||a;this.Vj=c||new Hi(NaN,NaN,NaN,NaN);this.o=Xc(a);this.N=new he(this);Xd(this.F,$p,this.PT,l,this)
}t(Dq,Vf);var Eq=A||Ec&&Nc("1.9.3");o=Dq.prototype;o.qx=0;o.rx=0;o.QT=0;o.RT=0;o.ox=0;o.px=0;o.bH=i;o.Rf=l;o.LH=0;o.G8=0;o.K5=l;o.Aa=function(a){
    this.bH=a
};o.A=function(){
    Dq.z.A.call(this);Zd(this.F,$p,this.PT,l,this);this.N.wa();delete this.target;delete this.F;delete this.N
};var Fq="mousemove",Gq="mouseup",bna="losecapture",cna="dragstart";
o.PT=function(a){
    if(this.bH&&!this.Rf&&(a.type!=$p||Fd(a,0))){
        if(this.LH==0){
            dna(this,a);if(this.Rf)a.preventDefault();else return
        }else a.preventDefault();var b=this.o,c=b.documentElement,d=!Eq;this.N.a(b,Fq,this.H8,d);this.N.a(b,Gq,this.sB,d);if(Eq){
            c.setCapture(l);this.N.a(c,bna,this.sB)
        }else this.N.a(hd(b),xq,this.sB);A&&this.K5&&this.N.a(b,cna,Qba);this.M&&this.N.a(this.M,Oe,this.C9,d);this.qx=this.QT=a.TB;this.rx=this.RT=a.UB;this.ox=this.target.offsetLeft;this.px=this.target.offsetTop;this.k=
        ud(Vc(this.o));this.G8=Ea()
    }
};
var Hq="start";
function dna(a,b){
    if(a.dispatchEvent(new Iq(Hq,a,b.clientX,b.clientY,b))!==l)a.Rf=i
	
}
o.sB=function(a,b){
    je(this.N);Eq&&this.o.releaseCapture();if(this.Rf){
        this.Rf=l;this.dispatchEvent(new Iq(Sp,this,a.clientX,a.clientY,a,ena(this,this.ox),fna(this,this.px),b))
    }
};var Jq="beforedrag";
o.H8=function(a){
    if(this.bH){
        var b=a.TB-this.qx,c=a.UB-this.rx;this.qx=a.TB;this.rx=a.UB;if(!this.Rf){
            var d=this.QT-this.qx,e=this.RT-this.rx;if(d*d+e*e>this.LH){
                dna(this,a);if(!this.Rf){
                    this.sB(a);return
                }
            }
        }c=gna(this,b,c);b=c.x;c=c.y;if(this.Rf)if(this.dispatchEvent(new Iq(Jq,this,a.clientX,a.clientY,a,b,c))!==l){
            this.sG(a,b,c,l);a.preventDefault()
        }
    }
};function gna(a,b,c){
    var d=ud(Vc(a.o));b+=d.x-a.k.x;c+=d.y-a.k.y;a.k=d;a.ox+=b;a.px+=c;return new nc(ena(a,a.ox),fna(a,a.px))
}
o.C9=function(a){
    var b=gna(this,0,0);a.clientX=this.k.x-this.qx;a.clientY=this.k.x-this.rx;this.sG(a,b.x,b.y,i)
};var Kq="drag";o.sG=function(a,b,c){
    this.hG(b,c);this.dispatchEvent(new Iq(Kq,this,a.clientX,a.clientY,a,b,c))
};function ena(a,b){
    var c=a.Vj,d=!isNaN(c.left)?c.left:j;c=!isNaN(c.width)?c.width:0;return Math.min(d!=j?d+c:Infinity,Math.max(d!=j?d:-Infinity,b))
}
function fna(a,b){
    var c=a.Vj,d=!isNaN(c.top)?c.top:j;c=!isNaN(c.height)?c.height:0;return Math.min(d!=j?d+c:Infinity,Math.max(d!=j?d:-Infinity,b))
}o.hG=function(a,b){
    this.target.style.left=a+L;this.target.style.top=b+L
};function Iq(a,b,c,d,e,g,h,k){
    B.call(this,a);this.clientX=c;this.clientY=d;this.k=e;this.left=q(g)?g:b.ox;this.top=q(h)?h:b.px;this.b=b;this.o=!!k
}t(Iq,B);

var hna="modal-dialog";
//Lq  dialog data
function Lq(a,b,c){
    qm.call(this,c);
	this.Qd=a||hna;
	this.rL=!!b;
	this.Ad=ina
	
}
t(Lq,qm);
o=Lq.prototype;
o.zB=j;o.DG=i;o.Vp=i;o.rL=l;o.Jy=i;o.KP=i;o.BF=0.5;o.Ex=z;o.Yc=z;o.Ad=j;o.Ht=j;o.Ab=l;o.Is=l;o.dd=j;o.zd=j;o.Kh=j;o.Ij=j;o.mL=j;o.Yf=j;o.rh=j;o.Je=j;
o.setTitle=function(a){
    this.Ex=a;this.Ij&&qd(this.Ij,a)
};
o.Wf=function(){
    return this.Ex
};
o.Ob=function(a){
    this.Yc=a;if(this.rh)this.rh.innerHTML=a
	
};
o.vd=aa(2);function Mq(a){
    a.G()||a.Ma()
}
o.cb=function(){
    Mq(this);return this.rh
};
function Nq(a){
    Mq(a);return a.G()
}function Oq(a){
    Mq(a);return a.dd
}function jna(a,b){
    a.Jy=b;Pq(a);var c=a.P();if(a.qb&&b&&a.Ta()){
        a.zd&&c.Rx(a.zd,a.G());a.dd&&c.Rx(a.dd,a.G());Qq(a)
    }
}var kna="-title",lna="-title-text",mna="-title-close",Rq="-content",nna="-buttons",ona="dialog",Sq="labelledby";
o.L=function(){
    Pq(this);
	var a=this.P();
	this.wb(a.L(N,{
        className:this.Qd,
        tabIndex:0
    },this.Kh=a.L(N,{
        className:this.Qd+kna,
        id:this.ra()
    },this.Ij=a.L(xe,this.Qd+lna,this.Ex),this.Yf=a.L(xe,this.Qd+mna)),this.rh=a.L(N,this.Qd+Rq),this.Je=a.L(N,this.Qd+nna),this.eb=a.L(xe,{
        tabIndex:0
    })));
	this.mL=this.Kh.id;vq(this.G(),ona);wq(this.G(),Sq,this.mL||z);if(this.Yc)this.rh.innerHTML=this.Yc;aj(this.Yf,this.Vp);aj(this.G(),l);if(this.Ad){
        a=this.Ad;a.ya=this.Je;a.Ma()
    }
};
var pna="border:0;vertical-align:bottom;",qna="-bg";
function Pq(a){
    if(a.rL&&a.Jy&&!a.zd){
        var b;b=a.P().L(Ml,{
            frameborder:0,
            style:pna,
            src:De
        });
		a.zd=b;
		a.zd.className=a.Qd+qna;
		aj(a.zd,l);
		$i(a.zd,0)
    }else if((!a.rL||!a.Jy)&&a.zd){
        ld(a.zd);a.zd=j
    }if(a.Jy&&!a.dd){
        a.dd=a.P().L(N,a.Qd+qna);$i(a.dd,a.BF);aj(a.dd,l)
    }else if(!a.Jy&&a.dd){
        ld(a.dd);a.dd=j
    }
}
o.Ma=function(a){
    if(this.qb)f(Error(vm));
	this.G()||this.L();
	a=a||sd(this.P()).body;
	rna(this,a); //dialog的背景
	Lq.z.Ma.call(this,a)  //dislog內容
	//showObject(this);
	//alert($('button[name="cancel"]').click);
};
function rna(a,b){
    a.zd&&b.appendChild(a.zd);a.dd&&b.appendChild(a.dd)
	
}
o.kK=function(){
    f(Error(cja))
};
o.Hg=function(a){
    return a&&a.tagName&&a.tagName==O&&Lq.z.Hg.call(this,a)
};
var Tq="button",Uq="cancel",sna="-default";
o.Mb=function(a){
    Lq.z.Mb.call(this,a);Rc(this.G(),this.Qd);a=this.Qd+Rq;if(this.rh=Yc(j,a,this.G())[0])this.Yc=this.rh.innerHTML;else{
        this.rh=this.P().L(N,a);if(this.Yc)this.rh.innerHTML=this.Yc;this.G().appendChild(this.rh)
    }a=this.Qd+kna;var b=this.Qd+lna,c=this.Qd+mna;if(this.Kh=Yc(j,a,this.G())[0]){
        this.Ij=Yc(j,b,this.Kh)[0];this.Yf=Yc(j,c,this.Kh)[0]
    }else{
        this.Kh=this.P().L(N,a);this.G().insertBefore(this.Kh,this.rh)
    }if(this.Ij)this.Ex=rd(this.Ij);else{
        this.Ij=this.P().L(xe,b,this.Ex);this.Kh.appendChild(this.Ij)
    }wq(this.G(),
        Sq,this.mL||z);if(!this.Yf){
        this.Yf=this.P().L(xe,c);this.Kh.appendChild(this.Yf)
    }aj(this.Yf,this.Vp);a=this.Qd+nna;if(this.Je=Yc(j,a,this.G())[0]){
        a=this.Ad=new Vq(this.P());b=this.Je;if(!(!b||b.nodeType!=1)){
            a.ya=b;b=a.ya.getElementsByTagName(Tq);c=0;for(var d,e,g;d=b[c];c++){
                e=d.name||d.id;g=rd(d)||d.value;
				if(e){
                    var h=c==0;a.set(e,g,h,d.name==Uq);h&&Rc(d,a.Qd+sna)
					
                }
            }
        }
    }else{
        this.Je=this.P().L(N,a);this.G().appendChild(this.Je);if(this.Ad){
            a=this.Ad;a.ya=this.Je;a.Ma()
        }
    }Pq(this);rna(this,Xc(this.G()).body);
    aj(this.G(),l)
	
};
var tna="-title-draggable";o.ta=function(){
    Lq.z.ta.call(this);this.zB=new Aq(sd(this.P()));if(this.KP&&!this.Ht){
        var a=new Dq(this.G(),this.Kh);Rc(this.Kh,this.Qd+tna);this.Ht=a
    }rm(this).a(this.Yf,Ed,this.J9).a(this.zB,yq,this.x9);vq(this.G(),ona);this.Ij.id!==z&&wq(this.G(),Sq,this.Ij.id)
};o.Vb=function(){
    this.Ta()&&this.Z(l);this.zB.wa();this.zB=j;if(this.Ht){
        this.Ht.wa();this.Ht=j
    }Lq.z.Vb.call(this)
};var Wq="keydown",Xq="afterhide";
o.Z=function(a){
    if(a!=this.Ab){
        var b=sd(this.P()),c=hd(b)||window;this.qb||this.Ma(b.body);if(a){
            Qq(this);b=sd(this.P());var d=hd(b)||window;if(Mi(this.G())==Qi)var e=b=0;else{
                e=ud(this.P());b=e.x;e=e.y
            }var g=Zi(this.G());d=gd(d);Ni(this.G(),Math.max(b+d.width/2-g.width/2,0),Math.max(e+d.height/2-g.height/2,0));rm(this).a(this.G(),Wq,this.HD).a(this.G(),Dd,this.HD).a(c,Il,this.LP)
        }else rm(this).b(this.G(),Wq,this.HD).b(this.G(),Dd,this.HD).b(c,Il,this.LP);this.zd&&aj(this.zd,a);this.dd&&aj(this.dd,
            a);aj(this.G(),a);a&&this.focus();if(this.Ab=a)rm(this).a(this.Je,Ed,this.yS);else{
            rm(this).b(this.Je,Ed,this.yS);this.dispatchEvent(Xq);this.Is&&this.wa()
        }
    }
};o.Ta=function(){
    return this.Ab
};var Yq="input",una="position:fixed;width:0;height:0;left:0;top:0;";
o.focus=function(){
    try{
        this.G().focus()
    }catch(a){}if(this.Ad){
        var b=this.Ad.qm;if(b)for(var c=sd(this.P()),d=this.Je.getElementsByTagName(Tq),e=0,g;g=d[e];e++)if(g.name==b){
            try{
                if(Fc||Dc){
                    var h=c.createElement(Yq);h.style.cssText=una;this.G().appendChild(h);h.focus();this.G().removeChild(h)
                }g.focus()
            }catch(k){}break
        }
    }
};
function Qq(a){
    a.zd&&aj(a.zd,l);a.dd&&aj(a.dd,l);var b=sd(a.P()),c=gd(hd(b)||window),d=Math.max(b.body.scrollWidth,c.width);b=Math.max(b.body.scrollHeight,c.height);if(a.zd){
        aj(a.zd,i);Vi(a.zd,d,b)
    }if(a.dd){
        aj(a.dd,i);Vi(a.dd,d,b)
    }if(a.KP){
        c=Zi(a.G());a.Ht.Vj=new Hi(0,0,d-c.width,b-c.height)
    }
}o.J9=function(){
    if(this.Vp){
        var a=this.Ad,b=a&&a.Qo;if(b){
            a=a.get(b);this.dispatchEvent(new Zq(b,a))&&this.Z(l)
        }else this.Z(l)
    }
};
o.A=function(){
    Lq.z.A.call(this);if(this.dd){
        ld(this.dd);this.dd=j
    }if(this.zd){
        ld(this.zd);this.zd=j
    }this.eb=this.Je=this.Yf=j
};function $q(a,b){
    a.Ad=b;if(a.Je)if(a.Ad){
        var c=a.Ad;c.ya=a.Je;c.Ma()
    }else a.Je.innerHTML=z
}
var ar="BUTTON";
o.yS=function(a){
    a:{
        for(a=a.target;a!=j&&a!=this.Je;){
            if(a.tagName==ar){
                a=a;break a
            }a=a.parentNode
        }a=j
    }if(a&&!a.disabled){
    a=a.name;var b=this.Ad.get(a);this.dispatchEvent(new Zq(a,b))&&this.Z(l)
}
	 
};
var br="SELECT",cr="TEXTAREA";
o.HD=function(a){
    var b=l,c=l,d=this.Ad,e=a.target;if(a.type==Wq)if(this.DG&&a.keyCode==27){
        var g=d&&d.Qo;e=e.tagName==br&&!e.disabled;if(g&&!e){
            c=i;b=d.get(g);b=this.dispatchEvent(new Zq(g,b))
        }else e||(b=i)
    }else{
        if(a.keyCode==9&&a.Jd&&e==this.G())c=i
    }else if(a.keyCode==13){
        if(e.tagName==ar)g=e.name;else if(d){
            var h=d.qm,k=h&&dr(d,h);e=(e.tagName==cr||e.tagName==br)&&!e.disabled;if(k&&!k.disabled&&!e)g=h
        }if(g){
            c=i;b=this.dispatchEvent(new Zq(g,String(d.get(g))))
        }
    }if(b||c){
        a.stopPropagation();a.preventDefault()
    }b&&
    this.Z(l)
};o.LP=function(){
    Qq(this)
};o.x9=function(a){
    this.eb==a.target&&Zf(this.t0,0,this)
};o.t0=function(){
    A&&sd(this.P()).body.focus();this.G().focus()
};var er="dialogselect";function Zq(a,b){
    this.type=er;this.key=a;this.caption=b
}t(Zq,B);function Vq(a){
    this.a=a||Vc();Zb.call(this)
}
var ina,fr;
t(Vq,Zb);

o=Vq.prototype;o.Qd="goog-buttonset";o.qm=j;o.ya=j;o.Qo=j;o.set=function(a,b,c,d){
    Zb.prototype.set.call(this,a,b);if(c)this.qm=a;if(d)this.Qo=a;return this
};
o.Ma=function(){
    if(this.ya){
        this.ya.innerHTML=z;var a=Vc(this.ya);Yb(this,function(b,c){
            var d=a.L(Tq,{
                name:c
            },b);if(c==this.qm)d.className=this.Qd+sna;this.ya.appendChild(d)
        },this)
    }
};function dr(a,b){
    for(var c=a.ya.getElementsByTagName(ar),d=0,e;e=c[d];d++)if(e.name==b||e.id==b)return e;return j
}var gr="ok",hr="OK";
fr=(new Vq).set(gr,hr,i,i);
var ir="Cancel";
ina=(new Vq).set(gr,hr,i).set(Uq,ir,l,i);

var jr="yes",kr="no";
(new Vq).set(jr,"Yes",i).set(kr,"No",l,i);
(new Vq).set(jr,"Yes").set(kr,"No",i).set(Uq,ir,l,i);
(new Vq).set("continue","Continue").set(tda,rda).set(Uq,ir,i,i);

function lr(a,b,c){
    Lq.call(this,a,b,c);Xd(this,Xq,vna)
}
t(lr,Lq);var vna=ha;
var mr="Close",wna="docs-dialog-modal-bg",xna="docs-dialog-alert",yna="zIndex";
function nr(a,b,c,d){
    var e=new lr;e.setTitle(a);e.Ob(b);Mq(e);e.Yf.style.display=Wi;e.Is=i;c&&Xd(e,er,c);$q(e,(new Vq).set(eq,mr,i));jna(e,i);e.BF=0.5;e.dd&&$i(e.dd,e.BF);Rc(Oq(e),wna);Rc(Nq(e),xna);if(d)if(a=Nq(d)){
        a=Ki(a,yna);Oq(e).style.zIndex=a+1;Nq(e).style.zIndex=a+2
    }e.Z(i)
	
};

function or(a,b,c,d,e){
    this.a=!!b;a&&pr(this,a,d);this.b=e!=undefined?e:this.xg||0;if(this.a)this.b*=-1;this.k=!c
}
t(or,Wb);
o=or.prototype;
o.Kf=j;o.xg=0;o.ZG=l;
function pr(a,b,c,d){
    if(a.Kf=b)a.xg=za(c)?c:a.Kf.nodeType!=1?0:a.a?-1:1;if(za(d))a.b=d
}
o.zk=function(a){
    this.Kf=a.Kf;this.xg=a.xg;this.b=a.b;this.a=a.a;this.k=a.k
};
o.Ba=function(){
    return new or(this.Kf,this.a,!this.k,this.xg,this.b)
};
o.next=function(){
    var a;if(this.ZG){
        if(!this.Kf||this.k&&this.b==0)f(Vb);a=this.Kf;var b=this.a?-1:1;if(this.xg==b){
            var c=this.a?a.lastChild:a.firstChild;c?pr(this,c):pr(this,a,b*-1)
        }else(c=this.a?a.previousSibling:a.nextSibling)?pr(this,c):pr(this,a.parentNode,b*-1);this.b+=this.xg*(this.a?-1:1)
    }else this.ZG=i;a=this.Kf;if(!this.Kf)f(Vb);return a
};o.kb=function(a){
    return a.Kf==this.Kf&&(!this.Kf||a.xg==this.xg)
};
o.splice=function(){
    var a=this.Kf,b=this.a?1:-1;if(this.xg==b){
        this.xg=b*-1;this.b+=this.xg*(this.a?-1:1)
    }this.a=!this.a;or.prototype.next.call(this);this.a=!this.a;b=ua(arguments[0])?arguments[0]:arguments;for(var c=b.length-1;c>=0;c--)Bba(b[c],a);ld(a)
};function qr(){}function rr(a){
    for(var b=[],c=0,d=a.ix();c<d;c++)b.push(a.hx(c));return b
}qr.prototype.kq=aa(23);qr.prototype.containsNode=function(a,b){
    return this.$l(sr(tr(a),void 0),b)
};function ur(a,b){
    or.call(this,a,b,i)
}t(ur,or);function vr(){}t(vr,qr);vr.prototype.$l=function(a,b){
    var c=rr(this),d=rr(a);return(b?Ab:Bb)(d,function(e){
        return Ab(c,function(g){
            return g.$l(e,b)
        })
    })
};var wr="BR";function xr(a,b,c,d,e){
    var g;if(a){
        this.Pm=a;this.nx=b;this.Dj=c;this.zt=d;if(a.nodeType==1&&a.tagName!=wr){
            a=a.childNodes;if(b=a[b]){
                this.Pm=b;this.nx=0
            }else{
                if(a.length)this.Pm=tb(a);g=i
            }
        }if(c.nodeType==1)if(this.Dj=c.childNodes[d])this.zt=0;else this.Dj=c
    }ur.call(this,e?this.Dj:this.Pm,e);if(g)try{
        this.next()
    }catch(h){
        if(h!=Vb)f(h)
    }
}t(xr,ur);o=xr.prototype;o.Pm=j;o.Dj=j;o.nx=0;o.zt=0;o.jc=function(){
    return this.Pm
};o.Mc=function(){
    return this.Dj
};
o.Ux=function(){
    return this.ZG&&this.Kf==this.Dj&&(!this.zt||this.xg!=1)
};o.next=function(){
    if(this.Ux())f(Vb);return xr.z.next.call(this)
};o.zk=function(a){
    this.Pm=a.Pm;this.Dj=a.Dj;this.nx=a.nx;this.zt=a.zt;this.Oj=a.Oj;xr.z.zk.call(this,a)
};o.Ba=function(){
    var a=new xr(this.Pm,this.nx,this.Dj,this.zt,this.Oj);a.zk(this);return a
};function yr(){}yr.prototype.$l=function(a,b){
    var c=b&&!a.Ej(),d=a.Vw();try{
        return c?this.$g(d,0,1)>=0&&this.$g(d,1,0)<=0:this.$g(d,0,0)>=0&&this.$g(d,1,1)<=0
    }catch(e){
        if(!A)f(e);return l
    }
};yr.prototype.containsNode=function(a,b){
    return this.$l(tr(a),b)
};yr.prototype.Ph=function(){
    return new xr(this.jc(),this.wd(),this.Mc(),this.Td())
};function zr(a){
    this.a=a
}t(zr,yr);function Ar(a){
    var b=Xc(a).createRange();if(a.nodeType==3){
        b.setStart(a,0);b.setEnd(a,a.length)
    }else if(Br(a)){
        for(var c,d=a;(c=d.firstChild)&&Br(c);)d=c;b.setStart(d,0);for(d=a;(c=d.lastChild)&&Br(c);)d=c;b.setEnd(d,d.nodeType==1?d.childNodes.length:d.length)
    }else{
        c=a.parentNode;a=vb(c.childNodes,a);b.setStart(c,a);b.setEnd(c,a+1)
    }return b
}function Cr(a,b,c,d){
    var e=Xc(a).createRange();e.setStart(a,b);e.setEnd(c,d);return e
}o=zr.prototype;o.Ba=function(){
    return new this.constructor(this.a.cloneRange())
};
o.Vw=function(){
    return this.a
};o.$G=function(){
    return this.a.commonAncestorContainer
};o.jc=function(){
    return this.a.startContainer
};o.wd=function(){
    return this.a.startOffset
};o.Mc=function(){
    return this.a.endContainer
};o.Td=function(){
    return this.a.endOffset
};o.$g=function(a,b,c){
    return this.a.compareBoundaryPoints(c==1?b==1?ca.Range.START_TO_START:ca.Range.START_TO_END:b==1?ca.Range.END_TO_START:ca.Range.END_TO_END,a)
};o.Ej=function(){
    return this.a.collapsed
};o.Vf=aa(10);
o.select=function(a){
    this.dE(hd(Xc(this.jc())).getSelection(),a)
};o.dE=function(a){
    a.removeAllRanges();a.addRange(this.a)
};function Dr(a){
    this.a=a
}t(Dr,zr);Dr.prototype.dE=function(a,b){
    var c=b?this.Mc():this.jc(),d=b?this.Td():this.wd(),e=b?this.jc():this.Mc(),g=b?this.wd():this.Td();a.collapse(c,d);if(c!=e||d!=g)a.extend(e,g)
};function Er(a,b){
    this.a=a;this.b=b
}t(Er,yr);var Fr="character";function Gr(a){
    var b=Xc(a).body.createTextRange();if(a.nodeType==1){
        b.moveToElementText(a);Br(a)&&!a.childNodes.length&&b.collapse(l)
    }else{
        for(var c=0,d=a;d=d.previousSibling;){
            var e=d.nodeType;if(e==3)c+=d.length;else if(e==1){
                b.moveToElementText(d);break
            }
        }d||b.moveToElementText(a.parentNode);b.collapse(!d);c&&b.move(Fr,c);b.moveEnd(Fr,a.length)
    }return b
}o=Er.prototype;o.rl=j;o.Jk=j;o.Ik=j;o.oi=-1;o.Fj=-1;
o.Ba=function(){
    var a=new Er(this.a.duplicate(),this.b);a.rl=this.rl;a.Jk=this.Jk;a.Ik=this.Ik;return a
};o.Vw=function(){
    return this.a
};
o.$G=function(){
    if(!this.rl){
        var a=this.a.text,b=this.a.duplicate(),c=a.replace(/ +$/,z);(c=a.length-c.length)&&b.moveEnd(Fr,-c);c=b.parentElement();b=b.htmlText.replace(/(\r\n|\r|\n)+/g,bb).length;if(this.Ej()&&b>0)return this.rl=c;for(;b>c.outerHTML.replace(/(\r\n|\r|\n)+/g,bb).length;)c=c.parentNode;for(;c.childNodes.length==1&&c.innerText==(c.firstChild.nodeType==3?c.firstChild.nodeValue:c.firstChild.innerText);){
            if(!Br(c.firstChild))break;c=c.firstChild
        }if(a.length==0)c=zna(this,c);this.rl=c
    }return this.rl
};
function zna(a,b){
    for(var c=b.childNodes,d=0,e=c.length;d<e;d++){
        var g=c[d];if(Br(g)){
            var h=Gr(g),k=h.htmlText!=g.outerHTML;if(a.Ej()&&k?a.$g(h,1,1)>=0&&a.$g(h,1,0)<=0:a.a.inRange(h))return zna(a,g)
        }
    }return b
}o.jc=function(){
    if(!this.Jk){
        this.Jk=Hr(this,1);if(this.Ej())this.Ik=this.Jk
    }return this.Jk
};o.wd=function(){
    if(this.oi<0){
        this.oi=Ana(this,1);if(this.Ej())this.Fj=this.oi
    }return this.oi
};o.Mc=function(){
    if(this.Ej())return this.jc();if(!this.Ik)this.Ik=Hr(this,0);return this.Ik
};
o.Td=function(){
    if(this.Ej())return this.wd();if(this.Fj<0){
        this.Fj=Ana(this,0);if(this.Ej())this.oi=this.Fj
    }return this.Fj
};var Ir="Start",Jr="End",Bna="To";o.$g=function(a,b,c){
    return this.a.compareEndPoints((b==1?Ir:Jr)+Bna+(c==1?Ir:Jr),a)
};
function Hr(a,b,c){
    c=c||a.$G();if(!c||!c.firstChild)return c;for(var d=b==1,e=0,g=c.childNodes.length;e<g;e++){
        var h=d?e:g-e-1,k=c.childNodes[h],m;try{
            m=tr(k)
        }catch(n){
            continue
        }var p=m.Vw();if(a.Ej())if(Br(k)){
            if(m.$l(a))return Hr(a,b,k)
        }else{
            if(a.$g(p,1,1)==0){
                a.oi=a.Fj=h;break
            }
        }else if(a.$l(m)){
            if(!Br(k)){
                if(d)a.oi=h;else a.Fj=h+1;break
            }return Hr(a,b,k)
        }else if(a.$g(p,1,0)<0&&a.$g(p,0,1)>0)return Hr(a,b,k)
    }return c
}var Cna="EndToEnd",Dna="StartToStart";
function Ana(a,b,c){
    var d=b==1;c=c||(d?a.jc():a.Mc());if(c.nodeType==1){
        c=c.childNodes;for(var e=c.length,g=d?1:-1,h=d?0:e-1;h>=0&&h<e;h+=g){
            var k=c[h];if(!Br(k))if(a.a.compareEndPoints((b==1?Ir:Jr)+Bna+(b==1?Ir:Jr),tr(k).Vw())==0)return d?h:h+1
        }return h==-1?0:h
    }else{
        a=a.a.duplicate();b=Gr(c);a.setEndPoint(d?Cna:Dna,b);a=a.text.length;return d?c.length-a:a
    }
}var Ena="StartToEnd";o.Ej=function(){
    return this.a.compareEndPoints(Ena,this.a)==0
};o.Vf=aa(9);o.select=function(){
    this.a.select()
};function Kr(a){
    this.a=a
}t(Kr,zr);Kr.prototype.dE=function(a){
    a.collapse(this.jc(),this.wd());if(this.Mc()!=this.jc()||this.Td()!=this.wd())a.extend(this.Mc(),this.Td());a.rangeCount==0&&a.addRange(this.a)
};function Lr(a){
    this.a=a
}t(Lr,zr);Lr.prototype.$g=function(a,b,c){
    if(Nc($c))return Lr.z.$g.call(this,a,b,c);return this.a.compareBoundaryPoints(c==1?b==1?ca.Range.START_TO_START:ca.Range.END_TO_START:b==1?ca.Range.START_TO_END:ca.Range.END_TO_END,a)
};Lr.prototype.dE=function(a,b){
    a.removeAllRanges();b?a.setBaseAndExtent(this.Mc(),this.Td(),this.jc(),this.wd()):a.setBaseAndExtent(this.jc(),this.wd(),this.Mc(),this.Td())
};function tr(a){
    if(A){
        var b=new Er(Gr(a),Xc(a));if(Br(a)){
            for(var c,d=a;(c=d.firstChild)&&Br(c);)d=c;b.Jk=d;b.oi=0;for(d=a;(c=d.lastChild)&&Br(c);)d=c;b.Ik=d;b.Fj=d.nodeType==1?d.childNodes.length:d.length;b.rl=a
        }else{
            b.Jk=b.Ik=b.rl=a.parentNode;b.oi=vb(b.rl.childNodes,a);b.Fj=b.oi+1
        }a=b
    }else a=Fc?new Lr(Ar(a)):Ec?new Dr(Ar(a)):Dc?new Kr(Ar(a)):new zr(Ar(a));return a
}
var Fna="APPLET",Gna="AREA",Hna="BASE",Ina="COL",Jna="FRAME",Mr="HR",Nr="IMG",Or="INPUT",Pr="ISINDEX",Kna="LINK",Lna="NOFRAMES",Mna="NOSCRIPT",Nna="META",Ona="OBJECT",Pna="PARAM",Qna="SCRIPT",Rna="STYLE";function Br(a){
    var b;a:if(a.nodeType!=1)b=l;else{
        switch(a.tagName){
            case Fna:case Gna:case Hna:case wr:case Ina:case Jna:case Mr:case Nr:case Or:case Ce:case Pr:case Kna:case Lna:case Mna:case Nna:case Ona:case Pna:case Qna:case Rna:b=l;break a
        }b=i
    }return b||a.nodeType==3
};function Qr(){}t(Qr,qr);function sr(a,b){
    var c=new Qr;c.hw=a;c.Oj=!!b;return c
}function Sna(a,b,c,d){
    var e=new Qr;e.Oj=Tna(a,b,c,d);if(a.tagName==wr){
        var g=a.parentNode;b=vb(g.childNodes,a);a=g
    }if(c.tagName==wr){
        g=c.parentNode;d=vb(g.childNodes,c);c=g
    }if(e.Oj){
        e.Bt=c;e.Cp=d;e.At=a;e.Bp=b
    }else{
        e.Bt=a;e.Cp=b;e.At=c;e.Bp=d
    }return e
}o=Qr.prototype;o.hw=j;o.Bt=j;o.Cp=j;o.At=j;o.Bp=j;o.Oj=l;o.Ba=function(){
    var a=new Qr;a.hw=this.hw;a.Bt=this.Bt;a.Cp=this.Cp;a.At=this.At;a.Bp=this.Bp;a.Oj=this.Oj;return a
};
o.W=function(){
    return K
};o.Ww=aa(19);o.ix=function(){
    return 1
};o.hx=function(){
    return this
};
function Rr(a){
    var b;if(!(b=a.hw)){
        b=a.jc();var c=a.wd(),d=a.Mc(),e=a.Td();if(A){
            var g=b,h=c,k=d,m=e,n=l;if(g.nodeType==1){
                h=g.childNodes[h];n=!h;g=h||g.lastChild||g;h=0
            }var p=Gr(g);h&&p.move(Fr,h);if(g==k&&h==m)p.collapse(i);else{
                n&&p.collapse(l);n=l;if(k.nodeType==1){
                    k=(h=k.childNodes[m])||k.lastChild||k;m=0;n=!h
                }g=Gr(k);g.collapse(!n);m&&g.moveEnd(Fr,m);p.setEndPoint(Cna,g)
            }m=new Er(p,Xc(b));m.Jk=b;m.oi=c;m.Ik=d;m.Fj=e;b=m
        }else b=Fc?new Lr(Cr(b,c,d,e)):Ec?new Dr(Cr(b,c,d,e)):Dc?new Kr(Cr(b,c,d,
            e)):new zr(Cr(b,c,d,e));b=a.hw=b
    }return b
}o.lx=function(){
    return Rr(this).$G()
};o.jc=function(){
    return this.Bt||(this.Bt=Rr(this).jc())
};o.wd=function(){
    return this.Cp!=j?this.Cp:this.Cp=Rr(this).wd()
};o.Mc=function(){
    return this.At||(this.At=Rr(this).Mc())
};o.Td=function(){
    return this.Bp!=j?this.Bp:this.Bp=Rr(this).Td()
};o.kq=aa(22);var Una="control";
o.$l=function(a,b){
    var c=a.W();if(c==K)return Rr(this).$l(Rr(a),b);else if(c==Una){
        c=a.$h();return(b?Ab:Bb)(c,function(d){
            return this.containsNode(d,b)
        },this)
    }return l
};o.Vf=aa(8);o.Ph=function(){
    return new xr(this.jc(),this.wd(),this.Mc(),this.Td())
};o.select=function(){
    Rr(this).select(this.Oj)
};o.hz=aa(21);function Sr(){}t(Sr,vr);function Vna(){
    for(var a=Xc(arguments[0]).body.createControlRange(),b=0,c=arguments.length;b<c;b++)a.addElement(arguments[b]);b=new Sr;b.Cj=a;return b
}o=Sr.prototype;o.Cj=j;o.SB=j;o.qE=j;o.Ba=function(){
    return Vna.apply(this,this.$h())
};o.W=function(){
    return Una
};o.Ww=aa(18);o.ix=function(){
    return this.Cj?this.Cj.length:0
};o.hx=function(a){
    a=this.Cj.item(a);return sr(tr(a),void 0)
};o.lx=function(){
    return Hba.apply(j,this.$h())
};o.jc=function(){
    return Tr(this)[0]
};o.wd=function(){
    return 0
};
o.Mc=function(){
    var a=Tr(this),b=tb(a);return Cb(a,function(c){
        return od(c,b)
    })
};o.Td=function(){
    return this.Mc().childNodes.length
};o.$h=function(){
    if(!this.SB){
        this.SB=[];if(this.Cj)for(var a=0;a<this.Cj.length;a++)this.SB.push(this.Cj.item(a))
    }return this.SB
};function Tr(a){
    if(!a.qE){
        a.qE=a.$h().concat();a.qE.sort(function(b,c){
            return b.sourceIndex-c.sourceIndex
        })
    }return a.qE
}o.Vf=aa(7);o.Ph=function(){
    return new Ur(this)
};o.select=function(){
    this.Cj&&this.Cj.select()
};o.hz=aa(20);
function Ur(a){
    if(a){
        this.zp=Tr(a);this.xt=this.zp.shift();this.RB=tb(this.zp)||this.xt
    }ur.call(this,this.xt,l)
}t(Ur,ur);o=Ur.prototype;o.xt=j;o.RB=j;o.zp=j;o.jc=function(){
    return this.xt
};o.Mc=function(){
    return this.RB
};o.Ux=function(){
    return!this.b&&!this.zp.length
};o.next=function(){
    if(this.Ux())f(Vb);else if(!this.b){
        var a=this.zp.shift();pr(this,a,1,1);return a
    }return Ur.z.next.call(this)
};o.zk=function(a){
    this.zp=a.zp;this.xt=a.xt;this.RB=a.RB;Ur.z.zk.call(this,a)
};
o.Ba=function(){
    var a=new Ur(j);a.zk(this);return a
};function Tna(a,b,c,d){
    if(a==c)return d<b;var e;if(a.nodeType==1&&b)if(e=a.childNodes[b]){
        a=e;b=0
    }else if(od(a,c))return i;if(c.nodeType==1&&d)if(e=c.childNodes[d]){
        c=e;d=0
    }else if(od(c,a))return l;return(Eba(a,c)||b-d)>0
};var Vr;a:{
    var Wna=z,Wr,Xna;if(se)Wr=/Firefox\/([0-9.]+)/;else if(A||Dc){
        Vr=Mc;break a
    }else if(ve)Wr=/Chrome\/([0-9.]+)/;else if(we)Wr=/Safari\/([0-9.]+)/;else if(fca||te){
        Wr=/Version\/(\S+).*Mobile\/(\S+)/;Xna=i
    }else if(gca)Wr=/Android\s+([0-9.]+)(?:.*Version\/([0-9.]+))?/;else if(eca)Wr=/Camino\/([0-9.]+)/;if(Wr){
        var Xr=Wr.exec(yc());Wna=Xr?Xna?Xr[1]+ea+Xr[2]:Xr[2]||Xr[1]:z
    }Vr=Wna
}var Yna=Vr;A&&Nc("7.0");var Yr="1.8";Ec&&Nc(Yr);A||Dc||Ec&&Nc(Ae);A||Fc&&Nc(Bq);var Zr="531";Fc&&Nc(Zr);Fc&&Nc($c);Ec&&Nc(Ae)||A||Dc||Fc&&Nc(Zr);Ec||Fc&&Nc("526");ve&&rb(Yna,vg)>=0||we&&rb(Yna,"533");var Zna="BLOCKQUOTE",$r="BODY",$na="CENTER",aoa="DIR",boa="DL",coa="DD",doa="DT",eoa="FORM",foa="H1",goa="H2",hoa="H3",ioa="H4",joa="H5",koa="H6",as="OL",loa="LI",moa="MENU",noa="OPTION",bs="P",ooa="PRE",cs="TABLE",ds="TBODY",es="TD",fs="TH",gs="UL";Ta("ADDRESS",Zna,$r,"CAPTION",$na,Ina,"COLGROUP",aoa,O,boa,coa,doa,"FIELDSET",eoa,foa,goa,hoa,ioa,joa,koa,Mr,Pr,as,loa,"MAP",moa,"OPTGROUP",noa,bs,ooa,cs,ds,es,"TFOOT",fs,"THEAD",Si,"TL",gs);Ta(Nr,Ce,"EMBED");var hs="file",is="url";Ta(K,hs,is);function poa(a,b,c){
    var d=(b=b==1)?a.jc():a.Mc(),e=b?a.wd():a.Td(),g;g=a.lx();for(g=g.nodeType==1?g:g.parentNode;d!=g&&d!=c;){
        if(b&&e!=0||!b&&e!=(d.length||d.childNodes.length))break;var h=d.parentNode;e=vb(h.childNodes,d);e=b?e:e+1;d=h
    }c=b?d:a.jc();g=b?e:a.wd();d=b?a.Mc():d;a=b?a.Td():e;return Sna(c,g,d,a)
};var qoa="kix-clipboard-iframe",roa="-webkit-nbsp-mode";function js(a,b,c,d,e,g){
    this.b=g=g||Vc();this.R=a;this.J=c&&te;this.M=d;this.o=e;this.k={};this.F={};a={
        className:qoa,
        src:De
    };if(A){
        a.frameborder=Hd;a.allowTransparency=kc
    }a=g.L(Ce,a);if(b)a.name=qoa;if(Fc)a.style[roa]=M;g.a.body.appendChild(a);this.a=a;this.N=new he(this);Fc?this.ZQ():this.N.a(this.a,Fe,this.ZQ)
}t(js,Vf);
var soa=Ec&&Nc(Ae),toa=Fc&&!Nc(534),ks=A||toa,uoa=A||te,voa=A||soa||Fc,woa=!Fc,ls="internal-source-marker_"+Math.random(),xoa=RegExp("<[^>]*[Ii][Dd]=[\"']"+ls+"[\"'][^>]*>");o=js.prototype;o.xb=l;o.Ab=i;o.QO=l;o.PO=l;o.Xk=l;o.Vo=j;o.Sh=j;o.Uo=j;o.uw=j;o.UE=j;o.hq=j;o.tI=l;o.dT=0;o.Pz=j;o.KK=l;function yoa(a,b,c,d,e,g,h,k){
    a.a.style.top=b+L;a.a.style.left=c+L;a.a.style.width=d+L;a.a.style.height=e+L;a=ms(a);a.style.textIndent=(g||0)+L;a.style.marginLeft=(h||0)+L;if(k)a.style.fontSize=k+vk
}
function ms(a){
    return a.J?a.uw:a.Uo
}function ns(a){
    a=ms(a);return A?a.innerText:a.textContent
}function zoa(a){
    a=ms(a);if(A)a.innerText=z;else a.textContent=z
}o.setActive=function(a){
    this.xb=a
};o.Z=function(a){
    if(this.Ab!=a){
        this.a.style.display=a?z:Wi;this.Ab=a
    }
};var Aoa="autocapitalize",os="off",ps="initialize";
o.ZQ=function(){
    if(!this.Xk){
        var a;b:{
            this.Vo=this.a.contentWindow;
			try{
                this.Sh=this.Vo.document
            }catch(b){
                if(!woa)f(b);
				if(this.dT>3)
					f(Error("Attempt to initialize clipboard iframe failed."));
				this.a.src=De;
				this.dT++;
				a=l;
				break b
            }
			this.Uo=this.Sh.body;
			this.Uo.style.margin=0;
			this.Uo.style.backgroundColor=wk;a=i
        }
		if(a){
            if(this.J){
                this.uw=this.b.L(cr);
				this.uw.setAttribute(Aoa,os);
				this.b.appendChild(this.Uo,this.uw)
            }
			else if(Ec)
				this.Sh.designMode=ce;
			else this.Uo.contentEditable=i;
			a=ms(this);
			voa&&this.N.a(a,
                If,aq(this.R,this.g1,this)).a(a,Ef,aq(this.R,this.e1,this)).a(a,Gf,aq(this.R,this.f1,this));if(Fc&&xc){
                this.Pz=aq(this.R,this.x5,this);document.addEventListener(If,this.Pz,l)
            }this.N.a(this.Vo,zq,aq(this.R,this.p6,this),i).a(this.Vo,xq,aq(this.R,this.o6,this),i);a=i
        }
		else a=l;
		if(a){
            this.Xk=i;
			this.QO&&this.KG();
			this.PO&&qs(this);
			this.dispatchEvent(ps)
        }
    }
};
o.p6=function(){
    this.tI=i;this.dispatchEvent(zq)
};o.o6=function(){
    this.tI=l;this.dispatchEvent(xq)
};
o.Yh=function(){
    if(this.xb){
        A||Zf(this.KG,0,this);this.KG()
    }
};
o.KG=function(){
    if(this.Xk){
        if(this.xb){
            this.Vo.focus();
			this.J&&ms(this).focus();
			if(Fc){
                var a=document.createRange();
				a.selectNodeContents(ms(this));
				this.KK&&a.collapse(i);
				window.getSelection().addRange(a);
				
            }
        }
    }else this.QO=i
};
function Boa(a){
    a=sr(tr(ms(a)),void 0);if(Fc){
        var b=poa(a,1,void 0);b=poa(b,0,void 0);var c=b.jc();a=b.Mc();var d=b.wd();b=b.Td();if(c==a){
            for(;a!=void 0&&d==0&&b==(a.length||a.childNodes.length);){
                c=a.parentNode;d=vb(c.childNodes,a);b=d+1;a=c
            }c=a
        }Sna(c,d,a,b).select()
    }else a.select()
}function qs(a){
    if(a.Xk){
        a.Vo.focus();ms(a).focus();Boa(a)
    }else a.PO=i
}
function Coa(a,b){
    if(b.nodeType!=1||b.tagName!=Ee&&b.tagName!=O)return l;else if(qa(b.firstChild))return i;else for(var c=b.firstChild;c;c=c.nextSibling)if(!Coa(a,c))return l;return i
}var Doa="\u200b<br>",Eoa="\u200b",Foa='<meta charset="utf-8">',Goa='<meta charset="utf-8">\u200b',Hoa='<meta charset="utf-8"><br>\u200b',Ioa='<meta charset="utf-8">\u200b<br>';o.Mg=function(){
    var a;if(a=ms(this)){
        a=a.innerHTML;a=a==z||Fc&&(a==Doa||a==Eoa||a==Foa||a==Goa||a==Hoa||a==Ioa)
    }else a=i;return a
};
function Joa(a,b){
    var c=b.hh(a);if(!c)return l;if(c.id==ls)return i;if(A&&c.tagName==bs){
        c=b.hh(c);return!!c&&c.id==ls
    }if(Fc)return xoa.test(a.innerHTML.substring(0,4096));return l
}var rs="\u2318",Koa="Ctrl",Loa="Your browser does not allow access to your computer's clipboard.",ss="<br/>",Moa="Instead, please use ",Noa="-C for Copy, ",Ooa="-X for Cut and",Poa="-V for Paste, or use your browser's Edit menu.",ts="Attention";
function us(a,b,c){
    if(c){
        qs(a);A?Zf(s(a.VS,a,b)):a.VS(b)
    }else{
        b=vc?rs:Koa;b=Loa+(ss+(ss+(Moa+(b+(Noa+(b+(Ooa+(ss+(b+Poa)))))))));vs(a.o,2);nr(ts,b,s(a.n6,a))
    }
}o.VS=function(a){
    if(this.Sh){
        Qoa(this,a);this.F[a]=i;this.Sh.execCommand(a);this.F[a]=l;switch(a){
            case Df:this.dispatchEvent(Ef);break;case Ff:this.dispatchEvent(Gf);break;case Hf:this.dispatchEvent(If)
        }
    }
};o.e1=function(){
    ws(this,Df,Ef)
};o.f1=function(){
    ws(this,Ff,Gf)
};o.g1=function(){
    ws(this,Hf,If)
};var xs="text/plain";
o.x5=function(a){
    this.UE=a&&a.clipboardData&&a.clipboardData.getData(xs);a=aq(this.R,this.w5,this);Zf(a,0)
};var Roa="white-space: pre;";o.w5=function(){
    if(this.o.Zm==3&&this.UE){
        var a=ms(this);a.innerHTML=z;var b=id(O,{
            style:Roa
        },this.UE.toString());a.appendChild(b);ws(this,Hf,If,i)
    }this.UE=j
};var Soa="beforecopy",Toa="beforecut";function Qoa(a,b){
    switch(b){
        case Df:a.dispatchEvent(Soa);break;case Ff:a.dispatchEvent(Toa);break;case Hf:ms(a).innerHTML=z;Fc&&sr(tr(ms(a)),void 0).select()
    }
}
function ws(a,b,c,d){
    d||Qoa(a,b);a.F[b]||ys(a,c)
}function ys(a,b){
    if(!a.k[b]){
        a.k[b]=i;Zf(s(a.IZ,a,b),0)
    }
}o.IZ=function(a){
    this.dispatchEvent(a);delete this.k[a]
};o.n6=function(){
    vs(this.o,3)
};o.A=function(){
    js.z.A.call(this);y(this.N);delete this.N;this.b.Ap(this.a);delete this.a;delete this.uw;delete this.Uo;delete this.Sh;delete this.Vo;delete this.b;delete this.k;delete this.o;delete this.hq;this.Pz&&document.removeEventListener(If,this.Pz,l);delete this.Pz
};var zs=0;ca.KX_displayUtilDummyValue=zs;function As(a,b,c,d,e,g){
    gq.call(this,a);this.Ia=b;this.J=c||j;this.ha=d||qk;this.o=(this.Q=this.M=!!e)?new Wf(500):j;this.k=!!g
}t(As,gq);o=As.prototype;o.ku=j;o.fB=i;o.oG=i;o.Ro=j;o.Es=j;o.En=j;o.qG=l;o.ov=j;o.Ly=j;o.AN=-1;o.Ua=function(){
    return this.ku
};o.Ha=function(){
    return this.J
};o.setActive=function(a){
    As.z.setActive.call(this,a);Ds(this)
};function Ds(a){
    var b=!a.ku||a.ku.W()==0,c=a.xb;b=(a.k||c&&a.fB&&(!a.J||!Es(a.J)))&&b;if(a.o)a.Q&&b&&a.Ia.Zm==3?a.o.start():a.o.stop();Uoa(a,b)
}
var Voa="kix-cursor-caret",Woa="border-color: ",Xoa="kix-cursor kix-unprintable",Yoa="kix-cursor-top",Zoa="background-color: ",$oa="kix-cursor-name";o.L=function(){
    var a=this.P();this.Ro=a.L(O,{
        "class":Voa,
        style:Woa+this.ha+cj
    });this.Es=a.L(O,Xoa,this.Ro);this.wb(this.Es);if(this.k){
        this.ov=a.L(O,{
            "class":Yoa,
            style:Zoa+this.ha+cj
        });this.En=a.L(O,{
            "class":$oa,
            style:Zoa+this.ha+cj
        },this.J.Dd());this.En.style.display=Wi;this.Es.appendChild(this.ov);this.Es.appendChild(this.En)
    }
};
o.ta=function(){
    As.z.ta.call(this);if(this.M){
        rm(this).a(this.o,Yf,this.a1);Ds(this)
    }this.k&&rm(this).a(this.Es,Bd,this.m7).a(this.Es,Cd,this.l7)
};o.m7=function(){
    Fs(this,l)
};o.l7=function(){
    Fs(this,i)
};function Fs(a,b){
    if(a.En&&a.ov){
        if(a.Ly){
            $f(a.Ly);a.Ly=j
        }if(!a.qG){
            var c=new Yp(a.En,100);a.ov.style.display=Wi;Lp(c);a.qG=i
        }if(b)a.Ly=Zf(a.E5,1300,a)
    }
}o.E5=function(){
    if(this.En&&this.ov){
        this.Ly=j;var a=new Xp(this.En,200),b=new Yp(this.ov,200);Lp(a);Lp(b);this.qG=l
    }
};
o.Vb=function(){
    As.z.Vb.call(this);this.M&&this.o.stop()
};o.a1=function(){
    Uoa(this,!this.oG)
};var apa="Redrawing at an inline location with wrong params.",bpa="kix-cursor-italic",cpa='progid:DXImageTransform.Microsoft.Matrix(M11="0.97", M12="-0.22",M21="0.22", M22="0.97", SizingMethod="auto expand"',dpa="Redrawing at an inline location with no height.";
o.dc=function(a,b,c){
    var d=this.xb||this.k;if(this.fB&&d){
        d=this.J;if(b=b||(d?d.Ua():j)){
            this.ku=b;d&&this.k&&qd(this.En,d.Dd());d=!d||!Es(d)||this.k;Ds(this);if(d){
                if(b.W()==0){
                    if(!a){
                        this.a.R.log(Error(apa));return
                    }if(this.ku){
                        if(!this.k){
                            b=Gs(this.a.K()).Uk;Uc(this.Ro,bpa,b);if(A)this.Ro.style.filter=b?cpa:z
                        }b=a.a.x;a.Ic||(b-=1);hq(this,b,a.a.y);a=a.height;if(qa(a))this.a.R.log(Error(dpa));else if(this.AN!=a){
                            this.Ro.style.height=a+L;this.AN=a
                        }
                    }if(this.Q){
                        Hs(this,l);Hs(this,i)
                    }
                }c&&Fs(this,i);if(eo(this.a).t$)if(c=
                    this.G())zs=c.offsetHeight
            }
        }
    }
};function Uoa(a,b){
    if(a.oG!=b){
        a.Ro.style.display=b?z:Wi;a.oG=b
    }
}function Hs(a,b){
    if(a.M&&b!=a.Q){
        a.Q=b;a.qb&&Ds(a)
    }
}o.A=function(){
    As.z.A.call(this);y(this.o);delete this.o;delete this.J;delete this.Ia;delete this.ku
};function Is(){}t(Is,x);o=Is.prototype;o.Gi=0;o.bE=0;function Js(a){
    a.bE=a.SG();a.Gi=a.TG()
}o.yz=function(){};o.TG=function(){
    return this.Gi
};o.SG=function(){
    return this.bE
};o.lP=function(){
    return 0
};function Ks(a,b,c){
    this.a=a;this.b=new Tl(c,50,this);this.N=new he(this);this.N.a(a,Oe,aq(b,this.n7,this));Js(this)
}t(Ks,Is);o=Ks.prototype;o.n7=function(){
    this.b.XG()
};o.yz=function(a){
    this.a.scrollTop=a
};o.TG=function(){
    return this.a.scrollTop
};o.SG=function(){
    return this.a.scrollLeft
};o.A=function(){
    Ks.z.A.call(this);y(this.N);delete this.N;y(this.b);delete this.b;delete this.a
};function Ls(a,b){
    cp.call(this,a,b)
}t(Ls,cp);o=Ls.prototype;o.Tf=function(){
    return 1
};o.Zc=function(a){
    var b=this.Tf();if(qa(b))return j;return Ls.z.Zc.call(this,a.shift(-b))
};o.Fb=function(a,b,c){
    var d=this.Tf();if(qa(d))return j;return(a=Ls.z.Fb.call(this,a,b,c))?a.shift(d):j
};o.wh=function(a,b){
    var c=this.Tf();if(qa(c))return j;return Ls.z.wh.call(this,a,c,b)
};o.Nc=function(a){
    var b=this.Tf();if(qa(b))return j;if(a=Ls.z.Nc.call(this,a.shift(-b))){
        a.start+=b;a.end+=b;return a
    }return j
};
o.Dc=function(a,b,c){
    var d=this.Tf();if(qa(d))return j;return(a=Ls.z.Dc.call(this,a.shift(-d),b,c))?a.shift(d):j
};var Ms="Spacer index must be first spacer index.";o.Di=function(a,b,c){
    var d=this.Tf();q(a)&&a!=d&&this.a.R.log(Error(Ms));qa(d)||b.start<d+this.kd()&&Ls.z.Di.call(this,d,b,c)
};o.dc=function(a,b){
    var c=this.Tf();q(a)&&a!=c&&this.a.R.log(Error(Ms));qa(c)||Ls.z.dc.call(this,c,b)
};o.Gd=function(a,b,c){
    var d=this.Tf();q(a)&&a!=d&&this.a.R.log(Error(Ms));qa(d)||Ls.z.Gd.call(this,d,b,c)
};function Ns(a){
    this.type=0;this.anchor=a
}t(Ns,$ia);function Os(a,b,c,d){
    cp.call(this,a,b);this.uj=c;this.M=d
}t(Os,Ls);o=Os.prototype;o.Wh=j;o.FH=l;o.Tf=function(){
    var a=Ps(this);return a?Wo(this.a.K(),a)+1:j
};
var epa="kix-headerview",fpa="kix-footerview";
o.VA=function(){
    return this.P().L(O,this.uj==0?epa:fpa)
};
o.ta=function(){
    Os.z.ta.call(this);Qs(this);Cm(this).a(this.a.K(),vp,this.z7)
};var gpa="kix-headerview-hascontent",hpa="kix-footerview-hascontent";
o.z7=function(){
    var a;var b=Ps(this);if(b)if(this.kd()>1)a=i;else{
        var c=this.a.K();a=al(c,c.Wa());b=Wo(c,b);a=a==b
    }else a=l;if(a!=this.FH){
        Uc(this.G(),this.uj==0?gpa:hpa,a);this.FH=a;Qs(this)
    }
};o.dc=function(a,b){
    if(!Ps(this))return l;return Os.z.dc.call(this,this.Tf(),b)
};function Ps(a){
    if(a.Wh)return a.Wh;var b=a.a.K(),c=nq(b,Ei);c&&mh(c,function(d,e){
        for(var g=0;g<e.length;g++){
            var h=e[g],k=b.pb(h);if(k&&k.b==this.uj){
                this.Wh=h;break
            }
        }return l
    },a);return a.Wh
}
function Qs(a){
    var b=Rs(a.a.K()),c,d,e;c=qi(b);d=ni(b);e=oi(b);b=pi(b);c=a.uj==0?c:d;c-=14;a.FH&&c--;fp(a,7,b,7,e);jma(a,c)
};function Ss(a,b){
    iq.call(this,a,new Ns(sq));this.b=b;this.Na(b);var c=eo(this.a).Ia,d=ri(Rs(a.K())),e=c?new Os(a,d,0,5):j;e&&this.Na(e);this.k=e;(d=c?new Os(a,d,1,5):j)&&this.Na(d);this.o=d;this.J=c?[b,e,d]:[b]
}t(Ss,iq);o=Ss.prototype;o.oU=j;o.nU=j;o.CQ=j;o.yN=j;var ipa="kix-documentplugin";o.L=function(){
    this.wb(this.P().L(O,{
        "class":ipa
    }))
};var jpa="kix-body-view";
o.ta=function(){
    Ss.z.ta.call(this);var a=this.G(),b=this.k,c=this.o;b&&b.Ma(a);this.b.Ma(a);c&&c.Ma(a);if(eo(this.a).NM)this.b.G().id=jpa
};o.Ed=function(){
    return ri(Rs(this.a.K()))+2
};o.Zc=function(a){
    for(var b=this.J,c=0;c<b.length;c++){
        var d=b[c].Zc(a);if(d)return d
    }return j
};o.MG=function(a){
    for(var b=this.J,c=0,d;d=b[c];c++){
        var e=d.Tf();if(e!==j&&a>=e&&a<e+d.kd())return d
    }return j
};
o.HB=function(a,b){
    if(a<0||b<0)return j;var c=this.k,d=0;if(c){
        d=c.Te();if(b<d&&a<c.Ed())return c
    }c=this.b;d=d+c.Te();if(b<d&&a<c.Ed())return c;if(c=this.o){
        d=d+c.Te();if(b<d&&a<c.Ed())return c
    }return j
};function Ts(a,b){
    if(b==a.b)return a.k?a.k.Te():0;else if(b==a.o)return(a.k?a.k.Te():0)+a.b.Te();return 0
}o.Fb=function(a,b,c){
    var d=this.HB(a,b);if(!d||qa(d.Tf()))d=this.b;return d.Fb(a,b-Ts(this,d),d==this.b?c:i)
};
o.ey=function(a,b){
    for(var c=this.J,d=0;d<c.length;d++){
        var e=c[d].wh(a,b);if(e){
            if(e.a){
                e.a.x+=1;e.a.y+=Ts(this,c[d])+1
            }return e
        }
    }return j
};o.Nc=function(a){
    for(var b=this.J,c=0;c<b.length;c++){
        var d=b[c].Nc(a);if(d)return d
    }return j
};o.Dc=function(a,b,c){
    for(var d=this.J,e=0;e<d.length;e++){
        var g=d[e].Dc(a,b,c);if(g)return g
    }return j
};o.LC=function(a,b){
    for(var c=this.J,d=0;d<c.length;d++)c[d].Di(undefined,a,b)
};var Us="#fff";
o.dc=function(){
    for(var a=this.a.a,b=Ko(a),c=l,d=this.J,e=0,g;g=d[e];e++){
        var h=g==this.b,k=g.Tf();if(qa(k)||b<k||b>k+g.kd())if(b==g.Tf()-1){
            c=i;Uo(a,b,Lo(a)==gj?1:0);if(h){
                k=Rs(this.a.K());var m=void 0,n=void 0,p=void 0,r=void 0;m=qi(k);n=ni(k);r=oi(k);p=pi(k);var u=this.k,w=this.o;fp(this.b,u?0:m,p,w?0:n,r);u&&Qs(u);w&&Qs(w);m=vi(k);n=Rs(this.a.K());jma(this.b,m-qi(n)-ni(n));m=ri(k);dp(this.b,m);this.k&&dp(this.k,m);this.o&&dp(this.o,m);this.G().style.backgroundColor=k.b.Sf()||Us
            }
        }else continue;
        if(h){
            h=g;k=h.a.o.a;m=[];n=void 0;for(n in k)Wla(h,k[n],m);h=m
        }else h=[];g.dc(undefined,h)
    }kpa(this,c);return l
};o.Gd=function(a,b){
    kpa(this,i,a,b)
};function kpa(a,b,c,d){
    var e=a.k&&a.k.Te(),g=a.b.Te(),h=a.CQ!=e,k=a.yN!=g;if(!(!b&&!h&&!k)){
        a.CQ=e;a.yN=g;c=c;d=d;if(q(c))a.oU=c;else c=a.oU;if(q(d))a.nU=d;else d=a.nU;if(sa(d)&&sa(c)){
            a.k&&b&&a.k.Gd(undefined,c,d);if(b||h)a.b.Gd(undefined,c-Ts(a,a.b),d);if(a.o&&(b||h||k))a.o.Gd(undefined,c-Ts(a,a.o),d)
        }
    }
}
o.A=function(){
    Ss.z.A.call(this);delete this.b;delete this.k;delete this.o;delete this.J
};function Vs(a){
    var b=new Ls(a,ri(Rs(a.K())));return new Ss(a,b)
};var Ws="#808080";function Xs(a,b){
    As.call(this,a,b,undefined,Ws,undefined,l)
}t(Xs,As);Xs.prototype.b=0;var Ys="/a/";function Zs(a,b,c,d,e,g){
    a=a.match($e);if(b)a[1]=b.replace(Ue,z);b=d||a[5]||tl;if(c)b=Ys+c+b;Wa(b,tl)||(b+=tl);if(e)b+=e.replace(tl,z);return Ze(a[1],a[2],a[3],a[4],b,g?hf(g):j)
};var lpa="/drawings/a/",mpa="/a/drawings/",npa="/a/$1/drawings/";function opa(a){
    a=a.replace(lpa,mpa);return a=a.replace(/\/a\/drawings\/([^\/]+)\//,npa)
};function $s(a){
    Am.call(this,a)
}t($s,Am);$s.prototype.QI=function(){
    return j
};$s.prototype.uR=function(){
    return[]
};function at(a,b,c,d){
    Am.call(this,a);this.o=c;this.b=b;this.k=!!d
}t(at,$s);o=at.prototype;o.Cg=j;o.wq=j;o.vq=j;o.wO=l;o.Qg=function(){
    var a=this.G();if(!a){
        this.L();a=this.G()
    }a=sca(ze.V(),a);a.width+=2;a.height+=2;return a
};o.xc=function(){
    this.ou()
};o.ou=function(){
    var a=this.G();if(a){
        var b=xi(this.b),c=yi(this.b);a.style.width=b+L;a.style.height=c+L;if(this.Cg){
            this.Cg.style.width=b+L;this.Cg.style.height=c+L
        }
    }
};o.QI=function(){
    return new Nm(0,j,new nc(2,2),j)
};
var ppa="kix-embeddedobjectview-drag",bt="//www.google.com/images/cleardot.gif";o.ta=function(){
    at.z.ta.call(this);if(this.k&&this.o){
        if(!this.vq){
            var a=nb(hp,xi(this.b),qo,yi(this.b),on);this.Cg=this.P().L(Nr,{
                "class":ppa,
                style:a,
                src:bt
            });A||$i(this.Cg,0.5);this.P().appendChild(this.G(),this.Cg);this.vq=new Dq(this.Cg);this.vq.LH=Math.pow(6,2)
        }Cm(this).a(this.vq,Jq,this.p7).a(this.vq,Sp,this.q7)
    }
};o.wb=function(a){
    at.z.wb.call(this,a);this.k||Rc(a,nn)
};o.p7=function(){
    ct(this,i)
};
var dt="delta-x",et="delta-y",ft="kix-move-positioned-entity";o.q7=function(a){
    ct(this,l);var b={};b[dt]=a.left;b[et]=a.top;yf(H(this.a.b,ft),b)
};function ct(a,b){
    if(a.wO!=b){
        if(a.Cg)if(b){
            A&&$i(a.Cg,0.5);a.Cg.src=a.Gm()
        }else{
            A&&$i(a.Cg,z);a.Cg.src=bt;Ni(a.Cg,0,0)
        }a.wO=b
    }
}o.A=function(){
    at.z.A.call(this);delete this.b;y(this.vq);delete this.vq
};var gt=new zi;function qpa(a,b,c){
    var d=eo(a).b==3;return gt.execute(b.W(),a,b,d,c)
};function ht(a,b,c,d){
    at.call(this,a,b,c,d)
}t(ht,at);o=ht.prototype;o.uq=j;o.Qg=function(){
    return new oc(4+xi(this.b),4+yi(this.b))
};var it="authkey";o.Gm=function(){
    var a=this.b,b=new oc(xi(this.b),yi(this.b)),c=eo(this.a);c=Zs(c.PM,window.location.protocol,c.hC,undefined,fea,c.eF?[it,c.eF]:undefined);var d=a.ra();a=a.Af();c=opa(c);b={
        id:d,
        w:String(Math.ceil(b.width)),
        h:String(Math.ceil(b.height))
    };if(a!=j)b.rev=String(a);b.ac=1;return ef(jf([c],b))
};var rpa="padding: 2px";
o.L=function(){
    var a=nb(hp,xi(this.b),qo,yi(this.b),on),b=this.P(),c=this.Gm()||bt;this.uq=b.L(Nr,{
        style:a,
        src:c
    });this.wb(b.L(O,{
        style:a+rpa
    },this.uq));this.ob=j
};o.QC=aa(4);o.ou=function(){
    ht.z.ou.call(this);if(this.uq){
        var a=this.b;this.uq.style.width=xi(a)+L;this.uq.style.height=yi(a)+L;a=this.Gm()||bt;pba(this.uq,{
            src:a
        })
    }
};o.yq=function(){
    return 1
};o.Fb=function(){
    return new J(0)
};o.A=function(){
    ht.z.A.call(this);delete this.uq
};var spa="DrawingViews can be created only from drawings.";
gt.set(2,function(a,b,c,d){
    if(b.W()!=2){
        a.R.log(Error(spa));return j
    }return new ht(a,b,c,d)
});var jt="kix_jstex";function kt(a){
    Am.call(this,a);jm(dm.V(),jt,this.taa,this,l,l,i)
}t(kt,$s);o=kt.prototype;o.NI=0;o.RC=0;o.SC=z;o.ob=j;o.Ei=j;o.Qs=j;o.FJ=l;o.ny=j;o.taa=function(){
    this.Qs=bm(em(dm.V(),jt)).a()(this.a.K(),this.a.R);if(this.FJ){
        Io(this.a.a,this.NI,this.NI+this.RC-1);Ho(this.a.a)
    }
};o.Qg=function(){
    return this.ob||new oc(0,0)
};o.L=function(){
    var a=this.P().L(O,nn);a.dir=en;a.innerHTML=this.ny;this.wb(a)
};o.yq=function(){
    return this.RC
};var lt="Loading...";
o.xc=function(a){
    var b=this.a.K().fa().indexOf(Qg,a);if(b<0)b=a;this.RC=b-a+1;this.SC=uk(this.a.K().Ka(K,a));if(this.Qs){
        this.ny=this.Qs.Ma(a,this.SC);this.ob=this.Qs.ob;if(!this.ob)this.ob=Je(ze.V(),this.SC,this.ny);this.Ei=this.Qs.o;this.b=this.Qs.b;this.FJ=l
    }else{
        this.ny=lt;this.ob=Je(ze.V(),this.SC,this.ny);this.b=this.Ei=j;this.FJ=i
    }this.L();this.NI=a
};
o.Fb=function(a,b){
    if(!this.Ei)return j;for(var c=Number.MAX_VALUE,d=j,e=0;e<this.Ei.length;++e){
        var g=this.Ei[e];if(g){
            g=(a-g.x)*(a-g.x)+(b-g.y)*(b-g.y);if(g<c){
                c=g;d=e
            }
        }
    }if(d==j)return j;return new J(d)
};o.QI=function(a,b,c){
    if(!this.Ei)return j;if(!c&&!this.b)return j;if(a.W()!=0)return j;b=a.a-b;if(b<0||b>=this.RC)return j;a=this.Ei[b];b=this.b[b];return a?new Nm(0,b,a.Ba(),i):j
};
o.uR=function(a){
    if(!this.Ei)return[];var b=this.Ei[a.start],c=this.Ei[a.end+1];if(!b||!c)return[];b=b.x;c=c.x;for(var d=Number.MAX_VALUE,e=-Number.MAX_VALUE,g=a.start;g<=a.end;g++){
        var h=this.Ei[g],k=this.b[g];if(h&&k){
            d=Math.min(h.y,d);e=Math.max(h.y+k,e)
        }
    }if(d>=e)return[];return[new Tn(b,d,c-b,e-d)]
};o.A=function(){
    kt.z.A.call(this);delete this.ob
};function mt(){}ia(mt);mt.prototype.o=function(a,b){
    if(this.b(a,b.K()))return new kt(b);return j
};
mt.prototype.b=function(a,b){
    return bh(b.fa(),a)==Ug
};var tpa="kix-footnoteview";function nt(a,b,c,d){
    Zp.call(this,a,b,c,d,tpa)
}t(nt,Zp);var ot="kix-delete-footnote";nt.prototype.dP=function(){
    return ot
};function pt(a){
    jq.call(this,a,new rq(sq,pn))
}t(pt,lq);o=pt.prototype;o.RN=function(a,b){
    return new nt(this.a,a,b,l)
};o.TI=function(a){
    return[a.o]
};o.TC=function(){
    return Dh
};o.yP=function(a){
    return this.a.K().Hc(this.oy(),a)
};o.oy=function(){
    return Dh
};function qt(a){
    Am.call(this,a)
}t(qt,$s);o=qt.prototype;o.OI=0;o.Qg=function(){
    return new oc(this.OI,0)
};var upa="px; margin: 0 ",vpa="kix-horizontalruleview";o.L=function(){
    var a=nb(hp,this.OI-8,upa,4,on);
	this.wb(this.P().L(Mr,{
        "class":vpa,
        style:a
    }))
};
o.xc=function(a,b){
    this.OI=b
};o.yq=function(){
    return 1
};o.Fb=function(){
    return new J(0)
};function rt(){}ia(rt);rt.prototype.o=function(a,b){
    if(this.b(a,b.K()))return new qt(b);return j
};var st="-";
rt.prototype.b=function(a,b){
    return bh(b.fa(),a)==st&&sa(b.Hc(Fh,a))
};function tt(a,b,c,d){
    at.call(this,a,b,c,d)
}t(tt,at);o=tt.prototype;o.ob=j;o.xn=j;o.A7=j;o.wn=j;o.Qg=function(){
    return new oc(4+xi(this.b),4+yi(this.b))
};var wpa="/imageurl";o.Gm=function(){
    if(xpa(this.b))this.xn=j;else if(!this.xn){
        var a=this.b.Ge();if(a){
            var b=this.a.ha,c=b.a[a]||j;if(c)return c;c=s(this.fU,this);var d=b.a[a]||j;if(d)Zf(Da(c,d),0);else{
                c=s(b.F,b,c,a);a={
                    id:b.k,
                    image:a
                };b.b&&ypa(b.b,wpa,a,s(b.o,b,c))
            }return j
        }else if(eo(this.a).kba)this.xn=this.b.$x
    }return this.xn
};var zpa="kix-imageview";
o.fU=function(a){
    if(!this.Bg){
        this.xn=a;this.G()&&Uc(this.G(),zpa,!this.xn);if(this.wn)this.wn.src=this.xn||bt
    }
};o.L=function(){
    var a=nb(hp,xi(this.b),qo,yi(this.b),on),b=this.P(),c=this.Gm();this.wn=b.L(Nr,{
        style:a,
        src:c||bt
    });this.wb(b.L(O,{
        "class":c?z:zpa,
        style:a+rpa
    },this.wn));this.ob=j
};o.QC=aa(3);o.ou=function(){
    tt.z.ou.call(this);if(this.wn){
        var a=xi(this.b),b=yi(this.b);this.wn.style.width=a+L;this.wn.style.height=b+L;if(this.G()&&this.b.Ge()!=this.A7){
            this.xn=j;this.fU(this.Gm())
        }
    }
};
o.yq=function(){
    return 1
};o.Fb=function(){
    return new J(0)
};o.A=function(){
    tt.z.A.call(this);delete this.ob;delete this.wn
};var Apa="ImageViews can be created only from images.";gt.set(0,function(a,b,c,d){
    if(b.W()!=0){
        a.R.log(Error(Apa));return j
    }return new tt(a,b,c,d)
});function ut(a){
    gq.call(this,a)
}t(ut,gq);var Bpa="kix-bubble kix-unprintable";ut.prototype.L=function(){
    this.wb(this.P().L(O,Bpa))
};ut.prototype.ta=function(){
    ut.z.ta.call(this);rm(this).a(this.G(),$p,this.k,l,this)
};ut.prototype.k=function(a){
    a.stopPropagation()
};function vt(a){
    gq.call(this,a)
}t(vt,ut);o=vt.prototype;o.$k=j;o.Cq=j;o.QF=j;o.iK=j;var wt="A",xt="_blank",yt="kix-bubble-link",Cpa="Change",Dpa="Remove",Epa="Go to link: ",zt=" - ";
o.L=function(){
    vt.z.L.call(this);var a=this.P(),b=this.Cq=a.L(wt,{
        target:xt
    }),c=this.QF=a.L(Ee,yt,Cpa),d=this.iK=a.L(Ee,yt,Dpa);this.Z(l);var e=this.G();a.appendChild(e,a.createTextNode(Epa));a.appendChild(e,b);a.appendChild(e,a.createTextNode(zt));a.appendChild(e,c);a.appendChild(e,a.createTextNode(zt));a.appendChild(e,d)
};var At="contextmenu";o.ta=function(){
    vt.z.ta.call(this);rm(this).a(this.Cq,Ed,this.D7).a(this.QF,Ed,this.B7).a(this.iK,Ed,this.c4).a(this.Cq,At,this.C7)
};
o.D7=function(a){
    switch(this.$k.W()){
        case 0:if(sl(this.$k.xd())){
            var b;b=this.$k.xd();b=af(cf(b));window.location.hash=b;a.preventDefault()
        }break;default:a.preventDefault()
    }
};var Bt="kix-insert-link-dialog";o.B7=function(){
    yf(H(this.a.b,Bt))
};var Ct="kix-delete-link";o.c4=function(){
    yf(H(this.a.b,Ct));this.Z(l)
};o.C7=function(a){
    a.stopPropagation()
};
o.Z=function(a){
    if(a&&this.$k.W()==0){
        Fpa(this);var b=this.$k.xd();if(sl(b)&&af(cf(b))==window.location.hash)window.location.hash=z
    }vt.z.Z.call(this,a)
};var Gpa="http://www.google.com/url?q=";function Fpa(a){
    if(a.Cq&&a.$k){
        var b=a.$k.xd(),c=a.Cq,d;if(sl(b)||Va(b,vl))d=b;else d=ll(b)!=b?b:Gpa+encodeURIComponent(b);c.href=d;a.P().IT(a.Cq,ll(b))
    }
}o.A=function(){
    delete this.$k;delete this.Cq;delete this.QF;delete this.iK
};function Dt(){}ia(Dt);Dt.prototype.ju=aa(0);function Et(a){
    this.k=a;this.b=new zi;this.a={}
}t(Et,Vf);Et.prototype.wg=function(a,b){
    this.b.set(a,b);Bp(this,j,a)
};function ko(a,b){
    a.a[b]||(a.a[b]={});return a.a[b]
}function zp(a,b){
    a.b.remove(b);Bp(a,j,b)
}function yp(a,b,c){
    (a=a.a[b])&&a[c]&&delete a[c]
}function Bp(a,b,c){
    a.dispatchEvent(new Ft(b,c))
}Et.prototype.addRange=function(a,b,c){
    Xka(this.k,a,b,c)
};function Ap(a){
    a.dispatchEvent(new Ft)
}Et.prototype.A=function(){
    Et.z.A.call(this);for(var a in this.a)delete this.a[a];delete this.a
};
var Hpa="updateoverlays";function Ft(a,b){
    B.call(this,Hpa);this.b=a||j;this.key=b||j
}t(Ft,B);var Gt="update_doc_style";function Ht(a){
    this.a=Gt;this.F=a
}t(Ht,kn);Ht.prototype.A=function(){
    Ht.z.A.call(this);delete this.F
};var It="add_child";function Jt(a,b){
    this.a=It;this.M=a;this.ha=b
}t(Jt,kn);Jt.prototype.$a=function(){
    return this.M
};var Kt="remove_child";Jt.prototype.k=function(a){
    if(a.W()==Kt&&this.$a()==a.$a())return 3;return 0
};Jt.prototype.A=function(){
    Jt.z.A.call(this);delete this.M
};function Lt(a){
    this.a=Kt;this.M=a
}t(Lt,kn);Lt.prototype.$a=function(){
    return this.M
};Lt.prototype.k=function(a){
    if(a.W()==It&&this.$a()==a.$a())return 3;return 0
};Lt.prototype.A=function(){
    Lt.z.A.call(this);delete this.M
};function Mt(){
    this.a=new Zb;this.k=[]
}t(Mt,x);Mt.prototype.b=j;function Wka(a,b){
    return a.top-b.top
}Mt.prototype.remove=function(a){
    var b=this.a.get(a);if(b){
        this.k.push(new Ha(b.top,b.top+b.height));this.a.remove(a);this.b=j
    }
};function Ipa(a,b){
    var c=new Mt;$b(c.a,a.a);Kaa(b.a.Ph(i),function(d){
        c.a.remove(d)
    });return c
}Mt.prototype.A=function(){
    Mt.z.A.call(this);delete this.a;delete this.k;delete this.b
};function Nt(a){
    this.R=a;this.a=[];this.J=[];this.k=new Gm(s(this.P7,this));this.o=[];this.b=[];this.F=[];this.M=new Mt
}t(Nt,x);o=Nt.prototype;o.qu=j;o.qy=j;function Ot(a){
    if(a.b.length==0)return a.a.length==0?-1:a.a[0];return a.b[0]
}o.Pb=function(){
    return this.k.ea(this.a.length)
};function Pt(a,b){
    if(b>=a.Pb())return-1;return a.a[a.k.indexOf(b)]
}function Qt(a,b){
    var c=Pb(a.a,b);if(c<0)c=-(c+1);return a.k.ea(c)
}function Rt(a){
    return a.b.length==0?-1:a.b[0]
}
function Jpa(a,b,c){
    for(var d=0;d<a.a.length;d++)if(a.a[d]>=b)a.a[d]+=c;for(d=0;d<a.b.length;d++)if(a.b[d]>=b)a.b[d]+=c
}function St(a,b){
    return Pb(a.a,b)>=0
}var Kpa="Removing child not in segment.";o.removeChild=function(a){
    var b=Pb(this.a,a);if(b<0)Pb(this.b,a)>=0?Ub(this.b,a):this.R.log(Error(Kpa));else{
        Kb(this.a,b);Kb(this.J,b);Im(this.k,b+1)
    }
};var Lpa="Setting height to child not in segment.";function Mpa(a,b,c){
    b=Pb(a.a,b);if(b<0){
        a.R.log(Error(Lpa));b=-(b+1)
    }a.J[b]=c;Im(a.k,b+1)
}
function Npa(a,b){
    for(var c=0;c<b.length;c++){
        var d=Pt(a,b[c].start),e=Pt(a,b[c].end);if(d!=-1||e!=-1){
            d=Math.max(d,a.a[0]);e=Math.min(e,a.a[a.a.length-1]);for(d=d;d<=e;d++)Opa(a,d)
        }
    }
}var Ppa="Adding child to layout for child not in this segment.";function Opa(a,b){
    Pb(a.a,b)<0&&a.R.log(Error(Ppa));ph(a.F,b)
}o.$a=function(){
    return this.qy
};o.Ma=function(){
    if(this.qy){
        for(var a=0,b;b=this.o[a];a++){
            this.qy.Ii(b);y(b)
        }this.o.length=0
    }
};var Qpa="Request for offset top past the end of the segment.";
o.P7=function(a,b){
    if(a<0)return 0;if(a>=this.J.length){
        this.R.log(Error(Qpa));return b+1
    }return b+this.J[a]
};o.A=function(){
    Nt.z.A.call(this);delete this.R;delete this.qu;delete this.J;y(this.k);delete this.k;delete this.a;delete this.o;delete this.qy;delete this.b;delete this.F;y(this.M);delete this.M
};function Tt(a){
    this.a=a;this.k=[];this.b=[];this.o=new Gm(s(this.m$,this));this.F=[]
}t(Tt,ao);o=Tt.prototype;var Rpa="Redrawing the same child twice.",Spa="Removing a segment that wasn't at the end.",Tpa="Inserting a segment that wasn't at the end.";
o.xh=function(a,b,c,d,e,g){
    var h=Ut(this,c);if(h.qu&&h.qu.x!=d.x)h.F=Mb(h.a);h.qu=d;Npa(h,g.k);for(var k=Ut(this,c),m=new $n,n=-1,p=j;;){
        var r=fo(a),u=k.F.length==0?-1:k.F[0],w=Rt(k),v=-1;if(r&&r.index<=b+Vt(this))v=this.o.indexOf(r.index-b);var D=-1,I=l;if(w>-1&&(v<0||w<=v)&&(u<0||w<=u)){
            u=D=w;w=c;v=this.b[w];var W=Wt(this,u,w);St(v,u)&&Xt(this,w+1,u,W+1);Yt(this,w,u,W);Ub(v.b,u)
        }else if(u>-1&&(v<0||u<=v))D=u;else if(v>-1){
            D=v;a:{
                u=r;w=b;I=D;v=u.index-w==this.o.ea(I);if(u.type==gj&&v)if(u=this.VR(u,
                    w,I)){
                    I=I;Ib(this.k,I,0,u);Ib(this.F,I,0,[]);for(u=0;u<this.b.length;u++)Jpa(this.b[u],I,1);I=i;break a
                }I=l
            }
        }if(D==-1||!I&&!St(k,D)){
            n=m;p=a;D=b;a=c;k=d;m=e;r=g;g=Ut(this,a);if(k.y<g.Pb()){
                g=Pt(g,k.y);Zt(this,n,g,p,D,a,k,m,r);m=n
            }else b:{
                g=n;e=p;d=D;a=a;k=k;m=m;r=r;D=a+1;for(n=void 0;n=this.b[D];){
                    for(;(p=Ot(n))!=-1;){
                        w=Wt(this,p,D);if(!St(this.b[a],p)){
                            I=a;u=p;w=w;$t(this,I+1,u,w);Yt(this,I,u,w)
                        }if(!Zt(this,g,p,e,d,a,k,m,r)){
                            m=g;break b
                        }
                    }(n=Upa(this,D))&&g.b.push(n)
                }m=g
            }break
        }if(n==D&&r.a(p)){
            this.a.R.log(Error(Rpa));
            break
        }if(this.JT()&&D>n+1){
            n=m;p=D-1;v=a;W=b;I=c;var Q=d,ka=e,ra=g;w=(u=St(this.b[I],p))?I:I-1;v=Vpa(this,v,W,w,Q,ka,ra,p,Wt(this,p,w));u?Wpa(this,n,v,I,p):Xpa(this,v,w,p)
        }if(!Zt(this,m,D,a,b,c,d,e,g))break;n=D;p=r
    }g=m;if(h.a.length==0){
        c<this.b.length-1&&this.a.R.log(Error(Spa));g.a=3;(h=Upa(this,c))&&g.b.push(h)
    }else if(this.$a(c)){
        if(this.xq(c))g.a=1
    }else{
        this.$a(c+1)&&this.a.R.log(Error(Tpa));b=this.Bs(b,c);h.qy=b;g.a=2
    }return g
};
o.Aq=function(a,b){
    for(var c=0,d=0;d<this.k.length;d++){
        var e=this.k[d],g=e.Rc(),h=b+c;io(a.b,new Ha(h,h+g-1)).length>0&&e.Aq(a,h);c+=g
    }
};function Ut(a,b){
    a.b[b]||(a.b[b]=new Nt(a.a.R));return a.b[b]
}function Vpa(a,b,c,d,e,g,h,k,m){
    var n=Ut(a,d),p=a.k[k],r=e.y-Qt(Ut(a,d),k);e=new nc(e.x,r);g=Ypa(a,g,d,k);r=n.M;d=new Mt;$b(d.a,h.a);$b(d.a,r.a);a=p.xh(b,c+a.o.ea(k),m,e,g,d);h=Ipa(d,h);n.M=h;Npa(n,d.k);return a
}
function Zt(a,b,c,d,e,g,h,k,m){
    var n=a.k[c];if(!n)return l;var p=Wt(a,c,g);var r=fo(d),u=n.Rc();if(r&&r.type==fj&&r.index==a.o.ea(c)+e&&r.b.fa().length>=u){
        for(var w=[],v=0;v<n.ii();v++)n.$a(v)&&w.push(n.$a(v));au(a,g,c,l);Zpa(a,g,c,w);go(d,r.index,-u);n=i
    }else n=l;if(n)return i;d=Vpa(a,d,e,g,h,k,m,c,p);e=Ut(a,g);Ub(e.F,c);return Wpa(a,b,d,g,c)
}var $pa="hasNextSegment is false, but nextSegmentMustLayout is true.";
function Wpa(a,b,c,d,e){
    var g=Ut(a,d);if(!c.o){
        c.k&&a.a.R.log(Error($pa));Zpa(a,d,e,c.b)
    }if(Xpa(a,c,d,e))b.a=1;if(c.F){
        if(g.a.length==1&&Ot(g)==e)b.F=i;else{
            aqa(a,d,e);b.o=i;b.k=i
        }return l
    }if(c.o){
        bqa(a,d+1,e);if(St(g,e+1)||Rt(g)!=-1)aqa(a,d,e+1);b.o=i;if(c.k){
            Opa(Ut(a,d+1),e);b.k=i
        }return l
    }return i
}var cqa="Child ",dqa=" should have moved into segment ";
function aqa(a,b,c){
    var d=Ut(a,b);if(St(d,c)){
        Xt(a,b+1,c);for(var e=d.a,g=e.length-1,h;h=e[g];g--)h>c&&Xt(a,b+1,h)
    }for(h=Rt(d);h!=-1;){
        h<c&&a.a.R.log(Error(cqa+h+dqa+d));Xt(a,b+1,h);h=Rt(d)
    }
}function Xt(a,b,c,d){
    var e=b-1,g=Ut(a,e);if(St(g,c))$t(a,e,c,d||Wt(a,c,e));Pb(g.b,c)>=0&&Ub(g.b,c);a=Ut(a,b);ph(a.b,c)
}function eqa(a,b,c,d){
    if(Ot(a.b[b])==c){
        var e=a.k[c].Pb(d);if(b>0&&e>0&&(a.b[b-1].qu?a.b[b-1].qu.y-a.b[b-1].Pb():0)>=e){
            b=b-1;$t(a,b+1,c,d);Yt(a,b,c,d);return i
        }
    }return l
}
function Upa(a,b){
    for(var c=a.b[b].a,d=0;d<c.length;d++)au(a,b,c[d],l);for(d=0;d<a.F.length;d++)for(c=0;c<a.F[d].length;c++)a.F[d][c]>b&&a.F[d][c]--;d=a.b[b].$a();y(a.b[b]);Kb(a.b,b);return d
}var fqa="Render mode is DELETE, but hasNextSegment is true.";
function Xpa(a,b,c,d){
    var e=a.k[d],g=Wt(a,d,c);if(b.a==2)Yt(a,c,d,g);else if(b.a==3){
        b.o&&a.a.R.log(Error(fqa));au(a,c,d,l)
    }else if(b.a==1){
        Mpa(a.b[c],d,e.Pb(g));Im(a.o,d+1)
    }for(;eqa(a,c,d,g);){
        d=Ot(a.b[c]);if(d==-1)break;g=Wt(a,d,c)
    }return b.a!=0
}var gqa="Adding child segment with no renderer.";function Yt(a,b,c,d){
    var e=a.k[c],g=e.$a(d);if(g){
        var h=Pb(a.b[b].a,c);if(h<0)h=-(h+1);bu(a,b,new Jt(g,h));bqa(a,b,c);Mpa(a.b[b],c,e.Pb(d));Im(a.o,c+1)
    }else a.a.R.log(Error(gqa))
}var hqa="Removing child segment with no renderer.";
function $t(a,b,c,d){
    if(d=a.k[c].$a(d)){
        var e=a.b[b];e&&!(Pb(e.b,c)>=0)&&bu(a,b,new Lt(d));au(a,b,c,i)
    }else a.a.R.log(Error(hqa))
}o.wN=ha;o.JT=function(){
    return l
};o.$a=function(a){
    return this.b[a]?this.b[a].$a():j
};o.Ma=function(a){
    var b=this.b[a];if(b){
        b.Ma();b=b.a;for(var c=0;c<b.length;c++)for(var d=b[c],e=this.F[d],g=0;g<e.length;g++)a==e[g]&&this.k[d].xq(g)&&this.k[d].Ma(g)
    }
};o.Rc=function(){
    return Vt(this)
};function Vt(a){
    return a.o.ea(a.k.length)
}o.Pb=function(a){
    if(!this.b[a])return 0;return this.b[a].Pb()
};
o.xq=function(a){
    if(this.b[a]&&this.b[a].o.length>0)return i;if(!this.b[a])return l;var b=this.b[a].a;if(!b)return l;for(var c=0;c<b.length;c++)for(var d=b[c],e=this.F[d],g=0;g<e.length;g++)if(a==e[g]&&this.k[d].xq(g))return i;return l
};function au(a,b,c,d){
    a.b[b].removeChild(c);Ub(a.F[c],b);if(!d&&a.F[c].length==0){
        a.wN(c);y(a.k[c]);Kb(a.F,c);Kb(a.k,c);for(b=0;b<a.b.length;b++)Jpa(a.b[b],c,-1)
    }Im(a.o,c+1)
}
function bqa(a,b,c){
    var d=Ut(a,b),e=Pb(d.a,c);if(e<0){
        e=-(e+1);Ib(d.a,e,0,c);Ib(d.J,e,0,0)
    }Im(d.k,e);a.F[c]||(a.F[c]=[]);ph(a.F[c],b)
}function Zpa(a,b,c,d){
    for(var e=[],g=0;g<d.length;g++)e.push(new Lt(d[g]));for(d=b+1;a.b[d]&&(St(a.b[d],c)||Pb(a.b[d].b,c)>=0);){
        St(a.b[d],c)&&au(a,d,c,l);Ub(a.b[d].b,c);for(g=0;g<e.length;g++)if(Xja(a.b[d].o,e[g])){
            y(e[g]);Kb(e,g);break
        }d++
    }for(g=0;g<e.length;g++)bu(a,b,e[g])
}var iqa="Adding a task to a segment that doesn't yet exist";
function bu(a,b,c){
    if(b=a.b[b])Xja(b.o,c)?y(c):b.o.push(c);else a.a.R.log(Error(iqa))
}function Ypa(a,b,c,d){
    var e=b.y;if(a.b[c].Pb()>0)e+=Qt(a.b[c],d);return new nc(b.x,e)
}function Wt(a,b,c){
    a=a.F[b];if(!a)return 0;for(b=0;b<a.length;b++)if(a[b]>=c)break;return b
}o.ii=function(){
    return this.b.length
};var jqa="Request for child start index past the end of the view.";o.m$=function(a,b){
    if(a<0)return 0;if(a>=this.k.length){
        this.a.R.log(Error(jqa));return b+1
    }return b+this.k[a].Rc()
};
var kqa="Requested segment for spacer not owned by this view.",lqa="Index not in view and redraw is not an insert.";o.ut=function(a,b){
    var c=b.index-a;if(c<0){
        this.a.R.log(Error(kqa));return 0
    }c=this.o.indexOf(c);if(!this.k[c]){
        b.type!=gj&&this.a.R.log(Error(lqa));return this.b.length-1
    }if(this.F[c].length==0)return this.b.length-1;var d=this.o.ea(c);return this.k[c].ut(a+d,b)+this.F[c][0]
};
function cu(a,b){
    if(b.W()!=0)return-1;var c=b.a;if(c>=Vt(a))return-1;var d=a.o.indexOf(c);if(b.b&&a.o.ea(d)==c)d=Math.max(d-1,0);return d
}o.Zc=function(a){
    var b=cu(this,a);if(b<0)return j;var c=this.o.ea(b);return this.k[b].Zc(a.shift(-c))
};o.Nc=function(a){
    var b=cu(this,a);if(b<0)return j;var c=this.o.ea(b);if(a=this.k[b].Nc(a.shift(-c))){
        a.start+=c;a.end+=c
    }return a
};
o.Dc=function(a,b,c){
    var d=cu(this,a);if(d<0)return j;var e=this.o.ea(d);if(a=this.k[d].Dc(a.shift(-e),b,c))return a.shift(e);d+=b?-1:1;e=this.k[d];if(!e)return j;a=this.F[d].length;a=b?a-1:0;b=b?e.Pb(a):0;a=e.Fb(new nc(0,0),a,c,b,i);e=this.o.ea(d);return a?a.shift(e):j
};
o.Fb=function(a,b,c,d,e){
    var g=this.b[b];if(!e){
        var h;a:{
            h=g.M;for(var k=new nc(a.x+c,a.y+d),m=h.a.zf(),n=0;n<m.length;n++)if(h.a.get(m[n]).contains(k)){
                h=m[n];break a
            }h=j
        }if(h)return new mm(h)
    }h=yl(d,0,g.Pb()-1);d=Pt(g,h);h-=Qt(g,d);a=Ypa(this,a,b,d);return(b=this.k[d].Fb(a,Wt(this,d,b),c,h,e))&&b.shift(this.o.ea(d))
};o.Lm=function(a,b,c,d,e){
    var g=this.b[b];d=yl(d,0,g.Pb()-1);var h=Pt(g,d);d-=Qt(g,h);g=this.o.ea(h);return this.k[h].Lm(a+g,Wt(this,h,b),c,d,e)
};
o.Gf=function(a,b,c){
    var d;d=this.a.K();if(a.W()==1){
        d=qp(d,a);if(d>=Vt(this))return j;d=this.o.indexOf(d)
    }else d=cu(this,a.shift(-b));if(d<0)return j;var e=this.o.ea(d);a=this.k[d].Gf(a,b+e,c);if(!a)return j;b=this.F[d][a.b];a.b=b;a.a.y+=Qt(this.b[b],d);return a
};o.A=function(){
    for(var a=0;a<this.k.length;a++)y(this.k[a]);delete this.k;for(a=0;a<this.b.length;a++)y(this.b[a]);delete this.b;delete this.o;delete this.F;Tt.z.A.call(this)
};function du(a,b,c){
    Tt.call(this,a);this.J=b||j;this.Q=c||j
}t(du,Tt);o=du.prototype;o.tE=l;o.Pw=l;o.nJ=function(){};o.xh=function(a,b,c,d,e,g){
    mqa(this,a,b,i);c=du.z.xh.call(this,a,this.J?b+1:b,c,d,e,g);b=b+this.Rc()-(this.Pw?1:0);mqa(this,a,b,l);return c
};var nqa="Start marker being deleted.",oqa="End marker being deleted.";
function mqa(a,b,c,d){
    var e=d?a.J:a.Q,g=fo(b);if(g)if(!(!e||g.index!=c))if(g.type==fj){
        if(d){
            a.a.R.log(Error(nqa));a.tE=l
        }else{
            a.a.R.log(Error(oqa));a.Pw=l
        }go(b,c,-1)
    }else{
        if(e=g.type==gj)if(d)a.tE=i;else a.Pw=i;d&&a.nJ(c);ho(b.a,b.b.start,c,e?1:0)
    }
}
o.Aq=function(a,b){
    if(this.J){
        if(!this.tE)f(Error("Layout of overlays for start marker in marker container view should not occur because start marker has not been layed out at index: "+b+ea));no(a,new Ha(b,b))
    }du.z.Aq.call(this,a,this.J?b+1:b);if(this.Q){
        if(!this.Pw)f(Error("Layout of overlays for end marker in marker container view should not occur because end marker has not been layed out at index: "+b+ea));var c=b+this.Rc()-1;no(a,new Ha(c,c))
    }
};
o.VR=function(a,b,c){
    var d;d=this.Q?bh(this.a.K().fa(),a.index)==this.Q:l;if(d)return j;return this.Hy(a,b,c)
};o.Rc=function(){
    var a=du.z.Rc.call(this);this.tE&&a++;this.Pw&&a++;return a
};o.Dc=function(a,b,c){
    return(a=du.z.Dc.call(this,this.J?a.shift(-1):a,b,c))?this.J?a.shift(1):a:j
};o.Fb=function(a,b,c,d,e){
    return(a=du.z.Fb.call(this,a,b,c,d,e))?this.J?a.shift(1):a:j
};o.Nc=function(a){
    if(a.a==0)return j;if(a=du.z.Nc.call(this,this.J?a.shift(-1):a)){
        a.start++;a.end++
    }return a
};
o.Lm=function(a,b,c,d,e){
    return du.z.Lm.call(this,this.J?a+1:a,b,c,d,e)
};o.Gf=function(a,b,c){
    return du.z.Gf.call(this,a,this.J?b+1:b,c)
};o.Zc=function(a){
    return du.z.Zc.call(this,this.J?a.shift(-1):a)
};o.ut=function(a,b){
    var c=b.index-a;if(c==0&&this.J)return 0;if(this.Q&&c==this.Rc()-1)return this.ii()-1;return du.z.ut.call(this,this.J?a+1:a,b)
};function eu(a){
    qm.call(this,a)
}t(eu,jn);eu.prototype.Ii=function(a){
    switch(a.W()){
        case It:var b=a.$a();b.rb&&b.rb!=this&&b.rb.removeChild(b,i);this.gj(b,a.ha,i);break;case Kt:b=a.$a();b.rb==this&&this.removeChild(b,i)
    }
};function fu(a){
    qm.call(this,a)
}t(fu,eu);var pqa="kix-pagerenderer";fu.prototype.L=function(){
    this.wb(this.P().L(O,{
        "class":pqa
    }))
};fu.prototype.Ii=function(a){
    switch(a.W()){
        case Gt:a=a.F;var b=this.G();b.style.paddingTop=qi(a)+L;b.style.paddingBottom=ni(a)+L;b.style.paddingRight=oi(a)+L;b.style.paddingLeft=pi(a)+L;b.style.width=ti(a)+L;b.style.height=Le(ze.V(),ui(a))+L;b.style.backgroundColor=a.b.Sf()||Us;break;default:fu.z.Ii.call(this,a)
    }
};function gu(a){
    qm.call(this,a)
}t(gu,eu);var qqa="kix-headerfooterrenderer";gu.prototype.L=function(){
    this.wb(this.P().L(O,qqa))
};var rqa="7px";gu.prototype.Ii=function(a){
    switch(a.W()){
        case Gt:a=a.F;var b=this.G();b.style.paddingTop=rqa;b.style.paddingLeft=oi(a)+L;b.style.paddingRight=pi(a)+L;b.style.width=ti(a)+L;b.style.height=qi(a)-7+L;b.style.backgroundColor=a.b.Sf()||Us;break;default:gu.z.Ii.call(this,a)
    }
};function hu(a){
    du.call(this,a,Jg)
}t(hu,du);hu.prototype.Bs=function(a,b){
    bu(this,b,new Ht(Rs(this.a.K())));return new gu(this.a.P())
};hu.prototype.Hy=function(a){
    return iu(ju.V(),a.index,a.Ub,this.a)
};hu.prototype.Gf=function(a,b,c){
    a=hu.z.Gf.call(this,a,b,c);if(!a)return j;b=Rs(this.a.K());a.a.x+=oi(b);a.a.y+=7;return a
};hu.prototype.Fb=function(a,b,c,d){
    b=Rs(this.a.K());return hu.z.Fb.call(this,a,0,c-oi(b)-1,d-7)
};function ju(){
    this.b=[]
}t(ju,x);ia(ju);ju.prototype.a=j;function iu(a,b,c,d){
    for(var e=0,g;g=a.b[e];e++)if(g.a(b,c,d.K()))return g.b(b,c,d);if(!a.a)f(Error("No providers handled the insertion and there is no default provider."));return a.a.b(b,c,d)
}ju.prototype.register=function(a){
    this.b.push(a)
};ju.prototype.registerDefault=function(a){
    if(this.a)f(Error("Default provider already registered."));this.a=a
};ju.prototype.A=function(){
    ju.z.A.call(this);delete this.b;delete this.a
};function ku(a){
    du.call(this,a,Jg)
}t(ku,du);o=ku.prototype;o.nJ=function(){
    for(var a=Rs(this.a.K()),b=0;b<this.ii();b++)bu(this,b,new Ht(a))
};o.Hy=function(a){
    return iu(ju.V(),a.index,a.Ub,this.a)
};o.Bs=function(a,b){
    bu(this,b,new Ht(Rs(this.a.K())));return new fu(this.a.P())
};o.Dc=function(a,b,c){
    var d=Rs(this.a.K());return ku.z.Dc.call(this,a,b,c-oi(d)-1)
};o.Fb=function(a,b,c,d,e){
    var g=Rs(this.a.K());return ku.z.Fb.call(this,a,b,c-oi(g)-1,d-qi(g)-1,e)
};
o.Lm=function(a,b,c,d,e){
    var g=Rs(this.a.K()),h=oi(g)+1,k=h+ti(g)-e.width;c=Math.max(Math.min(c,k),h);k=qi(g)+1;g=k+Le(ze.V(),ui(g))-e.height;return ku.z.Lm.call(this,a,b,c-h,Math.max(Math.min(d,g),k)-k,e)
};o.Gf=function(a,b,c){
    a=ku.z.Gf.call(this,a,b,c);if(!a)return j;b=Rs(this.a.K());a.a.x+=oi(b);a.a.y+=qi(b);return a
};function lu(a){
    iq.call(this,a,new Ns(sq));this.b=new ku(a);this.k=[];this.o=[]
}t(lu,iq);o=lu.prototype;o.OE=0;o.mU=Number.MAX_VALUE;o.Ed=function(){
    return ri(Rs(this.a.K()))+2
};function sqa(a){
    a=Rs(a.a.K());return new nc(ti(a),qi(a))
}function mu(a){
    return Math.min(Math.ceil(a.OE/nu(a)),a.k.length-1)
}o.Zc=function(a){
    var b=j,c=ou(this);if(c&&this.k.length>0)b=this.k[mu(this)].Zc(a.shift(-c.Lr));return b||this.b.Zc(a)
};o.MG=function(){
    return j
};o.HB=function(){
    return j
};
o.Nc=function(a){
    var b=j,c=ou(this);if(c&&this.k.length>0)if(b=this.k[mu(this)].Nc(a.shift(-c.Lr))){
        b.start+=c.Lr;b.end+=c.Lr
    }return b||this.b.Nc(a)
};o.Dc=function(a,b,c){
    return this.b.Dc(a,b,c)
};o.Gd=function(a,b){
    this.OE=a;this.mU=b
};o.Fb=function(a,b,c){
    var d=nu(this),e=b/d|0;d=b-e*d;if(d<sqa(this).y)if((b=ou(this))&&this.k.length>0)return(a=this.k[e].Fb(new nc(0,0),0,a,d,c))?a.shift(b.Lr):j;return this.b.Fb(new nc(0,0),e,a,d,c)
};
o.ey=function(a,b){
    var c=this.b.Gf(a,0,b),d=c?c.b:j;if(!c){
        var e=ou(this);if(this.k.length>0&&e){
            d=mu(this);c=this.k[d].Gf(a,e.Lr,b)
        }
    }if(!c)return j;e=vi(Rs(this.a.K()))+15+2;c.a.y+=e*d+1;c.a.x++;c.b=0;return c
};function ou(a){
    a=nq(a.a.K(),Ei);if(a.length==0)return j;var b=j,c=j;mh(a,function(d,e){
        b=e[0];c=d;return i
    });return{
        id:b,
        Lr:c
    }
}
o.dc=function(a){
    var b=Rs(this.a.K());tqa(this);b=new nc(ti(b),Le(ze.V(),ui(b)));for(var c=new ap(this.a.a,Vo(this.a.a,j)),d;(d=uqa(this,c))>=0;){
        var e=fo(c),g=a;e=e?e.index:-1;var h=d,k=nu(this),m=(this.OE+this.mU)/k|0;if(g.b(h<(this.OE/k|0)?0:h>m?2:1,e))return i;else{
            d=d;g=this.b.xh(c,0,d,b,new nc(0,0),new Mt);if(g.a==2){
                this.gj(this.b.$a(d),d,i);tqa(this,d)
            }for(e=0;e<g.b.length;e++){
                this.k.pop();this.removeChild(g.b[e],i)
            }g.a!=0&&this.b.Ma(d);d=d;g=g;e=this.o;Ub(e,d);k=g.a;h=k==2;k=k==3;if(h||
                k){
                m=Pb(e,d);if(m<0)m=-(m+1);for(m=m;m<e.length;m++)e[m]+=h?1:-1
            }if(g.k)Haa(e,k?d:d+1)
        }
    }this.LC(new Ha(0,0));return l
};
function tqa(a,b){
    var c=sa(b);if(c)a.k[b]=new hu(a.a);var d=ou(a);if(d){
        var e=sqa(a),g=a.a.a,h=c?b:0,k=c?b+1:a.k.length;if(c||fo(new ap(g,Vo(g,d.id)))){
            for(h=h;h<k;h++){
                var m=a,n=g,p=d.id,r=c,u;if(r)u=new Do(n.Y,n.R);else{
                    u=n;var w=new Do(u.Y,u.R),v=w,D=u.a.nv();v.a.wa();v.a=new Eo(D);v=w;D=u.k.nv();v.k.wa();v.k=new Eo(D);xla(w,u.uc);u=w
                }u=u;p=Vo(n,p);r&&Fo(u,p.start,p.end-p.start+1);m=m;r=h;n=m.k[r];p=n.xh(new ap(u,p),d.Lr,0,e,new nc(0,0),new Mt);if(p.a==2){
                    u=m.b.$a(r);u.Na(n.$a(0),i)
                }for(w=0;w<
                    p.b.length;w++){
                    u=m.b.$a(r);u.removeChild(p.b[w],i)
                }p.a!=0&&n.Ma(0)
            }g.clear(d.id)
        }
    }
}o.LC=function(){
    this.b.Aq(new bp(this.a.a),0)
};function uqa(a,b){
    var c=fo(b);c=c?a.b.ut(0,c):-1;if(a.o.length==0)return c;return c==-1||a.o[0]<c?a.o[0]:c
}function nu(a){
    return vi(Rs(a.a.K()))+15+2
}var vqa="kix-paginateddocumentplugin";o.L=function(){
    this.wb(this.P().L(O,{
        "class":vqa
    }))
};o.A=function(){
    lu.z.A.call(this);y(this.b);delete this.b
};function pu(a){
    this.a=a
}pu.prototype.toString=function(){
    return this.a
};var wqa="all";function qu(){
    this.a=wqa
}t(qu,pu);ia(qu);qu.prototype.b=function(){
    return l
};function ru(){
    this.a=sf
}t(ru,pu);ia(ru);ru.prototype.b=function(a){
    return a==2
};var xqa="time";function su(a){
    this.a=xqa;this.k=a||Ea;this.o=this.k()
}t(su,pu);var yqa=Number(mf(window.location.href,"redrawTime"))||100;su.prototype.b=function(){
    return this.k()>this.o+yqa
};var zqa="spacerIndex";function tu(a){
    this.a=zqa;this.k=a
}t(tu,pu);
tu.prototype.b=function(a,b){
    return b==-1||b>this.k
};function uu(a){
    gq.call(this,a)
}t(uu,gq);o=uu.prototype;o.An=j;o.Qx=j;o.Tw=j;o.wR=j;var Aqa="Inline",Bqa="Fixed",Cqa="Position: ";o.L=function(){
    var a=this.P(),b=this.Qx=a.L(Ee,j,Aqa),c=this.Tw=a.L(Ee,j,Bqa),d=this.wR=a.createTextNode(Cqa);this.wb(a.L(O,nn,d,b,a.createTextNode(zt),c))
};o.ta=function(){
    uu.z.ta.call(this);rm(this).a(this.Qx,Ed,s(this.vR,this,l)).a(this.Tw,Ed,s(this.vR,this,i))
};var vu="positioned",wu="kix-update-embedded-entity-position";
o.vR=function(a){
    if(this.An.W()!=(a?vu:Yi)){
        var b={};b.eId=this.An.ra();b.posd=a;yf(H(this.a.b,wu),b)
    }
};var Dqa="kix-bubble-label";function Eqa(a,b){
    a.An=b;if(a.An)if(a.An.W()==Yi){
        a.Tw.className=yt;a.Qx.className=Dqa
    }else{
        a.Qx.className=yt;a.Tw.className=Dqa
    }
}o.A=function(){
    uu.z.A.call(this);delete this.An;delete this.Qx;delete this.Tw;delete this.wR
};function xu(a){
    gq.call(this,a);this.b=new uu(a);this.Na(this.b)
}t(xu,ut);o=xu.prototype;o.wG=j;o.zT=j;var Fqa="Edit";o.L=function(){
    xu.z.L.call(this);var a=this.P(),b=this.wG=a.L(Ee,yt,Fqa),c=this.zT=a.createTextNode(zt),d=this.G();a.appendChild(d,b);a.appendChild(d,c);this.b.Ma(d)
};o.ta=function(){
    xu.z.ta.call(this);rm(this).a(this.wG,Ed,s(this.f2,this),l,this)
};var yu="kix-update-drawing";o.f2=function(){
    var a={};a.dId=this.b.An.a.ra();a.eId=this.b.An.ra();yf(H(this.a.b,yu),a)
};
o.A=function(){
    xu.z.A.call(this);delete this.b;delete this.wG;delete this.zT
};function zu(a){
    gq.call(this,a);this.b=new uu(a);this.Na(this.b)
}t(zu,ut);zu.prototype.L=function(){
    zu.z.L.call(this);this.b.Ma(this.G())
};zu.prototype.A=function(){
    zu.z.A.call(this);delete this.b
};var Gqa="nw",Au="n",Hqa="ne",Iqa="sw",Jqa="se";function Bu(a,b){
    qm.call(this,b);this.R=a;this.b=[];this.a=[];this.k=[new Cu(Gqa,0,0),new Cu(Au,0.5,0),new Cu(Hqa,1,0),new Cu(Ol,0,0.5),new Cu(Xk,1,0.5),new Cu(Iqa,0,1),new Cu(Pk,0.5,1),new Cu(Jqa,1,1)];this.N=new he(this)
}t(Bu,qm);o=Bu.prototype;o.Sg=j;o.Lu=j;o.yr=j;var Kqa="kix-selection-box",Lqa="kix-selection-box-handle",Mqa="cursor:",Nqa="-resize";
o.L=function(){
    var a=this.P();this.yr=a.L(O,Kqa);for(var b=0,c;c=this.k[b];b++)this.a.push(a.L(O,{
        "class":Lqa,
        style:Mqa+c.k+Nqa
    }));this.wb(a.L(O,ela,this.yr,this.a))
};o.ta=function(){
    Bu.z.ta.call(this);this.N.a(this.G(),$p,this.U7);for(var a=0,b;b=this.a[a];a++)this.b.push(new Dq(b));for(a=0;b=this.b[a];a++)this.N.a(b,Jq,this.Q7).a(b,Hq,this.S7).a(b,Kq,this.T7).a(b,Sp,this.R7)
};o.U7=function(a){
    a.stopPropagation()
};o.S7=function(){
    this.Lu=this.Sg.Ba()
};
o.Q7=function(a){
    var b=Oqa(this,a);if(b)if(b.width<20||b.height<20){
        a.preventDefault();a.stopPropagation()
    }
};o.T7=function(a){
    (a=Oqa(this,a))&&Pqa(this,a)
};var Qqa="Failed to cache previous rect prior to drag.",Rqa="resize-end";o.R7=function(){
    !this.Lu||!this.Sg?this.R.log(Error(Qqa)):this.dispatchEvent(new Sqa(Rqa,this.Lu,this.Sg))
};
function Oqa(a,b){
    if(!a.Lu){
        a.R.log(Error(Qqa));return j
    }var c=a.k[vb(a.b,b.b)],d=b.left+4,e=b.top+4,g=a.Lu,h=g.Ba();switch(c.b){
        case 0:h.top=e;h.height=g.height+g.top-e;break;case 1:h.height=e-g.top
    }switch(c.a){
        case 0:h.left=d;h.width=g.width+g.left-d;break;case 1:h.width=d-g.left
    }if(c.a!=0.5&&c.b!=0.5){
        d=h;e=g.width/g.height;g=d.Ba();e=Math.round(d.height*e);if(c.a==0)g.left+=d.width-e;g.width=e;h=g
    }return h
}
function Pqa(a,b){
    a.Sg=b;var c=a.Sg.height-2;a.yr.style.width=a.Sg.width-2+L;a.yr.style.height=c+L;a.yr.style.left=a.Sg.left+L;a.yr.style.top=a.Sg.top+L;c=0;for(var d;d=a.a[c];c++){
        var e=a.k[c],g=e.b*a.Sg.height+a.Sg.top-4;d.style.left=e.a*a.Sg.width+a.Sg.left-4+L;d.style.top=g+L
    }
}o.A=function(){
    Bu.z.A.call(this);delete this.b;delete this.a;delete this.k;y(this.N);delete this.N;delete this.Sg;delete this.Lu;delete this.yr
};function Cu(a,b,c){
    this.k=a;this.a=b;this.b=c
}
function Sqa(a,b,c){
    B.call(this,a);this.k=b;this.b=c
}t(Sqa,B);function Du(a){
    gq.call(this,a);this.b=new xu(a);this.Na(this.b);this.k=new zu(a);this.Na(this.k);this.o=new Bu(a.R,a.P());this.Na(this.o)
}t(Du,gq);o=Du.prototype;o.YI=j;o.L=function(){
    Du.z.L.call(this);this.k.Ma(this.G());this.b.Ma(this.G());this.o.Ma(this.G())
};o.ta=function(){
    Du.z.ta.call(this);rm(this).a(this.o,Rqa,this.i2)
};var Eu="kix-resize-image";
o.i2=function(a){
    var b={};b.eId=this.YI.ra();b.size=new oc(a.b.width,a.b.height);b[dt]=a.b.left-a.k.left;b[et]=a.b.top-a.k.top;yf(H(this.a.b,Eu),b)
};o.A=function(){
    Du.z.A.call(this);delete this.k;delete this.b;delete this.o;delete this.YI
};var Fu="kix-overlay-selection";function Gu(a,b,c,d){
    this.Y=a;this.a=b;this.b=d;this.N=new he(this);this.N.a(a,vp,this.W7);this.o=s(this.tP,this);this.k=c;this.a.wg(Fu,s(this.o,this))
}t(Gu,x);var Tqa=vc?"kix-selection-overlay-mac":"kix-selection-overlay";o=Gu.prototype;o.xb=l;function Hu(a){
    return Math.max(12E4-(Ea()-a),0)
}o.setActive=function(a){
    if(this.xb!=a){
        this.xb=a;Bp(this.a,j,Fu);this.b.addRange(Fu,0,Number.MAX_VALUE);this.Y.a.a&&Ap(this.b)
    }
};
function Uqa(a,b,c,d){
    var e=j;if(c.W()==0&&d.W()==0){
        c=c.a;d=d.a;if(c!=d){
            e=new Ha(c,d);e.end--
        }
    }b=pl(b);if(fl(a.Y,b))b=j;if(e||b){
        if(e&&b&&Math.max(e.start,b.start)<=Math.min(e.end,b.end)){
            e=new Ha(Math.min(b.start,e.start),Math.max(b.end,e.end));Bp(a.a,e,Fu);a.b.addRange(Fu,e.start,e.end)
        }else{
            if(e){
                Bp(a.a,e,Fu);a.b.addRange(Fu,e.start,e.end)
            }if(b){
                Bp(a.a,b,Fu);a.b.addRange(Fu,b.start,b.end)
            }
        }a.Y.a.a&&Ap(a.b)
    }
}o.W7=function(a){
    Uqa(this,this.Y.Ha(),a.k,a.F)
};
function Vqa(a,b,c,d,e,g){
    if(g&&Hu(g)<=0)return j;c=pl(c);if(!c)return j;if(fl(a.Y,c))return j;if(b=oaa(b,c))return new Iu(b,a.Y,d,e,g);return j
}o.Ln=function(a){
    return this.tP(a)||[]
};var Wqa="self",Xqa="#aaa";o.tP=function(a){
    var b=[],c=this.k.Bm(),d;for(d in c){
        var e=c[d];(e=Vqa(this,a,e.Ha(),d,e.Sf(),e.k))&&b.push(e)
    }(e=Vqa(this,a,this.Y.Ha(),Wqa,this.xb?undefined:Xqa))&&b.push(e);if(b.length==0)return j;b.sort(Rn);return b
};
o.A=function(){
    Gu.z.A.call(this);y(this.N);delete this.N;delete this.Y;delete this.a;delete this.k
};function Iu(a,b,c,d,e){
    Qn.call(this,a,Tqa);this.Y=b;this.b=c;this.o=d||j;this.F=e||0;this.k=[]
}t(Iu,Qn);var Yqa=(vc?0.27:0.15)/12E4;function Zqa(a,b,c){
    b=new Wp(b,Yqa*c,0,c);a.k.push(b);Lp(b)
}o=Iu.prototype;o.K=function(){
    return{
        QK:this.b,
        color:this.o,
        timestamp:this.F
    }
};
o.Vn=function(a){
    var b=this.$h();if(!(!a||!b||this.b!=a.QK)){
        var c=this.F,d;if(c=a.timestamp>0&&c>0&&c<a.timestamp){
            this.F=d=a.timestamp;for(var e=0;e<this.k.length;e++){
                var g=this.k[e];g.Bg||y(g)
            }this.k.length=0
        }g=this.o!=a.color;a=(this.o=a.color)||z;if(c||g){
            d=Hu(d);e=0;for(var h;h=b[e];e++){
                if(g){
                    h.style.backgroundColor=a;h.style.borderTopColor=a;h.style.borderBottomColor=a
                }c&&Zqa(this,h,d)
            }
        }
    }
};o.V7=function(){
    return this.b
};
o.Yw=function(){
    var a=Iu.z.Yw.call(this);if(!a||a.length==0)return a;a=Mb(a);var b=this.a.end;if(fh(this.Y.b,b)||bh(this.Y.b,b)==hh)if(this.Y.Ka(Jh,b).Ic()){
        b=a.length-1;a[b]=new Sn(a[b].Cc(),a[b].bc(),a[b].Ed()+7,a[b].Pb())
    }else a[0]=new Sn(a[0].Cc()-7,a[0].bc(),a[0].Ed()+7,a[0].Pb());for(b=0;b<a.length;b++)a[b]=new Sn(a[b].Cc(),a[b].bc(),a[b].Ed(),a[b].Pb()-2);return a
};o.WI=function(a){
    if(a.V7){
        var b=this.b,c=a.b;if(b<c)return-1;else if(b>c)return 1
    }return Iu.z.WI.call(this,a)
};
var Ju="background-color:",$qa=";border-top-color:",ara=";border-bottom-color:";o.WA=function(a){
    a=Iu.z.WA.call(this,a);var b=this.o;if(b)a.style.cssText=nb(Ju,b,$qa,b,ara,b,cj);b=this.F;b>0&&Zqa(this,a,Hu(b));return a
};o.A=function(){
    Iu.z.A.call(this);delete this.Y;delete this.k
};function Ku(a){
    this.a=yh;this.update(a||{})
}t(Ku,wh);var Lu="cell_bgc",Mu="cell_pb",Nu="cell_pl",Ou="cell_pr",Pu="cell_pt",Qu="cell_va",bra={
    BU:Lu,
    ada:Mu,
    bda:Nu,
    cda:Ou,
    dda:Pu,
    rX:Qu
};o=Ku.prototype;o.DC=z;o.dn=5;o.Zt=5;o.$t=5;o.bu=5;o.Zx=2;o.ft=function(){
    return this.DC
};o.Nm=function(){
    return this.Zx
};o.fh=function(){
    return[Mg]
};o.Ef=function(){
    return i
};
o.Kb=function(a,b){
    switch(a){
        case Lu:this.DC=b;break;case Pu:this.dn=b;break;case Mu:this.Zt=b;break;case Nu:this.$t=b;break;case Ou:this.bu=b;break;case Qu:this.Zx=b
    }
};o.ia=function(){
    var a={};a.cell_bgc=this.DC;a.cell_pt=this.dn;a.cell_pb=this.Zt;a.cell_pl=this.$t;a.cell_pr=this.bu;a.cell_va=this.Zx;return a
};
o.ea=function(a){
    switch(a){
        case Lu:return this.DC;case Pu:return this.dn;case Mu:return this.Zt;case Nu:return this.$t;case Ou:return this.bu;case Qu:return this.Zx
    }return Ku.z.ea.call(this,a)
};o.Mj=function(){
    return l
};o.lw=function(){
    return l
};o.Me=function(){
    return Ja(bra)
};o.Ba=function(){
    return new Ku(this.ia())
};Zh(function(){
    return new Ku
});function Ru(a){
    this.update(a)
}t(Ru,vh);o=Ru.prototype;o.Sr=1;o.Bv=0;var Su="col_wt",Tu="col_wv";o.Kb=function(a,b){
    switch(a){
        case Su:this.Sr=b;break;case Tu:this.Bv=b
    }
};o.ea=function(a){
    switch(a){
        case Su:return this.Sr;case Tu:return this.Bv
    }return Ru.z.ea.call(this,a)
};o.ce=function(a){
    var b={},c;for(c in a)switch(c){
        case Su:b[c]=this.Sr;break;case Tu:b[c]=this.Bv
    }return b
};o.ia=function(){
    var a={};a.col_wt=this.Sr;a.col_wv=this.Bv;return a
};function cra(a){
    return new Ru(a)
};function Uu(a){
    this.a=Kh;this.update(a||{})
}t(Uu,wh);var Vu="row_mh",dra={
    Tca:Vu
};o=Uu.prototype;o.Zk=0;o.fh=function(){
    return[Lg]
};o.Ef=function(){
    return i
};o.Kb=function(a,b){
    switch(a){
        case Vu:this.Zk=b
    }
};o.ia=function(){
    var a={};a.row_mh=this.Zk;return a
};o.ea=function(a){
    switch(a){
        case Vu:return this.Zk
    }return Uu.z.ea.call(this,a)
};o.Mj=function(){
    return l
};o.lw=function(){
    return l
};o.Me=function(){
    return Ja(dra)
};o.Ba=function(){
    return new Uu(this.ia())
};Zh(function(){
    return new Uu
});function Wu(a){
    this.a=Mh;this.b=new mj(cra);this.update(a||{})
}t(Wu,wh);var Xu="tbls_bc",Yu="tbls_bw",Zu="tbls_cols",era={
    Gba:Xu,
    Hba:Yu,
    Nba:Zu
};o=Wu.prototype;o.pq=qk;o.qq=1;o.fh=function(){
    return[Kg]
};o.Ef=function(){
    return i
};function $u(a){
    return a.b.Oc()
}o.Kb=function(a,b){
    switch(a){
        case Xu:this.pq=b;break;case Yu:this.qq=b;break;case Zu:this.b.update(b)
    }
};o.ia=function(){
    var a={};a.tbls_bc=this.pq;a.tbls_bw=this.qq;a.tbls_cols=this.b.ia();return a
};
o.ea=function(a){
    switch(a){
        case Xu:return this.pq;case Yu:return this.qq;case Zu:return this.b
    }return Wu.z.ea.call(this,a)
};o.vh=function(a){
    switch(a){
        case Zu:return i
    }return l
};o.Mj=function(){
    return l
};o.lw=function(){
    return l
};o.Me=function(){
    return Ja(era)
};o.Ba=function(){
    return new Wu(this.ia())
};Zh(function(){
    return new Wu
});function av(a){
    this.R=a;this.F=[];this.a=[];this.o=[];this.b=[];this.k=[];this.J={}
}t(av,x);o=av.prototype;o.Jw=i;o.eB=i;o.Wp=i;o.Us=0;o.Pn=0;o.Hf=0;o.jg=1;o.WF=j;function bv(a,b){
    a.eB=b;a.Wp=a.Wp||b
}function cv(a,b){
    a.Jw=b;a.Wp=a.Wp||b
}function fra(a){
    a.Jw&&dv(a);for(var b=0,c=0;c<a.Hf;c++)b+=a.a[c];return b
}function ev(a,b){
    a.Jw&&dv(a);return a.a[b]
}function fv(a,b){
    a.Jw&&dv(a);for(var c=0,d=0;d<b;d++)c+=a.a[d];return c
}function gv(a,b){
    a.eB&&hv(a);return a.F[b]
}
function iv(a,b){
    a.eB&&hv(a);for(var c=0,d=0;d<b;d++)c+=a.F[d]+a.jg;return Math.floor(c+a.jg/2)
}function jv(a){
    return iv(a,a.Pn)+Math.ceil(a.jg/2)
}function gra(a,b){
    a.Pn++;bv(a,i);Ib(a.b,b,0,[]);Ib(a.o,b,0,0)
}function hra(a,b){
    a.Pn--;bv(a,i);Kb(a.b,b);Kb(a.o,b)
}function ira(a,b){
    for(var c=[],d=ze.V(),e=0;e<b.length;e++){
        var g=b[e];if(g&&g.Sr!=1)c[e]=Math.max(Le(d,18),Le(d,g.Bv))
    }a.WF=c;cv(a,i)
}function kv(a,b,c){
    if(c!=a.o[b]){
        a.o[b]=c;bv(a,i)
    }
}
function jra(a,b,c,d){
    a.b[b]||(a.b[b]=[]);if(d!=a.b[b][c]){
        a.b[b][c]=d;bv(a,i)
    }
}function hv(a){
    for(var b=[],c=0;c<a.Pn;c++){
        var d=0,e=a.b[c];if(e)for(var g=0;g<e.length;g++)d=Math.max(d,e[g]);b[c]=Math.max(a.o[c]||0,d)
    }for(c=0;c<b.length;c++)if(b[c]!=a.F[c])a.J[c]=c;a.F=b;bv(a,l)
}function dv(a){
    var b=a.WF||[],c=0,d=a.Hf;if(b)for(var e=0;e<b.length;e++){
        var g=b[e];if(q(g)){
            c+=g;d--
        }
    }c=(a.Us-c)/d;c=Math.floor(c);c=Math.max(c,Le(ze.V(),18));for(e=0;e<a.Hf;e++)q(b[e])||(b[e]=c);a.a=b;cv(a,l)
}
o.A=function(){
    av.z.A.call(this);delete this.R;delete this.F;delete this.a;delete this.o;delete this.b;delete this.k;delete this.J;delete this.WF
};function lv(a,b){
    Am.call(this,a);this.o=b;this.k=Le(ze.V(),1);this.b=new cp(a,b-this.k);this.b.yG=kra;this.Na(this.b)
}t(lv,Mm);o=lv.prototype;o.JI=0;o.II=z;o.PC=2;o.hy=qk;o.OC=j;var lra="kix-cellview-inner",mra="kix-cellview",nra="border: ",ora="px solid ";o.L=function(){
    this.b.L();var a=this.P();this.OC=a.L(O,lra,this.b.G());this.wb(a.L(es,{
        "class":mra,
        style:nra+this.k+ora+this.hy
    },this.OC))
};o.dc=function(a){
    this.b.dc(a);mv(this)
};
function pra(a,b){
    var c=ze.V(),d=a.a.K().Ka(yh,b),e=d.ft();if(e!=a.II){
        a.II=e;a.G().style.backgroundColor=e
    }e=d.Nm();if(e!=a.PC){
        a.PC=e;mv(a)
    }fp(a.b,Le(c,d.dn),Le(c,d.bu),Le(c,d.Zt),Le(c,d.$t))
}function qra(a,b){
    if(b!=a.k){
        a.k=b;a.G().style.borderWidth=b+L;dp(a.b,a.o-b)
    }
}o.ft=function(){
    return this.II
};o.Nm=function(){
    return this.PC
};function mv(a){
    var b=a.b;a:{
        var c=a.JI,d=a.b.Te();switch(a.PC){
            case 0:a=c-d;break a;case 1:a=(c-d)/2;break a
        }a=0
    }Bm(b,0,a)
}o.Di=function(a,b,c){
    this.b.Di(a,b,c)
};
o.Gd=function(a,b,c){
    this.b.Gd(a,b,c)
};o.kd=function(){
    return this.b.kd()
};o.Zc=function(a){
    return this.b.Zc(a)
};o.Fb=function(a,b,c){
    var d=this.b;return this.b.Fb(a-d.Cc(),b-d.bc(),c)
};o.wh=function(a,b,c){
    if(a=this.b.wh(a,b,c)){
        a.a.x+=this.b.Cc();a.a.y+=this.b.bc()
    }return a
};o.Dc=function(a,b,c){
    return this.b.Dc(a,b,c)
};o.Nc=function(a){
    return this.b.Nc(a)
};o.A=function(){
    lv.z.A.call(this);delete this.b
};
function kra(a,b){
    switch(bh(a.fa(),b+1)){
        case Mg:case Ng:case Lg:return i;default:return l
    }
};function nv(a,b,c){
    qm.call(this,c);this.a=a;this.R=b
}t(nv,qm);o=nv.prototype;o.Uj=j;o.xf=j;o.Bn=j;o.SP=j;o.Cm=j;o.Ri=j;o.Nw=j;o.Tx=l;o.zR=z;o.hB=j;o.Ls=j;var rra="kix-table-resize-dragger",sra="kix-table-resize-guide";o.L=function(){
    var a=this.P();this.xf=a.L(O,rra);this.xf.style.display=Wi;this.Uj=a.L(O,sra);this.Uj.style.display=Wi;this.wb(a.L(O,undefined,[this.xf,this.Uj]))
};o.ta=function(){
    this.Bn=new Dq(this.xf)
};
o.setActive=function(a){
    if(a){
        this.xf.style.display=z;rm(this).a(this.xf,$p,this.g8).a(this.Bn,Hq,this.e8).a(this.Bn,Kq,this.f8).a(this.Bn,Sp,this.d8)
    }else{
        this.xf.style.display=Wi;rm(this).b(this.xf,$p);rm(this).b(this.Bn,Hq).b(this.Bn,Kq).b(this.Bn,Sp)
    }
};o.g8=function(a){
    a.stopPropagation()
};
o.e8=function(a){
    this.Tx=i;tra(this);var b=Math.floor(this.Cm.left+this.Cm.width/2),c=Math.floor(this.Cm.top+this.Cm.height/2);this.Ls=new nc(a.clientX-b,a.clientY-c);this.hB=new nc(b,c);ura(this,ov(this,b,c,this.Ri,this.Nw));this.Uj.style.display=z;a=this.Cm.Ba();b=this.Ri.a;a.left-=125;a.top-=125;if(b==pn||b==qn){
        a.width=250;a.height+=250
    }else{
        a.width+=250;a.height=250
    }vra(this,a,this.xf.style.cursor)
};o.f8=function(a){
    ura(this,ov(this,a.clientX-this.Ls.x,a.clientY-this.Ls.y,this.Ri,this.Nw))
};
var pv="top",qv="bottom",wra="Cannot create row resize event, bad input.",rv="rowresize",xra="Cannot create column resize event, bad input.",sv="columnresize";
o.d8=function(a){
    var b=this.Ri.a,c=ov(this,a.clientX-this.Ls.x,a.clientY-this.Ls.y,this.Ri,this.Nw),d=new nc(c.left,c.top);if(b==pv||b==qv){
        c=this.hB;b=this.Ri;if(!c||!d||!b){
            this.R.log(Error(wra));b=j
        }else{
            c=d.y-c.y;b=c==0?j:new tv(rv,[b.a==pv?b.Nd-1:b.Nd],j,[c],j)
        }b&&this.dispatchEvent(b)
    }else{
        var e=this.hB;c=this.Ri;b=this.a.Hf;if(!e||!d||!c){
            this.R.log(Error(xra));b=j
        }else{
            d=d.x-e.x;if(d==0)b=j;else{
                var g=[],h=[];if(c.a==qn){
                    e=c.Rd;c=c.Rd+1
                }else{
                    e=c.Rd-1;c=c.Rd
                }if(c<b){
                    g.push(e);h.push(d);g.push(c);
                    h.push(d*-1)
                }else{
                    for(c=0;c<b-1;c++){
                        g.push(c);h.push(0)
                    }g.push(e);h.push(d)
                }b=new tv(sv,j,g,j,h)
            }
        }b&&this.dispatchEvent(b)
    }this.Uj.style.display=Wi;this.Tx=l;yra(this,a.left,a.top,i)
};
function tra(a){
    if(a.Tx){
        var b=a.a,c=a.Ri,d=c.a,e=new Hi(0,0,0,0),g=ze.V();if(d==qn||d==pn){
            g=Le(g,18);c=d==pn?c.Rd-1:c.Rd;e.height=jv(b);e.top=0;e.left+=fv(b,c)+g;if(c==b.Hf-1){
                c=b.Us-fv(b,c)-g;b=ev(b,b.Hf-1)-g;e.width=Math.max(c,b)
            }else e.width=ev(b,c)+ev(b,c+1)-2*g
        }else{
            g=d==pv?c.Nd-1:c.Nd;e.width=fra(b);e.left+=fv(b,0);e.height=Number.MAX_VALUE;e.top=iv(b,g)
        }a.Nw=e
    }
}var zra="Cannot create guide rectangle.";
function ov(a,b,c,d,e){
    if(!e){
        a.R.log(Error(zra));return new Hi(0,0,0,0)
    }a=d.a;d=new Hi(0,0,0,0);if(a==qn||a==pn){
        d.left=b;d.top=e.top;d.width=1;d.height=e.height;if(d.left<e.left)d.left=e.left;else if(d.left>e.left+e.width)d.left=e.left+e.width
    }else{
        d.left=e.left;d.top=c;d.width=e.width;d.height=1;if(d.top<e.top)d.top=e.top;else if(d.top>e.top+e.height)d.top=e.top+e.height
    }d.left=Math.ceil(d.left);d.top=Math.ceil(d.top);return d
}
function ura(a,b){
    a.SP=b;a.Uj.style.top=b.top+L;a.Uj.style.left=b.left+L;a.Uj.style.width=b.width+L;a.Uj.style.height=b.height+L
}var Ara="row-resize",Bra="col-resize";
function yra(a,b,c,d){
    if(d||!a.Tx&&a.a.Pn>0&&a.a.Hf>0){
        for(var e,g=a.a,h=e=0,k=0,m=gv(g,e)+g.jg;m<c&&e<g.Pn-1;){
            k=m;m+=gv(g,++e)+g.jg
        }for(var n=0,p=ev(g,h);p<b&&h<g.Hf-1;){
            n=p;p+=ev(g,++h)
        }a:{
            g=c-k;c=m-c;p=p-b;b=b-n;n=0;n=e==0&&h==0?Math.min(c,p):e==0?Math.min(c,p,b):h==0?Math.min(g,c,p):Math.min(g,c,p,b);switch(n){
                case g:b=pv;break a;case c:b=qv;break a;case b:b=pn;break a;default:b=qn
            }
        }e=new uv(e,h,b);if(!(h=d)){
            h=a.Ri;h=h==e?i:!h||!e?l:h.Nd==e.Nd&&h.Rd==e.Rd&&h.a==e.a;h=!h
        }if(h){
            a.Ri=e;h=e.Nd;
            b=e.Rd;n=e.a;g=a.a;if(p=!g){
                b:{
                    if(!(h<0||b<0||h>=g.Pn||b>=g.Hf))switch(n){
                        case pv:p=h!=0;break b;case qv:case qn:p=i;break b;case pn:p=b!=0;break b
                    }p=l
                }p=!p
            }if(p)h=new Hi(0,0,0,0);else{
                p=new Hi(0,0,0,0);if(n==pv||n==qv){
                    p.width=fra(g);p.height=7;p.top=iv(g,h)-p.height/2;p.left=fv(g,0)
                }if(n==qn||n==pn){
                    p.width=7;p.height=jv(g);p.left=fv(g,b)-p.width/2;p.top=iv(g,0)-g.jg/2
                }switch(n){
                    case qv:p.top+=gv(g,h)+g.jg;break;case qn:p.left+=ev(g,b)
                }p.left=Math.ceil(p.left);p.top=Math.ceil(p.top);h=p
            }a:switch(e.a){
                case pv:case qv:e=
                    Ara;break a;case qn:case pn:e=Bra;break a;default:e=z
            }if(d||h&&sa(e)&&(!Ii(a.Cm,h)||a.zR!=e))vra(a,h,e)
        }
    }
}function vra(a,b,c){
    a.Cm=b;a.zR=c;a.xf.style.top=b.top+L;a.xf.style.left=b.left+L;a.xf.style.width=b.width+L;a.xf.style.height=b.height+L;a.xf.style.cursor=c
}o.A=function(){
    nv.z.A.call(this);delete this.Uj;delete this.xf;delete this.Bn;delete this.SP;delete this.Cm;delete this.Nw;delete this.hB;delete this.Ls;delete this.Ri
};function uv(a,b,c){
    this.Nd=a;this.Rd=b;this.a=c
}
uv.prototype.Ba=function(){
    return new uv(this.Nd,this.Rd,this.a)
};function tv(a,b,c,d,e){
    B.call(this,a);this.rows=b;this.Zg=c;this.M=d;this.J=e
}t(tv,B);function vv(a,b){
    Am.call(this,a);a.F.register(this.ra(),b);a.Fa.register(this,b);this.Q=[];this.b=[];this.k=new av(this.a.R);this.o=j;if(this.a.K().a.b==3){
        this.o=new nv(this.k,this.a.R);this.Na(this.o)
    }this.J=Le(ze.V(),1);this.k.jg=this.J;this.M=new Gm(s(this.o$,this))
}t(vv,Mm);o=vv.prototype;o.aJ=i;o.$I=l;o.fL=j;o.hv=j;o.Zo=j;o.Fw=j;o.AR=qk;o.EB=l;o.hL=l;var Cra="kix-tableview",Dra="margin-left:",Era="kix-tableview-container";
o.L=function(){
    var a=this.P();this.fL=a.L(ds);this.hv=a.L(cs,{
        "class":Cra,
        style:Dra+-this.J,
        direction:en
    },this.fL);this.wb(a.L(O,Era,this.hv));this.o&&this.o.Ma(this.G())
};

o.CR=function(a){
    var b=Ui(this.G());yra(this.o,a.clientX-b.x,a.clientY-b.y)
};var wv="kix-resize-table";o.XP=function(a){
    for(var b={},c=ze.V(),d=[],e=[],g=0;g<a.Zg.length;g++){
        e.push(0);var h=(ev(this.k,a.Zg[g])+a.J[g])/Me(c);d.push(Math.max(h,18))
    }b.rscolI=a.Zg;b.rscolWT=e;b.rscolWV=d;b.tblST=xv(this);yf(H(this.a.b,wv),b)
};
o.kQ=function(a){
    for(var b={},c=ze.V(),d=[],e=[],g=xv(this),h=0;h<a.rows.length;h++){
        var k=yv(this,a.rows[h],0);if(k!=0){
            k+=g-2;d.push(k);k=(gv(this.k,a.rows[h])+a.M[h])/Me(c);e.push(Math.max(k,0))
        }
    }b.rrSI=d;b.rrH=e;yf(H(this.a.b,wv),b)
};function xv(a){
    return sp(a.a.F,a.ra())
}o.xc=function(a){
    zv(this,a)
};var Fra="Should not redraw the table until the visible state is updated.",Gra="Attempted to set cell height with null inner element.",Hra="separate",Ira="collapse";
o.dc=function(a){
    if(this.Zo==j||this.Fw==j)this.a.R.log(Error(Fra));var b=this.a.K(),c=Dl(b,a),d=this.k,e=ep(this.rb.rb);if(e!=d.Us){
        d.Us=e;cv(d,i)
    }d=this.k;b=oia(b,a);if(b!=d.Hf){
        d.Hf=b;cv(d,i)
    }this.a.a.DB(this.h8,this,a,c);a=this.k;a.eB&&hv(a);c=a.J;a.J={};for(var g in c){
        d=c[g];if(b=this.b[d]){
            d=gv(a,d);e=0;for(var h;h=b[e];e++){
                h=h;var k=d;if(h.OC){
                    if(k!=h.JI){
                        h.OC.style.height=k+L;h.JI=k;mv(h)
                    }
                }else h.a.R.log(Error(Gra))
            }
        }
    }this.o&&this.o.Tx&&tra(this.o);if(this.EB){
        this.EB=l;this.hv.style.borderCollapse=
        Hra;if(g=this.hv)zs=g.offsetHeight;this.hv.style.borderCollapse=Ira
    }if(this.k.Wp){
        this.dispatchEvent(wf);this.k.Wp=l
    }
};var Jra="TableView should never commit its start marker.";
o.h8=function(a,b,c,d){
    if(a>d)return i;if(Cl(this.a.K(),a)!=c){
        Av(this,c,a);Im(this.M,Bv(this,c,a));return l
    }switch(b){
        case gj:a:{
            b=this.a.a;switch(bh(this.a.K().fa(),a)){
                case Kg:this.a.R.log(Error(Jra));this.aJ=i;zv(this,c);Uo(b,a,1);break a;case Ng:this.$I=i;Uo(b,a,1);break a;case Lg:d=this.a.K();b=Bv(this,c,a);gra(this.k,b);d=d.Ka(Kh,a);kv(this.k,b,Le(ze.V(),d.Zk));d=this.P();var e=d.L(Si),g=this.Q[b];g?d.Rx(e,g):d.appendChild(this.fL,e);Ib(this.b,b,0,[]);Ib(this.Q,b,0,e);Uo(this.a.a,a,1);break;
                case Mg:var h=this.a.K();b=Bv(this,c,a-1);d=Cv(this,c,a-1,b)+1;e=new lv(this.a,ev(this.k,d));this.Na(e);(g=this.b[b][d])?e.kK(g.G()):e.Ma(this.Q[b]);Ib(this.b[b],d,0,e);g=h.Ka(Mh,c);pra(e,a);h=h.Ka(yh,a);Kra(this,b,d,h);h=g.pq;if(h!=e.hy)e.G().style.borderColor=e.hy=h;qra(e,Le(ze.V(),g.qq));sa(this.Fw)&&sa(this.Zo)&&this.Zo&&e.Gd(a+1,this.Fw-e.G().offsetTop,this.Zo);Uo(this.a.a,a,1);jra(this.k,b,d,e.b.Te());if(Ec)this.EB=i;break;default:Av(this,c,a)
            }Im(this.M,Bv(this,c,a))
        }break;case fj:a:{
            b=this.a.a;
            switch(Qo(this.a.a,a).charAt(0)){
                case Kg:this.aJ=l;Ro(b,a,-1);break a;case Ng:this.$I=l;Ro(b,a,-1);break a;case Lg:b=bh(this.a.K().fa(),a)==Ng?this.Q.length-1:Bv(this,c,a);d=1;e=this.b[b];for(g=0;h=e[g];g++){
                    d+=h.kd()+1;this.removeChild(h,i);y(h)
                }Kb(this.b,b);e=this.Q[b];this.P().Ap(e);Kb(this.Q,b);hra(this.k,b);Ro(this.a.a,a,-d);break;case Mg:b=bh(this.a.K().fa(),a);if(b==Ng){
                    b=this.b.length-1;d=this.b[b].length-1
                }else if(b==Lg){
                    b=Bv(this,c,a);d=this.b[b].length-1
                }else{
                    b=Bv(this,c,a);d=Cv(this,c,
                        a,b)
                }e=this.b[b][d];g=e.kd()+1;this.removeChild(e,i);y(e);Kb(this.b[b],d);Ro(this.a.a,a,-g);break;default:Av(this,c,a)
            }Im(this.M,Bv(this,c,a))
        }break;default:a:{
            b=this.a.a;switch(bh(this.a.K().fa(),a)){
                case Kg:zv(this,c);Uo(b,a,0);break a;case Ng:Uo(b,a,0);break a;case Lg:b=this.a.K().Ka(Kh,a);kv(this.k,Bv(this,c,a),Le(ze.V(),b.Zk));Uo(this.a.a,a,0);break;case Mg:e=this.a.K();b=Bv(this,c,a);d=Cv(this,c,a,b);pra(this.b[b][d],a);e=e.Ka(yh,a);Kra(this,b,d,e);Uo(this.a.a,a,0);break;default:Av(this,c,a)
            }Im(this.M,
                Bv(this,c,a))
        }
    }return l
};var Lra="Provider asked for index past the end of the rows element array.",Mra="Requested row index past the end of the rows element array.";o.o$=function(a,b){
    if(a<0)return 0;if(a>=this.b.length){
        this.a.R.log(Error(Lra));return b+1
    }var c;if(a>=this.b.length||a<0){
        this.a.R.log(Error(Mra));c=0
    }else{
        c=0;var d=this.b[a];if(d){
            c++;for(var e=0,g;g=d[e];e++)c+=g.kd()+1
        }c=c
    }return b+c
};function Bv(a,b,c){
    return a.M.indexOf(c-b-1)
}
function Cv(a,b,c,d){
    var e=a.b[d];a=a.M.ea(d)+b+1;b=-1;if(a==c)return b;for(var g=d=0,h;h=e[g];g++){
        b++;d+=h.kd()+1;if(c<=d+a)break
    }return b
}function zv(a,b){
    var c=a.a.K().Ka(Mh,b);ira(a.k,$u(c));var d=Le(ze.V(),c.qq);c=c.pq;if(d!=a.J){
        a.hv.style.marginLeft=-Math.floor(d/2)+L;if(Ec)a.EB=i
    }if(d!=a.J||c!=a.AR)for(var e=0,g;g=a.b[e];e++)for(var h=0,k;k=g[h];h++){
        if(c!=k.hy)k.G().style.borderColor=k.hy=c;qra(k,d)
    }a.J=d;a.k.jg=a.J;a.AR=c
}
function Kra(a,b,c,d){
    var e=ze.V();d=new Gi(Le(e,d.dn),Le(e,d.bu),Le(e,d.Zt),Le(e,d.$t));a=a.k;a.k[b]||(a.k[b]=[]);if(!a.k[b][c]||!Sga(a.k[b][c],d)){
        a.k[b][c]=d;a.Wp=i
    }
}function Av(a,b,c){
    var d=Bv(a,b,c-1);c=Cv(a,b,c-1,d);b=b+yv(a,d,c);var e=a.b[d][c],g=ev(a.k,c);if(g!=e.o){
        dp(e.b,g-e.k);e.o=g
    }e.dc(b);jra(a.k,d,c,e.b.Te())
}o.Di=function(a,b,c){
    for(var d=1,e=0,g;g=this.b[e];e++){
        d++;for(var h=0,k;k=g[h];h++){
            d++;k.Di(a+d,b,c);d+=k.kd()
        }
    }
};
o.Gd=function(a,b,c){
    if(this.o){
        var d,e=jv(this.k);d=b*-1;e=d+e;if((d=d>0&&d<c||e>0&&e<c||d<=0&&e>=c)&&!this.hL){
            this.o.setActive(i);Cm(this).a(this.G(),Fq,this.CR).a(this.o,sv,this.XP).a(this.o,rv,this.kQ)
        }else if(!d&&this.hL){
            this.o.setActive(l);Cm(this).b(this.G(),Fq,this.CR).b(this.o,sv,this.XP).b(this.o,rv,this.kQ)
        }this.hL=d
    }this.Fw=b;this.Zo=c;b=1;for(c=0;d=this.b[c];c++){
        b++;e=0;for(var g;g=d[e];e++){
            b++;this.Zo&&g.Gd(a+b,this.Fw-g.G().offsetTop,this.Zo);b+=g.kd()
        }
    }
};
o.kd=function(){
    return this.M.ea(this.b.length)+(this.aJ?1:0)+(this.$I?1:0)
};function Dv(a,b){
    return b>0&&b<a.kd()&&Cv(a,0,b,Bv(a,0,b))!=-1
}o.Zc=function(a){
    var b=qp(this.a.K(),a);if(!Dv(this,b))return j;var c=Bv(this,0,b);b=Cv(this,0,b,c);return this.b[c][b].Zc(a.shift(-yv(this,c,b)))
};
o.Fb=function(a,b){
    for(var c=1,d=this.J,e=0,g;g=this.b[e];e++){
        c++;for(var h=e==this.b.length-1,k=e==0,m=gv(this.k,e),n=Math.ceil(this.J/2),p=0,r;r=g[p];p++){
            c++;var u=p==0,w=p==g.length-1,v=ev(this.k,p);if((k||d<=b)&&(u||n<=a)&&(h||d+m>=b)&&(w||n+v>=a))if(u=r.Fb(a-n,b-d,i))return u.shift(c);n+=v;c+=r.kd()
        }d+=m+this.J
    }return new J(c,i)
};
o.wh=function(a,b){
    var c=qp(this.a.K(),a);if(!Dv(this,c-b))return j;var d=Bv(this,b,c);c=Cv(this,b,c,d);var e=yv(this,d,c)+b;if(e=this.b[d][c].wh(a,e)){
        for(var g=Math.ceil(this.J/2),h=0;h<c;h++)g+=ev(this.k,h);c=this.J;for(h=0;h<d;h++)c+=gv(this.k,h)+this.J;e.a.x+=g;e.a.y+=c
    }return e
};
o.Dc=function(a,b,c){
    var d=a.a;if(!Dv(this,d))return j;var e=Bv(this,0,d),g=Cv(this,0,d,e),h=yv(this,e,g),k=this.b[e][g];d=k.G().offsetLeft;if(a=k.Dc(a.shift(-h),b,c-d))return a.shift(h);a=e+(b?-1:1);e=this.b[a]&&this.b[a][g];if(!e)return j;b=b?Number.MAX_VALUE:0;g=yv(this,a,g);return e.Fb(c-d,b,i).shift(g)
};o.Nc=function(a){
    var b=qp(this.a.K(),a);if(!Dv(this,b))return j;var c=Bv(this,0,b),d=Cv(this,0,b,c);b=yv(this,c,d);if(a=this.b[c][d].Nc(a.shift(-b))){
        a.start+=b;a.end+=b
    }return a
};var Nra="Row/column index is out of table's range.";
function yv(a,b,c){
    if(a.b.length<=b||a.b[b].length<=c){
        a.a.R.log(Error(Nra));return 0
    }var d=a.M.ea(b)+3;a=a.b[b];for(b=0;b<c;b++)d+=a[b].kd()+1;return d
}o.A=function(){
    vv.z.A.call(this);delete this.b;y(this.k);delete this.k;delete this.o
};mp.set(Kg,function(a,b){
    return new vv(a,b)
});function Ev(a,b,c,d,e,g){
    Am.call(this,a);this.jb=b;this.Qa=this.ha=b=c.b;this.Ia=c;this.eb=d;this.b=[];d=eo(a);this.M=e;this.k=new As(a,this.M,a.K().Ha(),Te(d)?wk:undefined,!Te(d),l);this.J={};e=this.Q=new Gu(a.K(),a.k,new bi,a.k);ko(a.k,Fu)[0]=e;this.Lc=g;this.o=new Is;Ora(this,b,c,this.k)
}t(Ev,Am);var Pra=rh(th(),"enable_anonymous_photo_creation"),Qra=Number(mf(window.location.href,"redrawTimeout"));o=Ev.prototype;o.DI=l;o.Ni=j;o.BI=j;o.AG=j;o.Qc=j;o.Ns=j;o.nB=j;o.IG=j;o.JD=0;o.VJ=0;o.lB=j;
o.kB=j;o.mB=j;o.ff=j;o.nj=j;o.Bq=j;o.rr=j;o.Vv=l;o.xD=l;o.Px=l;o.Ul=j;o.Qr=j;o.fG=j;o.LK=l;function Ora(a,b,c,d){
    var e=a.a,g=eo(e);a.Qa=a.ha=b;a.Ia=c;a.b=[];g.a?Fv(a,new lu(e)):Fv(a,a.Ia);g.Fa&&Fv(a,new pt(e));g.M&&Fv(a,new tq(e));a.k=d;a.Na(a.k)
}function Fv(a,b){
    a.b.push(b);a.Na(b);if(a.Qc&&a.qb){
        b.Ma(a.Qc);Gv(a)
    }
}function Rra(a){
    a.Qc.style.overflowY=a.LK?Xi:Oe
}var Sra="Should not create the dom before the appview is initialized.",Hv="kix-appview",Tra="kix-appview-editor-container",Ura="kix-appview-editor";
o.L=function(){
    this.DI||this.a.R.log(Error(Sra));var a=this.P();a=a.L(O,Hv,this.Ns=a.L(O,Tra,this.Qc=a.L(O,Ura)));Rra(this);this.wb(a);Vra(this)
};var Wra="Should not decorate before the appview is initialized.";o.Hg=function(a){
    this.DI||this.a.R.log(Error(Wra));return Tc(a,Hv)
};o.Mb=function(a){
    Ev.z.Mb.call(this,a);this.P();this.Ns=nd(a.lastChild,l);this.Qc=nd(this.Ns.lastChild,l);Rra(this);Vra(this)
};var Iv="mutation",Jv="viewdecorate";
o.ta=function(){
    Ev.z.ta.call(this);this.G().dir=en;for(var a=Cm(this),b=this.a.R,c=this.Qc,d=0,e;e=this.b[d];d++)e.Ma(c);d=this.a.K();Fo(this.a.a,0,ro(d)+1);this.dc();this.k.Ma(c);a.a(this.a.k,Hpa,this.K3).a(d,vp,aq(b,this.V6,this)).a(d,Iv,aq(b,this.lR,this)).a(d,mq,aq(b,this.CI,this)).a(this.a.a,Bla,aq(b,this.CI,this)).a(this.M,ci,this.W6);y(this.o);this.o=new Ks(this.Qc,this.a.R,s(this.uK,this));(c=this.a.J)&&a.a(c,Iv,aq(b,this.lR,this)).a(c,mq,aq(b,this.CI,this));(c=this.a.M)&&a.a(c,wf,aq(b,this.z5,
        this));if(this.Lc){
        a.a(this.Lc,Ll,aq(b,this.Ld,this));this.Ld()
    }if(em(dm.V(),tp).pc())if(!this.Vv){
        this.Vv=i;Kv(this)
    }this.uK();this.dispatchEvent(new B(Jv))
};o.xc=function(a){
    this.LK=a;this.DI=i
};function Vra(a){
    jm(dm.V(),tp,s(a.X6,a),a,undefined,undefined,i)
}var Lv="kix-find";
o.X6=function(){
    var a=eo(this.a),b=a.b;if((b==3||b==2)&&this.qb)if(!this.Vv){
        this.Vv=i;Kv(this)
    }b=bm(em(dm.V(),tp));if(a.qA)this.BI=b.$Z()(this.a,this);this.eb&&Xra(this);var c=this.a.K();if(H(this.a.b,Lv)&&a.sA)this.IG=new (b.o_())(c,this.a.b,this.a.k,this.M);if(a.o)this.AG=b.k_()(c,this.a.k);if(te){
        y(this.o);this.o=new (b.r_())(this.Ns,this.Qc,this.a.R,s(this.EI,this))
    }(this.Qr=b.c_()(this,c,this.P()))&&this.xD&&this.Qr.b()
};var Mv="visibility";
function Xra(a){
    var b=bm(em(dm.V(),tp));if(b&&a.G()){
        var c=a.P();a.Ni=b.a_()(a.a,a.M);a.Na(a.Ni);wm(a.Ni,c.hh(a.G()));Cm(a).a(a.Ni,Mv,aq(a.a.R,a.Ld,a));a.Ni.Ta()||a.Ld()
    }
}o.W6=function(a){
    var b=a.state;b=(a=b==3)||b==2;this.setActive(b);this.k.setActive(b);if(b&&this.ff){
        var c=this.ff;c.b>0&&c.setActive(l);c.b=0
    }b&&Nv(this);this.Q.setActive(a);a&&Yra(this)
};function Yra(a){
    Te(eo(a.a))&&!Es(a.a.K().Ha())&&a.Qc.focus()
}function Ov(a,b){
    for(var c=0,d;d=a.b[c];c++)if(d=d.Zc(b))return d;return j
}
function Pv(a,b){
    for(var c=0,d;d=a.b[c];c++)if(d=d.MG(b))return d;return j
}o.Fb=function(a,b,c){
    var d=this.o;b+=d.Gi;a+=d.bE;a:{
        a=a;b=b;d=0;for(var e;e=this.b[d];d++){
            var g=a-e.Cc(),h=b-e.bc();if(!(d==0&&eo(this.a).a))if(e.HB(g,h)){
                c=e.Fb(g,h,e==this.Ia?c:i);break a
            }
        }if(eo(this.a).a){
            e=this.b[0];g=a-e.Cc();h=b-e.bc();c=e.Fb(g,h,c)
        }else c=j
    }return c
};var Zra="Unable to find old position for entity: ";
function $ra(a,b,c,d){
    if(eo(a.a).a){
        a=a.b[0];var e,g=a.ey(new mm(b),i);if(e=g?g.a:j){
            g=e.x+c;d=e.y+d;e=nu(a);c=d/e|0;b=a.a.o.a[b].Qg();b=a.b.Lm(0,c,g,d-c*e,b)
        }else{
            a.a.R.log(Error(Zra+b));b=j
        }
    }else{
        g=a.Qa;a=g.a.K();var h=Rs(a),k=g.a.o.a;e=k[b];var m=e.Qg(),n=e.Cc(),p=e.bc();e=oi(h);c=e+Math.max(n+c,0);n=g.J-pi(h)-m.width;if(c>n)c=Math.max(n,e);n=g.o.ea(0);b=Math.max(np(g,k[b].wq)+p+d,n);d=g.Te()-g.bc()-ni(h)-m.height;if(b>d)b=Math.max(d,0);if(d=g.Fb(c,b,i))if((h=g.b[pp(g,d)]||j)&&h.W()!=0)b=j;else{
            d=
            Yg(a.fa(),qp(a,d));e=c-e;c=g.k.indexOf(d-1);b=b-g.o.ea(c);d=ch(a.fa(),d);b=new qla(d,e,b)
        }else b=j
    }return b
}function Nv(a){
    for(var b in a.J)Qv(a,a.J[b]);Qv(a,a.k);if(!eo(a.a).a){
        b=a.a.K();if(b=Pv(a,qp(b,b.Ha().Ua())))a.ha=b
    }
}function Qv(a,b,c,d){
    var e=c||b.Ha().Ua();if(e){
        e=asa(a,e);if(a.Px||e)b.dc(e,c,d)
    }
}
function bsa(a){
    var b=a.a.K(),c=Rv(b.Ha()),d=a.Bq,e=gia(b),g=c.W()==0;if(eo(a.a).b==3&&g&&e){
        if(!d){
            d=a.Bq=new vt(a.a);a.Na(d);d.Ma(a.Qc)
        }g=d;g.$k=e;Fpa(g);e=new J(ql(b.k,Hh,c.a));b=d;if(c=Ov(a,e)){
            a=qq(a,e);hq(b,a.x,a.y+c.Th)
        }d.Z(i)
    }else d&&d.Z(l)
}
function csa(a){
    var b=a.a;if(eo(b).b==3){
        var c=a.a.K(),d=a.rr,e=c.Ha(),g=e.Ua();if(e=g.W()==0?fl(c,pl(e)):Xha(c,g)){
            g=g;if(e.W()==Yi)g=new J(Wo(c,e.ra()));if(!d){
                d=a.rr=new Du(b);a.Na(d);d.Ma(a.Qc)
            }if(a=qq(a,g)){
                d=d;d.YI=e;d.Z(i);var h=e.a;b=xi(h);c=yi(h);g=j;h=h.W();if(h==2){
                    Eqa(d.b.b,e);g=d.b;d.k.Z(l)
                }else if(h==0){
                    Eqa(d.k.b,e);g=d.k;d.b.Z(l)
                }g.Z(i);hq(g,a.x+(b/2-g.G().offsetWidth/2),a.y+c);Pqa(d.o,new Hi(a.x,a.y,b,c))
            }
        }else d&&d.Z(l)
    }
}
o.scrollIntoView=function(a,b){
    var c=l;if(a.W()==0){
        var d=qq(this,a);if(d){
            var e=this.o,g=e.Gi,h=Pe(ze.V()),k=Sv(this)-e.lP(),m=g+k,n=Ov(this,a);d=d.y+n.zs;d+=Te(eo(this.a))?10:5;var p=d+n.Th+5;if(this.nB==j)this.nB=this.Qc.scrollWidth;if(this.nB+h>Tv(this))p+=h;n=n.Pb(0)>k;if(!(n&&d<m&&p>g)){
                if(p>m&&!b){
                    g=p-k;c=i;e.Gi=g;e.yz(g)
                }else if(d<g||b){
                    d=Math.min(d,Uv(this)-k+h);c=i;g=d;e.Gi=g;e.yz(g)
                }A&&c&&this.uK()
            }
        }
    }
};function qq(a,b){
    var c=asa(a,b,i);return c?c.a:j
}
function asa(a,b,c){
    for(var d=0,e;e=a.b[d];d++){
        var g=e.ey(b,c);if(g){
            g.a.x+=e.Cc();g.a.y+=e.bc();return g
        }
    }return j
}function Vv(a,b){
    var c=Wv(a);c.setActive(i);Qv(a,c,b);a.scrollIntoView(b)
}function Wv(a){
    if(!a.ff){
        var b=new Xs(a.a,a.M);a.Na(b);b.Ma(a.Qc);a.ff=b
    }return a.ff
}function Tv(a){
    if(a.lB==j)a.lB=a.Qc.offsetWidth;return a.lB
}function Sv(a){
    if(a.kB==j)a.kB=a.Qc.offsetHeight;return a.kB
}function Uv(a){
    if(a.mB==j)a.mB=a.Qc.scrollHeight;return a.mB
}
o.Nc=function(a){
    if(a.W()!=0)return j;for(var b=0,c;c=this.b[b];b++)if(c=c.Nc(a))return c;return j
};function Xv(a){
    return a.Nc(a.a.K().Ha().Ua())
}function Yv(a,b){
    var c;if(b)a:{
        c=0;for(var d;d=a.b[c];c++)if(d=d.ey(b,i)){
            c=d.a.x;break a
        }c=0
    }else c=j;a.fG=c
}o.Dc=function(a,b){
    sa(this.fG)||Yv(this,a);for(var c=0,d;d=this.b[c];c++)if(d=d.Dc(a,b,this.fG))return d;return j
};function dsa(a,b){
    var c=a.o.Gi;return b.y>=c&&b.y<=c+Sv(a)
}
o.K3=function(a){
    var b=a.key;a=a.b||new Ha(1,ro(this.a.K()));for(var c=0,d;d=this.b[c];c++)d.LC(a,b)
};o.V6=function(a){
    var b=this.a.K(),c=dl(b);this.dc(new tu(c));if(!eo(this.a).a){
        c=Pv(this,c);if(!c)return;this.ha=c
    }if(!a.o){
        Nv(this);Kv(this)
    }a.b&&!a.Q&&this.scrollIntoView(b.Ha().Ua());Yra(this)
};
var Zv="ds",$v="is",aw="ae",esa="An add entity event was fired for an entity that doesn't exist: ",bw="ue",fsa="An update entity event was fired for an entity that doesn't exist.",cw="de",dw="kix-overlay-bookmark",ew="kix-overlay-bookmark-selection",gsa="A delete entity event was fired for an entity that doesn't exist.",fw="te",hsa="A tether entity event was fired for an entity that doesn't exist: ",gw="as",hw="rvrt",iw="rplc",isa="#4cb052";
o.lR=function(a){
    switch(a.zc.W()){
        case Zv:jsa(this,a.zc,a.b);break;case $v:a=a.zc;var b=a.a;a=a.fa();var c=this.a.K();if(a.length!=0){
            Fo(this.a.a,b,a.length);var d=kh([Xa]);if(d&&d.test(a)){
                var e,g;for(d=kh([Xa]);g=d.exec(a);)if(g=jw(c,b+g.index)){
                    e||(e=new cc);dc(e,g)
                }e&&kw(this,e)
            }
        }break;case aw:e=a.zc.ra();if(b=this.a.K().pb(e))switch(b.W()){
            case vu:b=this.a.o;a=this.a;if(a=qpa(a,a.K().pb(e).a,i))b.a[e]=a;break;case Yi:b=this.a.o;a=this.a;if(a=qpa(a,a.K().pb(e).a,l))b.k[e]=a
        }else this.a.R.log(Error(esa+
            e));break;case bw:b=a.zc.ra();if(a=this.a.K().pb(b)){
            e=this.a.K();switch(a.W()){
                case vu:if(a=this.a.o.a[b]){
                    a.ou();ct(a,l);c=a.a.K().pb(b);Bm(a,Le(ze.V(),c.Eu),Le(ze.V(),c.Fu))
                }lw(this,Wo(e,b));break;case Yi:e=Wo(e,b);mw(this,e,e);break;case Ih:a=new cc;b=nw(e,b);for(c=0;c<b.length;c++)gc(a,Yg(e.fa(),b[c]));kw(this,a)
            }
        }else this.a.R.log(Error(fsa));break;case cw:b=a.b;a=a.zc.ra();if(e=this.a.K().pb(a)){
            b=b.k;switch(e.W()){
                case vu:c=this.a.o;if(d=c.a[a]){
                    ow(c,a);delete c.a[a];y(d)
                }lw(this,b);break;
                case Yi:c=this.a.o;if(d=c.k[a]){
                    delete c.k[a];y(d)
                }break;case Bi:if(b>0)if(eo(this.a).a){
                    a=this.a.k;a.addRange(dw,b,b);a.addRange(ew,b,b);Ap(a)
                }else{
                    a=new Ha(b,b);Bp(this.a.k,a,dw);Bp(this.a.k,a,ew)
                }
            }b>=0&&Ila(this.a.a,b,e)
        }else this.a.R.log(Error(gsa));break;case fw:b=a.zc;a=a.b;c=b.ra();if(e=this.a.K().pb(c)){
            switch(e.W()){
                case vu:ow(this.a.o,c);lw(this,b.o);lw(this,a.b);break;case Bi:d=a.b;c=this.a.k;if(d>0)if(eo(this.a).a){
                    c.addRange(dw,d,d);c.addRange(ew,d,d)
                }else{
                    d=new Ha(d,d);Bp(c,d,dw);Bp(c,
                        d,ew)
                }b=b.o;if(eo(this.a).a){
                    c.addRange(dw,b,b);c.addRange(ew,b,b);Ap(c)
                }else{
                    d=new Ha(b,b);Bp(c,d,dw);Bp(c,d,ew)
                }
            }b=a.b;b>=0&&Ila(this.a.a,b,e)
        }else this.a.R.log(Error(hsa+c));break;case gw:ksa(this,a.zc,a.b);break;case hw:case iw:this.Vb();this.removeChild(this.k);y(this.k);if(this.ff){
            this.removeChild(this.ff);y(this.ff);this.ff=j
        }if(this.Bq){
            this.removeChild(this.Bq);y(this.Bq);this.Bq=j
        }if(this.rr){
            this.removeChild(this.rr);y(this.rr);this.rr=j
        }e=this.a;b=eo(e);if(this.Ni){
            this.removeChild(this.Ni);
            y(this.Ni);Xra(this)
        }for(a=0;c=this.b[a];a++){
            this.removeChild(c);y(c)
        }a=Vs(e);c=a.b;b=new As(e,this.M,e.K().Ha(),Te(b)?isa:undefined,!Te(b),l);Ora(this,c,a,b);this.J={};e.a.clear();this.ta();b.setActive(this.xb)
    }
};var lsa="Should not async redraw once initial redraw is done.";function msa(a,b){
    if(b){
        a.Px&&a.a.R.log(Error(lsa));if(!a.Ul){
            a.Ul=new Wf(Qra||200);Cm(a).a(a.Ul,Yf,function(){
                this.dc(new su)
            })
        }a.Ul.start()
    }else{
        a.Ul&&a.Ul.stop();if(a.xD)a.Px=i
    }
}
o.dc=function(a){
    this.mB=j;a=eo(this.a).eL?a||(this.Px?qu.V():ru.V()):j;if(eo(this.a).a){
        for(var b=l,c=0,d;d=this.b[c];c++)b=d.dc(a||qu.V())||b;a&&msa(this,b)
    }else{
        b=this.a.a;if(a)b.bL=a;b.DB(this.C$,this);if(a){
            b.Zaa=0;b.vL=0;a=!!pw.z.Km.call(b);msa(this,a)
        }
    }this.LK&&this.dispatchEvent(new nsa(this,Uv(this)))
};o.C$=function(){
    for(var a=0,b;b=this.b[a];a++)b.dc(qu.V())
};o.CI=function(){
    this.dc();Nv(this);Kv(this)
};
var qw="kix-paragraph-spacing-before-remove",rw="Remove space before paragraph",osa="Add space before paragraph",sw="label",tw="kix-paragraph-spacing-after-remove",uw="Remove space after paragraph",psa="Add space after paragraph",vw="kix-indent",ww="kix-outdent",xw="kix-add-bullet",yw="kix-add-numbered-bullet",Bw="kix-line-spacing",Cw="kix-heading",Dw="kix-list",Ew="kix-delete-column",Fw="kix-delete-row",Gw="kix-delete-table",Hw="kix-insert-column-left",Iw="kix-insert-column-right",Jw="kix-insert-row-above",
Kw="kix-insert-row-below",Lw="kix-apply-table-style",Mw="kix-table-dialog",Nw="kix-insert-image",Ow="kix-insert-image-dialog",Pw="kix-insert-drawing",Qw="insert-table-menu",Rw="kix-insert-table-of-contents",Sw="kix-insert-special-characters";
function Kv(a){
    var b=a.a.K(),c=a.a.b,d=uo(b,Jh,b.Ha().Ua()),e=H(c,qw);if(e){
        var g,h;if(d.Gz>0){
            g=rw;h=0
        }else{
            g=osa;h=10
        }e.setProperty(sw,g);e.setProperty(vf,h)
    }if(e=H(c,tw)){
        if(d.dv>0){
            g=uw;h=0
        }else{
            g=psa;h=10
        }e.setProperty(sw,g);e.setProperty(vf,h)
    }Tf(c,vw,d.Ic());Tf(c,ww,d.Ic());Tf(c,xw,d.Ic());Tf(c,yw,d.Ic());Uf(c,Bw,d.Cy);Uf(c,Cw,d.Ai);d=a.a.K();g=a.a.b;h=j;e=Tw(d);if(Mn(d,e)){
        e=d.Hc(Ih,e[0]);var k=e.Yb;if(k)h=Ck(Hk(d.pb(k),e.Rb))
    }if(sa(h))Uf(g,Dw,h);else for(var m in g.a[Dw])gga(g,Dw,m).Ac(l);
    bsa(a);csa(a);d=a.a;m=eo(d);g=Es(b.Ha());F.Wi.Aa(g);F.Yi.Aa(g&&m.b==3);if(m.b==3){
        if(m.F){
            g=zl(b);Rf(c,Ew,g);Rf(c,Fw,g);Rf(c,Gw,g);Rf(c,Hw,g);Rf(c,Iw,g);Rf(c,Jw,g);Rf(c,Kw,g);Rf(c,Lw,g);Rf(c,Mw,g)
        }g=cl(b);h=$k(b,b.Wa(),Ei);if(m.M||m.Fa||m.Ia){
            if(m.ha){
                e=(!m.ue()||Pra)&&!g;Rf(c,Nw,e);Rf(c,Ow,e)
            }m.Oa&&Rf(c,Pw,!g);Rf(c,Qw,!g)
        }if(m.Mh){
            e=xl(b.fa(),b.Wa(),Hg,Ig);k=gl(b.fa(),b.Wa());Rf(c,Rw,!g&&!e&&!h&&!k);Rf(c,up,e)
        }Rf(c,Bt,b.Ha().Ua().W()==0);m.iB&&Rf(c,Sw,i);if(m.o){
            c=d.b;if(gl(b.fa(),b.Wa())){
                if(m.ha){
                    Rf(c,
                        Nw,l);Rf(c,Ow,l)
                }m.Oa&&Rf(c,Pw,l);m.F&&Rf(c,Qw,l);Rf(c,Bt,l)
            }
        }a.Ni&&eo(a.a).M&&a.Ni.Aa(!g)
    }
}var Uw="kix-language-menu",Vw="kix-overlay-spelling-error";
function ksa(a,b,c){
    var d=a.a.K(),e=b.F;switch(b.b){
        case Af:mw(a,b.wc(),b.wc());li in e&&Gv(a);if(hi in e||ii in e||ji in e||ki in e||mi in e||li in e){
            mw(a,b.wc(),Xo(d,b.wc()));if(eo(a.a).Ia)(b=nq(d,Ei))&&mh(b,function(r,u){
                for(var w=0;w<u.length;w++){
                    var v=Wo(d,u[w]);mw(this,v,Xo(d,v))
                }return l
            },a)
        }break;case Eh:mw(a);break;case Gh:b=eo(a.a);if(b.eb&&!Te(b))if(b=bm(em(dm.V(),tp)))(a=Ww(a.a,b.bx()))&&b.Y_()(d,a.Cb(Uw));break;case Ih:var g=Yg(d.fa(),b.wc());mw(a,g,ch(d.fa(),g));var h=new cc;c=c.Uf().Lb();
            if(Lk in e){
                var k=jw(d,b.wc());k&&dc(h,k);(k=jw(d,b.jf(),undefined,c[0].Rb))&&dc(h,k)
            }if(Kk in e&&qa(e.ls_id))for(var m in c){
                k=c[m];e=k.Yb;for(var n=b.wc()+Number(m),p=k.Rb;p<=8;p++)(k=jw(d,n,e,p))&&dc(h,k)
            }b=g-1;b>al(d,b)&&Xw(d,b)&&mw(a,b,b);h&&kw(a,h);break;case Jh:g=Yg(d.fa(),b.wc());mw(a,g,ch(d.fa(),g));b=g-1;b>al(d,b)&&mw(a,b,b);break;case Mh:b=b.wc();h=Dl(d,b);mw(a,b,h);break;case yh:b=b.wc();h=Hl(d,b);mw(a,b,h);break;case Lh:if(eo(a.a).a){
            a=a.a.k;a.addRange(Vw,b.wc(),b.jf());Ap(a)
        }else Bp(a.a.k,
            new Ha(b.wc(),b.jf()),Vw);break;default:mw(a,b.wc(),b.jf())
    }
}function qsa(a,b,c){
    if(b){
        var d=a.a.K(),e=d.Ka(Jh,d.Wa()),g=Sj(e),h=Tj(e),k=Rj(e);e=a.k.G();var m=Ov(a,d.Ha().Ua()).$a().G(),n=Ti(e),p=Ti(m);e=p.y;h=m.offsetWidth-(g+h);if(g<k){
            m=g+p.x;g=0;k=n.x-m
        }else{
            m=k+p.x;g=g-k;k=n.x-m-g;h+=g
        }d=Gs(d);yoa(c,e,m,h,400,k,g,d.eh)
    }else yoa(c,-1E3,-1E3,1,1);a.k.Ro.style.visibility=b?Xi:sf
}
function jsa(a,b,c){
    var d=b.wc();b=c.a;Gla(a.a.a,d,b);(c=b.Cd.positioned)&&mh(c,function(k,m){
        for(var n=0;n<m.length;n++){
            ow(this.a.o,m[n]);lw(this,d+k)
        }return l
    },a);var e=a.a.K(),g;b=b.Uf(Ih).Lb();var h=l;mh(b,function(k,m){
        h=i;var n=jw(e,d-1,m.ls_id,m.ls_nest);if(n){
            g||(g=new cc);dc(g,n)
        }return l
    });g&&kw(a,g);if(h){
        b=Yg(e.fa(),d)-1;if(b==0)b=1;Xw(e,b)&&mw(a,b,b)
    }
}function lw(a,b){
    b<0||mw(a,Yg(a.a.K().fa(),b),Math.min(b+2E3,ro(a.a.K())))
}
function kw(a,b){
    var c=b.Oc();Sb(c);for(var d=0;d<c.length;d++){
        var e=c[d];mw(a,e,e)
    }
}var rsa="Invalid redraw range: ";function mw(a,b,c){
    b=sa(b)?Math.max(b,0):0;c=sa(c)?Math.max(c,1):ro(a.a.K());b>c?a.a.R.log(Error(rsa+b+jc+c)):Io(a.a.a,b,c)
}o.z5=function(){
    var a=this.a,b=a.M;if(b){
        var c=ze.V();a=a.J;var d=j,e=j;if(a){
            d=s(function(g){
                g.JQ();this.aT()
            },this,a);e=s(a.iR,a)
        }else d=s(this.aT,this);jca(c,b.a,i,d,e)
    }
};o.aT=function(){
    var a=this.a;Io(a.a,1,ro(a.K())-1+1);this.dc();Nv(this);Kv(this)
};
var Yw="csi",ssa="scrolling";o.uK=function(){
    var a=rg.V();Ag(a,Yw,ssa);this.EI();Cg(a,Yw,ssa)
};o.EI=function(){
    var a=this.o;Js(a);var b=Sv(this);if(this.a.a.k.a[0]||this.a.a.a.a[0]||!Ma(this.a.a.uc))if(!eo(this.a).eL||this.Px)return;a=a.Gi;for(var c=0,d;d=this.b[c];c++)d.Gd(a,b)
};var tsa="Invalid type when repositioning anchored plugin.",usa="Invalid type when repositioning relative plugin.";
function Gv(a){
    for(var b={},c=0,d;d=a.b[c];c++){
        var e=d.M;if(e.type==0){
            var g;switch(e.anchor){
                case sq:e=Te(eo(a.a))?10:5;g=(Tv(a)-d.Ed()-Pe(ze.V()))/2;b.main_page=d;break;default:a.a.R.log(Error(tsa));continue
            }hq(d,g,e)
        }
    }for(c=0;d=a.b[c];c++){
        e=d.M;if(e.type==1){
            e=e;if(g=b[e.anchor]){
                switch(e.position){
                    case pn:e=g.Cc()-d.Ed();g=g.bc();break;case qn:e=g.Cc()+g.Ed();g=g.bc();break;default:a.a.R.log(Error(usa));continue
                }hq(d,e,g)
            }
        }
    }Nv(a);bsa(a);csa(a)
}
o.Ld=function(){
    if(this.Lc){
        var a=this.Ns,b=(this.Lc.wo.ob?this.Lc.wo.ob.Ba():j).height;this.JD=Ti(a).y;this.VJ=Ti(a).x;a=Math.max(b-this.JD,0);this.Qc.style.height=a+L;this.kB=a;this.nB=this.lB=j;Gv(this);this.EI()
    }
};
o.A=function(){
    Ev.z.A.call(this);delete this.Qc;delete this.Ns;delete this.ha;delete this.Qa;delete this.Ia;delete this.b;delete this.J;delete this.M;delete this.k;delete this.ff;delete this.Bq;delete this.rr;delete this.Vv;delete this.jb;delete this.Ni;y(this.o);delete this.o;y(this.Q);delete this.Q;y(this.nj);delete this.nj;y(this.BI);delete this.BI;y(this.AG);delete this.AG;y(this.IG);delete this.IG;y(this.Ul);delete this.Ul;y(this.Qr);delete this.Qr
};var vsa="editorHeightChange";
function nsa(a,b){
    B.call(this,vsa,a);this.height=b
}t(nsa,B);function Zw(a,b){
    a&&wsa(this,a,b)
}t(Zw,Vf);o=Zw.prototype;o.ya=j;o.wC=j;o.oI=j;o.xC=j;o.Cn=-1;o.Wk=-1;
var xsa={
    "3":13,
    "12":144,
    "63232":38,
    "63233":40,
    "63234":37,
    "63235":39,
    "63236":112,
    "63237":113,
    "63238":114,
    "63239":115,
    "63240":116,
    "63241":117,
    "63242":118,
    "63243":119,
    "63244":120,
    "63245":121,
    "63246":122,
    "63247":123,
    "63248":44,
    "63272":46,
    "63273":36,
    "63275":35,
    "63276":33,
    "63277":34,
    "63289":144,
    "63302":45
},ysa={
    Up:38,
    Down:40,
    Left:37,
    Right:39,
    Enter:13,
    F1:112,
    F2:113,
    F3:114,
    F4:115,
    F5:116,
    F6:117,
    F7:118,
    F8:119,
    F9:120,
    F10:121,
    F11:122,
    F12:123,
    "U+007F":46,
    Home:36,
    End:35,
    PageUp:33,
    PageDown:34,
    Insert:45
},zsa={
    61:187,
    59:186
},Asa=A||Fc&&Nc(Bq);o=Zw.prototype;o.j0=function(a){
    if(Fc&&(this.Cn==17&&!a.ctrlKey||this.Cn==18&&!a.Fg))this.Wk=this.Cn=-1;if(Asa&&!ana(a.keyCode,this.Cn,a.Jd,a.ctrlKey,a.Fg))this.handleEvent(a);else if(Ec&&a.keyCode in zsa)this.Wk=zsa[a.keyCode];else this.Wk=a.keyCode
};o.c3=function(){
    this.Wk=this.Cn=-1
};
o.handleEvent=function(a){
    var b=a.Tc,c,d;if(A&&a.type==Dd){
        c=this.Wk;d=c!=13&&c!=27?b.keyCode:0
    }else if(Fc&&a.type==Dd){
        c=this.Wk;d=b.charCode>=0&&b.charCode<63232&&Cq(c)?b.charCode:0
    }else if(Dc){
        c=this.Wk;d=Cq(c)?b.keyCode:0
    }else{
        c=b.keyCode||this.Wk;d=b.charCode||0;if(vc&&d==63&&!c)c=191
    }var e=c,g=b.keyIdentifier;if(c)if(c>=63232&&c in xsa)e=xsa[c];else{
        if(c==25&&a.Jd)e=9
    }else if(g&&g in ysa)e=ysa[g];a=e==this.Cn;this.Cn=e;b=new Bsa(e,d,a,b);try{
        this.dispatchEvent(b)
    }finally{
        b.wa()
    }
};o.G=function(){
    return this.ya
};
var $w="keyup";function wsa(a,b,c){
    a.xC&&ax(a);a.ya=b;a.wC=Xd(a.ya,Dd,a,c);a.oI=Xd(a.ya,Wq,a.j0,c,a);a.xC=Xd(a.ya,$w,a.c3,c,a)
}function ax(a){
    if(a.wC){
        ae(a.wC);ae(a.oI);ae(a.xC);a.wC=j;a.oI=j;a.xC=j
    }a.ya=j;a.Cn=-1;a.Wk=-1
}o.A=function(){
    Zw.z.A.call(this);ax(this)
};var bx="key";function Bsa(a,b,c,d){
    d&&this.init(d,void 0);this.type=bx;this.keyCode=a;this.Ct=b;this.repeat=c
}t(Bsa,Ad);var Csa="backspace",cx="tab",dx="enter",ex="shift",fx="ctrl",gx="alt",hx="pause",ix="space",Dsa="up",jx="b",kx="c",lx="f",mx="i",nx="j",ox="k",px="m",qx="t",rx="u",sx="v",tx="x",ux="y",vx="z",wx="\\",xx={
    8:Csa,
    9:cx,
    13:dx,
    16:ex,
    17:fx,
    18:gx,
    19:hx,
    20:"caps-lock",
    27:"esc",
    32:ix,
    33:"pg-up",
    34:"pg-down",
    35:Sp,
    36:"home",
    37:pn,
    38:Dsa,
    39:qn,
    40:"down",
    45:gj,
    46:fj,
    48:Hd,
    49:sg,
    50:tg,
    51:ug,
    52:vg,
    53:wg,
    54:xg,
    55:yg,
    56:zd,
    57:Oc,
    61:"equals",
    65:Ll,
    66:jx,
    67:kx,
    68:Rl,
    69:Ol,
    70:lx,
    71:qb,
    72:Nl,
    73:mx,
    74:nx,
    75:ox,
    76:Pl,
    77:px,
    78:Au,
    79:ec,
    80:Wk,
    81:kl,
    82:Ql,
    83:Pk,
    84:qx,
    85:rx,
    86:sx,
    87:Xk,
    88:tx,
    89:ux,
    90:vx,
    93:"context",
    96:"num-0",
    97:"num-1",
    98:"num-2",
    99:"num-3",
    100:"num-4",
    101:"num-5",
    102:"num-6",
    103:"num-7",
    104:"num-8",
    105:"num-9",
    106:"num-multiply",
    107:"num-plus",
    109:"num-minus",
    110:"num-period",
    111:"num-division",
    112:"f1",
    113:"f2",
    114:"f3",
    115:"f4",
    116:"f5",
    117:"f6",
    118:"f7",
    119:"f8",
    120:"f9",
    121:"f10",
    122:"f11",
    123:"f12",
    187:"equals",
    188:ig,
    190:ea,
    191:tl,
    220:wx,
    224:"win"
};function yx(a){
    this.k={};this.b={
        Jr:[],
        YT:0
    };this.ha=Ta(Esa);this.F=i;this.o=this.Q=l;this.M=i;this.a=a;Xd(this.a,Wq,this.ZB,l,this);vc&&Ec&&Nc(Yr)&&Xd(this.a,$w,this.dQ,l,this);if(wc&&!Ec){
        Xd(this.a,Dd,this.vQ,l,this);Xd(this.a,$w,this.wQ,l,this)
    }
}var zx;t(yx,Vf);var Esa=[27,112,113,114,115,116,117,118,119,120,121,122,123,19],Ax="shortcut",Fsa={
    GW:Ax,
    FW:"shortcut_"
};o=yx.prototype;var Bx="+",Gsa="meta";
o.SD=function(a){
    var b=Hsa,c=this.k,d=arguments;if(wa(d[1])){
        d=d[1];d=d.replace(/[ +]*\+[ +]*/g,Bx).replace(/[ ]+/g,bb).toLowerCase();d=d.split(bb);for(var e=[],g,h=0;g=d[h];h++){
            var k=g.split(Bx),m;g=0;for(var n,p=0;n=k[p];p++){
                switch(n){
                    case ex:g|=1;continue;case fx:g|=2;continue;case gx:g|=4;continue;case Gsa:g|=8;continue
                }m=n;if(!zx){
                    k={};n=void 0;for(n in xx)k[xx[n]]=n;zx=k
                }m=zx[m];break
            }e.push({
                keyCode:m,
                zD:g
            })
        }d=e
    }else{
        e=d;h=1;if(ta(d[1])){
            e=d[1];h=0
        }for(d=[];h<e.length;h+=2)d.push({
            keyCode:e[h],
            zD:e[h+1]
        })
    }b(c,d,a)
};o.A=function(){
    yx.z.A.call(this);this.k={};Zd(this.a,Wq,this.ZB,l,this);vc&&Ec&&Nc(Yr)&&Zd(this.a,$w,this.dQ,l,this);if(wc&&!Ec){
        Zd(this.a,Dd,this.vQ,l,this);Zd(this.a,$w,this.wQ,l,this)
    }this.a=j
};o.dQ=function(a){
    if(a.keyCode==224){
        this.XR=i;Zf(function(){
            this.XR=l
        },400,this)
    }else{
        var b=a.qi||this.XR;if((a.keyCode==67||a.keyCode==88||a.keyCode==86)&&b){
            a.qi=b;this.ZB(a)
        }
    }
};function Cx(a,b){
    return wc&&!Ec&&b.ctrlKey&&b.Fg&&!b.Jd
}
o.vQ=function(a){
    if(a.keyCode>32&&Cx(this,a))this.J=i
};o.wQ=function(a){
    !this.J&&Cx(this,a)&&this.ZB(a)
};function Hsa(a,b,c){
    var d=b.shift();d=d.keyCode&255|d.zD<<8;var e=a[d];if(e&&c&&(b.length==0||wa(e)))f(Error("Keyboard shortcut conflicts with existing shortcut"));if(b.length){
        e||(e=a[d]={});Hsa(e,b,c)
    }else a[d]=c
}function Isa(a,b,c,d){
    c=c||0;if((d=(d||a.k)[b[c]])&&!wa(d)&&b.length-c>1)return Isa(a,b,c+1,d);return d
}
o.ZB=function(a){
    if(Jsa(this,a))if(a.type==Wq&&Cx(this,a))this.J=l;else{
        var b=a.keyCode&255|((a.Jd?1:0)|(a.ctrlKey?2:0)|(a.Fg?4:0)|(a.qi?8:0))<<8,c,d,e=Ea();if(this.b.Jr.length&&e-this.b.YT<=1500)c=Isa(this,this.b.Jr);else this.b.Jr.length=0;c=c?c[b]:this.k[b];if(!c){
            c=this.k[b];this.b.Jr=[]
        }if(c&&wa(c))d=c;else if(c){
            this.b.Jr.push(b);this.b.YT=e;Ec&&a.preventDefault()
        }else this.b.Jr.length=0;if(d){
            this.F&&a.preventDefault();this.Q&&a.stopPropagation();b=this.dispatchEvent(new Dx(Fsa.GW,d,a.target));
            b&=this.dispatchEvent(new Dx(Fsa.FW+d,d,a.target));b||a.preventDefault();this.b.Jr.length=0
        }
    }
};var Ksa="password";
function Jsa(a,b){
    var c=b.keyCode;if(c==16||c==17||c==18)return l;var d=b.target,e=d.tagName==cr||d.tagName==Or||d.tagName==ar||d.tagName==br,g=!e&&(d.isContentEditable||d.ownerDocument&&d.ownerDocument.designMode==ce);if(!e&&!g)return i;if(a.ha[c]||a.o)return i;if(g)return l;if(a.M&&(b.Fg||b.ctrlKey||b.qi))return i;if(d.tagName==Or&&(d.type==K||d.type==Ksa))return c==13;if(d.tagName==Or||d.tagName==ar)return c!=32;return l
}function Dx(a,b,c){
    B.call(this,a,c);this.identifier=b
}t(Dx,B);function Ex(a){
    this.yc=a;this.a={};this.N=new he(this);this.N.a(this.yc,bx,this.b)
}t(Ex,Vf);var Fx=j;Ex.prototype.SD=function(a,b){
    var c;c=b.replace(/[ +]*\+[ +]*/g,Bx).toLowerCase();var d=c.split(Bx);c=0;for(var e=-1,g,h=0;g=d[h];h++){
        switch(g){
            case ex:c|=1;continue;case fx:c|=2;continue;case gx:c|=4;continue;case Gsa:c|=8;continue
        }d=g;if(!Fx){
            e={};g=void 0;for(g in xx)e[xx[g]]=Number(g);Fx=e
        }e=Fx[d];break
    }c={
        keyCode:e,
        zD:c
    };this.a[c.keyCode&255|c.zD<<8]=a
};
var Gx="kix-deferred-cut",Hx="kix-deferred-copy",Ix="kix-deferred-paste";

Ex.prototype.b=function(a){
    if(!(a.keyCode==16||a.keyCode==17||a.keyCode==18)){
        var b=a.Tc;if(b){
            var c=this.a[a.keyCode&255|((a.Jd?1:0)|(a.ctrlKey?2:0)|(a.Fg?4:0)|(a.qi?8:0))<<8];if(c){
                var d=!vc&&(a.ctrlKey&&a.keyCode==45||a.Jd&&(a.keyCode==46||a.keyCode==45));!((a.ctrlKey||a.qi)&&(a.keyCode==67||a.keyCode==88||a.keyCode==86)||d)&&b.preventDefault();if(Ec&&xc&&a.keyCode>=65&&a.keyCode<=90&&(a.Jd?a.keyCode!=a.Ct:a.keyCode==a.Ct))switch(c.split(bb)[0]){
                    case F.Yi.ra():c=Gx;break;case F.Wi.ra():c=Hx;break;
                    case F.$i.ra():c=Ix
                }
				 
				this.dispatchEvent(new Dx(Ax,c,a.target))
            }
        }
    }
};Ex.prototype.A=function(){
    Ex.z.A.call(this);y(this.N);delete this.N;delete this.yc;delete this.a
};function Jx(a){
    this.a={};this.b=!!a
}t(Jx,x);function Kx(a,b){
    var c=xx[b];if(sa(c))return c;return String(b)
}var Lx="command",Mx="option";function Nx(a,b){
    var c;c=z;if(b.qi)c+=Lx;if(b.ctrlKey)c+=fx;if(b.Fg)c+=Mx;if(a.b?0:b.Jd)c+=ex;c=c;return(c?c+Bx:z)+Kx(a,b.keyCode)
}Jx.prototype.A=function(){
    Jx.z.A.call(this);delete this.a
};function Ox(a,b){
    this.a=a;this.k=this.b=new Jx(i);this.o=b;Lsa(this,b)
}t(Ox,x);o=Ox.prototype;o.aR=i;o.fz=j;o.St=39;o.Fs=37;
function Lsa(a,b){
    Px(a,j,38,a.a.gS);Px(a,j,40,a.a.bS);Px(a,j,a.Fs,a.a.gG);Px(a,j,a.St,a.a.kC);Px(a,j,36,a.a.CJ);Px(a,j,35,a.a.BJ);Px(a,j,33,a.a.Q8);Px(a,j,34,a.a.I8);if(b){
        Px(a,Mx,38,a.a.dS);Px(a,Lx,38,a.a.fS);Px(a,Mx,40,a.a.K8);Px(a,Lx,40,a.a.cS);Px(a,Mx,a.Fs,a.a.eS);Px(a,Lx,a.Fs,a.a.CJ);Px(a,fx,a.Fs,a.a.CJ);Px(a,Mx,a.St,a.a.L8);Px(a,Lx,a.St,a.a.BJ);Px(a,fx,a.St,a.a.BJ);Px(a,fx,65,a.a.O8);Px(a,fx,66,a.a.gG);Px(a,fx,69,a.a.J8);Px(a,fx,70,a.a.kC);Px(a,fx,78,a.a.bS);Px(a,fx,80,a.a.gS)
    }else{
        Px(a,fx,
            38,a.a.dS);Px(a,fx,40,a.a.P8);Px(a,fx,a.Fs,a.a.eS);Px(a,fx,a.St,a.a.M8);Px(a,fx,36,a.a.fS);Px(a,fx,35,a.a.cS)
    }
}function Px(a,b,c,d){
    var e=a.b;e.a[(b?b+Bx:z)+Kx(e,c)]=s(d,a.a)
}o.A=function(){
    Ox.z.A.call(this);y(this.b);delete this.b;y(this.k);delete this.k;y(this.fz);delete this.fz;delete this.a
};function Qx(a,b,c,d){
    this.Y=a;this.R=b;this.Ja=c;this.a=d
}t(Qx,x);o=Qx.prototype;o.CJ=function(a){
    var b=this.Y,c=Xv(this.Ja);Rx(b,new J(c.start),a)
};o.BJ=function(a){
    var b=this.Y,c=Xv(this.Ja),d=(fh(b.b,c.end)||bh(b.b,c.end)==hh)&&a?c.end:c.end+1,e=i;if(c.start==c.end)e=l;Rx(b,new J(d,e),a)
};o.O8=function(a){
    var b=this.Y;Rx(b,new J(Sx(b).start),a)
};o.dS=function(a){
    var b=this.Y,c=b.Wa(),d=Tx(b);if(c==d&&d!=1)d=Yg(b.fa(),d-1);Rx(b,new J(d),a)
};
o.K8=function(a){
    var b=this.Y,c=b.Wa(),d=Sx(b).end;if(c==d&&d!=ro(b))d=ch(b.fa(),d+1);Rx(b,new J(d),a)
};o.J8=function(a){
    var b=this.Y;Rx(b,new J(Sx(b).end),a)
};o.P8=function(a){
    var b=this.Y,c=Sx(b).end;c!=ro(b)&&c++;Rx(b,new J(c),a)
};o.fS=function(a){
    var b=this.Y;Rx(b,new J(al(b,b.Wa())+1),a)
};o.cS=function(a){
    var b=this.Y,c=Xo(b,b.Wa())+(a?0:1);Rx(b,new J(c,!a),a)
};o.gS=function(a){
    Msa(this,a)
};o.bS=function(a){
    Nsa(this,a)
};o.eS=function(a){
    this.gG(a,i)
};o.M8=function(a){
    this.kC(a,i)
};
o.L8=function(a){
    this.kC(a,l,i)
};o.kC=function(a,b,c){
    var d=this.Y,e=d.fa(),g=d.Ha(),h=d.Wa();if(!(h>ro(d))){
        var k=Xo(d,h);if(Es(g)&&a&&!b)h=qp(d,Ux(g))+1;else if(h<k&&!gh(d.b,h))if(b)h=Qk(h,d.fa());else if(c){
            b=Yk(h,d.fa());if(b==h){
                h=Qk(h,d.fa());h=Yk(h,d.fa())
            }else h=b
        }else{
            for(h++;h<=k&&!eh(e,h);)h++;a||(h=tia(d,h))
        }else h==k&&!a&&h++;Rx(d,new J(h,!a),a)
    }
};
o.gG=function(a,b){
    var c=this.Y,d=c.fa(),e=c.Ha(),g=c.Wa(),h=e.Ua();h=h.W()==0&&h.b;h=al(c,h?g-1:g);if(Es(e)&&a&&!b)g=dl(c);else if(g>h+1)if(b){
        g=Uk(g,c.fa());if(g<1)g=1
    }else{
        for(g--;g>1&&!eh(d,g);)g--;a||(g=uia(c,g))
    }Rx(c,new J(g),a)
};function Msa(a,b){
    var c=a.Y,d=c.Ha(),e=d.Ua();d=Rv(d);if(!(e.W()!=0||d.W()!=0)){
        if(b&&(!e.kb(d)||e.b!=d.b)){
            e=d;Yv(a.Ja,e)
        }d=a.Ja.Dc(e,i);if(!d){
            e=al(c,e.b?e.a-1:e.a)+1;d=new J(e)
        }Rx(c,d,b)
    }
}
function Nsa(a,b){
    var c=a.Y,d=c.Ha(),e=d.Ua();d=Ux(d);if(!(e.W()!=0||d.W()!=0)){
        if(b&&(!e.kb(d)||e.b!=d.b)){
            e=d.shift(1);Yv(a.Ja,e)
        }d=a.Ja.Dc(e,l);if(!d){
            e=Xo(c,e.b?e.a-1:e.a);d=new J(e)
        }Rx(c,d,b)
    }
}o.Q8=function(a){
    Osa(this,i,a)
};o.I8=function(a){
    Osa(this,l,a)
};
function Osa(a,b,c){
    var d=a.Y,e=d.Ha().Ua();a=a.Ja;var g=a.a.K().Ha().Ua(),h=qq(a,g);g=qq(a,g);var k;if(k=g)if(dsa(a,g)){
        k=a.o;k=new nc(g.x-k.bE,g.y-k.Gi)
    }else k=j;k=k;var m=a.o,n=m.Gi,p=Sv(a),r,u=r=yl(n+p*(b?-1:1),0,Uv(a)-p);m.Gi=u;m.yz(u);a=h?r!=n&&g&&!dsa(a,g)?a.Qa.Fb(h.x,(k?k.y:Math.floor(p/2))+r-(g.y-h.y)):j:j;if(!a||a.kb(e))if(b)a=new J(al(d,d.Wa())+1);else{
        b=Xo(d,d.Wa())+(c?0:1);a=new J(b,!c)
    }Rx(d,a,c)
}o.A=function(){
    Qx.z.A.call(this);delete this.Y;delete this.R;delete this.Ja;delete this.a
};function Psa(a){
    this.a=a
}t(Psa,Vf);var Qsa="handlerStateChange";function Rsa(a,b,c){
    B.call(this,Qsa,a);this.k=b;this.b=c
}t(Rsa,B);function Vx(a,b,c,d,e,g,h,k,m,n,p){
    this.F=a;this.b=b;this.Y=c;this.a=d;this.R=e;this.M=g;this.Ja=h;this.k=k;this.Qa=m;this.J=n;this.Zb=p;this.N=new he(this)
}t(Vx,Vf);o=Vx.prototype;o.xb=l;o.K=function(){
    return this.Y
};o.P=function(){
    return this.Zb
};o.setActive=function(a){
    if(this.xb!=a){
        a?this.wk():this.jK();this.CT(a);this.xb=a
    }
};o.CT=function(){};o.jK=function(){
    je(this.N)
};var Wx="dd";
function Xx(a,b){
    var c=a.k,d=c.a.a;if(d!=b){
        Zf(a.b.Yh,0,a.b);var e=a.M,g=a.Ja;if(b==0)switch(d){
            case 3:case 4:case 2:if(e){
                e.AJ=l;Yx(e)
            }break;case 1:var h=g.ff?g.ff.Ua():j;if(h){
                var k={};k.loc=h;a.dispatchEvent(new Zx(Wx,k,a))
            }
        }d==1&&Wv(g).setActive(l);if(b==2&&e){
            e.AJ=i;Yx(e)
        }c=c.a;if(b!=c.a){
            c.dispatchEvent(new Rsa(c,c.a,b));c.a=b
        }
    }
}function $x(a,b,c){
    b=Ssa(a,b);return a.Ja.Fb(b.x,b.y,c)
}
function Tsa(a){
    var b=a.clientX;a=a.clientY;if(A){
        b+=document.documentElement.scrollLeft+document.body.scrollLeft;a+=document.documentElement.scrollTop+document.body.scrollTop
    }else{
        b+=window.pageXOffset;a+=window.pageYOffset
    }return new nc(b,a)
}function Ssa(a,b){
    var c=Tsa(b);c.x-=a.Ja.VJ;c.y-=a.Ja.JD;return c
}function Usa(a,b){
    var c=em(dm.V(),tp);if(!c.pc())return new Ao(z,[]);return(new (c.Vc.j_())(Rs(a.K()),a.Ja.a.J)).ZS(b)
}
function Vsa(a,b){
    var c=a.K();if(c.Mg())return j;var d=c.fa(),e=b.a,g=Vha(e,d),h;h=e;var k=Xg(d);for(e=e;e<k;e++)if(e==k-1||Sk(e,d,i)){
        h=e+1;break
    }h=h;if(wc){
        d=Zk(d,new Ha(g,h-1),i);g=d.start;h=d.end+1
    }Rx(c,new J(h),i,new J(g),l,i);return new Ha(g,h)
}o.A=function(){
    Vx.z.A.call(this);y(this.N);delete this.N;delete this.F;delete this.b;delete this.Y;delete this.a;delete this.R;delete this.M;delete this.Ja;delete this.k;delete this.J;delete this.Zb;y(this.Qa);delete this.Qa
};
function Zx(a,b,c){
    B.call(this,a,c);this.a=b||{}
}t(Zx,B);function ay(a){
    this.a=new Jx;by(this,j,8,this.CF);by(this,j,46,this.kG);by(this,j,13,this.US);by(this,j,9,this.P5);by(this,ex,9,this.AY);by(this,ex,8,this.CF);by(this,ex,13,this.S5);if(a){
        by(this,ex,46,this.kG);by(this,Mx,8,this.tN);by(this,Mx,46,this.VN);by(this,fx,68,this.kG);by(this,fx,72,this.CF);by(this,fx,75,this.FY);by(this,fx,79,this.US);by(this,Lx,8,this.QX)
    }else{
        by(this,fx,46,this.VN);by(this,fx,8,this.tN)
    }
}t(ay,x);function by(a,b,c,d){
    a=a.a;a.a[(b?b+Bx:z)+Kx(a,c)]=s(d,void 0)
}o=ay.prototype;
var cy="at";o.P5=function(){
    return new dy(cy,{})
};o.AY=function(){
    var a={};a.sh=i;return new dy(cy,a)
};var ey="cr";o.US=function(){
    return new dy(ey,{})
};var fy="ic";o.S5=function(){
    var a={};a.ch=hh;return new dy(fy,a)
};var gy="del";o.kG=function(){
    return new dy(gy,{})
};o.VN=function(){
    var a={};a.delrW=i;return new dy(gy,a)
};o.FY=function(){
    var a={};a.delrP=i;return new dy(gy,a)
};var hy="bs";o.CF=function(){
    return new dy(hy,{})
};o.tN=function(){
    var a={};a.delbW=i;return new dy(hy,a)
};
o.QX=function(){
    var a={};a.delbL=i;return new dy(hy,a)
};o.A=function(){
    ay.z.A.call(this);y(this.a);delete this.a
};function dy(a,b){
    this.type=a;this.a=b
};function iy(a,b,c,d,e,g,h,k,m,n,p,r,u){
    Vx.call(this,a,b,c,d,e,g,h,k,m,r,u);this.o=n;this.Q=p;a=this.N;b.Xk?this.dR(j):a.a(b,ps,this.dR);this.Ja.qb?this.eR(j):a.a(this.Ja,Jv,this.eR)
}t(iy,Vx);var Wsa=[38,38,40,40,37,39,37,39,66,65,13];o=iy.prototype;o.lz=0;o.hJ=0;o.gD=j;o.sw=j;o.cp=j;var Xsa=!Ec,Ysa=ve&&wc;o=iy.prototype;o.fR=l;o.Wm=1;o.dR=function(){
    this.sw=Zsa(this,this.b.Sh);$sa(this)
};o.eR=function(){
    var a=this.Ja;if(Te(eo(a.a)))if(a=a.Qc)this.cp=Zsa(this,a);$sa(this)
};var ata="Meta";
function $sa(a){
    if(!(a.fR||!a.b.Xk||!a.Ja.qb)){
        a.fR=i;for(var b=Ka(a.F.b),c=0;c<b.length;c++){
            var d=a,e=b[c],g=H(d.F,e);if(g)if(g=g.Ec(uf)){
                g=wa(g)?[g]:g;for(var h=g.length>1,k=0,m=g.length;k<m;k++){
                    var n=d,p=g[k],r=h?k:undefined;r=sa(r)?e+bb+r:e;p=vc?p.replace(/Ctrl/ig,ata):p;n.sw.SD(r,p);n.cp&&n.cp.SD(r,p)
                }
            }
        }a.xb&&a.wk()
    }
}function Zsa(a,b){
    var c;if(Xsa){
        c=new yx(b);c.F=l;c.o=i
    }else c=new Ex(new Zw(b));return c
}var bta="compositionstart",cta="compositionend",dta="compositionupdate",eta="textInput";
o.wk=function(){
    var a=this.b;if(a.Xk){
        var b=this.N;a=a.Sh;b.a(a,bta,this.D2).a(a,cta,this.G2).a(a,dta,this.aQ).a(a,K,this.aQ).a(a,Wq,this.C6).a(a,Dd,this.b3).a(this.sw,Ax,this.lQ).a(a,eta,this.J2);this.cp&&b.a(this.cp,Ax,this.lQ)
    }
};function fta(a){
    switch(a.keyCode){
        case 16:case 17:return l;default:return i
    }
}o.bQ=function(a){
    if(this.k.b)switch(a.keyCode){
        case 13:case 9:case 27:jy(this);this.N.b(this.b.Sh,$w,this.bQ)
    }
};o.D2=function(){
    gta(this)
};
function gta(a){
    var b=a.K();if(Es(b.Ha())){
        var c=dl(b);a.Wm=c;a.ha=ns(a.b);Rx(b,new J(c),i)
    }else{
        a.Wm=a.K().Wa();a.ha=j
    }we&&a.N.a(a.b.Sh,$w,a.bQ);a.k.b=i;qsa(a.Ja,i,a.b);a.b.KK=Ysa;ky(a)
}o.G2=function(){
    jy(this)
};var ly="kix-overlay-ime-whiteout";function jy(a){
    a.k.b=l;if(Fc){
        if(xc)a.hJ=229;zoa(a.b)
    }ky(a);Fc||Rx(a.K(),new J(a.Wm+ns(a.b).length),i);var b=a.Ja.a.k;if(a.K().a.a){
        yp(b,ly,0);b.addRange(ly,0,Number.MAX_VALUE);Ap(b)
    }else zp(b,ly);a.IN()
}o.aQ=function(){
    ky(this)
};var my="imeIn";
function ky(a){
    var b=ns(a.b);if(b.length>=0){
        var c={},d=a.Wm;c.ch=b;c.pimc=a.ha?a.ha:j;c.spi=d;if(a.k.b){
            d=a.Ja.a.k;if(a.K().a.a){
                ko(d,ly)[0]=a;d.addRange(ly,0,Number.MAX_VALUE);Ap(d)
            }else d.wg(ly,s(a.YO,a))
        }a.dispatchEvent(new Zx(my,c,a))
    }a.ha=b
}o.Ln=function(a){
    return this.YO(a)||[]
};o.YO=function(a){
    var b=ns(this.b),c=this.Wm,d=c,e=d+b.length-1;if(d>a.end||e<a.start||b.length==0)return[];d=Math.max(c,a.start);e=Math.min(c+b.length-1,a.end);return[new Qn(new Ha(d,e),ly)]
};
o.J2=function(a){
    if(Fc&&this.hJ==229){
        this.k.b&&jy(this);if(a.Tc){
            var b={},c=a.Tc.data;b.ch=c;b.spi=this.Wm;this.dispatchEvent(new Zx(my,b,this));Rx(this.K(),new J(this.Wm+c.length),i)
        }a.preventDefault()
    }
};var ny="typing",oy="keyEvent",hta="sc",ita="delpe";
o.C6=function(a){
    var b=rg.V();Ag(b,ny,oy);if(Wsa[this.lz]==a.keyCode){
        this.lz++;if(this.lz>=Wsa.length){
            this.dispatchEvent(new Zx(hta,{},this));this.lz=0
        }
    }else this.lz=0;if(!(Ec||ve)){
        var c=this.k.b;if(!c&&a.keyCode==229)gta(this);else if(c&&a.keyCode!=229)fta(a)&&jy(this);else c&&ky(this)
    }if(this.K().Ha().Ua().W()==0){
        Ec||py(this,a);this.gD=a;if(fta(a))this.hJ=a.keyCode;qy(a)||this.b.Yh()
    }else{
        c=i;switch(a.keyCode){
            case 46:case 8:this.dispatchEvent(new Zx(ita,this));break;default:c=l
        }qy(a)||this.b.Yh();
        c&&a.preventDefault()
    }Cg(b,ny,oy)
};o.IN=function(){
    zoa(this.b);qsa(this.Ja,l,this.b);this.b.Yh();this.b.KK=l
};
function py(a,b,c){
    var d=a.K(),e=d.Wa(),g=ro(d),h=a.o;d=d.Ka(Jh,ch(d.fa(),e<=g?e:g)).Ic();if(h.aR!=d){
        h.aR=d;h.St=d?39:37;h.Fs=d?37:39;if(d)h.b=h.k;else if(h.fz)h.b=h.fz;else{
            h.b=h.fz=new Jx(i);Lsa(h,h.o)
        }
    }if(q(a.o.b.a[Nx(a.o.b,b)])){
        h=rg.V();Ag(h,Yw,vp);(d=a.o.b.a[Nx(a.o.b,b)])&&d(!b.Jd);a.a.o.stop();c||b.preventDefault();Cg(h,Yw,vp)
    }else if(q(a.Q.a.a[Nx(a.Q.a,b)])){
        d=(h=a.Q.a.a[Nx(a.Q.a,b)])?h():j;if(d){
            e=jta(d.type);h=rg.V();Bg(h,Yw,e);a.dispatchEvent(new Zx(d.type,d.a,a));Dg(h,Yw,e)
        }c||b.preventDefault()
    }b.keyCode!=
    40&&b.keyCode!=38&&Yv(a.Ja,j)
}var ry="basicEdit",kta="carriageReturn",lta="deleteKey",mta="typeChar";function jta(a){
    switch(a){
        case cy:return[cx,ry];case hy:return[Csa,ry];case ey:return[kta,ry];case gy:return[lta,ry];case fy:return[mta,ry]
    }return[]
}function qy(a){
    return a.ctrlKey||a.Fg||a.qi&&vc
}
o.lQ=function(a){
    var b=a.identifier.split(bb);a=b[0];var c=H(this.F,a);if(!c)return i;if(c.Gb()){
        var d;if(b.length>1)d=b[1];if(a==F.Yi.ra()||a==F.Wi.ra()||a==F.$i.ra()||a==Gx||a==Hx||a==Ix){
            b=l;qs(this.b);if(!voa||a==Gx||a==Hx||a==Ix){
                d=this.b;switch(a){
                    case F.Yi.ra():case Gx:ys(d,Gf);break;case F.Wi.ra():case Hx:ys(d,Ef);break;case F.$i.ra():case Ix:ys(d,If)
                }
            }
        }else{
            b=i;yf(c,d)
        }return!b
    }else return l
};
o.b3=function(a){
    if(this.K().Ha().Ua().W()==0){
        var b=rg.V();Ag(b,ny,oy);var c=a.ctrlKey,d=a.Jd,e=a.Fg,g=a.keyCode,h=a.Ct,k=qy(a);if(Ec){
            if(wc&&g==192)h=0;vc&&c&&g==0&&this.gD!=j&&py(this,this.gD,i);py(this,a)
        }else if(vc&&e&&h!=70)k=l;if((!Ec||Cq(g)||g==0)&&h>=32&&(!k||e&&c&&!(h>=48&&h<=54||h==109))){
            c=String.fromCharCode(h);e=jta(fy);h=rg.V();Bg(h,Yw,e);var m={};m.ch=c;this.dispatchEvent(new Zx(fy,m,this));Dg(h,Yw,e)
        }if(!k&&(!Ec||g<112||g>123)&&!(d&&g==45)){
            this.b.Yh();a.preventDefault()
        }Cg(b,ny,
            oy)
    }
};o.A=function(){
    iy.z.A.call(this);y(this.sw);delete this.sw;y(this.cp);delete this.cp;y(this.o);delete this.o;y(this.Q);delete this.Q;delete this.gD
};function sy(a,b){
    this.b=a||z;this.k=b||z;this.a=new ty(16);this.N=new he(this)
}t(sy,Vf);o=sy.prototype;o.tG=z;o.iJ=z;o.jD=j;o.zy=j;o.Ge=function(){
    return this.b
};o.ue=function(){
    return!this.k
};
function uy(a,b){
    var c=a.a;

	if(!c.kb(b)){
        vy(a)||wy(c,2);a.a=b;a.dispatchEvent(new nta(c));return i
    }
	return l
}
function vy(a){
    return wy(a.a,2)
}function ota(a){
    uy(a,xy(xy(a.a,1,l),2,i))&&a.dispatchEvent(qb)
}function yy(a){
    return wy(a.a,8)
}function zy(a){
    return wy(a.a,4)
}o.Wf=function(){
    return this.tG
};
o.setTitle=function(a,b){
    if(this.tG!=a||b){
        this.tG=a;this.dispatchEvent(new Ay(ox,!!b))
    }
};function By(a,b,c,d){
    if(a.jD!=b||a.zy!=c){
        a.jD=b;a.zy=c;a.iJ=z;a.dispatchEvent(new Ay(mx,!!d))
    }
}function pta(a,b){
    if(!yy(a)&&!zy(a))b();else var c=Xd(a,nx,function(){
        if(!yy(a)&&!zy(a)){
            ae(c);b()
        }
    })
}o.A=function(){
    sy.z.A.call(this);this.N.wa()
};function Ay(a,b){
    B.call(this,a);this.b=b||l
}t(Ay,B);function nta(a){
    B.call(this,nx);this.b=a
}t(nta,B);var qta=new function(a){
    this.a=a
}("/#documents");
function ty(a){
    this.a=Ba(a)?a.a:a;!wy(this,2)||wy(this,1)
}ty.prototype.ea=function(){
    return this.a
};function wy(a,b){
    return!!(a.a&b)
}function xy(a,b,c){
    return wy(a,b)==c?a:new ty(a.a^b)
}ty.prototype.kb=function(a){
    return this.a==a.a
};function Cy(){
    this.N=new he(this);this.a={}
}t(Cy,x);var Dy="document-creation";
Cy.prototype.bind=function(a){
    if(this.vb&&vy(this.vb))a.Aa(i,Dy);else{
        this.a[a.ra()]=a;a.Aa(l,Dy)
    }
};Cy.prototype.b=function(){
    for(var a in this.a)this.a[a].Aa(i,Dy)
};Cy.prototype.A=function(){
    Cy.z.A.call(this);this.N.wa();delete this.N;delete this.vb;delete this.a
};function Ey(a,b){
    Of.call(this,a,b)
}t(Ey,Of);var Fy="kix-page-setup-dialog",rta="Page setup...",Gy="kix-print-settings-dialog",sta="Print settings...",tta="Show comments",Hy="kix-export-odt",uta="ODT",Iy="kix-export-pdf",vta="PDF",Jy="kix-export-rtf",wta="RTF",Ky="kix-export-txt",xta="Text",Ly="kix-export-word",yta="Word",My="kix-export-zip",zta="HTML (Zipped)";
Ey.prototype.F=function(a){
    a.Ye&&G(this,Fy,rta,undefined,undefined,undefined,undefined,Te(a));a.BL&&G(this,Gy,sta);G(this,uq,tta,tta,undefined,undefined,undefined,!a.M);if(a.Od){
        Ny(this,Hy,uta);Ny(this,Iy,vta);Ny(this,Jy,wta);Ny(this,Ky,xta);Ny(this,Ly,yta);G(this,My,zta)
    }
};function Ny(a,b,c){
    G(a,b,c,undefined,undefined,undefined,undefined,undefined,undefined,i)
}
Ey.prototype.J=function(a){
    Qf(this,F.Iv,!a.ue(),i);Qf(this,F.kF,i,i);Qf(this,F.dA,!a.ue(),i);Qf(this,F.eA,i,i);Qf(this,F.fA,i,i);Qf(this,F.Jv,!a.ue(),i);Qf(this,F.gA,i,i);Qf(this,F.OPEN,!a.ue(),i);Qf(this,F.rk,!!a.vC,i);Qf(this,F.Eo,!!a.vC,i);Qf(this,F.pA,i,i);Qf(this,F.Uz,a.Od,i);Qf(this,F.Wi,i,l);G(this,Hx,z);Qf(this,F.mA,i);Qf(this,F.Wz,i,i);Qf(this,F.Xz,i,i);Qf(this,F.Ao,i,i);Qf(this,F.Ur,i,i);Qf(this,F.Yz,i,i);Qf(this,F.Ho)
};function Oy(a,b,c){
    var d=this.o=new Cy;d.vb=c;vy(d.vb)?d.b():ie(d.N,d.vb,qb,d.b);Of.call(this,a,b)
}t(Oy,Ey);
var Ata="Bullet",Bta="Bulleted list",Cta="docs-icon-list-bullet",Dta="Ctrl+Shift+8",Py="kix-bullet-circle",Eta="Bullet \u25cf",Qy="kix-bullet-hollow",Fta="Hollow \u25cb",Gta="Hollow list",Ry="kix-bullet-square",Hta="Square \u25a0",Ita="Square list",Sy="kix-bullet-check",Jta="Check \u2611",Kta="Checklist",Ty="kix-list-style-menu",Lta="List styles",Uy="kix-clear-formatting",Mta="Clear formatting",Nta="Clear all style formatting",Ota="Ctrl+\\",Vy="kix-document-margins",Pta="kix-page-size",Wy="kix-page-color",
Xy="kix-find-and-replace-start",Qta="Find and replace...",Yy="kix-find-and-replace-stop",Zy="kix-replace",$y="kix-replace-all",az="kix-find-start",Rta="Ctrl+F",bz="kix-find-stop",Sta="Ctrl+Alt+",Tta="Ctrl+Alt+Num-",cz="kix-heading-0",Uta="Normal text",dz="Set the heading style for text",ez="kix-heading-1",Vta="Heading 1",fz="kix-heading-2",Wta="Heading 2",gz="kix-heading-3",Xta="Heading 3",hz="kix-heading-4",Yta="Heading 4",iz="kix-heading-5",Zta="Heading 5",jz="kix-heading-6",$ta="Heading 6",aua=
"Increase indent",bua="docs-icon-indent",kz="kix-insert-horizontal-line",lz="Horizontal line",cua="insert-horizontal-line",mz="kix-insert-document-slice",dua="Insert image",eua="docs-icon-image",fua="Drawing...",gua="Insert drawing",hua="docs-icon-drawing",iua="Special characters...",jua="Insert special characters...",nz="kix-publish",kua="Publish to the Web...",oz="kix-tools-translate",lua="Translate document...",pz="kix-tools-define",mua="Define...",nua="Get definitions",oua="Ctrl+Shift+Y",qz="kix-apply-spellcheck-suggestion",
rz="kix-autocorrect-spellcheck-suggestion",sz="kix-override-spellcheck-sugestion",tz="kix-ignore-word",uz="kix-tools-word-count",pua="Word count",qua="Count words",rua="Ctrl+Shift+C",sua="Link...",tua="Insert link",uua="insert-link",vua="Ctrl+K",wua="Language",vz="kix-apply-language-setting",wz="kix-line-spacing-double",xua="2.0",yua="Double spaced",xz="kix-line-spacing-one-point-five",yz="1.5",zua="1.5 lines spaced",zz="kix-line-spacing-one-point-one-five",Aua="1.15",Bua="1.15 lines spaced",Az="kix-line-spacing-single",
Cua="1.0",Dua="Single spaced",Eua="kix-heading-menu",Fua="Styles",Gua="Numbered list",Hua="docs-icon-list-number",Iua="Ctrl+Shift+7",Bz="kix-numbered-bullet-number",Jua="1, 2, 3",Kua="Numbers",Cz="kix-numbered-bullet-latin-upper",Lua="A, B, C",Mua="Uppercase Latin Letters",Dz="kix-numbered-bullet-latin-lower",Nua="a, b, c",Oua="Lowercase Latin Letters",Ez="kix-numbered-bullet-roman-upper",Pua="I, II, III",Qua="Uppercase Roman Numerals",Fz="kix-numbered-bullet-roman-lower",Rua="i, ii, iii",Sua="Lowercase Roman Numberals",
Tua="Decrease indent",Uua="docs-icon-outdent",Gz="kix-paragraph-align-center",Vua="Center",Wua="Center align",Xua="docs-icon-align-center",Yua="Ctrl+Shift+E",Hz="kix-paragraph-align-left",Zua="Left align",$ua="docs-icon-align-left",ava="Ctrl+Shift+L",Iz="kix-paragraph-align-right",bva="Right align",cva="docs-icon-align-right",dva="Ctrl+Shift+R",Jz="kix-paragraph-align-justify",eva="Justified",fva="Justify",gva="align-justify",hva="Ctrl+Shift+J",Kz="kix-paragraph-indent-first-line",iva="Paragraph Indent First Line",
jva="Set paragraph first line indent",Lz="kix-paragraph-indent-start",kva="Paragraph Indent Start",lva="Set paragraph start indent",Mz="kix-paragraph-indent-end",mva="Paragraph Indent End",nva="Set paragraph end indent",ova="Table of contents",pva="Insert table of contents",qva="Update now",Nz="kix-text-ltr",rva="Left-to-right text",sva="Set text direction to left-to-right.",tva="text-ltr",Oz="kix-text-rtl",uva="Right-to-left text",vva="Set text direction to right-to-left.",wva="text-rtl",Pz="kix-show-ruler",
xva="Show ruler",Qz="kix-add-tab-stop",Rz="kix-delete-tab-stop",Sz="kix-update-tab-stop",Tz="kix-show-spell-corrections",yva="Show spelling suggestions",Uz="kix-align-menu",zva="Align",Vz="kix-line-spacing-menu",Ava="Line spacing",Bva="line-spacing",Wz="kix-styles-menu",Cva="Paragraph styles",Xz="kix-renumber-bullet",Dva="Restart numbering",Eva="kix-performance-dialog",Fva="Performance Dialog",Gva="Ctrl+Alt+Shift+P";
Oy.prototype.F=function(a){
    Oy.z.F.call(this,a);G(this,xw,Ata,Bta,Cta,Dta);G(this,Py,Eta,Bta,undefined,undefined,0,l,Dw);G(this,Qy,Fta,Gta,undefined,undefined,1,l,Dw);G(this,Ry,Hta,Ita,undefined,undefined,2,l,Dw);G(this,Sy,Jta,Kta,undefined,undefined,undefined,undefined,Dw);G(this,Ty,Lta,Lta,Cta+(a.J?Kf:z));G(this,Uy,Mta,Nta,undefined,Ota);G(this,Vy,z);G(this,Pta,z,undefined,undefined,undefined,undefined,!a.Ye);G(this,Wy,z,undefined,undefined,undefined,undefined,!a.Ye&&!a.vA);G(this,Ct,z);if(a.sA){
        G(this,
            Xy,Qta);G(this,Yy,z);G(this,Zy,z);G(this,$y,z);G(this,az,z,undefined,undefined,Rta);G(this,bz,z);G(this,Lv,z)
    }for(var b=[],c=0;c<=6;++c)b[c]=Xsa?[Sta+c,Tta+c]:Sta+c;G(this,cz,Uta,dz,undefined,b[0],0,l,Cw,undefined,i);G(this,ez,Vta,dz,undefined,b[1],1,l,Cw,undefined,i);G(this,fz,Wta,dz,undefined,b[2],2,l,Cw,undefined,i);G(this,gz,Xta,dz,undefined,b[3],3,l,Cw,undefined,i);G(this,hz,Yta,dz,undefined,b[4],4,l,Cw,undefined,i);G(this,iz,Zta,dz,undefined,b[5],5,l,Cw,undefined,i);G(this,jz,$ta,dz,undefined,
        b[6],6,l,Cw,undefined,i);
		G(this,vw,aua,aua,bua);
		G(this,kz,lz,lz,cua);G(this,mz,z);G(this,Ow,eea,dua,eua,undefined,undefined,!a.ha,undefined,i);
		G(this,Nw,z,undefined,undefined,undefined,undefined,!a.ha);
		 //G(this,Pw,fua,gua,hua,undefined,undefined,!a.Oa,undefined,i);a.Oa&&G(this,yu,z);//drawings
		G(this,Sw,iua,jua,undefined,undefined,undefined,!a.iB);
		G(this,nz,kua,kua,undefined,undefined,undefined,!(a.cV&&a.nZ));G(this,oz,lua,lua,undefined,undefined,undefined,!a.YE||a.ue(),undefined,i);G(this,pz,mua,nua,undefined,
        oua,undefined,!a.AL);G(this,qz,z);a.iA&&G(this,rz,z);a.xB&&G(this,sz,z);a.tA&&G(this,tz,z);G(this,uz,pua,qua,undefined,rua,undefined,!a.cF);
		G(this,Bt,sua,tua,uua,vua,undefined,!a.xM);
		G(this,wl,z);if(a.eb){
        G(this,Uw,wua,wua);G(this,vz,z)
    }G(this,wz,xua,yua,undefined,undefined,2,l,Bw);G(this,xz,yz,zua,undefined,undefined,1.5,l,Bw);G(this,zz,Aua,Bua,undefined,undefined,1.15,l,Bw);G(this,Az,Cua,Dua,undefined,undefined,1,l,Bw);G(this,Eua,Fua,Fua);G(this,ft,z);G(this,wu,z);G(this,yw,Gua,Gua,Hua,Iua);G(this,
        Bz,Jua,Kua,undefined,undefined,3,l,Dw);G(this,Cz,Lua,Mua,undefined,undefined,4,l,Dw);G(this,Dz,Nua,Oua,undefined,undefined,5,l,Dw);G(this,Ez,Pua,Qua,undefined,undefined,6,l,Dw);G(this,Fz,Rua,Sua,undefined,undefined,7,l,Dw);G(this,ww,Tua,Tua,Uua);G(this,Gz,Vua,Wua,Xua,Yua);G(this,Hz,wn,Zua,$ua,ava);G(this,Iz,xn,bva,cva,dva);G(this,Jz,eva,fva,gva,hva,undefined,!a.vM);G(this,Kz,iva,jva);G(this,Lz,kva,lva);G(this,Mz,mva,nva);G(this,tw,uw,uw);G(this,qw,rw,rw);G(this,Eu,z,z);G(this,Rw,ova,pva,undefined,
        undefined,undefined,!a.Mh);G(this,up,qva,qva);G(this,Nz,rva,sva,tva,undefined,undefined,!a.Zb);G(this,Oz,uva,vva,wva,undefined,undefined,!a.Zb);G(this,Pz,xva,xva,undefined,undefined,undefined,!a.Qa);G(this,Qz,z,undefined,undefined,undefined,undefined,!a.Qa);G(this,Rz,z,undefined,undefined,undefined,undefined,!a.Qa);G(this,Sz,z,undefined,undefined,undefined,undefined,!a.Qa);G(this,Tz,yva);G(this,Uz,zva);G(this,Vz,Ava,Ava,Bva+(a.J?Kf:z));G(this,Wz,Cva);G(this,Xz,Dva,undefined,undefined,undefined,undefined,
        i);a.tM&&G(this,Eva,Fva,undefined,undefined,Gva)
};Oy.prototype.J=function(a){
    Oy.z.J.call(this,a);Qf(this,F.Fo,!a.ue(),i);Qf(this,F.Pl,i,i);Qf(this,F.qF,i,i);Qf(this,F.Mv,a.FM&&!a.ue(),i);this.o.bind(F.Mv);Qf(this,F.Yi,i);Qf(this,F.$i,i);G(this,Gx,z);G(this,Ix,z);Qf(this,F.Lv,i);Qf(this,F.Tv,i);Qf(this,F.Jl,i);Qf(this,F.Ev,i);Qf(this,F.Fv,i);Qf(this,F.Ml,i);Qf(this,F.Pv,i);Qf(this,F.Qv,i);Qf(this,F.Rv,i);Qf(this,F.oA,i);Qf(this,F.nA,i);Qf(this,F.Ql,i)
};
Oy.prototype.A=function(){
    Oy.z.A.call(this);y(this.o);delete this.o
};function Yz(a,b,c){
    this.Dq=a;this.b=b||0;this.a=c;this.qd=s(this.d0,this)
}t(Yz,x);o=Yz.prototype;o.mi=0;o.A=function(){
    Yz.z.A.call(this);this.stop();delete this.Dq;delete this.a
};o.start=function(a){
    this.stop();this.mi=Zf(this.qd,q(a)?a:this.b)
};o.stop=function(){
    this.mi!=0&&$f(this.mi);this.mi=0
};o.d0=function(){
    this.mi=0;this.Dq&&this.Dq.call(this.a)
};function R(a,b){
    this.F=a;this.Y=b;this.b=[];this.k=[]
}t(R,x);o=R.prototype;o.oj=Au;o.Bk=j;o.Ak=j;o.Ud=function(){
    return this.b
};o.sI=function(){
    return this.k
};o.Nj=function(){
    return i
};o.W=function(){
    return this.F
};o.K=function(){
    return this.Y
};var Zz="apTSty",Hva="applyTextStyle",Iva="applyBasicStyles",$z="apPaSty",Jva="applyParagraphStyle";
o.execute=function(a){
    if(this.oj==Au){
        var b;a:{
            switch(this.F){
                case Zz:b=[Hva,Iva];break a;case $z:b=[Jva,Iva];break a
            }b=[]
        }var c=rg.V();Bg(c,Yw,b);var d=this.Y.Ha();this.Bk=d.Ba();this.a(a);this.Ak=d.Ba();this.oj=Ol;this.Y.qp();Dg(c,Yw,b)
    }return this.b
};o.YQ=function(){
    if(this.oj!=rx&&this.oj!=Au){
        Kva(this,this.k);var a=this.Bk;Rx(this.Y,a.Ua(),i,a.a);this.Y.qp();this.oj=rx;return this.k
    }return[]
};
o.XQ=function(){
    if(this.oj==rx){
        for(var a=this.b,b=[],c=0,d;d=a[c];c++)d.QQ()&&b.push(d);Kva(this,b);a=this.Ak;Rx(this.Y,a.Ua(),i,a.a);this.Y.qp();this.oj=Ql;return b
    }return[]
};o.Da=function(a){
    if(this.oj==Au){
        a.a();this.Nj()&&Hb(this.k,a.J,0);Nb(this.b,a.Ud())
    }
};o.Ea=function(a){
    if(this.oj==Au){
        if(this.Nj()){
            var b=a.Qj(this.Y);Hb(this.k,b,0)
        }this.Y.Ea(a);this.b.push(a)
    }
};function Kva(a,b){
    for(var c=a.Y,d=0;d<b.length;d++)c.Ea(b[d])
}
o.A=function(){
    R.z.A.call(this);delete this.Y;wb(this.b,function(a){
        y(a)
    });delete this.b;y(this.Bk);delete this.Bk;y(this.Ak);delete this.Ak
};var Lva=new zi;function aA(a,b){
    Lva.set(a,b)
};var Mva="batch";function bA(a,b){
    R.call(this,Mva,b);this.J=a.W();this.oj=Ol;this.Bk=a.Bk
}t(bA,R);bA.prototype.append=function(a){
    if(a.W()==this.J){
        Nb(this.Ud(),a.Ud());Hb(this.sI(),a.sI(),0);this.Ak=a.Ak
    }
};var cA="collab";function dA(a){
    R.call(this,cA,a)
}t(dA,R);dA.prototype.a=function(a){
    for(var b=this.K(),c=a.colMut,d=0;d<c.length;d++)this.Ea(c[d]);(a=a.tsCr)&&Rx(b,a.Ua(),i,a.a,i)
};dA.prototype.Nj=function(){
    return l
};dA.prototype.YQ=function(){
    return[]
};dA.prototype.XQ=function(){
    return[]
};aA(cA,function(a){
    return new dA(a)
});function eA(a,b){
    this.Y=a;this.R=b;this.a=[];this.b=[];this.k=[];this.o=new Yz(ha,1E4,this);this.N=new he(this);jm(dm.V(),tp,this.l6,this)
}t(eA,x);o=eA.prototype;o.rI=i;o.uN=l;o.SA=i;o.nq=j;o.OA=i;o.EJ=j;o.Gw=j;o.hD=j;o.iD=j;o.Aa=function(a){
    this.rI=a
};o.l6=function(){
    var a=bm(em(dm.V(),tp));this.EJ=a.nP();this.Gw=a.e_()
};var fA="bksp",gA="inCh";function Nva(a,b){
    if(a.rI&&a.SA)return i;var c=b==gy||b==fA;if(a.rI)return c;if(!a.uN)return l;return c||a.SA&&(b==my||b==gA)
}
o.execute=function(a,b){
    if(Nva(this,a)){
        var c=Lva.execute(a,this.Y);if(c){
            var d=c.execute(b);if(c.Nj()){
                hA(this,d);this.hD=b;this.iD=c.W()
            }for(var e=0;e<d.length;e++){
                var g=d[e].W();if(g==hw||g==iw){
                    this.a.length=0;this.b.length=0;this.OA=i;return
                }
            }if(c.Ud().length>0||!c.Nj()){
                if(this.a.length>0||c.Nj())if(c.Nj()){
                    if(this.o.mi!=0&&this.a.length>0)if(c.W()!=this.a[0].J||c.W()!=gA&&c.W()!=gy&&c.W()!=fA)this.o.stop();if(this.o.mi==0||this.a.length==0){
                        this.a.unshift(new bA(c,this.Y));this.o.start()
                    }this.a[0].append(c)
                }else{
                    this.a.unshift(c);
                    this.o.stop()
                }if(c.Nj()){
                    this.OA=i;this.b.length=0
                }else this.b.length>0&&this.b.unshift(c)
            }
        }
    }
};function Ova(a,b){
    if(a.EJ&&a.Gw){
        for(var c=[],d=0;d<b.length;d++){
            var e=b[d];if(e.Nj()){
                Kb(b,d);d=e;c=c;var g=a.EJ,h=a.Gw;d.b=g(d.b,c).vs;d.k=g(d.k,c).vs;if(d.Bk)d.Bk=h(d.Bk,c);if(d.Ak)d.Ak=h(d.Ak,c);return e
            }else Hb(c,e.Ud(),0)
        }b.length=0;return j
    }e=b.shift();if(!e.Nj())f(Error("Encountered non-local command before network communication was initialized."));return e
}
function hA(a,b){
    if(b.length!=0)if(a.nq)a.nq.wK(b);else a.k=a.k.concat(b)
}o.Z3=function(a){
    Pva(this,a.b)
};function Pva(a,b){
    var c=a.Y,d={};d.colMut=b;c=c.Ha();var e=c.Ua();if(a.Gw&&e.W()==0)d.tsCr=a.Gw(c,b);a.execute(cA,d)
}o.A=function(){
    eA.z.A.call(this);delete this.Y;delete this.nq;delete this.k;delete this.hD;delete this.iD;for(var a=0;a<this.a.length;a++)y(this.a[a]);delete this.a;for(a=0;a<this.b.length;a++)y(this.b[a]);delete this.b;y(this.N);delete this.N
};function iA(){
    this.a={}
}t(iA,x);ia(iA);iA.prototype.k=function(a){
    this.a[a.kj]||(this.a[a.kj]={});this.a[a.kj][a.name]||(this.a[a.kj][a.name]=new Qva);var b=a.duration;a=this.a[a.kj][a.name];a.a+=1;a.b+=b
};var Rva="\nEvent trace:\n",Sva="\nCategory: ",Tva=" Number: ",Uva=" total: ",Vva=" average: ";iA.prototype.b=function(){
    var a=[Rva],b;for(b in this.a){
        a.push(Sva+b+Xa);var c=b,d=a,e=void 0;for(e in this.a[c]){
            var g=this.a[c][e];d.push(e+Tva+g.a+Uva+g.b+Vva+g.b/g.a+Xa)
        }this.a[b]={}
    }return a.join(z)
};
iA.prototype.A=function(){
    iA.z.A.call(this);delete this.a
};function Qva(){
    this.b=this.a=0
};function jA(){}t(jA,Vf);var Wva="preferenceChange";function kA(a,b){
    B.call(this,Wva,a);this.b=b
}t(kA,B);kA.prototype.A=function(){
    kA.z.A.call(this);delete this.b
};function lA(){
    this.a={}
}t(lA,jA);ia(lA);var mA="userDictionaryChange",Xva="kix-uDi";function Yva(a,b,c){
    a.a[b.toLowerCase()]=i;if(c){
        a.dispatchEvent(mA);a.dispatchEvent(new kA(a,{
            name:Xva,
            vz:[b]
        }))
    }
}lA.prototype.update=function(a){
    if(ta(a))if((a=a[1])&&ta(a)){
        for(var b=l,c=0;c<a.length;c++){
            var d=a[c];if(Ba(d)){
                d=d[1];if(wa(d)){
                    Yva(this,d,l);b=i
                }
            }
        }b&&this.dispatchEvent(mA)
    }
};lA.prototype.A=function(){
    lA.z.A.call(this);delete this.a
};function nA(a){
    wi.call(this,2,a);this.update(a)
}t(nA,wi);o=nA.prototype;o.EC=z;o.FC=0;o.ra=function(){
    return this.EC
};o.Af=function(){
    return this.FC
};var Zva="d_id",$va="d_revision";o.Kb=function(a,b){
    switch(a){
        case Zva:this.EC=b;break;case $va:this.FC=b;break;default:nA.z.Kb.call(this,a,b)
    }
};o.ce=function(a){
    var b=nA.z.ce.call(this,a),c;for(c in a)switch(c){
        case Zva:b[c]=this.EC;break;case $va:b[c]=this.FC
    }return b
};o.ia=function(){
    var a=nA.z.ia.call(this);a.d_id=this.EC;a.d_revision=this.FC;return a
};function oA(a){
    wi.call(this,0,a);this.update(a)
}t(oA,wi);o=oA.prototype;o.$x=z;o.fn=z;o.Ge=function(){
    return this.fn
};var pA="KIX-0-system-box";o.PB=function(){
    return this.fn==pA?16:oA.z.PB.call(this)
};o.JB=function(){
    return this.fn==pA?16:oA.z.JB.call(this)
};var qA="KIX-0-system-stretchbox";function xpa(a){
    return a.fn==pA||a.fn==qA
}var awa="i_cid",bwa="i_src";o.Kb=function(a,b){
    switch(a){
        case awa:this.fn=b;break;case bwa:this.$x=b;break;default:oA.z.Kb.call(this,a,b)
    }
};
o.ce=function(a){
    var b=oA.z.ce.call(this,a),c;for(c in a)switch(c){
        case awa:b[c]=this.fn;break;case bwa:b[c]=this.$x
    }return b
};o.ia=function(){
    var a=oA.z.ia.call(this);a.i_cid=this.fn;a.i_src=this.$x;return a
};function rA(a,b,c){
    Ai.call(this,a,b);a:{
        a=c.ee_eo;switch(a.eo_type){
            case 0:a=new oA(a);break a;case 2:a=new nA(a);break a
        }a=j
    }this.a=a
}t(rA,Ai);var cwa="ee_eo";rA.prototype.Kb=function(a,b){
    switch(a){
        case cwa:this.a.update(b)
    }
};rA.prototype.ce=function(a){
    var b={};if(a=a.ee_eo)b.ee_eo=this.a.ce(a);return b
};rA.prototype.ia=function(){
    var a={};a.ee_eo=this.a.ia();return a
};rA.prototype.A=function(){
    rA.z.A.call(this);y(this.a);delete this.a
};function sA(a){
    this.a=Bh;this.update(a||{})
}t(sA,wh);var tA="eqs_p",dwa={
    lda:tA
};o=sA.prototype;var uA="$";o.aK=uA;o.fh=function(){
    return[Ug]
};o.Ef=function(){
    return i
};o.Wt=function(){
    return l
};o.Kb=function(a,b){
    switch(a){
        case tA:this.aK=b
    }
};o.ia=function(){
    var a={};a.eqs_p=this.aK;return a
};o.ea=function(a){
    switch(a){
        case tA:return this.aK
    }return sA.z.ea.call(this,a)
};o.Me=function(){
    return Ja(dwa)
};o.Ba=function(){
    return new sA(this.ia())
};Zh(function(){
    return new sA
});function vA(a){
    this.a=Gh;this.update(a||{})
}t(vA,wh);var wA="lgs_l",ewa={
    YV:wA
};o=vA.prototype;o.dD=j;o.Ef=function(){
    return i
};o.Kb=function(a,b){
    if(a==wA)this.dD=b;return j
};o.ia=function(){
    var a={};a.lgs_l=this.dD;return a
};o.ea=function(a){
    if(a==wA)return this.dD;return vA.z.ea.call(this,a)
};o.Me=function(){
    return Ja(ewa)
};o.Ba=function(){
    return new vA(this.ia())
};Zh(function(){
    return new vA
});function xA(a,b){
    rA.call(this,vu,a,b);this.update(b)
}t(xA,rA);o=xA.prototype;o.Eu=0;o.Fu=0;var fwa="pe_lo",gwa="pe_to";o.Kb=function(a,b){
    switch(a){
        case fwa:this.Eu=b;break;case gwa:this.Fu=b;break;default:xA.z.Kb.call(this,a,b)
    }
};o.ce=function(a){
    var b=xA.z.ce.call(this,a),c;for(c in a)switch(c){
        case fwa:b[c]=this.Eu;break;case gwa:b[c]=this.Fu
    }return b
};o.ia=function(){
    var a=xA.z.ia.call(this);a.pe_lo=this.Eu;a.pe_to=this.Fu;return a
};Ci.set(vu,function(a,b){
    return new xA(a,b)
});function yA(a,b){
    Am.call(this,a);this.b=b
}t(yA,Am);o=yA.prototype;o.Vs=j;o.zh=j;o.Ue=j;o.vj=j;o.AJ=l;o.Mb=function(a){
    yA.z.Mb.call(this,a);jm(dm.V(),tp,this.k7,this,undefined,undefined,i)
};o.ta=function(){
    yA.z.ta.call(this);var a=rm(this),b=this.a.R,c=this.a.K();a.a(c,vp,aq(b,this.i7,this)).a(c,Iv,aq(b,this.j7,this)).a(c,mq,aq(b,this.pR,this));(b=this.a.J)&&a.a(b,mq,this.pR);em(dm.V(),tp).pc()&&hwa(this)
};var zA="docs-bars";
function AA(a){
    if(!a.vj){
        var b=em(dm.V(),tp);if(!b.pc())return j;b=b.Vc;var c=b.l_(),d=a.P();a.vj=new c(undefined,undefined,d);a.Na(a.vj);a.vj.Z(l);(c=d.G(zA))&&a.vj.Ma(c);c=a.a;a.vj.EF(wp(c,b.jt()),c.b)
    }return a.vj
}o.Aa=function(a){
    this.zh&&this.zh.Aa(a);this.Ue&&this.Ue.Aa(a);this.vj&&this.vj.Aa(a)
};var BA="docs-menubar",iwa="docs-toolbar";
o.k7=function(){
    var a=eo(this.a),b=a.b,c=bm(em(dm.V(),tp)),d=this.P(),e=d.G(BA);if(e){
        this.zh=new (c.A_())(undefined,d);this.Na(this.zh)
    }if(b==3){
        b=c.V_();var g=s(c.z_(),this,a.VM,this.a.K());this.Ue=new b(g,!a.ue()&&a.RM,a.fF,a.Zb,a.SM&&a.Q,a.ha,new (c.W_()),undefined,d);this.Na(this.Ue)
    }this.zh&&wm(this.zh,e);this.Ue&&wm(this.Ue,d.G(iwa));this.qb&&hwa(this)
};var CA="kix-show-equation-toolbar";
function hwa(a){
    if(a.Ue){
        var b=bm(em(dm.V(),tp)),c=a.a;a.Ue.EF(wp(c,b.jt()),c.b,Ww(c,b.bx()),DA(c.K()))
    }b=eo(a.a);b.b==3&&b.o&&H(a.a.b,CA).fb(xf,a.b5,a);Yx(a)
}o.i7=function(a){
    a.o||Yx(this)
};o.pR=function(){
    Yx(this)
};o.j7=function(a){
    var b=eo(this.a);b.eb&&this.Ue&&a.zc.W()==gw&&a.zc.b==Gh&&this.Ue.dU();b.SM&&b.Q&&this.Ue&&a.zc.W()==gw&&a.zc.b==Eh&&this.Ue.cU(DA(this.a.K()))
};o.n2=function(){
    yf(H(this.a.b,bz))
};o.o2=function(a){
    var b={};b.ch=a.k;b.fndInc=a.o;b.fndBwd=a.b;yf(H(this.a.b,Lv),b)
};
function Yx(a){
    a.Ue&&!a.AJ&&a.Ue.j8(a.a.K())
}var jwa="handleToggleEquationToolbar_ called when an equation toolbar does not exist.";o.b5=function(){
    var a=AA(this);if(a){
        var b=!a.Ta();a.Z(b);H(this.a.b,CA).Ac(b);this.dispatchEvent(Il)
    }else this.a.R.log(Error(jwa))
};o.A=function(){
    yA.z.A.call(this);y(this.b);delete this.b;delete this.Vs;delete this.zh;delete this.Ue;delete this.vj
};function EA(a){
    this.b=a;this.a=[]
}t(EA,x);EA.prototype.fb=function(a,b,c,d){
    b=a.fb(b,c,d||this.b);this.a.push(a,b);return this
};function kwa(a){
    for(var b,c;c=a.a.pop();)(b=a.a.pop())&&!b.Bg&&b.uv(c)
}EA.prototype.A=function(){
    EA.z.A.call(this);kwa(this);delete this.b;delete this.a
};function lwa(a){
    return Ab(navigator.plugins,function(b){
        return b.name==a
    })
};function FA(a){
    this.R=a;this.a={};this.b=[]
}t(FA,x);FA.prototype.k=0;FA.prototype.A=function(){
    FA.z.A.call(this);delete this.a;delete this.b
};function GA(a){
    this.a=new Psa(a)
}t(GA,x);GA.prototype.b=l;GA.prototype.A=function(){
    GA.z.A.call(this);y(this.a);delete this.a
};function HA(a,b,c,d,e,g,h,k,m,n,p,r){
    Vx.call(this,a,b,c,d,e,g,h,k,n,p,r);this.ha=m;this.o=new Wf(15);this.Q=new Yz(ha,500,this);if(A)b.Xk?this.gR(j):this.N.a(b,ps,this.gR)
}t(HA,Vx);var mwa=Ec&&Nc(Ae),IA="1.9.2",JA=!(Ec&&Nc(IA));o=HA.prototype;o.vy=j;o.Hn=0;o.Aw=j;o.rK=1;o.K6=function(){
    this.xb&&this.wk()
};var KA="dblclick";
o.wk=function(){
    if(this.Ja.qb){
        var a=this.N,b=this.Ja.Qc;A&&a.a(b,KA,this.Y1);a.a(b,Ed,this.D6).a(b,$p,this.G6).a(b,Gq,this.J6).a(b,Fq,this.I6).a(sd(this.P()),Fq,this.v3).a(sd(this.P()),Gq,this.w3).a(this.o,Yf,this.q4);var c=eo(this.Ja.a);if(c.nM&&!Te(c)){
            a.a(b,At,this.E6);(b=this.M&&this.M.P().G(zA))&&a.a(b,At,this.C1)
        }
    }else this.N.a(this.Ja,Jv,this.K6)
};o.gR=function(){
    this.N.a(ms(this.b),$p,this.t1)
};o.t1=function(){
    nwa(this)
};o.D6=function(a){
    if(Fd(a,0)||Fd(a,1)){
        this.a.o.stop();vs(this.J,3)
    }
};
o.C1=function(a){
    mwa&&a.stopPropagation();a.preventDefault()
};
o.E6=function(a){
    var b=this.K();if(!a.Jd){
        if(!Es(b.Ha())){
            var c=$x(this,a);if(c){
                c.W()==0&&Xx(this,0);Rx(b,c,i)
            }
        }a:{
            b=this.Ja;c=a.clientX;var d=a.clientY;if(eo(b.a).nM){
                if(!b.nj){
                    var e;e=em(dm.V(),tp);if(e.pc()){
                        e=e.Vc;var g=b.a;b.nj=new (e.YZ())(g,Ww(g,e.bx()),wp(g,e.jt()),b.M);b.Na(b.nj,i);g=eo(g);g.Bb&&b.nj.wg(e.R_());b.nj.wg(e.f_());g.F&&b.nj.wg(e.T_());b.nj.wg(Dt.V());e=i
                    }else e=l;if(!e)break a
                }b.nj.nE(c,d)
            }
        }mwa&&a.stopPropagation();a.preventDefault()
    }
};
o.Y1=function(a){
    owa(this,a);this.Hn=2;this.vy=a;this.Q.start()
};function owa(a,b){
    var c=$x(a,b);if(c&&c.W()==0)if(c=Vsa(a,c)){
        a.Aw=c;Yv(a.Ja,j)
    }vs(a.J,3);b.preventDefault()
}function pwa(a,b){
    var c=a.K(),d=qp(c,b),e=a.Aw;d<e.end?Rx(c,new J(Uk(d,c.fa())),i,new J(e.end)):Rx(c,new J(Qk(d,c.fa())),i,new J(e.start))
}function qwa(a,b){
    var c=a.K(),d=qp(c,b),e=a.Aw;d<e.end?Rx(c,new J(Yg(c.fa(),d)),i,new J(e.end+1,i)):Rx(c,new J(ch(c.fa(),d)+1,i),i,new J(e.start))
}var LA="selection";
o.I6=function(a){
    var b=this.k.a.a;if(b!=0){
        var c=rg.V();Ag(c,Yw,LA);a.preventDefault();if((a=$x(this,a,i))&&a.W()==0){
            var d=this.K(),e=d.Ha();switch(b){
                case 2:a.kb(e.Ua())||Rx(d,a,l);break;case 3:pwa(this,a);break;case 4:qwa(this,a);break;case 5:Xx(this,1);case 1:b=this.Ja;eo(b.a).b==3&&Vv(b,a)
            }
        }Cg(c,Yw,LA)
    }
};o.w3=function(a){
    if(Fd(a,0)){
        this.o.stop();Xx(this,0);JA&&this.J.Zm==3&&a.preventDefault()
    }
};
o.J6=function(a){
    if(Fd(a,0))if(this.k.a.a==5){
        var b=$x(this,a);if(b){
            var c=this.K();c.Ha().Ua()!=b&&Rx(c,b,!a.Jd)
        }
    }else MA(this,a)
};function MA(a){
    var b=a.k.a.a;if(b==0||b==2||b==3||b==4)Yv(a.Ja,j)
}var rwa="imeCommit";function nwa(a,b){
    var c={};if(b&&b.W()==0)c.loc=b;a.dispatchEvent(new Zx(rwa,c,a))
}
o.G6=function(a){
    if(Fd(a,0)){
        var b=Ssa(this,a),c=this.Ja;if(c.Qc.clientWidth>=b.x&&c.Qc.clientHeight>=b.y){
            b=this.Hn;if(this.Q.mi!=0&&this.vy.clientX==a.clientX&&this.vy.clientY==a.clientY)if(b==1||b==3){
                owa(this,a);this.Hn=2
            }else{
                if((b=$x(this,a))&&b.W()==0){
                    b=this.K();var d=Sx(b);Rx(b,new J(d.end+1,i),i,new J(d.start),l,i);this.Aw=d;Yv(this.Ja,j)
                }vs(this.J,3);this.Hn=3
            }else this.Hn=1;b=this.Hn==1?vp:LA;d=rg.V();Ag(d,Yw,b);this.vy=a;this.Q.start();var e=this.k;Yv(this.Ja,j);var g=$x(this,a);if(g){
                e.b&&
                A&&nwa(this,g);if(g.W()==0){
                    e=this.K();if(this.Hn==2){
                        Xx(this,3);MA(this,a)
                    }else if(this.Hn==3){
                        Xx(this,4);MA(this,a)
                    }else if(swa(e,qp(e,g)))Te(eo(c.a))?Rx(e,g,i):Xx(this,5);else if(Xha(e,g))Rx(e,g,i,g.shift(1));else{
                        Xx(this,2);MA(this,a);Rx(e,g,!a.Jd)
                    }
                }else Rx(this.K(),g,i)
            }vs(this.J,3);JA||a.preventDefault();Cg(d,Yw,b)
        }JA&&a.preventDefault()
    }
};
o.v3=function(a){
    var b=this.k.a.a;if(b!=0){
        var c=Tsa(a),d=this.Ja,e=d.VJ,g=d.JD,h=Tv(d),k=Sv(d);if(c.x>e&&c.x<e+h&&c.y>g&&c.y<g+k)this.o.stop();else{
            var m=rg.V();Ag(m,Yw,LA);e=Math.min(Math.max(c.x-e,0),h);h=Math.min(Math.max(c.y-g,0),k);if(c.y<g){
                this.rK=1;this.o.start()
            }else if(c.y>g+k){
                this.rK=2;this.o.start()
            }if(c=d.Fb(e,h)){
                d=this.K();if(!c.kb(d.Ha().Ua())){
                    if(b==2)Rx(d,c,l);else if(c.W()==0)if(b==3)pwa(this,c);else b==4&&qwa(this,c);a.preventDefault()
                }
            }Cg(m,Yw,LA)
        }
    }
};
o.q4=function(){
    var a=this.rK==1;switch(this.k.a.a){
        case 1:var b=this.Ja,c=b.ff?b.ff.Ua():j;if(c&&c.W()==0)(a=b.Dc(c,a))&&Vv(b,a);break;case 2:case 3:case 4:b=this.Qa;a?Msa(b,l):Nsa(b,l)
    }
};o.A=function(){
    HA.z.A.call(this);y(this.o);delete this.o;delete this.vy;delete this.Aw
};function NA(a,b,c,d,e,g,h,k,m,n,p){
    Vx.call(this,a,b,c,d,e,g,h,k,m,n,p)
}t(NA,Vx);o=NA.prototype;o.CD=0;o.TE=l;o.zu=0;o.M6=function(){
    this.xb&&this.wk()
};var OA="touchmove",twa="touchstart",uwa="touchend",vwa="touchcancel";o.wk=function(){
    if(te){
        var a=this.N;if(this.Ja.qb){
            var b=td(this.P()),c=this.Ja.Qc;a.a(b,OA,this.X1).a(c,twa,this.g5).a(c,OA,this.f5).a(c,[uwa,vwa],this.e5).a(c,Ed,this.L6)
        }else a.a(this.Ja,Jv,this.M6)
    }
};o.X1=function(a){
    a.preventDefault()
};
o.g5=function(a){
    var b=a.Tc;this.CD=b.touches.length;this.TE=l;if(this.CD>1){
        Xx(this,2);wwa(this,b.touches);a.preventDefault()
    }else{
        Xx(this,6);this.zu=Zf(s(this.x8,this,b.touches[0]),1200,this)
    }
};o.f5=function(a){
    this.k.a.a==2&&wwa(this,a.Tc.touches);$f(this.zu);this.zu=0
};
o.e5=function(a){
    this.CD-=a.Tc.changedTouches.length;switch(this.k.a.a){
        case 2:if(this.CD==0){
            Xx(this,0);this.Ja.scrollIntoView(this.K().Ha().Ua())
        }break;case 6:$f(this.zu);this.zu=0;this.TE&&this.Ja.scrollIntoView(this.K().Ha().Ua());Xx(this,0)
    }
};o.L6=function(a){
    if(this.TE){
        vs(this.J,3);a.preventDefault()
    }else{
        (a=$x(this,a))&&Rx(this.K(),a,i);vs(this.J,3)
    }
};o.x8=function(a){
    if(this.zu>0){
        a=$x(this,a);if(!(!a||a.W()!=0)){
            Vsa(this,a);this.TE=i
        }
    }
};
function wwa(a,b){
    if(!(b.length<2)){
        var c=$x(a,b[0]);if(c){
            var d=$x(a,b[1]);d&&Rx(a.K(),c,i,d,l,i)
        }
    }
};function PA(a,b,c,d,e,g,h,k,m,n,p,r,u,w,v,D,I,W,Q,ka,ra,Gb){
    Vx.call(this,b,c,d,r,e,g,h,k,v,ka,D);this.Q=m;this.Bb=n;this.ha=p;this.Fa=u;this.Oa=I;this.jb=W;this.o=Q;this.Ia=ra;this.eb=new EA(this);jm(dm.V(),tp,s(this.x6,this,a,w,c),this,undefined,undefined,Gb)
}t(PA,Vx);var xwa=[];o=PA.prototype;o.Yx=j;o.oq=j;o.ah=j;o.eq=j;o.Sw=j;o.Vy=j;o.xs=j;o.Yy=j;o.Pj=j;o.bp=j;o.uI=j;o.dB=0;o.DF=l;var ywa=["selectAll",LA],zwa="receiveMutations";
function Awa(a,b){
    a.Yx=b;var c=a.a;if(!c.nq){
        c.nq=b.$m;c.N.a(c.nq,zwa,aq(c.R,c.Z3,c));if(c.k&&c.k.length>0){
            c.nq.wK(c.k);c.k=j
        }
    }
}o=PA.prototype;o.hE=function(a){
    this.oq=a;this.xs&&this.xs.hE(a)
};o.CT=function(a){
    a&&cga(this.F);this.ha.setActive(a);this.bp&&this.bp.setActive(a);if(this.Bb)this.Bb.setActive(a);else this.Q&&this.Q.setActive(a)
};
function Bwa(a){
    if(!a.DF){
        var b=a.N;b.a(a.K(),vp,a.r6).a(a.J,ci,a.u6);var c=a.ha;if(!a.Fa){
            b.a(c,fy,a.O2).a(c,gy,a.N1).a(c,hy,a.Z0).a(c,my,a.I2);a.Q&&b.a(a.Q,rwa,a.E2)
        }c.setActive(i);a.Q.setActive(i);a.DF=i
    }
}o.wk=function(){
    Bwa(this);this.Ra(F.Wi,this.L0);this.Ra(F.mA,this.t4);var a=this.N;a.a(this.b,Ef,this.D1);if(!this.Fa){
        this.Ra(F.Yi,this.M0);a.a(this.b,Gf,this.G1)
    }this.K().a.qV&&a.a(this.ha,hta,this.s4);jm(dm.V(),tp,this.N0,this,undefined,undefined,i)
};
var Cwa="kix-migration-accept",Dwa="kix-migration-decline",QA="menuHide",RA="open",Ewa="odt",Fwa="pdf",Gwa="rtf",Hwa="txt",Iwa="doc",Jwa="zip",SA="kix_tertiary";
o.N0=function(){
    var a=this.F,b=this.K().a,c=this.N;if(b.oba){
        var d=this.P(),e=d.G(Cwa);e&&c.a(e,Ed,this.s3);if(d=d.G(Dwa))b.Eq==Qe?c.a(d,Ed,this.t3):c.a(d,Ed,this.u3)
    }if(!this.Fa){
        this.Ra(H(a,xw),this.yi,l);this.Ra(H(a,Py),this.yi,l,0);this.Ra(H(a,Qy),this.yi,l,1);this.Ra(H(a,Ry),this.yi,l,2);b.eM&&this.Ra(H(a,Sy),this.yi,l,9);this.Ra(H(a,yw),this.yi,i);this.Ra(H(a,Bz),this.yi,i,3);this.Ra(H(a,Cz),this.yi,i,4);this.Ra(H(a,Dz),this.yi,i,5);this.Ra(H(a,Ez),this.yi,i,6);this.Ra(H(a,Fz),this.yi,i,7);
        this.Ra(H(a,Xz),this.f3);this.Ra(F.Jl,this.fC,hk);this.Ra(H(a,Uy),this.q1);this.Ra(H(a,Ct),this.K1);this.Ra(H(a,Vy),this.R1);this.Ra(F.Ev,this.q2);this.Ra(F.Fv,this.s2);this.Ra(H(a,vw),this.fQ,i);if(b.Oa){
            this.$e(H(a,Pw),this.R2);this.$e(H(a,yu),this.m5)
        }this.$e(H(a,mz),this.P2);if(b.ha){
            this.$e(H(a,Nw),this.U2);this.$e(H(a,Ow),this.T2)
        }b.xM&&this.$e(H(a,Bt),this.V2);this.Ra(H(a,wl),this.W2);this.Ra(H(a,Rw),this.Z2);this.Ra(F.Ml,this.fC,lk);this.Ra(H(a,wz),this.bC,2);this.Ra(H(a,xz),this.bC,1.5);
        this.Ra(H(a,zz),this.bC,1.15);this.Ra(H(a,Az),this.bC,1);this.Ra(H(a,ft),this.y3);this.Ra(H(a,wu),this.n5);this.Ra(H(a,ww),this.fQ,l);b.vA&&this.Ra(H(a,Wy),this.M3);this.Ra(F.$i,this.O0);this.Ra(H(a,Hz),this.dC,0);this.Ra(H(a,Gz),this.dC,1);this.Ra(H(a,Iz),this.dC,2);this.Ra(H(a,Jz),this.dC,3);this.Ra(H(a,up),this.b4);if(b.sA){
            this.$e(H(a,Xy),this.s6);this.Ra(H(a,Zy),this.hQ,l);this.Ra(H(a,$y),this.hQ,i);this.$e(H(a,az),this.p2);this.$e(H(a,Lv),this.t6)
        }b.YE&&this.$e(H(a,oz),this.h5);b.AL&&this.$e(H(a,
            pz),this.c5);b.tA&&this.Ra(H(a,tz),this.z2);b.eb&&this.Ra(H(a,vz),this.P0);b.Bb&&this.Ra(H(a,qz),this.Q0);b.xB&&this.Ra(H(a,sz),this.L3);b.iB&&this.Ra(H(a,Sw),this.X2);b.cF&&this.$e(H(a,uz),this.d5);d=this.R;e=this.M;var g=aq(d,this.v6,this);if(e){
            c.a(e,Il,aq(d,this.p1,this));e.Ue&&c.a(e.Ue,QA,g);AA(e)&&c.a(AA(e),QA,g);e.zh&&c.a(e.zh,RA,aq(d,this.w6,this)).a(e.zh,QA,g)
        }this.Ra(H(a,cz),this.Tp,0);this.Ra(H(a,ez),this.Tp,1);this.Ra(H(a,fz),this.Tp,2);this.Ra(H(a,gz),this.Tp,3);this.Ra(H(a,hz),this.Tp,
            4);this.Ra(H(a,iz),this.Tp,5);this.Ra(H(a,jz),this.Tp,6);this.Ra(H(a,Kz),this.TP,Hj);this.Ra(H(a,Lz),this.z4);this.Ra(H(a,Mz),this.TP,Jj);b.F&&this.$e(H(a,Mw),this.X4);b.Ye&&this.$e(H(a,Fy),this.O3);this.Ra(H(a,Eu),this.g4);d=H(a,qw);this.Ra(d,this.gQ,d,Nj);d=H(a,tw);this.Ra(d,this.gQ,d,Mj);this.Ra(H(a,Qz),this.I0);this.Ra(H(a,Rz),this.M1);this.Ra(H(a,Sz),this.p5);this.Ra(H(a,Nz),this.UP,Lj,i);this.Ra(H(a,Oz),this.UP,Lj,l);this.Ra(F.Lv,this.a4);this.Ra(F.Pv,this.fC,mk);this.Ra(F.Qv,this.O4);this.Ra(F.Rv,
            this.P4);this.Ra(F.oA,this.t2);this.Ra(F.nA,this.X0);this.Ra(F.Ql,this.fC,nk);this.Ra(F.Tv,this.j5);b.tM&&this.$e(H(a,Eva),this.Q3)
    }if(b.Od){
        this.Ra(H(a,Hy),this.Kt,Ewa);this.Ra(H(a,Iy),this.Kt,Fwa);this.Ra(H(a,Jy),this.Kt,Gwa);this.Ra(H(a,Ky),this.Kt,Hwa);this.Ra(H(a,Ly),this.Kt,Iwa);this.Ra(H(a,My),this.Kt,Jwa)
    }b.BL&&this.$e(H(a,Gy),this.S3);a=this.ha;if(!this.Fa){
        c.a(a,ita,this.L1).a(a,ey,this.i1).a(a,cy,this.R0).a(this.b,If,this.P3);this.Q&&c.a(this.Q,Wx,this.a2)
    }jm(dm.V(),SA,this.xX,this,undefined,
        undefined,i)
};var Kwa="google.kix",Lwa="ed";o.xX=function(){
    var a=this.K().a,b=bm(em(dm.V(),SA));if(a.Od)b.a()(this.jb,Kwa)||this.Ra(F.rk,this.T3);if(a.i9){
        this.bp=new (b.b())(this.F,this.b,this.K(),this.a,this.R,this.M,this.Ja,this.k,this.Qa,this.J,this.P());this.bp.setActive(this.xb);this.Fa||this.N.a(this.bp,Lwa,this.l2)
    }
};o.jK=function(){
    PA.z.jK.call(this);kwa(this.eb);this.DF=l
};var Mwa="Binding a non-existent action to function ";
function Nwa(a,b,c,d,e){
    if(b){
        e.unshift(c,a);c=s.apply(j,e);d=aq(a.R,s(a.q6,a,d,c),a);a.eb.fb(b,xf,d)
    }else a.R.log(Error(Mwa+c))
}o.$e=function(a,b){
    Nwa(this,a,b,l,Ob(arguments,2))
};o.Ra=function(a,b){
    Nwa(this,a,b,i,Ob(arguments,2))
};o.q6=function(a,b,c){
    a&&vs(this.J,3);b(c)
};o.v6=function(){};o.p1=function(){
    this.Ja.Ld()
};o.w6=function(){
    vs(this.J,2)
};var TA="apHeSty";o.Tp=function(a){
    var b={};b.styVal=a;this.a.execute(TA,b)
};o.Kt=function(a){
    this.Yx&&this.Yx.k(a)
};
o.fC=function(a){
    var b={};b.styProp=a;b.styVal=i;b.styTog=i;this.a.execute(Zz,b)
};o.p2=function(){
    var a=this.M;if(a)a:{
        if(!a.Vs){
            var b=em(dm.V(),tp);if(!b.pc())break a;b=b.Vc;var c=new (b.p_())(a.P());a.Na(c,i);rm(a).a(c,b.hP().bF,a.n2).a(c,b.hP().nV,a.o2);a.Vs=c
        }a.Vs.Ab||a.Vs.Z(i);a.Vs.focus()
    }
};o.s6=function(){
    if(!this.Sw)this.Sw=new (bm(em(dm.V(),tp)).n_())(this.F,this.P());UA(this.o,this.Sw)
};var VA="fr";
o.t6=function(a){
    var b={};b.fndFS=a.ch;b.fndMC=!!a.mc;b.fndBwd=!!a.fndBwd;b.fndInc=!!a.fndInc;this.a.execute(VA,b)
};o.hQ=function(a,b){
    var c={};c.fndFS=b.ch;c.fndMC=!!b.mc;c.rplW=b.rplW;c.rplA=a;this.a.execute(VA,c)
};o.r6=function(){
    this.Fa&&Owa(this,i)
};o.u6=function(a){
    Owa(this,a.state==3)
};function Owa(a,b){
    if(b&&a.Fa&&!Es(a.K().Ha()))a.b.setActive(l);else{
        var c=a.b;c.setActive(b);if(b)c.Yh();else!A&&c.tI&&ms(c).blur()
    }
}o.q2=function(a){
    var b={};b.styProp=jk;b.styVal=a;this.a.execute(Zz,b)
};
o.s2=function(a){
    var b={};b.styProp=kk;b.styVal=a;this.a.execute(Zz,b)
};o.TP=function(a,b){
    var c={};c[a]=b;WA(this,c,i)
};o.z4=function(a){
    var b={};b.ps_ifl=a.idtFL;b.ps_il=a.idtS;WA(this,b,i)
};o.UP=function(a,b){
    var c={};c[a]=b;WA(this,c)
};function WA(a,b,c){
    var d={};d.styMap=b;if(c)d.ignUnchVal=i;a.a.execute($z,d)
}var XA="apPaAlgn";o.dC=function(a){
    var b={};b.aPaAlign=a;this.a.execute(XA,b)
};
o.f3=function(){
    var a=this.K();var b=[],c=Tw(a);if(Ln(a,c)){
        c=a.Hc(Ih,c[0]);var d=c.Yb;if(d){
            switch(Ck(Hk(a.pb(d),c.Rb))){
                case 4:case 5:b.push(2);break;case 6:case 7:b.push(1)
            }b.push(0)
        }
    }c=Tw(a);c=a.Ka(Ih,c[0]);if(d=c.Yb){
        switch(Ck(Hk(a.pb(d),c.Rb))){
            case 3:a=String(1);break;case 4:a=Kn(1,i);break;case 5:a=Kn(1,l);break;case 6:a=Jn(1,i);break;case 7:a=Jn(1,l);break;default:a=sg
        }a=a
    }else a=z;c=s(this.g3,this);UA(this.o,new (bm(em(dm.V(),tp)).E_())(b,a,c,this.P()))
};var YA="rln";
o.g3=function(a){
    var b={};b.rn=a;this.a.execute(YA,b)
};var ZA="tb";o.yi=function(a,b){
    var c={};c.ordered=a;if(sa(b))c.bulGlyph=b;this.a.execute(ZA,c)
};var $A="indP";o.fQ=function(a){
    var b={};b.ind=a;this.a.execute($A,b)
};o.L0=function(){
    us(this.b,Df,ks)
};o.D1=function(){
    this.b.hq=aB(this.K());this.b.Yh()
};o.M0=function(){
    us(this.b,Ff,ks)
};o.G1=function(){
    this.b.hq=aB(this.K());var a={};a.dso=i;this.a.execute(gy,a);this.b.Yh()
};o.O0=function(){
    us(this.b,Hf,uoa)
};
o.P3=function(){
    a:{
        var a=this.b;if(a.Mg()||Joa(ms(a),a.b))a=this.b.hq;else{
            a=ms(a);if(!a)break a;a=Usa(this,a);this.b.hq=a
        }if(a){
            var b={};b.pstDocSl=a;yf(H(this.F,mz),b);this.b.Yh()
        }
    }
};o.P2=function(a){
    var b=em(dm.V(),tp);if(b.pc()&&this.Oa){
        b=b.Vc;var c={};c.dss=this.oq;c.pstDocSl=a.pstDocSl;c.pstEmEnIm=new (b.eP())(this.jb,this.K(),this.Oa,this.a,l);this.a.execute(Wk,c)
    }
};o.h5=function(){
    var a=em(dm.V(),tp);a.pc()&&UA(this.o,new (a.Vc.X_())(this.jb.Ge(),this.jb.Wf(),this.K().a.Nh))
};
o.c5=function(){
    if(this.dB==2)Pwa(this);else if(this.dB!=1){
        var a=em(dm.V(),tp);if(a.pc()){
            a=a.Vc.g_();this.dB=1;a.load(s(this.h$,this),this.P())
        }
    }
};o.h$=function(){
    this.dB=2;Pwa(this)
};function Pwa(a){
    var b=em(dm.V(),tp);b.pc()&&UA(a.o,new (b.Vc.h_())(a.K(),a.P()))
}var bB="apSty";o.P0=function(a){
    var b={};b.lgs_l=a;a={};a.styMap=b;a.type=Gh;this.a.execute(bB,a)
};var cB="apSpSug";o.Q0=function(a){
    var b={};b.ch=a;this.a.execute(cB,b)
};
o.d5=function(){
    var a=em(dm.V(),tp);a.pc()&&UA(this.o,new (a.Vc.i_())(this.K(),this.P()))
};var dB="apDocSty";o.R1=function(a){
    var b=a.mb,c=a.ml,d=a.mr,e=a.mt,g=l,h=Rs(this.K()),k={};if(b>=0&&b!=h.Fq){
        k.ds_mb=b;g=i
    }if(c>=0&&c!=h.Gq){
        k.ds_ml=c;g=i
    }if(d>=0&&d!=h.Hq){
        k.ds_mr=d;g=i
    }if(e>=0&&e!=h.Iq){
        k.ds_mt=e;g=i
    }b=a.ph;a=a.pw;if(b>0&&b!=h.ea(mi)){
        k.ds_ph=b;g=i
    }if(a>0&&a!=h.ea(li)){
        k.ds_pw=a;g=i
    }if(g){
        g={};g.styMap=k;this.a.execute(dB,g)
    }
};
o.M3=function(a){
    a=a?Gp(a):j;var b=Rs(this.K());if(a!=b.b.Sf()){
        b={};b.col=a;this.a.execute(dB,b)
    }
};o.T3=function(){
    pta(this.jb,s(this.e$,this))
};var Qwa=":showComments=",Rwa=":footnotesAsEndnotes=",Swa=":pageNumberLocation=";o.Q_=function(){
    var a=this.K().a,b=this.Pj,c=new P(a.k);b&&a.RU&&c.append(Qwa,b.oE,Rwa,b.CB,Swa,b.NG());return c.toString()
};var Twa="showComments",Uwa="footnotesAsEndnotes",Vwa="pageNumberLocation",Wwa="Chrome PDF Viewer",Xwa="attachment";
o.e$=function(){
    var a=[];if(this.Pj)a=[Twa,this.Pj.oE,Uwa,this.Pj.CB,Vwa,this.Pj.NG()];var b=l;if(lwa(Wwa)){
        a.push(Xwa,l);b=i
    }this.Yx&&this.Yx.k(Fwa,a,b)
};function Ywa(a){
    var b=em(dm.V(),tp);if(b.pc()){
        var c=a.K().a;return new (b.Vc.P_())(a.jb,c.PM,window.location.protocol,c.k,c.hC,c.eF)
    }return j
}o.R2=function(){
    if(this.ah=Ywa(this)){
        this.ah.Ke.a9(s(this.Q2,this));UA(this.o,this.ah)
    }
};o.m5=function(a){
    if(this.ah=Ywa(this)){
        var b=s(this.l5,this,a.eId);this.ah.Ke.p8(a.dId,b);UA(this.o,this.ah)
    }
};
var Zwa="handleInsertImageDialog_ called before APP module is loaded.";o.T2=function(){
    if(!this.eq){
        if(!em(dm.V(),tp).pc()){
            this.R.log(Zwa);return
        }this.eq=new (bm(em(dm.V(),tp)).H_())(this.K().a.mW,i);this.eq.haa(s(this.S2,this))
    }UA(this.o,this.eq)
};o.S2=function(a){
    if(this.Oa){
        var b=em(dm.V(),tp);if(b.pc()){
            var c=b.Vc;this.eq.Z(l);eB(this.Oa,s(function(d){
                c.F_()(a,this.jb,d,s(this.A2,this))
            },this))
        }
    }
};var fB="inInEnt";
o.Q2=function(a){
    if(a.close){
        this.ah.Z(l);var b=em(dm.V(),tp);if(b.pc()){
            b=b.Vc.wP()(a.b||a.size);var c=$wa(this,b.width,b.height),d=ze.V();b={};b.eo_type=2;b.i_wth=c.width/Me(d);b.i_ht=c.height/Me(d);b.d_revision=a.a;b.d_id=a.id;a={};a.ee_eo=b;b={};b.ePM=a;this.a.execute(fB,b)
        }
    }
};var gB="upEE";o.l5=function(a,b){
    this.ah.Z(l);var c={};c.d_id=b.id;c.d_revision=b.a;var d={};d.eId=a;d.eopm=c;this.a.execute(gB,d)
};o.A2=function(a,b,c,d){
    var e={};e.url=a;e.cosI=b;e.w=c;e.h=d;yf(H(this.F,Nw),e)
};
o.U2=function(a){
    var b=$wa(this,a.w,a.h),c=ze.V(),d={};d.eo_type=0;d.i_wth=b.width/Me(c);d.i_ht=b.height/Me(c);d.i_src=a.url;d.i_cid=a.cosI;a={};a.ee_eo=d;d={};d.ePM=a;this.a.execute(fB,d)
};var axa="Failed to calculate new position for image during resize.",hB="upEESize";o.g4=function(a){
    var b=a.eId,c=this.K().pb(b);if(c&&c.a){
        var d={};d.eId=b;d.size=a.size;if(c.W()==vu){
            b=a[dt];a=a[et];c=$ra(this.Ja,c.ra(),b,a);if(!c){
                this.R.log(Error(axa));return
            }d.pos=c
        }this.a.execute(hB,d)
    }
};
function $wa(a,b,c){
    a=Le(ze.V(),600);return b>a?new oc(a,Math.round(a/b*c)):new oc(b,c)
}o.X2=function(){
    var a=em(dm.V(),tp);if(a.pc()){
        var b=s(this.Y2,this),c=pl(this.K().Ha());c=c?this.K().fa().slice(c.start,c.end):z;UA(this.o,a.Vc.b_()(b,xwa,c,this.P()))
    }
};o.Y2=function(a,b){
    var c={};c.ch=a;this.a.execute(gA,c);xwa=b
};o.L3=function(a){
    var b=lA.V();Yva(b,a,i)
};var bxa="ignoreWhitelistChange";o.z2=function(a){
    var b=this.K();if(b.J){
        b=b.J;if(!b.a[a.toLowerCase()]){
            b.a[a.toLowerCase()]=i;b.dispatchEvent(bxa)
        }
    }
};
var iB="delL";o.K1=function(){
    this.a.execute(iB,{})
};o.V2=function(){
    var a=em(dm.V(),tp);if(a.pc()){
        var b=this.K();a=a.Vc;var c=new Ha(0,0),d=ol(b,c),e,g,h=l;if(d==0)if(d=hia(b,c)){
            if(d.W()==0){
                g=d.xd();e=b.fa().slice(c.start,c.end)
            }h=i
        }else{
            e=b.fa().slice(c.start,c.end);if(g=kia(e)){
                lia(this.F,g);return
            }
        }else if(d==1){
            e=b.fa().slice(c.start,c.end);h=nl(b.Ka(Hh,c.end));if(h.W()==0)g=h.xd();h=i
        }else g=e=z;h&&Rx(b,new J(c.start),i,new J(c.end+1));UA(this.o,new (a.x_())(b,this.F,!h,g,e,this.P()))
    }
};
var jB="inL";o.W2=function(a){
    this.a.execute(jB,a)
};var kB="kix-aC";o.x6=function(a,b,c){
    var d=bm(em(dm.V(),tp));b=this.uI=new (d.VZ())(c,this.K(),b,this.k.a,this.J,Te(a));if(!a.ue()&&a.RM){
        var e=d.WZ(),g=d.wP(),h=Ww(this.Ja.a,d.bx()),k=new (d.eP())(this.jb,this.K(),this.Oa,this.a,l);this.xs=new e(a.k,a.hC,h,b,this.K(),this.a,c,k,g,this.P());this.oq&&this.xs.hE(this.oq)
    }if(a=this.Ja.a.Q.a[kB]||j){
        this.Yy=new (d.I_())(a,this.K().a.iA,undefined,undefined,this.P());a=this.o;a.N.a(this.Yy,Xq,a.b);d.RZ()(this.Yy)
    }
};
var lB="inTOC";o.Z2=function(){
    this.a.execute(lB,{})
};var mB="rfrAuto";o.b4=function(a){
    this.a.execute(mB,a)
};o.s3=function(){
    var a=em(dm.V(),tp);if(a.pc()){
        a=a.Vc;var b=this.P();a=new (a.B_())(eo(this.Ja.a).jW,b);a.Ma(j);UA(this.o,a)
    }
};o.t3=function(){
    var a=em(dm.V(),tp);if(a.pc()){
        a=a.Vc;var b=this.P();a=new (a.C_())(eo(this.Ja.a).CL,b);a.Ma(j);UA(this.o,a)
    }
};o.u3=function(){
    window.location=eo(this.Ja.a).CL
};o.O3=function(){
    var a=em(dm.V(),tp);a.pc()&&UA(this.o,new (a.Vc.G_())(this.F,this.K(),this.P()))
};
o.S3=function(){
    var a=em(dm.V(),tp);if(a.pc()){
        a=a.Vc;if(!this.Pj)this.Pj=new (a.K_());UA(this.o,new (a.L_())(this.K(),this.Pj,this.P()))
    }
};o.X4=function(){
    var a=em(dm.V(),tp);a.pc()&&UA(this.o,new (a.Vc.U_())(this.F,this.K(),this.P()))
};o.X0=function(a){
    a=a?Gp(a):j;var b={};b.styProp=gk;b.styVal=a;this.a.execute(Zz,b)
};o.t2=function(a){
    var b={};b.styProp=ik;b.styVal=a;this.a.execute(Zz,b)
};o.P4=function(){
    var a={};a.styProp=ok;a.styVal=yk;a.styTog=i;this.a.execute(Zz,a)
};
o.O4=function(){
    var a={};a.styProp=ok;a.styVal=xk;a.styTog=i;this.a.execute(Zz,a)
};o.N1=function(a){
    var b={};b.delrW=a.a.delrW;b.delrP=a.a.delrP;this.a.execute(gy,b)
};var nB="delPE";o.L1=function(){
    this.a.execute(nB,{})
};o.Z0=function(a){
    var b={};b.delbW=a.a.delbW;b.delbL=a.a.delbL;b.view=this.Ja;this.a.execute(fA,b)
};o.i1=function(){
    this.a.execute(ey,{});oB(this)
};var pB="apTab";o.R0=function(a){
    var b={};b.sh=a.a.sh;this.a.execute(pB,b);oB(this)
};
o.O2=function(a){
    var b={};b.ch=a.a.ch;this.a.execute(gA,b);oB(this)
};var cxa="kix-appview-spinner",dxa="kix-appview-spin";o.s4=function(){
    var a=this.Ja;Rc(a.G(),cxa);a=a.G();var b=!Tc(a,dxa);Uc(a,dxa,b)
};var exa="Null args on event passed to handleImeInput_().";o.I2=function(a){
    a.a?this.a.execute(my,a.a):this.R.log(Error(exa))
};
o.E2=function(a){
    var b=this.ha;a=a.a.loc;if(b.k.b){
        a=a&&a.W()==0?a.a:b.Wm+ns(b.b).length;b.k.b=l;var c=b.Ja.a.k;if(b.K().a.a){
            yp(c,ly,0);c.addRange(ly,0,Number.MAX_VALUE);Ap(c)
        }else zp(c,ly);ky(b);Rx(b.K(),new J(a),i);Zf(b.IN,0,b)
    }
};o.bC=function(a){
    var b={};b.ps_ls=a;a={};a.styMap=b;this.a.execute($z,a)
};var qB="mvPE";o.y3=function(a){
    if(a=$ra(this.Ja,this.K().Ha().Ua().ra(),a[dt],a[et])){
        var b=ze.V(),c={};c.pe_lo=a.a/Me(b);c.pe_to=a.offsetTop/Me(b);b={};b.ePM=c;b.spi=a.b;this.a.execute(qB,b)
    }
};
var rB="upEEPos";o.n5=function(a){
    var b={};b.eId=a.eId;b.view=this.Ja;b.posd=a.posd;this.a.execute(rB,b)
};o.gQ=function(a,b){
    var c;if(a)c=a.Ec(vf);if(za(c)){
        var d={};d[b]=c;c={};c.styMap=d;this.a.execute($z,c)
    }
};var sB="clrFmt";o.q1=function(){
    this.a.execute(sB,{})
};o.a2=function(a){
    var b={};b.ch=a.a.ch;b.loc=a.a.loc;b.dss=this.oq;this.a.execute(Wx,b)
};o.l2=function(a){
    a=a.a.ch;var b={};b.dss=this.oq;b.pstDocSl=new Ao(a,[]);this.a.execute(Wk,b)
};
o.t4=function(){
    var a=rg.V();Bg(a,Yw,ywa);var b=this.K(),c=b.Wa();Rx(b,new J(al(b,c)+1),i,new J(Xo(b,c)+1,i),l,i);Dg(a,Yw,ywa)
};o.j5=function(){
    var a=rg.V();Ag(a,Yw,Lf);var b=this.a;if(b.a.length!=0){
        b.OA=l;var c=Ova(b,b.a);if(c){
            hA(b,c.YQ());b.b.unshift(c)
        }
    }Cg(a,Yw,Lf)
};o.a4=function(){
    var a=rg.V();Ag(a,Yw,Jf);var b=this.a;if(b.b.length!=0){
        var c=Ova(b,b.b);if(c){
            hA(b,c.XQ());b.a.unshift(c)
        }
    }else b.OA&&b.iD&&b.hD&&b.execute(b.iD,b.hD);Cg(a,Yw,Jf)
};var fxa="kix_debug";
o.Q3=function(){
    jm(dm.V(),fxa,this.Q9,this,l,l,i)
};o.Q9=function(){
    if(!this.Vy){
        var a=bm(em(dm.V(),fxa)),b=a.wea();a=new (a.xea())(this.K(),this.F,this.a,this.Qa,this.b,this.Ia);this.Vy=new b(a,this.P())
    }UA(this.o,this.Vy)
};o.I0=function(a){
    var b=a.spi,c=a.off,d={};d.tbs_al=a.aln;d.tbs_of=c;a={};a.ps_ts=jj(gj,b,d);b={};b.styMap=a;this.a.execute($z,b)
};var tB="delTS";o.M1=function(a){
    var b={};b.delI=a.spi;this.a.execute(tB,b)
};var uB="upTS";
o.p5=function(a){
    var b={};b.tSA=a.aln;b.tSI=a.spi;b.tSO=a.off;this.a.execute(uB,b)
};var vB="aC";function oB(a){
    var b=a.K();if(b.a.wL){
        var c=a.Ia,d=b.fa(),e=b.Wa()-1,g=bh(d,e),h=j;d=e<=0?l:jh(bh(d,e))||Qha.test(bh(d,e))||bh(d,e)in Rha||bh(d,e)in Sha;if(d)for(d=0;e=c.b[d];d++)if(e.Gb()){
            e=e.a;if(e.a.a(b)){
                h||(h=[]);h.push(e)
            }
        }if(c.a[g])for(d=0;e=c.a[g][d];d++)if(e.Gb()){
            e=e.a;if(e.a.a(b)){
                h||(h=[]);h.push(e)
            }
        }if(b=h){
            c={};c.aCR=b;a.a.execute(vB,c)
        }
    }
}
o.A=function(){
    y(this.a);PA.z.A.call(this);y(this.Q);delete this.Q;y(this.ha);delete this.ha;y(this.bp);delete this.bp;y(this.Ia);delete this.Ia;y(this.Bb);delete this.Bb;delete this.oq;y(this.ah);delete this.ah;y(this.Sw);delete this.Sw;y(this.eq);delete this.eq;y(this.Vy);delete this.Vy;y(this.Yy);delete this.Yy;y(this.eb);delete this.eb;y(this.xs);delete this.xs;delete this.Oa;delete this.jb;y(this.Pj);delete this.Pj;y(this.uI);delete this.uI
};
function gxa(a,b,c,d,e,g,h,k,m,n,p,r,u,w){
    var v=new GA(0),D=new Qx(d,e,h,v),I=new eA(d,e),W;W=new Ox(D,vc);var Q=new ay(vc);W=new iy(b,c,d,I,e,g,h,v,D,W,Q,w,n);Q=new FA(e);var ka,ra;if(te){
        ka=new NA(b,c,d,I,e,g,h,v,D,w,n);ra=j
    }else{
        ka=j;ra=new HA(b,c,d,I,e,g,h,v,k,D,w,n)
    }return new PA(a,b,c,d,e,g,h,v,ra,ka,W,I,k,m,D,n,p,r,u,w,Q)
};function wB(a){
    this.a=a;this.N=new he(this)
}t(wB,x);function UA(a,b){
    a.N.a(b,Xq,a.b);vs(a.a,2);b.Z(i)
}wB.prototype.b=function(){
    vs(this.a,3)
};wB.prototype.A=function(){
    wB.z.A.call(this);y(this.N);delete this.N;delete this.a
};function xB(){}t(xB,x);o=xB.prototype;o.xc=function(a,b,c,d,e){
    switch(b){
        case 3:this.Gh(a);case 2:this.H$(a)
    }this.cT(c);this.F$(d,e);this.TD(ju.V());eo(d).a&&this.z6(d.k)
};o.F$=ha;o.TD=ha;o.H$=ha;o.Gh=ha;o.cT=ha;o.z6=ha;function yB(){}t(yB,xB);var hxa="kix-insert-doco-discussion",ixa="Discussion",jxa="Insert discussion",kxa="docs-icon-comment",lxa="Ctrl+Alt+M";yB.prototype.Gh=function(a){
    G(a,hxa,ixa,jxa,kxa,lxa,undefined,i);Qf(a,F.SL)
};function zB(){}t(zB,xB);var AB="kix-insert-footer",mxa="Footer",nxa="Insert footer";zB.prototype.Gh=function(a){
    //G(a,AB,mxa,nxa)
};function BB(){}t(BB,xB);
var CB="kix-insert-header",oxa="Header",pxa="Insert header";BB.prototype.Gh=function(a){
    //G(a,CB,oxa,pxa)
};var qxa="add_cell_contents";function DB(a,b){
    this.a=qxa;this.b=a;this.index=b
}t(DB,kn);DB.prototype.k=function(){
    return 0
};DB.prototype.A=function(){
    DB.z.A.call(this);delete this.b
};var rxa="add_cell";function EB(a){
    this.a=rxa;this.index=a
}t(EB,kn);EB.prototype.k=function(){
    return 0
};function sxa(a){
    qm.call(this,a)
}t(sxa,eu);function FB(a){
    du.call(this,a,Mg)
}t(FB,du);FB.prototype.Bs=function(){
    return new sxa(this.a.P())
};FB.prototype.Hy=function(a){
    switch(bh(this.a.K().fa(),a.index)){
        case Mg:case Ng:case Lg:return j
    }return iu(ju.V(),a.index,a.Ub,this.a)
};var txa="remove_cell_contents";function GB(a){
    this.a=txa;this.b=a
}t(GB,kn);GB.prototype.k=function(){
    return 0
};GB.prototype.A=function(){
    GB.z.A.call(this);delete this.b
};var uxa="remove_cell";function HB(a){
    this.a=uxa;this.index=a
}t(HB,kn);HB.prototype.k=function(){
    return 0
};function IB(a){
    qm.call(this,a);this.a=[]
}t(IB,jn);IB.prototype.L=function(){
    this.wb(this.P().L(Si))
};var vxa="kix-rowrenderer-td",wxa="update_cell_properties";
IB.prototype.Ii=function(a){
    switch(a.W()){
        case rxa:var b=this.P(),c=b.L(es,vxa);this.a[a.index]?b.Rx(c,this.a[a.index]):b.appendChild(this.G(),c);Ib(this.a,a.index,0,c);break;case uxa:this.P().Ap(this.a[a.index]);Kb(this.a,a.index);break;case qxa:a.b.rb&&a.b.rb!=this&&a.b.rb.removeChild(a.b,i);this.Na(a.b);a.b.Ma(this.a[a.index]);break;case txa:a.b.rb==this&&this.removeChild(a.b,i);break;case wxa:if(!qa(a.width))this.a[a.J].style.width=a.width+L
    }
};function JB(){
    this.a=[]
}t(JB,x);o=JB.prototype;o.Yt=j;o.hR=0;o.AC=j;o.Ma=function(){
    if(this.Yt){
        for(var a=0,b;b=this.a[a];a++){
            this.Yt.Ii(b);y(b)
        }this.a.length=0
    }
};o.$a=function(){
    return this.Yt
};o.Pb=function(){
    return this.hR
};o.A=function(){
    for(var a=0,b;b=this.a[a];a++)y(b);delete this.a;y(this.Yt);delete this.Yt;JB.z.A.call(this)
};function KB(a,b){
    this.a=wxa;this.J=a;this.width=b||j
}t(KB,kn);KB.prototype.k=function(a){
    if(a.W()==this.W()&&a.J==this.J){
        if(qa(a.width))a.width=this.width;return 1
    }return 0
};function LB(a,b){
    this.a=a;this.F=b;this.b=[];this.k=new Gm(s(this.l$,this));this.o=[]
}t(LB,ao);o=LB.prototype;o.ZD=l;function MB(a,b){
    if(!a.o[b]){
        a.o[b]=new JB;for(var c=0;c<a.b.length;c++)a.o[b].a.push(new EB(c))
    }return a.o[b]
}var xxa="RowView is deleting its own start marker.",yxa="Cell was inserted but has no renderer for its segment.",zxa="Inserting a segment in the middle of the view.";
o.xh=function(a,b,c,d,e,g){
    MB(this,c).AC=d;var h=fo(a);if(!(!h||h.index!=b)){
        var k=this.a.K();d=sia(k,b);if(h.type==fj){
            this.a.R.log(Error(xxa));this.ZD=l;go(a,b,-1)
        }else{
            var m=l;if(h.type==gj)m=this.ZD=i;h=k.Ka(Kh,b);kv(this.F,d,Le(ze.V(),h.Zk));ho(a.a,a.b.start,b,m?1:0)
        }
    }m=i;d=l;for(h=0;;){
        var n=fo(a);if(n){
            var p=n;k=h;var r=b,u=this.k.ea(k);if(p.index-r-1==u&&p.type==gj&&bh(this.a.K().fa(),p.index)==Mg){
                p=new FB(this.a);Ib(this.b,k,0,p);Im(this.k,k);p=0;for(r=void 0;r=this.o[p];p++)r.a.push(new EB(k))
            }k=
            a;r=n;n=h;u=b;if(n>=this.b.length)k=l;else{
                var w=this.k.ea(n);p=this.k.ea(n+1)-w;u=w+u+1;if(r.type==fj&&r.index==u&&r.b.fa().length>=p){
                    y(this.b[n]);Im(this.k,n);Kb(this.b,n);r=0;for(w=void 0;w=this.o[r];r++)w.a.push(new HB(n));go(k,u,-p);k=i
                }else k=l
            }if(k)continue
        }k=this.b[h];if(!k)break;if(k.ii()==0||k.ii()>c){
            k=k;n=h;p=a;var v=b;r=c;u=e;w=g;var D=MB(this,r),I=j;v=this.k.ea(n)+v+1;for(var W=r;;){
                var Q;(Q=MB(this,W).AC)||(Q=new nc(D.AC.x,Number.MAX_VALUE));Q=Q.Ba();Q.x=ev(this.F,n)-this.F.jg;D.a.push(new KB(n,
                    Q.x));Q=k.xh(p,v,W,Q,u,w);if(W==r)I=Q;else if(Q.k)I.k=i;for(var ka=k,ra=n,Gb=W,kd=Q,Gn=MB(this,Gb),PC=0;PC<kd.b.length;PC++)Gn.a.push(new GB(kd.b[PC]));if(kd.a==2)(ka=ka.$a(Gb))?Gn.a.push(new DB(ka,ra)):this.a.R.log(Error(yxa));if(Q.k)W++;else break
            }Im(this.k,n);k=I;if(k.k)d=i;k.F||(m=l)
        }h++
    }for(b=a=0;e=this.b[b];b++)a=Math.max(a,e.Pb(c));MB(this,c).hR=a;a=new $n;a.F=this.b.length>0&&m;b=l;for(e=0;g=this.b[e];e++){
        g=g.ii();if(g>c){
            b=i;if(g>c+1)a.o=i
        }
    }if(!(d=d)){
        if(d=a.o)d=!MB(this,c+1).AC;d=d
    }if(d)a.k=
        i;d=MB(this,c);if(!b&&(c!=0||!this.ZD)){
        a.a=3;for(e=c;d=this.o[e];e++){
            d.$a()&&a.b.push(d.$a());y(d)
        }this.o.length=c
    }else if(d.$a()){
        if(this.xq(c))a.a=1
    }else{
        b=new IB(this.a.P());d.Yt=b;a.a=2;this.o[c+1]&&this.o[c+1].$a()&&this.a.R.log(Error(zxa))
    }return a
};o.Aq=function(a,b){
    for(var c=0,d;d=this.b[c];c++){
        var e=this.k.ea(c)+b+1,g=this.k.ea(c+1)+b;io(a.b,new Ha(e,g))&&d.Aq(a,e)
    }
};o.xq=function(a){
    return MB(this,a).a.length>0
};o.$a=function(a){
    return MB(this,a).$a()
};
o.Pb=function(a){
    a=MB(this,a).Pb();if(a>0)a+=this.F.jg;return a
};o.Dc=function(){
    return j
};o.Nc=function(){
    return j
};
o.Fb=function(a,b,c,d,e){
    var g;var h=this.F;if(c<0)g=0;else{
        h.Jw&&dv(h);for(var k=g=0;k<h.a.length;k++){
            var m=h.a[k];if(c<g+m)break;g+=m
        }g=Math.min(k,h.a.length-1)
    }h=-1;for(k=0;g-k>=0||g+k<this.b.length;k++){
        m=g-k;if(this.b[m]&&this.b[m].ii()>b){
            h=m;break
        }m=g+k;if(this.b[m]&&this.b[m].ii()>b){
            h=m;break
        }
    }k=this.b[h];if(!k)return j;if(h==g){
        g=fv(this.F,g);c=c-g
    }else c=h<g?Number.MAX_VALUE:0;return(a=k.Fb(a,b,c,d,e))?a.shift(this.k.ea(h)+1):j
};o.Rc=function(){
    return(this.ZD?1:0)+this.k.ea(this.b.length)
};
o.ii=function(){
    for(var a=0,b=0,c;c=this.b[b];b++)a=Math.max(a,c.ii());return a
};o.Zc=function(a){
    var b=qp(this.a.K(),a);if(b>this.Rc())return j;b=this.k.indexOf(b-1);var c=this.k.ea(b);return this.b[b].Zc(a.shift(-c-1))
};o.Gf=function(a,b,c){
    var d=qp(this.a.K(),a);if(d>b+this.Rc())return j;d=d-b-1;a.W()==0&&a.b&&d--;d=this.k.indexOf(d);var e=this.k.ea(d);if(a=this.b[d].Gf(a,b+e+1,c))a.a.x+=fv(this.F,d);return a
};o.Ma=function(a){
    MB(this,a).Ma();for(var b=0,c;c=this.b[b];b++)c.xq(a)&&c.Ma(a)
};
var Axa="Request for cell start index past the end of the row.";o.l$=function(a,b){
    if(a<0)return 0;if(a>=this.b.length){
        this.a.R.log(Error(Axa));return b+1
    }return b+this.b[a].Rc()
};o.ut=function(){
    return 0
};o.A=function(){
    for(var a=0;a<this.b.length;a++)y(this.b[a]);delete this.b;y(this.k);delete this.k;for(a=0;a<this.o.length;a++)y(this.o[a]);delete this.o;LB.z.A.call(this)
};function NB(a){
    qm.call(this,a)
}t(NB,eu);var Bxa="kix-tablerenderer";NB.prototype.L=function(){
    this.Qf=this.P().L(ds);this.wb(this.P().L(cs,Bxa,this.Qf))
};NB.prototype.cb=function(){
    return this.Qf
};function OB(a){
    du.call(this,a,Kg,Ng);this.M=new av(a.R)
}t(OB,du);o=OB.prototype;o.xh=function(a,b,c,d,e,g){
    var h=this.M,k=d.x;if(k!=h.Us){
        h.Us=k;cv(h,i)
    }h=this.M;k=oia(this.a.K(),b);if(k!=h.Hf){
        h.Hf=k;cv(h,i)
    }return OB.z.xh.call(this,a,b,c,d,e,g)
};o.nJ=function(a){
    ira(this.M,$u(this.a.K().Ka(Mh,a)))
};o.Bs=function(){
    return new NB(this.a.P())
};o.Hy=function(a,b,c){
    if(bh(this.a.K().fa(),a.index)==Lg){
        gra(this.M,c);return new LB(this.a,this.M)
    }return j
};o.wN=function(a){
    hra(this.M,a)
};
o.Pb=function(a){
    return OB.z.Pb.call(this,a)+this.M.jg
};function PB(){}PB.prototype.b=function(a,b,c){
    if(this.a(a,b,c.K()))return new OB(c);return j
};PB.prototype.a=function(a,b,c){
    return bh(c.fa(),a)==Kg
};function QB(){}t(QB,xB);QB.prototype.TD=function(a){
    a.register(new PB)
};var RB="kix-insert-table",SB="Insert table",Cxa="Delete table",Dxa="Insert row above",Exa="Insert row below",Fxa="Delete row",Gxa="Insert column left",Hxa="Insert column right",Ixa="Delete column",Jxa="Table properties...";QB.prototype.Gh=function(a){
    G(a,RB,SB,SB,undefined,undefined,new oc(0,0));G(a,Qw,SB,SB);G(a,Gw,Cxa);G(a,Jw,Dxa);G(a,Kw,Exa);G(a,Fw,Fxa);G(a,Hw,Gxa);G(a,Iw,Hxa);G(a,Ew,Ixa);G(a,Mw,Jxa);G(a,Lw,z);G(a,wv,z)
};var Kxa="add_embedded_object";function TB(a,b,c){
    this.a=Kxa;this.M=a;this.Fa=b;this.Oa=c
}t(TB,kn);TB.prototype.Cc=function(){
    return this.Fa
};TB.prototype.bc=function(){
    return this.Oa
};TB.prototype.A=function(){
    TB.z.A.call(this);delete this.M
};function UB(a){
    qm.call(this,a)
}t(UB,eu);var Lxa="kix-paragraphrenderer";UB.prototype.L=function(){
    this.wb(this.P().L(O,{
        "class":Lxa
    }))
};var Mxa="update_properties";UB.prototype.Ii=function(a){
    switch(a.W()){
        case Mxa:var b=a.ea(Nj);if(sa(b)&&this.G())this.G().style.marginTop=b+L;a=a.ea(Mj);if(sa(a)&&this.G())this.G().style.marginBottom=a+L;break;case Kxa:b=a.M;b.rb&&b.rb.removeChild(b,i);this.Na(b,i);b.G().style.position=Ri;Bm(b,a.Cc(),a.bc());break;default:UB.z.Ii.call(this,a)
    }
};function VB(a){
    Tt.call(this,a);this.M=new vo;this.J=[]
}t(VB,Tt);o=VB.prototype;
o.xh=function(a,b,c,d,e,g){
    Ut(this,c);for(var h=[],k=kp(this.a.K(),b),m=0;m<k.length;m++){
        var n;var p=k[m];n=c;var r=e,u=this.a.K().pb(p);p=this.a.o.a[p].Qg();r=new Hi(r.x+Le(ze.V(),u.Eu),r.y+Le(ze.V(),u.Fu),p.width,p.height);for(u=0;u<n;u++)r.top-=this.Pb(u);n=r.top>=0&&(this.Pb(n)==0||r.top<this.Pb(n))?r:j;if(n){
            r=g;u=k[m];p=n;var w=r.a.get(u);if(!Ii(p,w)){
                w&&r.k.push(new Ha(w.top,w.top+w.height));r.a.set(u,p);r.k.push(new Ha(p.top,p.top+p.height));r.b=j
            }bu(this,c,new TB(this.a.o.a[k[m]],n.left,
                n.top-e.y));h.push(k[m])
        }
    }if(this.J[c])for(m=0;m<this.J[c].length;m++){
        k=this.J[c][m];Db(h,k)||g.remove(k)
    }this.J[c]=h;return VB.z.xh.call(this,a,b,c,d,e,g)
};o.JT=function(){
    return i
};o.VR=function(a,b){
    var c=this.a.K(),d=b+this.Rc();c=fh(c.fa(),a.index-1);if(this.k.length==0||a.index==d&&!c)return new bo(this.a,this.M);return j
};o.Lm=function(a,b,c,d){
    a=ch(this.a.K().fa(),a);d=d;for(var e=0;e<b;e++)d+=this.Pb(e);return new qla(a,c,d)
};
o.Gf=function(a,b,c){
    if(a.W()==1){
        var d;a:{
            d=a.ra();for(var e=this.J.length-1;e>=0;e--)if(Db(this.J[e],d)){
                d=e;break a
            }d=-1
        }if(d!=-1){
            a=this.a.o.a[a.ra()];return new Nm(d,j,new nc(a.Cc()+2,a.bc()+2),i)
        }
    }return VB.z.Gf.call(this,a,b,c)
};o.Bs=function(){
    return new UB(this.a.P())
};function WB(){}WB.prototype.b=function(a,b,c){
    if(this.a(a,b,c.K()))return new VB(c);return j
};WB.prototype.a=function(a,b,c){
    return ch(c.fa(),a)<=b
};function XB(){}t(XB,xB);XB.prototype.TD=function(a){
    a.registerDefault(new WB)
};function YB(a,b){
    var c=b.P();qm.call(this,c);this.a=b;b.F.register(this.ra(),a)
}t(YB,eu);o=YB.prototype;o.Kj=l;var Nxa="kix-autogenregionrenderer";o.L=function(){
    this.wb(this.P().L(O,Nxa))
};o.N6=function(){
    var a={};a.spi=sp(this.a.F,this.ra());return a
};var Oxa="kix-autogenregionrenderer-highlighted";o.O6=function(){
    var a=this.a.K(),b=a.Wa(),c=sp(this.a.F,this.ra());a=a.fa().indexOf(Ig,c);b=b>c&&b<a;if(this.Kj!=b){
        this.Kj=b;H(this.a.b,up).Z(b);Uc(this.G(),Oxa,b)
    }
};
o.ta=function(){
    YB.z.ta.call(this);Te(eo(this.a))||jm(dm.V(),tp,this.P6,this,undefined,undefined,i)
};var Pxa="kix-autogenregionrenderer-reload-button";o.P6=function(){
    var a=bm(em(dm.V(),tp)),b=new (a.sP());this.Na(b,i);Rc(b.G(),Pxa);var c=this.a.K(),d=H(this.a.b,up);d.Z(this.Kj);wp(this.a,a.jt()).a(b,d,a.aP(),s(this.N6,this));rm(this).a(c,vp,this.O6)
};o.A=function(){
    this.a.F.unregister(this.ra());YB.z.A.call(this)
};function ZB(a){
    du.call(this,a,Hg,Ig)
}t(ZB,du);ZB.prototype.Bs=function(a){
    return new YB(a-1,this.a)
};ZB.prototype.Hy=function(a){
    return iu(ju.V(),a.index,a.Ub,this.a)
};function $B(){}$B.prototype.b=function(a,b,c){
    if(this.a(a,b,c.K()))return new ZB(c);return j
};$B.prototype.a=function(a,b,c){
    return bh(c.fa(),a)==Hg
};function aC(){}t(aC,xB);aC.prototype.TD=function(a){
    a.register(new $B)
};function bC(){}t(bC,jA);o=bC.prototype;o.No=i;o.Mo=i;o.dp=i;o.xv=i;var Qxa="stringReplacementChange";function cC(a,b){
    a.dp=b;a.dispatchEvent(Qxa)
}function dC(a,b,c,d){
    var e={};e.acSRKey=b.toLowerCase();e.acSRValue=c.toLowerCase();e.acSREnabled=d;a.a[b]=e
}
var eC="linksChange",fC="smartQuotesChange",Rxa="(c)",Sxa="\u00a9",Txa="(r)",Uxa="\u00ae",Vxa="tm",Wxa="\u2122",Xxa="c/o",Yxa="\u2105",Zxa="\u2026",$xa="1/2",aya="\u00bd",bya="1/3",cya="\u2153",dya="1/4",eya="\u00bc",fya="1/5",gya="\u2155",hya="1/6",iya="\u2159",jya="1/8",kya="\u215b",lya="2/3",mya="\u2154",nya="3/4",oya="\u00be",pya="2/5",qya="\u2156",rya="3/5",sya="\u2157",tya="4/5",uya="\u2158",vya="5/6",wya="\u215a",xya="3/8",yya="\u215c",zya="5/8",Aya="\u215d",Bya="7/8",Cya="\u215e",gC="stringReplacementMapChange";
o.update=function(a){
    if(ta(a)){
        var b=a[1];if(za(b)){
            b=!!b;if(this.Mo!=b){
                this.Mo=b;this.dispatchEvent(eC)
            }
        }b=a[2];if(za(b)){
            b=!!b;if(this.No!=b){
                this.No=b;this.dispatchEvent(fC)
            }
        }b=a[3];if(za(b)){
            b=!!b;this.dp!=b&&cC(this,b)
        }a=a[4];if(!a||!ta(a)){
            if(!this.a){
                this.a={};dC(this,Rxa,Sxa,i);dC(this,Txa,Uxa,i);dC(this,Vxa,Wxa,i);dC(this,Xxa,Yxa,i);dC(this,lc,Zxa,i);dC(this,$xa,aya,i);dC(this,bya,cya,i);dC(this,dya,eya,i);dC(this,fya,gya,i);dC(this,hya,iya,i);dC(this,jya,kya,i);dC(this,lya,mya,i);dC(this,
                    nya,oya,i);dC(this,pya,qya,i);dC(this,rya,sya,i);dC(this,tya,uya,i);dC(this,vya,wya,i);dC(this,xya,yya,i);dC(this,zya,Aya,i);dC(this,Bya,Cya,i);this.dispatchEvent(gC)
            }
        }else{
            this.xv=l;if(!this.a)this.a={};for(b=0;b<a.length;b++){
                var c=a[b];if(Ba(c)){
                    var d=c[1];if(wa(d)){
                        var e=c[2];if(wa(e)){
                            c=c[3];za(c)&&dC(this,d,e,!!c)
                        }
                    }
                }
            }this.dispatchEvent(gC)
        }
    }
};o.A=function(){
    bC.z.A.call(this);delete this.a
};function hC(){
    this.a=new bC
}t(hC,xB);hC.prototype.cT=function(a){
    iC(a,this.a,kB)
};hC.prototype.A=function(){
    hC.z.A.call(this);y(this.a);delete this.a
};function jC(){}t(jC,xB);var kC="kix-insert-bookmark",Dya="Bookmark",lC="kix-delete-bookmark",Eya="Delete bookmark";jC.prototype.Gh=function(a){
    G(a,kC,Dya);G(a,lC,Eya)
};function mC(){}t(mC,xB);var nC="kix-insert-comment",Fya="Comment",Gya="Insert comment",Hya="Delete Comment";mC.prototype.Gh=function(a){
    G(a,nC,Fya,Gya,kxa,lxa,undefined,i);G(a,dq,Hya,Hya,undefined,undefined,undefined,i);G(a,fq,z)
};function oC(a){
    this.b=a
}t(oC,xB);oC.prototype.a=j;var Iya="Show equation toolbar",pC="kix-insert-equation",Jya="Equation...",Kya="Insert equation",Lya="insert-equation",qC="kix-insert-function",Mya="Insert function";


oC.prototype.Gh=function(a){
    if(this.b)this.a=G(a,CA,Iya,Iya);
	//G(a,pC,Jya,Kya,Lya,undefined,undefined,i,undefined,i);
	G(a,qC,z,Mya)
};function rC(){}t(rC,xB);var sC="kix-insert-footnote",Nya="Footnote",Oya="Delete Footnote";rC.prototype.Gh=function(a){
    //G(a,sC,Nya);
	G(a,ot,Oya)
};function tC(){}t(tC,xB);tC.prototype.Gh=function(a){
    G(a,kz,lz,lz,cua)
};function uC(){}t(uC,xB);var vC="kix-update-heading-1",wC="kix-update-heading-2",xC="kix-update-heading-3",yC="kix-update-heading-4",zC="kix-update-heading-5",AC="kix-update-heading-6",BC="kix-update-normal-text";uC.prototype.Gh=function(a){
    CC(this,a,vC,1);CC(this,a,wC,2);CC(this,a,xC,3);CC(this,a,yC,4);CC(this,a,zC,5);CC(this,a,AC,6);CC(this,a,BC,0)
};var DC="Redefine style from selection";function CC(a,b,c,d){
    G(b,c,DC,DC,undefined,undefined,d,undefined,undefined,i)
};function EC(){}t(EC,xB);var FC="kix-insert-page-break",Pya="Page break (for printing)",Qya="insert-page-break";EC.prototype.Gh=function(a){
  //  G(a,FC,Pya,undefined,Qya)
};

function GC(a,b,c,d,e,g){
    this.F=b;this.b=a;this.J=c;this.R=d;this.o=e;this.k=g
}t(GC,x);GC.prototype.a=j;GC.prototype.gK=function(a){
    var b={};b[16384]=new XB;if(a.Mh)b[8192]=new aC;if(a.wL)b[1]=new hC;if(a.qA)b[2]=new jC;if(a.M)b[4]=new mC;if(a.od)b[16]=new yB;if(a.o)b[32]=new oC(a.b==3);if(a.Ia){
        b[256]=new BB;b[64]=new zB
    }b[512]=new tC;if(a.Fa)b[128]=new rC;if(a.uA)b[2048]=new EC;if(a.F)b[4096]=new QB;if(a.Q)b[1024]=new uC;this.a=b;for(var c in this.a)this.a[c].xc(this.b,this.F,this.J,this.o,this.k)
};
GC.prototype.A=function(){
    GC.z.A.call(this);delete this.b;delete this.k;delete this.o;delete this.R;delete this.a
};function HC(){
    this.N=new he(this)
}t(HC,Mga);o=HC.prototype;o.NH=i;o.YJ=l;o.Zm=j;o.s1=function(){
    vs(this,3)
};o.r1=function(){
    vs(this,A&&this.NH?2:1)
};o.u5=function(){
    if(A)this.NH=i;vs(this,2)
};o.t5=function(){
    if(A)this.NH=l;vs(this,1)
};function vs(a,b){
    if(a.Zm!=b){
        a.Zm=b;if(te)a.dispatchEvent(new di(a,b));else if(!a.YJ){
            Zf(a.BY,200,a);a.YJ=i
        }
    }
}o.BY=function(){
    this.YJ=l;if(qa(this.Zm))f(Error("The state should not be NULL"));this.dispatchEvent(new di(this,this.Zm))
};
o.A=function(){
    HC.z.A.call(this);y(this.N);delete this.N
};function Rya(a){
    this.a=a
}Rya.prototype.b=function(a){
    a.kj==Yw&&this.a.log(a.name,a.duration)
};function IC(){
    var a=s(this.b,this);window.KX_getEditStats=a
}ia(IC);IC.prototype.a=0;IC.prototype.k=function(a){
    if(a.kj==ny&&a.name==oy)this.a+=a.duration
};IC.prototype.b=function(){
    return eg({
        "0":this.a
    })
};var Sya="edit_new",Tya="edit",Uya="view",Vya="preview";function Wya(a,b){
    switch(a){
        case 3:return b?Sya:Tya;case 2:return Uya;case 1:return Vya;default:return j
    }
};function JC(){
    this.b={};this.k=new cc
}t(JC,x);function KC(a,b){
    gc(a.k,b);return a
}
JC.prototype.bind=function(a,b,c){
    this.b[a]=s(b,c||this);return this
};JC.prototype.a=function(a){
    var b=this.b[a],c=Array.prototype.slice.call(arguments,1);return b.apply(this,c)
};var Xya="onChildApiReady",Yya="getShouldSizeHeightToContent",Zya="setContainerHeight";function LC(){
    JC.call(this);KC(KC(KC(this,Xya),Yya),Zya)
}t(LC,JC);function $ya(){
    LC.call(this)
}t($ya,LC);var aza="getDocId",bza="setFocusState";function MC(){
    JC.call(this);KC(KC(this,aza),bza)
}t(MC,JC);function NC(a){
    MC.call(this);this.J=a;this.bind(aza,this.F).bind(bza,this.M)
}t(NC,MC);NC.prototype.F=function(){
    return this.J
};function OC(){
    this.a={}
}t(OC,x);OC.prototype.A=function(){
    OC.z.A.call(this);Ia(this.a,function(a){
        for(var b=a.IO.Oc(),c=0;c<b.length;c++){
            var d=b[c];try{
                delete a.rU[d]
            }catch(e){
                a.rU[d]=undefined
            }
        }
    })
};function cza(a){
    this.rU=a;this.IO=new cc
};var dza="DOCS_",QC="_";function RC(a,b){
    this.k=a;this.a=b;this.b=new OC;for(var c=window.parent,d=window.name,e=b.k.Ba().Oc(),g=0;g<e.length;g++){
        var h=e[g];b.bind(h,c[dza+(d?d+QC:z)+h])
    }
}t(RC,x);RC.prototype.xc=function(){
    var a=this.b,b=window,c=Qa(this.k.b),d;for(d in c){
        var e=c[d],g=dza+d,h=a,k=b,m=g,n=String(Ca(k));gc((h.a[n]||(h.a[n]=new cza(k))).IO,m);b[g]=e
    }this.a.a(Xya)
};RC.prototype.A=function(){
    RC.z.A.call(this);y(this.k);delete this.k;y(this.a);delete this.a;y(this.b);delete this.b
};function SC(a,b){
    NC.call(this,a);this.o=b
}t(SC,NC);SC.prototype.M=function(a){
    vs(this.o,a)
};SC.prototype.A=function(){
    SC.z.A.call(this);delete this.o
};function TC(a){
    this.k=a
}t(TC,x);o=TC.prototype;o.W=function(){
    return this.k
};o.lm=function(){
    return j
};o.QQ=function(){
    return i
};o.ia=function(){
    var a={};a.ty=this.k;return a
};o.shift=function(){};var UC=new zi;function VC(a){
    return UC.execute(a.ty,a)
}function WC(a,b){
    UC.set(a,b)
};function XC(a,b,c){
    this.k=aw;this.uj=a;this.F=b;this.o=c
}t(XC,TC);o=XC.prototype;o.ra=function(){
    return this.F
};o.Qj=function(){
    if(Ih==this.uj)return[];var a={};a.id=this.F;return[UC.execute(cw,a)]
};o.QQ=function(){
    return Ih!=this.uj
};o.ia=function(){
    var a=XC.z.ia.call(this);a.et=this.uj;a.id=this.F;a.epm=this.o;return a
};o.A=function(){
    XC.z.A.call(this);delete this.o
};WC(aw,function(a){
    return new XC(a.et,a.id,a.epm)
});function YC(){}t(YC,x);function ZC(a){
    this.b=a
}t(ZC,YC);ZC.prototype.Uf=function(){
    return this.b
};ZC.prototype.A=function(){
    ZC.z.A.call(this);y(this.b);delete this.b
};function $C(a,b,c,d){
    this.k=gw;this.b=a;this.o=b;this.J=c;this.F=d
}t($C,TC);o=$C.prototype;o.wc=function(){
    return this.o
};o.jf=function(){
    return this.J
};o.lm=function(a){
    a=a.Uf(this.b,this.o,this.J);return new ZC(a)
};o.Qj=function(a){
    var b=[];a=a.Uf(this.b,this.o,this.J).Lb();for(var c=nh(a),d=0;d<c.length;d++){
        var e=new $C(this.b,this.o+c[d],c[d+1]?this.o+c[d+1]-1:this.J,a[c[d]].ia());b.push(e)
    }return b
};
o.ia=function(){
    if(ai(this.b))return{};var a=$C.z.ia.call(this);a.st=this.b;a.si=this.o;a.ei=this.J;a.sm=this.F;return a
};o.shift=function(a){
    this.o+=a;this.J+=a;if(this.o<0||this.J<0)f(Error("Apply style mutation indices shifted to be negative."))
};o.A=function(){
    $C.z.A.call(this);delete this.F
};WC(gw,function(a){
    return new $C(a.st,a.si,a.ei,a.sm)
});function aD(a,b,c){
    this.o=a;this.b=b;this.k=c
}t(aD,YC);aD.prototype.A=function(){
    aD.z.A.call(this);delete this.b
};function bD(a){
    this.k=cw;this.o=a
}t(bD,TC);bD.prototype.ra=function(){
    return this.o
};bD.prototype.lm=function(a){
    var b=a.pb(this.o);if(b){
        a=Wo(a,this.o);return new aD(b.W(),b.ia(),a)
    }return j
};bD.prototype.Qj=function(a){
    var b=[],c=a.pb(this.o);if(!c)return[];a=Wo(a,this.o);var d={};d.et=c.W();d.id=this.o;d.epm=c.ia();c=UC.execute(aw,d);b.push(c);if(a>=0){
        d={};d.id=this.o;d.spi=a;c=UC.execute(fw,d);b.push(c)
    }return b
};bD.prototype.ia=function(){
    var a=bD.z.ia.call(this);a.id=this.o;return a
};
WC(cw,function(a){
    return new bD(a.id)
});function cD(a){
    this.a=a
}t(cD,YC);cD.prototype.A=function(){
    cD.z.A.call(this);y(this.a);delete this.a
};function dD(a,b){
    this.k=Zv;this.o=a;this.F=b
}t(dD,TC);o=dD.prototype;o.wc=function(){
    return this.o
};o.jf=function(){
    return this.F
};o.lm=function(a){
    a=Zo(a,this.o,this.F,i);return new cD(a)
};
o.Qj=function(a){
    var b=[],c=this.o,d=Zo(a,c,this.F,i),e={};e.ibi=c;e.s=d.fa();var g=UC.execute($v,e);b.push(g);for(var h=d.ji(),k=0;k<h.length;k++){
        var m=h[k],n=m.W(),p=$h(n);m=m.Lb();for(var r=nh(m),u=0;u<r.length;u++){
            var w=m[r[u]];e={};e.st=n;e.si=c+r[u];e.ei=p?this.o+r[u]:r[u+1]?this.o+r[u+1]-1:this.F;e.sm=w.ia();g=UC.execute(gw,e);b.push(g)
        }
    }d=d.Cd;for(var v in d){
        var D=v;mh(d[D],function(I,W){
            for(var Q in W){
                var ka=W[Number(Q)],ra=a.pb(ka);if(ra){
                    ra=ra.ia();e={};e.et=D;e.id=ka;e.epm=ra;g=UC.execute(aw,
                        e);b.push(g);ra=c+I;e={};e.id=ka;e.spi=ra;g=UC.execute(fw,e);b.push(g)
                }
            }return l
        })
    }return b
};o.ia=function(){
    var a=dD.z.ia.call(this);a.si=this.o;a.ei=this.F;return a
};o.shift=function(a){
    this.o+=a;this.F+=a;if(this.o<0||this.F<0)f(Error("Delete spacers mutation indices shifted to be negative."))
};WC(Zv,function(a){
    return new dD(a.si,a.ei)
});function eD(a,b){
    this.k=$v;this.a=a;this.o=b
}t(eD,TC);eD.prototype.fa=function(){
    return this.o
};eD.prototype.Qj=function(){
    var a=this.a,b={};b.si=a;b.ei=a+this.o.length-1;return[UC.execute(Zv,b)]
};eD.prototype.ia=function(){
    var a=eD.z.ia.call(this);a.ibi=this.a;a.s=this.o;return a
};var eza="Apply meta style mutation indices shifted to be negative.";eD.prototype.shift=function(a){
    this.a+=a;if(this.a<0)f(Error(eza))
};WC($v,function(a){
    return new eD(a.ibi,a.s)
});var fD="mlti";function gD(a){
    this.k=fD;this.o=a
}t(gD,TC);gD.prototype.Ud=function(){
    return this.o
};gD.prototype.Qj=function(){
    f(Error("Multi-mutations should never be undone."))
};gD.prototype.ia=function(){
    for(var a=gD.z.ia.call(this),b=[],c=0;c<this.o.length;c++)b.push(this.o[c].ia());a.mts=b;return a
};WC(fD,function(a){
    a=a.mts;for(var b=[],c=0;c<a.length;c++)b.push(VC(a[c]));return new gD(b)
});function hD(){
    this.k=oa
}t(hD,TC);hD.prototype.Qj=function(){
    return[]
};WC(oa,function(){
    return new hD
});function iD(a,b){
    this.k=b;this.o=a
}t(iD,TC);function fza(a){
    var b=[];a=a.snapshot;for(var c=0;c<a.length;c++){
        var d=VC(a[c]);b.push(d)
    }return b
}iD.prototype.A=function(){
    iD.z.A.call(this);delete this.o
};function jD(a){
    iD.call(this,a,iw)
}t(jD,iD);WC(iw,function(a){
    return new jD(fza(a))
});function kD(a){
    iD.call(this,a,hw)
}t(kD,iD);WC(hw,function(a){
    return new kD(fza(a))
});function gza(a){
    this.b=a
}t(gza,YC);function lD(a,b){
    this.k=fw;this.F=a;this.o=b
}t(lD,TC);o=lD.prototype;o.ra=function(){
    return this.F
};o.lm=function(a){
    a=Wo(a,this.F);return new gza(a)
};o.Qj=function(a){
    var b={};b.id=this.F;b.spi=Wo(a,this.F);return[UC.execute(fw,b)]
};o.ia=function(){
    var a=lD.z.ia.call(this);a.id=this.F;a.spi=this.o;return a
};o.shift=function(a){
    this.o+=a;if(this.o<0)f(Error(eza))
};WC(fw,function(a){
    return new lD(a.id,a.spi)
});function mD(a){
    this.b=a
}t(mD,YC);mD.prototype.A=function(){
    mD.z.A.call(this);delete this.b
};function nD(a,b){
    this.k=bw;this.F=a;this.o=b
}t(nD,TC);o=nD.prototype;o.ra=function(){
    return this.F
};o.lm=function(a){
    if(a=a.pb(this.F)){
        a=a.ce(this.o);return new mD(a)
    }return j
};o.Qj=function(a){
    if(a=a.pb(this.F)){
        a=a.ce(this.o);return[new nD(this.F,a)]
    }return[]
};o.ia=function(){
    var a=nD.z.ia.call(this);a.id=this.F;a.epm=this.o;return a
};o.A=function(){
    nD.z.A.call(this);delete this.o
};WC(bw,function(a){
    return new nD(a.id,a.epm)
});

var hza="Received a server message with an empty list of mutations that did not originate from a user session: ",iza="Received a server message with an empty list of mutations and a null cursor: ";

function oD(a,b){
    this.b=a.sid;this.J=!!a.catchup;this.Q=a.editedBy||j;this.M=isNaN(a.editedAt)?j:a.editedAt;var c=-1;this.k=j;var d=a.mutations;if(d){
        for(var e=[],g=0;g<d.length;g++){
            var h=d[g].rev;if(sa(h)&&h!=-1)c=h;e[g]=VC(d[g])
        }!this.b&&!this.J&&e.length==0&&b.log(Error(hza+a));this.k=e
    }this.o=sa(a.rev)?a.rev:c;if(sa(a.startRev))this.a=a.startRev;else if(this.o<1)this.a=this.o;else{
        c=this.o;d=this.k;if(!d||d.length==0)d=0;else{
            for(g=e=0;g<d.length;g++){
                if(d[g].W()==gw)if(ai(d[g].b))continue;e++
            }d=
            e
        }this.a=c-d+1
    }this.F=j;if(a.cursorLoc){
        d=a.cursorLoc;c=jza(d.cl);d=jza(d.sml);c=new pD(c);qD(c,d);this.F=c
    }!this.k&&!this.F&&b.log(Error(iza+a))
}
o=oD.prototype;

o.Bj=function(){//回傳作者
    return this.Q
};
o.yp=function(){
    return this.M
};o.Af=function(){
    return this.o
};o.Ud=function(){
    return this.k
};o.Ha=function(){
    return this.F
};function jza(a){
    var b=a.loc_type;switch(b){
        case 0:return new J(a.si,a.aps);case 1:return new mm(a.id);default:f(Error("Unrecognized cursor type field "+b))
    }
};function rD(){
    this.b=[];this.k=[]
}t(rD,x);rD.prototype.a=j;function kza(a,b,c){
    a.a?c(a.a.mf(b)):a.b.push({
        path:b,
        M$:c
    })
}function ypa(a,b,c,d){
    kza(a,b,function(e){
        d&&e.Qi(d);e.ek(c).sf()
    })
}function eB(a,b){
    a.a?b(a.a):a.k.push(b)
}rD.prototype.A=function(){
    rD.z.A.call(this);delete this.a;delete this.b;delete this.k
};var lza="checking",mza="noupdate",nza="downloading",sD="progress",oza="updateready",pza="cached",qza="obsolete";function tD(){
    this.a=window.applicationCache;this.N=new he(this);this.b=new Tl(this.V3,3E3,this);this.N.a(this.a,lza,this.n1).a(this.a,lm,this.T6).a(this.a,mza,this.D3).a(this.a,nza,this.Z1).a(this.a,sD,this.b.XG,l,this.b).a(this.a,oza,this.o5).a(this.a,pza,this.h1).a(this.a,qza,this.E3)
}t(tD,x);o=tD.prototype;o.n1=function(){};o.D3=function(){};o.Z1=function(){};o.V3=function(){};
o.o5=function(){};o.h1=function(){};o.E3=function(){};o.T6=function(){};o.A=function(){
    tD.z.A.call(this);delete this.a;y(this.N);delete this.N;y(this.b);delete this.b
};function uD(a,b,c,d,e){
    this.U6=a;this.o=b;this.k=c;this.b=d;this.a=e
}uD.prototype.Bj=function(){
    return this.k
};uD.prototype.yp=function(){
    return this.b
};uD.prototype.Ud=function(){
    return this.a
};function vD(){
    this.b=[]
}t(vD,x);vD.prototype.a=j;vD.prototype.k=l;function wD(a,b,c){
    if(a.a)wD(a.a,b,c);else{
        if(c){
            a.b=[];a.k=i
        }a.b.push(b)
    }
}vD.prototype.A=function(){
    vD.z.A.call(this);delete this.a;delete this.b
};function xD(){
    this.a=new vD
}t(xD,x);xD.prototype.b=l;xD.prototype.o=j;xD.prototype.k=j;function rza(a){
    if(a.k)a.k.write([a.o],ha);else a.b=i
}xD.prototype.A=function(){
    xD.z.A.call(this);delete this.o;delete this.k;this.a.wa();delete this.a
};var yD="test";function zD(){
    try{
        var a=window.localStorage;if(a&&(ve||we||A)){
            a.setItem(yD,yD);if(a.getItem(yD)==yD){
                a.removeItem(yD);if(a.getItem(yD)==j)return i
            }
        }
    }catch(b){}return l
};function AD(a,b,c){
    this.k=a;this.b=!!b;this.a=c||j;if(c){
        c.fb(xf,this.pQ,this);c.Ac(this.b)
    }
}t(AD,jA);o=AD.prototype;o.pQ=function(){
    this.zb(!this.b)
};o.zb=function(a){
    sza(this,a);this.dispatchEvent(new kA(this,{
        name:this.k,
        vz:a
    }))
};var BD="booleanPreferenceChange";function sza(a,b){
    if(a.b!=b){
        a.b=b;a.a&&a.a.Ac(!!b);a.dispatchEvent(BD)
    }
}o.ea=function(){
    return this.b
};o.update=function(a){
    ya(a)&&sza(this,a)
};o.A=function(){
    AD.z.A.call(this);this.a&&this.a.rf(xf,this.pQ,this);delete this.a
};function CD(a){
    this.a=a||ze.V()
}t(CD,x);ia(CD);CD.prototype.A=function(){
    CD.z.A.call(this);delete this.a
};var DD="text/css",ED="head";function FD(a,b){
    var c=b?b.a:document,d=c.createElement(dd);d.type=DD;c.getElementsByTagName(ED)[0].appendChild(d);if(d.styleSheet)d.styleSheet.cssText=a;else{
        a=c.createTextNode(a);d.appendChild(a)
    }return d
};function Zn(a,b,c){
    this.a=a;this.k=q(b)?b:M;this.b=q(c)?c:M;this.Nx=this.a+st+this.k+st+this.b
}Zn.prototype.s_=function(){
    return this.Nx
};Zn.prototype.kb=function(a){
    return sa(a)&&sa(a.s_)&&this.Nx==a.Nx
};function GD(a){
    this.a=this.ya=a;this.Hb=j
}t(GD,x);function HD(){
    if(ID==j){
        var a=id(xe,{
            style:ye
        });document.body.appendChild(a);ID=new GD(a)
    }return ID
}var ID=j,tza="font-family:'",uza="',",vza="font-family:",wza="_,sans,serif,arial,helvetica;font-weight:",xza=";font-style:";function JD(a,b,c){
    jd(a.ya);var d=a.Hb?Vc(pd(a.Hb)):Vc();b=d.L(xe,{
        style:(b.a!=z?tza+b.a+uza:vza)+wza+b.k+xza+b.b
    },c);d.appendChild(a.ya,b);d=a.ya.offsetWidth;c=a.ya.offsetHeight;a.ya.removeChild(b);return new oc(d,c)
}
GD.prototype.A=function(){
    GD.z.A.call(this);ld(this.a);delete this.a;delete this.ya;delete this.Hb
};function yza(a,b,c,d){
    this.k=a;this.b=b;this.o=c;this.hc=d;this.a={}
}var KD=j,LD=j;function MD(){
    if(LD==j)f(Error("The json wasn't set prior to creating the CssInstaller.\nPlease call themes.fonts.CssInstaller.setJson before instantiatingCssInstaller."));if(KD==j)KD=new yza(LD.fontMenuLink,LD.fontMap,document.getElementsByTagName(ED)[0],Vc());return KD
};function ND(){
    this.a={}
}ND.prototype.contains=function(a){
    return q(this.get(a))
};ND.prototype.get=function(a){
    return this.a[a.Nx]
};function OD(a){
    this.dh=a;this.a=[]
}OD.prototype.kt=function(){
    return this.dh
};function zza(a,b){
    for(var c=b.length,d=[],e=0;e<c;e++){
        var g;a:{
            g=a.a.length;for(var h=0;h<g;h++)if(b.charCodeAt(e)>=a.a[h].Po&&b.charCodeAt(e)<=a.a[h].fp){
                g=i;break a
            }g=l
        }g||d.push(b.charAt(e))
    }return d.join(z)
}OD.prototype.kb=function(a){
    return sa(a)&&sa(a.kt)&&this.dh.kb(a.kt())
};var PD="loaded";function QD(a,b,c){
    B.call(this,PD,a);this.id=b;this.b=c
}t(QD,B);QD.prototype.A=function(){
    QD.z.A.call(this);delete this.id;delete this.b
};function RD(a,b,c){
    this.Po=a;this.fp=b;this.a=c
}RD.prototype.contains=function(a){
    if(q(a.Po)&&q(a.fp))return a.Po>=this.Po&&a.fp<=this.fp;return l
};RD.prototype.kb=function(a){
    return sa(a)&&q(a.Po)&&q(a.fp)&&this.Po==a.Po&&this.fp==a.fp
};function Aza(a,b,c,d,e,g,h){
    this.J=a;this.o=b;this.k=c;this.a=d;this.dh=e;this.rv=g;this.qd=h;this.b=0;this.N=new he(this)
}function Bza(a,b,c){
    return new Aza(function(){
        return new Wf(500)
    },200,300,HD(),a,b,c)
}function Cza(a){
    var b=JD(a.a,new Zn(z,a.dh.k,a.dh.b),a.rv.a),c=JD(a.a,a.dh,a.rv.a);if(pc(c,b)){
        c=a.J(a.o);a.N.a(c,Yf,s(a.F,a,b,c));c.start()
    }else Fc&&xc?Zf(s(function(){
        this.qd(this.dh,this.rv,i)
    },a),100):a.qd(a.dh,a.rv,i)
}
Aza.prototype.F=function(a,b){
    this.b++;var c=JD(this.a,this.dh,this.rv.a);c=!pc(c,a);var d=this.b>=this.k;if(c||d){
        b.stop();this.N.b(b,Yf);this.qd(this.dh,this.rv,c||!d)
    }
};function SD(a,b,c){
    this.k=a;this.dh=b;this.a=c;this.b=i
}SD.prototype.kt=function(){
    return this.dh
};SD.prototype.ra=function(){
    return this.k
};SD.prototype.pc=function(){
    return this.a.length==0
};function Dza(a){
    this.a=a
}var TD=j,UD=j;function VD(a,b,c,d,e){
    this.k=a;this.M=b;this.b=c;this.o=d;this.J=e;this.F=0;this.a={}
}t(VD,Vf);o=VD.prototype;o.sC=function(a,b){
    return Eza(this,a,b).length==0
};o.jI=function(a){
    return this.b.contains(a)
};function Eza(a,b,c){
    if(a.b.contains(b))return zza(a.b.get(b),c);return c
}o.load=function(a,b){
    return this.OR(a,Eza(this,a,b))
};
o.OR=function(a,b){
    var c;var d=this.M.a[a.a];if(d){
        d=d.unicodeRanges;var e=d.length;c=[];for(var g=0;g<e;g++){
            var h=d[g],k=new OD(new Zn(z));h=new RD(h.begin,h.end,h.testString);k.a.push(h);zza(k,b)!=b&&c.push(h)
        }c=c
    }else c=[];if(c.length==0)return-1;d=this.F++;e=Mb(c);g=[];for(var m in this.a){
        k=this.a[m];k.kt().kb(a)&&Hb(g,k.a)
    }m=g.length;for(k=0;k<m;k++){
        h=g[k];for(var n=e.length,p=0;p<n;p++)if(h.kb(e[p])){
            e.splice(p,1);break
        }
    }m=this.a[d];if(!sa(m)){
        m=new SD(d,a,c);this.a[d]=m
    }if(e.length>0){
        m=
        this.k;c=a.a;if(!m.a[c]){
            g=m.b[c];if(sa(g)){
                FD(g.css);(k=HD().Hb)&&FD(g.css,Vc(pd(k)));m.a[c]=i
            }
        }m=e.length;for(c=0;c<m;c++)Cza(this.o(a,e[c],s(this.k5,this)))
    }return d
};
o.k5=function(a,b,c){
    if(c){
        var d=this.b,e=d.get(a);if(!sa(e)){
            e=new OD(a);d.a[a.Nx]=e
        }e.a.push(b)
    }for(var g in this.a){
        d=this.a[g];if(d.kt().kb(a)){
            e=d;for(var h=b,k=c,m=e.a.length,n=0;n<m;n++)if(e.a[n].kb(h)){
                e.a.splice(n,1);break
            }if(!k)e.b=l;if(d.pc()){
                delete this.a[g];this.J.setTimeout(s(this.dispatchEvent,this,new QD(this,d.ra(),d.b)),0)
            }
        }
    }
};function WD(a,b,c,d,e){
    VD.call(this,a,b,c,d,e)
}t(WD,VD);WD.prototype.sC=function(a,b){
    var c=WD.z.sC;if(this.b.contains(a)&&b==Xa&&Ec)return i;return!Ec&&c.call(this,a,b)
};WD.prototype.jI=function(a){
    if(Ec){
        a:{
            for(var b in this.a)if(this.a[b].kt().kb(a)){
                a=i;break a
            }a=l
        }a=!a
    }else a=this.b.contains(a);return a
};WD.prototype.load=function(a,b){
    return WD.z.OR.call(this,a,b)
};function Fza(a,b){
    this.k=a.fontMenuLink;var c=a.fontMap,d;for(d in c)for(var e=b.length,g=0;g<e;g++)if(b[g]==d){
        delete c[d];break
    }this.a=c;c=[];for(var h in this.a)c.push(h);this.b=c
};function XD(a,b,c){
    B.call(this,Iv,a);this.zc=b;this.b=c
}t(XD,B);XD.prototype.A=function(){
    XD.z.A.call(this);delete this.zc;delete this.b
};function YD(a,b,c,d,e,g,h){
    this.Y=b;this.a=c;this.R=d;this.J=e;this.k=g;this.o=h||j;this.N=new he(this);this.b={};this.F={};b=e.b;for(c=0;d=b[c];c++)this.F[d.toLowerCase()]=d;this.N.a(this.Y,Iv,aq(this.R,this.Q6,this)).a(this.a,PD,aq(this.R,this.r2,this));jm(a,tp,this.R6,this)
}t(YD,Vf);
for(var ZD="Times New Roman",$D=[rk,ZD,"Arial Black","Arial Narrow","Comic Sans MS","Courier New","Verdana","細明體","新細明體","標楷體"],Gza={},aE=0;aE<$D.length;aE++){
    var Hza=$D[aE];Gza[Hza.toLowerCase()]=Hza
}var bE={
    serif:ZD,
    "sans-serif":rk,
    cursive:ZD,
    fantasy:"Comic Sans MS",
    monospace:"Verdana"
};o=YD.prototype;var Iza="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&/()=+*',.;:-_@{}[]\\~^\u00a0";
o.R6=function(){
    this.o=bm(em(dm.V(),tp)).nP();for(var a=this.J.b,b=[[M,M],[C,M],[M,E],[C,E]],c=0,d;d=a[c];c++)for(var e=0,g;g=b[e];e++){
        g=new Zn(d,g[0],g[1]);this.a.sC(g,Iza)||this.a.load(g,Iza)
    }
};o.JQ=function(){
    var a;a=ze.V().Xp;var b=HD();b.Hb=j;b.ya=b.a;b.ya=pd(a).body.firstChild;b.Hb=a;b=MD();a=Vc(pd(a));for(var c in b.a)FD(b.b[c].css,a)
};o.iR=function(){
    var a=HD();a.Hb=j;a.ya=a.a
};
o.r2=function(a){
    var b=this.b[a.id];if(b){
        delete this.b[a.id];if(this.o){
            a=this.o([b.zc],b.a).vs[0];if(!a)return
        }else a=b.zc;switch(a.W()){
            case $v:a=a;Io(this.k,a.a,a.fa().length);Ho(this.k);break;case gw:if(a.b==K){
                Io(this.k,a.wc(),a.jf());Ho(this.k)
            }
        }
    }
};function Yn(a){
    if(a)return Gza[a.toLowerCase()]||j;return j
}
function Jza(a,b,c,d){
    var e=d.rp;if(!(!e||Yn(e)||bE[e])){
        var g=new Zn(e,d.Wl?C:M,d.Uk?E:M);if(!a.a.sC(g,c)){
            g=a.a.load(g,c);if(g!=-1){
                if(b.W()==$v){
                    var h={};h.ts_bd=d.Wl;h.ts_it=d.Uk;h.ts_ff=e;b=new $C(K,b.a,b.a+c.length,h)
                }a.b[g]=new cE(b)
            }
        }
    }
}o.Q6=function(a){
    a=a.zc;for(var b in this.b)this.b[b].a.push(a);switch(a.W()){
        case $v:b=this.Y.Ka(K,a.a);Jza(this,a,a.fa(),b);break;case gw:if(a.b==K){
            b=this.Y.fa().slice(a.wc(),a.jf());var c=this.Y.Ka(K,a.wc());Jza(this,a,b,c)
        }
    }
};
function lka(a,b){
    var c=xha(b),d=c.fontFamily,e=new Zn(d,c.fontWeight,c.fontStyle);if(!Yn(d)&&!a.a.jI(e))c.fontFamily=rk;return cha(c)
}function cE(a){
    this.zc=a;this.a=[]
}t(cE,x);cE.prototype.A=function(){
    cE.z.A.call(this);delete this.zc
};function pD(a,b){
    this.F=this.a=this.o=this.k=a;this.J=b||z;this.b={}
}t(pD,x);o=pD.prototype;o.os=j;o.rz=j;o.pz=j;o.Ua=function(){
    return this.k
};function dE(a,b,c){
    a.o=a.k;a.k=b;a.os=j;if(!Ma(a.b)&&!c)a.b={}
}function qD(a,b){
    a.F=a.a;a.a=b;a.os=j
}function Es(a){
    return sa(pl(a))
}function pl(a){
    var b=a.a,c=a.k,d=c.jn(b);if(!a.os&&d!=0)a.os=new Ha((d<0?c:b).a,(d>0?c:b).a-1);return a.os
}function Rv(a){
    return a.k.jn(a.a)<=0?a.k:a.a
}
function Ux(a){
    var b=a.a;a=a.k;var c=a.jn(b);if(c==0)return a;return c>0?a.shift(-1):b.shift(-1)
}o.Dd=function(){
    return this.J
};o.ia=function(){
    var a=this.k.ia(),b=this.a.ia(),c={};c.cl=a;c.sml=b;return c
};o.Ba=function(){
    var a=new pD(this.k);qD(a,this.a);return a
};o.A=function(){
    pD.z.A.call(this);delete this.k;delete this.a;delete this.os;delete this.b
};function eE(a){
    this.b=a;this.a={};for(var b=0;b<a.length;b++)this.a[a[b]]=[]
}t(eE,x);function Kza(a,b,c,d){
    if(!a.a[b])return-1;a=a.a[b];c=Pb(a,c);if(c<0)c=-c-(d?2:1);return c>=0&&c<a.length?a[c]:-1
}eE.prototype.indexOf=function(a,b){
    return Kza(this,a,b,l)
};eE.prototype.lastIndexOf=function(a,b){
    return Kza(this,a,b,i)
};eE.prototype.remove=function(a,b){
    var c=b-a+1,d;for(d in this.a){
        for(var e=this.a[d],g=[],h=0;h<e.length;h++){
            var k=e[h];if(k<a)g.push(k);else k>b&&g.push(k-c)
        }this.a[d]=g
    }
};
eE.prototype.A=function(){
    eE.z.A.call(this);delete this.b;delete this.a
};var fE="\u0003\n";function gE(a,b){
    this.R=a;this.a=new eE(b);this.JC(0,fE)
}t(gE,Fg);gE.prototype.JC=function(a,b){
    var c=this.a,d=b.length,e;for(e in c.a){
        for(var g=c.a[e],h=[],k=0;k<g.length;k++){
            var m=g[k];h.push(m>=a?m+d:m)
        }c.a[e]=h
    }if((d=kh(c.b))&&d.test(b))for(d=kh(c.b);k=d.exec(b);){
        e=k[0];k=k.index;ph(c.a[e],k+a)
    }
};gE.prototype.remove=function(a,b){
    this.a.remove(a,b)
};gE.prototype.b=function(a){
    if(this.a.a[a])return(a=this.a.a[a]||j)?a:[];return gE.z.b.call(this,a)
};
gE.prototype.A=function(){
    gE.z.A.call(this);delete this.a
};function hE(a,b){
    gE.call(this,a,b||[]);this.k={}
}t(hE,gE);var Lza=RegExp(Fp,qb),Mza=RegExp(Oa,qb);o=hE.prototype;o.Sj=z;function Xg(a){
    return a.Sj.length
}function bh(a,b){
    return a.Sj.charAt(b)
}o.slice=function(a,b){
    return this.Sj.slice(a,b+1)
};o.indexOf=function(a,b){
    var c;c=this.a.a[a]?this.a.indexOf(a,b||1):j;return sa(c)?c:this.Sj.indexOf(a,b)
};o.lastIndexOf=function(a,b){
    var c;c=this.a.a[a]?this.a.lastIndexOf(a,sa(b)?b:Xg(this)):j;return sa(c)?c:this.Sj.lastIndexOf(a,b)
};
o.search=function(a,b,c,d){
    a=iE(this,a,b);if(a.length==0)return-1;if(!d)return a[c?a.length-1:0].start;if(c&&d<0||!c&&d>=Xg(this)-1)return-1;d=Pb(a,d,function(e,g){
        return e<g.start?-1:e>g.start?1:0
    });if(d>=0)return a[d].start;return(c=a[-d-(c?2:1)])?c.start:-1
};var Nza="[\\'\u2018\u2019]",Oza='[\\"\u201c\u201d]',Pza="gi";
function iE(a,b,c){
    var d=lb(b).replace(Lza,Nza).replace(Mza,Oza),e=(q(c)?c:1)?qb:Pza;c=d+Ue+e;if(a.k[c])return a.k[c];var g=[];for(d=RegExp(d,e);d.exec(a.Sj)!=j;)g.push(new Ha(d.lastIndex-b.length,d.lastIndex-1));return a.k[c]=g
}o.JC=function(a,b){
    hE.z.JC.call(this,a,b);var c=this.Sj;this.Sj=nb(c.slice(0,a),b,c.slice(a));this.k={}
};o.remove=function(a,b){
    hE.z.remove.call(this,a,b);var c=this.Sj;this.Sj=nb(c.slice(0,a),c.slice(b+1));this.k={}
};function Qza(a){
    this.a=!!a
}Qza.prototype.b=l;var Rza=RegExp("[\\u05BE\\u05C0\\u05C3\\u05C6\\u05D0-\\u05F4\\u07C0-\\u07EA\\u07F4-\\u07F5\\u07FA-\\u0815\\u081A\\u0824\\u0828\\u0830-\\u083E\\u200F\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB4F\\u0608\\u060B\\u060D\\u061B-\\u064A\\u066D-\\u066F\\u0671-\\u06D5\\u06E5-\\u06E6\\u06EE-\\u06EF\\u06FA-\\u070D\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\uFB50-\\uFD3D\\uFD50-\\uFDFC\\uFE70-\\uFEFC\\u202B\\u202E\\u0600-\\u0603\\u0660-\\u0669\\u066B-\\u066C\\u06DD\\u0300-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DE-\\u06E4\\u06E7-\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962-\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2-\\u09E3\\u0A01-\\u0A02\\u0A3C\\u0A41-\\u0A51\\u0A70-\\u0A71\\u0A75-\\u0A82\\u0ABC\\u0AC1-\\u0AC8\\u0ACD\\u0AE2-\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D-\\u0B56\\u0B62-\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C56\\u0C62-\\u0C63\\u0CBC\\u0CCC-\\u0CCD\\u0CE2-\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62-\\u0D63\\u0DCA\\u0DD2-\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EBC\\u0EC8-\\u0ECD\\u0F18-\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86-\\u0F87\\u0F90-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039-\\u103A\\u103D-\\u103E\\u1058-\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085-\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752-\\u1753\\u1772-\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927-\\u1928\\u1932\\u1939-\\u193B\\u1A17-\\u1A18\\u1A56\\u1A58-\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80-\\u1B81\\u1BA2-\\u1BA5\\u1BA8-\\u1BA9\\u1C2C-\\u1C33\\u1C36-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DFF\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099-\\u309A\\uA66F-\\uA672\\uA67C-\\uA67D\\uA6F0-\\uA6F1\\uA802\\uA806\\uA80B\\uA825-\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31-\\uAA32\\uAA35-\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7-\\uAAB8\\uAABE-\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26\\u202A\\u202D\\u202C]");function Sza(a,b,c,d,e,g){
    B.call(this,vp,a);this.k=b;this.F=c;this.b=d;this.o=e;this.Q=!!g
}t(Sza,B);function Tza(a,b){
    Ai.call(this,Bi,a);this.update(b)
}t(Tza,Ai);Ci.set(Bi,function(a,b){
    return new Tza(a,b)
});function Uza(a,b){
    Ai.call(this,zh,a,b)
}t(Uza,Ai);Ci.set(zh,function(a,b){
    return new Uza(a,b)
});function Vza(a,b){
    Ai.call(this,Dh,a,b)
}t(Vza,Ai);Ci.set(Dh,function(a,b){
    return new Vza(a,b)
});function Wza(a,b){
    rA.call(this,Yi,a,b)
}t(Wza,rA);function jE(a,b){
    return new Wza(a,b)
}Ci.set(Yi,jE);function kE(){
    this.a={};this.b={}
}t(kE,x);kE.prototype.pb=function(a){
    return this.b[a]
};function bl(a,b,c){
    return a.a[b]&&a.a[b][c]||[]
}function Xza(a,b){
    var c=-1,d=a.pb(b);if(d){
        d=a.a[d.W()];if(!d)return c;mh(d,function(e,g){
            if(Db(g,b)){
                c=e;return i
            }return l
        })
    }return c
}function Yza(a,b,c,d){
    var e={};a=a.a;var g=d?d:0,h;for(h in a){
        d=h;var k=a[d].slice(b,c+1),m=[];mh(k,function(n){
            m[n+g]=Mb(k[n]);return l
        });e[d]=m
    }return e
}
function lE(a,b,c){
    b=Yza(a,b,c);var d={},e;for(e in b)mh(b[e],function(g,h){
        for(var k=0;k<h.length;k++){
            var m=h[k];d[m]=Di(e,m,this.pb(m).ia())
        }return l
    },a);return d
}function Zza(a){
    var b={},c;for(c in a.b){
        var d=a.pb(c),e=d.W();Ih!=e||(b[c]=Di(e,c,d.ia()))
    }return b
}function mE(a,b){
    var c=a.pb(b);if(c){
        var d=a.a[c.W()];mh(d,function(e,g){
            Jb(g,b);g.length==0&&delete d[e];return l
        })
    }
}kE.prototype.shift=function(a,b){
    var c=this.a,d;for(d in c){
        var e=d;c[e]=oh(c[e],a,b)
    }
};
kE.prototype.splice=function(a,b){
    var c=b-a+1,d=this.a,e;for(e in d)d[e].splice(a,c)
};kE.prototype.A=function(){
    kE.z.A.call(this);for(var a in this.b)y(this.b[a]);delete this.b;delete this.a
};function nE(){
    this.a={}
}t(nE,Vf);nE.prototype.A=function(){
    nE.z.A.call(this);delete this.a
};function oE(a,b){
    this.o=a;this.R=b;this.a={};this.b={};this.k={}
}t(oE,x);oE.prototype.clear=function(a){
    if(a){
        delete this.a[a];delete this.b[a];delete this.k[a]
    }else{
        this.a={};this.b={};this.k={}
    }
};function pE(a,b,c,d){
    if(a=a.k[b])if(c=a[c])return c[d]||j;return j
}function qE(a,b,c,d){
    var e=a.o(b,c,d);$za(a,b,c,d,e);return e
}
function $za(a,b,c,d,e){
    var g=a.k[b];g||(g=a.k[b]=[]);var h=g[c];h||(h=g[c]=[]);h[d]=e;(e=a.a[b])||(e=a.a[b]=[]);if(g=e[c])ph(g,d);else e[c]=[d];(e=a.b[b])||(e=a.b[b]=[]);if(a=e[d])ph(a,c);else e[d]=[c]
}var aAa="Should never call StyleIntersectionCache#get with start index > end index.",bAa="The style intersection cache invariant has been broken. The end indices correspodning to ",cAa=" should not contain ",dAa="since the style intersection is not present in the style intersection cache map.";
oE.prototype.get=function(a,b,c){
    if(b>c){
        this.R.log(Error(aAa));return{}
    }var d=pE(this,a,b,c);if(d)return d;d=(d=this.a[a])?d[b]||j:j;if(d){
        var e=Pb(d,c);if(e>=0){
            this.log(bAa+b+cAa+c+dAa);this.clear();return qE(this,a,b,c)
        }e=-e-2;if(e<0)return qE(this,a,b,c);e=d[e];d=pE(this,a,b,e);d=this.o(a,e+1,c,Qa(d))
    }else{
        d=(d=this.b[a])?d[c]||j:j;if(d){
            e=Pb(d,b);if(e>=0){
                this.clear();return qE(this,a,b,c)
            }e=-e-1;if(e>=d.length)return qE(this,a,b,c);e=d[e];d=pE(this,a,e,c);d=this.o(a,b,e-1,Qa(d))
        }else return qE(this,
            a,b,c)
    }$za(this,a,b,c,d);return d
};oE.prototype.A=function(){
    oE.z.A.call(this);delete this.o;delete this.R;delete this.a;delete this.b;delete this.k
};function rE(a){
    this.a=xh;this.update(a||{})
}t(rE,wh);rE.prototype.Qa=0;var sE="autogen_type",eAa={
    Eda:sE
};o=rE.prototype;o.AA=function(){
    return l
};o.fh=function(){
    return[Hg]
};o.Ef=function(){
    return i
};o.Kb=function(a,b){
    switch(a){
        case sE:this.Qa=b
    }
};o.ia=function(){
    var a={};a.autogen_type=this.Qa;return a
};o.ea=function(a){
    switch(a){
        case sE:return this.Qa
    }return rE.z.ea.call(this,a)
};o.Mj=function(){
    return l
};o.Me=function(){
    return Ja(eAa)
};o.Ba=function(){
    return new rE(this.ia())
};Zh(function(){
    return new rE
});function tE(a,b,c){
    this.a=b;this.b=a;this.F=new dj;this.update(c||{})
}t(tE,wh);function Cp(a){
    return a.F.Oc()
}o=tE.prototype;o.Kb=function(a,b){
    a==this.b&&this.F.update(b)
};o.ia=function(){
    var a={};a[this.b]=this.F.ia();return a
};o.ea=function(a){
    if(a==this.b)return this.F;return tE.z.ea.call(this,a)
};o.vh=function(a){
    return a==this.b
};o.Me=function(){
    return[this.b]
};o.Xm=function(a,b){
    var c=this.ea(a);return a==this.b?Tb(c.nv(),b.nv()):tE.z.Xm.call(this,a,b)
};
o.A=function(){
    tE.z.A.call(this);y(this.F);delete this.F
};var fAa="cs_cids";function uE(a){
    tE.call(this,fAa,zh,a)
}t(uE,tE);uE.prototype.Mj=function(){
    return l
};uE.prototype.MB=function(){
    return Cp(this)
};uE.prototype.Ba=function(){
    return new uE(this.ia())
};Zh(function(){
    return new uE
});var gAa="das_a";function vE(a){
    tE.call(this,gAa,Ah,a)
}t(vE,tE);vE.prototype.Mj=function(){
    return l
};vE.prototype.Ba=function(){
    return new vE(this.ia())
};Zh(function(){
    return new vE
});function wE(a){
    this.a=Ch;this.update(a||{})
}t(wE,wh);var xE="eqfs_c",hAa={
    Mba:xE
};o=wE.prototype;o.IC=z;o.Ef=function(){
    return i
};o.Wt=function(){
    return l
};o.Kb=function(a,b){
    switch(a){
        case xE:this.IC=b
    }
};o.ia=function(){
    var a={};a.eqfs_c=this.IC;return a
};o.ea=function(a){
    switch(a){
        case xE:return this.IC
    }return wE.z.ea.call(this,a)
};o.Me=function(){
    return Ja(hAa)
};o.Ba=function(){
    return new wE(this.ia())
};Zh(function(){
    return new wE
});function yE(a){
    this.a=Dh;this.update(a||{})
}t(yE,wh);yE.prototype.o=z;var zE="fs_id",iAa={
    cca:zE
};o=yE.prototype;o.AA=function(){
    return l
};o.Ef=function(){
    return i
};o.Kb=function(a,b){
    switch(a){
        case zE:this.o=b
    }
};o.ia=function(){
    var a={};a.fs_id=this.o;return a
};o.ea=function(a){
    switch(a){
        case zE:return this.o
    }return yE.z.ea.call(this,a)
};o.Mj=function(){
    return l
};o.MB=function(){
    return[this.o]
};o.Me=function(){
    return Ja(iAa)
};o.Ba=function(){
    return new yE(this.ia())
};Zh(function(){
    return new yE
});function AE(a){
    this.b=new Vj;this.a=new rj;this.update(a||{})
}t(AE,vh);function jAa(a,b){
    switch(b){
        case K:return a.b;case Jh:return a.a;default:return Xh(b)
    }
}o=AE.prototype;o.ia=function(){
    var a={};a.sdef_ps=this.a.ia();a.sdef_ts=this.b.ia();return a
};var BE="sdef_ps",CE="sdef_ts";o.Kb=function(a,b){
    switch(a){
        case BE:this.a.update(b);break;case CE:this.b.update(b)
    }
};o.ea=function(a){
    switch(a){
        case BE:return this.a;case CE:return this.b
    }return AE.z.ea.call(this,a)
};
o.vh=function(a){
    return a==BE||a==CE
};o.Ba=function(){
    return new AE(this.ia())
};o.A=function(){
    AE.z.A.call(this);y(this.a);delete this.a;y(this.b);delete this.b
};function DE(a){
    var b={},c=Cha(a);if(rh(th(),Uh)){
        Yh(c,K,i);Wh(c,K,l,i)
    }b.sdef_ts=c;b.sdef_ps=rha(a);return new AE(b)
};function EE(a){
    this.a=Eh;this.Ia=DE(0);this.F=DE(1);this.M=DE(2);this.Q=DE(3);this.ha=DE(4);this.Fa=DE(5);this.Oa=DE(6);this.b=[];for(var b=0;b<=6;b++)FE(this,b);this.update(a||{})
}t(EE,wh);var GE="hs_nt",HE="hs_h1",IE="hs_h2",JE="hs_h3",KE="hs_h4",LE="hs_h5",ME="hs_h6",kAa={
    Xca:GE,
    jca:HE,
    kca:IE,
    lca:JE,
    mca:KE,
    nca:LE,
    oca:ME
};o=EE.prototype;o.Ef=function(){
    return i
};o.fh=function(){
    return[Jg]
};
o.Kb=function(a,b){
    switch(a){
        case GE:this.Ia.update(b);for(var c=0;c<=6;c++)FE(this,c);break;case HE:this.F.update(b);FE(this,1);break;case IE:this.M.update(b);FE(this,2);break;case JE:this.Q.update(b);FE(this,3);break;case KE:this.ha.update(b);FE(this,4);break;case LE:this.Fa.update(b);FE(this,5);break;case ME:this.Oa.update(b);FE(this,6)
    }
};
o.ia=function(){
    var a={};a.hs_nt=this.Ia.ia();a.hs_h1=this.F.ia();a.hs_h2=this.M.ia();a.hs_h3=this.Q.ia();a.hs_h4=this.ha.ia();a.hs_h5=this.Fa.ia();a.hs_h6=this.Oa.ia();return a
};o.ea=function(a){
    switch(a){
        case GE:return this.Ia;case HE:return this.F;case IE:return this.M;case JE:return this.Q;case KE:return this.ha;case LE:return this.Fa;case ME:return this.Oa
    }return EE.z.ea.call(this,a)
};o.vh=function(a){
    return a==GE||a==HE||a==IE||a==JE||a==KE||a==LE||a==ME
};
function NE(a,b,c){
    var d=a.b[b][c];if(d)return d;var e;if(d=a.b[0][c])e=d;else{
        d=jAa(a.ea(OE(0)),c);switch(c){
            case K:e=new Vj;break;case Jh:e=new rj;break;default:f(Error("Invalid style type: "+c))
        }e=Th(d,e);a.b[0][c]=e
    }if(b==0)return e;e=Th(jAa(a.ea(OE(b)),c),e);return a.b[b][c]=e
}function FE(a,b){
    var c={};c.text=j;c.paragraph=j;a.b[b]=c
}o.Mj=function(){
    return l
};o.Me=function(){
    return Ja(kAa)
};o.Ba=function(){
    return new EE(this.ia())
};
o.A=function(){
    EE.z.A.call(this);y(this.Ia);delete this.Ia;y(this.F);delete this.F;y(this.M);delete this.M;y(this.Q);delete this.Q;y(this.ha);delete this.ha;y(this.Fa);delete this.Fa;y(this.Oa);delete this.Oa;for(var a=0;a<=6;a++)y(this.b[a]);delete this.b
};function OE(a){
    switch(a){
        case 1:return HE;case 2:return IE;case 3:return JE;case 4:return KE;case 5:return LE;case 6:return ME;default:return GE
    }
}Zh(function(){
    return new EE
});function PE(){
    this.a=Fh
}t(PE,wh);o=PE.prototype;o.fh=function(){
    return[st]
};o.Ef=function(){
    return i
};o.Wt=function(){
    return l
};o.AA=function(){
    return l
};o.Kb=function(){
    return j
};o.ia=function(){
    return{}
};o.Me=function(){
    return[]
};o.Ba=function(){
    return new PE(this.ia())
};Zh(function(){
    return new PE
});function QE(a){
    this.a=Hh;this.update(a||{})
}t(QE,wh);var RE="lnks_link",lAa={
    jF:RE
};o=QE.prototype;o.Se=j;function nl(a){
    return a.Se
}o.Kb=function(a,b){
    switch(a){
        case RE:if(b){
            var c=b.lnk_type;if(this.Se&&(this.Se.W()==c||!c))this.Se.update(b);else{
                a:{
                    switch(b.lnk_type){
                        case 0:c=new il(b);break a
                    }c=j
                }this.Se=c
            }
        }else this.Se=j
    }
};o.ia=function(){
    var a={};a.lnks_link=this.Se?this.Se.ia():j;return a
};o.ea=function(a){
    switch(a){
        case RE:return this.Se
    }return QE.z.ea.call(this,a)
};o.vh=function(a){
    switch(a){
        case RE:return i
    }return l
};
o.Mj=function(){
    return l
};o.lw=function(){
    return l
};o.Me=function(){
    return Ja(lAa)
};o.qf=function(a){
    for(var b in a){
        var c=a[b];switch(b){
            case RE:if(c&&this.Se&&!this.Se.qf(c))return l;if(this.Se&&!c||!this.Se&&c)return l
        }
    }return i
};o.Xm=function(a,b){
    var c=this.ea(a);if(a==RE){
        if(c==b)return i;if(c&&!b||!c&&b)return l;return c==j&&b==j||c.kb(b)
    }else return QE.z.Xm.call(this,a,b)
};o.Ba=function(){
    return new QE(this.ia())
};Zh(function(){
    return new QE
});function SE(a){
    this.a=Lh;this.J=new dj;this.update(a||{})
}t(SE,wh);var TE="sc_ow",UE="sc_sugg",mAa={
    $ca:TE,
    Ada:UE
};o=SE.prototype;o.Ry=j;o.jR=function(){
    return i
};o.Kb=function(a,b){
    switch(a){
        case TE:this.Ry=b;break;case UE:this.J.update(b)
    }return j
};o.ia=function(){
    var a={};a.sc_ow=this.Ry;a.sc_sugg=this.J.ia();return a
};o.ea=function(a){
    switch(a){
        case TE:return this.Ry;case UE:return this.J
    }return SE.z.ea.call(this,a)
};o.vh=function(a){
    return a==UE
};o.Me=function(){
    return Ja(mAa)
};o.Ba=function(){
    return new SE(this.ia())
};
o.A=function(){
    SE.z.A.call(this);y(this.J);delete this.J
};Zh(function(){
    return new SE
});function VE(){
    this.a=[];this.b=[]
}t(VE,x);o=VE.prototype;o.get=function(a){
    return this.a[a]
};o.set=function(a,b){
    this.a[a]=b;ph(this.b,a)
};o.remove=function(a){
    delete this.a[a];Ub(this.b,a)
};function WE(a){
    return a.b
}o.shift=function(a,b){
    if(b){
        for(var c=this.b,d=this.a,e=[],g=0;g<c.length;g++){
            var h=c[g];if(h>=a){
                c[g]=h+b;e[h+b]=d[h]
            }else e[h]=d[h]
        }this.a=e
    }
};
o.splice=function(a,b){
    if(!(a>=this.a.length)){
        var c=this.b;if(c.length!=0){
            var d=Pb(c,a);d=d<0?-d-1:d;var e=Pb(c,a+b);e=e<0?-e-1:e;for(var g=e-d,h=[],k=[],m=this.a,n=0,p=0;p<d;p++){
                n=c[p];h[n]=m[n];k[p]=n
            }for(p=e;p<c.length;p++){
                n=c[p];h[n-b]=m[n];k[p-g]=n-b
            }h.length=Math.max(m.length,a+b)-b;this.a=h;this.b=k
        }
    }
};o.A=function(){
    VE.z.A.call(this);mh(this.a,function(a,b){
        y(b);return l
    });delete this.a;delete this.b
};function XE(){
    this.a={};this.b=[]
}t(XE,x);o=XE.prototype;o.set=function(a,b,c){
    YE(this,a).set(b,c)
};o.remove=function(a,b){
    YE(this,a).remove(b)
};o.Lb=function(a){
    return YE(this,a).a
};o.xc=function(a){
    nAa(this,a)
};function YE(a,b){
    a.a[b]||nAa(a,b);return a.a[b]
}function nAa(a,b){
    if(!a.a[b]){
        a.a[b]=new VE;a.b.push(b)
    }
}o.shift=function(a,b,c){
    YE(this,a).shift(b,c)
};o.splice=function(a,b,c){
    YE(this,a).splice(b,c)
};
o.A=function(){
    XE.z.A.call(this);for(var a=this.b,b=this.a,c=0;c<a.length;c++)y(b[a[c]]);delete this.a;delete this.b
};function ZE(a){
    this.b=a;this.a=new XE;this.o=[Jh,Ih];this.k=[];a=this.a;for(var b=[],c=oAa(this),d=0,e;e=c[d];d++){
        a.xc(e);if($h(e))b.push(e);else{
            var g=Xh(e);a.set(e,0,g);if(g.Yd>0)this.Cf=i
        }
    }for(d=0;c=b[d];d++){
        e=Xh(c);g=e.fh();if(Db(g,Jg)){
            a.set(c,0,e);if(e.Yd>0)this.Cf=i
        }if(Db(g,Xa)){
            a.set(c,1,e);if(e.Yd>0)this.Cf=i
        }
    }
}t(ZE,x);o=ZE.prototype;o.Cf=l;o.Lb=function(a){
    a=this.qt(a);if(!this.Cf)return a;var b=[];mh(a,function(c,d){
        if(d)b[c]=$E(this,d,c);return l
    },this);return b
};o.qt=function(a){
    return this.a.Lb(a)
};
function aF(a,b){
    var c=i;switch(b){
        case xh:c=a.b.Mh;break;case zh:c=a.b.M;break;case Ah:c=a.b.od;break;case Dh:c=a.b.Fa;break;case Bh:case Ch:c=a.b.o;break;case Gh:c=a.b.eb;break;case Lh:c=a.b.Bb;break;case yh:case Kh:case Mh:c=a.b.F
    }return c&&b in Nh
}function oAa(a){
    if(a.k.length==0)for(var b in Jga){
        var c=Jga[b];aF(a,c)&&a.k.push(c)
    }return a.k
}o.Ka=function(a,b){
    var c=this.ot(a,b);return this.Cf?$E(this,c,b):c
};
o.ot=function(a,b){
    var c=YE(this.a,a).get(b)||j;if(c)return c;c=WE(YE(this.a,a));var d=Nh[a];c=c[bF(this,c,b,d?d.Wt():l)];return YE(this.a,a).get(c)||j||Xh(a)
};function $E(a,b,c){
    if(b.Yd>0&&(b.W()==K||b.W()==Jh)){
        c=Qj(a.ot(Jh,c));a=NE(a.Ka(Eh,0),c,b.W());return Th(b,a)
    }return b
}o.Hc=function(a,b){
    var c=this.ex(a,b);return c?$E(this,c,b):j
};o.ex=function(a,b){
    if(!$h(a))return j;return YE(this.a,a).get(b)||j
};function pq(a,b){
    return WE(YE(a.a,b))
}
function pAa(a,b,c,d){
    return(b=cF(a,b,c,d))?$E(a,b,d):b
}function cF(a,b,c,d){
    a=bF(a,c,d);return b[c[a]]
}function ql(a,b,c){
    var d=pq(a,b),e=bF(a,d,c);c=d[e];a=a.a.Lb(b);b=a[c];for(e=e-1;e>=0;e--){
        var g=d[e];if(!b.kb(a[g]))break;c=g
    }return c
}function qAa(a,b,c){
    var d=pq(a,b);c=bF(a,d,c);a=a.a.Lb(b);b=a[d[c]];for(var e=c+1;e<d.length;e++){
        if(!b.kb(a[d[e]]))break;c=e
    }return d[c+1]?d[c+1]-1:j
}function bF(a,b,c,d){
    a=Pb(b,c);if(a<0)a=-a-(d?1:2);return a
}o.ji=function(a,b,c,d){
    return rAa(this,a,b,c,l,d)
};
function rAa(a,b,c,d,e,g){
    for(var h=[],k=a.a.b,m=0;m<k.length;m++){
        var n=ai(k[m]);if(e&&n||!e&&!n)h.push(a.Uf(k[m],b,c,d,g))
    }return h
}
o.Uf=function(a,b,c,d,e){
    var g,h,k;if(!(a in this.a.a))return new zo(a,[]);if(a==Af||a==Eh){
        c=this.Ka(a,0).Ba();if(b==0)g=[c];else h=c
    }else if($h(a))if(Db(this.o,a)){
        g=sAa(this,a,b,c,d);fh(d,c)||(k=this.Ka(a,c).Ba())
    }else{
        k=tAa(this,a,b,c,l,i);if(this.Cf){
            g=[];mh(k,function(m,n){
                if(n)g[m-b]=$E(this,n,m);return l
            },this)
        }else g=k;k=this.Ka(a,c).Ba()
    }else g=uAa(this,a,b,c);if(e&&g)g=oh(g,0,e);return new zo(a,g,h,k)
};
function uAa(a,b,c,d){
    var e=[],g=a.a.Lb(b),h=pq(a,b),k;if(ai(b)){
        var m=pAa(a,g,h,c-1),n=g[c];if(n){
            n=$E(a,n,c);n.kb(m)||(k=n)
        }k||(k=Xh(b))
    }else k=pAa(a,g,h,c);if(k)e[0]=k.Ba();var p;for(k=0;k<h.length;k++){
        m=h[k];if(m>c&&m<=d){
            p=$E(a,g[m]);e[m-c]=p.Ba();p=m
        }else if(m>d)break
    }if(ai(b))if(!g[d+1]||g[d+1].kb(g[p]))e[p-c]=Xh(b);return e
}function sAa(a,b,c,d,e){
    var g=[];d=Wg(e,Xa,c,d);for(e=0;e<d.length;e++){
        var h=d[e],k=a.Ka(b,h);g[h-c]=k.Ba()
    }return g
}
function tAa(a,b,c,d,e,g){
    var h=[],k=a.a.Lb(b);a=WE(YE(a.a,b));b=Pb(a,c);if(b<0){
        b=-b-1;e&&b>0&&b--
    }for(e=b;e<a.length;e++){
        b=a[e];if(b>d)break;var m=k[b].Ba();if(b<c)b=c;h[g?b-c:b]=m
    }return h
}o.shift=function(a,b){
    for(var c=this.a.b,d=0;d<c.length;d++){
        var e=c[d];if(ai(e)&&!$h(e)){
            dF(this,e,a-1);dF(this,e,a)
        }this.a.shift(e,a,b)
    }
};
o.splice=function(a,b,c){
    for(var d=this.a.b,e=b-a+1,g=0;g<d.length;g++){
        var h=d[g];if(ai(h)&&!$h(h)){
            dF(this,h,a-1);b+1<c&&dF(this,h,b+1)
        }else if(!$h(h)){
            var k=b+1;if(k<c){
                var m=this.a.Lb(h),n=pq(this,h),p=cF(this,m,n,k);n=cF(this,m,n,a-1);if(!p.kb(n)&&!m[k]){
                    this.a.set(h,k,p);if(p.Yd>0)this.Cf=i
                }else p.kb(n)&&this.a.remove(h,k)
            }
        }this.a.splice(h,a,e)
    }
};
function dF(a,b,c){
    var d=a.qt(b),e=pq(a,b);c=bF(a,e,c);var g=e.length,h=e[c],k=e[c+1];e=d[e[c-1]];var m=d[k];d=d[h];var n=Xh(b);if(!d.kb(n)){
        if(n.Yd>0)a.Cf=i;a.a.set(b,h,n);c>0&&e.kb(n)&&a.a.remove(b,h);c<g-1&&m.kb(n)&&a.a.remove(b,k)
    }
}o.A=function(){
    ZE.z.A.call(this);delete this.b;y(this.a);delete this.a;delete this.k
};function eF(a,b,c){
    this.R=a;this.a=b;this.M=c;this.F=new pD(new J(1));this.Q=[];if(b.o){
        this.Q.push(Ug);this.Q.push(Qg)
    }if(b.F){
        this.Q.push(Kg);this.Q.push(Ng)
    }this.Q.push(Hg);this.Q.push(Ig);this.b=new hE(this.R,this.Q);this.k=new ZE(b);this.o=new kE;this.ha=new oE(s(this.V5,this),this.R);this.N=new he(this);this.J=b.tA?new nE:j
}t(eF,Vf);o=eF.prototype;o.Kw=l;o.Hw=l;o.$A=l;function Xla(a){
    if(a.M)return a.M.a
}o.Ha=function(){
    return this.F
};o.Wa=function(){
    return qp(this,this.Ha().Ua())
};
function dl(a){
    return qp(a,Rv(a.Ha()))
}o.fa=function(){
    return this.b
};o.Mg=function(){
    return Xg(this.b)==2
};function nw(a,b){
    for(var c=a.k,d=pq(c,Ih),e=[],g=0;g<d.length;g++){
        var h=d[g],k=c.Hc(Ih,h);k&&k.Yb==b&&e.push(h)
    }return e
}var vAa="Every paragraph marker should have a list style at index: ",wAa=" with character: ";
function Mn(a,b){
    if(b.length==0)return l;var c=a.k,d=b[0],e=c.Hc(Ih,d);if(!e){
        a.R.log(Error(vAa+d+wAa+bh(a.b,d)));return l
    }d=e.Yb;if(!d)return l;for(var g=0;g<b.length;g++){
        var h=b[g];e=c.Hc(Ih,h);if(!e){
            a.R.log(Error(vAa+h+wAa+bh(a.b,h)));return l
        }if(e.Yb!=d)return l
    }return i
}function Xw(a,b){
    return Mk(a.Ka(Ih,b))!=j
}function ro(a){
    return Xg(a.b)-1
}function al(a,b){
    return Zg(a.b,b)
}var xAa="Should not call getEndOfSection with an out of bounds spacer index: ";
function Xo(a,b){
    var c;var d=a.b;c=Xg(d)-1;if(b<0||b>c){
        d.R.log(Error(xAa+b));c=c
    }else{
        d=d.indexOf(Jg,b+1);c=d>=0?d-1:c
    }return c
}o.pb=function(a){
    return this.o.pb(a)
};function nq(a,b){
    return a.o.a[b]||[]
}function Wo(a,b){
    return Xza(a.o,b)
}function qp(a,b){
    var c;switch(b.W()){
        case 0:c=b.a;break;case 1:c=Wo(a,b.ra())
    }return c
}o.Ka=function(a,b){
    return this.k.Ka(a,b)
};o.ot=function(a,b){
    return this.k.ot(a,b)
};o.Hc=function(a,b){
    return this.k.Hc(a,b)
};o.ex=function(a,b){
    return this.k.ex(a,b)
};o.Lb=function(a){
    return this.k.Lb(a)
};
o.qt=function(a){
    return this.k.qt(a)
};function uo(a,b,c){
    return a.k.Ka(b,yAa(a,c))
}function yAa(a,b){
    var c=qp(a,b);c>0&&!dh(a.b,c)&&c--;return c
}function Rs(a){
    return a.k.Ka(Af,0)
}function DA(a){
    return a.k.Ka(Eh,0)
}function rl(a,b,c){
    b=qAa(a.k,b,c);if(sa(b))return b;return ro(a)
}function On(a,b){
    var c=a.k.Ka(Ih,b),d=1,e=c.Yb;if(e)d=Hk(a.pb(e),c.Rb).uE;return fF(a,b).length+d
}
function fF(a,b){
    var c=a.k,d=pq(c,Ih),e=c.Lb(Ih);c=c.Ka(Ih,b);var g=[];b=Yg(a.b,b)-1;var h=Pb(d,b);for(h=h<0?-h-2:h;h>=0;h--){
        var k=e[d[h]];if(k.kb(c))g.unshift((d[h-1]||0)+1);else if(k.Yb==c.Yb&&k.Rb<c.Rb)break
    }return g
}var zAa="Nesting level should be defined for getting next paragraph starts for an ordered list.";
function jw(a,b,c,d){
    var e;d=d;if(c)e=a.pb(c);else if(Xw(a,b)){
        c=a.Ka(Ih,b);var g=c.Yb;if(g)e=a.pb(g);q(d)||(d=c.Rb)
    }if(!e||!sa(d)||!Dk(Hk(e,d))){
        e&&!sa(d)&&a.R.log(Error(zAa));return j
    }b=b;c=e.ra();g=d;e=pq(a.k,Ih);d=a.Lb(Ih);var h=a.Ka(Ih,b);c=c||h.Yb;g=sa(g)?g:h.Rb;h=[];b=ch(a.b,b)+1;for(a=0;a<e.length;a++){
        var k=e[a];if(!(k<b)){
            var m=d[k];k=m.Yb;m=m.Rb;if(k==c&&m==g)h.push((e[a-1]||0)+1);else if(k==c&&m<g)break
        }
    }return h
}
function Tw(a){
    var b=a.b,c=pl(a.F);if(!c)return[ch(b,a.Wa())];a=pq(a.k,Jh);var d=Pb(a,c.start);d=d<0?-d-1:d;b=ch(b,c.end);b=Pb(a,b);c=[];for(d=d;d<=b;d++)c.push(a[d]);return c
}function Sx(a){
    var b=qp(a,Rv(a.F)),c=qp(a,Ux(a.F));return new Ha(Yg(a.b,b),ch(a.b,c))
}function Tx(a){
    if(a.F.Ua().W()!=0)return 1;return Yg(a.b,a.Wa())
}var AAa="There should be at least one style of type ",BAa=" in range [",CAa="].";
o.Uf=function(a,b,c){
    var d=this.k.Uf(a,b,c,this.b);d.Lb().length==0&&!d.a&&!d.Nf&&this.R.log(Error(AAa+a+BAa+b+jc+c+CAa));return d
};
function Zo(a,b,c,d,e,g,h){
    var k=a.b.slice(b,c),m=0;if(e){
        k=e+k;m=e.length
    }if(g)k+=g;e=a.k.ji(b,c,a.b,m);g=rAa(a.k,b,c,a.b,i,m);m=Yza(a.o,b,c,m);b=d?{}:lE(a.o,b,c);if(h){
        h=Zza(a.o);for(var n in h)b[n]||(b[n]=h[n])
    }n={};if(!d){
        var p=new cc;for(d=0;h=e[d];d++){
            h=h.Lb();mh(h,function(w,v){
                var D=v.MB();D.length>0&&dc(p,D);return l
            })
        }h=p.Oc();for(d=0;c=h[d];d++){
            var r=Wo(a,c),u=Xo(a,r+1);n[c]=Zo(a,r,u,l)
        }
    }return new Ao(k,e,g,m,b,n)
}function kp(a,b){
    b=ch(a.b,b);return bl(a.o,vu,b)
}
var gF="spacers",DAa="Deleting non-tethered entity.",EAa="revert",FAa="replace";
o.Ea=function(a){
    if(a.W()==gw){
        var b;if(!aF(this.k,a.b))return
    }var c=j;c=a.lm(this);var d=i;switch(a.W()){
        case $v:this.ha.clear();var e=a.a,g=a.fa(),h=rg.V();Ag(h,gF,gj);if(this.M){
            var k=this.M;if(!k.a&&k.b)k.a=Rza.test(g)
        }this.b.JC(e,g);k=g.length;this.k.shift(e,k);this.o.shift(e,k);k=this.k;if((b=kh(Ph))&&b.test(g)){
            var m;for(b=kh(Ph);m=b.exec(g);){
                var n=m.index;m=Oh[m[0]]||[];for(var p=[],r=0;r<m.length;r++)p.push(m[r]());m=p;for(p=0;r=m[p];p++){
                    var u=r.W();if(aF(k,u)&&r.AA()){
                        k.a.set(u,e+n,r);
                        if(r.Yd>0)k.Cf=i
                    }
                }
            }
        }Cg(h,gF,gj);break;case Zv:this.ha.clear();e=a.wc();g=a.jf();h=rg.V();Ag(h,gF,fj);this.k.splice(e,g,Xg(this.b));this.o.splice(e,g);this.b.remove(e,g);Cg(h,gF,fj);break;case aw:e=this.o;g=a.ra();if(h=Di(a.uj,g,a.o))e.b[g]=h;break;case bw:(e=this.o.b[a.ra()])&&e.update(a.o);break;case cw:e=a.ra();g=this.F.Ua();g.W()==1&&g.ra()==e&&Rx(this,new J(Wo(this,e)),i);if(h=g=this.pb(e))h=Ih==g.W();h&&this.R.log(Error(DAa));mE(this.o,e);break;case fw:k=this.o;e=a.ra();g=a.o;if(g>=0){
            mE(k,e);
            if(b=k.pb(e)){
                (h=k.a[b.W()])||(h=[]);k.a[b.W()]=h;(k=h[g])||(k=[]);k.push(e);h[g]=k
            }
        }else mE(k,e);break;case gw:b=a;this.ha.clear(b.b);if(this.M){
            d=this.M;if(!d.a&&d.b&&b.b==Jh){
                g=(b.F||[]).ps_ltr;d.a=sa(g)&&!g
            }
        }a:{
            d=this.k;g=b.b;h=b.wc();k=b.jf();b=b.F;m=ro(this);if(n=ai(g)&&!$h(g)){
                p=Mb(pq(d,g));var w=bF(d,p,h);r=bF(d,p,k);u=l;var v=d.qt(g),D=Xh(g);D.update(b);for(w=w;w<=r;w++){
                    var I=p[w];if(!D.kb(v[I])){
                        dF(d,g,I);u=i
                    }
                }if(!u){
                    d=l;break a
                }
            }if($h(g)){
                e=YE(d.a,g).get(h)||j;if(!e){
                    e=Xh(g);if(e.Yd>0)d.Cf=
                        i;d.a.set(g,h,e)
                }if(e.qf(b))d=l;else{
                    e.update(b);if(e.Yd>0)d.Cf=i;d=i
                }
            }else{
                p=l;r=d.qt(g);u=pq(d,g);v=k+1;if(v<=m&&!r[v]){
                    D=cF(d,r,u,v);if(!D.qf(b)){
                        d.a.set(g,v,D.Ba());if(D.Yd>0)d.Cf=i
                    }
                }m=r[h];if(D=r[h]){
                    if(!D.qf(b)){
                        D.update(b);if(D.Yd>0)d.Cf=i;p=i
                    }
                }else{
                    D=cF(d,r,u,h);if(!D.qf(b)){
                        D=D.Ba();D.update(b);if(D.Yd>0)d.Cf=i;p=i;d.a.set(g,h,D)
                    }m=D
                }for(w=0;w<u.length;w++){
                    I=u[w];if(I<h)e=I;else if(I>h&&I<=k){
                        if(D=r[I]){
                            if(!D.qf(b)){
                                D.update(b);if(D.Yd>0)d.Cf=i;p=i
                            }if(Sh(m,D)){
                                d.a.remove(g,I);w--
                            }else m=
                                D
                        }
                    }else if(I>k)break
                }q(e)&&Sh(r[e],r[h])&&d.a.remove(g,h);r[v]&&Sh(m,r[v])&&d.a.remove(g,v);d=p||n
            }d=d
        }break;case fD:d=a.Ud();for(e=0;e<d.length;e++)this.Ea(d[e]);d=l;break;case oa:d=l;break;case hw:case iw:d=a.W()==hw?EAa:FAa;e=rg.V();Ag(e,gF,d);g=j;g=a.lm(this);GAa(this);this.b=new hE(this.R,this.Q);this.k=new ZE(this.a);this.o=new kE;this.$A=this.Hw=this.Kw=l;dE(this.F,new J(1));this.J=this.a.tA?new nE:j;this.dispatchEvent(new XD(this,a,g));g=a.o;for(h=0;h<g.length;h++)this.Ea(g[h]);Cg(e,gF,d);
            this.Kw=i;d=l
    }if(d){
        this.Kw=i;this.dispatchEvent(new XD(this,a,c))
    }
};function swa(a,b){
    var c=pl(a.F);if(!c)return l;return c.start<=b&&b<=c.end
}var HAa="\n\u0010\u0012\u001c",IAa="\n\u0011",JAa="Selection mark type must be the same as cursor type";
function Rx(a,b,c,d,e,g){
    var h=a.F,k=h.Ua(),m=b;if(b.W()==0){
        m=hF(a,b,k);var n=m.a;k=h.a;if(c)k=d?hF(a,d,k):m;var p=k.a,r=n!=p;m=n=iF(a,n,r);if(c){
            if(d)m=iF(a,k.a,r)
        }else m=p;if(n!=m){
            p=a.b;d=Zg(p,b.b?n-1:n);p=Zg(p,k.b?m-1:m);if(d!=p)return;h.pz=j;h.rz=j;if(a.a.o){
                d=n;p=m;n=d<p;p=new Ha(d,p);p.end--;d=a.fa();p=$ha(d,p);if(gl(d,p.start)){
                    h.rz=Ug;h.pz=Qg
                }d=n?p.start:p.end+1;p=n?p.end+1:p.start;d={
                    Ck:d,
                    Oi:p
                };if(d.Oi!=m)c=i;n=d.Ck;m=d.Oi
            }if(a.a.F){
                d=n;r=m;if(n=d<r){
                    p=d;d=r-1
                }else{
                    p=r;d=d-1
                }p=via(a,p,
                    d);p.Nq&&p.end--;if(p.Bu)h.rz=HAa;if(p.Nq)h.pz=IAa;d=n?p.start:p.end+1;r=n?p.end+1:p.start;d={
                    Ck:d,
                    Oi:r
                };if(d.Oi!=m)c=i;n=d.Ck;m=d.Oi
            }
        }b=new J(n,b.b);m=new J(m,k.b)
    }dE(h,b,e||b.kb(h.Ua()));if(c){
        if(m&&b.W()!=m.W()){
            a.R.log(Error(JAa));m=b
        }qD(h,m)
    }if(e)a.$A=i;else a.Hw=i;KAa(a,l,g)
}function KAa(a,b,c){
    if((a.Hw||a.$A)&&!a.Kw){
        a.dispatchEvent(new Sza(a,a.F.o,a.F.F,a.Hw,b,c));a.Hw=l;a.$A=l
    }
}function iF(a,b,c){
    var d=a.b;a=ro(a);var e=b;if(b>a)e=a+(c?1:0);if(gh(d,e))e-=c?0:1;return e=Math.max(e,1)
}
function hF(a,b,c){
    if(b.W()!=0)return b;a=a.b;c=c&&c.W()==0&&b.a<c.a;var d=b.a,e=Xg(a);if(c)for(;d>1;d--){
        if(eh(a,d)||gh(a,d))break
    }else for(;d<e;d++)if(eh(a,d)||gh(a,d))break;if(d!=b.a)return new J(d,b.b);return b
}o.V5=function(a,b,c,d){
    a=this.k.Uf(a,b,c,this.b);b=[];a.a&&b.push(a.a);c=a.b;for(var e in c)b.push(c[e]);a.Nf&&b.push(a.Nf);return Lga(b,d)
};
function Gs(a,b){
    var c=a.F.Ua(),d=b?a.k.ot(K,yAa(a,c)).Ba():uo(a,K,c).Ba(),e=uo(a,Hh,c);c=uo(a,Hh,c.shift(1));if(!e.kb(c)){
        e=Ak(b);d.update(e)
    }d.update(a.F.b);return d
}function aB(a){
    var b=a.F,c=pl(b);if(c)return Zo(a,c.start,c.end,l,b.rz,b.pz,i);return j
}o.qp=function(){
    this.dispatchEvent(mq);this.Kw=l;KAa(this,i)
};function GAa(a){
    y(a.b);delete a.b;y(a.k);delete a.k;y(a.o);delete a.o;y(a.J);delete a.J
}
o.A=function(){
    eF.z.A.call(this);delete this.R;delete this.a;y(this.F);delete this.F;y(this.N);delete this.N;delete this.M;y(this.ha);delete this.ha;GAa(this)
};function jF(a,b){
    this.a={};this.N=new he(this);this.F=a;this.b=b
}t(jF,x);function iC(a,b,c){
    a.a[c]=b;a.N.a(b,Wva,a.o)
}var LAa="preferences",MAa="/prefs";jF.prototype.o=function(a){
    a=[a.b];if(this.b){
        for(var b={},c=0;c<a.length;c++)b[a[c].name]=a[c].vz;a=[LAa,eg(b)];kza(this.b,MAa,s(this.k,this,a))
    }
};var kF="id";jF.prototype.k=function(a,b){
    var c=hf(a);b.Ob(c).nk(kF,this.F).sf()
};jF.prototype.A=function(){
    jF.z.A.call(this);y(this.N);delete this.N;delete this.a;delete this.b
};function pw(a,b){
    Do.call(this,a,b)
}t(pw,Do);o=pw.prototype;o.Zaa=0;o.vL=0;o.bL=j;o.Km=function(a){
    if((a=pw.z.Km.call(this,a))&&this.bL&&this.bL.b(this.vL,a.index))return j;return a
};o.Gd=function(a){
    this.vL=a
};function lF(){
    this.a={};this.k={}
}t(lF,x);lF.prototype.o=function(a,b){
    var c=b.K();if(this.b(a,c))return this.k[bl(c.o,Yi,a)[0]];return j
};lF.prototype.b=function(a,b){
    return sa(this.k[bl(b.o,Yi,a)[0]])
};function ow(a,b){
    var c=a.a[b];if(c){
        c.Vb();c.P().Ap(c.G());c.wq=j
    }
}lF.prototype.A=function(){
    lF.z.A.call(this);for(var a in this.a)y(this.a[a]);delete this.a;for(a in this.k)y(this.k[a]);delete this.k
};function mF(a){
    Am.call(this,a)
}t(mF,$s);o=mF.prototype;o.tR=1;o.Qg=function(){
    var a=this.G();if(!a){
        this.L();a=this.G()
    }return sca(ze.V(),a)
};var NAa="kix-footnotenumberview";o.L=function(){
    var a=this.P(),b=this.a.K().Ka(K,this.tR).Ba(),c={};c.ts_va=yk;c.ts_it=i;b.update(c);b=(c=this.a.J)?lka(c,b):uk(b);this.wb(a.L(Ee,{
        "class":NAa,
        style:b
    },Ye))
};o.xc=function(a){
    this.tR=a
};o.yq=function(){
    return 1
};o.Fb=function(){
    return new J(0)
};function nF(){}ia(nF);
nF.prototype.o=function(a,b){
    if(this.b(a,b.K()))return new mF(b);return j
};nF.prototype.b=function(a,b){
    return bh(b.fa(),a)==Ye&&sa(b.Hc(Dh,a))
};function oF(a,b,c){
    this.k=a;this.R=b||j;this.a=c||{}
}t(oF,x);var OAa="Server returned null image URL: ";oF.prototype.F=function(a,b,c){
    if(!this.Bg){
        var d=c?c[b]:j;if(d){
            this.a[b]=d;a(d)
        }else this.R&&this.R.log(Error(OAa+c))
    }
};oF.prototype.A=function(){
    oF.z.A.call(this);this.R&&delete this.R;delete this.a
};function pF(a,b,c,d){
    oF.call(this,a,c,d);this.b=b
}t(pF,oF);pF.prototype.o=function(a,b){
    a(b.$c())
};pF.prototype.A=function(){
    pF.z.A.call(this);delete this.b
};function qF(a){
    Am.call(this,a)
}t(qF,$s);o=qF.prototype;o.XI=0;o.Qg=function(){
    return new oc(this.XI,3)
};var PAa="kix-pagebreakview";o.L=function(){
    this.wb(this.P().L(Mr,{
        "class":PAa,
        style:nb(hp,this.XI,L)
    }))
};o.xc=function(a,b){
    this.XI=b
};o.yq=function(){
    return 1
};o.Fb=function(){
    return new J(0)
};function rF(){}ia(rF);rF.prototype.o=function(a,b){
    if(this.b(a,b.K()))return new qF(b);return j
};rF.prototype.b=function(a,b){
    return bh(b.fa(),a)==Vg
};function sF(a){
    this.Ff=new VE;this.N=new he(this);this.N.a(a,Iv,this.a)
}t(sF,x);sF.prototype.a=function(a){
    a=a.zc;switch(a.W()){
        case $v:this.Ff.shift(a.a,a.fa().length);break;case Zv:var b=a.wc();this.Ff.splice(b,a.jf()-b+1)
    }
};sF.prototype.A=function(){
    sF.z.A.call(this);y(this.N);delete this.N;y(this.Ff);delete this.Ff
};function tF(a){
    sF.call(this,a)
}t(tF,sF);tF.prototype.register=function(a,b){
    var c=this.Ff.get(b);if(!c){
        c=[];this.Ff.set(b,c)
    }c.push(a)
};tF.prototype.unregister=function(a){
    mh(this.Ff.a,function(b,c){
        Jb(c,a);c.length==0&&this.Ff.remove(b);return l
    },this)
};function sp(a,b){
    var c=-1;mh(a.Ff.a,function(d,e){
        if(Db(e,b)){
            c=d;return i
        }return l
    });return c
};function uF(a){
    sF.call(this,a)
}t(uF,sF);uF.prototype.register=function(a,b){
    this.Ff.set(b,a)
};uF.prototype.unregister=function(a){
    a=QAa(this,a);a!=-1&&this.Ff.remove(a)
};function QAa(a,b){
    var c=-1;mh(a.Ff.a,function(d,e){
        if(e==b){
            c=d;return i
        }return l
    });return c
};function vF(a,b,c,d,e,g,h,k,m,n,p,r,u,w){
    this.Y=a;this.b=b;this.k=c;this.o=d;this.R=e;this.a=g;this.J=h;this.Oa=k;this.M=m;this.F=n;this.Fa=p;this.Q=r;this.ha=u;this.hc=w
}t(vF,x);o=vF.prototype;o.jy=j;o.iy=j;function Ww(a,b){
    if(!a.jy)a.jy=new b;return a.jy
}function wp(a,b){
    if(!a.iy)a.iy=new b;return a.iy
}o.K=function(){
    return this.Y
};function eo(a){
    return a.Y.a
}o.P=function(){
    return this.hc
};
o.A=function(){
    vF.z.A.call(this);y(this.Y);delete this.Y;y(this.k);delete this.k;y(this.iy);delete this.iy;y(this.jy);delete this.jy;y(this.o);delete this.o;y(this.a);delete this.a;delete this.Oa;delete this.b;delete this.R;delete this.hc;y(this.M);delete this.M;y(this.ha);delete this.ha
};var RAa="stylesheet",wF="kix-sr",xF="kix-ssc";
function SAa(a,b,c,d,e,g){
    var h=new eF(c,a,a.iM?new Qza(a.VV):j),k=new lF;co.register(k,h,cd);if(a.o){
        var m=mt.V();co.register(m,h,Ug)
    }if(a.Fa){
        m=nF.V();co.register(m,h,Ye)
    }m=rt.V();co.register(m,h,st);if(a.uA){
        m=rF.V();co.register(m,h,Vg)
    }m=a.eL&&!a.a?new pw(h,c):new Do(h,c);var n=new Et(m),p;if(a.PV){
        UD=LD=p=a.VM||{};var r=MD();r.hc.appendChild(r.o,r.hc.L(Hh,{
            rel:RAa,
            type:DD,
            href:r.k
        }));r=dm.V();var u=MD();if(UD==j)f(Error("The json wasn't set prior to creating the UnicodeRangeMapper.\nPlease call themes.fonts.UnicodeRangeMapper.setJson before instantiatingUnicodeRangeMapper."));
        if(TD==j)TD=new Dza(UD.fontMap);p=new YD(r,h,new WD(u,TD,new ND,Bza,window),c,new Fza(p,$D),m)
    }else p=j;p=p;r=Fc?new Sl(e):j;u=new tF(h);var w=new uF(h),v=new jF(a.k,!a.ue()&&a.HV?d:j);a.xB&&iC(v,lA.V(),Xva);a.Qa&&iC(v,new AD(wF,i,H(b,Pz)),wF);a.Bb&&iC(v,new AD(xF,i,H(b,Tz)),xF);return new vF(h,b,n,k,c,m,p,d,r,u,w,v,new pF(a.k,d,c,g),e)
};function yF(){
    this.N=new he(this);this.a=j;this.k={};this.b={}
}t(yF,x);yF.prototype.bind=function(a,b){
    var c=b?this.b:this.k;a.ra();if(!c[a.ra()]){
        c[a.ra()]=a;zF(this,a,!b)
    }
};yF.prototype.o=function(a){
    a.k.a()!=a.b.a()&&AF(this)
};function AF(a){
    for(var b in a.k)zF(a,a.k[b],i);for(b in a.b)zF(a,a.b[b],l)
}var TAa="network";function zF(a,b,c){
    b.Aa((!!a.a&&a.a.a.a())==c,TAa)
}yF.prototype.A=function(){
    yF.z.A.call(this);this.N.wa();delete this.a;delete this.k;delete this.b
};var UAa="You have changes which are stored on this computer but have not yet been saved to Google's servers. The changes will be saved when you next open this document with this browser while connected to the internet.",VAa="This document has unsaved changes. Do you want to leave the page and discard your changes?";function WAa(a){
    var b=wy(a.a,32)?UAa:VAa;return zy(a)||yy(a)?b:undefined
}function BF(a){
    a.onbeforeunload=ha;a.location.reload()
};var XAa="Debug=true";function CF(a,b,c){
    b=(b||window).location.href;if(this.b=a||!!b&&b.indexOf(XAa)!=-1){
        this.a=c||j;this.a.Aa(i);this.a.a(i)
    }
}t(CF,x);CF.prototype.A=function(){
    CF.z.A.call(this);if(this.a){
        this.a.a(l);delete this.a
    }
};var YAa=new CF;var ZAa="http://www.google.com/support/forum/p/Google+Docs.";function $Aa(){
    return ZAa
}var aBa='" target="_blank">';function bBa(a){
    return Ym+kb(a)+aBa
};var cBa="Google Docs error",dBa="Reload";
function DF(){
    Lq.call(this);this.b=Da(BF,window);this.a=[];this.setTitle(cBa);$q(this,(new Vq).set(gr,dBa,l,l));rm(this).a(this,er,this.k)
}t(DF,Lq);ia(DF);DF.prototype.L=function(){
    DF.z.L.call(this);this.G().style.zIndex=999999
};
var eBa="To discuss this or other issues, visit the ",fBa="Google Docs Help Forum",gBa=".  To see the list of known problems, check the ",hBa="http://docs.google.com/support/bin/static.py?page=known_issues.cs&hl=en",iBa="Google Docs Known Issues page</a>.",jBa='Google Docs has encountered an error. We are looking into the problem now.<br><br>Please try one of these interim solutions:<br><ul><li>Reload this page.<li>Download the document by right-clicking on it in the main document list and selecting "Export."</ul>',
kBa='Debug text:<div><textarea style="width:90%;height:200px;font-size:85%" readonly="readonly">',lBa="\n------------\n",mBa="</textarea></div>";
//錯誤顯示
DF.prototype.show=function(a,b,c){
	return '';
    a=a||(c?c():undefined);c=eBa+(bBa($Aa())+(fBa+(Zm+(gBa+(bBa(hBa)+iBa)))));a&&this.a.push(a);
	this.Ob(jBa+(this.a.length?kBa+kb(this.a.join(lBa))+mBa:z)+c);
	this.Z(i);if(b)this.b=b
};
DF.prototype.k=function(a){
    a.key==gr&&this.b.call(j)
};
DF.prototype.A=function(){
    DF.z.A.call(this)
};

function EF(){}
EF.prototype.b=j;
EF.prototype.xp=function(){
    var a;if(!(a=this.b)){
        a={};if(nBa(this)){
            a[0]=i;a[1]=i
        }a=this.b=a
    }return a
};
function FF(){
    return oBa(GF)
}var GF;function HF(){}t(HF,EF);function oBa(a){
    return(a=nBa(a))?new ActiveXObject(a):new XMLHttpRequest
}HF.prototype.a=j;var pBa="MSXML2.XMLHTTP.6.0",qBa="MSXML2.XMLHTTP.3.0",rBa="MSXML2.XMLHTTP",sBa="Microsoft.XMLHTTP";
/*ajax link*/
function nBa(a){
    if(!a.a&&typeof XMLHttpRequest=="undefined"&&typeof ActiveXObject!="undefined"){
        for(var b=[pBa,qBa,rBa,sBa],c=0;c<b.length;c++){
            var d=b[c];try{
                new ActiveXObject(d);return a.a=d
            }catch(e){}
        }
		//f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
    }
	return a.a
}

GF=new HF;function IF(a){
    this.headers=new Zb;this.a=a||j
}t(IF,Vf);var tBa=/^https?:?$/i,uBa=[];function vBa(a){
    a.wa();Jb(uBa,a)
}o=IF.prototype;o.xb=l;o.Ib=j;o.VE=j;o.xx=z;o.l8=z;o.Ft=0;o.Hp=z;o.CG=l;o.jC=l;o.PH=l;o.Zp=l;o.yx=0;o.Ip=j;var JF="GET",KF="POST",LF="Content-Type",wBa="application/x-www-form-urlencoded;charset=utf-8";
o.send=function(a,b,c,d){
 
    if(this.Ib)
		f(Error("[goog.net.XhrIo] Object is active with another request"));
		b=b||JF;this.xx=a;this.Hp=z;this.Ft=0;this.l8=b;this.CG=l;this.xb=i;this.Ib=this.eG();this.VE=this.a?this.a.xp():GF.xp();this.Ib.onreadystatechange=s(this.HS,this);try{
        this.PH=i;this.Ib.open(b,a,i);this.PH=l
    }catch(e){
        xBa(this,5,e);return
    }a=c||z;var g=this.headers.Ba();d&&Yb(d,function(k,m){
        g.set(m,k)
    });
	b==KF&&!g.Sd(LF)&&g.set(LF,wBa);Yb(g,function(k,m){
        this.Ib.setRequestHeader(m,k)
    },this);
	try{
        if(this.Ip){
            Xf.clearTimeout(this.Ip);
            this.Ip=j
        }if(this.yx>0)
		this.Ip=Xf.setTimeout(s(this.k0,this),this.yx);this.jC=i;this.Ib.send(a);
		this.jC=l
    }catch(h){
        xBa(this,5,h)
    }
};
o.eG=function(){
    return this.a?oBa(this.a):new FF
};o.dispatchEvent=function(a){
    return IF.z.dispatchEvent.call(this,a)
};var yBa="Timed out after ",zBa="ms, aborting",MF="timeout";o.k0=function(){
    if(typeof ba!="undefined")if(this.Ib){
        this.Hp=yBa+this.yx+zBa;this.Ft=8;this.dispatchEvent(MF);this.abort(8)
    }
};
function xBa(a,b,c){
    a.xb=l;if(a.Ib){
        a.Zp=i;a.Ib.abort();a.Zp=l
    }a.Hp=c;a.Ft=b;ABa(a);NF(a)
}var OF="complete";function ABa(a){
    if(!a.CG){
        a.CG=i;a.dispatchEvent(OF);a.dispatchEvent(lm)
    }
}var PF="abort";o.abort=function(a){
    if(this.Ib&&this.xb){
        this.xb=l;this.Zp=i;this.Ib.abort();this.Zp=l;this.Ft=a||7;this.dispatchEvent(OF);this.dispatchEvent(PF);NF(this)
    }
};o.A=function(){
    if(this.Ib){
        if(this.xb){
            this.xb=l;this.Zp=i;this.Ib.abort();this.Zp=l
        }NF(this,i)
    }IF.z.A.call(this)
};
o.HS=function(){
    !this.PH&&!this.jC&&!this.Zp?this.PJ():BBa(this)
};o.PJ=function(){
    BBa(this)
};var QF="readystatechange",RF="success",CBa=" [";function BBa(a){
    if(a.xb)if(typeof ba!="undefined")if(!(a.VE[1]&&SF(a)==4&&a.Vd()==2))if(a.jC&&SF(a)==4)Xf.setTimeout(s(a.HS,a),0);else{
        a.dispatchEvent(QF);if(SF(a)==4){
            a.xb=l;if(TF(a)){
                a.dispatchEvent(OF);a.dispatchEvent(RF)
            }else{
                a.Ft=6;a.Hp=DBa(a)+CBa+a.Vd()+jg;ABa(a)
            }NF(a)
        }
    }
}var UF="ready";
function NF(a,b){
    if(a.Ib){
        var c=a.Ib,d=a.VE[0]?ha:j;a.Ib=j;a.VE=j;if(a.Ip){
            Xf.clearTimeout(a.Ip);a.Ip=j
        }b||a.dispatchEvent(UF);try{
            c.onreadystatechange=d
        }catch(e){}
    }
}function TF(a){
    switch(a.Vd()){
        case 0:a=(a=wa(a.xx)?bf(1,a.xx):a.xx.nh)?tBa.test(a):self.location?tBa.test(self.location.protocol):i;return!a;case 200:case 204:case 304:return i;default:return l
    }
}function SF(a){
    return a.Ib?a.Ib.readyState:0
}o.Vd=function(){
    try{
        return SF(this)>2?this.Ib.status:-1
    }catch(a){
        return-1
    }
};
function DBa(a){
    try{
        return SF(a)>2?a.Ib.statusText:z
    }catch(b){
        return z
    }
}o.di=aa(1);o.Ne=function(){
    try{
        return this.Ib?this.Ib.responseText:z
    }catch(a){
        return z
    }
};o.RG=aa(16);o.getResponseHeader=aa(12);o.ih=aa(15);o.zj=aa(17);xd[xd.length]=function(a){
    IF.prototype.PJ=a(IF.prototype.PJ)
};function VF(a){
    this.b=a
}t(VF,x);VF.prototype.a=l;VF.prototype.k=function(a){
    return EBa(this,a)
};var FBa="__wrapper_",GBa="__protected_",HBa="__";function WF(a,b){
    return(b?FBa:GBa)+Ca(a)+HBa
}function EBa(a,b){
    var c=WF(a,i);b[c]||((b[c]=IBa(a,b))[WF(a,l)]=b);return b[c]
}function IBa(a,b){
    function c(){
        if(a.Bg)return b.apply(this,arguments);try{
            return b.apply(this,arguments)
        }catch(d){
            a.b(d);f(d)
        }finally{}
    }a.a&&Xaa(15);c[WF(a,l)]=b;return c
}var XF="window";
function JBa(a,b){
    var c=ga(XF),d=c[b];c[b]=function(e,g){
        if(wa(e))e=Da(naa,e);e=EBa(a,e);return d.call?d.call(this,e,g):d(e,g)
    };c[b][WF(a,l)]=d
}VF.prototype.A=function(){
    var a=ga(XF);a.setTimeout=a.setTimeout[WF(this,l)]||a.setTimeout;a.setInterval=a.setInterval[WF(this,l)]||a.setInterval;VF.z.A.call(this)
};var KBa="setTimeout",LBa="setInterval";function YF(a,b,c){
    this.k=b||j;this.o=MBa;this.J=a;if(!c)if(A)Raa(s(this.b,this),l,j);else{
        this.a=new VF(s(this.b,this));JBa(this.a,KBa);JBa(this.a,LBa);a=this.a;a=s(a.k,a);for(b=0;b<xd.length;b++)xd[b](a)
    }
}t(YF,Vf);function NBa(a,b){
    B.call(this,ec);this.error=a;this.b=b
}t(NBa,B);
YF.prototype.a=j;
function MBa(a,b,c,d){
    var e=new IF;uBa.push(e);Xd(e,UF,Da(vBa,e));
	 
	e.send(a,b,c,d)
}
var OBa="window.location.href",PBa="Unknown error",ZF="Not available",QBa="line",RBa="context.";
YF.prototype.b=function(a,b){
    var c;c=ga(OBa);c=typeof a==va?{
        message:a,
        name:PBa,
        lineNumber:ZF,
        fileName:c,
        stack:ZF
    }:!a.lineNumber||!a.fileName||!a.stack?{
        message:a.message,
        name:a.name,
        lineNumber:a.lineNumber||a.n8||ZF,
        fileName:a.fileName||a.filename||a.sourceURL||c,
        stack:a.stack||ZF
    }:a;var d=b?Qa(b):{};if(this.k)try{
        this.k(c,d)
    }catch(e){}var g=c.stack;try{
        var h=lf(this.J,Fa,c.fileName,lm,c.message,QBa,c.lineNumber),k={};k.trace=g;if(d)for(var m in d)k[RBa+m]=d[m];var n=kf(k);this.o(h,KF,n,this.F)
    }catch(p){}try{
        this.dispatchEvent(new NBa(c,
            d))
    }catch(r){}
};var SBa="-v",TBa="-f",UBa="-n";function $F(a,b,c,d){
    this.Q=a;this.J=a+SBa;this.k=a+TBa;this.o=a+UBa;this.b=c||new IF;this.F=d||new Yz(this.M,3E4,this);this.N=new he(this);this.a=window.localStorage;this.Fa=b||100;zD();a=aG(this,this.J);if(!a||a<1){
        this.a.setItem(this.J,1);this.a.setItem(this.k,1);this.a.setItem(this.o,1)
    }this.N.a(this.b,OF,this.ha);this.N.a(this.b,UF,this.M);this.M()
}t($F,x);var bG={
    MM:rx,
    METHOD:px,
    HL:kx,
    HEADERS:Nl
},cG="-e-";
$F.prototype.send=function(a,b,c,d){
 
    if(!(aG(this,this.o)-aG(this,this.k)>=this.Fa)){
        var e={};e[bG.MM]=a;e[bG.METHOD]=b;e[bG.HL]=c;e[bG.HEADERS]=d;if((a=aG(this,this.o))&&aG(this,this.J)==1){
            this.a.setItem(this.o,a+1);this.a.setItem(this.Q+cG+a,eg(e))
        }this.F.mi==0&&!this.b.Ib&&this.M()
    }
};
$F.prototype.M=function(){
    var a=aG(this,this.k);if(!(!a||aG(this,this.J)!=1||this.F.mi!=0||this.b.Ib))if(a=this.a.getItem(this.Q+cG+a)){
        a=dg(a);this.b.send(a[bG.MM],a[bG.METHOD],a[bG.HL],a[bG.HEADERS])
    }
};
$F.prototype.ha=function(){
    var a=this.b.Vd();if(TF(this.b)&&a||a==500){
        if((a=aG(this,this.k))&&aG(this,this.J)==1){
            this.a.removeItem(this.Q+cG+a);a++;this.a.setItem(this.k,a);if(aG(this,this.o)-aG(this,this.k)==0){
                this.a.setItem(this.k,1);this.a.setItem(this.o,1)
            }
        }
    }else this.F.start()
};function aG(a,b){
    var c=parseInt(a.a.getItem(b),10);if(c<0||isNaN(c))return j;return c
}$F.prototype.A=function(){
    $F.z.A.call(this);this.N.wa();delete this.N;this.b.wa();delete this.b;this.F.wa();delete this.F;delete this.a
};
var VBa="/jserror",dG="X-Same-Domain";

function eG(a,b,c,d){
	
    this.R=j;this.b={};this.N=new he(this);this.k=!!b;this.a=j;b=MBa;
	if(c&&zD()){
        this.a=new $F(c,d);
		b=s(this.a.send,this.a)
    }
	c=s(this.n$,this);
	this.R=new YF((a||z)+VBa,c,void 0);
	a={};a[dG]=sg;this.R.F=a;this.R.o=b;this.N.a(this.R,ec,this.w1)
}t(eG,Vf);
var WBa="fatal";

function fG(a,b,c){
	//fatal error  break
	return '';
    c=XBa(a,WBa,c);if(!a.R)f(b);a.R.b(b,c)
}
o=eG.prototype;var YBa="incident";o.log=function(a,b){
    var c=XBa(this,YBa,b);if(!this.R)f(a);this.R.b(a,c)
};
function aq(a,b,c){
    return s(a.mT,a,b,c)
}
o.mT=function(a,b){
    try{
        return a.apply(b,Ob(arguments,2))
    }catch(c){
        fG(this,c)
    }
};
function XBa(a,b,c){
    a=c?Qa(c):{};a.severity=b;return a
}o.w1=function(a){
    if(a.b.severity==YBa)this.dispatchEvent(kl);else{
        var b=Qa(a.error);Ra(b,a.b);if(this.k){
            a=eg(b);DF.V().show(a,undefined,void 0)
        }else DF.V().show(void 0,undefined,void 0);this.dispatchEvent(Wk)
    }
};o.n$=function(a,b){
    Ra(b,this.b)
};
o.A=function(){
    eG.z.A.call(this);this.N.wa();delete this.N;this.R&&this.R.wa();delete this.R;this.a&&this.a.wa();delete this.a;delete this.b
};function gG(a){
    this.k=a||ca;this.a={}
}t(gG,x);gG.prototype.o=i;gG.prototype.b=l;function hG(a,b,c){
    if(a.b)f(Error("Rules may only be added before the manager is started."));c={
        YR:Ta(b),
        ij:c
    };for(var d=0;d<b.length;++d){
        var e=b[d],g=a.a[e];if(g==j){
            g=[];a.a[e]=g
        }g.push(c)
    }return a
}
function iG(a,b){
    if(!a.b)f(Error("May only pass milestones once the manager has been started "));if(!a.o)f(Error("One of the milestone managers callbacks threw an exception, disabling the manager permanently."));var c=a.a[b];if(c){
        for(var d=0;d<c.length;++d){
            var e=c[d];delete e.YR[b];if(Ma(e.YR))try{
                e.ij.apply(a.k)
            }catch(g){
                a.o=l;f(g)
            }
        }delete a.a[b]
    }return a
}gG.prototype.start=function(){
    this.b=i
};gG.prototype.A=function(){
    gG.z.A.call(this);delete this.k;delete this.a
};var jG=0;function kG(a,b){
    this.Y=a;this.b=b
}t(kG,x);kG.prototype.k=0;kG.prototype.a=-1;kG.prototype.o=function(a){
    var b=0;if(this.a>=0){
        b=Xg(this.Y.fa())-this.k;if(b!=0)for(var c=0;c<a.length;c++)a[c].shift(b)
    }this.a++;Pva(this.b,a);this.k=Xg(this.Y.fa())-b;return this.a
};kG.prototype.A=function(){
    kG.z.A.call(this);delete this.Y;delete this.b
};var ZBa="fcl",lG="orc",mG="dl",nG="aml",$Ba="dml",aCa="fmc",bCa="ci",cCa="kx-e",dCa="build-label",eCa="buildLabel",fCa="protocol-number",gCa="release-number",hCa="docs-editor",oG="docs-chrome",iCa="enable_iframed_embed_api",jCa="DOCS_EMBED_",kCa="server_time_ms";
//config
function pG(a,b,c,d,e){
    this.b=a;this.jb=b;
	this.ha=a.gM?new xD:j;
	this.Ye=a.aC?Math.floor(Math.random()*2147483647).toString(16)+Math.floor(Math.random()*4294967295).toString(16):c;c=this.J=new gG(this);hG(hG(hG(hG(c,[ZBa,lG],this.pZ),[mG,lG],this.tZ),[mG,lG,nG],this.E$),[mG,nG],this.Q5);a.od&&hG(c,[$Ba,aCa,bCa],this.T5);c.start();this.Qa=new yF;this.Q=a.b==3?new Oy(a,this.Qa,b):new Ey(a,this.Qa);this.F=new HC;
	this.Od=new wB(this.F);
	this.R=new eG(a.Nh,a.sV,cCa);
	this.Mh=this.b.aC?new tD:j;
	this.R.b[dCa]=
    sh(th(),eCa);
	this.R.b[fCa]=a.LJ.toString();this.R.b[gCa]=a.dK.toString();this.R.b.sid=this.Ye;this.M=Vc(a.G());this.Fa=new js(this.R,a.NM,a.bba,Te(a),this.F,this.M);this.Oa=a.XE?new rD:j;hha=!a.J;this.Lc=(b=this.M.G(hCa))?new Kl(b):j;this.a=SAa(a,this.Q,this.R,this.Oa,this.M,e);this.o=this.M.G(oG)?new yA(this.a,this.F):j;e=this.a;b=this.jb;c=a.Qa;var g=this.F,h=this.Lc,k=Vs(e);this.Ja=new Ev(e,b,k,c,g,h);this.eb=new GC(this.Q,a.b,this.a.Q,this.R,this.a,this.Ja);this.k=gxa(a,this.Q,this.Fa,this.a.K(),
        this.R,this.o,this.Ja,Te(a),this.a.o,this.M,this.Oa,this.jb,this.Od,this.F);this.Zb=new kG(this.a.K(),this.k.a);this.N=new he(this);e=a.aM;b=a.zY;d=Wya(a.b,!!d);if(!a.sM||!d)d=new bg;else{
        if(e.length)ng.e=e.join(ig);if(b)ng.rls=b;d=new ag(6E4,nga,ng,d,d,oga)
    }this.Bb=d;this.Nh=new Rya(this.Bb);d=this.b.k;e=this.F;if(!rh(th(),iCa)||!window.parent)b=l;else{
        b=window.name;b=!!b&&Va(b,jCa)
    }if(b){
        d=new SC(d,e);e=new $ya;d=new RC(d,e)
    }else d=j;this.Ia=d;
	this.getPerformanceManager=this.pP;
	this.loadInitialModel=this.q8;
	this.loadPreferences=this.s8;
	this.resize=this.Ld;
	this.setLoaded=this.WQ;
	aja=a.J;
	a=th();
	a=Number(a.get(kCa));d=Ea()+jG;
	if(Math.abs(d-a)>=3E4)jG=a-Ea()
}

t(pG,x);o=pG.prototype;o.jd=j;o.VH=j;o.OQ=l;o.nD=j;o.Qq=j;o.Og=j;o.qI=l;o.nK=j;o.$K=j;o.Ss=j;
var lCa="appLoad",mCa="Standalone mode should have instantiated the EditingSurfaceSizer.",nCa="writely";
o.j6=function(){
    Cg(this.pP(),Yw,lCa);var a=bm(em(dm.V(),tp)),b=this.b,c=this.a.K();if(b.XE){
        this.jd=new (a.D_());this.jd.qaa(b.Nh);this.jd.naa(b.LJ,b.dK);var d=this.Qa,e=this.jd.Vd();d.a=e;d.N.a(e,Au,d.o);AF(d)
    }if(this.o&&this.o.zh){
        d=this.o.zh;e=Ww(this.a,a.bx());d.CY(b,wp(this.a,a.jt()),e,this.a.b,c);a.OZ()(e,d,this.Fa.Sh)
    }this.Lc&&a.NZ()(this.Lc);if(this.Oa&&this.jd){
        d=this.Oa;e=this.jd;d.a=e;for(var g=0,h;h=d.b[g];g++)h.M$(e.mf(h.path));for(g=0;h=d.k[g];g++)h(e);d.b=[];d.k=[]
    }d=j;if(this.jd)d=
        new (a.w_())(window,this.jd,this.jb.Ge(),this.Ye);a.LZ()(this.jb);if(this.Lc)b.vC&&(new (a.J_())(b.vC,b.k,this.Lc,b.TM,s(this.k.Q_,this.k))).Ma();else this.R.log(Error(mCa));a.WX(this.Q,Te(b));e=b.TM;if(!b.ue()){
        b.d6&&this.jd&&a.MZ()(this.jb,this.jd);a.PZ()(Af,e);a.QZ()(this.jb,e,qta);a.SZ()(this.jb)
    }g=H(this.Q,nz);this.jd?a.TZ()(this.jb,this.jd,nm,nCa,e,g?[g]:undefined,this.R):Rf(this.Q,nz,l);g&&g.fb(xf,this.W3,this);d&&d.gaa(Da(WAa,this.jb));a.y_()(this.M);a.UZ()(b.hC);d=this.a.k;if(b.b==3&&b.Bb)this.$K=
        new (a.S_())(c,this.a.Q.a[xF]||j,d,this.R);this.b.b==3&&this.jd&&this.N.a(this.jd.Vd(),Au,this.h6);iG(this.J,nG)
};o.saa=function(){
    iG(this.J,$Ba)
};var oCa="kix_docos",pCa="Attempted to install 8 multiple times.",qCa="Attempted to install a feature before base features have been registered.";
o.T5=function(){
    var a=bm(em(dm.V(),oCa)),b=new (a.vea())(this.jd,this.Og.BC,[kF,this.b.k]),c=this.eb;if(c.a)if(c.a[8])c.R.log(Error(pCa));else{
        c.a[8]=b;b.xc(c.b,c.F,c.J,c.o,c.k)
    }else c.R.log(Error(qCa));this.Ss.B6(8,new (a.uea())(b))
};var qG="kix_a11y";o.raa=function(){
    bm(em(dm.V(),qG)).a(this.a.K())
};var rCa="-fe",rG="-pq-",sCa="kix_offline";

o.xc=function(){
 
    if(!this.qI){
        var a=this.b,b=ze.V(),c=this.a.M,d=this.a.J,e=j,g=j;if(d){
            e=s(d.JQ,d);g=s(d.iR,d)
        }
		kca(b,a.y$,l,e,g);
		jca(b,c?c.a:0,l);
		this.eb.gK(a);
		this.N.a(this.a.K(),vp,this.g6);b=l;
		if(this.Ia){
            this.Ia.xc();(b=this.Ia.a.a(Yya))&&this.N.a(this.Ja,vsa,this.g2)
        }
		this.Ja.xc(b);this.o&&wm(this.o,this.M.G(oG));wm(this.Ja,this.M.G(Hv));b=rg.V();b.k=this.Bb;if(a.sM){
            b.Aa(i);c=s(this.Nh.b,this.Nh);b.b.push(c);this.Bb.init()
        }if(a.hba){
            b.Aa(i);d=IC.V();c=iA.V();d=s(d.k,d);b.b.push(d);c=s(c.k,c);
            b.b.push(c);c=s(iA.V().b,iA.V());ca.getEventTrace=c
        }var h;a:{
            try{
                var k=a.k+(a.gF?st+a.gF:z);if(a.fM&&zD()){
                    var m=window.localStorage,n=parseInt(m.getItem(k+rCa),10);if(!isNaN(n)){
                        h=m.getItem(k+rG+n)!=j;break a
                    }
                }
            }catch(p){}h=l
        }
		h||iG(this.J,lG);jm(dm.V(),tp,this.j6,this);Ag(b,Yw,lCa);this.b.gM&&jm(dm.V(),sCa,this.uaa,this);a.od&&jm(dm.V(),oCa,this.saa,this);this.qI=i
    }
};

var tCa="Trying to load the initial model before the application has been initialized.";

o.q8=function(KX_mutations){
	a=KX_mutations;
    if(this.qI){
        if(a){
			 
            var b=new oD(a,this.R);
			//showObject(a);
			a=uCa(this,b.Af(),b.Bj(),b.yp(),b.Ud());
			
			if(this.ha){
				var c=b.Ud();
				b=c&&c.length>0?new uD(b.Af(),a||0,b.Bj(),b.yp(),c):j;
				if(!b){
					f(Error("Bootstrap server message contained no mutations."));
				}
				c=this.ha;c.b=l;wD(c.a,b,a==0)
            }
        }
    }
	else{
		this.R.log(Error(tCa));
	}
};
//a.jb 
function uCa(a,b,c,d,e){
    a.VH=b;
	c&&d&&By(a.jb,c,d);
	//showObject(e);fwa
	//b=s(a.R.mT,a.R,a.Zb.o,a.Zb)(e);
	//b=iaa.apply(j,Array(a.R.mT,a.R,a.Zb.o,a.Zb))(e);
	b=aq(a.R,a.Zb.o,a.Zb)(e);
	//showObject(b);
	b==0&&iG(a.J,ZBa);
	return b
}

o.pZ=function(){
    var a=this.k;a.a.uN=i;Bwa(a);vs(this.F,3)
};
o.WQ=function(){
    if(!this.OQ){
        this.OQ=i;if(this.b.iM){
            var a=this.a.K();if(a.M)a.M.b=i
        }
		this.ha&&!this.b.aC&&rza(this.ha);a=this.Ja;a.xD=i;a.Qr&&a.xD&&a.Qr.b();iG(this.J,mG)
    }
};

o.r8=function(a){
    a=a.Fea;uCa(this,a.U6,a.Bj(),a.yp(),a.Ud())
};

o.uaa=function(){
    var a=bm(em(dm.V(),sCa));if(this.b.aC){
        this.Qq=a.nea(this.jb,this.R);this.N.a(this.Qq,Pl,this.WQ).a(this.Qq,px,this.r8);this.Qq.load()
    }this.nD=a.mea(this.jb,this.ha,this.Qq);this.nD.Cea()
};
var vCa="Net service should exist if server communication is enabled.";
o.Q5=function(){
    if(this.b.XE){
        var a=em(dm.V(),tp);this.jd||fG(this.R,Error(vCa));if(!sa(this.VH))f(Error("The initial revision should be set before trying to create the communications manager."));a=a.Vc;this.Og=new (a.XZ())(this.b,this.Ye,this.jb,this.jd,this.VH,this.R,this.ha);var b=new (a.O_())(this.Og.BC,this.jd,this.jb.Ge(),this.a.K(),this.Ja,this.Og.$m,this.R);if(this.b.FM)this.nK=new (a.N_())(this.Ja,this.k,this.Lc,this.b,this.jb,this.Oa,this.jd,this.R,this.Fa,this.M);if(this.b.tba)(this.od=
            a.wY(b,this.jd.Vd()))&&this.od.G$(s(function(c){
            this.Ja.scrollIntoView(c.Ha().Ua())
        },this));a=this.Og.vG;this.N.a(a,Ql,this.V1).a(a,Pk,this.W1);this.Og.$m.B8(s(this.wX,this))||iG(this.J,lG);Awa(this.k,this.Og);iG(this.J,bCa)
    }
};o.wX=function(){
    iG(this.J,lG)
};o.tZ=function(){
    if(!this.k.xb){
        vs(this.F,3);this.k.setActive(i)
    }wCa(this)
};o.E$=function(){
    this.Ss=new (bm(em(dm.V(),tp)).m_())(this.eb,this.k.a,this.Q,this.a.K(),this.R,this.F,this.k.Ia);this.Ss.gK(this.b);this.k.hE(this.Ss);iG(this.J,aCa)
};
var xCa="loadA11yModule";function wCa(a){
    function b(){
        jm(dm.V(),qG,c)
    }var c=s(a.raa,a);a.b.B5&&b();a.b.HZ&&fa(xCa,b,void 0)
}o.g6=function(a){
    var b=this.a.K().Ha();if(Te(this.b))this.Fa.Z(Es(b));else this.Og&&a.b&&this.Og.$m.aaa(b)
};o.pP=function(){
    return rg.V()
};o.i6=function(a){
    this.wa();a()
};o.h6=function(a){
    if(sG(this,a.k)!=sG(this,a.b))if(sG(this,a.b)){
        this.Ja.k.Z(l);this.o&&this.o.Aa(l);this.k.a.Aa(l)
    }else{
        this.Ja.k.Z(i);this.o&&this.o.Aa(i);this.k.a.Aa(i)
    }
};
o.V1=function(){
    this.k.a.SA=l;this.o&&this.o.Aa(l)
};o.W1=function(){
    this.k.a.SA=i;this.o&&this.o.Aa(i)
};function sG(a,b){
    return b&&wy(a.jb.a,32)?b.o():b.k()
}o.W3=function(){
    if(this.jd&&this.Og){
        var a=em(dm.V(),tp);a.pc()&&(new (a.Vc.M_())(this.b.k,this.jb.Wf(),this.jd,this.Og.$m.d_())).show()
    }
};o.g2=function(a){
    this.Ia.a.a(Zya,a.height)
};o.s8=function(a){
    var b=this.a.Q,c;for(c in a){
        var d=b.a[c]||j;d&&d.update(a[c])
    }
};o.Ld=function(){
    this.Ja.Ld()
};
o.A=function(){
    pG.z.A.call(this);y(this.Mh);delete this.Mh;y(this.b);delete this.b;y(this.Q);delete this.Q;y(this.Og);delete this.Og;y(this.Qa);delete this.Qa;y(this.jb);delete this.jb;y(this.od);delete this.od;y(this.o);delete this.o;y(this.Ja);delete this.Ja;y(this.eb);delete this.eb;y(this.k);delete this.k;delete this.M;y(this.Fa);delete this.Fa;y(this.Od);delete this.Od;y(this.Oa);delete this.Oa;y(this.jd);delete this.jd;y(this.nD);delete this.nD;y(this.Qq);delete this.Qq;y(this.a);delete this.a;
    y(this.N);delete this.N;y(this.R);delete this.R;y(this.Zb);delete this.Zb;y(this.J);delete this.J;y(this.ha);delete this.ha;y(this.$K);delete this.$K;y(this.F);delete this.F;y(this.Bb);delete this.Bb;y(this.nK);delete this.nK;y(this.Ss);delete this.Ss;y(this.Lc);delete this.Lc;y(this.Ia);delete this.Ia;y(YAa)
};
var yCa="onfocusout",zCa="onblur",ACa="onfocusin",BCa="onfocus";

window._createKixApplication=function(a,config,c,d,e,g,imageUrls){
	
    if(config.ol){
        for(var k=af(cf(window.location.href)).split(hb),m={},n=0;n<k.length;++n){
            var p=k[n].split(ff);if(p.length==2&&p[0].length>0&&p[1].length>0)m[cb(p[0])]=cb(p[1])
        }
		k=m.id;
		if(!k){
			f(Error("No docId in URL"));
		}
		config.docid=k
    }
	config=new Se(config);
	k=new sy(config.k,config.QM);
	k.setTitle(e||z,i);
	uy(k,xy(k.a,16,config.b==3));
	g||ota(k);
	a=new pG(config,k,a,g,imageUrls);
	a.xc();
	c.onunload=s(a.i6,a,d);
	d=a.F; 
	e=a.Fa;
	c=Ec?c.ownerDocument:c;
	d.N.a(e,zq,d.s1).a(e,xq,d.r1);
	e=A?yCa:zCa;
	c[A?ACa:BCa]=s(d.u5,d);c[e]=s(d.t5,d);
	return a
};
function tG(a){
    this.Y=a;this.F=[];this.J=[]
}t(tG,x);o=tG.prototype;o.K=function(){
    return this.Y
};o.Ud=function(){
    return this.F
};o.Ea=function(a){
    var b=a.Qj(this.Y);Hb(this.J,b,0);this.Y.Ea(a);this.F.push(a)
};o.Da=function(a){
    a.a();Hb(this.J,a.J,0);Nb(this.F,a.Ud())
};o.A=function(){
    tG.z.A.call(this);delete this.Y;delete this.F
};function uG(a,b,c){
    tG.call(this,a);this.b=b;this.k=!!c
}t(uG,tG);uG.prototype.a=function(){
    var a=this.K(),b=Tw(a),c=this.b;a.a.Q&&Wh(c,Jh);if(a=this.k){
        a:{
            a=this.K();for(var d=0;d<b.length;d++)if(!a.ex(Jh,b[d]).qf(c)){
                a=i;break a
            }a=l
        }a=!a
    }if(!a)for(a=0;a<b.length;a++)this.Ea(new $C(Jh,b[a],b[a],c))
};uG.prototype.A=function(){
    uG.z.A.call(this);delete this.b
};function vG(a,b,c){
    tG.call(this,a);this.b=b;this.k=c
}t(vG,tG);vG.prototype.a=function(){
    var a=this.K(),b=this.b;mh(a.Lb(zh),function(e,g){
        var h=vb(Cp(g),b);if(h!=-1){
            var k=rl(this.K(),zh,e),m={};m.cs_cids=kj(h);this.Ea(new $C(zh,e,k,m))
        }return l
    },this);var c=Wo(a,b);if(c!=-1){
        var d=Xo(a,c);this.Da(this.k(a,new Ha(c,d),i))
    }
};function wG(a,b){
    tG.call(this,a);this.Wh=b
}t(wG,tG);wG.prototype.a=function(){
    this.K().pb(this.Wh)&&this.Ea(new bD(this.Wh))
};function xG(a,b,c,d){
    tG.call(this,a);this.o=c;this.b=b;this.k=d
}t(xG,tG);xG.prototype.a=function(){
    var a=this.K();this.b!=-1&&this.Da(this.k(a,new Ha(this.b,this.b),i,l,i));var b=Wo(a,this.o),c=Xo(a,b);this.Da(this.k(a,new Ha(b,c),i))
};xG.prototype.A=function(){
    xG.z.A.call(this);delete this.k
};function yG(a,b,c,d,e,g,h,k){
    tG.call(this,a);this.k=b||j;this.o=!!c;this.M=!!d;this.Q=!!e;this.Fa=!!g;this.ha=!!h;this.Oa=!!k
}t(yG,tG);yG.prototype.b=0;
yG.prototype.a=function(){
    var a=this.K(),b=this.k||pl(a.Ha()),c=0;this.b=0;if(b){
        if(a.a.o)b=$ha(a.fa(),b);var d=b.start,e=b.end,g=j,h=j,k=j,m;if(this.Fa){
            g=a.Wa();h=Es(a.Ha())&&this.k?qp(a,a.Ha().a):j;m=ro(a);if(h&&b.end>=m-1){
                g==m+1&&g--;h==m+1&&h--
            }m=zk(a.Ka(K,d))
        }if(this.o)(k=zG(this,d,e,g,h))&&CCa(this,k.Ck,m,k.Oi);else if(!(e>ro(a))){
            b=a.fa();if(e==Xo(a,d)&&al(a,e)<d){
                e--;c++
            }for(var n=a.a.F,p=l,r=d;r<=e;r++){
                k=bh(b,r);if(k==Kg&&n){
                    var u=Dl(a,r);if(u<=e){
                        d--;r=u;continue
                    }
                }if(k==Hg){
                    p=i;u=a.fa().indexOf(Ig,
                        r);if(u<=e){
                        d--;r=u;continue
                    }
                }if(!p&&k==Ig){
                    g=e=r-1;if(h)h=e;break
                }if(Ega[k]||k==Xa&&!eh(b,r+1)){
                    if(k=zG(this,d,r-1,g,h)){
                        g=k.Ck;h=k.Oi
                    }e-=r-d;r=d;d=r+1;c++
                }
            }(k=zG(this,d,e,g,h))&&CCa(this,k.Ck,m,k.Oi);this.b=c
        }
    }
};
function zG(a,b,c,d,e){
    if(c<b)return d?{
        Ck:d,
        Oi:e
    }:j;var g=a.K();if(b>ro(g))return d?{
        Ck:d,
        Oi:e
    }:j;var h=g.fa(),k;if(k=c<ro(g))a:{
        k=a.K().fa();for(var m=b;m<=c;m++)if(fh(k,m)){
            k=i;break a
        }k=l
    }if(k){
        k=ch(h,c+1);if(!dh(h,b)){
            m=g.Ka(Jh,b);var n=g.Ka(Ih,b);a.Ea(new $C(Jh,k,k,m.ia()));a.Ea(new $C(Ih,k,k,n.ia()))
        }m=ch(h,b);h=a.K();m=bl(h.o,vu,m);n=0;for(var p;p=m[n];n++){
            p=h.pb(p);var r=p.a;if(r.W()==0||r.W()==2)a.Ea(new lD(p.ra(),k))
        }
    }var u,w;if(b==c){
        w=a.K();k=w.fa();w=b>1&&eh(k,b-1)?b-1:b<ro(w)-1&&eh(k,
            b+1)?b:-1;if(w>0)for(k=0;k<Rga.length;k++){
            h=bl(g.o,Rga[k],b);if(h.length!=0){
                u||(u=[]);for(m=0;m<h.length;m++)u.push(g.pb(h[m]))
            }
        }
    }k=lE(g.o,b,c);for(var v in k)a.Da(new wG(g,v));a.M||g.a.M&&DCa(a,g,b,c);a.Q||g.a.Fa&&ECa(a,g,b,c);a.Ea(new dD(b,c));if(u)for(k=0;k<u.length;k++){
        g=u[k];a.Ea(new XC(g.W(),g.ra(),g.ia()));a.Ea(new lD(g.ra(),w))
    }if(d)d=FCa(a,b,c,d);if(e)e=FCa(a,b,c,e);return d?{
        Ck:d,
        Oi:e
    }:j
}function FCa(a,b,c,d){
    if(d>c)return d-(c-b+1);else if(d>b)return b;return d
}
function DCa(a,b,c,d){
    var e=b.Uf(zh,c,d).Lb();if(!(e.length==1&&Cp(e[0]).length==0)){
        var g=new cc;mh(e,function(m,n){
            var p=Cp(n);dc(g,p);return l
        },a);d=[b.Ka(zh,c-1),b.Ka(zh,d+1)];for(c=0;e=d[c];c++)for(var h=Cp(e),k=0;e=h[k];k++)g.remove(e);d=g.Oc();for(c=0;e=d[c];c++)a.Da(new vG(b,e,AG))
    }
}function ECa(a,b,c,d){
    c=b.Uf(Dh,c,d).Lb();mh(c,function(e,g){
        var h=g.o;h&&this.Da(new xG(b,-1,h,AG));return l
    },a)
}function AG(a,b,c,d,e){
    return new yG(a,b,c,d,e)
}
function CCa(a,b,c,d){
    var e=a.K();Rx(e,new J(b,a.ha),i,d?new J(d,a.Oa):undefined);Ra(e.F.b,c)
};function BG(a){
    tG.call(this,a)
}t(BG,tG);BG.prototype.a=function(){
    var a=this.K(),b=Tw(a),c={};c.ls_id=j;for(var d=0;d<b.length;d++){
        var e=b[d],g=a.Hc(Ih,e);e=e;g=g.Rb*36;var h={};h.ps_il=g;h.ps_ifl=g;this.Ea(new $C(Jh,e,e,h));this.Ea(new $C(Ih,b[d],b[d],c))
    }
};function CG(a){
    R.call(this,fA,a)
}t(CG,R);
CG.prototype.a=function(a){
    var b=this.K(),c=pl(b.Ha()),d=dl(b),e=a.delbW,g=a.delbL;if(!e&&c){
        c=Zk(b.fa(),c);DG(this,c.start,c.end)
    }else{
        if(!c&&dh(b.b,d)){
            if(Xw(b,d)){
                this.Da(new BG(b));if(g){
                    d=d-1;DG(this,d,d)
                }return
            }var h=b.Ka(Jh,d);if(h.Gk()==1){
                d={};d.ps_al=0;this.Da(new uG(b,d));return
            }else if(h.Gk()==2){
                d={};d.ps_al=1;this.Da(new uG(b,d));return
            }c=h.Ci;h=h.Rj;if(h>0||c>0){
                d={};if(h==c){
                    d.ps_ifl=0;d.ps_il=0
                }else{
                    a=Math.min(h,c);d.ps_ifl=a;d.ps_il=a
                }this.Da(new uG(b,d));return
            }
        }if(d!=al(b,d)+1){
            b=
            b.fa();c=bh(b,d-1);if(!(GCa(this,c)||c==Xa&&GCa(this,bh(b,d))))if(g){
                a=Xv(a.view).start;if(d!=a)DG(this,a,d-1);else{
                    d=d-1;DG(this,d,d)
                }
            }else if(e){
                a=Uk(d,b);d=Zk(b,new Ha(a,d-1));DG(this,d.start,d.end)
            }else{
                d=d-1;DG(this,d,d)
            }
        }
    }
};function GCa(a,b){
    return b==Kg||b==Lg||b==Mg||b==Ng
}function DG(a,b,c,d){
    a.Da(new yG(a.K(),new Ha(b,c),l,l,l,i,d))
}aA(fA,function(a){
    return new CG(a)
});function EG(a){
    R.call(this,gy,a)
}t(EG,R);EG.prototype.a=function(a){
    var b=this.K(),c=b.Ha(),d=pl(c);c=c.Ua().b;var e=b.Wa(),g=!!a.dso;if(!(!d&&g))if(d){
        d=Zk(b.fa(),d);this.Da(new yG(b,d,l,l,l,i))
    }else{
        d=b.fa();g=a.delrW;if(a.delrP)if(fh(d,e))e!=Xo(b,e)&&this.Da(new yG(b,new Ha(e,e),l,l,l,i,c));else{
            a=ch(d,e)-1;this.Da(new yG(b,new Ha(e,a),l,l,l,i,c))
        }else if(g&&!fh(d,e)){
            a=Vk(e,d)?Qk(e,d):Yk(e,d);a--;this.Da(new yG(b,new Ha(e,a),l,l,l,i))
        }else e!=Xo(b,e)&&this.Da(new yG(b,new Ha(e,e),l,l,l,i))
    }
};
aA(gy,function(a){
    return new EG(a)
});function FG(a,b,c,d,e,g){
    tG.call(this,a);this.b=b;this.o=c;this.M=d;this.k=e;this.Q=!!g
}t(FG,tG);
FG.prototype.a=function(){
    var a=this.b,b=this.M,c=this.k,d=this.K(),e;if(!(e=!d.a.Q)){
        if(!(e=this.Q)){
            a:switch(this.b){
                case K:case Jh:e=i;break a;default:e=l
            }e=!e
        }e=e
    }if(e)this.Ea(new $C(this.b,b,c,this.o));else{
        e=this.o;if(!Ma(e)){
            var g=DA(d),h=this.K().fa(),k=Wg(h,Xa,this.M,this.k);h=ch(h,this.k);if(k.length==0||h>k[k.length-1])k.push(h);for(h=0;h<k.length;h++){
                var m=k[h],n=Qj(d.Ka(Jh,m));n=NE(g,n,a);var p={},r;for(r in e){
                    var u=l,w;w=r;var v=a;if(rh(th(),Uh))w=(v=Xh(v))?v.Jm(w):j;else w=j;if(w){
                        v=

                        {};v[r]=e[r];if(n.qf(v))u=p[w]=i;else p[w]=l
                    }u||(p[r]=e[r])
                }this.Ea(new $C(this.b,b,Math.min(m,c),p));b=m+1
            }
        }
    }
};FG.prototype.A=function(){
    FG.z.A.call(this);delete this.o
};function GG(a,b,c,d){
    tG.call(this,a);this.b=b;this.k=c;this.o=d?d:{}
}t(GG,tG);
GG.prototype.a=function(){
    if(this.b.length!=0){
        var a=this.K(),b=a.Ha(),c=this.k,d=this.o,e=qp(a,c),g=dh(a.b,e);if(a.a.o&&gl(a.fa(),e)){
            this.b=this.b.replace(Yha,z);if(this.b.length==0)return
        }if(g){
            c=zk(uo(a,K,c));for(var h in d)c[h]=d[h];d=c
        }b=b.b;for(h in b)d[h]=b[h];c=a.Ka(Jh,e).ia();g=a.Ka(Ih,e).ia();var k=e<=ro(a)?kp(a,e):[];this.Ea(new eD(e,this.b));b=this.b;for(var m=[],n=0;n<b.length;n++){
            n=b.indexOf(Xa,n);if(n<0)break;m.push(n)
        }if(m.length>0&&k.length>0){
            n=m[0]+e;for(b=0;b<k.length;b++)this.Ea(new lD(k[b],
                n))
        }for(b=0;b<m.length;b++){
            k=m[b]+e;if(c.ps_hdid){
                c=Qa(c);c.ps_hdid=om(Nl)
            }this.Da(new FG(a,Jh,c,k,k));this.Da(new FG(a,Ih,g,k,k))
        }c=e+this.b.length-1;g=oAa(a.k);for(b=0;b<g.length;b++){
            m=g[b];n=(k=Nh[m])?k.Mj():i;var p;p=(k=Nh[m])?k.lw():i;if(!(n&&p||$h(m))){
                var r=a.Ka(m,e),u=a.Ka(m,e+1);k=Xh(m);u=!r.kb(u);n=!n&&u;p=!p&&!r.kb(k)&&fh(a.b,e);if(n||p){
                    this.Da(new FG(a,m,k.ia(),e,c));if(m==Hh){
                        m=Ak(i);for(h in m)d[h]=m[h]
                    }
                }
            }
        }Ma(d)||this.Da(new FG(a,K,d,e,c))
    }
};
GG.prototype.A=function(){
    GG.z.A.call(this);delete this.k;delete this.o
};function HG(a){
    R.call(this,my,a)
}t(HG,R);HG.prototype.a=function(a){
    var b=a.ch,c=a.spi,d=a.pimc;a=this.K();d&&this.Da(new yG(a,new Ha(c,c+d.length-1)));d=Gs(a,i).ia();this.Da(new GG(a,b,new J(c),d))
};aA(my,function(a){
    return new HG(a)
});function IG(a,b){
    tG.call(this,a);this.b=b
}t(IG,tG);IG.prototype.a=function(){
    var a=this.K(),b=a.Ha(),c=Rv(b),d={};if(Es(b)){
        d=a.ot(K,dl(a)).ia();var e;e=(e=pl(a.F))?fh(a.b,e.end):l;if(e){
            b=pl(b);b.start!=b.end&&this.Da(new yG(a,new Ha(b.start,b.end-1)))
        }else this.Da(new yG(a))
    }this.Da(new GG(a,this.b,c,d))
};function JG(a){
    R.call(this,gA,a)
}t(JG,R);JG.prototype.a=function(a){
    var b=a.ch;a=this.K();this.Da(new IG(a,b));var c=pl(a.Ha());b=(c?c.start:a.Wa())+b.length;Rx(a,new J(b),i)
};aA(gA,function(a){
    return new JG(a)
});function KG(a){
    this.b=a;this.a=[]
}t(KG,x);KG.prototype.WG=function(){
    return this.b
};KG.prototype.A=function(){
    KG.z.A.call(this);this.a=this.b=j
};function LG(a){
    this.a=new KG(a);this.N=new he(this)
}t(LG,Vf);
/***載入JS*****/
LG.prototype.load=function(){
	
    for(var a=this.N,b=this.a.WG(),c=0;c<b.length;c++){
        var d=new IF;a.a(d,OF,s(this.b,this,c));
		d.send(b[c])
    }
};
LG.prototype.b=function(a,b){
    var c=b.target;if(TF(c)){
        this.a.a[a]=c.Ne();var d;a:{
            var e=this.a;d=e.a;if(d.length==e.b.length){
                for(e=0;e<d.length;e++)if(!sa(d[e])){
                    d=l;break a
                }d=i
            }else d=l
        }d&&this.dispatchEvent(RF)
    }else this.dispatchEvent(lm);c.wa()
};
LG.prototype.A=function(){
    LG.z.A.call(this);this.N.wa();this.N=j;this.a.wa();this.a=j
};function MG(){}t(MG,x);MG.prototype.k=l;MG.prototype.b=j;MG.prototype.o=function(){};function NG(){
    this.N=new he(this);this.a=[]
}t(NG,MG);NG.prototype.o=function(a,b,c,d){
    for(var e=[],g=0;g<a.length;g++)Nb(e,b[a[g]].WG());if(this.k)HCa(this,e);else{
        b=new LG(e);e=this.N;e.a(b,RF,s(this.zi,this,b,a,c,d),l,j);e.a(b,lm,s(this.handleError,this,b,a,d),l,j);b.load()
    }
};function ICa(a,b){
    var c=document.createElement(Fa);c.src=b;c.type=Ga;return c
}
function HCa(a,b){
    if(b.length){
        var c=document.getElementsByTagName(ED)[0]||document.documentElement;if(Ec)for(var d=0;d<b.length;d++){
            var e=ICa(a,b[d]);c.appendChild(e)
        }else{
            d=a.a.length;Nb(a.a,b);if(!d){
                b=a.a;var g=function(){
                    var h=b.shift(),k=ICa(a,h);if(b.length)if(A)k.onreadystatechange=function(){
                        if(!this.readyState||this.readyState==PD||this.readyState==OF){
                            k.onreadystatechange=ha;g()
                        }
                    };else k.onload=g;c.appendChild(k)
                };g()
            }
        }
    }
}
NG.prototype.zi=function(a,b,c,d){
    b=a.a.a.join(Xa);var e=i;try{
        if(this.b?Wa(b,this.b):1)naa(b);else e=l
    }catch(g){
        e=l
    }if(b=e)b&&c&&c();else d&&d(j);Zf(a.wa,5,a)
};NG.prototype.handleError=function(a,b,c,d){
    c&&c(d);Zf(a.wa,5,a)
};NG.prototype.A=function(){
    NG.z.A.call(this);this.N.wa();this.N=j
};function _initializeModules(a,b,c){
    var d=new NG;d.k=l;var e=dm.V();e.QR=d;for(var g in a)e.a[g]=new $l(a[g],g);if(e.F==e.M){
        e.F=j;Qia(e.M,s(e.mP,e))
    }for(var h in b)e.a[h].GP=b[h];c&&hm(e,c)
};
