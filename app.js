/**
 * Created by Christophe on 05/09/2016.
 */
/* global angular, Tentacle, modelDescriptorV3, monitorDesc, _, Localization */

var mainApp = angular.module("monitoring-panel", ['ngRoute']);
var mainModelManager;

mainApp.factory('shared', function () {
    return {
    };
});


require(["monitoringapp"], function(MonitoringApp) {
    var app = new MonitoringApp(mainApp);
    mainModelManager = app.modelmanager;
});