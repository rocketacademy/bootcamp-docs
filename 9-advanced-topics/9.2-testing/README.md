# 9.2: Testing



```javascript
git clone https://github.com/rocketacademy/base-node-swe1.git mocha
```

```javascript
cd mocha
```

```javascript
npm install mocha chai
```

```javascript
mkdir test
```

```javascript
touch calculator.js
```

index.js

```javascript
import calculator from './calculator.js';
import { add } from './calculator.js';

console.log(add(2,3));
```

calculator.js

```javascript
export default function add(a,b){
    return a + b;
}
```

test/calculator.js

```javascript
import { expect } from 'chai';

import { add } from '../calculator.js';


describe("Calculator", function() {
  describe("Basic Operations", function() {
    it("Adds two numbers", function() {
      const result = add(2,2);
      expect(result).to.equal(4);
    });
  });
});
```

