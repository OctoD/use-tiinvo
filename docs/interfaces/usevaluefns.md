[use-tiinvo - v1.0.2](../README.md) / UseValueFns

# Interface: UseValueFns<T\>

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* **UseValueFns**

  ↳ [*UseOption*](useoption.md)

  ↳ [*UseResult*](useresult.md)

  ↳ [*UseValue*](usevalue.md)

## Table of contents

### Properties

- [reset](usevaluefns.md#reset)
- [set](usevaluefns.md#set)

## Properties

### reset

• **reset**: *FnNullary*<void\>

Resets the value to it's initial state.

**`since`** 1.0.0

**`example`** 
```ts
const foo = useValue(10);
foo.set(20);
console.log(foo.value) // 20
foo.reset();
console.log(foo.value) // 10
```

Defined in: [use-value.ts:18](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-value.ts#L18)

___

### set

• **set**: *FnUnary*<T, void\>

Sets the value.

**`since`** 1.0.0

**`example`** 
```ts
const foo = useValue(10);
foo.set(20);
console.log(foo.value); // 20
```

Defined in: [use-value.ts:30](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-value.ts#L30)
