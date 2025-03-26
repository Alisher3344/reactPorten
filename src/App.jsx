import "./App.css";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Aside from "./pages/Aside";
import Card from "./pages/Card";
import Footer from "./pages/Footer";
import Section from "./pages/Section";

import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

function App() {
  const [topClass, setTopClass] = useState("top");

  useEffect(() => {
    AOS.init({});

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setTopClass("top");
      } else {
        setTopClass("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <Aside />
      <Section />
      <Card />
      <Footer />
      <a href="#" style={{ position: "absolute" }}>
        <div className={topClass} id="top">
          <button className="button">
            <svg viewBox="0 0 384 512" className="svgIcon">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </button>
        </div>
      </a>
    </>
  );
}

export default App;
