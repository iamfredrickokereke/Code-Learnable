// create a variable and store a new react element.

const Para = React.createElement(
  "h2",
  null,
  "Welcome, this is my first react code"
);

// Using ReactDom and render method, pass the fields.

ReactDOM.render(Para, document.getElementById("para"));

//using JSX when creating a react element on the DOM
