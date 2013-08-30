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
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox2098211745124.add();
    var image22098211745117 = new kony.ui.Image2({
        "id": "image22098211745117",
        "isVisible": true,
        "src": "acme.jpg",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 57
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var vbox2098211745125 = new kony.ui.Box({
        "id": "vbox2098211745125",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 22,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox2098211745125.add();
    var hbox2098211745116 = new kony.ui.Box({
        "id": "hbox2098211745116",
        "isVisible": true,
        "skin": "hboxred",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 23,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
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
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};