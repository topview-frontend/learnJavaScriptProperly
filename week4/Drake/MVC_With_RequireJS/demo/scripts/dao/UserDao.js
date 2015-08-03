define([
  'model/User'
], function() {
  var UserDao = {
    add: function(user) {
      var users = this.getAll() || [];

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    },

    getAll: function() {
      return JSON.parse(localStorage.getItem('users'));
    }
  };

  return UserDao;
});
