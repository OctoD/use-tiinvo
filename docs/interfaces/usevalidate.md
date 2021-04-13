[use-primitives - v1.0.0](../README.md) / UseValidate

# Interface: UseValidate<T, K\>

## Type parameters

Name |
:------ |
`T` |
`K` |

## Hierarchy

* [*UsePredicate*](usepredicate.md)<T\>

  ↳ **UseValidate**

## Table of contents

### Properties

- [message](usevalidate.md#message)
- [reset](usevalidate.md#reset)
- [set](usevalidate.md#set)
- [valid](usevalidate.md#valid)
- [value](usevalidate.md#value)

## Properties

### message

• `Optional` **message**: K

The error message `K`. It is `K` if invalid, otherwise is `undefined`.

**`since`** 1.0.0

Defined in: [use-validate.ts:10](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-validate.ts#L10)

___

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

Inherited from: [UsePredicate](usepredicate.md).[reset](usepredicate.md#reset)

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

Inherited from: [UsePredicate](usepredicate.md).[set](usepredicate.md#set)

Defined in: [use-value.ts:30](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-value.ts#L30)

___

### valid

• **valid**: *boolean*

True if the predicate is satisfied, otherwise false.

**`since`** 1.0.0

Inherited from: [UsePredicate](usepredicate.md).[valid](usepredicate.md#valid)

Defined in: [use-predicate.ts:9](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-predicate.ts#L9)

___

### value

• **value**: T

The value.

Inherited from: [UsePredicate](usepredicate.md).[value](usepredicate.md#value)

Defined in: [use-value.ts:37](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-value.ts#L37)
