(function() {
    'use strict';
    angular.module('tggapp')
 .controller(
		'appsLoadingMessageController',['$scope','$modalInstance','$timeout',appsLoadingMessageController]);
    
    function appsLoadingMessageController($scope,$modalInstance, $timeout) {
			    var loadingMessage = this ;
			    loadingMessage.cancel = cancel;
			    
			    $timeout(function () {
                    $(".modal-content").draggable();
                }, 0);
   			 
   		
   			    $scope.$on('closeloading',function() {
   				 loadingMessage.cancel();
   				});
			    
			    function cancel() {
				    				$modalInstance.dismiss('cancel');
				    			};
				    			
				    			
				    			 

    }

}());
