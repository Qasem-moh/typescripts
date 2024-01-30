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