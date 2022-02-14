import React from "react"
import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL

function DiscussionPost(props) {
  const addDiscussion = async (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const ownerId = "1"
    const postId = props.blogId
    const content = e.target.content.value
    const discussionBody = {
      title: title,
      owner: ownerId,
      post: postId,
      content: content,
    }
    await axios.post(`${BASE_URL}/blog-api/discussions/`, discussionBody)
  }
  return (
    <form className="DiscussionFrom" onSubmit={addDiscussion}>
      <label>Name</label>
      <input type="text" name="title" placeholder="name" />
      <label>Content</label>
      <textarea type="text" name="content" placeholder="name" />
      <button>Submit</button>
    </form>
  )
}

export default DiscussionPost
