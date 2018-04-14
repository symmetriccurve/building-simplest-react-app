We will be following steps to build the app, pausing to understand Life cycle methods

Creating React Component
    ES5 Way of creating
    ES6 Way of creating
Understanding Render - LCM
  Common Errors and fixes
  Conditional Rendering
  Adding Class Names and Ids
Understanding State - Constructor - LCM
    Adding Data to State
    Access Data from State
Understanding ComponentWillMount - LCM
    Setting State
Understanding ComponentDidMount - LCM
    Setting State

Difference between ComponentWillMount and ComponentDidMount

Adding 3 products to State - [ {name:'Apple',price:'$10'}, {name:'Orange',price:'$10'}, {name:'Banana',price:'$10'} ]
Access 3 products in Render

Create a Product Card
  Q: Can we create another react component inside same file ?
  With Product name
  With Product price
  With Add Button
  With Remove Button
Import Product Card in to App
  Understanding of creating Child components and using them.
Using ProductCard
Passing Data to ProductCard - Pass name and price of product as props
  Understanding of props
  Understanding of passing data from parent to child
Prop Validation in Product Card - Handle if prop is not passed

Assignment:  
Create any type of Card Ex: Greeting Card, Visiting Card, Business Card and miss a prop and handle it inside the component
Learn about other propTypes: <link here>

Create SearchBar
  Understanding of Synthetic Events

Assignment:  
Create  a Header Components and place it in between SearchBar and ProductCards,
The Header Component Should take prop itemsInCart and display Cart Count: and props, Ex: if props is 10, Header should show Cart Count: 10

Create AddToCart function on App and pass it to each ProductCard
  Understanding of passing functions as props

Trigger AddToCart from App in ProductCard
  Understanding of passing data from child to parent
Definition of AddToCart

Assignment:  
Create  a function removeFromCart and pass it to ProductCard components and trigger from Product Card and write definition of removeFromCart.

Creating a ProductContainer component
Using ProductContainer in App.
Passing props and functions into ProductContainer then to ProductCards


Making a API call in App.
  Understanding of API call in ComponentDidMount.
Handle ProductContainer if products are not available
  Understanding of Conditional Rendering
Logging Props in ComponentWillReceiveProps of ProductContainer
  Understanding of ComponentWillReceiveProps LCM - nextProps
