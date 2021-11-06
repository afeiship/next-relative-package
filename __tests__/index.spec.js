(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.relativePackage', function () {
      expect(nx.relativePackage('name')).toBe('@jswork/next-relative-package');
    });

    test('nx.relativePackage to dotdir', function () {
      process.chdir('/Users/aric.zheng/.dotfiles');
      expect(nx.relativePackage('name')).toBe('dotfiles');
    });
  });
})();
