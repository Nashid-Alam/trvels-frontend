import axios from "axios"
import React, { useEffect, useState } from "react"
import EditDiscussionCard from "./EditDiscussionCard"
const BASE_URL = process.env.REACT_APP_BASE_URL


function DiscussionCard(props) {
  const [displayEditForm, setDisplayEditForm]=useState(false)
  const deleteDiscussion = async (e) => {
    e.preventDefault()
    const response = await axios.delete(
      `${BASE_URL}/blog-api/discussions/${props.discussion.id}`
    )
    console.log(response)
  }
  const openUpdateForm =(e) =>{
    setDisplayEditForm(true)
  }
  return (
    <div>
      {displayEditForm ?(<EditDiscussionCard discussion={props.discussion} setDisplayEditForm={setDisplayEditForm}/>):(
      <div>
      {/* <h3>{props.discussion.author}</h3> */}
      <p>{props.discussion.content}</p>
      <button onClick={deleteDiscussion}>delete</button>
      <button onClick={openUpdateForm}>update</button>
      </div>)}

    </div>
  )
}

export default DiscussionCard
