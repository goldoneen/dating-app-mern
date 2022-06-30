import "./App.css";
import React from "react";
import Header from './components/Header';
import DatingCards from './components/DatingCards';
import SwipeButton from "./components/SwipeButtons";
function App() {
  return (
    <div className="app">
      <Header />
      <DatingCards />
      <SwipeButton />
    </div>
  );
}
export default App;
