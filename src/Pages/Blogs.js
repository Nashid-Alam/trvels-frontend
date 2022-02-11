import React, { useEffect, useState } from "react"
import axios from "axios"
import BlogCard from '../components/BlogCard'

const BASE_URL = process.env.REACT_APP_BASE_URL

function Blogs(props) {
  const [blogs, setBlogs] = useState([])
  const [city, setCity] = useState({})
  const city_id = props.match.params.city_id

  const getCityInfo = async () => {
    const response = await axios.get(`${BASE_URL}/blog-api/cities/${city_id}`)
    setCity(response.data)
    setBlogs(response.data.posts)
  }

  useEffect(() => {
    getCityInfo()
  }, [])

  return (
    <div>
      <h1>List of Blogs in {city.name}</h1>
      {blogs.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            blog={blog}
            // onClick={() => props.history.push(`/blogs/${city.id}`)}
          />
        )
      })}
    </div>
  )
}

export default Blogs
