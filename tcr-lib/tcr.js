var watch = require('node-watch');

watch('./', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);
});