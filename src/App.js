// src/App.js
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home"; 

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />
      
      
      <main className="flex-grow">
        <Home />
      </main>

      
      <Footer />
    </div>
  );
}

export default App;
