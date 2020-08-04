import React from "react";
import Navbar from "./components/layout/Navbar";
import MainView from "./components/mainView/MainView";
import HamburgerIcon from "./components/layout/HamburgerIcon";
import ProjectsView from "./components/projects/ProjectsView";
import AboutView from "./components/about/AboutView";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HamburgerIcon />
      <MainView />
      <ProjectsView />
      <AboutView />
      <Footer />
    </>
  );
}

export default App;
