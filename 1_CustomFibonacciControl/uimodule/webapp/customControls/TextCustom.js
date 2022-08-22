sap.ui.define([
    'sap/ui/core/XMLComposite'
], function(XMLComposite) {
    'use strict';
    return XMLComposite.extend("com.myorg.testLibApp.customControls.TextCustom",{
        metadata:{
            properties:{
                text:{
                    type: "string",
                    defaltText: "defaultText"
                }
            },
            events: {
                press:{

                }
            }
        },
        onclick: function(){
            this.fireEvent("press");
        }
    });
});