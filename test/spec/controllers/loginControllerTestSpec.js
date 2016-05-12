'use strict';


describe('Unit Testing Controller: loginController', function () {

  beforeEach(module('tggapp'));


  var loginCtrl,
    scope,
    jsonRESTService,
    loginservice,
    q,
    state;




  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope,  $state, JSONRESTService,  loginService, $controller,$q) {
    scope=$rootScope.$new();
    jsonRESTService = JSONRESTService;
    loginservice            = loginService;
    state                   = $state;
    q                       = $q;



    loginCtrl = $controller('loginController', {
      $scope: scope,
      JSONRESTService : JSONRESTService,
      loginService            : loginService
    });
  }));

  describe('loginController calling JSONRESTService service ', function () {
    it('should get an instance of JSONRESTService', function () {
      expect(jsonRESTService).toBeDefined();
    });


    it('should have called ActionNavigationService.sendRequest during Login', function () {

      spyOn(jsonRESTService, 'sendRequest').and.callFake(
        function(parm1,parm2,parm3,callback) {
          callback('token',200);
        }
      );
      loginCtrl.appsLogin();
      expect(jsonRESTService.sendRequest).toHaveBeenCalled();
    });
  });
  describe('loginController calling JSONRESTService service during Login and when ActionNavigationService.sendRequest returns status 200 ', function () {
    it('should have called LoginService.setToken with valid token ', function () {
      spyOn(loginservice, 'setToken');
      spyOn(jsonRESTService, 'sendRequest').and.callFake(
        function(parm1,parm2,parm3,callback) {
         callback('token',200);
      }
      );
      loginCtrl.appsLogin();
      expect(loginservice.setToken).toHaveBeenCalledWith('token');

    });

    it('should have set login.appsLoginFailed = false ', function () {
      spyOn(jsonRESTService, 'sendRequest').and.callFake(function(parm1,parm2,parm3,callback) {
          callback('token',200);
        }
      );
      loginCtrl.appsLogin();
      expect(loginCtrl.appsLoginFailed).toBeFalsy();
    });

    it('should have called LoginService.setUserName with valid username', function () {
      spyOn(loginservice, 'setUserName');
      spyOn(jsonRESTService, 'sendRequest').and.callFake(
        function(parm1,parm2,parm3,callback) {
          callback('token',200);
        }
      );
      loginCtrl.credential.userName = 'arielb';
      loginCtrl.appsLogin();
      expect(loginservice.setUserName).toHaveBeenCalledWith('arielb');

    });


    it('should have called $state.go(exception-management) ', function () {
      spyOn(state, 'go');
      spyOn(jsonRESTService, 'sendRequest').and.callFake(
        function(parm1,parm2,parm3,callback) {
          callback('token',200);
        }
      );
      loginCtrl.appsLogin();
      expect(state.go).toHaveBeenCalledWith('core');
    });
    });


  describe('loginController calling JSONRESTService service during Login and when ActionNavigationService.sendRequest returns status is not 200 ', function () {
    it('should have called LoginService.setToken  ', function () {
      spyOn(loginservice, 'setToken');
      spyOn(jsonRESTService, 'sendRequest').and.callFake(
        function(parm1,parm2,parm3,callback) {
          callback('error',404);
        }
      );
      loginCtrl.appsLogin();
      expect(loginservice.setToken).toHaveBeenCalledWith('');

    });

    it('should have set login.loginFailed = true ', function () {
      spyOn(jsonRESTService, 'sendRequest').and.callFake(function(parm1,parm2,parm3,callback) {
          callback('error',404);
        }
      );
      loginCtrl.appsLogin();
      expect(loginCtrl.loginFailed).toBeTruthy();
    });

  });



  });



