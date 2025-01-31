/***
Puritys Free js ui library
A mutliple option select ui.

author: http://puritys.me/
****/
/***
Sample to use.
 var s = new PF_multiLevelSelector();
 s.addOption({id: "text", childId: "child", inputName: "a1", defaultValue: 2}, [":1:食品",":2:房子",":3:人名"]);
 s.addOption({id: "child", childId: "child2", inputName: "a2", defaultValue: 3}, ["1:1:零食類","1:2:正餐","2:3:豪宅","2:4:一般房子","3:5:名人","3:6:一般人"]);
 s.showOne("text");
***/

function PF_multiLevelSelector(){
	this.n=0;
	this.data=new Array();
}

var o = PF_multiLevelSelector.prototype;

/**
* add data
* @method addTrugger
* @param attr need id,childId, inputName
* @param data select's option
*/
o.addOption = function (attr, data) {/*{{{*/
    var n=this.n;
    this.data[n]=new Object();
    this.data[n].id = attr.id;
    this.data[n].childId = attr.childId;
    this.data[n].data = data;
    this.data[n].inputName = attr.inputName;
    this.data[n].data = data;
    if (attr.defaultValue) {
        this.data[n].defaultValue = attr.defaultValue;
    }
    if (attr.selectFunction) {
        this.data[n].selectFunction = attr.selectFunction;
    }

    this.n++;
};/*}}}*/


/**
* get the a option of option group
* @method getOptionData
*
*/
o.getOptionData = function(id){/*{{{*/
    var n = this.n;
    for(var i=0; i<n;i++){
        if(this.data[i].id == id){
            return this.data[i];
        }
    }
    return -1;
};/*}}}*/

//start trigger
o.trigger = function(E, div){/*{{{*/
    var THIS, childId, node;
    THIS = E.data.THIS;
    childId = E.data.childId;
    node = E.currentTarget;
    
    THIS.showOne(childId, node.value);
};/*}}}*/

/*
* outpu a select into div, and bind event
* @method showOnw
*/
o.showOne = function(id, pid, v) {/*{{{*/
    var dobj = this.getOptionData(id);
    var newNode, tmpNode;
    var hasOption = false; //If child is empty, don't need show select
    var n;
    if(!v){
        v = dobj.defaultValue;
    } else{
        dobj.defaultValue = v;
    }
    if(!pid || pid==''){
        pid = -1;
    }
    if (!dobj.data) {
        return false;
    }
    n = dobj.data.length;
    var c = '',s;

    
    newNode = document.createElement('select');
    newNode.name = dobj.inputName;
    var ck = '';
    var next_pid = -1;
    for (var i=0; i<n;i++) {
        s=dobj.data[i].split(':');
        ck='';
        
        if (pid == -1) {
            if(s[1] == v){
                ck='selected';
                next_pid=s[1];
                dobj.value = v;//改變預設值
            }
            tmpNode = $('<option value="'+s[1]+'" '+ck+'>'+s[2] + '</option>');
            $(newNode).append(tmpNode);
            
        } else if(s[0] == pid){
            if(s[1] == v){
                ck='selected';
                next_pid=s[1];
                dobj.value = v;//改變預設值

            }

            tmpNode = $('<option value="'+s[1]+'" '+ck+'>'+s[2] + '</option>');
            $(newNode).append(tmpNode);
            hasOption = true;
        }
        
    }

    if (pid != -1  && !hasOption) {
        $("#" + id).html("");
        if (dobj.childId) {
            this.showOne(dobj.childId, -2);
        }
        return false;
    }
    //bind event
    if (dobj.childId) {
        $(newNode).bind('change', {THIS: this, childId: dobj.childId}, this.trigger);
    }
    $("#" + id).html(newNode);

    if (!v || next_pid==-1) {
        if (pid == -1) {
            s = dobj.data[0].split(':');
            next_pid = s[1];
        } else {
            for (var i=0; i<n;i++) {
                s = dobj.data[i].split(':');
                if (s[0] == pid) {
                    next_pid = s[1];
                    break;
                }
            }
        }
    }

        
    if($.isFunction(dobj.selectFunction)){
        $("#" + id).find('select').bind('change', {THIS: this},dobj.selectFunction);
        dobj.selectFunction({currentTarget: $("#" + id).find('select')}, {THIS: this});
    }
    
    if(dobj.childId){
        this.showOne(dobj.childId, next_pid);
    }
};/*}}}*/


/****抓此值的parent id*****/
o.getParentId=function(data,v){
    var n=data.length,s;
    for(var i=0;i<n;i++){
        s=data[i].split(/:/);
        if(s[2]==v){
            return s[0];
        }
    }
    return -1;
};	


