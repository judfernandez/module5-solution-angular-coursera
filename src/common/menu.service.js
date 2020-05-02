(function () {
  "use strict";

  angular.module('common')
    .service('MenuService', MenuService);


  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http, ApiPath) {
    var service = this;
    service.registrationUser = false;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };


    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = { 'category': category };
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

    service.getResponseForShortName = function (shortName) {
      var response = $http({
        method: "GET",
        url: ('https://judfernandezmo-course5-backend.herokuapp.com/menu_items/' + shortName + '.json')
      });

      return response;
    }

    service.addRegisterUser = function (user) {
      service.registrationUser = user;
    }

    service.getRegisterUser = function () {
      return service.registrationUser;
    }

  }



})();
