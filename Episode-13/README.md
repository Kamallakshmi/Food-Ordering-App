<!-- Structure of the components
Header
    -Logo
    -Nav Items
Body
    -Search
    -RestaurantContainer
        -RestaurantCard
        -img
        -Name of Res, Star rating, cuisine, deilvery time..
Footer
    -Copyright
    -Links
    -Address
    -Contact -->

Two types of Export/Import

1. Default Export/Import
   export default Component;
   import Component from "path"
2. Names Export/Import
   export const Component;
   import {Component} from "path";

# React Hooks

They are normal JS functions.
There are multiple react hooks.
2 important react hooks

- useState() - super power state varaible and import using named import [eg. {useState}]
- useEffect() -

Routing in WEB apps

- Client side routing - Not making any network call when moving towards the page. It just load the component(About, Contact). It only make network call the fetch the API.(Single Page Application)
- Server side routing - We have a about.html, contact.html page if we click the anchor tag (/about) it reload the whole page and send the network call to About.html(this About.html coming from server) and fetched that page and renders that to web page.

# Redux Toolkit

    - Install @reduxjs/toolkit and  react-redux(we need this two lib to work with redux)
    - Build our store
    - Connect our store to our app
    - Slice(cartSlice)
    - Dispatch(action)
    - Selector(read the data)

# Types of Testing (developer)

    - Unit Tesing
    - Integration Testing
    - End to End Testing - e2e testing

# Setting Up Testing in our App

    - Install React Testing Library
    - Installed Jest
    - Installed Babel dependencies
    - Configure Babel
    - Configure Parcel Config file to disable default Babel transpilation
    - Jest Configuration (BY npx jest --init)
    - Install jsdom library
    - Install @babel/preset-react - to make JSX work in test cases
    - Include @babel/preset-react inside my babel config
    - Install @testing-library/jest-dom - to make sure toBeInTheDocument() will work
