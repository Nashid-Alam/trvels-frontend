import React, { useEffect, useState } from "react"
import axios from "axios"
import BlogDetailCard from "../components/BlogDetailCard"
import DiscussionCard from "../components/DiscussionCard"
import PictureCard from "../components/PictureCard"
import DiscussionPost from "../components/DiscussionPost"

const BASE_URL = process.env.REACT_APP_BASE_URL

function Blogdetail(props) {
  const blogId = props.match.params.post_id

  const [blogDetail, setBlogDetail] = useState({})
  const [pictures, setPictures] = useState([])
  const [discussions, setDiscussions] = useState([])

  const getBlogInfo = async () => {
    const response = await axios.get(`${BASE_URL}/blog-api/posts/${blogId}`)
    setBlogDetail(response.data)
    setPictures(response.data.pictures)
    setDiscussions(response.data.discussions)
  }

  useEffect(() => {
    getBlogInfo()
  }, [])

  return (
    <div className="detailPage">
      <div className= "description">
      <BlogDetailCard blog={blogDetail} />
      </div>
      <h1>Pictures</h1>
      <div className="PictureDetail">
      {pictures.map((picture) => {
        return <PictureCard picture={picture} />
      })}
      </div>
      <div className="Discussion">
      <h1>Discussions</h1>
      {discussions.map((discussion) => {
        return <DiscussionCard discussion={discussion} />
      })}
      </div>
      <DiscussionPost blogId={blogId} />
    </div>
  )
}

export default Blogdetail
