define([
  'util/Util'
], function($) {
  var AuthCtrl = {
    getUsername: function() {
      return $('input#username').value;
    },
    getPassword: function() {
      return $('input#password').value;
    },
    getSubmitBtn: function() {
      return $('.submitBtn');
    },

    accepted: function(msg) {
      this.showDialog('Success! ' + msg);
    },

    rejected: function(err) {
      this.showDialog('Failure! ' + err);
    },

    showDialog: function(msg) {
      alert(msg);
    }
  };
  return AuthCtrl;
});
