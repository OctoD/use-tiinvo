use-tiinvo
==========

A collection of React hooks for primitives handling and data validation.

# 🎉 Features

* useBool: useful for on/off state management
* useNum: handles a numeric value
* useNullableNum: handles a nullable numeric value
* useOptionalNum: handles a possibly undefined numeric value
* useOption: handles an `Option<T>` value
* usePredicate: checks if a value satisfies the given predicate
* useResult: handles a `Result<T>` value
* useSafe: handles a type safe `<T>` value
* useStr: handles a string value
* useNullabelStr: handles a nullable string value
* useOptionalStr: handles a possibly undefined string value
* useValidate: accepts a `usePredicate` hook and an error message. Useful for data validation (form's fields)
* useValidateShape: similar to `useValidate`, but accepts a `Record` and validates it. Ideal for complex forms.
* useValue: handles a value `<T>`
* exports the complete version of [tiinvo](https://github.com/octod/tiinvo)

# ⚙ Install

```bash
# yarn
yarn add use-tiinvo

# npm
npm i use-tiinvo
```

# 📖 Docs

You can full detailed read docs [here](./docs/README.md).

# 🔍 Examples

## Toggling state

A button which shows/hide a modal

```tsx
import React, { FC } from 'react';
import { useBool } from 'use-tiinvo'

export interface MyComponentProps {
  
}

export const MyComponent: FC<MyComponentProps> = ({

}) => {
  const modalstate = useBool();
  
  return (
    <>
      <button onClick={modalstate.settrue}>Open modal</button>

      {
        modalstate.value &&
        <div className="MyModal">
          Hello from modal!
          <button onClick={modalstate.close}>
            Close
          </button>
        </div>
      }
    </>
  );
}
```

## Textfield

```tsx
import React, { FC, useEffect } from 'react';
import { fallback, pipe, useStr } from 'use-tiinvo';


export interface MyTextfieldProps {
  onChange?: (value: string) => any;
}

const mapvalue = (e: React.ChangeEvent<HTMLInputElement>) => e.target.value;

export const MyTextfield: FC<MyTextfieldProps> = ({
  onChange = fallback(``),
}) => {
  const field = useStr(`hello world`);

  useEffect(() => void onChange(field.value), [field.value]);
  
  return (
    <>
      <input onChange={pipe(mapvalue, field.set, onChange)} value={field.value} type="text" />
      Your value is: {field.value}
    </>
  );
}
```

## Data validation

```tsx
import * as React from 'react';
import { useValidateShape, usePredicate, useValidate, isnumber, isstring, pipe, predicate, num, str } from 'use-tiinvo';

const requiredstr = pipe(
   str.trim,
   str.length,
   num.greaterequalthan(2),
);

const useIsAdult = usePredicate(predicate.and(isnumber, num.greaterequalthan(18)));
const useIsValidName = usePredicate(predicate.and(isstring, requiredstr));

const shape = {
   age: useValidate(useIsAdult, `you must be adult to have your own bank account`),
   firstname: useValidate(useIsValidName, `First name is required`),
   lastname: useValidate(useIsValidName, `Last name is required`),
};

const mapeventvalue = (event: React.ChangeEvent<HTMLInputElement>) => event.target.value;

export const MySubscriptionForm = () => {
   const form = useValidateShape(shape);

   return (
     <section>
       <label>
         First name
         <input onChange={pipe(mapeventvalue, form.shape.firstname.set)} value={form.shape.firstname.value} type="text" />
         <small>{form.shape.firstname.message}</small>
       </label>
       <label>
         Last name
         <input onChange={pipe(mapeventvalue, form.shape.lastname.set)} value={form.shape.lastname.value} type="text" />
         <small>{form.shape.lastname.message}</small>
       </label>
       <label>
         Confirm your Age
         <input onChange={pipe(mapeventvalue, form.shape.age.set)} value={form.shape.age.value} type="number" />
         <small>{form.shape.age.message}</small>
       </label>
       <button disabled={!form.valid}>
         Subscribe
       </button>
     </section>
   );
}

```

# ️❤️ Contributing

Every contribution is really welcome!

If you feel that something can be improved or should be fixed, feel free to open an issue with the feature or the bug found.

If you want to fork and open a pull request (adding features or fixes), feel free to do it. Remember only to use the `dev` branch as a base.

Read the [contributing guidelines](./CONTRIBUTING.md)

# 📃 Licence

Read the [licence](./LICENCE)
