import React, { Component } from "react";
import "firebase/firestore";
import "firebase/functions";
import Login from "./components/Login";
import AddBook from "./components/AddBook";

const App = () => (
  <div className="container">
    <AddBook />
  </div>
);

export default App;
