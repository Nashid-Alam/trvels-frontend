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
    <div>
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
  )
}

export default Cities
