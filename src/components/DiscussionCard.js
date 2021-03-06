import axios from "axios"
import React, { useState } from "react"
import EditDiscussionCard from "./EditDiscussionCard"
const BASE_URL = process.env.REACT_APP_BASE_URL

function DiscussionCard(props) {
  const [displayEditForm, setDisplayEditForm] = useState(false)

  const deleteDiscussion = async (e) => {
    e.preventDefault()
    await axios.delete(
      `${BASE_URL}/blog-api/discussions/${props.discussion.id}`
    )
  }
  const openUpdateForm = (e) => {
    setDisplayEditForm(true)
  }
  return (
    <div>
      {displayEditForm ? (
        <EditDiscussionCard
          discussion={props.discussion}
          setDisplayEditForm={setDisplayEditForm}
        />
      ) : (
        <div>
          <h3 className="getDiscussionTitle">{props.discussion.title}</h3>
          <p className="getDiscussion">{props.discussion.content}</p>
          <button onClick={deleteDiscussion}>delete</button>
          <button onClick={openUpdateForm}>update</button>
        </div>
      )}
    </div>
  )
}

export default DiscussionCard
