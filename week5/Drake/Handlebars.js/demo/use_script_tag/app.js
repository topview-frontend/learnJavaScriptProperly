window.addEventListener('load', function(event) {
  var data = {
    name: 'Drake'
  };

  var theTemplateScript = document.querySelector('script#quiz').innerHTML;

  var theTemplate = Handlebars.compile(theTemplateScript);

  document.querySelector('main').innerHTML = theTemplate(data);
}, false);
