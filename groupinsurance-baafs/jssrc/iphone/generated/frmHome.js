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

function frmHome_button2098211745118_onClick_seq0(eventobject) {
    frmAgent.show();
};

function frmHome_button2098211745119_onClick_seq0(eventobject) {
    frmPolicy.show();
};

function frmHome_button2098211745978_onClick_seq0(eventobject) {
    setAppMenuBadgeValue.call(this);
};

function frmHome_button2098211745983_onClick_seq0(eventobject) {
    resetAppMenuBadgeValue.call(this);
};

function addWidgetsfrmHome() {
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
        "skin": "btnBold",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button2098211745118_onClick_seq0
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
        "onClick": frmHome_button2098211745119_onClick_seq0
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
    var button2098211745978 = new kony.ui.Button({
        "id": "button2098211745978",
        "isVisible": true,
        "text": "MenuTest",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button2098211745978_onClick_seq0
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
    var button2098211745983 = new kony.ui.Button({
        "id": "button2098211745983",
        "isVisible": true,
        "text": "Reset Menu",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button2098211745983_onClick_seq0
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
    frmHome.add(
    hbox2098211745116, button2098211745118, button2098211745119, button2098211745978, button2098211745983);
};

function frmHomeGlobals() {
    var MenuId = [
        ["menuitem1984075283974", "Summary", null, null],
        ["menuitem1984075283975", "My Order", null, null],
        ["menuitem1984075283976", "My Inventory", null, null],
        ["menuitem1984075283977", "My Recipes", null, null]
    ];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": "Acme Insurance",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmRed",
        "preShow": frmHome_frmHome_preshow_seq0,
        "menuItems": MenuId,
        "addWidgets": addWidgetsfrmHome
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