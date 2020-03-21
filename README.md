# next-store
> Storage for weapp based on next.

## installation
```bash
npm install -S @feizheng/next-store
```

## apis
| api    | params         | default | description                           |
| ------ | -------------- | ------- | ------------------------------------- |
| $      | (name, purify) | -       | Select local/session engine instance. |
| config | (options)      | -       | Select local/session engine instance. |


## usage
```js
import NxStore from '@feizheng/next-store';

// init with namespace(prefix)
const store = new NxStore({ prefix:'abc', purify: true });

// set
store.local = { name:'nx', github:'afeiship', items:['next','gem','nx']}

// get
const { name } = store.local;

// get/gets/set/sets/del/dels/clear
store.$('local').del('nx');
store.$('local', true).del('xxx');

store.config({ prefix:'myprefix'})
```

## site
- https://afeiship.github.io/next-store/
