import "./App.css";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Aside from "./pages/Aside";
import Card from "./pages/Card";
import Footer from "./pages/Footer";
import Section from "./pages/Section";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"
function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Header />
      <Nav />
      <Aside />
      <Section />
      <Card />
      <Footer />
    </>
  );
}

export default App;
