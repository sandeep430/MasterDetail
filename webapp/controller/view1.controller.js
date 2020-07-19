sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("mw.controller.view1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf mw.view.view1
		 */
			onInit: function() {
		    // other way of binding the list 
		    
		    var oList = this.getView().byId("idList");
		     
		      
		     oList.bindItems({
		     path: "/masterSet",
		     template: new sap.m.ObjectListItem({
		     	// type:"Navigation",
		     	intro:"{Person}",  
		     	number:"{Age}",
		     	numberUnit:"{LastNight}"
		     
		     })
		    
			});
			
			this.oRouter = this.getOwnerComponent().getRouter();
		   
		
			},
			onAdd: function(){
				debugger;
			// this.oRouter.navTo("detail");
	 this.oRouter.navTo("add");
	 
	  // var myIndex = "productSet";
			// this.onFront(myIndex);
		 
	 
			},
			
			onItemPress: function(oEvent){
				
		  var itemSel = oEvent.getParameter("listItem");
		   var sPath = itemSel.getBindingContextPath();
		 //var myIndex = sPath;
		  var myIndex = sPath.split("/")[sPath.split("/").length - 1 ];
		 	// var oView2 = this.getView().getParent().getParent().getDetailPages()[1];
		  //  oView2.bindElement(sPath);
			
			this.onFront(myIndex);
			},
			
		onFront: function(myIndex){ 
			
			
			// var oView1 = this.getView();
			// var oApp = oView1.getParent().getParent();
		 //   oApp.toDetail("idView2");
		this.oRouter.navTo("detail",{
		 	myVar: myIndex
		 });
			
		},
		
      	onSearch: function(oEvent){
      	
      		var oSearchField = oEvent.getSource();
      		
      		var oP1 = oSearchField.mProperties.value;
      		// var oPar = oEvent.getParameters();
      		var oPar = oEvent.getParameter("query");
      		
       
      		debugger;
			
      		var aFilter = [];
      		var oFilter = new sap.ui.model.Filter("Person",
      		                                       sap.ui.model.FilterOperator.Contains,
      		                                       oP1);
      	     aFilter.push(oFilter);
             //this.getView().byId("idList").getBinding("items").filter(aFilter);
         
         
         var oList = this.getView().byId("idList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		 	
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf mw.view.view1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf mw.view.view1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf mw.view.view1
		 */
		//	onExit: function() {
		//
		//	}

	});

});