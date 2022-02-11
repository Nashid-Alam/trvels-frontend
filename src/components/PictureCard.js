import React from "react"

function PictureCard(props) {
  return (
    <div>
      <img src={props.picture.url} alt="pics" />
    </div>
  )
}

export default PictureCard
