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
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": false,
        "preOnclickJs": null,
        "postOnclickJs": null
    });
    vbox2098211745127.add();
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
    var vbox2098211745128 = new kony.ui.Box({
        "id": "vbox2098211745128",
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
    vbox2098211745128.add();
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
    vbox2098211745127, image22098211745117, vbox2098211745128);
    var textbox22098211745121 = new kony.ui.TextBox2({
        "id": "textbox22098211745121",
        "isVisible": true,
        "text": "Find an Agent",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "containerWeight": 58
    }, {
        "preOnclickJS": null,
        "postOnclickJS": null,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false,
        "autoComplete": false
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
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    var hbox2098211745120 = new kony.ui.Box({
        "id": "hbox2098211745120",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
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
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "containerWeight": 51
    }, {
        "defaultSelection": true,
        "border": constants.SEGUI_BORDER_BOTH_BOTTOM_TOP
    });
    var image22098211745123 = new kony.ui.Image2({
        "id": "image22098211745123",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "containerWeight": 12
    }, {
        "renderAsAnchor": false
    });
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