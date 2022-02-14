import React from "react"
import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL

function EditDiscussionCard(props) {
  // console.log(props)
  const editDiscussion = async (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const content = e.target.content.value
    const discussionBody = {}

    if (title === "") {
      discussionBody.title = props.discussion.title
    } else {
      discussionBody.title = title
    }

    if (content === "") {
      discussionBody.title = props.discussion.content
    } else {
      discussionBody.content = content
    }

    await axios.put(
      `${BASE_URL}/blog-api/discussions/${props.discussion.id}`,
      discussionBody
    )
    props.setDisplayEditForm(false)
  }
  return (
    <form onSubmit={editDiscussion}>
      <label>Title</label>
      <input type="text" name="title" placeholder={props.discussion.title} />
      <label>Content</label>
      <textarea
        type="text"
        name="content"
        placeholder={props.discussion.content}
      />
      <button>update</button>
    </form>
  )
}

export default EditDiscussionCard
