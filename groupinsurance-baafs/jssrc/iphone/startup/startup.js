//startup.js file
function appMenuSummary_callback_seq0() {
    frmHome.show();
};

function appMenuOrders_callback_seq0() {
    frmAgent.show();
};

function appMenuInventory_callback_seq0() {
    frmPolicy.show();
};

function appMenuRecipes_callback_seq0() {
    frmUsage.show();
};
var globalhttpheaders = {};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
var appConfig = {
    appId: "AcmeInsurance",
    appName: "AcmeInsurance",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.0.1.30",
    serverPort: "8080",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware"
};
sessionID = "";
skinsInit();

function appInit(params) {
    frmAgentGlobals();
    frmHomeGlobals();
    frmOrderGlobals();
    frmPolicyGlobals();
    frmProductsGlobals();
    frmUsageGlobals();
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmOrder.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;