import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container d-flex1">
        <div className="flex_header">
          <h1 className="h1Nav">PORTEN</h1>
          <img
            className="Hamburger"
            src="hamburger.png"
            alt="No icon"
            onClick={toggleMenu}
          />
        </div>
        <div className={`elem_right ${isOpen ? "open" : ""}`}>
          <ul>
            <a className="navLi" href="#Bir">
              <li>Понравилось</li>
            </a>

            <a className="navLi" href="#Ikki">
              <li>Личный</li>
            </a>

            <a className="navLi" href="#Uch">
              <li>Настройки</li>
            </a>
          </ul>
          <div className="navLogos">
            <img src="karzinka.svg" alt="Cart" />
            <img src="search.svg" alt="Search" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
