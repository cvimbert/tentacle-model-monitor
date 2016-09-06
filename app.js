/**
 * Created by Christophe on 05/09/2016.
 */

var mainModelManager;


$(document).ready(function() {

    require(["monitoringapp", "modelmonitorcontroller", "panelcontroller", "panelscontroller", "spritespanelcontroller", "draggabledirective", "sharedfactory"], function(MonitoringApp, modelMonitorController, panelController, panelsController, spritesPanelController, draggableDirective, sharedFactory) {

        var mainApp = angular.module("monitoring-panel", ['ngRoute']);
        mainApp.controller("modelmonitorcontroller", modelMonitorController);
        mainApp.controller("panelcontroller", panelController);
        mainApp.controller("panelscontroller", panelsController);
        mainApp.controller("spritespanelcontroller", spritesPanelController);
        mainApp.directive('draggable', draggableDirective);
        mainApp.factory('shared', sharedFactory);

        var app = new MonitoringApp(mainApp);
        mainModelManager = app.modelManager;
    });
});

