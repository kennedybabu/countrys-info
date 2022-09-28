import React, {useState, useEffect} from 'react'
import Country from '../components/Country'

const ListItems = () => {
const [countrys, setCountrys] = useState([])

useEffect(() => {
    getCountrys()
}, [])

let getCountrys = async () => {
    let response = await fetch(`https://restcountries.com/v3.1/all`)
    let data = await response.json()
    console.log(data)
    setCountrys(data)   
} 

  return (
    <div>
        {countrys.map((country, index) => {
            return <Country country={country} key={index} />
        })}
    </div>
  )
}

export default ListItems