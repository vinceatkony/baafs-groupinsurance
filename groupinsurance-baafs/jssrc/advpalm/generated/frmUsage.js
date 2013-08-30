//Form JS File
function frmUsage_frmUsage_init_seq0(eventobject, neworientation) {
    performXMLServiceCallToFetchPolicies.call(this);
};

function addWidgetsfrmUsage() {
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 57
    }, {});
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox2098211745116.add(
    vbox2098211745124, image22098211745117, vbox2098211745125);
    var vbox2098211745493 = new kony.ui.Box({
        "id": "vbox2098211745493",
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
    }, {
        "borderCollapse": false,
        "preOnclickJs": null,
        "postOnclickJs": null
    });
    vbox2098211745493.add();
    var label2098211745494 = new kony.ui.Label({
        "id": "label2098211745494",
        "isVisible": true,
        "text": "Usage For June",
        "skin": "lblSknMonth"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 51,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER
    }, {});
    var vbox2098211745495 = new kony.ui.Box({
        "id": "vbox2098211745495",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 27,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": false,
        "preOnclickJs": null,
        "postOnclickJs": null
    });
    vbox2098211745495.add();
    var hbox2098211745491 = new kony.ui.Box({
        "id": "hbox2098211745491",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox2098211745491.add(
    vbox2098211745493, label2098211745494, vbox2098211745495);
    var label2098211745469 = new kony.ui.Label({
        "id": "label2098211745469",
        "isVisible": true,
        "text": "Vehicle",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var label2098211745470 = new kony.ui.Label({
        "id": "label2098211745470",
        "isVisible": true,
        "text": "Miles Driven",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 32,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var label2098211745471 = new kony.ui.Label({
        "id": "label2098211745471",
        "isVisible": true,
        "text": "Driving Style",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var hbox2098211745468 = new kony.ui.Box({
        "id": "hbox2098211745468",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox2098211745468.add(
    label2098211745469, label2098211745470, label2098211745471);
    var segPoliciesbox = new kony.ui.Box({
        "id": "segPoliciesbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 25
    }, {});
    var segPolicies = new kony.ui.SegmentedUI2({
        "id": "segPolicies",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblStyle": "lblStyle",
            "hbox2098211745465": "hbox2098211745465",
            "lblMiles": "lblMiles",
            "lblAuto": "lblAuto"
        },
        "rowTemplate": segPoliciesbox,
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {
        "defaultSelection": true,
        "border": constants.SEGUI_BORDER_BOTH_BOTTOM_TOP
    });
    var lblAuto = new kony.ui.Label({
        "id": "lblAuto",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {
        "renderAsAnchor": false
    });
    var lblMiles = new kony.ui.Label({
        "id": "lblMiles",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 32,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {
        "renderAsAnchor": false
    });
    var lblStyle = new kony.ui.Label({
        "id": "lblStyle",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 38,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {
        "renderAsAnchor": false
    });
    var hbox2098211745465 = new kony.ui.Box({
        "id": "hbox2098211745465",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 34,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox2098211745465.add(
    lblAuto, lblMiles, lblStyle);
    segPoliciesbox.add(
    hbox2098211745465);
    frmUsage.add(
    hbox2098211745116, hbox2098211745491, hbox2098211745468, segPolicies);
};

function frmUsageGlobals() {
    var MenuId = [];
    frmUsage = new kony.ui.Form2({
        "id": "frmUsage",
        "title": "Acme Insurance",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmRed",
        "init": frmUsage_frmUsage_init_seq0,
        "addWidgets": addWidgetsfrmUsage
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
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