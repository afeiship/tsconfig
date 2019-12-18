(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxStore = require('../src/next-store');

  describe('NxStore.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
