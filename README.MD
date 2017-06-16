# next-store
> A Storage toolkit for mobile based on nextjs.



## install:
```bash
npm install afeiship/next-store --save
```


## configs:
+ use config API:
```javascript
import NxStore from 'next-store';
NxStore.attach('MY_PROJECT_PREFIX');
NxStore.local = {
  name:'afei',
  age:120
};


console.log(NxStore.local);


NxStore.engine = 'sessionStorage';
NxStore.set('mysession1','svl1');
console.log( NxStore.gets() );
```


## apis:
+ set/get/sets
```javascript
import NxStore from 'next-store';

NxStore.set('key1','value1');
NxStore.sets({
  'key2':224,
  'key3':{
    items:[
      {name:1234},
      {name:234}
    ]
  }
});



NxStore.get('key3');
NxStore.gets(['key1','key2','key3']);
NxStore.gets();
```

+ clear/clears
```javascript
NxStore.clear('key1');
NxStore.clears(['key1','key3']);
NxStore.clears();
```
