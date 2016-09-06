/**
 * Created by Christophe on 01/09/2016.
 */
require.config({
    shim: {
        jquery: {
            exports: 'jQuery'
        }
    },
    paths: {
        underscore: 'bower_components/underscore/underscore',
        modelmanager: 'bower_components/tentacle-model-manager/src/modelmanager',
        modeldescriptor: 'bower_components/tentacle-model-manager/src/modeldescriptor',
        model: 'bower_components/tentacle-model-manager/src/model',
        logger: 'bower_components/tentacle-model-manager/src/logger',
        filter: 'bower_components/tentacle-model-manager/src/filter',
        filtersset: 'bower_components/tentacle-model-manager/src/filtersset',
        constants: 'bower_components/tentacle-model-manager/src/constants',
        jquery: 'bower_components/jquery/dist/jquery',
        loadingmanager: 'src/loadingmanager',
        monitorbutton: 'src/monitorbutton',
        monitorpanel: 'src/monitorpanel',
        monitorpanelsset: 'src/monitorpanelsset',
        monitoringapp: 'src/monitoringapp',
        uuid: 'bower_components/uuid/uuid',
        modelmonitorcontroller: 'src/controllers/modelmonitorcontroller',
        panelcontroller: 'src/controllers/panelcontroller',
        panelscontroller: 'src/controllers/panelscontroller',
        spritespanelcontroller: 'src/controllers/spritespanelcontroller',
        draggabledirective: 'src/directives/draggable',
        localization: 'data/localisation'
    }
});
