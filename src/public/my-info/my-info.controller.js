(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService'];
    function MyInfoController(MenuService) {
        var myInfoCtrl = this;

        myInfoCtrl.user = MenuService.getRegisterUser();
        myInfoCtrl.menuItem = MenuService.getMenuItem();

        myInfoCtrl.showUser = function () {
            var response;
            if (!myInfoCtrl.user && !myInfoCtrl.menuItem) {
                response = false;
            } else {
                response = true;
            }

            return response;
        }

    }

})();