import React from "react"

function CityCard(props) {
  return (
    <div className="city" onClick={props.onClick}>
      <h4>
        {props.city.name}, {props.city.country}
      </h4>
      <img
        className="cityPic"
        src={props.city.posts[0].pictures[0].url}
        alt="pics"
      />
    </div>
  )
}

export default CityCard
