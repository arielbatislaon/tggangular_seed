describe('TGG Angular Seed End to End Test', function() {

  beforeEach(function() {
      browser.get('http://localhost:9000');
    });

  it('should open the logon screen', function() {
    browser.get('http://localhost:9000');
	  var userName = element(by.model('loginCtrl.credential.userName'));
	  var userPassword = element(by.model('loginCtrl.credential.password'));
      expect(userName).toBeDefined();
	  expect(userPassword).toBeDefined();
    });
	  
	 it('should return error when login using invalid userid', function() {
	 element(by.model('loginCtrl.credential.userName')).sendKeys('userxxx');
	 element(by.model('loginCtrl.credential.password')).sendKeys('passwordxxx');
	 var loginButton = element(by.id('loginbtn'));
	 loginButton.click();
    });
	
  

});
