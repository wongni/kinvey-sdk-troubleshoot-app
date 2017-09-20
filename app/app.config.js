'use strict';

angular.
  module('kinveyTestApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/', {
          template: '<kinvey-test></kinvey-test>'
        }).
        otherwise('/');
    }
  ]).
  config(['$kinveyProvider', function ($kinveyProvider) {
    $kinveyProvider.init({
      appKey: '[App Key]', // FIXME
      appSecret: '[App Secret]', // FIXME
      apiHostname: 'https://se-baas.kinvey.com'
    });
  }]);
