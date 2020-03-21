/*!
 * name: @feizheng/next-store
 * description: Storage for weapp based on next.
 * url: https://github.com/afeiship/next-store
 * version: 3.1.0
 * date: 2020-03-21 10:12:07
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var NxLocalStorage = nx.LocalStorage || require('@feizheng/next-local-storage');
  var NxSessionStorage = nx.SessionStorage || require('@feizheng/next-session-storage');
  var DEFAULT_OPTIONS = { prefix: '', purify: false };

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
      init: function(inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        // prefix storage:
        this._localStorage = new NxLocalStorage(options.prefix);
        this._sessionStorage = new NxSessionStorage(options.prefix);
        // pureify storage:
        if (options.purify) {
          this.localStorage = new NxLocalStorage();
          this.sessionStorage = new NxSessionStorage();
        }
      },
      config: function(inOptions) {
        nx.mix(this._localStorage, inOptions);
        nx.mix(this._sessionStorage, inOptions);
      },
      $: function(inEngine, inIsPurify) {
        var prefix = inIsPurify ? '' : '_';
        return this[prefix + inEngine + 'Storage'];
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxStore;
  }
})();

//# sourceMappingURL=next-store.js.map
