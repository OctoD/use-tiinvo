[use-primitives - v1.0.0](../README.md) / UseResult

# Interface: UseResult<T\>

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*UseValueFns*](usevaluefns.md)<T \| Error\>

  ↳ **UseResult**

## Table of contents

### Properties

- [err](useresult.md#err)
- [ok](useresult.md#ok)
- [reset](useresult.md#reset)
- [set](useresult.md#set)
- [unsafe](useresult.md#unsafe)
- [value](useresult.md#value)

## Properties

### err

• **err**: *boolean*

True if `Result<T>` is `Err`, otherwise false.

**`since`** 1.0.0

Defined in: [use-result.ts:15](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-result.ts#L15)

___

### ok

• **ok**: *boolean*

True if `Result<T>` is `Ok<T>`, otherwise false.

**`since`** 1.0.0

Defined in: [use-result.ts:10](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-result.ts#L10)

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

Defined in: [use-value.ts:18](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-value.ts#L18)

___

### set

• **set**: *FnUnary*<T \| Error, void\>

Sets the value.

**`since`** 1.0.0

**`example`** 
```ts
const foo = useValue(10);
foo.set(20);
console.log(foo.value); // 20
```

Inherited from: [UseValueFns](usevaluefns.md).[set](usevaluefns.md#set)

Defined in: [use-value.ts:30](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-value.ts#L30)

___

### unsafe

• **unsafe**: T

The unsafe value. It could be both `T` or `Error`, so check if `ok` before using it.

**`since`** 1.0.0

Defined in: [use-result.ts:20](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-result.ts#L20)

___

### value

• **value**: *Result*<T\>

The value as `Result<T>`

**`since`** 1.0.0

Defined in: [use-result.ts:25](https://github.com/OctoD/use-primitives/blob/7b5eac0/src/use-result.ts#L25)
