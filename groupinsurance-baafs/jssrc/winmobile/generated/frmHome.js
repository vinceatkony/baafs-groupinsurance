//Form JS File
function frmHome_frmHome_preshow_seq1(status, GetPolicy) {
    if (status == 400) {
        if (GetPolicy != null && GetPolicy != undefined && GetPolicy["policyList"] != null && GetPolicy["policyList"] != undefined) {
            var frmHome_segment220982117452368_temp = [];
            for (var i1 = 0; i1 < GetPolicy["policyList"].length; i1++) {
                frmHome_segment220982117452368_temp.push({
                    "lblPolicyType": GetPolicy["policyList"][i1]["policyType"],
                    "lblPolicyUntil": GetPolicy["policyList"][i1]["policyUntil"],
                    "lblVehicle": "Vehicle: ",
                    "lblCoverage": "Coverage Amount: ",
                    "imgInsuranceCard": GetPolicy["policyList"][i1]["insuranceCardSrc"],
                    "lblPolicyWhen": "Policy in effect until: ",
                    "lblVehicleName": GetPolicy["policyList"][i1]["vehicleName"],
                    "lblCoverageAmount": GetPolicy["policyList"][i1]["coverageAmount"],
                    "lblPolicy": "Policy Type: "
                })
            }
            frmHome.segment220982117452368.setData(frmHome_segment220982117452368_temp);
        }
    }
};

function frmHome_frmHome_preshow_seq0(eventobject, neworientation) {
    var GetPolicy_inputparam = {};
    GetPolicy_inputparam["serviceID"] = "GetPolicy";
    GetPolicy_inputparam["httpheaders"] = {};
    GetPolicy_inputparam["httpconfigs"] = {};
    GetPolicy = appmiddlewareinvokerasync(GetPolicy_inputparam, frmHome_frmHome_preshow_seq1);
};

function addWidgetsfrmHome() {
    var label20982117452366 = new kony.ui.Label({
        "id": "label20982117452366",
        "isVisible": true,
        "text": "Acme Insurance",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var label20982117452367 = new kony.ui.Label({
        "id": "label20982117452367",
        "isVisible": true,
        "text": "Policies:",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 6
    }, {});
    var segment220982117452368box = new kony.ui.Box({
        "id": "segment220982117452368box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 59
    }, {});
    var segment220982117452368 = new kony.ui.SegmentedUI2({
        "id": "segment220982117452368",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblPolicyType": "lblPolicyType",
            "lblVehicle": "lblVehicle",
            "lblPolicyUntil": "lblPolicyUntil",
            "imgInsuranceCard": "imgInsuranceCard",
            "lblPolicyWhen": "lblPolicyWhen",
            "lblCoverageAmount": "lblCoverageAmount",
            "lblCoverage": "lblCoverage",
            "hbox20982117452372": "hbox20982117452372",
            "hbox20982117452383": "hbox20982117452383",
            "hbox20982117452369": "hbox20982117452369",
            "lblPolicy": "lblPolicy",
            "hbox20982117452375": "hbox20982117452375",
            "lblVehicleName": "lblVehicleName"
        },
        "rowTemplate": segment220982117452368box,
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
        "containerWeight": 59
    }, {});
    var lblPolicy = new kony.ui.Label({
        "id": "lblPolicy",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 40
    }, {});
    var lblPolicyType = new kony.ui.Label({
        "id": "lblPolicyType",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 59
    }, {});
    var hbox20982117452369 = new kony.ui.Box({
        "id": "hbox20982117452369",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 19,
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452369.add(
    lblPolicy, lblPolicyType);
    var lblCoverage = new kony.ui.Label({
        "id": "lblCoverage",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 40
    }, {});
    var lblCoverageAmount = new kony.ui.Label({
        "id": "lblCoverageAmount",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 59
    }, {});
    var hbox20982117452372 = new kony.ui.Box({
        "id": "hbox20982117452372",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 19,
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452372.add(
    lblCoverage, lblCoverageAmount);
    var lblVehicle = new kony.ui.Label({
        "id": "lblVehicle",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 40
    }, {});
    var lblVehicleName = new kony.ui.Label({
        "id": "lblVehicleName",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 59
    }, {});
    var hbox20982117452375 = new kony.ui.Box({
        "id": "hbox20982117452375",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 19,
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452375.add(
    lblVehicle, lblVehicleName);
    var lblPolicyWhen = new kony.ui.Label({
        "id": "lblPolicyWhen",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 40
    }, {});
    var lblPolicyUntil = new kony.ui.Label({
        "id": "lblPolicyUntil",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 59
    }, {});
    var hbox20982117452383 = new kony.ui.Box({
        "id": "hbox20982117452383",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452383.add(
    lblPolicyWhen, lblPolicyUntil);
    var imgInsuranceCard = new kony.ui.Image2({
        "id": "imgInsuranceCard",
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
        "containerWeight": 29
    }, {});
    segment220982117452368box.add(
    hbox20982117452369, hbox20982117452372, hbox20982117452375, hbox20982117452383, imgInsuranceCard);
    frmHome.add(
    label20982117452366, label20982117452367, segment220982117452368);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frm",
        "preShow": frmHome_frmHome_preshow_seq0,
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["label20982117452366", "label20982117452367", "segment220982117452368"]
    });
};