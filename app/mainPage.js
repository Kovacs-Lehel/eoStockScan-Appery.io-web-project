/*
 * JS for mainPage generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return 'cdeeb05f-dbd0-4b0f-a5dd-b1c2b9ac084c';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "loginPage",
    "location": "loginPage.html"
}, {
    "name": "newDocumentDetails",
    "location": "newDocumentDetails.html"
}, {
    "name": "loginSuccess",
    "location": "loginSuccess.html"
}, {
    "name": "loginFailed",
    "location": "loginFailed.html"
}, {
    "name": "createNewDocumentDialog",
    "location": "createNewDocumentDialog.html"
}, {
    "name": "settingsDialog",
    "location": "settingsDialog.html"
}, {
    "name": "documentListDialog",
    "location": "documentListDialog.html"
}, {
    "name": "newDocumentListDialog",
    "location": "newDocumentListDialog.html"
}, {
    "name": "scanDocDetailsNotFoundDialog_clone_1",
    "location": "scanDocDetailsNotFoundDialog_clone_1.html"
}, {
    "name": "areYouSure",
    "location": "areYouSure.html"
}, {
    "name": "scanDocDetailsNotFoundDialog",
    "location": "scanDocDetailsNotFoundDialog.html"
}, {
    "name": "scanDocDetailsFoundDialog_clone_1",
    "location": "scanDocDetailsFoundDialog_clone_1.html"
}, {
    "name": "documentListPage",
    "location": "documentListPage.html"
}, {
    "name": "listDocuments",
    "location": "listDocuments.html"
}, {
    "name": "mainPage",
    "location": "mainPage.html"
}, {
    "name": "scanDocDetailsFoundDialog",
    "location": "scanDocDetailsFoundDialog.html"
}, {
    "name": "documentDetails",
    "location": "documentDetails.html"
}, {
    "name": "scanProductDetailsNotFoundDialog",
    "location": "scanProductDetailsNotFoundDialog.html"
}];

function mainPage_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileworkarea_4': 'mainPage_mobileworkarea_4',
        'eoLogo': 'mainPage_eoLogo',
        'mobileworkarea_2': 'mainPage_mobileworkarea_2',
        'mobilegrid_27': 'mainPage_mobilegrid_27',
        'mobilegridcell_28': 'mainPage_mobilegridcell_28',
        'createDocumentButton': 'mainPage_createDocumentButton',
        'mobilegridcell_30': 'mainPage_mobilegridcell_30',
        'searchScanDoc': 'mainPage_searchScanDoc',
        'scanDocumentButton': 'mainPage_scanDocumentButton',
        'mobilegridcell_32': 'mainPage_mobilegridcell_32',
        'listDocumentsButton': 'mainPage_listDocumentsButton',
        'mobileworkarea_3': 'mainPage_mobileworkarea_3',
        'mobilegrid_34': 'mainPage_mobilegrid_34',
        'mobilegridcell_35': 'mainPage_mobilegridcell_35',
        'mobilegridcell_36': 'mainPage_mobilegridcell_36',
        'mobilegridcell_39': 'mainPage_mobilegridcell_39',
        'settingsButton': 'mainPage_settingsButton'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.mappings["mainPage_mainPage_onpageshow_mapping_2"] = {
        "homeScreen": "mainPage",
        "directions": [
            {
                "from_name": "userInfos",
                "from_type": "LOCAL_STORAGE",
                "to_name": "mainPage",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$['scanWithScanner']",
                        "target_transformation": function(value, element) {
                            if (value != "on") {
                                return true
                            } else {
                                return false
                            }
                        },
                        "target": "$['scanDocumentButton:visible']"
                    },
                    {
                        "source": "$['scanWithScanner']",
                        "target_transformation": function(value, element) {
                            if (value == "on") {
                                return true
                            } else {
                                return false
                            }
                        },
                        "target": "$['searchScanDoc:visible']"
                    }
                ]
            },
            {
                "from_name": "selectedDocumentDetails",
                "from_type": "LOCAL_STORAGE",
                "to_name": "selectedDocumentDetails",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['productrequestquantity']",
                        "target_transformation": function(value) {
                            return null;
                        },
                        "target": "$['productrequestquantity']"
                    },
                    {
                        "source": "$['productscanquantity']",
                        "target_transformation": function(value) {
                            return null;
                        },
                        "target": "$['productscanquantity']"
                    },
                    {
                        "source": "$['productRemainingQty']",
                        "target_transformation": function(value) {
                            return null;
                        },
                        "target": "$['productRemainingQty']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["mainPage_mainPage_onload_mapping_1"] = {
        "homeScreen": "mainPage",
        "directions": [
            {
                "from_name": "userInfos",
                "from_type": "LOCAL_STORAGE",
                "to_name": "userInfos",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['scanWithScanner']",
                        "target_transformation": function(value) {
                            return (value === null || value === undefined) ? "off" : value;
                        },
                        "target": "$['scanWithScanner']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["mainPage_searchScanDoc_onchange_mapping_0"] = {
        "homeScreen": "mainPage",
        "directions": [
            {
                "from_name": "mainPage",
                "from_type": "UI",
                "to_name": "docBarcode",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['searchScanDoc:text']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["mainPage_scanDoc_onsuccess_mapping_0"] = {
        "homeScreen": "mainPage",
        "directions": [
            {
                "from_name": "scanDoc",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "docBarcode",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['data']['text']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["mainPage_scanDoc_onbeforesend_mapping_0"] = {
        "homeScreen": "mainPage",
        "directions": []
    };
    Apperyio.mappings["mainPage_getScannedDoc_onsuccess_mapping_0"] = {
        "homeScreen": "mainPage",
        "directions": [
            {
                "from_name": "getScannedDoc",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "selectedDocID",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['data']['response'][0]['id']",
                        "target": "$"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["mainPage_getScannedDoc_onbeforesend_mapping_0"] = {
        "homeScreen": "mainPage",
        "directions": [
            {
                "from_name": "docBarcode",
                "from_type": "LOCAL_STORAGE",
                "to_name": "getScannedDoc",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "data": {
                        "cached": false
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['data']['pathParams']['barcode']"
                    }
                ]
            },
            {
                "from_name": "userInfos",
                "from_type": "LOCAL_STORAGE",
                "to_name": "getScannedDoc",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "data": {
                        "cached": false
                    }
                },
                "mappings": [
                    {
                        "source": "$['id']",
                        "target": "$['data']['pathParams']['uID']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["mainPage_processDocMain_onbeforesend_mapping_0"] = {
        "homeScreen": "mainPage",
        "directions": [
            {
                "from_name": "selectedDocID",
                "from_type": "LOCAL_STORAGE",
                "to_name": "processDocMain",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Api-Express-Api-Key": "{API_EXPRESS_API_KEY}"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['parameters']['id']"
                    }
                ]
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.scanDoc = Apperyio.datasources.scanDoc = new Apperyio.DataSource(BarcodeService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["mainPage_scanDoc_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["mainPage_scanDoc_onsuccess_mapping_0"]);
            try {
                getScannedDoc.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.getScannedDoc = Apperyio.datasources.getScannedDoc = new Apperyio.DataSource(getDocByBarcode, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["mainPage_getScannedDoc_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["mainPage_getScannedDoc_onsuccess_mapping_0"]);
            if (Apperyio.storage.selectedDocID.get() == undefined) {
                Apperyio.navigateTo('scanDocDetailsNotFoundDialog', {
                    transition: 'pop'
                });
            } else {
                Apperyio.navigateTo('documentDetails', {});
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.processDocMain = Apperyio.datasources.processDocMain = new Apperyio.DataSource(eoStockScanAPI_eoDocsService_processDoc_put, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["mainPage_processDocMain_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.navigateTo('documentDetails', {
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'mainPage';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var mainPage_onLoad = function() {
        mainPage_elementsExtraJS();
        Apperyio.processMappingAction(Apperyio.mappings["mainPage_mainPage_onload_mapping_1"]);
        mainPage_deviceEvents();
        mainPage_windowEvents();
        mainPage_elementsEvents();
    };
    // screen window events
    function mainPage_windowEvents() {
        $('#mainPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#mainPage').on({
            pageshow: function(event) {
                Apperyio.processMappingAction(Apperyio.mappings["mainPage_mainPage_onpageshow_mapping_2"]);
                try {
                    $a.storage["scanModeOn"].update("$", "false")
                } catch (e) {
                    console.error(e)
                };
            },
        });
    };
    // device events
    function mainPage_deviceEvents() {
        document.addEventListener("deviceready", function() {
            $(document).off('backbutton ').on({
                "backbutton": function(event) {
                    navigator.app.exitApp();
                },
            });
        });
    };
    // screen elements extra js
    function mainPage_elementsExtraJS() {
        // screen (mainPage) extra code
    };
    // screen elements handler
    function mainPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#mainPage_mobilecontainer [name="createDocumentButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('createNewDocumentDialog', {
                        transition: 'pop'
                    });
                }
            },
        }, '#mainPage_mobilecontainer [name="createDocumentButton"]');
        $(document).off("change", '#mainPage_mobilecontainer [name="searchScanDoc"]').on({
            change: function(event) {
                Apperyio.processMappingAction(Apperyio.mappings["mainPage_searchScanDoc_onchange_mapping_0"]);
                try {
                    getScannedDoc.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#mainPage_mobilecontainer [name="searchScanDoc"]');
        $(document).off("click", '#mainPage_mobilecontainer [name="scanDocumentButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        scanDoc.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#mainPage_mobilecontainer [name="scanDocumentButton"]');
        $(document).off("click", '#mainPage_mobilecontainer [name="listDocumentsButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('listDocuments', {
                        reverse: false
                    });
                }
            },
        }, '#mainPage_mobilecontainer [name="listDocumentsButton"]');
        $(document).off("click", '#mainPage_mobilefooter [name="settingsButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('settingsDialog', {
                        transition: 'pop'
                    });
                }
            },
        }, '#mainPage_mobilefooter [name="settingsButton"]');
    };
    $(document).off("pagebeforeshow", "#mainPage").on("pagebeforeshow", "#mainPage", function(event, ui) {
        Apperyio.CurrentScreen = "mainPage";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    mainPage_onLoad();
};
$(document).off("pagecreate", "#mainPage").on("pagecreate", "#mainPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    mainPage_js();
});