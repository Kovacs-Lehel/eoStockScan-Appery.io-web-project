function mssdk() {
	var AppClientInitOptions = {
		"domain": AppClientSettings.domain,
		"apiExpressAexDomain": AppClientSettings.aexDomain,
		"apiKey": AppClientSettings.apiKey,
		"currentState": AppClientSettings.currentState,
		"handleNetworkState": AppClientSettings.handleNetworkState,
		"cacheTimeout": AppClientSettings.cacheTimeout,
		"requestTimeout": AppClientSettings.requestTimeout,
		"autoLogin": AppClientSettings.autoLogin,
		"clearOnLogout": AppClientSettings.clearOnLogout,
		"backendTarget": AppClientSettings.backendTarget,
		"isDataValidationEnabled" : false
	};
	if(!_.isUndefined(AppClientInitOptions.handleNetworkState) && _.isString(AppClientInitOptions.handleNetworkState)){
		AppClientInitOptions.handleNetworkState = AppClientInitOptions.handleNetworkState.toLowerCase() === "true";
	}
	if(!_.isUndefined(AppClientInitOptions.autoLogin) && _.isString(AppClientInitOptions.autoLogin)){
		AppClientInitOptions.autoLogin = AppClientInitOptions.autoLogin.toLowerCase() === "true";
	}
	if(!_.isUndefined(AppClientInitOptions.clearOnLogout) && _.isString(AppClientInitOptions.clearOnLogout)){
		AppClientInitOptions.clearOnLogout = AppClientInitOptions.clearOnLogout.toLowerCase() === "true";
	}
	return AppClient.init(AppClientInitOptions);
}

function invokeAppClientMethod(method){
	var promise;
	if (!AppClient.isInitialized()) {
		promise = invokeAfterInit(AppClient[method]);
	}else{
		promise = AppClient[method]();
	}
	return promise;
}

function invokeAfterSuccessInit(func){
	return mssdk().then(func);
}

function invokeAfterInit(func){
	return mssdk()["catch"](function(){
    }).then(func);
}