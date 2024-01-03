import { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent.js";
import CMyComponent from "./CMyComponent.js";
import ClassCounter from "./ClassCounter";
import Say from "./Say";

function App() {
  const name = "리엑트";
  const age = 21;
  return (
    <>
      <Say />
    </>
  );
}

export default App;
