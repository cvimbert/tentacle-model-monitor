/* global Tentacle */

define([], function() {
    return function ($scope, shared) {

        $scope.init = function (datas) {
            var serDatas = atob(datas);
            datasObj = JSON.parse(serDatas);

            for (var propName in datasObj) {
                $scope[propName] = datasObj[propName];
            }

            $scope.getModels();
        };

        $scope.getModels = function () {
            $scope.models = shared.modelManager.getModelByType($scope.modeltype);
            console.log($scope.models);
        };

        $scope.addReferenceItem = shared.addReferenceItem;

        $scope.editItem = shared.editItem;

        $scope.editItemByItem = shared.editItemByItem;

        $scope.getName = shared.getName;

        $scope.deleteItem = function (descid, item, $event) {
            $event.stopPropagation();
            shared.modelManager.deleteItem(descid, item);
        };
    };
});