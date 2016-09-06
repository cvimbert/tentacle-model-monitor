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
        //modelmanager: 'bower_components/tentacle-model-manager/dist/modelmanager.bundle.min',
        underscore: 'node_modules/underscore/underscore',
        modelmanager: 'bower_components/tentacle-model-manager/src/modelmanager',
        modeldescriptor: 'bower_components/tentacle-model-manager/src/modeldescriptor',
        model: 'bower_components/tentacle-model-manager/src/model',
        logger: 'bower_components/tentacle-model-manager/src/logger',
        filter: 'bower_components/tentacle-model-manager/src/filter',
        filtersset: 'bower_components/tentacle-model-manager/src/filtersset',
        constants: 'bower_components/tentacle-model-manager/src/constants',
        jquery: 'node_modules/jquery/dist/jquery',
        loadingmanager: 'src/loadingmanager',
        monitorbutton: 'src/monitorbutton',
        monitorpanel: 'src/monitorpanel',
        monitorpanelsset: 'src/monitorpanelsset',
        monitoringapp: 'src/monitoringapp',
        uuid: 'node_modules/node-uuid/uuid'
        /*underscore: 'node_modules/underscore/underscore',
        modelmanager: 'bower_components/tentacle-model-manager/src/modelmanager',
        modeldescriptor: 'bower_components/tentacle-model-manager/src/modeldescriptor',
        model: 'bower_components/tentacle-model-manager/src/model',
        logger: 'bower_components/tentacle-model-manager/src/logger',
        filter: 'bower_components/tentacle-model-manager/src/filter',
        filtersset: 'bower_components/tentacle-model-manager/src/filtersset',
        constants: 'bower_components/tentacle-model-manager/src/constants',
        uuid: 'node_modules/node-uuid/uuid'*/
    }
});
