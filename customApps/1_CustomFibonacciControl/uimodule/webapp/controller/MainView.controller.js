sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myorg.testLibApp.controller.MainView", {
            onInit: function () {},
            onReset: function(){
                this.byId("fibonic").reset( 1, 1);
            },
            onNext:function (oEvent){
                sap.m.MessageToast.show(oEvent.getParameter("nextValue"));
            },
            onPressText:function(oEvent){
                sap.m.MessageToast.show(oEvent.getSource().getText());
            }
        });
    }
);
