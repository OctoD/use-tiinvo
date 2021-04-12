[use-primitives](../README.md) / UseOption

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

Defined in: src/use-option.ts:6

___

### reset

• **reset**: *FnNullary*<void\>

Inherited from: [UseValueFns](usevaluefns.md).[reset](usevaluefns.md#reset)

Defined in: src/use-value.ts:5

___

### set

• **set**: *FnUnary*<undefined \| *null* \| T, void\>

Inherited from: [UseValueFns](usevaluefns.md).[set](usevaluefns.md#set)

Defined in: src/use-value.ts:6

___

### some

• **some**: *boolean*

Defined in: src/use-option.ts:7

___

### unsafe

• **unsafe**: T

Defined in: src/use-option.ts:8

___

### value

• **value**: *Option*<T\>

Defined in: src/use-option.ts:9
