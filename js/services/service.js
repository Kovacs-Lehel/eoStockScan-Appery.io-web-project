/*
 * Security contexts
 */
/*
 * Service settings
 */
var insertDocLine_settings = {
    "url": "eoDocsService/insertDocLine",
    "requestType": "JSON",
    "responseType": "JSON",
    "method": "POST",
    "cached": "false"
}
var validateProductBarcode_settings = {
    "url": "eoDocsService/validateProductBarcode/{barcode}",
    "responseType": "JSON",
    "method": "GET",
    "cached": "false"
}
var AppClientSettings = {
    "domain": "https://appery.io",
    "apiKey": "a7b3dd11-c0b7-41b7-a960-7135dbe11ba9",
    "currentState": "online",
    "handleNetworkState": "true",
    "cacheTimeout": "43200",
    "requestTimeout": "30",
    "autoLogin": "true",
    "clearOnLogout": "false",
    "version": "5"
}
var eoStockScanAPI_settings = {
    "API_EXPRESS_API_KEY": "a7b3dd11-c0b7-41b7-a960-7135dbe11ba9"
}
var eoStockScanUserLoginService_get_settings = {
    "url": "eoStockScanUserLoginService/userLogin/{username}",
    "responseType": "JSON",
    "method": "GET",
    "cached": "false"
}
var getDocByBarcode_settings = {
    "url": "eoDocsService/getDocByBarcode/{uID}/{barcode}",
    "responseType": "JSON",
    "method": "GET",
    "cached": "false"
}
var insertDoc_settings = {
    "url": "eoDocsService/insertDoc",
    "requestType": "JSON",
    "responseType": "JSON",
    "method": "POST",
    "cached": "false"
}
var getPushDocTypes_settings = {
    "url": "eoDocsService/getPushDocTypes",
    "responseType": "JSON",
    "method": "GET",
    "cached": "false"
}
var eoDocsService_submitDoc_docID_settings = {
    "url": "eoDocsService/submitDoc/{docID}",
    "requestType": "JSON",
    "responseType": "JSON",
    "method": "PUT",
    "cached": "false"
}
var eoDocsServiceSubmitScannedValue_settings = {
    "url": "eoDocsService/updateQTY/{doclineID}/{scannedQTY}",
    "requestType": "JSON",
    "responseType": "JSON",
    "method": "PUT",
    "cached": "false"
}
var getDocType_settings = {
    "url": "eoDocsService/getDocType/{id}",
    "responseType": "JSON",
    "method": "GET",
    "cached": "false"
}
var getDocLineByBarcode_settings = {
    "url": "eoDocsService/getDocLineByBarcode/{barcode}/{docID}",
    "responseType": "JSON",
    "method": "GET",
    "cached": "false"
}
var eoDocsService_getAllDocsByUserID_settings = {
    "url": "eoDocsService/doc/{uID}",
    "responseType": "JSON",
    "method": "GET",
    "cached": "false"
}
var eoDocsServiceDetailsGet_settings = {
    "url": "eoDocsService/docsDetails/{id}",
    "responseType": "JSON",
    "method": "GET",
    "cached": "false"
}
var insertDocLineNoProductAvailable_settings = {
    "url": "eoDocsService/insertDocLineNoProductAvailable",
    "requestType": "JSON",
    "responseType": "JSON",
    "method": "POST",
    "cached": "false"
}
/*
 * Services
 */
validateProductBarcode =
    new Apperyio.AppClientServices({
        "serviceName": "validateProductBarcode",
        'serviceSettings': validateProductBarcode_settings
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
eoDocsGeneratedService_clear =
    new Apperyio.eoDocsGeneratedService_operations({
        "serviceName": "eoDocsGeneratedService_clear"
            ,
        'defaultRequest': {
            "data": null
        }
    });
eoDocsGeneratedService_get =
    new Apperyio.eoDocsGeneratedService_operations({
        "serviceName": "eoDocsGeneratedService_get"
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
insertDocLine =
    new Apperyio.AppClientServices({
        "serviceName": "insertDocLine",
        'serviceSettings': insertDocLine_settings
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
getDocByBarcode =
    new Apperyio.AppClientServices({
        "serviceName": "getDocByBarcode",
        'serviceSettings': getDocByBarcode_settings
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
getDocLineByBarcode =
    new Apperyio.AppClientServices({
        "serviceName": "getDocLineByBarcode",
        'serviceSettings': getDocLineByBarcode_settings
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
insertDoc =
    new Apperyio.AppClientServices({
        "serviceName": "insertDoc",
        'serviceSettings': insertDoc_settings
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
getPushDocTypes =
    new Apperyio.AppClientServices({
        "serviceName": "getPushDocTypes",
        'serviceSettings': getPushDocTypes_settings
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
getDocType =
    new Apperyio.AppClientServices({
        "serviceName": "getDocType",
        'serviceSettings': getDocType_settings
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
eoDocsGeneratedService_create =
    new Apperyio.eoDocsGeneratedService_operations({
        "serviceName": "eoDocsGeneratedService_create"
            ,
        'defaultRequest': {
            "data": null
        }
    });
eoDocsGeneratedService_update =
    new Apperyio.eoDocsGeneratedService_operations({
        "serviceName": "eoDocsGeneratedService_update"
            ,
        'defaultRequest': {
            "data": null
        }
    });
eoDocsGeneratedService_find =
    new Apperyio.eoDocsGeneratedService_operations({
        "serviceName": "eoDocsGeneratedService_find"
            ,
        'defaultRequest': {
            "data": {
                "cached": false,
                "clearCache": false
            }
        }
    });
eoDocsGeneratedService_count =
    new Apperyio.eoDocsGeneratedService_operations({
        "serviceName": "eoDocsGeneratedService_count"
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
insertDocLineNoProductAvailable =
    new Apperyio.AppClientServices({
        "serviceName": "insertDocLineNoProductAvailable",
        'serviceSettings': insertDocLineNoProductAvailable_settings
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
userLoggingService_clear =
    new Apperyio.userLoggingService_operations({
        "serviceName": "userLoggingService_clear"
            ,
        'defaultRequest': {
            "data": null
        }
    });
userLoggingService_get =
    new Apperyio.userLoggingService_operations({
        "serviceName": "userLoggingService_get"
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
userLoggingService_create =
    new Apperyio.userLoggingService_operations({
        "serviceName": "userLoggingService_create"
            ,
        'defaultRequest': {
            "data": null
        }
    });
userLoggingService_find =
    new Apperyio.userLoggingService_operations({
        "serviceName": "userLoggingService_find"
            ,
        'defaultRequest': {
            "data": {
                "cached": false,
                "clearCache": false
            }
        }
    });
userLoggingService_count =
    new Apperyio.userLoggingService_operations({
        "serviceName": "userLoggingService_count"
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
AppClientLoginAnonymously =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientLoginAnonymously"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientGetCurrentUser =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientGetCurrentUser"
            ,
        'defaultRequest': {
            "data": null
        }
    });
eoStockScanUserLoginService_get =
    new Apperyio.AppClientServices({
        "serviceName": "eoStockScanUserLoginService_get",
        'serviceSettings': eoStockScanUserLoginService_get_settings
            ,
        'defaultRequest': {
            "data": null
        }
    });
eoDocsServiceSubmitScannedValue =
    new Apperyio.AppClientServices({
        "serviceName": "eoDocsServiceSubmitScannedValue",
        'serviceSettings': eoDocsServiceSubmitScannedValue_settings
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
eoDocsService_submitDoc_docID =
    new Apperyio.AppClientServices({
        "serviceName": "eoDocsService_submitDoc_docID",
        'serviceSettings': eoDocsService_submitDoc_docID_settings
            ,
        'defaultRequest': {
            "data": {
                "cached": false
            }
        }
    });
var BarcodeService = new Apperyio.BarCodeService({
    'defaultRequest': {
        "data": null
    }
});
eoDocsService_getAllDocsByUserID =
    new Apperyio.AppClientServices({
        "serviceName": "eoDocsService_getAllDocsByUserID",
        'serviceSettings': eoDocsService_getAllDocsByUserID_settings
            ,
        'defaultRequest': {
            "data": null
        }
    });
eoDocsServiceDetailsGet =
    new Apperyio.AppClientServices({
        "serviceName": "eoDocsServiceDetailsGet",
        'serviceSettings': eoDocsServiceDetailsGet_settings
            ,
        'defaultRequest': {
            "data": null
        }
    });
var eoStockScanAPI_eoDocsService_getDocLineByQrCode_get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/eoDocsService/getDocLineByQrCode',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': eoStockScanAPI_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": "{API_EXPRESS_API_KEY}"
        },
        "parameters": {},
        "body": null
    }
});
var eoStockScanAPI_eoDocsService_validateProductQrCode_get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/eoDocsService/validateProductQrCode',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': eoStockScanAPI_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": "{API_EXPRESS_API_KEY}"
        },
        "parameters": {},
        "body": null
    }
});
AppClientRetrySync =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientRetrySync"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientResetFailedSync =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientResetFailedSync"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientGetConflict =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientGetConflict"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientResolveConflict =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientResolveConflict"
            ,
        'defaultRequest': {
            "data": {
                "action": "UPDATE"
            }
        }
    });
AppClientUpdateCurrentUser =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientUpdateCurrentUser"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientDeleteCurrentUser =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientDeleteCurrentUser"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientSetSessionToken =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientSetSessionToken"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientSignUp =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientSignUp"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientLogin =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientLogin"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientGoOffline =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientGoOffline"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientGetState =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientGetState"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientLogout =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientLogout"
            ,
        'defaultRequest': {
            "data": null
        }
    });
AppClientGoOnline =
    new Apperyio.AppClientServices({
        "serviceName": "AppClientGoOnline"
            ,
        'defaultRequest': {
            "data": null
        }
    });
var eoStockScanAPI_eoDocsService_getDoc_get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/eoDocsService/getDoc',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': eoStockScanAPI_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": "{API_EXPRESS_API_KEY}"
        },
        "parameters": {},
        "body": null
    }
});
var eoStockScanAPI_eoDocsService_processDoc_put = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/eoDocsService/processDoc',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
    'serviceSettings': eoStockScanAPI_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": "{API_EXPRESS_API_KEY}"
        },
        "parameters": {},
        "body": null
    }
});
var eoStockScanAPI_eoDocsService_getDocRequestLines__id__get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/eoDocsService/getDocRequestLines/{id}',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': eoStockScanAPI_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": "{API_EXPRESS_API_KEY}"
        },
        "parameters": {},
        "body": null
    }
});
var eoStockScanAPI_eoDocsService_insertDocLineQR_post = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/eoDocsService/insertDocLineQR',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
    'serviceSettings': eoStockScanAPI_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": "{API_EXPRESS_API_KEY}"
        },
        "parameters": {},
        "body": null
    }
});
var eoStockScanAPI_eoDocsService_getRequestDocLineByBarcode_get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/eoDocsService/getRequestDocLineByBarcode',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': eoStockScanAPI_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": "{API_EXPRESS_API_KEY}"
        },
        "parameters": {},
        "body": null
    }
});
var eoStockScanAPI_eoDocsService_reqValidation_get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/eoDocsService/reqValidation',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': eoStockScanAPI_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": "{API_EXPRESS_API_KEY}"
        },
        "parameters": {},
        "body": null
    }
});