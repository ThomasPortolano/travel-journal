import Pin from './pin.png'

export default function Card(props){
    return (
        <div className="card">
            <div className="img-container"><img className="image" src={props.card.imageUrl} alt={props.card.title} /></div>
            <div className="info">
                <div className="location">
                    <img className="pin" src={Pin} alt="location pin" />
                    <span className="country">{props.card.location}</span>
                    <span><a href={props.card.url}>View on Google Maps</a></span>
                </div>
            <h2 className="title">{props.card.title}</h2>
            <p className="date"><span>{props.card.startDate}</span> - <span>{props.card.endDate}</span></p>
            <p className="description">{props.card.description}</p>
            </div>
        </div>
    )
}

