//Form JS File
function frmProducts_frmProducts_preshow_seq1(status, GetPolicy) {
    if (status == 400) {}
};

function frmProducts_frmProducts_preshow_seq0(eventobject, neworientation) {
    var GetPolicy_inputparam = {};
    GetPolicy_inputparam["serviceID"] = "GetPolicy";
    GetPolicy_inputparam["httpheaders"] = {};
    GetPolicy_inputparam["httpconfigs"] = {};
    GetPolicy = appmiddlewareinvokerasync(GetPolicy_inputparam, frmProducts_frmProducts_preshow_seq1);
};

function frmProducts_button2098211745118_onClick_seq0(eventobject) {
    frmAgent.show();
};

function frmProducts_button2098211745119_onClick_seq0(eventobject) {
    frmPolicy.show();
};

function addWidgetsfrmProducts() {
    var vbox2098211745124 = new kony.ui.Box({
        "id": "vbox2098211745124",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 21,
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": false,
        "preOnclickJs": null,
        "postOnclickJs": null
    });
    vbox2098211745124.add();
    var image22098211745117 = new kony.ui.Image2({
        "id": "image22098211745117",
        "isVisible": true,
        "src": "acme.jpg",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 57
    }, {});
    var vbox2098211745125 = new kony.ui.Box({
        "id": "vbox2098211745125",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 22,
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": false,
        "preOnclickJs": null,
        "postOnclickJs": null
    });
    vbox2098211745125.add();
    var hbox2098211745116 = new kony.ui.Box({
        "id": "hbox2098211745116",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxred",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 23,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox2098211745116.add(
    vbox2098211745124, image22098211745117, vbox2098211745125);
    var button2098211745118 = new kony.ui.Button({
        "id": "button2098211745118",
        "isVisible": true,
        "text": "Find an Agent",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmProducts_button2098211745118_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    var button2098211745119 = new kony.ui.Button({
        "id": "button2098211745119",
        "isVisible": true,
        "text": "Get Policy Info",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmProducts_button2098211745119_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    frmProducts.add(
    hbox2098211745116, button2098211745118, button2098211745119);
};

function frmProductsGlobals() {
    var MenuId = [];
    frmProducts = new kony.ui.Form2({
        "id": "frmProducts",
        "title": "Acme Insurance",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmRed",
        "preShow": frmProducts_frmProducts_preshow_seq0,
        "addWidgets": addWidgetsfrmProducts
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "submitSecure": false,
        "noCache": true,
        "secureData": false,
        "captureGPS": false,
        "onLoadJS": null,
        "unLoadJS": null,
        "titleBar": true
    });
};