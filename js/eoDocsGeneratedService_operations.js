Apperyio.eoDocsGeneratedService_operations = Appery.createClass(null, {
	config:{
		model: 'eoDocsGeneratedService',
		primaryKeyName: "id"
	},

	init: function (requestOptions) {
		this.modelService = new Apperyio.AppClientModelServices(this, this.config, requestOptions);
	},

	process : function(settings) {
		this.modelService.process(settings);
	}
});