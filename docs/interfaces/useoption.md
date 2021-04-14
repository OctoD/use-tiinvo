[use-tiinvo - v1.0.2](../README.md) / UseOption

# Interface: UseOption<T\>

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*UseValueFns*](usevaluefns.md)<T \| *null* \| undefined\>

  ↳ **UseOption**

## Table of contents

### Properties

- [none](useoption.md#none)
- [reset](useoption.md#reset)
- [set](useoption.md#set)
- [some](useoption.md#some)
- [unsafe](useoption.md#unsafe)
- [value](useoption.md#value)

## Properties

### none

• **none**: *boolean*

True if the passed `Option<T>` is `None`, otherwise false.

**`since`** 1.0.0

Defined in: [use-option.ts:10](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-option.ts#L10)

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

Inherited from: [UseValueFns](usevaluefns.md).[reset](usevaluefns.md#reset)

Defined in: [use-value.ts:18](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-value.ts#L18)

___

### set

• **set**: *FnUnary*<undefined \| *null* \| T, void\>

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

### some

• **some**: *boolean*

True if the passed `Option<T>` is `Some`, otherwise false.

**`since`** 1.0.0

Defined in: [use-option.ts:15](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-option.ts#L15)

___

### unsafe

• **unsafe**: T

The unsafe value. Be aware that this value could be possibly `null` or `undefined`,
so check if is `some` before using it.

**`since`** 1.0.0

Defined in: [use-option.ts:21](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-option.ts#L21)

___

### value

• **value**: *Option*<T\>

Current value as `Option<T>`

**`since`** 1.0.0

Defined in: [use-option.ts:26](https://github.com/OctoD/use-primitives/blob/55281b1/src/use-option.ts#L26)
