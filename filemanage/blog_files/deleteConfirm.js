YUI.add('deleteConfirm', function(Y){
    var obj={},attrs={};

    attrs.srcNode = {}; 

    obj.initializer = function (attr) {
        var srcNode = this.get('srcNode');
        this.initBindEvent();
        this.panel = null;
    };  

    obj.initBindEvent = function () {
        var clickCallback;
        var srcNode = this.get('srcNode');

        clickCallback = Y.bind(this.clicked, this);
        srcNode.delegate('click', clickCallback, '.btn-delete');

    };  
    /**
    * render YUI confirm panel
    */
    obj.renderConfirm = function (node) {
        var buttons = [];
        var ok, close, run, hide;
        run = Y.bind(this.bubbleToNode, this, {node: node, event: "click"});
        hide = Y.bind(this.hide, this);
        ok = {
            value: "確定",
            section: Y.WidgetStdMod.FOOTER,
            action: run
        }
        close = {
            value: "取消",
            section: Y.WidgetStdMod.FOOTER,
            action: hide
        }
        this.panel = new Y.Panel({
            srcNode: "#panelDel",
            width   : 400,
            centered: true,
            modal   : false,
            hideOn: [
                {
                    eventName: 'clickoutside'
                }
            ]
        });
        this.panel.addButton(ok);
        this.panel.addButton(close);

        var content = node.getData('message');
        if (!content) {content = "Are you sure?";}
        this.panel.setStdModContent(Y.WidgetStdMod.HEADER, "刪除檔案!");
        this.panel.setStdModContent(Y.WidgetStdMod.BODY, content);
        this.panel.render();
    };
    obj.bubbleToNode = function (args) {
        var node, event;
        node = args.node;
        event = args.event;
        node.simulate(event, {"ctrlKey": true});
        this.panel.hide();

    };

    obj.hide = function () {
        this.panel.hide();
    };

    obj.clicked = function (E) {
        var node;
        if (E.ctrlKey && E.ctrlKey == true) {
        } else {
            node = E.currentTarget;
            this.renderConfirm(node);

            E.halt();
        }

    };
    Y.deleteConfirm = Y.Base.create('deleteConfirm', Y.Base, [],
        obj,
        {
            ATTRS:attrs
        }
    );


}, "3.11.0", {requires:["base", "panel", "event-delegate", "node-event-simulate"]});
