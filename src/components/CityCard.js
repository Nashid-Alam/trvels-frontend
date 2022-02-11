import React from "react"

function CityCard(props) {
  console.log(props.city.posts[0])

  return (
    <div>
      <h4 onClick={props.onClick}>
        {props.city.name}, {props.city.country}
      </h4>
      {/* <img src={props.city.posts[0].pictures[1].url} alt="pics" />  */}
    </div>
  )
}

export default CityCard
