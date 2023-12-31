import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App body */}
      <div className="app__body"></div>
      <Sidebar />
      {/* Feed */}
      {/* {Widgets} */}
    </div>
  );
}

export default App;
