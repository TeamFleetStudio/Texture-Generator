## FleetStudio Simple Vector Pattern Generator Library

You just need to pass some string as input to get a SVG pattern code. 

Example: 1

```ts
import { FSPattern } from '@fleetstudio/pattern-lib';

const p = new FSPattern("Saif Sulaiman")
console.log(p.toDataUri());
console.log(p.toString());
```

Example: 2
```ts
import { FSPattern } from '@fleetstudio/pattern-lib';

const p = new FSPattern("Saif Sulaiman 123", {
    backgroundColor: '#FFF',
    strokeColors: [
        "#D00", "#0D0", "#00D"
    ]
})
console.log(p.toDataUri());
console.log(p.toString());
```

### For the package develop we used the parcel-library-starter repo

https://github.com/ihaback/parcel-library-starter

https://volta.sh/

