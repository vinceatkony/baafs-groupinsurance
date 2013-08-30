//Form JS File
function frmPolicy_frmPolicy_preshow_seq1(status, GetPolicy) {
    if (status == 400) {
        frmPolicy.lblDescription.text = GetPolicy["policyList"][0]["description"];
        if (GetPolicy != null && GetPolicy != undefined && GetPolicy["policyList"] != null && GetPolicy["policyList"] != undefined) {
            var frmPolicy_segment220982117452368_temp = [];
            for (var i1 = 0; i1 < GetPolicy["policyList"].length; i1++) {
                frmPolicy_segment220982117452368_temp.push({
                    "lblCoinsuranceValue": GetPolicy["policyList"][i1]["coinsurance"],
                    "lblCoinsurance": "Co-insurance: ",
                    "lblDentalBenefitValue": GetPolicy["policyList"][i1]["dentalBenefit"],
                    "lblLTD": "Long Term Disability",
                    "lblDentalBenefit": "Dental Benefit: ",
                    "lblInsuranceCardHeader": "Insurance Card",
                    "lblLTDPercentage": "LTD Benefit Percentage: ",
                    "imgInsuranceCard": GetPolicy["policyList"][i1]["insuranceCardSrc"],
                    "lblDental": "Dental Benefits: ",
                    "lblADDBenefitValue": GetPolicy["policyList"][i1]["addBenefit"],
                    "lblLTDMaxBenefitValue": GetPolicy["policyList"][i1]["ltdMaxBenefit"],
                    "lblADDBenefit": "AD&D Benefit: ",
                    "lblLTDMaxBenefit": "LTD Max Benefit",
                    "lblLifeBenefit": "Life Benefit: ",
                    "lblDeductableValue": GetPolicy["policyList"][i1]["dentalDeductable"],
                    "lblLife": "Life Benefits: ",
                    "lblLifeBenefitValue": GetPolicy["policyList"][i1]["lifeBenefit"],
                    "lblLTDBenefitPercentageVAlue": GetPolicy["policyList"][i1]["ltdBenefitPercentage"],
                    "lblDentalDeductable": "Dental Deductable"
                })
            }
            frmPolicy.segment220982117452368.setData(frmPolicy_segment220982117452368_temp);
        }
    }
};

function frmPolicy_frmPolicy_preshow_seq0(eventobject, neworientation) {
    var GetPolicy_inputparam = {};
    GetPolicy_inputparam["serviceID"] = "GetPolicy";
    GetPolicy_inputparam["httpheaders"] = {};
    GetPolicy_inputparam["httpconfigs"] = {};
    GetPolicy = appmiddlewareinvokerasync(GetPolicy_inputparam, frmPolicy_frmPolicy_preshow_seq1);
};

function addWidgetsfrmPolicy() {
    var vbox2098211745129 = new kony.ui.Box({
        "id": "vbox2098211745129",
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
    vbox2098211745129.add();
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
    var vbox2098211745130 = new kony.ui.Box({
        "id": "vbox2098211745130",
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
    vbox2098211745130.add();
    var hbox2098211745116 = new kony.ui.Box({
        "id": "hbox2098211745116",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxred",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 15,
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
    vbox2098211745129, image22098211745117, vbox2098211745130);
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "text": null,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var segment220982117452368box = new kony.ui.Box({
        "id": "segment220982117452368box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 73
    }, {});
    var segment220982117452368 = new kony.ui.SegmentedUI2({
        "id": "segment220982117452368",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblLTDPercentage": "lblLTDPercentage",
            "hbox2098211745622": "hbox2098211745622",
            "lblADDBenefitValue": "lblADDBenefitValue",
            "lblADDBenefit": "lblADDBenefit",
            "hbox2098211745756": "hbox2098211745756",
            "lblLife": "lblLife",
            "hbox20982117452383": "hbox20982117452383",
            "lblLTDBenefitPercentageVAlue": "lblLTDBenefitPercentageVAlue",
            "hbox20982117452369": "hbox20982117452369",
            "lblCoinsuranceValue": "lblCoinsuranceValue",
            "lblDentalBenefitValue": "lblDentalBenefitValue",
            "lblCoinsurance": "lblCoinsurance",
            "lblLTD": "lblLTD",
            "lblDentalBenefit": "lblDentalBenefit",
            "lblInsuranceCardHeader": "lblInsuranceCardHeader",
            "imgInsuranceCard": "imgInsuranceCard",
            "lblDental": "lblDental",
            "lblLTDMaxBenefitValue": "lblLTDMaxBenefitValue",
            "lblLTDMaxBenefit": "lblLTDMaxBenefit",
            "hbox2098211745678": "hbox2098211745678",
            "lblLifeBenefit": "lblLifeBenefit",
            "lblDeductableValue": "lblDeductableValue",
            "hbox20982117452372": "hbox20982117452372",
            "lblLifeBenefitValue": "lblLifeBenefitValue",
            "lblDentalDeductable": "lblDentalDeductable",
            "hbox20982117452375": "hbox20982117452375"
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 73
    }, {});
    var lblDental = new kony.ui.Label({
        "id": "lblDental",
        "isVisible": true,
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "renderAsAnchor": false
    });
    var lblDentalDeductable = new kony.ui.Label({
        "id": "lblDentalDeductable",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "renderAsAnchor": false
    });
    var lblDeductableValue = new kony.ui.Label({
        "id": "lblDeductableValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "renderAsAnchor": false
    });
    var hbox20982117452369 = new kony.ui.Box({
        "id": "hbox20982117452369",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452369.add(
    lblDentalDeductable, lblDeductableValue);
    var lblCoinsurance = new kony.ui.Label({
        "id": "lblCoinsurance",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "renderAsAnchor": false
    });
    var lblCoinsuranceValue = new kony.ui.Label({
        "id": "lblCoinsuranceValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "renderAsAnchor": false
    });
    var hbox20982117452372 = new kony.ui.Box({
        "id": "hbox20982117452372",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452372.add(
    lblCoinsurance, lblCoinsuranceValue);
    var lblDentalBenefit = new kony.ui.Label({
        "id": "lblDentalBenefit",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "renderAsAnchor": false
    });
    var lblDentalBenefitValue = new kony.ui.Label({
        "id": "lblDentalBenefitValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "renderAsAnchor": false
    });
    var hbox20982117452375 = new kony.ui.Box({
        "id": "hbox20982117452375",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452375.add(
    lblDentalBenefit, lblDentalBenefitValue);
    var lblLife = new kony.ui.Label({
        "id": "lblLife",
        "isVisible": true,
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "renderAsAnchor": false
    });
    var lblLifeBenefit = new kony.ui.Label({
        "id": "lblLifeBenefit",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "renderAsAnchor": false
    });
    var lblLifeBenefitValue = new kony.ui.Label({
        "id": "lblLifeBenefitValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "renderAsAnchor": false
    });
    var hbox20982117452383 = new kony.ui.Box({
        "id": "hbox20982117452383",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452383.add(
    lblLifeBenefit, lblLifeBenefitValue);
    var lblADDBenefit = new kony.ui.Label({
        "id": "lblADDBenefit",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "renderAsAnchor": false
    });
    var lblADDBenefitValue = new kony.ui.Label({
        "id": "lblADDBenefitValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "renderAsAnchor": false
    });
    var hbox2098211745622 = new kony.ui.Box({
        "id": "hbox2098211745622",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox2098211745622.add(
    lblADDBenefit, lblADDBenefitValue);
    var lblLTD = new kony.ui.Label({
        "id": "lblLTD",
        "isVisible": true,
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "renderAsAnchor": false
    });
    var lblLTDMaxBenefit = new kony.ui.Label({
        "id": "lblLTDMaxBenefit",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "renderAsAnchor": false
    });
    var lblLTDMaxBenefitValue = new kony.ui.Label({
        "id": "lblLTDMaxBenefitValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "renderAsAnchor": false
    });
    var hbox2098211745678 = new kony.ui.Box({
        "id": "hbox2098211745678",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox2098211745678.add(
    lblLTDMaxBenefit, lblLTDMaxBenefitValue);
    var lblLTDPercentage = new kony.ui.Label({
        "id": "lblLTDPercentage",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "renderAsAnchor": false
    });
    var lblLTDBenefitPercentageVAlue = new kony.ui.Label({
        "id": "lblLTDBenefitPercentageVAlue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 59
    }, {
        "renderAsAnchor": false
    });
    var hbox2098211745756 = new kony.ui.Box({
        "id": "hbox2098211745756",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox2098211745756.add(
    lblLTDPercentage, lblLTDBenefitPercentageVAlue);
    var lblInsuranceCardHeader = new kony.ui.Label({
        "id": "lblInsuranceCardHeader",
        "isVisible": true,
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {
        "renderAsAnchor": false
    });
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
        "containerWeight": 12
    }, {});
    segment220982117452368box.add(
    lblDental, hbox20982117452369, hbox20982117452372, hbox20982117452375, lblLife, hbox20982117452383, hbox2098211745622, lblLTD, hbox2098211745678, hbox2098211745756, lblInsuranceCardHeader, imgInsuranceCard);
    var button2098211745964 = new kony.ui.Button({
        "id": "button2098211745964",
        "isVisible": true,
        "text": "submit",
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
        "containerWeight": 4
    }, {});
    frmPolicy.add(
    hbox2098211745116, lblDescription, segment220982117452368, button2098211745964);
};

function frmPolicyGlobals() {
    var MenuId = [];
    frmPolicy = new kony.ui.Form2({
        "id": "frmPolicy",
        "title": "Acme Insurance",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmRed",
        "preShow": frmPolicy_frmPolicy_preshow_seq0,
        "addWidgets": addWidgetsfrmPolicy
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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