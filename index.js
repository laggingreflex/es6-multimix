const mixMethods = require('es6-class-mixin');
const mixClasses = require('es6-classes-mixin');

function multimix() {
  const args = [].slice.apply(null, arguments);
  return args.reduce((final, current) => {
    if (typeof current === 'function') {
      return mixClasses(final, current);
    } else {
      return mixMethods(final, current);
    }
  }, function MultiMixed() {})
}

module.exports = multimix;
