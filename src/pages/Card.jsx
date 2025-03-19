const products = Array(8).fill({
  name: "Louis XVI ATHOS",
  price: "165 000 руб.",
  img: "watch.svg",
});

export default function Card() {
  return (
    <div className="benom" id="Uch">
      <h2 className="SectionH2">новые поступления</h2>
      <div className="hr"></div>
      <div className="gridBox">
        {products.map((product, index) => (
          <div className="cardBenom" key={index}>
            <div className="cardHead">
              <img data-aos="zoom-in-up" src={product.img} alt="No img?" />
            </div>
            <div className="cardBody">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
