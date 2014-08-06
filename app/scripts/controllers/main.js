'use strict';

/**
 * @ngdoc function
 * @name romApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the romApp
 */
angular.module('romApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
