import "./card.css"

export default function Card({title, image}){
    return(
        <div className="CardStyle" style={{backgroundImage: `url(${image})`}} >
            <div className="DownSection">
                <h2 className> {title} </h2>
            </div>
        </div>
    )
}