var jQuery = require('jquery');
var updateRouteModule = angular.module('updateRouteModule', []);

updateRouteModule.controller('updateRouteController', ['$scope', '$location',
    function($scope, $location) {        
        $scope.jump = function(url){
            $location.path(url);
        }
    }
]);
