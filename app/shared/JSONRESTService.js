(function() {
    'use strict';
    angular.module('tggapp')
    .factory("JSONRESTService",['$http','$injector','$rootScope','$modal','$log','loginService',JSONRESTService]);
    
    
    function JSONRESTService($http, $injector, $rootScope,$modal,$log,loginService) {
    	var jsonRESTService = {
    			sendRequest : function(restServerURL, method, input, callback) {
    				var modalInstance = $modal.open({
    					templateUrl : 'shared/loading-view.html',
    					controller : 'appsLoadingMessageController as loadingMessageController',
    					windowClass: 'app-modal-window',
    					backdrop: 'static',
    					size : 'sm',
    					resolve : {
    						mainscope : function() {
    							return true;
    						}
    					}
    				});
    				modalInstance.result.then(function(){
    				         $log.info("function1 loading");
    				},
    				function(){
    					$log.info("function2 loading");
    				},
    				function(){
    					$log.info("function3 loading");
    				}
    						
    				);
    				
    				$http({
    					method : method,
    					url : restServerURL,
    					headers : {
    						'Content-Type' : 'application/json'
    					},
    					data : input
    				}).success(function(response, status) {
    					console.log("success http send");
    					modalInstance.dismiss('');
    					if(status!=200){
    						console.log("response<>200");
    			        	var state =  $injector.get('$state');
    			            state.go('login');
    			            } else {
    			            	$rootScope.$broadcast("alreadyLoggedIn");
    			            	console.log("response=200 calling callback");
    					       callback(response, status);
    			            }
    				}).error(function(response, status) {
    					console.log("error http send");
    					modalInstance.dismiss('');
    					if(status!=200){
    						loginService.setLoginStatus(true);
    			        	var state =  $injector.get('$state');
    			            state.go('login');
    			            } else {
    					callback(response, status);
    			            }
    				});
    			}
    			
    	};
	return jsonRESTService;
}

}());
