'use strict';

window.app = window.app || {};
window.app.module = window.app.module || {};

(function(module, controller, repository){
    var FoodsModule = angular.module('FoodsModule', []);
    FoodsModule.controller('ListController', controller.ListController);
    FoodsModule.service('FoodsRepository', repository.FoodsRepository);
    
    module.FoodsModule = FoodsModule;
})(window.app.module, window.app.controller, window.app.repository);
