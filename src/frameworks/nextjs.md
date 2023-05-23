# Next.js

Next.js is a popular React framework for building server-side rendered and
statically generated web applications. It was first released in 2016 by Zeit, a
company that was later acquired by Vercel. Since then, Next.js has gained
popularity in the web development community due to its ability to easily create
scalable and performant web applications.

Next.js was created to solve some of the challenges faced by developers when
building React applications, such as slow initial page load times and difficulty
implementing server-side rendering. It provides features such as automatic code
splitting, server-side rendering, and static site generation out of the box,
making it easier to create high-performing web applications.

In recent years, Next.js has been adopted by many big-name companies like Hulu,
Twitch, and Nike to build their web applications. This has led to increased
community support and the development of many useful plugins and libraries for
Next.js.

This learning plan is designed to provide you with a solid foundation in
Next.js, from the basics of pages and routing to more advanced topics like data
fetching and deployment. By the end of this plan, you should have the skills to
build your own Next.js applications and be well-equipped to continue learning
and exploring the framework on your own.

## Learning Plan Tasks

1. [Introduction to Next.js](#1-introduction-to-nextjs)
2. [Pages and Routing](#2-pages-and-routing)
3. [Data Fetching](#3-data-fetching)
4. [Styling and UI](#4-styling-and-ui)
5. [Deployment and Beyond](#5-deployment-and-beyond)
6. [Build Something with Next.js!](#build-something-with-nextjs-🔨)

## #checkoutTheDocs 🔍

- **Next.js**: [Developer Documentation](https://nextjs.org/docs) the official
  documentation is the best place to start learning Next.js. It's comprehensive
  and easy to understand, and covers all the core concepts and features of the
  framework.
- **Next.js**:
  [Getting Started with Next.js](https://nextjs.org/docs/getting-started/installation)
- **Next.js**: [Next.js Showcase](https://nextjs.org/showcase)
- **Traversy Media**:
  [Next.js Tutorial](https://www.youtube.com/watch?v=mTz0GXj8NN0)
- **Egghead.io**: [Next.js Courses](https://egghead.io/q/next)
- **Discord**: [Next.js Discord Community](http://nextjs.org/discord)

> [Next.js has a great tutorial](https://nextjs.org/learn/foundations/about-nextjs)
> that covers a lot of the components of this learning plan. This is embedded
> throughout, but you may find it helpful to do the entire tutorial at once!

## 1. Introduction to Next.js

This section covers the following topics:

- Read the official Next.js documentation to get a basic understanding of what
  it is and what problems it solves.
- Watch some introductory videos on Next.js on YouTube or Udemy.
- Set up a new Next.js project and explore the file structure and configuration
  options.

By completing these tasks you should have a good understanding of what Next.js
is, what problems it solves, and how to set up a new project. You should also
have a basic understanding of the file structure and configuration options
available in a Next.js project.

### Tasks

1. Read
   [the "Foundations" section on the official Next.js documentation](https://nextjs.org/learn/foundations/about-nextjs)

   - Start by reading the Abut Next.js section on the
     [Next.js documentation website](https://nextjs.org/learn/foundations/about-nextjs),
     which provides an overview of the framework and its features.
   - Then, read through the
     [From JavaScript to React](https://nextjs.org/learn/foundations/about-nextjs)
     section, which covers how JavaScript and React are related.
   - Next, read through
     [From React to Next.js](https://nextjs.org/learn/foundations/from-react-to-nextjs)
     to get an overview of what Next.js is and how to get started.
   - Finally, read through
     [How Next.js Works](https://nextjs.org/learn/foundations/how-nextjs-works)
     to get an overview of how Next.js works.

2. Watch some introductory videos on Next.js

   - There are many free and paid video courses available on platforms like
     YouTube, Udemy, and Egghead that cover Next.js. Choose one or more that
     suit your learning style and preferences.
   - Watch videos that cover the basics of Next.js, such as creating pages,
     using routing, and fetching data.

3. Set up a new Next.js project and explore the file structure and configuration
   options:

   - [Follow the instructions on the Next.js documentation](https://nextjs.org/learn/basics/create-nextjs-app)
     website to set up a new Next.js project using the command-line interface
     (CLI) tool.
   - Once you have set up a new project, take some time to explore the various
     files and directories that are created. The main directories you should
     focus on are `pages/`, `public/`, `styles/`, and `api/`.
   - Open `pages/index.js` with your text editor. Find the text that says
     `“Welcome to”` under the `<h1>` tag and change it to `“Learn”`. Save the
     file to preview your work.
   - Learn about the different configuration options available for your Next.js
     project by exploring the `next.config.js` and `package.json` files.

## 2. Pages and Routing

This section covers the following topics:

- Learn about the pages system in Next.js and how to create different routes for
  your app.
- Experiment with creating new pages and custom routes, including dynamic
  routes.
- Implement basic navigation using Next.js's built-in Link component.

By completing these tasks you should have a good understanding of how Next.js
handles pages and routing, how to create custom routes, and how to implement
basic navigation using the Link component. You should also have some experience
with creating dynamic routes and passing query parameters and state between
pages.

### Tasks

1. Learn about the pages system in Next.js and how to create different routes
   for your app:

   - Read through
     [the Pages section of the Next.js documentation](https://nextjs.org/learn/basics/navigate-between-pages)
     to learn how to create new pages in your app and how Next.js handles
     routing between them.
   - Learn about the different file-based routing options available in Next.js,
     such as dynamic routes and catch-all routes.

2. Experiment with creating new pages and custom routes, including dynamic
   routes:

   - Start by creating a few simple pages in your Next.js app using the `pages/`
     directory. For example, create a home page and an about page.
   - Then, experiment with creating custom routes using file-based routing. For
     example, create a new page at `pages/posts/[slug].js` to handle dynamic
     routes for individual blog posts.
   - Test your routes and pages by navigating to them in your browser and
     ensuring that they load correctly.

3. Implement basic navigation using Next.js's built-in Link component:

   - Use the
     [built-in Link component](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating)
     from Next.js to implement basic navigation between pages in your app.
   - Experiment with passing query parameters and state between pages using the
     as and href props of the Link component.
   - Test your navigation by clicking links and verifying that the correct pages
     load.

4. Build Something! 🔨
   - **Idea #1 - Profile**: Create a personal profile that has multiple pages
     and Link components.
   - **Idea #2 - E-Commerce Website**: Build an online store that contains
     multiple pages (Home, Products, Shopping Cart, Checkout, etc.) that a user
     can navigate between.
   - Build something brand new based on what you have learned so far!

## 3. Data Fetching

This section covers the following topics:

- Learn about the different methods for fetching data in Next.js, such as
  server-side rendering and static site generation.
- Experiment with fetching data from external APIs and rendering it on a page.
- Learn about caching strategies to improve performance.

By completing these tasks you should have a good understanding of the different
methods for fetching data in Next.js, how to fetch data from external APIs, and
how to use caching strategies to improve performance in your app. You should
also have experience with implementing server-side rendering and static site
generation in your app.

### Tasks

1. Learn about the different methods for fetching data in Next.js, such as
   server-side rendering and static site generation:

   - Read through the
     [Data Fetching section of the Next.js documentation](https://nextjs.org/learn/basics/data-fetching)
     to learn about the different methods for fetching data in a Next.js app.
   - Understand the differences between server-side rendering, static site
     generation, and client-side rendering, and when to use each method.

2. Experiment with fetching data from external APIs and rendering it on a page:

   - Choose an external API that you'd like to fetch data from, such as the
     [OpenWeather API](https://openweathermap.org/) or the
     [GitHub API](https://docs.github.com/en/rest).
   - Use the built-in data fetching methods in Next.js, such as
     [`getStaticProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)
     or
     [`getServerSideProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props),
     to fetch data from the API and pass it to a page component.
   - Render the data on the page using React components and Next.js's dynamic
     content rendering features.

3. Learn about caching strategies to improve performance:

   - Read through the
     [Caching section of the Next.js documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/caching)
     to learn about caching strategies that can help improve performance in your
     app.
   - Experiment with different caching strategies, such as using the revalidate
     option in getStaticProps or implementing client-side caching using React's
     useState and useEffect hooks.

## 4. Styling and UI

This section covers the following topics:

- Learn about the different options for styling your Next.js app, including CSS
  modules and CSS-in-JS libraries like styled-components.
- Experiment with creating a basic UI for your app using your preferred styling
  method.
- Learn about responsive design and how to implement it in your Next.js app.

By completing these tasks you should have a good understanding of the different
options for styling your Next.js app, how to create a basic UI using your
preferred styling method, and how to implement responsive design principles in
your app. You should also have some experience with creating responsive
components and layouts using CSS.

### Tasks

1. Learn about the different options for styling your Next.js app, including CSS
   modules and CSS-in-JS libraries like styled-components:

   - Read through the
     [Styling section of the Next.js documentation](https://nextjs.org/docs/app/building-your-application/styling)
     to learn about the different options for styling your app.
   - Understand the benefits and drawbacks of each option, and choose the one
     that best fits your needs.
   - Complete the
     [Assets, Metadata, and CSS](https://nextjs.org/learn/basics/assets-metadata-css)
     section of the app you started building on Day 1.

2. Experiment with creating a basic UI for your app using your preferred styling
   method:

   - Start by creating a basic layout for your app using HTML and CSS.
   - Choose a styling method that you'd like to experiment with, such as CSS
     modules or styled-components, and implement it in your app.
   - Create a few simple components using your chosen styling method, and
     experiment with different CSS styles to create a visually appealing UI.

3. Learn about responsive design and how to implement it in your Next.js app:

   - Read through the Responsive Design section of the Next.js documentation to
     learn about responsive design principles and how to implement them in your
     app.
   - Experiment with implementing responsive design in your app using CSS media
     queries or responsive design frameworks like Bootstrap or Material UI.
   - Test your app on different screen sizes and devices to ensure that it looks
     good and functions correctly.

## 5. Deployment and Beyond

This section covers the following topics:

- Learn about the different deployment options for Next.js, including serverless
  deployment on services like Vercel.
- Deploy your app to a hosting service of your choice.
- Learn about advanced topics such as internationalization and serverless
  functions.

By completing these tasks you should have a good understanding of the different
deployment options for Next.js, how to deploy your app to a hosting service, and
how to implement advanced features such as internationalization and serverless
functions in your app. You should also have experience with configuring and
deploying a Next.js app in a production environment.

### Tasks

1. Learn about the different deployment options for Next.js, including
   serverless deployment on services like Vercel:

   - Read through
     [the Deployment section of the Next.js documentation](https://nextjs.org/docs/pages/building-your-application/deploying)
     to learn about the different deployment options for Next.js apps.
   - Understand the benefits of serverless deployment, such as automatic scaling
     and reduced costs, and learn how to set up a Next.js app for serverless
     deployment.
   - [Deploy the starter app using the Vercel guide](https://nextjs.org/learn/basics/deploying-nextjs-app)

2. Deploy your app to a hosting service of your choice:

   - Pick one of the other Next.js applications you have built in the previous
     sections. Choose a hosting service, such as Vercel, Render, Railway, or
     AWS, and follow their documentation to deploy your Next.js app.
   - Test your deployed app to ensure that it's functioning correctly and that
     any external APIs are still accessible.

3. Learn about advanced topics such as internationalization and serverless
   functions:

   - Read through the Advanced Features section of the Next.js documentation to
     learn about more advanced topics such as
     [internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
     and serverless functions.
   - Choose one or more advanced features to experiment with, such as adding
     support for multiple languages in your app using Next.js's built-in i18n
     support or creating
     [serverless functions](https://nextjs.org/learn/basics/api-routes) using
     Next.js's API Routes feature.

## Build Something with Next.js! 🔨

Here are some project ideas that you can build to test your understanding of
Next.js:

- **Blog**: Create a blog using Next.js that supports server-side rendering and
  data fetching from a CMS like WordPress or Ghost. You can also experiment with
  different UI libraries and styling options to make your blog look great.
- **E-commerce Store**: Build an e-commerce store using Next.js that supports
  server-side rendering and data fetching from an API like Shopify or
  WooCommerce. You can also experiment with different payment processing options
  like Stripe or PayPal.
- **Recipe App**: Build a recipe app using Next.js that supports server-side
  rendering and data fetching from an API like Spoonacular or Edamam. You can
  also experiment with different UI libraries and styling options to make your
  app look great.
- **Movie Finder**: Build a movie finder app using Next.js that supports
  server-side rendering and data fetching from an API like OMDB or The Movie
  Database. You can also experiment with different UI libraries and styling
  options to make your app look great.
- **Portfolio Website**: Build a portfolio website using Next.js that showcases
  your skills and experience as a developer. You can also experiment with
  different UI libraries and styling options to make your website look great.

## Next Steps

- **Build more projects**: Now that you have a good understanding of Next.js,
  you can start building more projects to further test and develop your skills.
  Try building more complex applications, experiment with new features, or
  create your own projects from scratch.
- **Explore the Next.js ecosystem**: Next.js has a large and vibrant ecosystem,
  with many third-party packages and tools that can help you build better and
  more efficient applications. Start exploring the Next.js ecosystem and see
  what other developers are creating.
- **Join the Next.js community**: The Next.js community is active and
  supportive, and joining it can help you stay up-to-date with the latest trends
  and best practices. Join the Next.js Discord server, follow Next.js on
  Twitter, and participate in online forums and discussions.
- **Learn related technologies**: Next.js is just one piece of the modern web
  development stack, and there are many related technologies that you can learn
  to expand your skill set. Consider learning about GraphQL and other popular
  web development tools and technologies.
