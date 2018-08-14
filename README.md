# Tree 'Vue' Number Generator

>A Vue.js project implementing mongodb, mongoose, node, node express, socket.io and other technologies to create a persistent, live-updating application with a tree structure. Root(parent) => Factory(child) => grandchild

Deployed Application: https://tree-vue-number-gen.herokuapp.com/#/

![index](/src/assets/main.png)

## Concept
The root (Index) of this application allows users to create a factory node which creates random numbers.  A user can specify this factory node to have from 1 to 15 children elements, the range (minimum and maximum number values) of the random numbers (children) and a name for the factory.  Upon generating the random numbers, based on the given parameters, a user can submit this collection and it automatically renders on the client-side page, as well as posts to the MongoDB database.  These factory collections can also easily be modified, regenerated and submitted.  The pages update in real-time through the use of web sockets.

This application is built as a Vue.js single-page-application, which allows for effective two-way data binding, conditional rendering and maintenance of state. Based on user inputs, the virtual-DOM renders the page from the index, to adding a factory to editing a factory, while making use of the Vue Router to generate URLs, all without refreshing the page.  

The application is broken into components in the following structure:
```
<Navbar />
<Index /> || <AddFactory /> || <EditFactory />
<Footer />
```
A Node Express server, with the use of the mongoose npm, allows for the definition of routes and handling server requests.  A MongoDB model is defined and Axios is used to make GET, POST, PUT and DELETE requests. While the random number calculations are handled client-side and rendered to the user, all inputs including the title, min and max numbers, and random numbers are all stored in the database under its own collection with a unique id.

Form input validation is handled through custom validations, with additional validation implemented through Vuelidate, which helps specify input parameters that prevent injection or invalid entires.


## Input Example: bi-directional data binding with user input

![index](/src/assets/examp.png)

## Validation Example: secures inputs, bi-directional data binding provides immediate feedback

![index](/src/assets/valid.png)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
