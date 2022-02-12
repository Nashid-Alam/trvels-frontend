import React from "react"

function CityCard(props) {
  

  return (
    <div>
      <h4 onClick={props.onClick}>
        {props.city.name}, {props.city.country}
      </h4>
      <img src={props.city.posts[0].pictures[0].url} alt="pics" /> 
    </div>
  )
}

export default CityCard
