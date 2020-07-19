sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/SelectDialog",
	"sap/ui/model/json/JSONModel"
], function(Controller, oMsgBox, oMsgTst, SelectDialog, JSONModel) {
	"use strict";
	return Controller.extend("mw.controller.Add", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf mw.view.view2
		 */
		onInit: function() {
						debugger;
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRouteMatched(this.bingo, this);
			var oItab = new JSONModel();
			oItab.setData({

				"product": {
					"ProductId": "KT-1000",
					"TypeCode": "PR",
					"Category": "Notebooks",
					"Name": "Notebook Basic 15",
					"Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
					"SupplierId": "100000046",
					"TaxTarifCode": 1,
					"MeasureUnit": "EA",
					"Price": "956.0000",
					"CurrencyCode": "EUR",
					"DimUnit": "CM"

				}
			});
			this.getView().setModel(oItab,"india");

		},
		bingo: function(oEvent) {
			// var index = oEvent.getParameter("arguments").myVar;
			//  debugger;
			// 	var sPath = "/" + index;

			//   this.getView().bindElement(sPath);
		},
		onBack: function() {
			this.getView().getParent().to("idView1");
			// var oView1 = this.getView();
			// var oApp = oView1.getParent().getParent();
			// oApp.toDetail("idView1");
		},
		goSuccess: function() {
			var that = this;
			oMsgBox.confirm("Success!!", {
				title: "Confirmation", 
				onClose: function(choice){
					if(choice === "OK") {
								 debugger;
						var oDataModel = that.getView().getModel();
						var oProductData = that.getView().getModel("india").getProperty("/product");
						
				 
						
						oDataModel.create("/productSet", oProductData,{
							success: function(){
								oMsgTst.show("saved");
								
							},
							error: function(oErr){
							 oMsgBox.error( oErr.statusText );
							}
						});
					}
				}
			});
		},
		goError: function() {
			// oMsgBox.error("Errr...", {
			// 	title: "Error..",
			// 	onClose: function(choice) {
			// 		if (choice === "CLOSE") {
			// 			oMsgTst.show("all good");
			// 		}
			// 	}
			// });
		},
		onConfirm: function(oEvt) {
		
			var val = oEvt.getParameter("selectedItem").getValue();
			sap.ui.getCore().byId(this.idTF).setValue(val);
		}
		,
		onF4Help: function(oEvt) {
			debugger;	debugger;
	    this.fieldId = oEvt.getSource().getId();
	    
			var that = this;
	
	var myVar = this.fieldId;
			var oDialog = new SelectDialog({
				title: "Products",
				items: {
					path: "/productSet", 
					template: new sap.m.DisplayListItem({
						label: "{Name}", 
						value:"{ProductId}"
					})
			      },
			      confirm: function(oEvt1){
			      		debugger;
			      	var oVal = oEvt1.getParameter("selectedItem").getValue();
			      	// sap.ui.getCore().byId(myVar).setValue(oVal);
			      	that.getView().byId(myVar).setValue(oVal);
			      	oDialog.destroy();
			      }
				
				});
		
		    this.getView().addDependent(oDialog);
		    oDialog.open();
		
			// var val = oEvt.getParameter("selectedItem").getValue();
			// sap.ui.getCore().byId(this.idTF).setValue(val);
		}
	});
});