/**
 * Created by Christophe on 05/09/2016.
 */

var mainApp = angular.module("monitoring-panel", ['ngRoute']);
mainApp.controller("modelmonitorcontroller", modelMonitorController);
mainApp.controller("panelcontroller", panelController);
mainApp.controller("panelscontroller", panelsController);
mainApp.controller("spritespanelcontroller", spritesPanelController);
mainApp.directive('draggable', draggableDirective);

var mainModelManager;

mainApp.factory('shared', sharedFactory);

$(document).ready(function() {
    require(["monitoringapp"], function(MonitoringApp) {
        var app = new MonitoringApp(mainApp);
        mainModelManager = app.modelManager;
    });
});

