import React from 'react'
import { useParams } from "react-router-dom";


const CountryPage = (props) => {
  const {id} = useParams()

  console.log(id)

  return (
    <div>
      <p> this is your id:{id}</p>
    </div>
  )
}

export default CountryPage