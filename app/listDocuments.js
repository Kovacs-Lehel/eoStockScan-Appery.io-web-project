/*
 * JS for listDocuments generated by Appery.io
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

function listDocuments_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileworkarea_4': 'listDocuments_mobileworkarea_4',
        'backToMainPage': 'listDocuments_backToMainPage',
        'eoLogo': 'listDocuments_eoLogo',
        'mobileworkarea_2': 'listDocuments_mobileworkarea_2',
        'documentsList': 'listDocuments_documentsList',
        'documentListItem': 'listDocuments_documentListItem',
        'mobilelistitembutton_7': 'listDocuments_mobilelistitembutton_7',
        'mobilegrid_15': 'listDocuments_mobilegrid_15',
        'mobilegridcell_16': 'listDocuments_mobilegridcell_16',
        'nameShowLabel': 'listDocuments_nameShowLabel',
        'mobilegridcell_20': 'listDocuments_mobilegridcell_20',
        'statusShowLabel': 'listDocuments_statusShowLabel',
        'mobileworkarea_3': 'listDocuments_mobileworkarea_3'
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
    Apperyio.mappings["listDocuments_getCurrentUsersDocs_onsuccess_mapping_0"] = {
        "homeScreen": "listDocuments",
        "directions": [
            {
                "from_name": "getCurrentUsersDocs",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "documents",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['data']['response'][i]['id']",
                        "target": "$[i]['id']"
                    },
                    {
                        "source": "$['data']['response'][i]['documenttype_id']",
                        "target": "$[i]['documenttype_id']"
                    },
                    {
                        "source": "$['data']['response'][i]['code']",
                        "target": "$[i]['code']"
                    },
                    {
                        "source": "$['data']['response'][i]['user_id']",
                        "target": "$[i]['user_id']"
                    },
                    {
                        "source": "$['data']['response'][i]['name']",
                        "target": "$[i]['name']"
                    },
                    {
                        "source": "$['data']['response'][i]['state']",
                        "target": "$[i]['state']"
                    },
                    {
                        "source": "$['data']['response'][i]['domain_id']",
                        "target": "$[i]['domain_id']"
                    },
                    {
                        "source": "$['data']['response'][i]['subject']",
                        "target": "$[i]['subject']"
                    },
                    {
                        "source": "$['data']['response'][i]['document_type']",
                        "target": "$[i]['document_type']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["listDocuments_getCurrentUsersDocs_onsuccess_mapping_1"] = {
        "homeScreen": "listDocuments",
        "directions": [
            {
                "from_name": "documents",
                "from_type": "LOCAL_STORAGE",
                "to_name": "listDocuments",
                "to_type": "UI",
                "mappings": [
                    {
                        "source": "$[i]",
                        "target_transformation": function(value, element) {
                            element.on("click", function() {
                                Apperyio.storage.selectedDocID.set(value.id);
                                Apperyio.storage.selectedDocumentTypeID.set(value.documenttype_id);
                                //getTypeOfDoc.execute();
                            })
                        },
                        "target": "$['documentListItem']"
                    },
                    {
                        "source": "$[i]['name']",
                        "target": "$['documentListItem']['nameShowLabel:text']"
                    },
                    {
                        "source": "$[i]['state']",
                        "target_transformation": function(value, element) {
                            return value == 'in_process' ? 'In Progress' : value;
                        },
                        "target": "$['documentListItem']['statusShowLabel:text']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["listDocuments_getCurrentUsersDocs_onbeforesend_mapping_0"] = {
        "homeScreen": "listDocuments",
        "directions": [
            {
                "from_name": "userInfos",
                "from_type": "LOCAL_STORAGE",
                "to_name": "getCurrentUsersDocs",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "data": null
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
    Apperyio.mappings["listDocuments_getTypeOfDoc_onsuccess_mapping_0"] = {
        "homeScreen": "listDocuments",
        "directions": [
            {
                "from_name": "getTypeOfDoc",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "selectedDocumentTypeName",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['data']['response'][0]['document_type']",
                        "target": "$"
                    }
                ]
            },
            {
                "from_name": "getTypeOfDoc",
                "from_type": "SERVICE_RESPONSE",
                "to_name": "selectedDocumentDetails",
                "to_type": "LOCAL_STORAGE",
                "mappings": [
                    {
                        "source": "$['data']['response'][0]['document_type']",
                        "target": "$['document_type']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["listDocuments_getTypeOfDoc_onbeforesend_mapping_0"] = {
        "homeScreen": "listDocuments",
        "directions": [
            {
                "from_name": "selectedDocumentTypeID",
                "from_type": "LOCAL_STORAGE",
                "to_name": "getTypeOfDoc",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "data": {
                        "cached": false
                    }
                },
                "mappings": [
                    {
                        "source": "$",
                        "target": "$['data']['pathParams']['id']"
                    }
                ]
            }
        ]
    };
    Apperyio.mappings["listDocuments_processDocListDoc_onbeforesend_mapping_0"] = {
        "homeScreen": "listDocuments",
        "directions": [
            {
                "from_name": "selectedDocID",
                "from_type": "LOCAL_STORAGE",
                "to_name": "processDocListDoc",
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
    window.getCurrentUsersDocs = Apperyio.datasources.getCurrentUsersDocs = new Apperyio.DataSource(eoDocsService_getAllDocsByUserID, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["listDocuments_getCurrentUsersDocs_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["listDocuments_getCurrentUsersDocs_onsuccess_mapping_0"]);
            Apperyio.processMappingAction(Apperyio.mappings["listDocuments_getCurrentUsersDocs_onsuccess_mapping_1"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.getTypeOfDoc = Apperyio.datasources.getTypeOfDoc = new Apperyio.DataSource(getDocType, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["listDocuments_getTypeOfDoc_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["listDocuments_getTypeOfDoc_onsuccess_mapping_0"]);
            try {
                processDocListDoc.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    window.processDocListDoc = Apperyio.datasources.processDocListDoc = new Apperyio.DataSource(eoStockScanAPI_eoDocsService_processDoc_put, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["listDocuments_processDocListDoc_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {
            if (Apperyio.storage.selectedDocumentTypeName.get() == 'req') {
                Apperyio.navigateTo("documentDetails", {});
            } else {
                Apperyio.navigateTo("newDocumentDetails", {});
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'listDocuments';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var listDocuments_onLoad = function() {
        listDocuments_elementsExtraJS();
        try {
            getCurrentUsersDocs.execute({});
        } catch (e) {
            console.error(e);
            hideSpinner();
        };
        listDocuments_deviceEvents();
        listDocuments_windowEvents();
        listDocuments_elementsEvents();
    };
    // screen window events
    function listDocuments_windowEvents() {
        $('#listDocuments').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function listDocuments_deviceEvents() {
        document.addEventListener("deviceready", function() {
            $(document).off('backbutton ').on({
                "backbutton": function(event) {
                    Apperyio.navigateTo('mainPage', {
                        reverse: false
                    });
                },
            });
        });
    };
    // screen elements extra js
    function listDocuments_elementsExtraJS() {
        // screen (listDocuments) extra code
        /* documentsList */
        listView = $("#listDocuments_documentsList");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#listDocuments_documentsList .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }
        /* documentListItem */
    };
    // screen elements handler
    function listDocuments_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#listDocuments_mobileheader [name="backToMainPage"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('mainPage', {
                        reverse: false
                    });
                }
            },
        }, '#listDocuments_mobileheader [name="backToMainPage"]');
        $(document).off("click", '#listDocuments_mobilecontainer [name="documentListItem"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        getTypeOfDoc.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                }
            },
        }, '#listDocuments_mobilecontainer [name="documentListItem"]');
    };
    $(document).off("pagebeforeshow", "#listDocuments").on("pagebeforeshow", "#listDocuments", function(event, ui) {
        Apperyio.CurrentScreen = "listDocuments";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    listDocuments_onLoad();
};
$(document).off("pagecreate", "#listDocuments").on("pagecreate", "#listDocuments", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    listDocuments_js();
});