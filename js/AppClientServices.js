Apperyio.AppClientServices = Appery.createClass(null, {

	_ApperyioAppClient: function (Apperyio) {

		this.methods = {
			signup: function (options) {
				return mssdk().then(
					function(success){
						return success.signup(options.data['username'], options.data['password'], options.data['options']).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			updateUser: function (options) {
				return mssdk().then(
					function(success){
						return success.updateUser(options.data['username'], options.data['password'], options.data['options']).then(
							function(){
								options.success();
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			removeUser: function (options) {
				return mssdk().then(
					function(success){
						return success.removeUser().then(
							function(){
								options.success();
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			loginAnonymously: function (options) {
				return mssdk().then(
					function(success){
						return success.loginAnonymously().then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			login: function (options) {
				return mssdk().then(
					function(success){
						return success.login(options.data['username'], options.data['password'], options.data['token'], options.data['options']).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			logout: function (options) {
				return mssdk().then(
					function(success){
						return success.logout().then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			getCurrentUser: function (options) {
				return mssdk().then(
					function(success){
						return success.getCurrentUser().then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			setSessionToken: function (options) {
				return mssdk().then(
					function(success){
						return success.setSessionToken(options.data.token).then(
							function(){
								options.success();
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			goOnline: function (options) {
				return mssdk().then(
					function(success){
						return success.goOnline().then(
							function(){
								options.success();
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			goOffline: function (options) {
				return mssdk().then(
					function(success){
						return success.goOffline().then(
							function(){
								options.success();
							},
							function(error){
								options.error();
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			getState: function (options) {
				return mssdk()["catch"](function(){
                    }).then(function(){
						return AppClient.getState().then(
							function(data){
								options.success({
									state: data
        						});
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			getConflict: function (options) {
				return mssdk()["catch"](function(){
                    }).then(function(){
						return AppClient.getConflict().then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			resolveConflict: function (options) {
				return mssdk()["catch"](function(){
                    }).then(function(){
						return AppClient.resolveConflict(options.data.data, options.data.action).then(
							function(){
								options.success();
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			revertLocalChanges: function (options) {
				var promise;
				if (!AppClient.isInitialized()) {
					promise = mssdk()["catch"](function(){
						}).then(function(){
							return AppClient.revertLocalChanges().then(
								function(){
									options.success();
								},
								function(error){
									options.error(error);
								}
							);
						});
				}else{
					promise = AppClient.revertLocalChanges().then(
								function(){
									options.success();
								},
								function(error){
									options.error(error);
								}
							);
				}
				promise = promise['finally'](function(){
					options.complete();
				});
				return promise;
			},
			retrySync: function (options) {
				var promise;
				if (!AppClient.isInitialized()) {
					promise = mssdk()["catch"](function(){
						}).then(function(){
							return AppClient.retrySync().then(
								function(){
									options.success();
								},
								function(error){
									options.error(error);
								}
							);
						});
				}else{
					promise = AppClient.retrySync().then(
								function(){
									options.success();
								},
								function(error){
									options.error(error);
								}
							);
				}
				promise = promise['finally'](function(){
					options.complete();
				});
				return promise;
			},
			resetFailedSync: function (options) {
				var promise;
				if (!AppClient.isInitialized()) {
					promise = mssdk()["catch"](function(){
						}).then(function(){
							return AppClient.resetFailedSync().then(
								function(){
									options.success();
								},
								function(error){
									options.error(error);
								}
							);
						});
				}else{
					promise = AppClient.resetFailedSync().then(
								function(){
									options.success();
								},
								function(error){
									options.error(error);
								}
							);
				}
				promise = promise['finally'](function(){
					options.complete();
				});
				return promise;				
			},			
			invoke: function (options) {
				var cached = _.isUndefined(options.data.cached) ? options.serviceSettings.cached : options.data.cached;
				if(_.isString(cached)){
					cached = cached.toLowerCase() === "true";
				}
				return mssdk().then(
					function(success){
						options.data.requestType = options.serviceSettings.requestType;
						options.data.responseType = options.serviceSettings.responseType;
						options.data.nativeBinaryResponse = options.serviceSettings.nativeBinaryResponse;
						return success.invoke(options.serviceSettings.method,
											  options.serviceSettings.url,
											  options.data,
											  cached).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			ethSetPrivateKey: function (options) {
				return mssdk().then(
					function(success){
						return success.setEthPrivateKey(options.data.privateKey, options.data.password).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			ethCall: function (options) {
				return mssdk().then(
					function(success){
						return success.ethContractCall(options.data.methodName, options.data, options.serviceSettings).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			ethContractSendTransaction: function (options) {
				return mssdk().then(
					function(success){
						return success.ethContractSendTransaction(options.data.methodName, options.data, options.serviceSettings).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			ethGetBalance: function (options) {
				return mssdk().then(
					function(success){
						return success.ethGetBalance(options.data, options.serviceSettings).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			ethTransferEther: function (options) {
				return mssdk().then(
					function(success){
						return success.ethTransferEther(options.data, options.serviceSettings).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			ethGetTransaction: function (options) {
				return mssdk().then(
					function(success){
						return success.ethGetTransaction(options.data.txHash, options.serviceSettings).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			ethGetTransactionReceipt: function (options) {
				return mssdk().then(
					function(success){
						return success.ethGetTransactionReceipt(options.data.txHash, options.serviceSettings).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			ethGetAccount: function (options) {
				return mssdk().then(
					function(success){
						return success.ethGetAccount().then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			ethCreateAccount: function (options) {
				return mssdk().then(
					function(success){
						return success.ethCreateAccount(options.data.password).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			},
			ethExportPrivateKey: function (options) {
				return mssdk().then(
					function(success){
						return success.ethExportPrivateKey(options.data.password).then(
							function(data){
								options.success(data);
							},
							function(error){
								options.error(error);
							}
						);
					},
					function(error){
						options.error(error);
					}
				)
				['finally'](function(){
					options.complete();
				});
			}
		};

		return this;
	},

	signup: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.signup(settings);
	},
	updateUser: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.updateUser(settings);
	},
	removeUser: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.removeUser(settings);
	},
	loginAnonymously: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.loginAnonymously(settings);
	},
	login: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.login(settings);
	},
	logout: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.logout(settings);
	},
	getCurrentUser: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.getCurrentUser(settings);
	},
	setSessionToken: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.setSessionToken(settings);
	},
	goOnline: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.goOnline(settings);
	},
	goOffline: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.goOffline(settings);
	},
	getState: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.getState(settings);
	},
	getConflict: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.getConflict(settings);
	},
	resolveConflict: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.resolveConflict(settings);
	},
	revertLocalChanges: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.revertLocalChanges(settings);
	},
	retrySync: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.retrySync(settings);
	},
	resetFailedSync: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.resetFailedSync(settings);
	},
	invoke: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.invoke(settings);
	},
	ethSetPrivateKey: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.ethSetPrivateKey(settings);
	},
	ethCall: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.ethCall(settings);
	},
	ethContractSendTransaction: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.ethContractSendTransaction(settings);
	},
	ethGetBalance: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.ethGetBalance(settings);
	},
	ethTransferEther: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.ethTransferEther(settings);
	},
	ethGetTransaction: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.ethGetTransaction(settings);
	},
	ethGetTransactionReceipt: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.ethGetTransactionReceipt(settings);
	},
	ethGetAccount: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.ethGetAccount(settings);
	},
	ethCreateAccount: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.ethCreateAccount(settings);
	},
	ethExportPrivateKey: function (settings) {
		return this._ApperyioAppClient(Apperyio).methods.ethExportPrivateKey(settings);
	},

	init: function (requestOptions) {
		this.__requestOptions = $.extend({}, requestOptions);
		if (requestOptions.serviceName === 'AppClientSignUp') {
            this.doProcess = this.signup;
        }else if (requestOptions.serviceName === 'AppClientUpdateCurrentUser') {
           	this.doProcess = this.updateUser;
        }else if (requestOptions.serviceName === 'AppClientDeleteCurrentUser') {
           	this.doProcess = this.removeUser;
        }else if (requestOptions.serviceName === 'AppClientLoginAnonymously') {
         	this.doProcess = this.loginAnonymously;
        }else if (requestOptions.serviceName === 'AppClientLogin') {
			this.doProcess = this.login;
		}else if (requestOptions.serviceName === 'AppClientLogout') {
			this.doProcess = this.logout;
		}else if (requestOptions.serviceName === 'AppClientGetCurrentUser') {
   			this.doProcess = this.getCurrentUser;
   		}else if (requestOptions.serviceName === 'AppClientGoOnline') {
			this.doProcess = this.goOnline;
		}else if (requestOptions.serviceName === 'AppClientGoOffline') {
			this.doProcess = this.goOffline;
		}else if (requestOptions.serviceName === 'AppClientGetState') {
			this.doProcess = this.getState;
		}else if (requestOptions.serviceName === 'AppClientGetConflict') {
         	this.doProcess = this.getConflict;
        }else if (requestOptions.serviceName === 'AppClientResolveConflict') {
           	this.doProcess = this.resolveConflict;
        }else if (requestOptions.serviceName === 'AppClientRetrySync') {
			this.doProcess = this.retrySync;
		}else if (requestOptions.serviceName === 'AppClientResetFailedSync') {
			this.doProcess = this.resetFailedSync;
		}else if (requestOptions.serviceName === 'AppClientSetSessionToken') {
         	this.doProcess = this.setSessionToken;
        }else if (requestOptions.serviceName === 'AppClientETHSetPrivateKey') {
         	this.doProcess = this.ethSetPrivateKey;
        }else if (requestOptions.serviceName === 'AppClientETHCall') {
         	this.doProcess = this.ethCall;
        }else if (requestOptions.serviceName === 'AppClientETHTransaction') {
         	this.doProcess = this.ethContractSendTransaction;
        }else if (requestOptions.serviceName === 'AppClientETHGetBalance') {
         	this.doProcess = this.ethGetBalance;
        }else if (requestOptions.serviceName === 'AppClientETHTransferEther') {
         	this.doProcess = this.ethTransferEther;
        }else if (requestOptions.serviceName === 'AppClientETHGetTransaction') {
         	this.doProcess = this.ethGetTransaction;
        }else if (requestOptions.serviceName === 'AppClientETHGetTransactionReceipt') {
         	this.doProcess = this.ethGetTransactionReceipt;
        }else if (requestOptions.serviceName === 'AppClientETHGetAccount') {
         	this.doProcess = this.ethGetAccount;
        }else if (requestOptions.serviceName === 'AppClientETHCreateAccount') {
         	this.doProcess = this.ethCreateAccount;
        }else if (requestOptions.serviceName === 'AppClientETHExportPrivateKey') {
         	this.doProcess = this.ethExportPrivateKey;
        }else{
			this.doProcess = this.invoke;
		}
	},

	process : function(settings) {
		settings.beforeSend(settings);
		if (this.__requestOptions.echo) {
			settings.success(this.__requestOptions.echo);
		} else {
			this.doProcess(settings);
		}
	}

});