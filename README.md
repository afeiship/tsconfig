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

const store = new NxStore('nxapp');

// set
store.local = { name:'nx', github:'afeiship', items:['next','gem','nx']}

// get
const { name } = store.local;

// del
store.$('local').del('nx');
```
