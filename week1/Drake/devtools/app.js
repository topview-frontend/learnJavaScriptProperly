function foo() {
  var loved = true;

  function bar() {
    var iWannaSay = 'fadsf';
    console.log(iWannaSay);
  }

  if (loved) {
    bar();
  } else {
    console.log('I hate you~');
  }
}

foo();
