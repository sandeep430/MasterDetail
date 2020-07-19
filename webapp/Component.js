sap.ui.define(
	["sap/ui/core/UIComponent", "mw/model/include"],

	function(oComp, oMod) {
		oComp.extend("mw.Component", {

			metadata: {
				"manifest": "json"
			},
			init: function() {

				sap.ui.core.UIComponent.prototype.init.apply(this);
				var oRouter = this.getRouter();
				oRouter.initialize();
			},
			// createContent: function() {

			// 	var oView = new sap.ui.view({
			// 		id: "idApp",
			// 		viewName: "mw.view.App",
			// 		type: "XML"
			// 	});

			// 	// var oModel = oMod.createMyModel("model/data/data.json");
			// 	// oView.setModel(oModel);

			// 	return oView;
			// },
			destroy: function() {}

		});
	});