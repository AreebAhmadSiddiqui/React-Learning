import Test from "./Test"
import React from "react";

function App() {

  const vdom = React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Hello React"),
    React.createElement("p", null, "This is a virtual DOM example")
  );

  console.log("Virtual DOM object:", vdom);


  return (
    <>
    <h1>Hello World</h1>
    <Test />
    </>
  )
}

export default App
