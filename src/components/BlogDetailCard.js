import React from "react"

function BlogDetailCard(props) {

  return (
    <div>
      <h1>{props.blog.title}</h1>
      <p>{props.blog.description}</p>
      <h4>Safety: {props.blog.safety}</h4>
    </div>
  )
}

export default BlogDetailCard
