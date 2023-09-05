import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Personality from "./components/Personality";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <div style={{ maxHeight: "1000px" }}>
        <Header />
        <Navbar />
        <About />
        <Personality />
        <Projects />
        <Contacts />
        <EmailForm />
        <Footer />
      </div>
    </main>
  );
};

export default App;
