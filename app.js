/**
 * Created by Christophe on 05/09/2016.
 */

$(document).ready(function() {

    require(["monitoringapp", "modelmonitorcontroller", "panelcontroller", "panelscontroller", "spritespanelcontroller", "draggabledirective", "sharedfactory"], function(MonitoringApp, modelMonitorController, panelController, panelsController, spritesPanelController, draggableDirective, sharedFactory) {

        var shared = {};

        var mainApp = angular.module("monitoring-panel", ['ngRoute']);
        mainApp.controller("modelmonitorcontroller", modelMonitorController);
        mainApp.controller("panelcontroller", panelController);
        mainApp.controller("panelscontroller", panelsController);
        mainApp.controller("spritespanelcontroller", spritesPanelController);
        mainApp.directive('draggable', draggableDirective);
        mainApp.factory('shared', function() {
            return shared;
        });

        var app = new MonitoringApp(mainApp);
        shared.modelManager = app.modelManager;
    });
});

