const Nav = () => (
  <nav >
    <div className="container d-flex">
      <h1 className="h1Nav">PORTEN</h1>
      <div className="elem_right">
        <ul>
          <li className="navLi">
            <a href="#Bir">Понравилось</a>
          </li>
          <li className="navLi">
            <a href="#Ikki">Личный</a>
          </li>
          <li className="navLi">
            <a href="#Uch">Настройки</a>
          </li>
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
