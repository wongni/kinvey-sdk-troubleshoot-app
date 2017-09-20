'use strict';

// Register `kinvey` component, along with its associated controller and template
angular.
  module('kinveyTest').
  component('kinveyTest', {
    templateUrl: 'kinvey-test/kinvey-test.template.html',
    controller: ['$kinvey', '$scope',
      function kinveyController($kinvey, $scope) {
        var vm = this;

        login('[username]', '[password]') // FIXME
          .then(function () {
            return fetchCollection('PanelTypes')
          })
          .then(function (entities) {
            console.log(entities);
            vm.panelTypes = entities;
            return fetchCollection('BreakerTypes')
          })
          .then(function (entities) {
            console.log(entities);
            vm.breakerTypes = entities;
            $scope.$apply();
            $kinvey.User.logout();
          })
          .catch(function (error) {
            vm.error = JSON.stringify(error);
            $scope.$apply();
            $kinvey.User.logout();
          });

        function login(username, password) {
          return $kinvey.User.login(username, password);
        }

        function fetchCollection(collection) {
          var dataStore = $kinvey.DataStore.collection(collection, $kinvey.DataStoreType.Sync);
          return dataStore.pull();
        }
      }
    ]
  });
