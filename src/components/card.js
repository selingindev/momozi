import "./card.css"
import { useState } from 'react'
export default function Card({ title, image }) {
    var [isOpen, setIsOpen] = useState(false);
    return (
        <div className="ContainerCondition">
            {isOpen = false ?
            <h1>ola</h1>
            :
            <button className="ButtonImage" onClick={ () => setIsOpen(isOpen === true) }  >
                
                <img className="CardStyle" src={image} />
                
                <div className="DownSection">      
                    <h2 className> {title} </h2>
                </div>
            </button>
            }
        </div>
    )
}