function Card (props) {

    return (
        <div className="card" data-aos="fade-up" data-aos-duration="1000">
            <img src={props.img} alt={props.title}/>
            <div className="info">
                <h3>{props.title}</h3>
                <h4>{props.genre}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Card;