# iOS App Development with SwiftUI

Developing iOS apps has evolved significantly since the inception of the App
Store in 2008. Initially, iOS app development required knowledge of Objective-C,
Apple's proprietary programming language. However, in 2014, Apple introduced
Swift, a more modern and developer-friendly language, which has since become the
preferred choice for iOS app development.

Today, iOS app development offers a wide range of possibilities, thanks to the
rich ecosystem of Apple's devices and software. Developers can create apps for
iPhones, iPads, Apple Watches, and even Apple TV, tailoring experiences to each
platform's unique capabilities. With ARKit and Core ML, augmented reality and
machine learning functionalities have become accessible, enabling developers to
build immersive and intelligent apps.

iOS development does come with its idiosyncrasies. Apple's stringent App Store
review process ensures high-quality and secure apps but can sometimes lead to
delays in publishing updates. Adhering to Apple's Human Interface Guidelines is
crucial for delivering a seamless user experience. Additionally, iOS development
often requires close attention to device-specific factors, such as varying
screen sizes and resolutions.

For tooling, Xcode is the primary integrated development environment (IDE) used
for iOS app development. It provides a robust set of tools for coding,
debugging, and testing, along with an interface builder for designing app
interfaces visually. Developers also rely on Swift and Objective-C for coding,
along with libraries and frameworks like UIKit, SwiftUI, and Cocoa Touch to
streamline development.

In summary, iOS app development has come a long way, offering diverse
functionality and device compatibility. However, developers must navigate
Apple's strict guidelines and take advantage of the versatile tooling provided
by Xcode and the iOS development ecosystem to create successful and
user-friendly applications.

## 1. Getting started

For our first session, we're going to focus on setting up our development
environment, and jumping into the documentation to get stuck in with the basics.
First things first, in order to develop native iOS apps, you really do need to
be working on a Mac with OSX as the operating system. The developer experience
without a Mac is frustrating to say the least.

If you would like to build mobile apps for iOS whilst developing on Windows or
Linux, we recommend you take a look at the React Native learning plan.

With that out of the way, let's get going!

1. Have a read through the features of
   [XCode](https://developer.apple.com/xcode/) and get it installed on your
   system. Also have a look at the features of
   [SwiftUI](https://developer.apple.com/xcode/swiftui/), which gets installed
   alongside XCode.

2. Have a read through the essentials section of the documentation:

   - [Creating an XCode project](https://developer.apple.com/documentation/xcode/creating-an-xcode-project-for-an-app)
   - [Creating your app's interface](https://developer.apple.com/documentation/xcode/creating-your-app-s-interface-with-swiftui)
   - [Building and running an app](https://developer.apple.com/documentation/xcode/building-and-running-an-app)

3. iOS app development is done in Swift. Before we go on, it is a good idea to
   skim through the
   [guided tour](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour)
   which will take you through the key features of the language. Do not worry
   about deeply understanding everything here, just read through as quickly as
   you comfortably can to get a flavour for Swift.

4. We're going to be building a fully functional app using SwiftUI called
   Scrumdinger. Take a look at the
   [Scrumdinger introduction page](https://developer.apple.com/tutorials/app-dev-training/getting-started-with-scrumdinger)
   to get an idea for what we're building.

5. Finally, work through the
   [first tutorial](https://developer.apple.com/tutorials/app-dev-training/using-stacks-to-arrange-views)
   to create the project and set up your first views using XCode and SwiftUI.

## 2. User interface and layout

We're going to go deeper into building out UI features, looking at navigation
and input handling. The way these concepts are handled in iOS/SwiftUI
development closely mirrors

1. "Cards" are a very common in modern UI development, and iOS apps are no
   different. Work through the steps for
   [creating a card view](https://developer.apple.com/tutorials/app-dev-training/creating-a-card-view).

2. Often, we have a data structure such as an array which we would like to
   display to the user. Printing the raw array to the screen is not what we want
   here, so let's learn how to
   [display a list of data](https://developer.apple.com/tutorials/app-dev-training/displaying-data-in-a-list)

3. Users need to navigate around our app. To enable this, there are navigation
   bars, side menus, footer trays and more. Let's learn how to allow users to
   intuitively navigate our app with a
   [navigation heirarchy](https://developer.apple.com/tutorials/app-dev-training/creating-a-navigation-hierarchy).

4. As our app gets more complex, we will have more views and components
   accessing the same data. How should our data flow around the app? Take some
   time to
   [read about data flow](https://developer.apple.com/tutorials/app-dev-training/managing-data-flow-between-views)
   to ensure you have the main concepts down.

5. Almost any app we make is goig to require user input! Let's bring together
   everything we've learned by allowing users to
   [edit scrums](https://developer.apple.com/tutorials/app-dev-training/creating-the-edit-view).

## 3. Data and state management

Handling data and state are fundamental concepts in UI development. When a piece
of data can be viewed and modified from several different places in your app,
it's important that they are all aware of the current state of that data. iOS
apps make use of a common pattern: the idea of a data store, which represents
the source of truth. In this section, we will learn about how to implement this
pattern and pass data around the app.

1. Learn about
   [data bindings](https://developer.apple.com/tutorials/app-dev-training/passing-data-with-bindings)
   by adding functionality allowing your users to pick a theme.

2. In order to proceed, we need to learn a bit more about classes.
   [Read the primer](https://developer.apple.com/tutorials/app-dev-training/making-classes-observable)
   on observability.

3. Event driven apps makes use of the observer pattern to trigger actions when
   something changes. Read about
   [events in iOS apps](https://developer.apple.com/tutorials/app-dev-training/responding-to-events)
   to get the background you need.

4. We're now ready to study and implement the
   [state lifecycle](https://developer.apple.com/tutorials/app-dev-training/managing-state-and-life-cycle).
   This is quite a deep dive so make sure to take your time with this step and
   understand what's going on.

5. Finally, let's allow our users to add new scrums as we learn about
   [updating app data](https://developer.apple.com/tutorials/app-dev-training/updating-app-data).


