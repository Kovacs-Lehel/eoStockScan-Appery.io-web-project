Apperyio.AppClientModelServices = Appery.createClass(null, {

	_ApperyioAppClient: function (Apperyio, config) {		
		
		function deleteUndefinedFields(options) {
			for (var field in options) {
				if (options[field] === undefined) {
					delete options[field];
				}
			}
			return options;
		}

		function getModelDao(){
		    return mssdk().then(function(success){
		        return success.dao(config.model);
		    });
		}

		this.methods = {
			find: function (options) {
				return getModelDao().then(function(dao){
						var extensionVersion = AppClientSettings.version;
						var findOptions = {};
						var findWhere = {};				
						if(!_.isUndefined(extensionVersion) && extensionVersion >= "2"){
							if(!_.isUndefined(options.data.where) && _.isObject(options.data.where)){
								findWhere = options.data.where;
							}							
							if(!_.isUndefined(options.data.offset) && !_.isObject(options.data.offset)){
								findOptions.offset = options.data.offset;
							}							
							if(!_.isUndefined(options.data.limit) && !_.isObject(options.data.limit)){
								findOptions.limit = options.data.limit;
							}
							if(!_.isUndefined(options.data.sortBy)){
								findOptions.sort = options.data.sortBy;
							}
							findOptions.cached = options.data.cached;
							if(!_.isUndefined(findOptions.cached) && _.isString(findOptions.cached)){
								findOptions.cached = findOptions.cached.toLowerCase() === "true";
							}
							findOptions.clearCache = options.data.clearCache;
							if(!_.isUndefined(findOptions.clearCache) && _.isString(findOptions.clearCache)){
								findOptions.clearCache = findOptions.clearCache.toLowerCase() === "true";
							}
						}else{
							findWhere = options.data;
						}						
						return dao.find(findWhere, findOptions).then(
							function(data){
								options.success(data);
								return data;
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
					options.complete('success');
				});
			},
			count: function (options) {
				return getModelDao().then(function(dao){
						var extensionVersion = AppClientSettings.version;
						var findOptions = {};
						var findWhere = {};				
						if(!_.isUndefined(extensionVersion) && extensionVersion > "2"){
							if(!_.isUndefined(options.data.where) && _.isObject(options.data.where)){
								findWhere = options.data.where;
							}							
							findOptions.cached = options.data.cached;
							if(!_.isUndefined(findOptions.cached) && _.isString(findOptions.cached)){
								findOptions.cached = findOptions.cached.toLowerCase() === "true";
							}
						}else{
							findWhere = options.data;
						}						
						return dao.getCount(findWhere, findOptions).then(
							function(data){
								options.success(data);
								return data;
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
					options.complete('success');
				});
			},
			fetch: function (options) {
				return getModelDao().then(function(dao){
						return dao.fetch().then(
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
					options.complete('success');
				});
			},
			get: function (options) {
				return getModelDao().then(function(dao){
						var operationOptions = {};
						operationOptions.cached = options.data.cached;
						if(!_.isUndefined(operationOptions.cached) && _.isString(operationOptions.cached)){
							operationOptions.cached = operationOptions.cached.toLowerCase() === "true";
						}
						return dao.get(options.data[config.primaryKeyName], operationOptions).then(
							function(data){
								options.success(data);
								return data;
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
					options.complete('success');
				});
			},
			create: function (options) {
				return getModelDao().then(function(dao){
						deleteUndefinedFields(options);
						return dao.create(options.data).then(
							function(data){
								options.success(data);
								return data;
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
					options.complete('success');
				});
			},
			update: function (options) {
				return getModelDao().then(function(dao){
						deleteUndefinedFields(options);
						return dao.update(options.data[config.primaryKeyName], options.data).then(
							function(data){
								options.success(data);
								return data;
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
					options.complete('success');
				});
			},
			remove: function (options) {
				return getModelDao().then(function(dao){
						return dao['delete'](options.data[config.primaryKeyName], {}, options.data).then(
							function(data){
								options.success(data);
								return data;
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
					options.complete('success');
				});
			},
			clear: function (options) {
				return getModelDao().then(function(dao){
						return dao.clearCache().then(
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
					options.complete('success');
				});
			}
		};

		return this;
	},
	
	_setConfiguration: function(config){		
		this.config = config;		
	},
	
	_getConfiguration: function(){
		return this.config;
	},
	
	_getOperationNameByServiceName: function(serviceName){
		var modelOperationName = _.last(serviceName.split("_")).toLowerCase();
		return modelOperationName === "delete" ? "remove" : modelOperationName;		
	},	

	get: function (settings) {
		return this._ApperyioAppClient(Apperyio, this._getConfiguration()).methods.get(settings);
	},
	find: function (settings) {
		return this._ApperyioAppClient(Apperyio, this._getConfiguration()).methods.find(settings);
	},
	count: function (settings) {
		return this._ApperyioAppClient(Apperyio, this._getConfiguration()).methods.count(settings);
	},
	fetch: function (settings) {
		return this._ApperyioAppClient(Apperyio, this._getConfiguration()).methods.fetch(settings);
	},
	create: function (settings) {
		return this._ApperyioAppClient(Apperyio, this._getConfiguration()).methods.create(settings);
	},
	update: function (settings) {
		return this._ApperyioAppClient(Apperyio, this._getConfiguration()).methods.update(settings);
	},
	remove: function (settings) {
		return this._ApperyioAppClient(Apperyio, this._getConfiguration()).methods.remove(settings);
	},
	clear: function (settings) {
		return this._ApperyioAppClient(Apperyio, this._getConfiguration()).methods.clear(settings);
	},
	

	init: function (context, config, requestOptions) {
		this.__requestOptions = $.extend({}, requestOptions);
		context.__requestOptions = this.__requestOptions;
		this._setConfiguration(config);		
		this.doProcess = this[this._getOperationNameByServiceName(requestOptions.serviceName)];						
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