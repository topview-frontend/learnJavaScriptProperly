define(function() {
  var $ = function(selector) {
    return document.querySelector(selector);
  };

  $.getJSON = function(url, callback) {
    var client = new XMLHttpRequest();

    client.onload = function() {
      if (client.status >= 200 && client.status <= 304) {
        callback(client.responseText);
      } else {
        console.log('Cant Get Data Via Ajax');
        callback(null);
      }
    };

    client.open('GET', url, true);
    client.send(null);
  };

  return $;
});
