sap.ui.define([
    'sap/ui/core/XMLComposite'

], function (XMLComposite) {
    'use strict';
    return XMLComposite.extend("com.myorg.testLibApp.customControls.Fibonic", {

        metadata: {
            properties: {
                title: {
                    type: "string",
                    defaultValue: "my Custom control"
                },
                firstValue: {
                    type: "int",
                    defaultValue: 1
                },
                secondValue: {
                    type: "int",
                    defaultValue: 1
                }
            },
            events: {
                next: {
                    parameters: {
                        nextValue: {
                            type: "int"
                        }
                    }
                }
            }
        },
        reset: function (a, b) {
            this.setFirstValue(a);
            this.setSecondValue(b);
        },

        _onHandlePress: function () {
            const newValue = this.getFirstValue() + this.getSecondValue();
            this.setFirstValue(this.getSecondValue());
            this.setSecondValue(newValue);
            this.fireEvent("next", {
                nextValue: newValue
            })
        }

    });
});