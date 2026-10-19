import ImageSlot from './ImageSlot.jsx'

const products = [
  { name: 'Rubber Molded Parts', desc: 'Compression, transfer & injection molding.', img: 'https://i.postimg.cc/QCRXsvsy/elastomeric-molded-parts-500x500-1-e1641223603584.png' },
  { name: 'Rubber Diaphragms', desc: 'Homogeneous & fabric-reinforced membranes.', img: 'https://i.postimg.cc/hjXvBLTg/product-range-new-2.jpg' },
  { name: 'Oil Seals', desc: 'Rotary & static shaft sealing to spec.', img: 'https://i.postimg.cc/cHzWMPK6/oil-seal-(1).jpg' },
  { name: 'O-Rings', desc: 'Custom & standard sizes in any elastomer.', img: 'https://i.postimg.cc/sgJv9Dsb/o-rings.jpg' },
  { name: 'Extruded Rubber', desc: 'Custom profiles, cords and tubing.', img: 'https://i.postimg.cc/HxFxsr9c/product-range-new-6.jpg' },
  { name: 'PTFE Products', desc: 'Low-friction, chemical-resistant parts.', img: 'https://i.postimg.cc/hvxGJK2b/ptfe.jpg' },
  { name: 'Inflatable Seals', desc: 'Pressure-actuated sealing solutions.', img: 'https://i.postimg.cc/3RN7G3xk/Inflatable-seal.jpg' },
  { name: 'Die-Cut Gaskets', desc: 'Tight-tolerance flat sealing parts.', img: 'https://i.postimg.cc/XJYNgwQq/die-cut.jpg' },
  { name: 'Rubber Sheets & Coated Fabrics', desc: 'Sheet stock & coated textiles.', img: 'https://i.postimg.cc/GhCL7wMN/sheets-2.jpg' },
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
