(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var NxLocalStorage = nx.LocalStorage || require('@feizheng/next-local-storage');
  var NxSessionStorage = nx.SessionStorage || require('@feizheng/next-session-storage');

  //engie list:
  var NxStore = nx.declare('nx.Store', {
    properties: {
      local: {
        get: function() {
          return this._localStorage.gets();
        },
        set: function(inValue) {
          this._localStorage.sets(inValue);
        }
      },
      session: {
        get: function() {
          return this._sessionStorage.gets();
        },
        set: function(inValue) {
          this._sessionStorage.sets(inValue);
        }
      }
    },
    methods: {
      init: function(inPrefix) {
        this._localStorage = new NxLocalStorage(inPrefix);
        this._sessionStorage = new NxSessionStorage(inPrefix);
      },
      $: function(inEngine) {
        return this['_' + inEngine + 'Storage'];
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxStore;
  }
})();
