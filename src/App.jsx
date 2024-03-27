import { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { UncontrolledLogin } from "./components/UncontrolledLogin";

function App() {
  return (
    <>
      <Login />
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
