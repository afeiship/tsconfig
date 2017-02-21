var nx = require('next-js-core2')
var global = nx.GLOBAL;
var Store = nx.declare('nx.Store', {
  statics: {
    engine: 'localStorage',
    config:function(inOptions){
        nx.mix(Store,inOptions);
    },
    set: function (inKey, inValue) {
        global[Store.engine].setItem(inKey,nx.stringify(inValue));
    },
    get: function (inKey) {
        var value = global[Store.engine].getItem(inKey);
        return nx.parse(value);
    },
    clear: function (inKey) {
        global[Store.engine].removeItem(inKey);
    },
    clearAll: function () {
        global[Store.engine].clear();
    }
  }
});

module.exports=Store;