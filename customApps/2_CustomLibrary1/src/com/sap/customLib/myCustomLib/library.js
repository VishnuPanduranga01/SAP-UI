/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library com.sap.customLib.myCustomLib.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "com.sap.customLib.myCustomLib",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"com.sap.customLib.myCustomLib.ExampleColor"
		],
		interfaces: [],
		controls: [
			"com.sap.customLib.myCustomLib.Example",
			"com.sap.customLib.myCustomLib.Fibonic"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>myCustomLib</code>
	 *
	 * @namespace
	 * @name com.sap.customLib.myCustomLib
	 * @author Vishnu Panduranga
	 * @version ${version}
	 * @public
	 */
	var thisLib = com.sap.customLib.myCustomLib;

	/**
	 * Semantic Colors of the <code>com.sap.customLib.myCustomLib.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
