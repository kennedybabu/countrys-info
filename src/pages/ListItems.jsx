import React, {useState, useEffect} from 'react'
import Country from '../components/Country'

const ListItems = (props) => {
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
    <div className='grid grid-cols-1' style={props.dark ? props.darkMode : props.lightMode}>
        {countrys.map((country, index) => {
            return <Country country={country} key={index} />
        })}
    </div>
  )
}

export default ListItems