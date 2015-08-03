define([
  'util/Util',
  'controller/SignUpCtrl'
], function($, SignUpCtrl) {
  var SignUpView = {
    render: function() {
      var appView = $('.appView');
      var html = '';

      $.getJSON('/template/signUp.html', function(res) {
        res && (appView.innerHTML = res);
        SignUpCtrl.auth();
      });

    }
  };

  return SignUpView;
});
