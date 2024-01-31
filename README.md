# typescripts

*Hello every one, today is <b>Tuesday</b> 1-30-2024, I'm started learning TypeScript*
<br/>
<div>
<h4>
TypeScript is JavaScripts with Syntax for types. 
</h4>
</div>

![](https://th.bing.com/th/id/R.3eb85a74fb6b710feb8074edab9355ec?rik=j3rKAzLJu6aoCQ&pid=ImgRaw&r=0)
<br/>


do you like Typescript
😊😊😊😊😊😊😊😊😊😊

### install type script global in your laptop 'npm i -g typescript '
### crete first file with extension .ts
### compile ts to js _tsc name file .ts_

<br/>
In TypeScript, you can define optional and default parameters in a function. Here's how you can do it:

1. **Optional Parameters:**
   You can make a function parameter optional by adding a question mark `?` after its name.

   ```typescript
   function greet(name: string, age?: number): string {
     if (age) {
       return `Hello, ${name}! You are ${age} years old.`;
     } else {
       return `Hello, ${name}!`;
     }
   }

   console.log(greet("John")); // Outputs: Hello, John!
   console.log(greet("Jane", 25)); // Outputs: Hello, Jane! You are 25 years old.
   ```

   In the example above, the `age` parameter is optional, and you can call the `greet` function with or without providing the `age` argument.

2. **Default Parameters:**
   You can set default values for parameters by using the assignment operator (`=`).

   ```typescript
   function greetWithDefault(name: string, age: number = 30): string {
     return `Hello, ${name}! You are ${age} years old.`;
   }

   console.log(greetWithDefault("Alice")); // Outputs: Hello, Alice! You are 30 years old.
   console.log(greetWithDefault("Bob", 28)); // Outputs: Hello, Bob! You are 28 years old.
   ```

   In this example, the `age` parameter has a default value of `30`. If you don't provide a value for `age` when calling the function, it will default to `30`.

By using optional and default parameters, you can make your functions more flexible and accommodate different use cases without sacrificing type safety.


*********************************
## Function Rest Parameter
In TypeScript, you can use a rest parameter to represent an indefinite number of parameters as an array. This allows you to work with a variable number of arguments in a function. The rest parameter is denoted by an ellipsis (`...`) followed by the parameter name.

Here's an example of a function with a rest parameter:

```typescript
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // Outputs: 15

const result2 = sumNumbers(10, 20, 30);
console.log(result2); // Outputs: 60
```

In the `sumNumbers` function, the `...numbers` syntax allows you to pass any number of arguments, and TypeScript will treat them as an array of numbers. The function then uses the `reduce` method to sum up all the numbers.

You can also combine rest parameters with other parameters:

```typescript
function greet(message: string, ...names: string[]): string {
  const joinedNames = names.join(', ');
  return `${message} ${joinedNames}!`;
}

const greeting1 = greet("Hello", "Alice", "Bob", "Charlie");
console.log(greeting1); // Outputs: Hello Alice, Bob, Charlie!

const greeting2 = greet("Hi");
console.log(greeting2); // Outputs: Hi !
```

In the `greet` function, the `message` parameter is followed by the rest parameter `...names`. This allows you to provide a message followed by an arbitrary number of names.

Rest parameters provide flexibility and allow you to work with functions that can handle different numbers of arguments without explicitly specifying all the parameters.
***********************************
## Type Annotations With Anonymous And Arrow Function
In TypeScript, you can use type annotations with anonymous and arrow functions to explicitly specify the types of parameters and the return value. Here are examples of both cases:

1. **Anonymous Function:**
   ```typescript
   let add: (x: number, y: number) => number = function (x, y) {
     return x + y;
   };

   // Usage
   let result = add(10, 20);
   console.log(result); // Outputs: 30
   ```

   In this example, `add` is a variable with a function type annotation `(x: number, y: number) => number`. This indicates that it's a function taking two parameters of type `number` and returning a value of type `number`. The function assigned to `add` adheres to this type annotation.

2. **Arrow Function:**
   ```typescript
   let multiply: (a: number, b: number) => number = (a, b) => {
     return a * b;
   };

   // Usage
   let product = multiply(5, 6);
   console.log(product); // Outputs: 30
   ```

   Similar to the anonymous function, here `multiply` is a variable with a function type annotation. The arrow function `(a, b) => a * b` assigned to `multiply` adheres to the type annotation.

Type annotations provide clarity to your code and enhance the TypeScript compiler's ability to catch potential type-related errors during development.

Note: In some cases, TypeScript can infer the types automatically, and explicit type annotations may not be necessary. However, providing explicit type annotations is often considered good practice for better code documentation and maintainability.
******************************************************
## Data Types - Type Alias
In TypeScript, a type alias is a way to create a custom name for a type. It allows you to define complex types or to give a descriptive name to existing types, making your code more readable and maintainable.

Here's how you can create a type alias:

```typescript
// Type alias for a string or number
type ID = string | number;

// Type alias for a user object
type User = {
  id: ID;
  username: string;
  email: string;
};

// Type alias for a function that accepts two numbers and returns a number
type MathOperation = (a: number, b: number) => number;

// Usage of the type aliases
let userId: ID = 123;
let user: User = { id: userId, username: "john_doe", email: "john@example.com" };

let add: MathOperation = (a, b) => a + b;
let result = add(10, 20);
console.log(result); // Outputs: 30
```

In this example:

- The `ID` type alias is defined as either a `string` or a `number`.
- The `User` type alias is defined as an object with specific properties (`id`, `username`, and `email`).
- The `MathOperation` type alias represents a function that takes two numbers and returns a number.

Type aliases can be especially useful when dealing with complex types, union types, or when you want to give a more descriptive name to a type. They enhance the readability of your code and make it easier for others (and yourself) to understand the intended use of certain types.
*********************
## Data Types - Tuple
In TypeScript, a tuple is a data type that represents an ordered collection of elements, each with a specific type. Tuples allow you to express an array where the order and types of the elements are fixed.

Here's an example of a tuple:

```typescript
// Declare a tuple type
let person: [string, number, boolean];

// Initialize a tuple
person = ['John', 30, true];

// Access elements by index
let name: string = person[0];
let age: number = person[1];
let isAdult: boolean = person[2];

console.log(name);    // Outputs: John
console.log(age);     // Outputs: 30
console.log(isAdult); // Outputs: true
```

In this example:

- The `person` tuple is declared with a type annotation `[string, number, boolean]`, indicating that it should have three elements of types `string`, `number`, and `boolean`, respectively.
- The tuple is then initialized with specific values, and each element can be accessed by its index.
- The variables `name`, `age`, and `isAdult` are assigned the values from the tuple, and their types are inferred accordingly.

Tuples are useful when you want to represent a fixed-size collection of elements with different types in a specific order. They provide a level of type safety and can be particularly handy when working with functions that return multiple values.

Starting from TypeScript 3.1, you can also use the `readonly` modifier to create immutable tuples:

```typescript
let readonlyTuple: readonly [string, number] = ['Alice', 25];
// readonlyTuple[0] = 'Bob'; // Error: Index signature in type 'readonly [string, number]' prohibits assignment to '0'.
```

The `readonly` modifier prevents any modification of the tuple elements after initialization.
**************************************
## Data Types - Void And Never
In TypeScript, `void` and `never` are two distinct data types with different use cases.

1. **Void:**
   - The `void` type represents the absence of any type. It is commonly used as the return type of functions that do not return any value.
   - Variables of type `void` can only be assigned `undefined` or `null`.
   - Functions with a `void` return type are expected to complete execution without returning a value.

   ```typescript
   function logMessage(message: string): void {
     console.log(message);
   }

   let result: void = undefined; // valid
   // let error: void = 10; // Error: Type '10' is not assignable to type 'void'.
   ```

2. **Never:**
   - The `never` type represents values that never occur. It is often used as the return type of functions that never return (e.g., functions that throw exceptions or have infinite loops).
   - It is also used as the inferred return type for functions that always throw exceptions or for functions that contain unconditional loops.

   ```typescript
   function throwError(message: string): never {
     throw new Error(message);
   }

   function infiniteLoop(): never {
     while (true) {
       // Infinite loop
     }
   }
   ```

   The `never` type is a subtype of every type, which means that you can use `never` where a value is expected to never occur.

   ```typescript
   let unreachable: never;
   // unreachable = 10; // Error: Type '10' is not assignable to type 'never'.
   ```

In summary:
- Use `void` for functions that do not return a value.
- Use `never` for functions that never return or for values that never occur.

***********************

## Data Types - Enums
In TypeScript, an enum (short for enumeration) is a way to give more friendly names to a set of numeric values. Enums allow you to define a set of named constants representing discrete values. Here's an example:

```typescript
// Numeric Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let playerDirection: Direction = Direction.Up;

if (playerDirection === Direction.Up) {
  console.log("Player is moving upward.");
}

// String Enum
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}

let selectedColor: Color = Color.Red;

if (selectedColor === Color.Red) {
  console.log("The selected color is red.");
}
```

In this example:

- The `Direction` enum assigns numeric values by default, starting from `0`. If you don't specify values, TypeScript assigns incremental numeric values.
- The `Color` enum assigns string values explicitly. String enums are useful when you want to have more control over the values and provide more meaningful names.

Enums can also be used with both numeric and string values simultaneously:

```typescript
enum Result {
  Success = 0,
  Failure = 'FAILURE',
}

let operationResult: Result = Result.Success;
```

Enums are helpful when you have a set of related constants, providing a way to make the code more readable and maintainable. They help prevent the use of arbitrary numeric or string values, reducing the chances of errors in your code. Additionally, enums in TypeScript can be used in reverse mapping, where you can get the name of an enum member from its value.

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let directionName: string = Direction[0]; // Gets the name "Up" based on the numeric value
console.log(directionName); // Outputs: Up
```

Enums in TypeScript offer a convenient way to work with a predefined set of values and improve the clarity of your code.