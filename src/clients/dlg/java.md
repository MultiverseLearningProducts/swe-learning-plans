# DLG Java learning plan

## Learning plan

### Java Fundamentals

- [ ] Familiarize yourself with the basic syntax of the Java programming
      language. Practice writing small programs that use variables, loops, and
      conditional statements.
- [ ] Understand the concept of data types in Java and how to use them. Learn
      about primitive data types, such as int, double, and boolean, as well as
      reference data types, such as String and arrays.
- [ ] Learn how to use classes and objects in Java. Practice creating classes
      and objects and calling methods on them.
- [ ] Learn how to use Java packages and import statements to organize your
      code.
- [ ] Learn how to use access modifiers, such as public, private, and protected,
      to control the visibility of classes, methods, and variables.

### OOP Concepts:

- [ ] Understand the basic principles of object-oriented programming (OOP), such
      as encapsulation, inheritance, and polymorphism.
- [ ] Learn how to use classes and objects to encapsulate data and behavior.
- [ ] Practice using inheritance to create a class hierarchy.
- [ ] Learn how to use polymorphism to write code that can work with objects of
      different types.

### Overloading & Overriding:

- [ ] Understand the difference between method overloading and method
      overriding.
- [ ] Practice writing methods that overload other methods with different
      parameters.
- [ ] Practice writing methods that override methods in a superclass.
- [ ] Understand how to use the @Override annotation to indicate that a method
      is intended to override a superclass method.

### Inheritance with Interface and Abstract Class:

- [ ] Understand the difference between an interface and an abstract class.
- [ ] Practice creating interfaces and implementing them in classes.
- [ ] Practice creating abstract classes and extending them in subclasses.
- [ ] Understand how to use inheritance to create a class hierarchy that models
      the relationship between objects in your program.

### Exception Handling:

- [ ] Understand the concept of exceptions and how they are used in Java.
- [ ] Practice writing try-catch blocks to handle exceptions in your code.
- [ ] Understand how to use the throws keyword to declare that a method may
      throw an exception.
- [ ] Learn about different types of exceptions in Java, such as checked
      exceptions and unchecked exceptions.

### Collections:

- [ ] Understand the concept of collections in Java and the difference between a
      collection and an array.
- [ ] Learn about the different types of collections in Java, such as lists,
      sets, and maps.
- [ ] Practice using the Java Collections Framework to create and manipulate
      collections in your code.
- [ ] Understand the performance characteristics of different types of
      collections and how to choose the right collection for your needs.

By following this learning plan and practicing regularly, a software engineer
should be able to gain a solid understanding of Java fundamentals, OOPs
concepts, overloading and overriding, inheritance with interface and abstract
class, exception handling, and collections. Good luck with your learning!

## Resources

There are many resources available for learning Java, and here are some
suggestions:

1. **Oracle's Java Tutorials**: This is a comprehensive and free resource that
   covers all aspects of the Java language, including the topics in the above
   learning plan. The tutorials are easy to follow and provide many practical
   examples to help you learn.

2. **Head First Java**: This book by Kathy Sierra and Bert Bates is a great
   introduction to Java for beginners. The book is designed to be engaging and
   interactive, and it covers all the essential topics in a clear and concise
   manner.

3. **Effective Java**: This book by Joshua Bloch is a must-read for any serious
   Java developer. It provides detailed guidance on best practices for writing
   effective and efficient Java code, and it covers many advanced topics such as
   generics, enums, and concurrency.

4. **Java Programming Masterclass for Software Developers**: This is a popular
   Udemy course by Tim Buchalka that provides a comprehensive introduction to
   Java for beginners. The course covers all the essential topics in the above
   learning plan and includes many practical exercises and projects.

5. **Codecademy**: This is an online learning platform that offers interactive
   courses in Java and other programming languages. The courses are self-paced
   and cover all the essential topics in the above learning plan.

6. **Java Magazine**: This is a free, online magazine published by Oracle that
   provides in-depth articles and tutorials on Java programming. The magazine
   covers all aspects of Java development, from beginner-level topics to
   advanced techniques and best practices.

There are many other resources available for learning Java, but these
suggestions should provide a good starting point. As always, be sure to practice
regularly and apply what you've learned in real-world projects to reinforce your
understanding.

## Project Ideas

Here are three simple project ideas to help you practice the skills in the above
learning plan:

1. **Bank Account Management System**: Build a simple bank account management
   system that allows users to create new accounts, deposit and withdraw funds,
   and view their account balance. This project will help you practice Java
   fundamentals, OOPs concepts, and exception handling.

2. **Employee Management System**: Build an employee management system that
   allows users to create and manage employee records, such as name, address,
   and salary. You can also include features like sorting and searching employee
   records. This project will help you practice Java fundamentals, OOPs
   concepts, and collections.

3. **Bookstore Management System**: Build a simple bookstore management system
   that allows users to add, view, and delete books from a collection. You can
   also include features like sorting and searching for books based on different
   criteria. This project will help you practice Java fundamentals, OOPs
   concepts, inheritance with interface and abstract class, and collections.

These projects are designed to be relatively simple and manageable, but they
still provide opportunities to practice a wide range of Java skills. As you work
on these projects, be sure to challenge yourself and try to apply the concepts
you've learned in new and creative ways. Good luck!

## Notes

### Variables and data types

Java is a strongly typed language, which means that you must declare the data
type of a variable before you can use it. Java has several built-in data types,
including:

- `byte`: 8-bit integer
- `short`: 16-bit integer
- `int`: 32-bit integer
- `long`: 64-bit integer
- `float`: 32-bit floating-point number
- `double`: 64-bit floating-point number
- `boolean`: true/false value
- `char`: single character

Here's an example of declaring and initializing variables of various data types:

```java
public class Example {
    public static void main(String[] args) {
        byte a = 10;
        short b = 20;
        int c = 30;
        long d = 40L;
        float e = 3.14f;
        double f = 2.71828;
        boolean g = true;
        char h = 'A';

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(e);
        System.out.println(f);
        System.out.println(g);
        System.out.println(h);
    }
}
```

In this example, we declare variables of various data types and initialize them
with some values. We then print the values of these variables using the
`System.out.println()` method.

Java also supports variables that are objects of a class. In this case, the
variable stores a reference to the object, rather than the object itself. Here's
an example:

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

public class Example {
    public static void main(String[] args) {
        Person p = new Person("Alice", 25);
        System.out.println(p.getName());
        System.out.println(p.getAge());
    }
}
```

In this example, we define a `Person` class with two private fields (`name` and
`age`) and two public methods (`getName()` and `getAge()`) to access these
fields. We then declare a `Person` variable `p` and initialize it with a new
`Person` object. We can then call the `getName()` and `getAge()` methods on the
`p` variable to retrieve the values of the `name` and `age` fields of the
`Person` object.

Understanding variables and data types is an important foundation for writing
Java programs, as it allows you to store and manipulate data in a structured and
efficient way.

### Loops

In Java, loops are used to repeat a block of code multiple times. There are
three types of loops in Java: `for`, `while`, and `do-while`.

#### for loop

The `for` loop is used to repeat a block of code for a specific number of times.
It consists of three parts: the initialization, the condition, and the
iteration. Here's an example:

```java
for (int i = 0; i < 10; i++) {
    System.out.println("Hello, world!");
}
```

In this example, the loop will execute 10 times. The `int i = 0` statement
initializes the loop counter variable `i` to 0. The `i < 10` condition checks if
`i` is less than 10. The `i++` statement increments `i` by 1 after each
iteration of the loop. The `System.out.println("Hello, world!")` statement is
the code that is executed inside the loop.

#### while loop

The `while` loop is used to repeat a block of code as long as a certain
condition is true. Here's an example:

```java
int i = 0;
while (i < 10) {
    System.out.println("Hello, world!");
    i++;
}
```

In this example, the loop will execute 10 times. The `int i = 0` statement
initializes the loop counter variable `i` to 0. The `i < 10` condition checks if
`i` is less than 10. The `System.out.println("Hello, world!")` statement is the
code that is executed inside the loop. The `i++` statement increments `i` by 1
after each iteration of the loop.

#### do-while loop

The `do-while` loop is similar to the `while` loop, except that the condition is
checked at the end of the loop instead of the beginning. This means that the
code inside the loop will always execute at least once. Here's an example:

```java
int i = 0;
do {
    System.out.println("Hello, world!");
    i++;
} while (i < 10);
```

In this example, the loop will execute 10 times. The `int i = 0` statement
initializes the loop counter variable `i` to 0. The
`System.out.println("Hello, world!")` statement is the code that is executed
inside the loop. The `i++` statement increments `i` by 1 after each iteration of
the loop. The `i < 10` condition checks if `i` is less than 10, and since it is
true, the loop continues to execute.

Loops are an important tool in Java programming, allowing you to perform
repetitive tasks with ease. By mastering loops, you can write more efficient and
powerful Java programs.

### Conditionals

Sure! In Java, conditionals are used to make decisions in code based on certain
conditions. The most commonly used conditional statements in Java are the `if`,
`if-else`, and `switch` statements.

#### if statement

The `if` statement is used to execute a block of code if a certain condition is
true. Here's an example:

```java
int x = 5;
if (x > 0) {
    System.out.println("x is positive");
}
```

In this example, the code inside the `{ }` block will only be executed if the
condition `x > 0` is true. If `x` is 0 or negative, the code inside the block
will be skipped.

#### if-else statement

The `if-else` statement is used to execute one block of code if a condition is
true, and another block of code if the condition is false. Here's an example:

```java
int x = -5;
if (x > 0) {
    System.out.println("x is positive");
} else {
    System.out.println("x is not positive");
}
```

In this example, if `x` is greater than 0, the code inside the first `{ }` block
will be executed, and if `x` is not greater than 0 (i.e., it is 0 or negative),
the code inside the second `{ }` block will be executed.

#### switch statement

The `switch` statement is used to execute different blocks of code based on the
value of a variable. Here's an example:

```java
int dayOfWeek = 3;
switch (dayOfWeek) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    case 4:
        System.out.println("Thursday");
        break;
    case 5:
        System.out.println("Friday");
        break;
    case 6:
        System.out.println("Saturday");
        break;
    case 7:
        System.out.println("Sunday");
        break;
    default:
        System.out.println("Invalid day of week");
        break;
}
```

In this example, the code inside the block associated with the value of
`dayOfWeek` will be executed. If `dayOfWeek` is 1, the code inside the first
`{ }` block will be executed (which prints "Monday" to the console), and so on.
If `dayOfWeek` does not match any of the cases, the code inside the `default`
block will be executed.

By mastering conditionals in Java, you can write code that makes decisions based
on different conditions, making your programs more flexible and powerful.

### Classes and objects

In Java, classes and objects are fundamental concepts in object-oriented
programming. A class is a blueprint or template for creating objects, while an
object is an instance of a class. Here's a breakdown of the basics:

#### Defining a class

To define a class in Java, you use the `class` keyword followed by the name of
the class, as shown below:

```java
public class MyClass {
    // class members
}
```

In this example, we've defined a class called `MyClass` with no members.

#### Adding class members

A class can have several types of members, including fields, methods,
constructors, and nested classes. Here's an example of a class with some
members:

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```

In this example, we've defined a class called `Person` with two private fields
(name and age), a constructor that initializes those fields, and getter and
setter methods for accessing and modifying the fields.

#### Creating objects

Once you've defined a class, you can create objects (instances) of that class
using the `new` keyword and a constructor, as shown below:

```java
Person person1 = new Person("Alice", 25);
Person person2 = new Person("Bob", 30);
```

In this example, we've created two `Person` objects, `person1` and `person2`,
using the `Person` constructor that takes a name and age parameter.

#### Accessing object members

To access the members (fields and methods) of an object, you use the dot
notation, as shown below:

```java
String name = person1.getName();
person2.setAge(31);
```

In this example, we're using the `getName()` method to get the name of
`person1`, and the `setAge()` method to set the age of `person2`.

By mastering classes and objects in Java, you can create complex data structures
and build powerful applications that manipulate data in various ways.

### Access modifiers

In Java, access modifiers are used to control the accessibility of classes,
fields, methods, and constructors. There are four access modifiers in Java:

- `public`: The public modifier makes a class, field, method, or constructor
  accessible from anywhere in the program.

- `private`: The private modifier makes a class, field, method, or constructor
  accessible only within the same class.

- `protected`: The protected modifier makes a class, field, method, or
  constructor accessible within the same class, subclasses, and classes in the
  same package.

- `default` (also known as package-private): If no access modifier is specified,
  the class, field, method, or constructor is accessible within the same
  package.

Here's an example that demonstrates the use of access modifiers in Java:

```java
public class Person {
    private String name;        // private field
    protected int age;          // protected field
    public String address;      // public field

    public Person(String name, int age, String address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    private void setName(String name) {     // private method
        this.name = name;
    }

    protected void setAge(int age) {        // protected method
        this.age = age;
    }

    public void setAddress(String address) {    // public method
        this.address = address;
    }
}
```

In this example, we've defined a `Person` class with three fields (`name`,
`age`, and `address`) and three methods (`setName()`, `setAge()`, and
`setAddress()`). The `name` field and `setName()` method are marked as private,
meaning they can only be accessed within the `Person` class. The `age` field and
`setAge()` method are marked as protected, meaning they can be accessed within
the `Person` class, as well as by subclasses and classes in the same package.
The `address` field and `setAddress()` method are marked as public, meaning they
can be accessed from anywhere in the program.

By using access modifiers effectively, you can control the visibility and
accessibility of your code, which can help to prevent errors and improve the
security and maintainability of your Java applications.

### Encapsulation

Encapsulation is one of the four fundamental principles of object-oriented
programming (OOP). It refers to the idea of bundling data and behavior (i.e.,
methods) that operate on that data into a single unit, known as a class. The
purpose of encapsulation is to hide the implementation details of the class from
other parts of the program and to provide a well-defined interface for
interacting with the class.

In Java, encapsulation is implemented using access modifiers, which control the
visibility of a class's fields and methods. There are four access modifiers in
Java: `public`, `private`, `protected`, and the default (i.e., no modifier).

Here's an example to illustrate encapsulation in Java:

```java
public class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        balance -= amount;
    }
}
```

In this example, we have a `BankAccount` class that represents a simple bank
account. The class has two private fields: `accountNumber` (which is a `String`
that represents the account number) and `balance` (which is a `double` that
represents the current balance of the account).

The class also has four methods: a constructor that initializes the
`accountNumber` and `balance` fields, and three public methods:
`getAccountNumber()`, `getBalance()`, `deposit()`, and `withdraw()`.

Notice that the fields `accountNumber` and `balance` are marked as `private`,
which means they can only be accessed from within the `BankAccount` class. The
`deposit()` and `withdraw()` methods, on the other hand, are marked as `public`,
which means they can be accessed from outside the class.

The `getAccountNumber()` and `getBalance()` methods are also marked as `public`,
but notice that they only provide access to the `accountNumber` and `balance`
fields respectively, without allowing modification of those fields. This is an
example of encapsulation: the implementation details of the `BankAccount` class
(i.e., its fields) are hidden from outside the class, and a well-defined
interface (i.e., the public methods) is provided for interacting with the class.

Overall, encapsulation is a powerful tool in OOP that allows you to write more
maintainable and secure code by hiding the implementation details of your
classes and providing well-defined interfaces for interacting with them.

### Inheritance

Inheritance is another fundamental principle of object-oriented programming
(OOP). It allows you to define a new class based on an existing class (called
the parent or superclass), inheriting all of its fields and methods, and adding
or modifying them as needed. The new class is called the child or subclass.

In Java, inheritance is implemented using the `extends` keyword. Here's an
example to illustrate inheritance in Java:

```java
public class Animal {
    private String name;
    private int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }

    public void bark() {
        System.out.println(name + " is barking.");
    }

    public void fetch() {
        System.out.println(name + " is fetching.");
    }
}
```

In this example, we have an `Animal` class that represents a generic animal,
with a `name` and an `age` field, and `eat()` and `sleep()` methods. We also
have a `Dog` class that extends the `Animal` class, with an additional `breed`
field, and `bark()` and `fetch()` methods.

Notice the use of the `extends` keyword in the `Dog` class definition to
indicate that `Dog` is a subclass of `Animal`. The `Dog` class inherits the
`name`, `age`, `eat()`, and `sleep()` methods from `Animal`, and adds its own
`breed`, `bark()`, and `fetch()` methods.

The `super()` keyword is used in the `Dog` class constructor to call the
constructor of the `Animal` class and initialize the `name` and `age` fields.
This is necessary because these fields are marked as `private` in the `Animal`
class and cannot be accessed directly by the `Dog` class.

Overall, inheritance is a powerful tool in OOP that allows you to reuse code and
create more specialized classes based on existing classes. It helps you write
more modular and maintainable code by reducing code duplication and promoting
code reuse.

### Polymorphism

Polymorphism is another important principle of object-oriented programming
(OOP). It allows you to use a single method name or operator to represent
multiple different behaviors. There are two main types of polymorphism: method
overloading and method overriding.

Method overloading refers to defining multiple methods with the same name but
different parameters. Java can determine which method to call based on the
number and types of the arguments passed. Here's an example:

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }
}
```

In this example, we have a `Calculator` class with two `add()` methods that have
the same name but different parameter types (one takes two `int` arguments and
the other takes two `double` arguments). Java can determine which `add()` method
to call based on the types of the arguments passed.

Method overriding refers to redefining a method in a subclass that already
exists in the superclass. The method in the subclass must have the same name,
return type, and parameters as the method in the superclass, but it can have a
different implementation. Here's an example:

```java
public class Animal {
    public void makeSound() {
        System.out.println("Animal is making a sound.");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog is barking.");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat is meowing.");
    }
}
```

In this example, we have an `Animal` class with a `makeSound()` method that
simply prints a message. We also have `Dog` and `Cat` subclasses that override
the `makeSound()` method with their own implementations.

Polymorphism allows you to write more flexible and reusable code by defining
methods that can work with multiple types of objects. For example, you can write
a method that takes an `Animal` object as a parameter and calls its
`makeSound()` method, and it will work correctly for any subclass of `Animal`
that overrides the `makeSound()` method.

### Interfaces and Abstract Classes

An interface is a contract that specifies a set of methods that a class must
implement. In Java, an interface is defined using the `interface` keyword and
can only contain method signatures (i.e., the method name, return type, and
parameter list) and constants. Here's an example:

```java
public interface Shape {
    double getArea();
    double getPerimeter();
    String getName();
}
```

This `Shape` interface defines three methods that must be implemented by any
class that implements the interface. Note that there are no implementations for
these methods - they only declare the method signature.

On the other hand, an abstract class is a class that cannot be instantiated and
is used as a base class for other classes to extend. In Java, an abstract class
is defined using the `abstract` keyword and can contain abstract methods (i.e.,
methods without implementations) as well as concrete methods (i.e., methods with
implementations). Here's an example:

```java
public abstract class Animal {
    private String name;
    private int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public abstract void makeSound();
}
```

This `Animal` abstract class defines two private fields (`name` and `age`) as
well as a constructor and two concrete methods (`getName()` and `getAge()`) that
can be used by any subclass that extends `Animal`. Additionally, this abstract
class defines an abstract method (`makeSound()`) that must be implemented by any
subclass that extends `Animal`.

The key difference between an interface and an abstract class is that an
interface only specifies a set of methods that must be implemented, while an
abstract class can also provide some default functionality through concrete
methods. Additionally, a class can implement multiple interfaces but can only
extend one abstract class.

In summary, you should use an interface when you want to define a set of methods
that a class must implement, and use an abstract class when you want to provide
a common base class for other classes to extend, along with some default
functionality.

### Exception handling

Exception handling in Java is the process of dealing with unexpected or
exceptional situations that can occur during program execution, such as errors
or invalid input. In Java, exception handling is done using a try-catch block.

The basic idea of exception handling is to enclose the code that might cause an
exception in a `try` block, and then provide a set of catch blocks that can
handle the different types of exceptions that might occur. Here's an example:

```java
try {
    // code that might throw an exception
} catch (IOException e) {
    // handle IOException
} catch (SQLException e) {
    // handle SQLException
} catch (Exception e) {
    // handle all other exceptions
}
```

In this example, the `try` block contains code that might throw an exception,
such as reading from a file or connecting to a database. If an exception occurs,
the appropriate catch block will be executed based on the type of exception that
was thrown. If none of the catch blocks match the exception that was thrown, the
final catch block that handles all other exceptions will be executed.

In addition to catching exceptions, you can also throw exceptions in your own
code using the `throw` keyword. This can be useful when you want to handle
errors in a specific way, or when you want to signal to calling code that
something has gone wrong. Here's an example:

```java
public void divide(int a, int b) throws IllegalArgumentException {
    if (b == 0) {
        throw new IllegalArgumentException("Division by zero");
    }
    int result = a / b;
    System.out.println("Result: " + result);
}
```

In this example, the `divide` method checks if the second parameter (`b`) is
zero, and if so, it throws an `IllegalArgumentException` with a message
indicating that the division by zero is not allowed. The calling code can then
catch this exception and handle it appropriately.

In summary, exception handling in Java is an important technique for dealing
with unexpected situations in your code. By enclosing code that might throw an
exception in a `try` block and providing catch blocks to handle the different
types of exceptions that might occur, you can make your code more robust and
reliable. Additionally, you can throw your own exceptions using the `throw`
keyword to handle errors in a specific way or signal to calling code that
something has gone wrong.

### Lists

In Java, a list is a data structure that allows you to store and manipulate a
collection of objects. A list can hold objects of any type, including primitive
types (such as integers or booleans) and reference types (such as strings or
objects).

There are several types of lists in Java, but the most commonly used ones are
the `ArrayList` and `LinkedList` classes. Both classes implement the `List`
interface, which defines a set of methods that can be used to add, remove, and
access elements in the list.

Here's an example of how to create an `ArrayList` of integers and add some
values to it:

```java
import java.util.ArrayList;

public class ListExample {
    public static void main(String[] args) {
        // create an ArrayList of integers
        ArrayList<Integer> myList = new ArrayList<Integer>();

        // add some values to the list
        myList.add(10);
        myList.add(20);
        myList.add(30);

        // print the contents of the list
        System.out.println(myList);
    }
}
```

In this example, we create an `ArrayList` of integers by specifying the type
parameter `<Integer>`. We then add some values to the list using the `add`
method, and print the contents of the list using the `println` method.

Here are some common methods that can be used to manipulate lists in Java:

- `add(element)`: adds an element to the end of the list
- `add(index, element)`: inserts an element at the specified index in the list
- `get(index)`: retrieves the element at the specified index in the list
- `remove(index)`: removes the element at the specified index in the list
- `size()`: returns the number of elements in the list

Here's an example that demonstrates some of these methods:

```java
import java.util.ArrayList;

public class ListExample {
    public static void main(String[] args) {
        // create an ArrayList of strings
        ArrayList<String> myList = new ArrayList<String>();

        // add some values to the list
        myList.add("apple");
        myList.add("banana");
        myList.add("cherry");

        // insert an element at index 1
        myList.add(1, "pear");

        // remove the element at index 2
        myList.remove(2);

        // print the contents of the list
        for (String element : myList) {
            System.out.println(element);
        }

        // print the number of elements in the list
        System.out.println("Size: " + myList.size());
    }
}
```

In this example, we create an `ArrayList` of strings and add some values to it.
We then insert an element at index 1 and remove the element at index 2 using the
`add` and `remove` methods. Finally, we use a for-each loop to print the
contents of the list and the `size` method to print the number of elements in
the list.

That's a brief overview of lists in Java. They are a powerful tool for working
with collections of objects and are used extensively in Java programming.

### Sets

In Java, a set is a collection of unique elements that does not allow
duplicates. The elements in a set are not ordered, which means that you cannot
access them using an index. Instead, you can use methods to add, remove, and
check for the presence of elements in the set.

The most commonly used set implementation in Java is the `HashSet` class, which
uses a hash table to store the elements. This makes lookups and insertions very
fast, but it does not guarantee the order of the elements.

Here's an example of how to create a `HashSet` of strings and add some values to
it:

```java
import java.util.HashSet;

public class SetExample {
    public static void main(String[] args) {
        // create a HashSet of strings
        HashSet<String> mySet = new HashSet<String>();

        // add some values to the set
        mySet.add("apple");
        mySet.add("banana");
        mySet.add("cherry");

        // print the contents of the set
        System.out.println(mySet);
    }
}
```

In this example, we create a `HashSet` of strings by specifying the type
parameter `<String>`. We then add some values to the set using the `add` method,
and print the contents of the set using the `println` method.

Here are some common methods that can be used to manipulate sets in Java:

- `add(element)`: adds an element to the set
- `remove(element)`: removes an element from the set
- `contains(element)`: returns `true` if the set contains the specified element,
  otherwise `false`
- `size()`: returns the number of elements in the set

Here's an example that demonstrates some of these methods:

```java
import java.util.HashSet;

public class SetExample {
    public static void main(String[] args) {
        // create a HashSet of integers
        HashSet<Integer> mySet = new HashSet<Integer>();

        // add some values to the set
        mySet.add(10);
        mySet.add(20);
        mySet.add(30);

        // remove an element from the set
        mySet.remove(20);

        // check if an element is in the set
        if (mySet.contains(10)) {
            System.out.println("The set contains 10");
        }

        // print the number of elements in the set
        System.out.println("Size: " + mySet.size());
    }
}
```

In this example, we create a `HashSet` of integers and add some values to it. We
then remove an element from the set using the `remove` method, check if an
element is in the set using the `contains` method, and print the number of
elements in the set using the `size` method.

That's a brief overview of sets in Java. They are a useful tool for working with
collections of unique elements and can be used to solve a wide range of
programming problems.

### Maps

In Java, a map is a collection that stores key-value pairs. Each key in the map
is unique, and it is used to retrieve the corresponding value. Maps are useful
for storing and accessing data in a way that allows for efficient lookups based
on keys.

The most commonly used map implementation in Java is the `HashMap` class, which
uses a hash table to store the key-value pairs. This makes lookups and
insertions very fast, but it does not guarantee the order of the elements.

Here's an example of how to create a `HashMap` of strings and integers and add
some key-value pairs to it:

```java
import java.util.HashMap;

public class MapExample {
    public static void main(String[] args) {
        // create a HashMap of strings and integers
        HashMap<String, Integer> myMap = new HashMap<String, Integer>();

        // add some key-value pairs to the map
        myMap.put("Alice", 25);
        myMap.put("Bob", 30);
        myMap.put("Charlie", 35);

        // retrieve the value for a specific key
        int age = myMap.get("Bob");
        System.out.println("Bob's age is " + age);

        // iterate over the keys in the map
        for (String name : myMap.keySet()) {
            System.out.println(name + " is " + myMap.get(name) + " years old");
        }

        // check if a key exists in the map
        if (myMap.containsKey("Alice")) {
            System.out.println("Alice is in the map");
        }

        // remove a key-value pair from the map
        myMap.remove("Charlie");
    }
}
```

In this example, we create a `HashMap` of strings and integers, and then add
three key-value pairs to it. We retrieve the value for the key "Bob" using the
`get()` method, and then iterate over the keys in the map using a for-each loop.
We check if the key "Alice" exists in the map using the `containsKey()` method,
and then remove the key-value pair for "Charlie" using the `remove()` method.

There are also other implementations of the `Map` interface in Java, such as
`TreeMap`, which guarantees that the elements are stored in sorted order based
on the keys, and `LinkedHashMap`, which maintains the order in which the
elements were inserted.
