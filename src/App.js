import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
