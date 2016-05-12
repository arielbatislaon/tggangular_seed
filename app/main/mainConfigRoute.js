(function() {
    'use strict';
    angular.module('tggapp')
        .config(['$stateProvider', '$urlRouterProvider',tggappConfig]);


    function tggappConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('login', {
                url: '/home',
                templateUrl: '../components/login/login-view.html',
                controller: 'loginController as loginCtrl'
            })
            // nested list with custom controller
            .state('core', {
                url: '/core',
                templateUrl: '../components/core/core-view.html',
                controller:'coreController as coreCtrl'
            });


    }
})();