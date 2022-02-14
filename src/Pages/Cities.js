import React, { useEffect, useState } from "react"
import CityCard from "../components/CityCard"
import axios from "axios"
const BASE_URL = process.env.REACT_APP_BASE_URL

function Cities(props) {
  const [cities, setCities] = useState([])
  const getAllCities = async () => {
    const response = await axios.get(`${BASE_URL}/blog-api/cities/`)
    setCities(response.data)
  }

  useEffect(() => {
    getAllCities()
  }, [])

  return (
    <div className="page">
      <h1 className="appName"> My Trvels </h1>
      <h4 className="description">
        {" "}
        Welcome to Nashid's Travel blog! Select any destinations below on tips
        and tricks on traveling the globe this year, starting with the
        destinations below
      </h4>
      <div className="cityCard">
        {cities.map((city) => {
          return (
            <CityCard
              key={city.id}
              city={city}
              onClick={() => props.history.push(`/blogs/${city.id}`)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Cities
