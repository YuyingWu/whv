require('angular');
require('angular-route');

//qrcode demo
require('app/controller/quick-entrance');
require('app/controller/update-route');

var whvApp = angular.module('wuyuying', [
    'ngRoute', 'quickEntranceModule', 'updateRouteModule']);

if(window.location.hostname == '127.0.0.1'){
    var tplUrl = '';
}else{
    var tplUrl = 'http://www.wuyuying.com/whv/';
}

whvApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/personal-details', {
        templateUrl: tplUrl + 'modules/app/view/form/personal-details.html',
        controller: 'updateRouteController'
    }).when('/personal-identification', {
        templateUrl: tplUrl + 'modules/app/view/form/personal-identification.html',
        controller: 'updateRouteController'
    }).when('/character', {
        templateUrl: tplUrl + 'modules/app/view/form/character.html',
        controller: 'updateRouteController'
    }).when('/health', {
        templateUrl: tplUrl + 'modules/app/view/form/health.html',
        controller: 'updateRouteController'
    }).when('/personal-occupation', {
        templateUrl: tplUrl + 'modules/app/view/form/personal-occupation.html',
        controller: 'updateRouteController'
    }).when('/specification', {
        templateUrl: tplUrl + 'modules/app/view/form/specification.html',
        controller: 'updateRouteController'
    }).when('/submit-checkbox', {
        templateUrl: tplUrl + 'modules/app/view/form/checkbox.html'/*,
        controller: 'QrcodeController'*/
    }).when('/quick-entrance', {
        templateUrl: tplUrl + 'modules/app/view/quick-entrance.html',
        controller: 'QuickEntranceController'
    }).when('/apply-form', {
        templateUrl: tplUrl + 'modules/app/view/apply-form.html'/*,
        controller: 'QuickEntranceController'*/
    }).otherwise({
        redirectTo: '/personal-details'
    })
}]);
