 (function() {
    'use strict';
    angular.module('tggapp')
    .controller(
		'mainController',['$scope','$state', 'loginService', mainController]);

		function mainController($scope, $state, loginService) {

			var mainctrl = this;
			mainctrl.submit = submit;
			mainctrl.appsLogout = logout;
			mainctrl.surelogout  = surelogout;
			$scope.$on('alreadyLoggedIn', function(){
				  mainctrl.alreadyLoggedIn =  true;
				  mainctrl.userName = loginService.getUserName();
 			  });


			function submit(){
				alert("submitted");
			}

			function logout(){
				var promise ;
				var ans = 'no';
				mainctrl.surelogout();
			}

			function surelogout(){
				loginService.setToken("");
				mainctrl.alreadyLoggedIn =  false;
				loginService.setAlreadyLoggedIn(false);
				$state.go('login');
				
			}

			

}

})();

