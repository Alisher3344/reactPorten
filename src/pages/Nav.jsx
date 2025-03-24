const Nav = () => (
  <nav>
    <div className="container d-flex">
      <h1 className="h1Nav">PORTEN</h1>
      <div className="elem_right">
        <ul>
          <a className="navLi" href="#Bir">
            {" "}
            <li>Понравилось </li>
          </a>

          <a className="navLi" href="#Ikki">
            <li>Личный </li>
          </a>

          <a className="navLi" href="#Uch">
            {" "}
            <li>Настройки </li>
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
export default Nav;
