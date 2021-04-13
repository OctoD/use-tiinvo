[use-primitives - v1.0.0](../README.md) / UseSafe

# Interface: UseSafe<T\>

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*UseValue*](usevalue.md)<T\>

  ↳ **UseSafe**

## Table of contents

### Properties

- [reset](usesafe.md#reset)
- [set](usesafe.md#set)
- [valid](usesafe.md#valid)
- [value](usesafe.md#value)

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

Inherited from: [UseValue](usevalue.md).[reset](usevalue.md#reset)

Defined in: [use-value.ts:18](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-value.ts#L18)

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

Inherited from: [UseValue](usevalue.md).[set](usevalue.md#set)

Defined in: [use-value.ts:30](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-value.ts#L30)

___

### valid

• **valid**: *boolean*

True if the `Typeguard<T>` check has passed, otherwise `false`.

**`since`** 1.0.0

Defined in: [use-safe.ts:10](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-safe.ts#L10)

___

### value

• **value**: T

The value.

Inherited from: [UseValue](usevalue.md).[value](usevalue.md#value)

Defined in: [use-value.ts:37](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-value.ts#L37)
