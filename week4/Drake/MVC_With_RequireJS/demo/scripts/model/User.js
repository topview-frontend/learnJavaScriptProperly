define(function() {
  var User = {
    get: function(attr) {
      return this[attr];
    }, // get()

    set: function(key, val) {
      // Handle 'key: value' or { key: value}
      var attrs = {};
      if (typeof key == 'object') {
        attrs = key;
      } else {
        attrs[key] = val;
      }

      // We choose override all the attributes
      for (var keyyy in attrs) {
        this[keyyy] = attrs[keyyy];
      }
    } // set()
  };

  var extend = function(key, val) {
    var parent = this;
    var child = Object.create(parent);

    // Handle 'key: value' or { key: value}
    var attrs = {};
    if (typeof key == 'object') {
      attrs = key;
    } else {
      attrs[key] = val;
    }

    for (var keyyy in attrs) {
      child[keyyy] = attrs[keyyy];
    }

    return child;
  };

  User.extend = extend;

  return User;
});
