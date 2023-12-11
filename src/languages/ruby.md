# Ruby

Ruby is a dynamic, object-oriented programming language that stands out for its elegant and readable syntax. Designed with a focus on developer happiness and productivity, Ruby's distinguishing features make it a favorite among programmers. One of its key characteristics is its readability, as its syntax closely resembles natural language, making it easy for both beginners and experienced developers to understand and write code. The language's dynamic typing allows for flexibility by determining variable types at runtime, contributing to its expressive nature. Everything in Ruby is treated as an object, even basic data types and functions, promoting consistency and a uniform programming style.

Ruby's strengths also lie in its metaprogramming capabilities, which empower developers to modify and extend the language itself. This aspect has led to the creation of domain-specific languages (DSLs) tailored to specific tasks, further highlighting Ruby's versatility. One of its primary attractions is its gentle learning curve, aided by its intuitive syntax and strong community support. This aspect makes it accessible to those new to programming, enabling them to quickly grasp its concepts and write functional code.

Originating in the mid-1990s, Ruby was brought to life by Yukihiro Matsumoto, often known as "Matz." With the first public release in 1995, Matsumoto aimed to design a language that harmoniously blended functional, procedural, and object-oriented programming paradigms. Ruby gained substantial popularity in the early 2000s, largely thanks to the emergence of Ruby on Rails (RoR) in 2004. Ruby on Rails, a web application framework built on top of Ruby, streamlined web development and propelled Ruby further into the spotlight.

Ruby's applications are diverse and reflect its adaptability. In web development, Ruby on Rails simplifies building web applications through its elegant syntax and conventions. Ruby's scripting capabilities make it ideal for automation and scripting tasks. The language's concise syntax also lends itself well to rapid prototyping, enabling quick conceptualization and experimentation. For graphical user interface (GUI) applications, libraries like Shoes and Tk allow developers to create interfaces. Additionally, Ruby is employed in game development, particularly for scripting and crafting small games. Its robust string manipulation features and regular expression support make it effective for text processing, and it finds utility in system administration tasks through the creation of Ruby scripts.

This learning plan is designed to introduce you to the basics of programming with Ruby and help you build a solid foundation in the language. Over the course of five days, you will learn about topics such as basic syntax, data structures, object-oriented programming, file I/O, and more. By the end of the learning plan, you should have a good understanding of the key concepts and tools used in Ruby.

## Learning Plan Tasks

1. [Introduction to Ruby](#1-introduction-to-ruby)
2. [Functions and Methods](#2-functions-and-methods)
3. [Data Structures](#3-data-structures)
4. [Object Oriented Programming and OOP Basics](#4-object-oriented-programming-oop-basics)
5. [File IO and Further Exploration](#5-file-io-and-further-exploration)
6. [Build Something Using Ruby!](#projects)

## #checkoutTheDocs 🔍
- Ruby: [Documentation](https://www.ruby-lang.org/en/documentation/)
- Ruby: [Installation Guide](https://www.ruby-lang.org/en/documentation/installation/)
- Ruby: [Ruby in 20 Minutes](https://www.ruby-lang.org/en/documentation/quickstart/)
- The Odin Project: [Ruby Pathway](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby)
- CodeAcademy: [Learn Ruby](https://www.codecademy.com/learn/learn-ruby)

## 1. Introduction to Ruby


### Tasks

1. Installing Ruby
   - **Install Ruby**: You can
      [download the latest version of Ruby from the official Ruby website](https://www.ruby-lang.org/en/downloads/). Follow the instructions to install based on the type of machine you have.
2. Basics of Ruby Syntax:
   - Understand variables, data types, and basic operations in Ruby.
   - Learn about strings, numbers, and boolean values.
   - Familiarize yourself with basic operators (`+`, `-`, `\*`, `/`, and `%`).
3. Control Flow:
   - Learn about if statements and conditional expressions.
   - Explore different types of loops (while, for).
4. Build Something 🔨
   - **Command Line Program**: Write simple programs that use variables, perform calculations, and make decisions based on conditions.

## 2. Functions and Methods

### Tasks

1. Functions and Methods:
   - Understand the concept of functions (methods in Ruby).
   - Learn how to define and call functions.
   - Explore parameter passing and return values.
2. Scope and Variables:
   - Learn about local and global variables.
   - Understand variable scope within functions.
3. Build Something 🔨
   - **Option #1: Rock, Paper, Scissors**: You now know enough to rebuild your Rock, Paper, Scissors project! Your project should include the following:
     - Randomly selects rock, paper, or scissors for each player in the game. You should explore how to use generate random numbers in Ruby
     - Determines the winner of the game based on the random values that were selected.
   - **Option #2: To-Do List**: Create a simple application that allows users to create, edit, and delete todo items. You could also add features such as due dates, reminders, and categories.

## 3. Data Structures

### Tasks
1. Arrays:
   - Learn how to create and manipulate arrays.
   - Understand common array methods (`push`, `pop`, `shift`, `unshift`).
2. Hashes (Dictionaries):
   - Explore how to create and work with hashes.
   - Learn about hash methods for manipulation.
3. Iteration and Enumerators:
   - Understand how to iterate over arrays and hashes.
   - Learn about iterators like `each`, `map`, and `select`.
4. Build Something 🔨
   - **Option #1 - Word Frequency Analyzer**: Create a word frequency analyzer that reads a string, process its contents, and generate a report of the frequency of each word in the file. Be sure to utilize arrays, hashes, and iteration.
   - **Option #2 - Movie Recommendation System**: Create a movie recommendation system that will suggest movies to users based on their preferences and previously watched movies. The program should read a array and/or hash containing a list of previously watched movies and their genres and recommends movies based on the values in the file. Be sure to utilize exception handling and write unit tests.

## 4. Object-Oriented Programming (OOP) Basics

### Tasks
1. Introduction to OOP:
   - Understand the concepts of classes and objects.
   - Learn about attributes (instance variables) and methods (instance methods).
2. Creating Classes:
   - Learn how to define classes in Ruby.
   - Understand constructor methods (initialize).
3. Inheritance and Polymorphism:
   - Explore the concept of inheritance.
   - Learn about method overriding.
4. Build Something 🔨
   - **Option #1 Scooter Application**: Recreate the Scooter Application from Bootcamp using Ruby.
   - **Option #2: Employee Records System**: Create a Ruby program that models an employee management system for a company. The systems should have the follwoing components:
     - An `Employee` class that contains properties like employee ID, name, age,
       job title, and salary.
     - A `Manager` class that extends the `Employee` class. The `Manager` class
       should have additional properties like department and a method to set the
       department.
     - A `SalesPerson` class that extends the `Employee` class. The
       `SalesPerson` class should have an additional properties like salesTarget
       and a method to set the salesTarget.
     - **BONUS**: An `EmployeeDatabase` that can store a collection of
       `Employee` objects. The `EmployeeDatabase` class should have methods like
       add new employees, remove employees, and retrieve employee records.
     - Create a user interface that have options to add managers and salespeople
       and set their respective properties. If you did the bonus task, give
       users an interface that allows them to interact with the
       `EmployeeDatabase` by adding, removing, and displaying employee records.

## 5. File I/O and Further Exploration

### Tasks
1. Reading and Writing Files:
   - Learn how to read from and write to files in Ruby.
   - Understand file modes and handling exceptions.
2. Modules and Libraries:
   - Explore the use of modules to organize code.
   - Learn how to import and use libraries.
3. Exception Handling:
   - Understand how to handle errors using try-catch blocks.
   - Learn about raising and handling custom exceptions.
4. Build Something 🔨
   - **Option #1: File Reader**: Write programs that read from and write to files.
   - **Option #2: Update an Existing Application**: Experiment with using modules and libraries to enhance your programs.

Remember that learning a programming language takes time and practice. These focuses should provide you with a solid foundation in Ruby programming. Afterward, you can continue to deepen your knowledge and skills by working on more complex projects and exploring advanced topics.

## Projects

You have already built some very powerful initial applications. After completing your Ruby Learning Plan, try to build out at least one of the applications below (or something else that you want to build!):

- **Todo List Application** - Create a simple application that allows users to create, edit, and delete todo items. You could also add features such as due dates, reminders, and categories.
- **Calculator Application** - Create a calculator application that allows users to perform basic arithmetic operations, such as addition, subtraction, multiplication, and division. You could also add advanced features, such as trigonometric functions and logarithms.
- **Address Book Application** - Create an address book application that allows users to store and manage contact information, such as names, phone numbers, and email addresses.
- **Tic Tac Toe Game** - Create a simple Tic Tac Toe game that allows two players to take turns placing X's and O's on a 3x3 grid. You could also add features such as AI opponents and different board sizes.
- **File Manager Application** - Create a file manager application that allows users to navigate and manage files and directories on their computer. You could also add features such as file search and file preview.
- **Online Quiz Application** - Create an online quiz application that allows users to take quizzes on various topics. You could also add features such as timed quizzes and leaderboard.