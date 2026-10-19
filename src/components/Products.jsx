import ImageSlot from './ImageSlot.jsx'

const products = [
  { name: 'Rubber Molded Parts', desc: 'Compression, transfer & injection molding.', img: 'https://i.postimg.cc/4xK2W5xD/3e9d4acb442e2d46ebd907eae64f7b1c.jpg' },
  { name: 'Rubber Diaphragms', desc: 'Homogeneous & fabric-reinforced membranes.', img: 'IMG-05' },
  { name: 'Oil Seals', desc: 'Rotary & static shaft sealing to spec.', img: 'IMG-06' },
  { name: 'O-Rings', desc: 'Custom & standard sizes in any elastomer.', img: 'IMG-07' },
  { name: 'Extruded Rubber', desc: 'Custom profiles, cords and tubing.', img: 'IMG-08' },
  { name: 'PTFE Products', desc: 'Low-friction, chemical-resistant parts.', img: 'IMG-09' },
  { name: 'Inflatable Seals', desc: 'Pressure-actuated sealing solutions.', img: 'IMG-10' },
  { name: 'Die-Cut Gaskets', desc: 'Tight-tolerance flat sealing parts.', img: 'IMG-11' },
  { name: 'Rubber Sheets & Coated Fabrics', desc: 'Sheet stock & coated textiles.', img: 'IMG-12' },
]

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">OUR PRODUCTS</p>
          <h2 className="section__title">Nine product families, one custom standard</h2>
          <p className="section__subtitle">
            Every part is engineered to your specification — never pulled from stock.
            Prototype through production.
          </p>
        </div>

        <div className="products__grid">
          {products.map((p) => (
            <article key={p.name} className="product-card">
              <div className="product-card__media">
                <ImageSlot tag={p.img} ratio="square" />
              </div>
              <div className="product-card__body">
                <h3 className="product-card__name">{p.name}</h3>
                <p className="product-card__desc">{p.desc}</p>
                <a href="#contact" className="product-card__link">
                  View <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
