/**
 * Created by Christophe on 05/09/2016.
 */

var mainApp = angular.module("monitoring-panel", ['ngRoute']);
var mainModelManager;

mainApp.factory('shared', function () {
    return {

    };
});

$(document).ready(function() {
    require(["monitoringapp"], function(MonitoringApp) {
        var app = new MonitoringApp(mainApp);
        mainModelManager = app.modelManager;
    });
});

