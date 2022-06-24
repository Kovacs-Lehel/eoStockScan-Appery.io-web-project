(function(){
    AppClient.setProjectMetadata({
  "isSecurity" : false,
  "securityOptionsEnabled" : false,
  "models" : [ {
    "modelName" : "eoDocsGeneratedService",
    "modelType" : "DB",
    "modelSyncType" : "ONE_WAY",
    "schema" : {
      "type" : "object",
      "properties" : {
        "create_uid" : {
          "type" : [ "number", "null" ]
        },
        "domain_id" : {
          "type" : [ "number", "null" ]
        },
        "write_uid" : {
          "type" : [ "number", "null" ]
        },
        "code" : {
          "type" : [ "string", "null" ]
        },
        "subject" : {
          "type" : [ "string", "null" ]
        },
        "state" : {
          "type" : [ "string", "null" ]
        },
        "write_date" : {
          "format" : "date-time",
          "type" : [ "string", "null" ]
        },
        "documenttype_id" : {
          "type" : [ "number", "null" ]
        },
        "document_time" : {
          "format" : "date-time",
          "type" : [ "string", "null" ]
        },
        "user_id" : {
          "type" : [ "number", "null" ]
        },
        "create_date" : {
          "format" : "date-time",
          "type" : [ "string", "null" ]
        },
        "id" : {
          "type" : [ "number" ]
        },
        "name" : {
          "type" : [ "string", "null" ]
        }
      },
      "required" : [ ]
    },
    "idAttribute" : "id",
    "api" : {
      "create" : {
        "url" : "https://api.appery.io/rest/1/apiexpress/api/eoDocsGeneratedService"
      },
      "get" : {
        "url" : "https://api.appery.io/rest/1/apiexpress/api/eoDocsGeneratedService/{id}"
      },
      "update" : {
        "url" : "https://api.appery.io/rest/1/apiexpress/api/eoDocsGeneratedService/{id}"
      },
      "find" : {
        "url" : "https://api.appery.io/rest/1/apiexpress/api/eoDocsGeneratedService"
      }
    }
  }, {
    "modelName" : "loginUserLoggingService",
    "modelType" : "DB",
    "modelSyncType" : "ONE_WAY",
    "schema" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : [ "number" ]
        },
        "create_date" : {
          "format" : "date-time",
          "type" : [ "string", "null" ]
        },
        "create_uid" : {
          "type" : [ "number", "null" ]
        },
        "status" : {
          "type" : [ "number", "null" ]
        },
        "log_time" : {
          "format" : "date-time",
          "type" : [ "string", "null" ]
        },
        "user_id" : {
          "type" : [ "number", "null" ]
        },
        "log_type" : {
          "type" : [ "number", "null" ]
        },
        "write_uid" : {
          "type" : [ "number", "null" ]
        },
        "write_date" : {
          "format" : "date-time",
          "type" : [ "string", "null" ]
        },
        "username_entered" : {
          "type" : [ "string", "null" ]
        }
      },
      "required" : [ ]
    },
    "idAttribute" : "id",
    "api" : {
      "create" : {
        "url" : "https://api.appery.io/rest/1/apiexpress/api/loginUserLoggingService"
      },
      "get" : {
        "url" : "https://api.appery.io/rest/1/apiexpress/api/loginUserLoggingService/{id}"
      },
      "find" : {
        "url" : "https://api.appery.io/rest/1/apiexpress/api/loginUserLoggingService"
      }
    }
  } ]
});
})();