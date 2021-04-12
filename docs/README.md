use-primitives

# use-primitives

## Table of contents

### Interfaces

- [UseOption](interfaces/useoption.md)
- [UsePredicate](interfaces/usepredicate.md)
- [UseResult](interfaces/useresult.md)
- [UseSafe](interfaces/usesafe.md)
- [UseValidate](interfaces/usevalidate.md)
- [UseValue](interfaces/usevalue.md)
- [UseValueFns](interfaces/usevaluefns.md)

### Type aliases

- [UsePredicateHook](README.md#usepredicatehook)
- [UseSafeHook](README.md#usesafehook)
- [UseValidateHook](README.md#usevalidatehook)

### Functions

- [useArray](README.md#usearray)
- [useArrayOf](README.md#usearrayof)
- [useBool](README.md#usebool)
- [useNullableNum](README.md#usenullablenum)
- [useNullableStr](README.md#usenullablestr)
- [useNum](README.md#usenum)
- [useOption](README.md#useoption)
- [useOptionalNum](README.md#useoptionalnum)
- [useOptionalStr](README.md#useoptionalstr)
- [usePredicate](README.md#usepredicate)
- [useResult](README.md#useresult)
- [useSafeFactory](README.md#usesafefactory)
- [useStr](README.md#usestr)
- [useValidate](README.md#usevalidate)
- [useValue](README.md#usevalue)

## Type aliases

### UsePredicateHook

Ƭ **UsePredicateHook**<T\>: *FnUnary*<T, [*UsePredicate*](interfaces/usepredicate.md)<T\>\>

#### Type parameters:

Name |
:------ |
`T` |

Defined in: src/use-predicate.ts:8

___

### UseSafeHook

Ƭ **UseSafeHook**<T\>: *FnUnary*<T, [*UseSafe*](interfaces/usesafe.md)<T\>\>

#### Type parameters:

Name |
:------ |
`T` |

Defined in: src/use-safe.ts:8

___

### UseValidateHook

Ƭ **UseValidateHook**<T, K\>: *FnUnary*<T, [*UseValidate*](interfaces/usevalidate.md)<T, K\>\>

#### Type parameters:

Name |
:------ |
`T` |
`K` |

Defined in: src/use-validate.ts:8

## Functions

### useArray

▸ `Const`**useArray**(`arg`: *unknown*[]): [*UseSafe*](interfaces/usesafe.md)<unknown[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *unknown*[] |

**Returns:** [*UseSafe*](interfaces/usesafe.md)<unknown[]\>

Defined in: src/use-array.ts:4

___

### useArrayOf

▸ `Const`**useArrayOf**<T\>(`typeguard`: *Typeguard*<T\>): [*UseSafeHook*](README.md#usesafehook)<T[]\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`typeguard` | *Typeguard*<T\> |

**Returns:** [*UseSafeHook*](README.md#usesafehook)<T[]\>

Defined in: src/use-array.ts:6

___

### useBool

▸ `Const`**useBool**(`initialvalue?`: *boolean*): *object*

Good for everything which have an on/off state.

**`since`** 1.0.0

**`example`** 
```tsx
import React from 'react';
import { useBool, fi } from 'use-primitives';

export const MyComponent = () => {
   const state = useBool();
   const label = fi(state.value, `on`, `off`);

   return (
       <button onClick={state.toggle}>
         Toggle is { label }
       </button>
   );
}
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`initialvalue` | *boolean* | false |

**Returns:** *object*

Name | Type |
:------ | :------ |
`setfalse` | () => *void* |
`settrue` | () => *void* |
`toggle` | () => *void* |
`value` | *boolean* |

Defined in: src/use-bool.ts:28

___

### useNullableNum

▸ `Const`**useNullableNum**(`arg`: *null* \| *number*): [*UseSafe*](interfaces/usesafe.md)<*null* \| number\>

Same as `useNum`, but it accepts also `null` values.

**`since`** 1.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *null* \| *number* |

**Returns:** [*UseSafe*](interfaces/usesafe.md)<*null* \| number\>

Defined in: src/use-num.ts:38

___

### useNullableStr

▸ `Const`**useNullableStr**(`arg`: *null* \| *string*): [*UseSafe*](interfaces/usesafe.md)<*null* \| string\>

Same as `useStr`, but it accepts also `null` values.

**`since`** 1.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *null* \| *string* |

**Returns:** [*UseSafe*](interfaces/usesafe.md)<*null* \| string\>

Defined in: src/use-str.ts:38

___

### useNum

▸ `Const`**useNum**(`arg`: *number*): [*UseSafe*](interfaces/usesafe.md)<number\>

Handles numeric values. Like useSafe, it has a built-in validation
state.

**`since`** 1.0.0

**`example`** 
```tsx
import * as React from 'react';
import { bind, useNum, fi } from 'use-primitives';

export const MyWhopsieCounter = () => {
   const counter = useNum(0);
   const increment = bind(counter.set, counter.value + 1);
   const decrement = bind(counter.set, counter.value - 1);
   const breakthis = bind(counter.set, `hello world` as any); // :-(
   const valid = bind(counter.valid, `valid`, `not valid`);

   return (
     <div>
       <button onClick={increment}>+</button>
       <button onClick={decrement}>-</button>
       <button onClick={breakthis}>break everything</button>
       Current value is {counter.value} and is {valid}
     </div>
   );
}
```

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *number* |

**Returns:** [*UseSafe*](interfaces/usesafe.md)<number\>

Defined in: src/use-num.ts:32

___

### useOption

▸ `Const`**useOption**<T\>(`opt`: *Option*<T\>): [*UseOption*](interfaces/useoption.md)<T\>

Accepts an `Option<T>`.

**`since`** 1.0.0

**`example`** 
```tsx
import * as React from 'react';
import { useOption, option } from 'use-primitives';

export interface MyComponentProps {
   value: option.Option<number>;
}

export const MyComponent: React.FC = (props) => {
   const optnumber = useOption(props.value);

   return (
     <div>
       you passed { optnumber.some ? optnumber.unsafe : `nothing` }
     </div>
   )
}

export const MyOtherComponent = () => {
   return (
     <>
       <MyComponent value={option.some(10)} />
       <MyComponent value={option.none()} />
     </>
   )
}
```

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`opt` | *Option*<T\> |

**Returns:** [*UseOption*](interfaces/useoption.md)<T\>

Defined in: src/use-option.ts:49

___

### useOptionalNum

▸ `Const`**useOptionalNum**(`arg`: *undefined* \| *number*): [*UseSafe*](interfaces/usesafe.md)<undefined \| number\>

Same as `useNum`, but it accepts also `undefined` values.

**`since`** 1.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *undefined* \| *number* |

**Returns:** [*UseSafe*](interfaces/usesafe.md)<undefined \| number\>

Defined in: src/use-num.ts:44

___

### useOptionalStr

▸ `Const`**useOptionalStr**(`arg`: *undefined* \| *string*): [*UseSafe*](interfaces/usesafe.md)<undefined \| string\>

Same as `useStr`, but it accepts also `null` values.

**`since`** 1.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *undefined* \| *string* |

**Returns:** [*UseSafe*](interfaces/usesafe.md)<undefined \| string\>

Defined in: src/use-str.ts:44

___

### usePredicate

▸ `Const`**usePredicate**<T\>(`predicate`: *Predicate*<T\>): [*UsePredicateHook*](README.md#usepredicatehook)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`predicate` | *Predicate*<T\> |

**Returns:** [*UsePredicateHook*](README.md#usepredicatehook)<T\>

Defined in: src/use-predicate.ts:10

___

### useResult

▸ `Const`**useResult**<T\>(`opt`: *Result*<T\>): [*UseResult*](interfaces/useresult.md)<T\>

Accepts a `Result<T>`.

**`since`** 2.0.0

**`example`** 
```tsx
import * as React from 'react';
import { bind, result, useResult, trycatchAsync } from 'use-primitives';

const fetchapiwillthrow = () => fetch(`pineapplepizza`).then(response => response.json());
const safefetch = bind(trycatchAsync, fetchapiwillthrow);

export const MyComponent = () => {
   const result = useResult(result.err(`no data`));

   React.useEffect(() => {
     if (result.err) {
       safefetch().then(result.set);
     }
   }, [result.err]);

   return (
     <>Api call result is: {result.err ? result.unsafe.message : result.unsafe}</>
   )
}
```

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`opt` | *Result*<T\> |

**Returns:** [*UseResult*](interfaces/useresult.md)<T\>

Defined in: src/use-result.ts:42

___

### useSafeFactory

▸ `Const`**useSafeFactory**<T\>(`typeguard`: *Typeguard*<T\>): [*UseSafeHook*](README.md#usesafehook)<T\>

Given a `Typeguard<T>` returns a SafeHook<T>.
This hook value will be `valid` if the typeguard is satisfied.

**`since`** 1.0.0

**`example`** 
```tsx
import * as React from 'react';
import { bind, fi, isnull, useSafeFactory, nullable, isstring } from 'use-primitives';

const mynullable = useSafeFactory(nullable(isstring));

export const MyComponent = () => {
   const message = mynullable(`hello world`);
   const breakthis = bind(message.set, null); // :-)
   const valid = fi(message.valid, `valid`, `not valid`);
   const value = fi(isnull(message.value), `nothing`, message.value);

   return (
     <label>
       <input onChange={pipe(mapvalue, message.set)} value={value} />
       Your greeting message is {valid} and says {value}
       <br />
       <button onClick={breakthis}>this won't break everything</button>
     </label>
}

```

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`typeguard` | *Typeguard*<T\> |

**Returns:** [*UseSafeHook*](README.md#usesafehook)<T\>

Defined in: src/use-safe.ts:42

___

### useStr

▸ `Const`**useStr**(`arg`: *string*): [*UseSafe*](interfaces/usesafe.md)<string\>

Handles string values. Like useSafe, it has a built-in validation
state.

**`since`** 1.0.0

**`example`** 
```tsx
import * as React from 'react';
import { bind, useStr, fi, pipe } from 'use-primitives';

const mapvalue = (event: React.ChangeEvent<HTMLInputElement>) => event.target.value;

export const MyWhopsieCounter = () => {
   const message = useStr(`hello world`);
   const breakthis = bind(message.set, 1000 as any); // :-(
   const valid = fi(message.valid, `valid`, `not valid`);

   return (
     <label>
       <input onChange={pipe(mapvalue, message.set)} value={message.value} />
       Your greeting message is {valid} and says {message.value}
       <br />
       <button onClick={breakthis}>break everything</button>
     </label>
   );
}
```

#### Parameters:

Name | Type |
:------ | :------ |
`arg` | *string* |

**Returns:** [*UseSafe*](interfaces/usesafe.md)<string\>

Defined in: src/use-str.ts:32

___

### useValidate

▸ `Const`**useValidate**<T, K\>(`hook`: [*UsePredicateHook*](README.md#usepredicatehook)<T\>, `errormessage`: K): [*UseValidateHook*](README.md#usevalidatehook)<T, K\>

#### Type parameters:

Name |
:------ |
`T` |
`K` |

#### Parameters:

Name | Type |
:------ | :------ |
`hook` | [*UsePredicateHook*](README.md#usepredicatehook)<T\> |
`errormessage` | K |

**Returns:** [*UseValidateHook*](README.md#usevalidatehook)<T, K\>

Defined in: src/use-validate.ts:10

___

### useValue

▸ `Const`**useValue**<T\>(`initialvalue`: T): [*UseValue*](interfaces/usevalue.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`initialvalue` | T |

**Returns:** [*UseValue*](interfaces/usevalue.md)<T\>

Defined in: src/use-value.ts:13
