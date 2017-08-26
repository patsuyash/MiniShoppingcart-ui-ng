'use strict';


angular.module('demoApp')
    .controller('HistoryCtrl', ['$scope', 'history', '$http', function ($scope, history, $http) {
        $scope.history1 = history;
    }]);