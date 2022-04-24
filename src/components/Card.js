import React from "react"


export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.image} alt="sports althlete" className="card--image" />
            <div className="card--stats">
                <img src={props.imgStar} alt="star icon" className="card--star" />
                <span>{props.star_rating}</span>
                <span>({props.num_rated}) • </span>
                <span>{props.country}</span>
            </div>
            <p>{props.quote}</p>
            <p>From ${props.charge} / person</p>
        </div>
    )
}