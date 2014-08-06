'use strict';

/**
 * @ngdoc function
 * @name romApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the romApp
 */
angular.module('romApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
