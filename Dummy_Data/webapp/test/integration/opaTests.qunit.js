/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Workspace/Dummy_Data/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});