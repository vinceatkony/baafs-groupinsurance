//startup.js file
var appConfig = {
    appId: "AcmeInsurance",
    appName: "AcmeInsurance",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.0.1.30",
    serverPort: "8080",
    secureServerPort: "443",
    "noScriptMessage": "To use this site, first enable your browser's JavaScript support and then refresh this page.",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmAgentGlobals();
    frmHomeGlobals();
    frmPolicyGlobals();
    frmProductsGlobals();
    frmUsageGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};