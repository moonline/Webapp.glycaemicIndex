'use strict';

window.app = window.app || {};
window.app.controller = window.app.controller || {};

(function(controller, repository){
    var ListController = function(FoodsRepository) {
        this.foods = FoodsRepository.findAll();
    };
    ListController.prototype.$inject = ['FoodsRepository'];

    controller.ListController = ListController;
})(window.app.controller, window.app.repository);
