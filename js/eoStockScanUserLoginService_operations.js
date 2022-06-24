Apperyio.eoStockScanUserLoginService_operations = Appery.createClass(null, {
	config:{
		model: 'eoStockScanUserService',
		primaryKeyName: "id"
	},

	init: function (requestOptions) {
		this.modelService = new Apperyio.AppClientModelServices(this, this.config, requestOptions);
	},

	process : function(settings) {
		this.modelService.process(settings);
	}
});