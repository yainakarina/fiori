/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Desarrollo/proyecto-fiori/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
