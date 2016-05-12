'use strict';


describe('Unit Testing Controller: mainController', function () {

  beforeEach(module('tggapp'));


  var mainCtrl,
    scope,
    loginservice,
    state;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $controller, loginService,  $state) {
    scope=$rootScope.$new();
    loginservice            = loginService;
    state                   = $state;


    mainCtrl = $controller('mainController', {
      $scope: scope,
      loginService            : loginService
    });
  }));

  describe('mainController Testing ', function () {
    
    it('should have called mainCtrl.surelogout during Logout ', function () {
      var defered;
      spyOn(mainCtrl, 'surelogout');
      mainCtrl.appsLogout();
      expect(mainCtrl.surelogout).toHaveBeenCalled();
    });

    it('should have called $state.go(login) during mainCtrl.surelogout ', function () {
      spyOn(state, 'go');
      mainCtrl.surelogout();
      expect(state.go).toHaveBeenCalledWith('login');
    });


  });


  describe('mainController calling loginService service ', function () {
    it('should get an instance of loginService', function () {
      expect(loginservice).toBeDefined();
    });

    it('should have called loginService.setToken when calling surelogout', function () {
      spyOn(loginservice, 'setToken');
      mainCtrl.surelogout();
      expect(loginservice.setToken).toHaveBeenCalledWith('');
    });

    it('should have set alreadyLoggedIn to false when calling surelogout', function () {
      mainCtrl.appsLogout();
      expect(mainCtrl.alreadyLoggedIn).toBeFalsy();
    });

    it('should have called loginService.setAlreadyLoggedIn with argument of false when calling surelogout', function () {
      spyOn(loginservice, 'setAlreadyLoggedIn');
      mainCtrl.surelogout();
      expect(loginservice.setAlreadyLoggedIn).toHaveBeenCalledWith(false);
    });


  });

  describe('mainController when broadcast(alreadyLoggedIn) is invoked ', function () {

    it('should have called loginService.getUserName)', function () {
      spyOn(loginservice, 'getUserName');
      scope.$broadcast('alreadyLoggedIn');
      expect(mainCtrl.alreadyLoggedIn).toBeTruthy();
      expect(loginservice.getUserName).toHaveBeenCalledWith();
    });

  });

});
