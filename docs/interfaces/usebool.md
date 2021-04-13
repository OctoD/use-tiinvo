[use-primitives - v1.0.0](../README.md) / UseBool

# Interface: UseBool

## Table of contents

### Properties

- [setfalse](usebool.md#setfalse)
- [settrue](usebool.md#settrue)
- [toggle](usebool.md#toggle)
- [value](usebool.md#value)

## Properties

### setfalse

• **setfalse**: *FnNullary*<void\>

Sets the value to false

Defined in: [use-bool.ts:8](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-bool.ts#L8)

___

### settrue

• **settrue**: *FnNullary*<void\>

Sets the value to true

Defined in: [use-bool.ts:12](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-bool.ts#L12)

___

### toggle

• **toggle**: *FnNullary*<void\>

Toggles the value. Ideal for checkboxes and switch components.

**`since`** 1.0.0

**`example`** 
```tsx

import React from 'react';
import { useBool, fi } from 'use-primitives';

export const MyComponent = () => {
   const accepts = useBool(true);
   const label = fi(accepts.value, `On`, `Off`);

   return (
     <label onClick={accepts.toggle}>
       <input value={accepts.value} type="checkbox" />
       {label}
     </label>
   )
}
```

Defined in: [use-bool.ts:36](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-bool.ts#L36)

___

### value

• **value**: *boolean*

The value.

Defined in: [use-bool.ts:40](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-bool.ts#L40)
