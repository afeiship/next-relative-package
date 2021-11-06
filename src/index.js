(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var path = require('path');

  nx.relativePackage = function (inPath) {
    var appPath = process.cwd();
    var pkg = require(path.join(appPath, 'package.json'));
    return inPath ? nx.get(pkg, inPath) : pkg;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.relativePackage;
  }
})();
