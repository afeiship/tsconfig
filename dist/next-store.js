(function () {
  'use strict'

  nx.declare('nx.Store', {
    statics: {
      engine: 'localStorage',
      config: function (inOptions) {
        nx.mix(Store, inOptions);
      },
      set: function (inKey, inValue) {
        global[Store.engine].setItem(inKey, nx.stringify(inValue));
      },
      get: function (inKey) {
        var value = global[Store.engine].getItem(inKey);
        return nx.parse(value);
      },
      sets: function (inObject) {
        nx.each(inObject, function (key, value) {
          Store.set(key, value);
        });
      },
      clear: function (inKey) {
        global[Store.engine].removeItem(inKey);
      },
      clearAll: function () {
        global[Store.engine].clear();
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.Store;
  }

}());
