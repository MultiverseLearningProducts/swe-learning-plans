# React Native

React Native is a popular open-source framework for building mobile
applications. It is primarily used to create cross-platform mobile apps,
allowing developers to write code in JavaScript and React and then deploy it on
both iOS and Android platforms. This cross-platform capability is one of React
Native's standout features, as it significantly reduces development time and
resources.

React Native was first introduced by Facebook in 2015, and it has since gained
widespread adoption within the developer community. Its unique "write once, run
anywhere" approach means that a single codebase can power applications on
multiple platforms, which is particularly beneficial for businesses looking to
reach a broad audience with limited development effort.

Key features of React Native include a rich set of pre-designed UI components, a
highly active and supportive community, and the ability to integrate native
components for platform-specific functionality when needed. These qualities,
combined with its performance and efficiency, make React Native a top choice for
mobile app development, especially for projects where time and resources are a
concern.

In this guide, we will be exploring the official documentation for React Native.
However, it is good to know that
[React Native Express](https://www.reactnative.express/) provides more examples
to help support your understanding. If you find that the official docs are
lacking some detail, you can check this alternative guide to see if it has the
answers you're looking for.

## Using this guide

Don't get doc fatigue! There's a lot of reading to do when learning new
frameworks, but you can't learn by reading alone. Step 1 in
[getting started](#getting-started) is to set up a project locally. You should
hack away at this with every new thing you learn. Don't worry too much about
building something in particular, but make sure you experiment plenty with each
new thing you learn about. Development is not a spectator sport!

Each section probably contains a few hours work - do as much as you feel
comfortable with in each session and pick up from where you left off next time.
If you find yourself struggling with the docs, make sure to reach out for help
from your fellow apprentices, a google search, or Multiverse coaches. We'll all
do our best to get you on track.

If you'd like to have something specific to build as you go along, take a look
at some [project ideas](#make-something) at the bottom of this guide and feel
free to build it up as you study each section.

## Getting started

### Setting up locally

Before we jump in, it's a good idea to get a
[local development environment](https://reactnative.dev/docs/environment-setup)
set up. This will allow you to experiment locally with the things you're
learning. If you're having trouble getting set up locally, it is good to know
that you could always use [Snack](https://snack.expo.dev/), a browser IDE
provided by Expo.

### Intro to React Native

To get an understanding of what React Native is all about, it is a good idea to
first read the [introduction](https://reactnative.dev/docs/getting-started) from
the official docs.

### Components

React Native apps are built out of components, and the component ecosystem is
important to understand. Where do these components come from, and how do they
work on their respective operating systems? Read about
[components](https://reactnative.dev/docs/intro-react-native-components) to
answer these questions.

### React primer

If it has been a while since you looked at any React code, it's a good idea to
have a refresher! Read through the
[primer on React](https://reactnative.dev/docs/intro-react) to make sure you can
exploit all the features of React's powerful API.

### Basic UI elements

Now it's time to dig in to some of the fundamental UI concepts of React Native.
We'll be using these components all the time to create our layouts, and it
demonstrates how React Native code composes components to build up your UI.
Let's take a look at:

- [Handling text input](https://reactnative.dev/docs/handling-text-input)
- [Scroll views](https://reactnative.dev/docs/using-a-scrollview)
- [List views](https://reactnative.dev/docs/using-a-listview)

## UI Basics

In this section we'll learn how to layout our app, and use some of the core
components to add simple elements to our view groups. We can add styling,
images, colors and more in a way that works with both Android and iOS devices!

### Styling

React Native is unopinionated about many things, allowing you as a developer to
decide how to architect your app and solve problems. Whilst this makes it
versatile, it can also make it tricky to get started with. Let's check out the
guides for [styling](https://reactnative.dev/docs/style) components and
determining their [dimensions](https://reactnative.dev/docs/height-and-width).

### Layout

For layouts, React Native makes extensive use of flexbox. Flexbox is powerful,
but it does take some getting used to. If you'd like to get some practice with
flexbox, [flexbox froggy](https://flexboxfroggy.com/) is an absolute classic
and, with a bit of googling, you can learn by doing. Now we're in the zone with
flexbox, we're ready to learn how this fits in with React Native's layout
system. Let's work through their notes on
[layout with flexbox](https://reactnative.dev/docs/flexbox) - make sure to
experiment plenty with the examples provided.

### Images

An important part of app development is the ability to ship and show static
content such as images and file contents. Let's learn how this is handled in
React Native by studying
[how images are handled](https://reactnative.dev/docs/images) in a project.

### Color

The look and feel of your app are essential in determining its identity, and at
the heart of that is color. As you can imagine, Android and iOS apps handle
color differently, and so React Native attempts to rationalise all of this into
Color APIs which should feel natural for web developers. Take some time to
[understand the Color APIs](https://reactnative.dev/docs/colors) so you can
confidently theme and brand your apps.

## React Navigation

As you can imagine, navigating in a mobile app is slightly different to
navigation in a website. There are many similarities, however, so your knowledge
of routing and navigation in websites will help you understand how it works in
React Native.

React Native itself does not have a standard way of handling navigation, again
it allows developers to develop and use their own solutions. Howevever, the
community have built React Navigation, a navigation library which can be used to
help bootstrap your navigation solution. In this section, we'll study React
Navigation to allow users to move between screens in our app.

### Install

Head over to the
[React Navigation](https://reactnavigation.org/docs/getting-started) docs and
read the Getting Started guide. This contains the essential information you need
to get the library installed locally.

### Basic example

Work through the
[Hello React Navigation](https://reactnavigation.org/docs/hello-react-navigation)
and [Moving between screens](https://reactnavigation.org/docs/navigating)
examples to understand the basic ideas and syntax used to achieve navigation
with this library. Try to get this working in your own environment (whether
you're working locally or on Snack). Play around with adding views and
navigation items in your own project.

### Common UI patterns

There are a few different ways to allow users to move around your app. Take some
time to experiment with
[tabs](https://reactnavigation.org/docs/tab-based-navigation) and
[drawers](https://reactnavigation.org/docs/drawer-based-navigation), two of the
canonical solutions for presenting navigation options. The tabs documentation
also instroduces the idea of nested navigators - this is a good example to
demonstrate how nested navigation works, and you can read more detail about
[nested navigation](https://reactnavigation.org/docs/nesting-navigators) if
you'd like some more depth.

### Params

One important concept when it comes to navigation, whether that be a website, an
API or a mobile app, it that of _parameters_. Params allow us to pass
information directly into the route we're visiting as part of the request. Learn
about [how to handle params](https://reactnavigation.org/docs/params) in React
Navigation.

### Explore

We've got the basic ideas of navigation down, so feel free to take a deep dive
into any part of the documentation which catches your attention. Perhaps you
want to learn how to [open a modal](https://reactnavigation.org/docs/modal) or
do some fancy
[animations](https://reactnavigation.org/docs/shared-element-transitions)?

## Network and storage

Some apps don't need internet access to work (like the calculator app on your
phone) - but the vast majority need to reach out to APIs in order to work. We
also want to be able to use some storage on the user device to cache data, e.g.
to make our apps work offline. Andriod and iOS have very different ways of
achieving these things, but amazingly React Native and its libraries wrap all of
this into one API making it relatively simple to achieve.

### API Fetching

Often, we will need to fetch some data from a backend API. The good news is
that, because React Native is essentially just javascript, we can use the
familiar fetch API! Let's take a look at
[how fetching is done in React Native](https://reactnative.dev/docs/network).
Feel free to play around with
[any API you like](https://github.com/public-apis/public-apis) (hint: to make
your life as easy as possible, choose an API that doesn't require an API key so
you can just hit the endpoint to get some results).

### Device storage

It is very common to need to put some data on the user's device. Android and iOS
have different ways of doing this, but fortunately the React Native community
have created the
[Async Storage](https://react-native-async-storage.github.io/async-storage/)
library which wraps the storage strategies into a single interface. Learn
[how to install](https://react-native-async-storage.github.io/async-storage/docs/install)
and setup this library, then experiment with
[how to use it](https://react-native-async-storage.github.io/async-storage/docs/usage).

### Security

Fetching and the Async Storage API are very useful, but can open you up to
security concerns if used improperly. The React Native docs have a
[guide on security](https://reactnative.dev/docs/security) which addresses when
and when not to use Async Storage. This page contains more notes on
Authentication and OAuth2 which you will be familiar with from your backend
module, so feel free to read through it and understand how this works in React
Native.

## Testing and tooling

### Debugging

When our apps start using network calls and async storage, they get more
complex, and it becomes more important to be able to efficiently debug our
codebase. The docs have [a guide](https://reactnative.dev/docs/debugging) on
this, including the indispensible
[React Dev Tools](https://reactnative.dev/docs/react-devtools).

### Unit, integration and e2e testing

When it comes to testing, the great news is that React Native ships with Jest
installed and configured! The
[excellent guide](https://reactnative.dev/docs/testing-overview) in the docs
covers unit testing, integration testing and e2e testing with Jest.

### Testing tools

Whilst we're talking about testing, it is good to know that there are some
dedicated frameworks for testing mobile apps which you might be interested to
explore. [Detox](https://github.com/wix/detox/) and
[Maestro](https://maestro.mobile.dev/) could be of interest if you'd like to go
deeper into the world of testing.

### Javascript engine

If you have the time, it is worth understanding a bit more about the tooling
that React Native uses under the hood: in particular, the way it handles
[javascript](https://reactnative.dev/docs/javascript-environment) and the
[Hermes engine](https://reactnative.dev/docs/hermes).

## Using components and APIs

### Core components

React Native gives you access to some components to use when building your apps.
The official docs are just a little bit harder to follow, so I'd recommend
taking a look at the
[core components](https://www.reactnative.express/core_components) examples on
React Native Express. Some of these will be familiar from earlier in the
learning plan.

### Component libraries

The core components are great, but they're a bit boring.
[React Native Elements](https://reactnativeelements.com/docs) is a library of
components which you can use to create beautiful UI and awesome experiences.
Take a look, get it installed, then pick up and experiment with a few of them.
There's great fun to be had here!

### Mobile APIs

Finally, React Native exposes some
[extremely useful APIs](https://reactnative.dev/docs/accessibilityinfo) on the
device for you to use. This is what differentiates mobile apps from regular web
apps! Have a look through them and play around with some locally - take a look
at animations, keyboard events, vibration, or anything else that looks
interesting!

## Make something

You should definitely have a go at making something with your skills, it's the
best way to consolidate what you have learned. Feel free to come up with your
own idea, or try out one of the ideas below:

### Recipe App

Build a recipe app that allows users to save their recipes. They should input
the ingredients and the method and then be able to view their recipes. You could
add a feature where they can input the number of people they're cooking for and
it will adjust for them (e.g. if 200g flour is enough for 4 people, then 300g
flour is needed for 6 people).

### Fitness Tracker

Develop a fitness tracker app that lets users record and track their workouts,
including exercises, sets, reps, and rest times. You can also provide progress
charts and statistics. This project will involve managing user data and
fitness-related calculations.
