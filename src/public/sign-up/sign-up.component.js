(function () {
    'use strict';

    angular.module('public')
        .component('SignUp', {
            templateUrl: 'src/public/sign-up/sign-up.html',
            bindings: {
                items: '<'
            }
        });

})();
