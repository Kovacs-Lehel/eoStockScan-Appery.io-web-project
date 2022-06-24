/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "docTypesType": {
        "type": "array",
        "items": {
            "type": "selectedDocTypeType"
        }
    },
    "String": {
        "type": "string"
    },
    "Boolean": {
        "type": "boolean"
    },
    "Number": {
        "type": "number"
    },
    "userInfos": {
        "type": "object",
        "properties": {
            "rememberMe": {
                "type": "boolean"
            },
            "username": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "scanWithScanner": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "domainID": {
                "type": "string"
            },
            "email": {
                "type": "string"
            }
        }
    },
    "selectedDocTypeType": {
        "type": "object",
        "properties": {
            "id": {
                "type": "number"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "documentType": {
        "type": "object",
        "properties": {
            "subject": {
                "type": "string"
            },
            "documenttype_id": {
                "type": "number"
            },
            "domain_id": {
                "type": "number"
            },
            "id": {
                "type": "number"
            },
            "code": {
                "type": "string"
            },
            "state": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "user_id": {
                "type": "number"
            }
        }
    },
    "documentDetailsType": {
        "type": "array",
        "items": {
            "type": "selectedDocumentDetailsType"
        }
    },
    "documentsType": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "document_type": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "domain_id": {
                    "type": "number"
                },
                "code": {
                    "type": "string"
                },
                "state": {
                    "type": "string"
                },
                "user_id": {
                    "type": "number"
                },
                "documenttype_id": {
                    "type": "number"
                },
                "subject": {
                    "type": "string"
                }
            }
        }
    },
    "selectedDocumentDetailsType": {
        "type": "object",
        "properties": {
            "productRemainingQty": {
                "type": "string"
            },
            "document_type": {
                "type": "string"
            },
            "docname": {
                "type": "string"
            },
            "productscanquantity": {
                "type": "string"
            },
            "productbarcode": {
                "type": "string"
            },
            "docsubject": {
                "type": "string"
            },
            "productrequestquantity": {
                "type": "string"
            },
            "doclineid": {
                "type": "string"
            },
            "productCode": {
                "type": "string"
            },
            "productname": {
                "type": "string"
            },
            "doctime": {
                "type": "string"
            },
            "productQrCode": {
                "type": "string"
            },
            "productListLineID": {
                "type": "string"
            },
            "docID": {
                "type": "string"
            }
        }
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);
/**
 * Data storage
 */
Apperyio.storage = {
    "userInfos": new $a.LocalStorage("userInfos", "userInfos"),
    "enteredUserInfos": new $a.LocalStorage("enteredUserInfos", "userInfos"),
    "documents": new $a.LocalStorage("documents", "documentsType"),
    "selectedDocumentDetails": new $a.LocalStorage("selectedDocumentDetails", "selectedDocumentDetailsType"),
    "selectedDocID": new $a.LocalStorage("selectedDocID", "String"),
    "documentDetails": new $a.LocalStorage("documentDetails", "documentDetailsType"),
    "documentMismatch": new $a.LocalStorage("documentMismatch", "Boolean"),
    "docBarcode": new $a.LocalStorage("docBarcode", "String"),
    "createDocument": new $a.LocalStorage("createDocument", "documentType"),
    "docTypes": new $a.LocalStorage("docTypes", "docTypesType"),
    "selectedDocType": new $a.LocalStorage("selectedDocType", "selectedDocTypeType"),
    "selectedDocumentTypeName": new $a.LocalStorage("selectedDocumentTypeName", "String"),
    "selectedDocumentTypeID": new $a.LocalStorage("selectedDocumentTypeID", "String"),
    "scanModeOn": new $a.LocalStorage("scanModeOn", "Boolean"),
    "scannedValue": new $a.LocalStorage("scannedValue", "String"),
    "productCode": new $a.LocalStorage("productCode", "String"),
    "scanQty": new $a.LocalStorage("scanQty", "Number"),
    "inputQty": new $a.LocalStorage("inputQty", "String"),
    "editMode": new $a.LocalStorage("editMode", "Boolean")
};