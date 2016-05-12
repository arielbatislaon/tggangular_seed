(function() {
	'use strict';
	angular.module('tggapp')
			.controller(
					'coreController',
					[
							'$scope',
							'$http',
							'$state',
							'$log',
							'$filter',
							'loginService',
						coreController
                  ]);
							
	
				function coreController($scope, $http, $state, $log, $filter,
									loginService) {
									var appsMainCtrl = this
									coreCtrl.userName = loginService.getUserName();
									
							}		
								
							
})();