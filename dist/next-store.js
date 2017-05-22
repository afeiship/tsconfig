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
        var storeEngine = global[Store.engine];
        if(keys.length == 0){
          for (i = 0; i < storeEngine.length; i++)   {
            key = storeEngine.key(i);
            keys.push(key);
          }
        }

        nx.each(keys,function(i,key){
          result[key]=Store.get(key);
        });
        return result;
      },
      clear: function (inKey) {
        global[Store.engine].removeItem(inKey);
      },
      clearAll: function (inArray) {
        if(Array.isArray(inArray)){
          inArray.forEach(function(item){
            Store.clear(item);
          })
        }else{
          global[Store.engine].clear();
        }
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
