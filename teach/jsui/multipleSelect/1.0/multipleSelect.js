/*****
version 2.0 
showCanSelect 可選
showSelected 已選
****/
if(!vj_tmp_object){
	var vj_tmp_object=0;
}
function multipleSelect(ob,lang){
	this.parent='me';
	this.gap='-';//分隔的符號
	this.monther='monther'+Math.round(Math.random()*100);
	this.child="child"+Math.round(Math.random()*100);
	this.name='';
	this.option='';
	this.title=''; //主題 可不填 就不出現
	
	this.width=400;
	
	
	if(ob){
		for(pro in ob){
			this[pro]=ob[pro];
		}
	}
	//語言
	this.lang=new Object();
	this.lang.showCanSelect='可選擇的資料';
	this.lang.showSelected='已選擇的資料';
	if(lang){
		for(pro in lang){
			this.lang[pro]=lang[pro];
		}
	}
	
	this.createName=function (){
		vj_tmp_object++;
		eval('vj_tmp_object'+vj_tmp_object+'=this;');
		return 'vj_tmp_object'+vj_tmp_object;
		
	};
	this.vbName=this.createName();
	
	if(!this.name){
		alert(' multipleSelect2 請輸入input的name');
	}
	
	
	
	this.setData=function(addId){
		this.parent=addId;
	};
	
	
	this.create=function(){

		var m=this.monther,c=this.child;
		var sp=document.createElement('span');
		var moveRight=document.createElement('a');
		//option
		var op=this.option,s;
		var n=op.length;
		var canOp='',selectedOp=''; //可選擇的option
		var val='';
		for(var i=0; i<n;i++){
			s=op[i].split(/:/);
			if(s[1]==0){
				canOp+='<option value="'+s[0]+'">'+s[2]+'</option>';
			}
			else{
				selectedOp+='<option value="'+s[0]+'">'+s[2]+'</option>';
				if(val){
					val+=this.gap;
				}
				val+=s[0];
			}
		}

		moveRight.onclick=this.add;
		moveRight.id="add";
		var sp=document.createElement('div');
		sp.style.width=this.width+'px';
		sp.className='multipleSelect';
		if(this.title){
			sp.innerHTML+='<div class="top_title">'+this.title+'</div>';
		}
		sp.innerHTML+='<div class="search"><input id="multi_search" onkeyup="'+this.vbName+'.search();return false;"  /> <button onclick="'+this.vbName+'.search();return false;">搜尋</button></div><input type="hidden" id="val" name="'+this.name+'" value="'+val+'"><table width="288" border="0" cellpadding="0" cellspacing="0" class="multipleSelect">  <tr>   <td width="100"><span class="title">'+this.lang.showCanSelect+'</span>	<br /><select  size="10" multiple="multiple" id="'+m+'" style=" width:180px;height:200px;">'+canOp+' </select></td>    <td width="37" align="center" class="leftBtnBox"> <a href="#"   id="add"  onclick="'+this.vbName+'.add();return false;"  ></a> <a href="#" name="remove" id="remove"  onclick="'+this.vbName+'.remove();return false;" ></a>  	<a href="#" name="addAll" id="addAll"  onclick="'+this.vbName+'.addAll();return false;" ></a>  <a href="#" name="removeAll" id="removeAll"  onclick="'+this.vbName+'.removeAll();return false;" ></a></td>    <td width="100"><span class="title">'+this.lang.showSelected+'</span><br /><select  size="10" multiple="multiple" id="'+c+'" style=" width:180px;height:200px;">'+selectedOp+'</select></td>    <td  class="rightBtnBox">      <a href="#" id="s2up" value="↑" onclick="'+this.vbName+'.moveup();return false;" ></a>	  <a href="#"  id="s2down" value="↓" onclick="'+this.vbName+'.movedown();return false;" ></a></td>  </tr></table>';
		 
		//<a href="#" name="remove" id="remove"  onclick="this.remove();return false;" ></a>

		document.getElementById(this.parent).appendChild(sp);

		//$(sp).find('#add').click(this.add);
	};
	this.cal=function(){
		var v= $("#"+this.parent+" #"+this.child+" option");
		var val="";
		for(var i=0 ; i<v.length ; i++){
			if(i!=0){val+=this.gap;}
			val+=v[i].value.replace(this.gap,'');
		}
		$("#"+this.parent+" #val").val(val);
	};
	this.search=function(){
		var v=RegExp($("#"+this.parent+" #multi_search").val(),'i');
		var sel2 =$("#"+this.parent+" #"+this.child+" option");
		var ns=sel2.length;
		var sel=new Array();
		for(var i=0;i<ns;i++){
			sel.push(sel2[i].value);
		}
		var op=this.option;
		var n=op.length,k;
		var ok=1;
		var canOp='';
		for(var i=0;i<n;i++){
			ok=1;
			k=op[i].split(':');
			for(j=0;j<ns;j++){
				if(k[0]==sel[j]){
					ok=0;
					break;
				}
			}
			if(ok==1 && k[2].search(v)!=-1){
				canOp+='<option value="'+k[0]+'">'+k[2]+'</option>';
			}
			
		}
		$("#"+this.parent+" #"+this.monther).html(canOp);
		
	}
	this.add=function(){
		var alloptions = $("#"+this.parent+" #"+this.monther+" option");
		var so = $("#"+this.parent+" #"+this.monther+" option:selected");
		var o=so;
		so.get(so.length-1).index == alloptions.length-1?so.prev().attr("selected",true):so.next().attr("selected",true);
		
		$("#"+this.parent+" #"+this.child).append(so);
		this.cal();
	};
	this.remove=function(){
			var alloptions = $("#"+this.parent+" #"+this.child+" option");
			var so = $("#"+this.parent+" #"+this.child+" option:selected");
			
			so.get(so.length-1).index == alloptions.length-1?so.prev().attr("selected",true):so.next().attr("selected",true);
			
			$("#"+this.parent+" #"+this.monther).append(so);
			this.cal();
	};

	this.moveup=function(){
			var so = $("#"+this.parent+" #"+this.child+" option:selected");
		
			if(so.get(0).index!=0){
				var ind=so.get(0).index;
				so.each(function(){
					$(this).prev().before($(this));
					
				});
			
				if(ind==1 && $.browser.msie){
					$("#"+this.parent+" #"+this.child).parent().append($("#"+this.parent+" #"+this.child));
				}
			}
			else{
				 
			}
		 
			 
			this.cal();
			
	};
	this.movedown=function(){
			var alloptions = $("#"+this.parent+" #"+this.child+" option");
			var so = $("#"+this.parent+" #"+this.child+" option:selected");
			
			if(so.get(so.length-1).index!=alloptions.length-1){
				for(i=so.length-1;i>=0;i--)
				{
					var item = $(so.get(i));
					item.insertAfter(item.next());
				}
			}
			this.cal();
	};
	this.removeAll=function(){
		$("#"+this.parent+" #"+this.monther).append($("#"+this.parent+" #"+this.child+" option").attr("selected",true));
		this.cal();
	};
	this.addAll=function(){
		$("#"+this.parent+" #"+this.child).append($("#"+this.parent+" #"+this.monther+" option").attr("selected",true));
		this.cal();
	};
}


