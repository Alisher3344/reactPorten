const Header = () => (
  <header>
    <div className="container d-flex">
      <div className="header_flex">
        <img src="phone.svg" alt="Phone" />
        <p>8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00</p>
      </div>
      <div className="header_flex">
        <img src="logout.svg" alt="Logout" />
        <p>Войти / Регистрация</p>
      </div>
    </div>
  </header>
);
export default Header;