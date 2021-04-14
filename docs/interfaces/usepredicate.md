[use-tiinvo - v1.0.2](../README.md) / UsePredicate

# Interface: UsePredicate<T\>

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*UseValue*](usevalue.md)<T\>

  ↳ **UsePredicate**

  ↳↳ [*UseValidate*](usevalidate.md)

## Table of contents

### Properties

- [reset](usepredicate.md#reset)
- [set](usepredicate.md#set)
- [valid](usepredicate.md#valid)
- [value](usepredicate.md#value)

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

Inherited from: [UseValue](usevalue.md).[set](usevalue.md#set)

Defined in: [use-value.ts:30](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-value.ts#L30)

___

### valid

• **valid**: *boolean*

True if the predicate is satisfied, otherwise false.

**`since`** 1.0.0

Defined in: [use-predicate.ts:9](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-predicate.ts#L9)

___

### value

• **value**: T

The value.

Inherited from: [UseValue](usevalue.md).[value](usevalue.md#value)

Defined in: [use-value.ts:37](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-value.ts#L37)
