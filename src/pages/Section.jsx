import React from "react";

const Section = () => {
  return (
    <section style={{ overflow: "hidden" }} id="Ikki">
      <div className="card1" data-aos="fade-up-right">
        <h2 className="SectionH2">  СЕЗОН 2020/21</h2>
        <div className="hr"></div>
        <div className="boxCard">
          <div className="cardBenom">
            <div className="cardHead">
              <img src="watch.svg" alt="No img?" />
            </div>
            <div className="cardBody">
              <p>Louis XVI ATHOS</p>
              <p>165 000 руб.</p>
            </div>
          </div>
          <div className="cardBenom">
            <div className="cardHead">
              <img src="watch.svg" alt="No img?" />
            </div>
            <div className="cardBody">
              <p>Louis XVI ATHOS</p>
              <p>165 000 руб.</p>
            </div>
          </div>
          <div className="cardBenom">
            <div className="cardHead">
              <img src="watch.svg" alt="No img?" />
            </div>
            <div className="cardBody">
              <p>Louis XVI ATHOS</p>
              <p>165 000 руб.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card2" data-aos="fade-left">
        <h2 className="SectionH2" id="fix">
          Новая коллекция
        </h2>
        <div className="hr"></div>
        <button className="button_card2">Каталог</button>
      </div>
      <div className="card3" data-aos="fade-up-right">
        <img src="jentelmen.svg" alt="" />
      </div>
      <div className="card4" data-aos="fade-left">
        <h2 className="SectionH2">коллекция 2018</h2>
        <div className="hr" style={{ marginBottom: "40px" }}></div>
        <p className="card4P">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
          ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis
          nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna
          consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus
          facilisi habitasse ipsum interdum dictum aliquet. Velit quis
          ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra
          nulla nullam natoque volutpat curabitur auctor. Viverra viverra
          ullamcorper scelerisque risus dignissim egestas. id aliquam a aliquam
          egestas leo orci pharetra sed diam.
        </p>
        <button className="button_card2">посмотреть коллекцию</button>
      </div>
    </section>
  );
};

export default Section;
