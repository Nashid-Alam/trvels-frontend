import React from "react"

function BlogCard(props) {
  return (
    <div className="blogPage" onClick={props.onClick}>
      <h4>{props.blog.title}</h4>
      <h4>
        <img className="cityPic" src={props.blog.pictures[0].url} alt="pics" />
      </h4>
    </div>
  )
}

export default BlogCard
