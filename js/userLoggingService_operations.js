Apperyio.userLoggingService_operations = Appery.createClass(null, {
	config:{
		model: 'loginUserLoggingService',
		primaryKeyName: "id"
	},

	init: function (requestOptions) {
		this.modelService = new Apperyio.AppClientModelServices(this, this.config, requestOptions);
	},

	process : function(settings) {
		this.modelService.process(settings);
	}
});