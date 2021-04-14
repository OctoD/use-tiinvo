[use-tiinvo - v1.0.2](../README.md) / UseValue

# Interface: UseValue<T\>

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*UseValueFns*](usevaluefns.md)<T\>

  ↳ **UseValue**

  ↳↳ [*UsePredicate*](usepredicate.md)

  ↳↳ [*UseSafe*](usesafe.md)

## Table of contents

### Properties

- [reset](usevalue.md#reset)
- [set](usevalue.md#set)
- [value](usevalue.md#value)

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

Inherited from: [UseValueFns](usevaluefns.md).[reset](usevaluefns.md#reset)

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

Inherited from: [UseValueFns](usevaluefns.md).[set](usevaluefns.md#set)

Defined in: [use-value.ts:30](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-value.ts#L30)

___

### value

• **value**: T

The value.

Defined in: [use-value.ts:37](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-value.ts#L37)
