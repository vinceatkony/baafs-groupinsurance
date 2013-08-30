//Form JS File
function frmHome_frmHome_preshow_seq1(status, GetPolicy) {
    if (status == 400) {}
};

function frmHome_frmHome_preshow_seq0(eventobject, neworientation) {
    var GetPolicy_inputparam = {};
    GetPolicy_inputparam["serviceID"] = "GetPolicy";
    GetPolicy_inputparam["httpheaders"] = {};
    GetPolicy_inputparam["httpconfigs"] = {};
    GetPolicy = appmiddlewareinvokerasync(GetPolicy_inputparam, frmHome_frmHome_preshow_seq1);
};

function frmHome_button2098211745118_onClick_seq0(eventobject) {};

function frmHome_button2098211745119_onClick_seq0(eventobject) {};

function addWidgetsfrmHome() {
    var vbox2098211745124 = new kony.ui.Box({
        "id": "vbox2098211745124",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 21,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
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
        "toolTip": null
    });
    var vbox2098211745125 = new kony.ui.Box({
        "id": "vbox2098211745125",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 22,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox2098211745116.add(
    vbox2098211745124, image22098211745117, vbox2098211745125);
    var button2098211745118 = new kony.ui.Button({
        "id": "button2098211745118",
        "isVisible": true,
        "text": "Find an Agent",
        "skin": "btnBold",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button2098211745118_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
    var button2098211745119 = new kony.ui.Button({
        "id": "button2098211745119",
        "isVisible": true,
        "text": "Get Policy Info",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button2098211745119_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
    frmHome.add(
    hbox2098211745116, button2098211745118, button2098211745119);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": "Acme Insurance",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmRed",
        "preShow": frmHome_frmHome_preshow_seq0,
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};