import "./card.css"

export default function Card({ title, image, description }) {
  return (
    <div className="CardContainer">
      <div className="Card">
        <div className="CardFront">
          <img className="CardStyle" src={image} alt="foto" />
          <div className="DownSection">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="CardBack">
          <h3>{description}</h3>

        </div>
      </div>
    </div>
  )
}
