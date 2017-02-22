#next-store
> Store for mobile based on next toolkit.


## apis:
+ set/get/sets
```javascript
import nxStore from 'next-store';

nxStore.set('key1','value1');
nxStore.sets({
  'key2':224,
  'key3':{
    items:[
      {name:1234},
      {name:234}
    ]
  }
});



nxStore.get('key3');
nxStore.gets(['key1','key2','key3']);
```

+ clear/clearAll
```javascript
nxStore.clear('key1');
nxStore.clearAll();
```
