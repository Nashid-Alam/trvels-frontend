import React from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL

function EditDiscussionCard(props) {
  console.log(props)
  const editDiscussion = async (e) =>{
    e.preventDefault()
   
    const title = e.target.title.value
    const ownerId = "1"
    const postId = props.blogId
    
    const content = e.target.content.value
    const discussionBody = { 
    title: title,
    content: content
    }
    const response = await axios.put(`${BASE_URL}/blog-api/discussions/${props.discussion.id}`, discussionBody)
    console.log(discussionBody)
    props.setDisplayEditForm(false)
  }
  return (
  <form onSubmit={editDiscussion}>
    <label>Title</label>
    <input type="text" name="title" placeholder="name"/>
    <label>Content</label>
    <textarea type="text" name="content" placeholder="name"/>
    <button>update</button>
  </form>
  )
}

export default EditDiscussionCard;
