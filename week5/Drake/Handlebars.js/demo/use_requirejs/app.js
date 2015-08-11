requirejs.config({
    "paths": {
      "jquery": "//libs.useso.com/js/jquery/2.1.1-rc2/jquery.min",
      "handlebars": "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.min",
      "text": "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text"
    }
});

require([
  'jquery',
  'handlebars',
  'text!template/coolBoy.html'
], function($, Handlebars, coolBoyTemplate) {
  var coolBoy = {
    name: 'Drake'
  };

  var coolBoyCompiledTemplate = Handlebars.compile(coolBoyTemplate);
  var coolBoyView = coolBoyCompiledTemplate(coolBoy);

  $(document.body).append(coolBoyView);
});
