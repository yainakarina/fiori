/*global QUnit*/

sap.ui.define([
	"Desarrollo/proyecto-fiori/controller/ProyectoFiori.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ProyectoFiori Controller");

	QUnit.test("I should test the ProyectoFiori controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
