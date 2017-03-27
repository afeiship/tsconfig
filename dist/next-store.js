;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['nx'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('next-js-core2'));
  } else {
    root.nx.Store = factory(root.nx);
  }
}(this, function(nx) {
(function () {

  global = global || this;

  var nx = global.nx || require('next-js-core2');
  var Store = nx.declare('nx.Store', {
    statics: {
      engine: 'localStorage',
      prefix: '',
      config: function (inOptions) {
        nx.mix(Store, inOptions);
      },
      set: function (inKey, inValue) {
        global[Store.engine].setItem(Store.__key(inKey), nx.stringify(inValue));
      },
      get: function (inKey) {
        var value = global[Store.engine].getItem(Store.__key(inKey));
        return nx.parse(value);
      },
      sets: function (inObject) {
        nx.each(inObject, function (key, value) {
          Store.set(key, value);
        });
      },
      gets: function(inKeys){
        var result={};
        var keys = inKeys || [];
        var i = 0, key;
        if(keys.length == 0){
          for (i = 0; i < localStorage.length; i++)   {
            key = localStorage.key(i);
            keys.push(key);
            result[key] = localStorage.getItem(key);
          }
        }else{
          nx.each(inKeys,function(i,key){
            result[key]=Store.get(key);
          });
        }
        return result;
      },
      clear: function (inKey) {
        global[Store.engine].removeItem(inKey);
      },
      clearAll: function () {
        global[Store.engine].clear();
      },
      __key:function (inKey){
        var prefix = Store.prefix;
        return prefix ? [prefix,'.',inKey].join('') : inKey;
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Store;
  }

}());

return Store;
}));
