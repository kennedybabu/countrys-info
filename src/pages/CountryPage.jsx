import React from 'react'
import { useParams } from "react-router-dom";


const CountryPage = (props) => {
  //get id from url
  const {id} = useParams()

  // console.log(props.countrys)


  //filter countrys to get a match using the id
  let country = props.countrys.filter((country) => {
      return country.id === id
  })

  console.log(country)
  console.log(country[0].name.common)
  return (
    <div>
      <p>welcome to {country[0].name.common}</p>
    </div>
  )
}

export default CountryPage