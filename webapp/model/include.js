sap.ui.define(
	[], 
	function(){
	   return {
	   	
	   	createMyModel: function(sPath){
	   		var oModel = new sap.ui.model.json.JSONModel();
		   //2) add data to model 
		   oModel.loadData(sPath);
		   return oModel;
	   	}
	   };	
	}
	);