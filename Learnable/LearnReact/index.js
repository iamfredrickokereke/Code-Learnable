// create a variable and store a new react element.

const Header = React.createElement(
  "h2",
  null,
  "Welcome, this is my first react code"
);

// Using ReactDom and render method, pass the fields

ReactDOM.render(Header, document.getElementById("parameter"));
