(function () {

  var global = global || this;
  var nx = global.nx || require('next-js-core2');

  //engie list:
  var ENGIE_LOCAL = 'localStorage';
  var ENGIE_SESSION = 'sessionStorage';

  var Store = nx.declare('nx.Store', {
    properties:{
      local:{
        get:function(){
          this.engine = ENGIE_LOCAL;
          return this.gets();
        },
        set: function(inValue){
          this.engine = ENGIE_LOCAL;
          this.sets(inValue);
        }
      },
      session:{
        get:function(){
          this.engine = ENGIE_SESSION;
          return this.gets();
        },
        set: function(inValue){
          this.engine = ENGIE_SESSION;
          this.sets(inValue);
        }
      }
    },
    statics: {
      engine: ENGIE_LOCAL,
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
