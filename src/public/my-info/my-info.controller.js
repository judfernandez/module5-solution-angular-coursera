(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService'];
    function MyInfoController(MenuService) {
        var myInfoCtrl = this;
        myInfoCtrl.user = MenuService.getRegisterUser();

        myInfoCtrl.showUser = function () {
            var response;
            if (!myInfoCtrl.user) {
                response = false;
            } else {
                response = true;
            }

            return response;
        }

    }

})();