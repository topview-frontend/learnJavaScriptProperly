define([
  'model/User',
  'dao/UserDao',
  'controller/AuthCtrl'
], function(User, UserDao, AuthCtrl) {
  var SignUpCtrl = Object.create(AuthCtrl);

  SignUpCtrl.validateEntry = function(username, password) {
    if (!username && !password) {
      this.rejected('username or password cant be empty');
      return false;
    }
    return true;
  };

  SignUpCtrl.auth = function() {
    var self = this,
      submitBtn = self.getSubmitBtn();

    submitBtn.addEventListener('click', function(event) {
      var username = self.getUsername(),
        password = self.getPassword();

      if (self.validateEntry(username, password)) {
        var result = self.server({
          username: username,
          password: password
        });

        if (result) self.accepted('sign up done');
        else self.rejected('sign up failed');
      }
    }, false);
  };

  SignUpCtrl.server = function(data) {
    try {
      UserDao.add(data);
      return true;
    } catch (err) {
      return false;
    }
  };

  return SignUpCtrl;
});
