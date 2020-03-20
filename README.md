# next-store
> Storage for weapp based on next.

## installation
```bash
npm install -S @feizheng/next-store
```

## apis
| api    | params     | description                     | description |
| ------ | ---------- | ------------------------------- | ----------- |
| engine | engineName | local/session engine string.    | -           |
| config | namespace  | The application only namespace. | ''          |

## usage
```js
import NxStore from '@feizheng/next-store';

// code goes here:
NxStore.config('myapp');
NxStore.local = { key1: 'data1', a:{ b:'tes1'} };
NxStore.session = { key1: 'data1' };

// get/gets
const key1 = nx.get(NxStore.local, 'key1');
const key2 = nx.get(NxStore.local, 'a.b');

// or you can use es6 rest/spread params:
const { key1 } = NxStore.session;
```
