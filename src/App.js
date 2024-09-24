import React from "react";
import Navbar from "./components/Navbar";
import SessionPage from "./components/SessionPage";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <SessionPage />
    </div>
  );
}

export default App;
