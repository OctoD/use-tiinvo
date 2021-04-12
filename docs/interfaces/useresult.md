[use-primitives](../README.md) / UseResult

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

Defined in: src/use-result.ts:7

___

### ok

• **ok**: *boolean*

Defined in: src/use-result.ts:6

___

### reset

• **reset**: *FnNullary*<void\>

Inherited from: [UseValueFns](usevaluefns.md).[reset](usevaluefns.md#reset)

Defined in: src/use-value.ts:5

___

### set

• **set**: *FnUnary*<T \| Error, void\>

Inherited from: [UseValueFns](usevaluefns.md).[set](usevaluefns.md#set)

Defined in: src/use-value.ts:6

___

### unsafe

• **unsafe**: T

Defined in: src/use-result.ts:8

___

### value

• **value**: *Result*<T\>

Defined in: src/use-result.ts:9
