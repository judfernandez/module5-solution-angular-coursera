(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        var signUpCtrl = this;
        signUpCtrl.itemExist = true;
        signUpCtrl.saveInfo = false;

        signUpCtrl.submit = function (shortName) {
            var promise = MenuService.getResponseForShortName(shortName);

            promise.then(function (response) {
                var user = signUpCtrl.register;
                signUpCtrl.itemExist = true;
                signUpCtrl.saveInfo = true;
                MenuService.addRegisterUser(user, response.data);
            })
                .catch(function (error) {
                    signUpCtrl.itemExist = false;
                    signUpCtrl.saveInfo = false;
                })

        }

    }


})();