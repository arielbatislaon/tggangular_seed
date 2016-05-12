(function() {
    'use strict';
    angular.module('tggapp')
 .controller(
		'loginController',['$scope','$state','JSONRESTService','loginService', loginController]);

    function loginController($scope, $state, JSONRESTService,loginService) {

	    var login = this
	    login.credential = {};
	    login.loginFailed = false;
	    login.appsLogin = appsLogin;

	    if(loginService.getSession().Session.alreadyLoggedIn==undefined) {
			login.alreadyLoggedIn =  false
		} else {
			login.alreadyLoggedIn = loginService.getSession().Session.alreadyLoggedIn
		}



	    function appsLogin (){
	    	 JSONRESTService.sendRequest(loginService.getSession().restURL+"/authenticate", "POST", JSON.stringify(login.credential), function(resp,
	    				status) {
	    					if (status == 200) {
	    						loginService.setToken(resp);
	    						login.loginFailed = false;
	    						loginService.setUserName(login.credential.userName);
								loginService.setAlreadyLoggedIn(true);
	    						$state.go('core');
	    					} else {
	    						loginService.setToken("");
	    						login.loginFailed = true;
	    					}
	    				}
	    		);
	    	 }

	    $scope.$on('loginStatusChanged', function(){
			login.loginFailed =  loginService.getLoginStatus();
		})




		if(loginService.getSession().Session.alreadyLoggedIn!=undefined && loginService.getSession().Session.alreadyLoggedIn && !loginService.getLoginStatus()){
			$state.go('core');
		}
}
}
)();
