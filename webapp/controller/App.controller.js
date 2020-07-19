sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("mw.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf mw.view.App
		 */
			onInit: function() {
		
		    // var oView1 = new sap.ui.view({
		    // 	id:"idView1", 
		    // 	viewName:"mw.view.view1",
		    // 	type:"XML"
		    // });             
		    
		    // var oView2 = new sap.ui.view({
		    // 	id:"idView2", 
		    // 	viewName:"mw.view.view2",
		    // 	type:"XML"
		    // });
		    
		    //  var oView0 = new sap.ui.view({
		    // 	id:"idView0", 
		    // 	viewName:"mw.view.view0",
		    // 	type:"XML"
		    // });
		    
		    // var oAppContainer = this.getView().byId("myApp");
		    // oAppContainer.addMasterPage(oView1);
		    // oAppContainer.addDetailPage(oView0);
     	// 	oAppContainer.addDetailPage(oView2);
     		
     		
		
			}
		
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf mw.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf mw.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf mw.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});