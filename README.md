# Tree using recursion 

```js

import {Tree} from "./Tree.js";
import {items} from "./items.js";

const tree = new Tree(items);
const parentCondition = item => !item.parent_id;

tree.set_parents(parentCondition);

const treeRoot = tree.get_parents();

tree.build(treeRoot);

console.log(treeRoot);
```
