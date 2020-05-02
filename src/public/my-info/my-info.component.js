(function () {
    'use strict';

    angular.module('public')
        .component('MyInfo', {
            templateUrl: 'src/public/my-info/my-info.html',
            bindings: {
                items: '<'
            }
        });

})();
