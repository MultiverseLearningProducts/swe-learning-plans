# React

> If you completed Bootcamp, then some portions of this plan will be review.

React is a popular frontend JavaScript library for building user interfaces. It
was originally developed by Facebook in 2011 and was released to the public in
2013 as an open-source project. React has since become one of the most widely
used frontend frameworks, with a large and active community of developers.

React is designed to make it easy to build complex, interactive user interfaces
by breaking them down into small, reusable components. These components can be
composed together to create more complex components, and ultimately an entire
application.

One of the key features that distinguishes React from other frontend frameworks
is its use of a virtual DOM (Document Object Model). The virtual DOM is an
in-memory representation of the actual DOM, which allows React to make changes
to the user interface in a more efficient way. Instead of making changes to the
actual DOM, which can be slow and resource-intensive, React updates the virtual
DOM and then calculates the most efficient way to update the actual DOM based on
those changes.

Another feature that sets React apart is its emphasis on a declarative
programming model. In a declarative model, you describe what you want the UI to
look like, and React takes care of updating the UI as necessary. This is in
contrast to an imperative programming model, where you describe the steps
necessary to update the UI directly. Declarative programming can make it easier
to reason about complex UIs and reduce the risk of bugs.

React also has a large ecosystem of third-party libraries and tools, including
state management libraries like Redux, routing libraries like React Router, and
testing frameworks like Jest and Enzyme.

Overall, React is a powerful frontend framework that has gained popularity
thanks to its performance, flexibility, and community support.

## Learning Plan Tasks

1. [Getting Started with React](#1-getting-started-with-react)
2. [Understanding Components](#2-understanding-components)
3. [Working with State and Props](#3-working-with-state-and-props)
4. [Routing and API Integration](#4-routing-and-api-integration)
5. [Additional React Concepts](#5-advanced-react-concepts)
6. [Build Something Using React!](#build-something-with-react-🔨)

## #checkoutTheDocs 🔍

- **React**: [Developer Documentation](https://react.dev/)
- **React**: [React Tutorials](https://react.dev/learn)
- **React Native**: [Developer Documentation](https://reactnative.dev/)
- **Traversy Media**:
  [React Tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
- **React Router**: [Documentation](https://reactrouter.com/en/main)

## 1. Getting started with React

This section covers the following topics:

- Start by understanding the basics of React and its core concepts.
- Read the official React documentation and try to understand the concepts like
  JSX, components, state, and props.
- Follow the [Quick Start guide](https://react.dev/learn) to create a simple
  "Hello World" application to get started.

### Tasks

1. Learn about what React is and its purpose in web development.

   - [ ] Understand the basics of React, including JSX syntax, components,
         state, and props.
   - [ ] Read the official React documentation to get a comprehensive
         understanding of these concepts.

2. Follow the [Quick Start](https://react.dev/learn) guide to create a "Hello
   World Application

   - [ ] Setup your first React application using the
         [Quick Start](https://react.dev/learn) guide.
   - [ ] Create a simple "Hello World" application to get started.
   - [ ] Learn about the different tools and libraries that can be used with
         React, such as [Babel](https://babeljs.io/) and
         [Webpack](https://webpack.js.org/).
   - [ ] Explore some popular React UI libraries like
         [Material-UI](https://mui.com/) and
         [Semantic-UI](https://semantic-ui.com/).
   - [ ] Familiarize yourself with the
         [React Developer Tools](https://react.dev/learn/react-developer-tools),
         which can help you debug and analyze your React applications.

Remember, this is just one way you could structure day 1 of your learning plan.
You may find that you want to spend more time on certain topics or skip over
others based on your personal preferences and learning style. The important
thing is to pace yourself and not try to rush through the material too quickly.

## 2. Understanding Components

This section covers the following topics:

- Learn how to create React components and the different types of components.
- Understand how to assign and render components props
- Practice creating simple components like buttons, forms, and other UI
  elements.

### Tasks

1. React components

   - [ ] Learn about the different types of React components, including class
         components, functional components, and stateless components.
   - [ ] Understand how to create a component in React, and the syntax for
         rendering it to the DOM.

2. Component props

   - [ ] Understand how to use props to pass data from a parent component to a
         child component.
   - [ ] Understand how to use render data in a component that has been passed
         as a prop.

3. Practice creating components

   - [ ] Create simple components like buttons, forms, and other UI elements to
         gain proficiency in creating components.
   - [ ] Learn about component composition, where you can combine multiple
         components to create more complex UIs.
   - [ ] Learn how to use `<Fragment>`(`<>...</>`) to group a list of children
         elements without adding extra markup to the DOM.

4. Build Something! 🔨
   - **Idea #1 - Pizza Shop**: Build a web application for a pizza shop that
     renders different types of pizza in their own components.
   - **Idea #2 - Dogbook**: Make a social media website for dogs. Include
     components that render information that is unique to each dog.
   - Build something brand new based on what you have learned so far!

Again, this is just one way you could structure day 2 of your learning plan.
Feel free to adjust the pace or order of topics based on your personal
preferences and learning style. By the end of Day 2, you should have a good
understanding of the fundamentals of the React library.

## 3. Working with State and Props

This section covers the following topics:

- Learn how to work with state and props in React.
- Understand how to pass data between components using props.
- Practice creating components that utilize state and props to create dynamic
  UIs.

### Tasks

1. Working with State

   - [ ] Understand how state works in React and how it can be used to manage
         component data.
   - [ ] Learn how to update the state of a component using the `useState` hook.

2. Working with Props

   - [ ] Understand the difference between props and state, and how to use them
         together to create dynamic UIs.
   - [ ] Practice creating components that utilize state and props to create
         dynamic UIs, such as a counter or a simple form that saves data to
         state.
   - [ ] Learn about lifting state up, which is a pattern used in React to
         manage state at a higher level of the component hierarchy.
   - [ ] Understand how to use event handling in React, and how to pass event
         handlers down to child components as props.
   - [ ] Explore the use of conditional rendering in React, where you can show
         or hide UI elements based on state or props.

3. Build Something! 🔨
   - **Idea**: Create a form that captures responses to a quiz. Output a varied
     response based on what the user submits. E.g. create a "which cat matches
     your personality" quiz that outputs different cats based on the answers to
     a multiple choice quiz.
   - Build something brand new based on what you have learned so far!

As with the previous days, this is just one way you could structure day 3 of
your learning plan. You may find that you need more or less time to cover
certain topics, or that you want to adjust the order based on your personal
preferences and learning style. The important thing is to keep practising and
building your skills as you go.

## 4. Routing and API Integration

This section covers the following topics:

- Learn how to handle routing in React using popular routing libraries like
  [React Router](https://reactrouter.com/en/main).
- Understand how to integrate APIs in your React applications using `fetch` or
  libraries like Axios.
- Practice creating components that utilize routing and API integration.

### Tasks

1. Routing with React Router

   - [ ] Learn about routing in React and the different routing libraries
         available, such as [React Router](https://reactrouter.com/en/main).
   - [ ] Understand how to create routes in React and how to use route
         parameters.
   - [ ] Practice creating a simple multi-page application with React Router.

2. Integrating APIs

   - [ ] Learn about integrating APIs in React, using `fetch` and the different
         libraries available for this like
         [Axios](https://www.freecodecamp.org/news/how-to-use-axios-with-react/).
   - [ ] Understand how to make API calls in React and how to handle the
         response data using `useEffect` and `useState`.
   - [ ] Practice integrating an API into a React application, such as
         displaying data from an API or submitting form data to an API.

3. Asynchronous React

   - [ ] Learn about asynchronous programming in React, including the use of
         `async`/`await` and Promises.
   - [ ] Explore different ways of handling errors in React, such as using error
         boundaries.

4. Build Something! 🔨
   - **Idea #1 - Profile**: Create a personal profile that has multiple pages
     that are rendered using React Router.
   - **Idea #2 - Use An API**: Find a
     [free API](https://github.com/public-apis/public-apis) to use and build a
     simple React application around the data that is returned. For example,
     [Spoonacular](https://spoonacular.com/food-api) has an API that you could
     use to build a recipe app
   - Build something brand new based on what you have learned so far!

Again, this is just one way you could structure day 4 of your learning plan. You
may find that you need more or less time to cover certain topics, or that you
want to adjust the order based on your personal preferences and learning style.
The most important thing is to keep practising and building your skills as you
go.

## 5. Advanced React Concepts

This section covers the following topics:

- Learn advanced concepts like Redux, React Hooks, and Custom Hooks.
- Understand the importance of testing in React applications and learn how to
  use testing frameworks like Jest, Enzyme, and React Testing Library.
- Practice creating components that utilize advanced React concepts.

### Tasks

1. React Hooks

   - [ ] Learn about [React Hooks](https://react.dev/reference/react), some of
         which you have already been using!
   - [ ] Understand the basics of React Hooks, including `useState`,
         `useEffect`, `useContext`, and `useReducer`.
   - [ ] Practice using React Hooks to manage component state and lifecycle
         methods. Focus on practicing `useContext` and `useReducer` as we
         haven't used these yet.

2. React Custom Hooks

   - [ ] Learn about
         [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component)
         and how these can be used in React.
   - [ ] Understand how custom hooks allow for logic to be reused.
   - [ ] Write a custom hook and call it within a program.

3. Testing React applications

   - [ ] Learn about testing in React, including different testing frameworks
         like Jest, Enzyme, and React Testing Library.
   - [ ] Understand how to write unit tests for React components, and the
         importance of testing in building robust applications.

4. Redux

   - [ ] Learn about advanced React concepts such as
         [Redux](https://react-redux.js.org/), which is a popular state
         management library.
   - [ ] Understand the basics of Redux, including actions, reducers, and the
         store.
   - [ ] Learn how to integrate Redux into a React application, and how to use
         it to manage application state.
   - [ ] Practice using Redux to manage state in a React application, such as
         creating a simple to-do list application.

This is just one way you could structure day 5 of your learning plan. You may
find that you need more or less time to cover certain topics, or that you want
to adjust the order based on your personal preferences and learning style. The
most important thing is to keep practising and building your skills as you go.

## Build Something with React! 🔨

Here are some project ideas that can help you practice your React skills:

- **To-Do List Application**: Build a simple to-do list application that allows
  users to add, remove, and mark tasks as completed.
- **Weather App**: Build a weather app that displays the current weather
  conditions and forecast for a user's location. You can also incorporate a
  third-party API such as OpenWeatherMap to fetch the weather data.
- **E-commerce Website**: Build a small e-commerce website that allows users to
  browse products, add them to a cart, and checkout. You can also incorporate a
  third-party payment gateway such as Stripe to handle payments.
- **Movie Search App**: Build a movie search app that allows users to search for
  movies by title, genre, or actor. You can also incorporate a third-party API
  such as OMDB to fetch the movie data.
- **Quiz App**: Build a quiz app that allows users to take quizzes on various
  topics. You can also incorporate a third-party API such as Open Trivia DB to
  fetch the quiz data.

These are just a few examples of the many project ideas you can build to
demonstrate your understanding of React. You can choose the one that interests
you the most and use your creativity to add your own features and
functionalities to make it unique.
