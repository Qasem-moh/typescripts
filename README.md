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
*********************************************************************
## Data Types - Type Assertions
In TypeScript, type assertions are a way to tell the compiler that you know more about the type of a value than it does. It is a mechanism to override the default inference or static typing of the TypeScript compiler. Type assertions do not perform any runtime checking or validation; they are simply a way to inform the compiler about the expected type.

There are two syntaxes for type assertions in TypeScript:

1. **Angle Bracket Syntax:**
   ```typescript
   let value: any = "Hello, TypeScript!";
   let length: number = (value as string).length;

   // Alternatively
   // let length: number = (<string>value).length;
   ```

2. **As Keyword Syntax:**
   ```typescript
   let value: any = "Hello, TypeScript!";
   let length: number = (value as string).length;

   // Alternatively
   // let length: number = (value as string).length;
   ```

In these examples, `value` is of type `any`, and we use a type assertion to tell TypeScript that we are treating `value` as a `string`. This allows us to access properties or methods specific to the `string` type, such as `length`.

It's important to note that type assertions should be used with caution, as they essentially tell the TypeScript compiler to trust your judgment. If the actual type of the value at runtime is not as expected, you might encounter runtime errors.

Type assertions are commonly used when:

- Migrating from JavaScript to TypeScript, and the type information is not fully available.
- Working with values that have a broader type (`any`) and you want to narrow down the type for a specific operation.

It's recommended to use other features of TypeScript, such as proper type annotations and interfaces, whenever possible, as they provide stronger guarantees and better maintainability. Type assertions should be used sparingly and only when necessary.
**************************************************
## Data Types - Union And Intersection Type
In TypeScript, union types and intersection types are powerful features that allow you to create more flexible and expressive type definitions.

### Union Types:

A union type allows a variable to have multiple types. It is represented using the `|` (pipe) symbol.

```typescript
// Union type
let result: string | number;

result = "success";
console.log(result.length); // Valid, as 'result' is of type 'string'

result = 42;
console.log(result.toFixed(2)); // Valid, as 'result' is of type 'number'
```

In this example, `result` can be either a `string` or a `number`.

### Intersection Types:

An intersection type combines multiple types into a single type. It is represented using the `&` (ampersand) symbol.

```typescript
// Intersection type
type Employee = {
  name: string;
  role: string;
};

type ID = {
  id: number;
};

type EmployeeWithID = Employee & ID;

let employee: EmployeeWithID = {
  name: "John Doe",
  role: "Developer",
  id: 123,
};
```

In this example, `EmployeeWithID` is an intersection type that combines the properties of `Employee` and `ID`. The resulting type `EmployeeWithID` must have both `name`, `role`, and `id` properties.

### Using Union and Intersection Together:

You can also use union and intersection types together to create complex type definitions.

```typescript
type Result = { success: true } | { error: string };
let outcome: Result;

outcome = { success: true };
console.log(outcome.success); // Valid

outcome = { error: "Something went wrong" };
console.log(outcome.error); // Valid
```

In this example, `Result` is a union type that can represent either a success or an error. Each alternative in the union has different properties.

Union and intersection types provide a powerful way to model a wide range of scenarios and create flexible and precise type definitions in TypeScript.
********************************************************
## Type Annotations With Object

In TypeScript, you can use type annotations to explicitly specify the shape of an object, including the types of its properties. Here's an example:

```typescript
// Type annotation for an object
let user: {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
};

// Usage
user = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  isAdmin: false,
};
```

In this example, the `user` object is annotated with a type that defines four properties: `id` (number), `username` (string), `email` (string), and `isAdmin` (boolean). This provides static type checking, and TypeScript will raise an error if you try to assign an object with a different structure.

You can also use type aliases to create reusable type annotations:

```typescript
// Type alias for a user object
type User = {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
};

// Usage
let newUser: User = {
  id: 2,
  username: "jane_smith",
  email: "jane@example.com",
  isAdmin: true,
};
```

Type annotations with objects become especially valuable when dealing with complex structures or when defining interfaces for APIs. They help catch errors early in the development process and improve code maintainability.
********************************************************
## Interface Method And Parameters
In TypeScript, interfaces can also define methods and their parameters. Here's an example:

```typescript
// Interface declaration with a method
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

// Implementation of the interface
let basicCalculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

// Usage
let sum = basicCalculator.add(5, 3);       // Result: 8
let difference = basicCalculator.subtract(8, 3);  // Result: 5
```

In this example, the `Calculator` interface declares two methods: `add` and `subtract`. Each method specifies the parameter types and the return type. The `basicCalculator` object is then declared to implement the `Calculator` interface by providing implementations for both methods.

Interfaces with methods are especially useful when you want to enforce a specific structure for objects that represent classes or components. They help define contracts for how different parts of your code should interact.

You can also extend interfaces to create more specialized interfaces:

```typescript
interface AdvancedCalculator extends Calculator {
  multiply(a: number, b: number): number;
}

let advancedCalculator: AdvancedCalculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
};
```

In this example, `AdvancedCalculator` extends the `Calculator` interface and adds a new method `multiply`. The `advancedCalculator` object implements both the `Calculator` and `AdvancedCalculator` interfaces.

Using interfaces for method signatures helps in documenting and enforcing the expected structure of objects and functions in your TypeScript code.
***********************************************************

## Interface Reopen And Use Cases
In TypeScript, it is possible to extend or reopen an interface, allowing you to add new properties or methods to an existing interface. This is particularly useful when you want to augment the functionality of an existing interface without modifying its original declaration. Here's an example:

```typescript
// Original interface
interface Shape {
  color: string;
}

// Reopened interface
interface Shape {
  area(): number;
}

// Implementation
const square: Shape = {
  color: 'red',
  area: () => 16,
};
```

In this example, the `Shape` interface is initially declared with a `color` property. Later, the same `Shape` interface is reopened, and a new `area` method is added. This allows you to use the updated `Shape` interface with the `area` method without modifying the original declaration.

### Use Cases for Reopening Interfaces:

1. **Extending Functionality:**
   - Reopening interfaces is useful when you want to extend the functionality of existing interfaces without modifying their original definitions.
   - This is particularly handy when working with third-party libraries or when you want to add new methods to an existing contract.

   ```typescript
   // Original interface from a library
   interface LibraryInterface {
     method1(): void;
   }

   // Reopened interface with additional method
   interface LibraryInterface {
     method2(): string;
   }
   ```

2. **Declarations in Multiple Files:**
   - When your TypeScript code is spread across multiple files, reopening interfaces allows you to add new properties or methods in a different file without consolidating all declarations into a single file.

   ```typescript
   // File1.ts
   interface Config {
     apiKey: string;
   }

   // File2.ts
   interface Config {
     logLevel: 'info' | 'error';
   }
   ```

   Both `Config` declarations will be merged, and TypeScript treats them as a single interface with `apiKey` and `logLevel`.

3. **Augmenting External Libraries:**
   - When working with external libraries, you can reopen interfaces to add new properties or methods specific to your application without modifying the library's original declarations.

   ```typescript
   // External library declaration
   declare module 'external-library' {
     interface ExternalInterface {
       method(): void;
     }
   }

   // Augmented declaration in your code
   declare module 'external-library' {
     interface ExternalInterface {
       newMethod(): string;
     }
   }
   ```

Reopening interfaces in TypeScript provides a way to extend and modify type definitions, making your code more flexible and accommodating evolving requirements.
**********************************************************
## Class Get And Set Accessors
In TypeScript, you can use `get` and `set` accessors to control the access and modification of class properties. These accessors allow you to define custom behavior when getting or setting the value of a property. Here's an example:

```typescript
class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  // Getter accessor
  get radius(): number {
    return this._radius;
  }

  // Setter accessor
  set radius(newRadius: number) {
    if (newRadius >= 0) {
      this._radius = newRadius;
    } else {
      console.log('Radius cannot be negative.');
    }
  }

  // Method to calculate area
  calculateArea(): number {
    return Math.PI * this._radius ** 2;
  }
}

// Usage
let myCircle = new Circle(5);
console.log(myCircle.radius); // Access the radius through the getter
console.log(myCircle.calculateArea()); // Outputs: 78.53981633974483

// Modify the radius through the setter
myCircle.radius = 8;
console.log(myCircle.radius); // Outputs: 8

// Try to set a negative radius (the setter will handle it)
myCircle.radius = -2; // Outputs: Radius cannot be negative.
console.log(myCircle.radius); // Outputs: 8 (unchanged)
```

In this example:

- The `Circle` class has a private property `_radius`, and the public property `radius` is exposed using a getter and a setter.
- The `get` accessor allows you to retrieve the value of `_radius` as if it were a public property.
- The `set` accessor allows you to control the logic when setting the value of `radius`. In this case, it ensures that the radius cannot be negative.
- The `calculateArea` method calculates the area of the circle based on the current radius.

Using `get` and `set` accessors provides a way to encapsulate the internal state of a class while allowing controlled access and modification. It also allows you to add validation or additional logic when getting or setting property values.
***********************************************************
## Class Static Members
In TypeScript, static members of a class are properties or methods that belong to the class itself rather than instances of the class. They are accessed using the class name rather than an instance of the class. Here's an example:

```typescript
class MathOperations {
  // Static property
  static pi: number = 3.14159;

  // Static method
  static multiply(x: number, y: number): number {
    return x * y;
  }

  // Static method using the static property
  static calculateCircleArea(radius: number): number {
    return this.pi * radius ** 2;
  }
}

// Accessing static property
console.log(MathOperations.pi); // Outputs: 3.14159

// Calling static method
let result = MathOperations.multiply(5, 3);
console.log(result); // Outputs: 15

// Calling another static method using the static property
let area = MathOperations.calculateCircleArea(4);
console.log(area); // Outputs: 50.26544
```

In this example:

- The `pi` property and the `multiply` method are declared as static members of the `MathOperations` class.
- Static members are accessed using the class name (`MathOperations.pi`, `MathOperations.multiply()`).
- The `calculateCircleArea` method uses the static property `pi` to calculate the area of a circle.

Static members are useful for functionality that is related to the class as a whole rather than individual instances. They can be accessed without creating an instance of the class, making them convenient for utility methods or constants associated with the class.

Keep in mind that static members cannot access instance-specific members (properties or methods) directly. If you need to work with instance-specific data, use instance members. If the functionality is not tied to a specific instance, consider using static members for better organization and encapsulation.
***************************************************************
## Class Implements Interface
In TypeScript, a class can implement an interface. This means that the class agrees to provide implementations for all the members (properties and methods) declared in the interface. Here's an example:

```typescript
// Interface declaration
interface Shape {
  area(): number;
  color: string;
}

// Class implementing the interface
class Circle implements Shape {
  // Properties from the interface
  color: string;
  private _radius: number;

  // Constructor
  constructor(color: string, radius: number) {
    this.color = color;
    this._radius = radius;
  }

  // Method from the interface
  area(): number {
    return Math.PI * this._radius ** 2;
  }
}

// Usage
let myCircle: Shape = new Circle('red', 5);
console.log(myCircle.color); // Access the property from the interface
console.log(myCircle.area()); // Access the method from the interface
```

In this example:

- The `Shape` interface declares a method `area` and a property `color`.
- The `Circle` class implements the `Shape` interface by providing implementations for the `area` method and the `color` property.
- The `Circle` class has its own private property `_radius` and a constructor that initializes the properties.

When a class implements an interface, it must provide concrete implementations for all the members declared in the interface. This ensures that instances of the class adhere to the contract specified by the interface.

Interfaces are useful for defining contracts that can be implemented by multiple classes, allowing for better code organization, reusability, and maintenance.
*****************************************************************
## Abstract Classes And Members
In TypeScript, abstract classes and abstract members provide a way to define blueprints for other classes. An abstract class cannot be instantiated directly, and it may contain abstract methods that must be implemented by any concrete (non-abstract) subclass. Here's an example:

```typescript
// Abstract class
abstract class Shape {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  // Abstract method
  abstract area(): number;

  // Concrete method
  display(): void {
    console.log(`This is a ${this.color} shape.`);
  }
}

// Concrete subclass
class Circle extends Shape {
  private _radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this._radius = radius;
  }

  // Implementation of the abstract method
  area(): number {
    return Math.PI * this._radius ** 2;
  }
}

// Usage
let myCircle: Shape = new Circle('red', 5);
console.log(myCircle.area()); // Access the method from the abstract class
myCircle.display(); // Access the concrete method from the abstract class
```

In this example:

- The `Shape` abstract class has a property `color`, a constructor, an abstract method `area`, and a concrete method `display`.
- The `Circle` class extends the `Shape` abstract class and provides an implementation for the abstract method `area`.
- The `myCircle` instance is declared as the abstract type `Shape`, and it is instantiated with the concrete class `Circle`.

Key points:

- Abstract classes are marked with the `abstract` keyword.
- Abstract methods are declared using the `abstract` keyword in the abstract class and must be implemented by any concrete subclass.
- Abstract classes cannot be instantiated directly; they serve as blueprints for concrete classes.
- Concrete classes that extend an abstract class must provide implementations for all abstract methods.

Abstract classes are useful when you want to define a common structure for a group of related classes while allowing some flexibility for specific implementations. They help enforce a consistent interface across different subclasses.
******************************************************************
## Polymorphism And Method Override
In object-oriented programming, polymorphism is the ability of objects of different types to be treated as objects of a common type. Method overriding is a key mechanism that enables polymorphism. In TypeScript, you can achieve method overriding by declaring a method in a subclass with the same signature as a method in its superclass. Here's an example:

```typescript
// Base class
class Animal {
  speak(): void {
    console.log('Animal makes a sound');
  }
}

// Subclass with method override
class Dog extends Animal {
  speak(): void {
    console.log('Dog barks');
  }
}

// Subclass with method override
class Cat extends Animal {
  speak(): void {
    console.log('Cat meows');
  }
}

// Function that takes an Animal and calls its speak method
function makeAnimalSpeak(animal: Animal): void {
  animal.speak();
}

// Usage
const myDog: Dog = new Dog();
const myCat: Cat = new Cat();

makeAnimalSpeak(myDog); // Outputs: Dog barks
makeAnimalSpeak(myCat); // Outputs: Cat meows
```

In this example:

- The `Animal` class has a method `speak`.
- The `Dog` and `Cat` classes extend the `Animal` class and override the `speak` method with their own implementations.
- The `makeAnimalSpeak` function takes an `Animal` as a parameter and calls its `speak` method.

Key points:

- The `speak` method in the `Animal` class serves as a common interface for all subclasses.
- The `speak` method is overridden in both the `Dog` and `Cat` subclasses, providing specific implementations for each type of animal.
- When `makeAnimalSpeak` is called with instances of `Dog` and `Cat`, the overridden `speak` method of the respective subclass is invoked based on the actual type of the object.

This is an example of runtime polymorphism, where the behavior is determined at runtime based on the actual type of the object. TypeScript supports polymorphism through method overriding, making it a powerful feature for building flexible and extensible object-oriented code.
*********************************************************************************
## Generics Introduction
Generics in TypeScript provide a way to create flexible and reusable components that can work with various data types. They allow you to write functions, classes, and interfaces that can work with any data type while preserving type safety.

### Basic Example:

Here's a simple example of a generic function:

```typescript
// Generic function that echoes the input
function echo<T>(value: T): T {
  return value;
}

// Usage
let result: string = echo("Hello, generics!");
let numberResult: number = echo(42);
```

In this example:

- The `echo` function is generic, denoted by the `<T>` syntax.
- The function takes a parameter of type `T` and returns a value of the same type.
- The function can be called with different types (`string` and `number` in this case), and TypeScript infers and maintains the correct types.

### Using Generics with Arrays:

Generics are often used with arrays to create reusable components:

```typescript
// Generic function to reverse an array
function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

// Usage
let numbers: number[] = [1, 2, 3, 4, 5];
let reversedNumbers: number[] = reverseArray(numbers);

let words: string[] = ["apple", "banana", "cherry"];
let reversedWords: string[] = reverseArray(words);
```

### Using Generics with Classes:

Generics can also be used with classes to create flexible data structures:

```typescript
// Generic class for a simple stack
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

// Usage
let numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // Outputs: 2

let stringStack = new Stack<string>();
stringStack.push("apple");
stringStack.push("banana");
console.log(stringStack.pop()); // Outputs: banana
```

In this example, the `Stack` class is defined as a generic class that can be instantiated with different types (`number` and `string`).

Generics provide a powerful way to write reusable and type-safe code that works with various data types. They are widely used in libraries and frameworks to create flexible and generic components.
*********************************************************
## Generics Multiple Types
In TypeScript, you can use generics with multiple types by specifying multiple type parameters. This allows you to create functions, classes, or interfaces that work with more than one type. Here's an example:

### Generic Function with Multiple Types:

```typescript
// Generic function with multiple types
function displayPair<T, U>(first: T, second: U): void {
  console.log(`Pair: ${first}, ${second}`);
}

// Usage
displayPair("apple", 42); // Outputs: Pair: apple, 42
displayPair(3.14, true);   // Outputs: Pair: 3.14, true
```

In this example, the `displayPair` function is generic and takes two parameters of different types (`T` and `U`). The types are specified when calling the function, allowing it to work with various combinations of types.

### Generic Class with Multiple Types:

```typescript
// Generic class with multiple types
class Pair<T, U> {
  constructor(public first: T, public second: U) {}
}

// Usage
let stringNumberPair: Pair<string, number> = new Pair("apple", 42);
console.log(stringNumberPair.first);  // Outputs: apple
console.log(stringNumberPair.second); // Outputs: 42

let booleanStringPair: Pair<boolean, string> = new Pair(true, "orange");
console.log(booleanStringPair.first);  // Outputs: true
console.log(booleanStringPair.second); // Outputs: orange
```

In this example, the `Pair` class is generic and takes two type parameters (`T` and `U`). The types are specified when creating instances of the class.

### Generic Interface with Multiple Types:

```typescript
// Generic interface with multiple types
interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

// Usage
let numberStringPair: KeyValuePair<number, string> = { key: 42, value: "banana" };
console.log(numberStringPair.key);   // Outputs: 42
console.log(numberStringPair.value); // Outputs: banana

let booleanBooleanPair: KeyValuePair<boolean, boolean> = { key: true, value: false };
console.log(booleanBooleanPair.key);   // Outputs: true
console.log(booleanBooleanPair.value); // Outputs: false
```

In this example, the `KeyValuePair` interface is generic and has two type parameters (`T` and `U`). Instances of the interface can be created with specific types for the key and value.

Using generics with multiple types allows you to create flexible and reusable components that can work with a variety of data types while maintaining type safety.
***************************************************************
## Generics Classes
Generics in TypeScript can be applied to classes, allowing you to create reusable classes that work with different types. Here's an example of a generic class:

```typescript
// Generic class
class Box<T> {
  private contents: T;

  constructor(initialContents: T) {
    this.contents = initialContents;
  }

  getContents(): T {
    return this.contents;
  }

  setContents(newContents: T): void {
    this.contents = newContents;
  }
}

// Usage
let stringBox: Box<string> = new Box("Hello, generics!");
console.log(stringBox.getContents()); // Outputs: Hello, generics!

let numberBox: Box<number> = new Box(42);
console.log(numberBox.getContents()); // Outputs: 42

// Attempting to assign a different type will result in a compile-time error
// let errorBox: Box<boolean> = new Box(true); // Error: Type 'boolean' is not assignable to type 'string'.
```

In this example:

- The `Box` class is declared with a generic type parameter `T`.
- The `contents` property, which represents the content of the box, is of type `T`.
- The constructor and methods (`getContents` and `setContents`) work with the generic type `T`.

When creating instances of the `Box` class, you specify the type you want to use with the generic class by providing the type argument (`<string>`, `<number>`, etc.).

Generics in classes provide flexibility and type safety by allowing you to use the same class blueprint for different data types. The type information is maintained throughout the usage of the class, ensuring that operations on the contents are type-correct.
*********************************************
## Generics And Interfaces
Generics can be used with interfaces in TypeScript to create flexible and reusable components that work with various data types. Here's an example of using generics with interfaces:

```typescript
// Generic interface
interface Box<T> {
  contents: T;
  getContents(): T;
  setContents(newContents: T): void;
}

// Implementation for a string-based box
class StringBox implements Box<string> {
  private contents: string;

  constructor(initialContents: string) {
    this.contents = initialContents;
  }

  getContents(): string {
    return this.contents;
  }

  setContents(newContents: string): void {
    this.contents = newContents;
  }
}

// Implementation for a number-based box
class NumberBox implements Box<number> {
  private contents: number;

  constructor(initialContents: number) {
    this.contents = initialContents;
  }

  getContents(): number {
    return this.contents;
  }

  setContents(newContents: number): void {
    this.contents = newContents;
  }
}

// Usage
let stringBox: Box<string> = new StringBox("Hello, generics!");
console.log(stringBox.getContents()); // Outputs: Hello, generics!

let numberBox: Box<number> = new NumberBox(42);
console.log(numberBox.getContents()); // Outputs: 42

// Attempting to assign a different type will result in a compile-time error
// let errorBox: Box<boolean> = new StringBox(true); // Error: Type 'boolean' is not assignable to type 'string'.
```

In this example:

- The `Box` interface is declared with a generic type parameter `T`.
- The interface defines properties and methods that work with the generic type `T`.
- The `StringBox` and `NumberBox` classes implement the `Box` interface with specific type arguments (`string` and `number`).

Using generics with interfaces allows you to create a blueprint for a component that can work with various data types while maintaining type safety. It provides a level of abstraction that allows you to define a common structure for different implementations. This is especially useful when designing reusable and flexible components in your TypeScript projects.
*************************************************************************************
