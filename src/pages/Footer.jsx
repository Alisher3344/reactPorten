const Footer = () => (
  <footer>
    <div className="container">
      <h2 className="SectionH2">Наши бренды</h2>
      <div className="hr"></div>
      <div className="ImgsDiv">
        {[...Array(4)].map((_, index) => (
          <img key={index} src="footerlogo.svg" alt="Brand" />
        ))} 
      </div>
    </div>
  </footer>
);

export default Footer;
