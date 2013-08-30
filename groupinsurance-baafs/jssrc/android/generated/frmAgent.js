//Form JS File
function frmAgent_frmAgent_preshow_seq1(status, GetPolicy) {
    if (status == 400) {
        if (GetPolicy != null && GetPolicy != undefined && GetPolicy["policyList"] != null && GetPolicy["policyList"] != undefined) {
            frmAgent.segment220982117452368.setData($srcvar);
        }
    }
};

function frmAgent_frmAgent_preshow_seq0(eventobject, neworientation) {
    var GetPolicy_inputparam = {};
    GetPolicy_inputparam["serviceID"] = "GetPolicy";
    GetPolicy_inputparam["httpheaders"] = {};
    GetPolicy_inputparam["httpconfigs"] = {};
    GetPolicy = appmiddlewareinvokerasync(GetPolicy_inputparam, frmAgent_frmAgent_preshow_seq1);
};

function addWidgetsfrmAgent() {
    var vbox2098211745127 = new kony.ui.Box({
        "id": "vbox2098211745127",
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
    vbox2098211745127.add();
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
    }, {});
    var vbox2098211745128 = new kony.ui.Box({
        "id": "vbox2098211745128",
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
    vbox2098211745128.add();
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox2098211745116.add(
    vbox2098211745127, image22098211745117, vbox2098211745128);
    var textbox22098211745121 = new kony.ui.TextBox2({
        "id": "textbox22098211745121",
        "isVisible": true,
        "text": "Find an Agent",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 58
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var button2098211745122 = new kony.ui.Button({
        "id": "button2098211745122",
        "isVisible": true,
        "text": "Search",
        "skin": "btnNormal",
        "focusSkin": "btnFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var hbox2098211745120 = new kony.ui.Box({
        "id": "hbox2098211745120",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox2098211745120.add(
    textbox22098211745121, button2098211745122);
    var segment220982117452368box = new kony.ui.Box({
        "id": "segment220982117452368box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 51
    }, {});
    var segment220982117452368 = new kony.ui.SegmentedUI2({
        "id": "segment220982117452368",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "image22098211745123": "image22098211745123"
        },
        "rowTemplate": segment220982117452368box,
        "widgetSkin": "segWhite",
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "needPageIndicator": true,
        "groupCells": false,
        "screenLevelWidget": false,
        "pageOnDotImage": null,
        "pageOffDotImage": null,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 51
    }, {});
    var image22098211745123 = new kony.ui.Image2({
        "id": "image22098211745123",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {});
    segment220982117452368box.add(
    image22098211745123);
    frmAgent.add(
    hbox2098211745116, hbox2098211745120, segment220982117452368);
};

function frmAgentGlobals() {
    var MenuId = [];
    frmAgent = new kony.ui.Form2({
        "id": "frmAgent",
        "title": "Acme Insurance",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmRed",
        "preShow": frmAgent_frmAgent_preshow_seq0,
        "addWidgets": addWidgetsfrmAgent
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};