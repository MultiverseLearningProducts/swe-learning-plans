![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# TypeScript

TypeScript is a superset of JavaScript (i.e. it understands all of JavaScript's syntax and capabilities) that adds optional static typing, classes, interfaces, and other features to help developers write more maintainable and scalable code. It was developed by Microsoft and first released in 2012.

The goal of TypeScript is to provide a better tool for large-scale web applications, particularly those built by teams of developers. By adding type annotations and other features, TypeScript can catch errors earlier in the development process, make code easier to read and understand, and improve the overall quality of code.

Since its release, TypeScript has gained popularity among developers and has been adopted by many large companies, including Airbnb, Asana, Slack, and others. It has also been integrated into popular front-end frameworks such as Angular and React, as well as back-end frameworks such as NestJS.

In this learning plan, we'll cover the basics of TypeScript, including its features and benefits, as well as how to use it to write clean, maintainable code. By the end of this plan, you'll have a solid understanding of TypeScript and be able to use it to build your own web applications.

## Learning Plan Tasks
1. [Introduction to Typescript](#1-introduction-to-typescript)
2. [Functions and Interfaces](#2-functions-and-interfaces)
3. [Classes and Inheritance](#3-classes-and-inheritance)
4. [Modules and Namespaces](#4-modules-and-namespaces)
5. [Generics and Advanced Types](#5-generics-and-advanced-types)
6. [Build Something Using TypeScript](#build-something-using-typescript-🔨)

## checkoutTheDocs 🔍

- **TypeScript**: [Official Website](https://www.typescriptlang.org/)
- **TypeScript**: [TS for a JavaScript Programmer](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- **TypeScript**: [TS for the New Programmer](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- **TypeScript**: [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- **[TypeScript Exercises](https://typescript-exercises.github.io/)**
- **[TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)**
- **YouTube** - There are many YouTube channels dedicated to TypeScript that offer tutorials, live coding sessions, and tips and tricks. Some popular channels include "Traversy Media," "Academind," "Fireship," and "Ben Awad."

## 1. Introduction to TypeScript

This section covers the following topics:
- **Introduction to TypeScript**: start with an overview of TypeScript, its benefits and features, and how it differs from JavaScript.
- **Installation**: Install TypeScript on your computer and set up your development environment.
- **Basic Types**: Learn about basic data types in TypeScript, such as strings, numbers, booleans, and arrays.

By completing these tasks you should be able to compile TypeScript source code and have a good understanding of TypeScript primitives.

### Tasks

1. Introduction to TypeScript

   - [ ] Read about what TypeScript is and why it's useful. You can start with the official TypeScript website.
   - [ ] Watch or read some introductory material that explains the basic features of TypeScript, such as its static typing system and how it differs from JavaScript.
   - [ ] Explore some of the advantages of using TypeScript, such as improved code quality, easier maintenance, and better tooling support.
   - [ ] Consider how TypeScript might be useful for your particular programming needs and project requirements.

2. Installation

   - [ ] Open a terminal or command prompt and run the following command to install TypeScript globally on your machine: `npm install -g typescript`.
   - [ ] Verify that TypeScript is installed by running the command `tsc -v` in the terminal. This should output the version number of TypeScript that you just installed.
   - [ ] Set up a TypeScript project in your preferred code editor or IDE. This will typically involve creating a new folder for your project and configuring a `tsconfig.json` file to define your project settings. 
      - [What is tsconfig.json?](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
      - Explore [TypeScript Tooling in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html) documentation for more details.

3. Basic Types

   - [ ] Read about the basic data types in TypeScript, such as `string`, `number`, `boolean`, and arrays.
   - [ ] Create a new TypeScript file in your project and define some variables with different data types.
   - [ ] Experiment with different ways of initializing variables, such as using template strings or explicit type annotations.
   - [ ] Try assigning variables of one type to variables of another type and observe how TypeScript handles type checking a type errors.
   - [ ] Compile your TypeScript code using the `tsc` command and run the resulting JavaScript code in a Node.js environment to verify that your variables are behaving as expected.

## 2. Functions and Interfaces

This section covers the following topics:
- **Functions**: Learn how to define and use functions in TypeScript, including optional and default parameters, rest parameters, and function overloading.
- **Interfaces**: Learn about interfaces in TypeScript, how to define them, and how they can be used to enforce object structure and type safety.

By completing these tasks you should have a good understanding of TypeScript functions and how to use interfaces.

### Tasks

1. Functions

   - [ ] Review the basics of functions in TypeScript, including function declaration syntax, parameter types, and return types.
   - [ ] Experiment with defining functions that take different types of parameters and return different types of values.
   - [ ] Learn about optional and default parameters, and how they can be used to make functions more flexible.
   - [ ] Learn about rest parameters, and how they can be used to define functions that take an arbitrary number of arguments.
   - [ ] Learn about function overloading, and how it can be used to define multiple function signatures for a single function name.
   - [ ] Compile your TypeScript code using the `tsc` command and run the resulting JavaScript code in a Node.js environment to verify that your functions are behaving as expected.

2. Interfaces

   - [ ] Learn about interfaces in TypeScript, and how they can be used to define object shapes and enforce type safety.
   - [ ] Experiment with defining interfaces for different types of objects, such as user profiles, blog posts, or product listings.
   - [ ] Learn about optional properties and readonly properties, and how they can be used to define more flexible and secure interfaces.
   - [ ] Experiment with using interfaces to enforce type safety in your functions.
   - [ ] Compile your TypeScript code using the `tsc` command and run the resulting JavaScript code in a Node.js environment to verify that your interfaces and functions are behaving as expected.

3. Build Something 🔨!
      - [ ] Rebuild a project from the first few weeks of Bootcamp to practice creating a basic TypeScript program that utilizes variables, functions, and interfaces. A few old projects to try rebuilding:
         - Rock, Paper, Scissors Program
         - Cash Register App
         - Build something brand new based on what you have learned so far!

## 3. Classes and Inheritance

This section covers the following topics:
- **Classes**: Learn how to define classes in TypeScript, including constructors, properties, and methods.
- **Inheritance**: Learn about class inheritance and how to use it to create child classes that inherit properties and methods from parent classes.

By completing these tasks you should have a good understanding of the use of classes and inheritance in TypeScript.

### Tasks

1. Classes

   - [ ] Review the basics of classes in TypeScript, including class declaration syntax, constructors, properties, and methods.
   - [ ] Experiment with defining classes for different types of objects, such as cars, animals, or employees.
   - [ ] Learn about access modifiers (`public`, `private`, and `protected`), and how they can be used to control access to class members.
   - [ ] Experiment with using inheritance to create child classes that inherit properties and methods from parent classes.

2. Inheritance

   - [ ] Learn about class inheritance in TypeScript, and how to use it to create child classes that inherit properties and methods from parent classes.
   - [ ] Experiment with creating child classes that inherit properties and methods from parent classes.
   - [ ] Learn about the `super` keyword, and how it can be used to call the constructor and methods of a parent class.
   - [ ] Compile your TypeScript code using the `tsc` command and run the resulting JavaScript code in a Node.js environment to verify that your classes and inheritance are behaving as expected.

3. Build Something 🔨! Here's a few ideas:
   - **Idea #1 - Scooter Application**: Recreate the Scooter Application from Bootcamp using TypeScript.
   - **Idea #2 - Inventory Management System**: Create an online store inventory that allows users to add, update, and view products in an store's inventory. Users should also be able to perform operations such as checking stock availability, calculating total inventory value, and generating inventory reports.
   - Come up with your own idea!

## 4. Modules and Namespaces

This section covers the following topics:
- **Modules**: Learn how to use modules in TypeScript to organize your code into reusable pieces.
- **Namespaces**: Learn about namespaces in TypeScript and how to use them to organize your code into logical groups.

By completing these tasks you should have a good understanding of how to use modules and namespaces to organize your TypeScript source code into reusable, logical parts.

### Tasks

1. Modules

   - [ ] Learn about the concept of modules in TypeScript, and how they can be used to organize your code into reusable pieces.
   - [ ] Experiment with defining and exporting modules in your TypeScript code.
   - [ ] Learn about importing modules from other files, and how to use `import` statements to bring in code from other modules.
   - [ ] Experiment with using different `import`/`export` syntaxes, such as default exports and namespace imports.

2. Namespaces

   - [ ] Learn about namespaces in TypeScript, and how they can be used to organize your code into logical groups.
   - [ ] Experiment with defining and using namespaces in your TypeScript code.
   - [ ] Learn about using dot notation to access functions and variables within a namespace.
   - [ ] Experiment with nesting namespaces to create deeper hierarchies of related code.

3. Build something 🔨! Here's a few ideas:
   - **Idea #1 - Task Management System**: Create a task management system where users can add, update, and delete tasks. Build the project using TypeScript modules and namespaces to organize the codebase effectively. You can have modules for tasks, users, and authentication, and use namespaces to encapsulate related functionalities within those modules.
   - **Idea #2 - Online Store**: Develop an online store application that allows users to browse products, add them to a cart, and complete the purchase. Utilize TypeScript modules and namespaces to organize different aspects of the store, such as product management, user authentication, and cart functionality. Use modules to separate the code related to different functionalities, and leverage namespaces to group related classes, interfaces, and functions within those modules.
   - Come up with your own idea!

## 5. Generics and Advanced Types

This section covers the following topics:
- **Generics**: Learn about generics in TypeScript, how to define them, and how they can be used to create flexible and reusable code.
- **Advanced Types**: Learn about advanced types in TypeScript, including union types, intersection types, type aliases, and type guards.

By completing these tasks you will have a good understanding of how to use generics and advanced types in TypeScript.

### Tasks

1. Generics

   - [ ] Learn about generics in TypeScript, and how they can be used to create flexible and reusable code that works with a variety of data types.
   - [ ] Experiment with defining and using generic functions and classes in your TypeScript code.
   - [ ] Learn about using constraints to restrict the types that can be used with a generic function or class. For example, you might use a constraint to ensure that a generic function can only be used with objects that have a certain property.

2. Advanced Types

   - [ ] Learn about advanced types in TypeScript, and how they can be used to create more complex and expressive type definitions.
   - [ ] Experiment with using union types to define variables that can hold multiple types of data.
   - [ ] Experiment with using intersection types to create types that combine properties and methods from multiple other types.
   - [ ] Learn about using type aliases to create shorthand names for complex types.
   - [ ] Experiment with using type guards to narrow down the type of a variable based on its current value.

3. Build something 🔨! Here's a few ideas:
   - **Idea #1 Data Structure Library**: Create a library that implements common data structures like linked lists, stacks, queues, and binary trees. Use TypeScript generics to make the data structures more flexible and reusable. You can explore advanced types such as union types, intersection types, conditional types, and mapped types to enhance the functionality of your data structures. 
   - **Idea #2 - Form Validation Library**: Develop a form validation library that provides utilities for validating user input in forms. Use TypeScript generics to create reusable validation functions and types that can be applied to different form fields. Explore advanced types like `keyof`, `infer`, and conditional types to create type-safe validations and error messages.
   - Come up with your own idea!

## Build Something Using TypeScript! 🔨

You have already built some very powerful initial applications. After completing your TypeScript learning plan, try to build out at least one of the applications below (or something else that you want to build!):
- **Todo List** - build a web application that allows users to create and manage todo lists. You can use TypeScript with a front-end framework such as React, Angular, or Vue, and use local storage or a backend server to store the data.
- **Weather App** - build a weather application that allows users to enter a location and see the current weather conditions. You can use an API such as OpenWeatherMap and a front-end framework to build the application.
- **Movie App** - build a movie application that displays a list of movies and allows users to search for movies and view details about each movie. You can use an API such as the Movie Database (TMDb) and a front-end framework to build the application.
- **E-commerce Store** - build an e-commerce store that allows users to browse products, add items to their cart, and check out. You can use TypeScript with a front-end framework such as React or Angular, and integrate with a backend server to manage inventory and process payments.
- **Social Media Platform** - build a social media platform that allows users to create accounts, post content, and interact with other users. You can use TypeScript with a front-end framework such as React or Angular, and integrate with a backend server to manage user accounts and content.

## Next Steps

Here are some next steps you can take to continue your learning and improve your skills:
- **Practice, Practice, Practice**: The best way to solidify your understanding of TypeScript is to practice writing code. Work on more complex projects, participate in open source projects, and build your own applications to improve your skills.
- **Learn a Front-End Framework**: TypeScript is often used in combination with popular front-end frameworks such as React, Angular, and Vue. Consider learning one of these frameworks to build more complex applications.
- **Learn a Back-End Language**: If you're interested in full-stack development, consider learning a back-end language such as Python. TypeScript can also be used on the server-side with Node.js.
- **Explore Advanced TypeScript Features**: Once you're comfortable with the basics of TypeScript, explore more advanced features such as decorators, `async`/`await`, and more.
- **Stay Up-To-Date**: TypeScript is constantly evolving, so it's important to stay up-to-date with the latest updates and changes. Follow the TypeScript blog, attend conferences and meetups, and participate in online communities to stay informed.