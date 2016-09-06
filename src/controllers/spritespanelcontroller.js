/* global Tentacle */

var spritesPanelController =  function ($scope, shared) {
    $scope.init = function (datas) {
       var serDatas = atob(datas);
       datasObj = JSON.parse(serDatas);
       
       for (var propName in datasObj) {
           $scope[propName] = datasObj[propName];
       }
       
       $scope.getModels();
       
       $scope.controlSprites = mainModelManager.getModelByType("ControlSprite");
       $scope.foregroundSprites = mainModelManager.getModelByType("ForegroundSprite");
       $scope.backgroundSprites = mainModelManager.getModelByType("BackgroundSprite");
    };

    $scope.getModels = function () {
        $scope.models = mainModelManager.getModelByType($scope.modeltype);
    };

    $scope.addReferenceItem = shared.addReferenceItem;

    $scope.editItem = shared.editItem;

    $scope.editItemByItem = shared.editItemByItem;

    $scope.getName = shared.getName;
    
    $scope.getSpriteUrl = function (model) {
        return getImageUrl(model, "sprites");
    };
    
    $scope.getControlUrl = function (model) {
        return getImageUrl(model, "controls");
    };
    
    $scope.getImageUrl = function (model, folder) {
        var spriteFile = mainModelManager.getModelByUid(model.get("reference"));
        var spritePackage = mainModelManager.getModelByUid(spriteFile.get("package"));
        return spritePackage.get("identifier") + "/" + folder + "/" + spriteFile.get("file");
    };

    $scope.deleteItem = function (descid, item, $event) {
        $event.stopPropagation();
        mainModelManager.deleteItem(descid, item);
    };
};
