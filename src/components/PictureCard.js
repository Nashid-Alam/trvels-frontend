import React from "react"

function PictureCard(props) {
  return (
    <div>
      <h3>{props.picture.name}</h3>
      <img className="pictureCard" src={props.picture.url} alt="pics" />
    </div>
  )
}

export default PictureCard
