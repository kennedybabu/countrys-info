import React, {useState, useEffect} from 'react'
import Country from '../components/Country'
import { Link } from "react-router-dom"
import {nanoid} from "nanoid"
import SearchBar from "../components/SearchBar";


const ListItems = (props) => {
const [dark, setDark] = useState(false)

// const [countrys, setCountrys] = useState([])

// useEffect(() => {
//     getCountrys()
// }, [])

// let getCountrys = async () => {
//     let response = await fetch(`https://restcountries.com/v3.1/all`)
//     let data = await response.json()
      
//     let countries = data.map((country, index) => {
//       const id = nanoid()
//       return {
//           ...country, id: id
//       }
//     })

//     setCountrys(countries)
// } 
const darkMode = {
  backgroundColor: '#202c37',  
  color: 'white'
}


const lightMode = {
  backgroundColor : '#fafafa',
  color: 'black'
}



  return (
    <div className='grid grid-cols-1' style={props.dark ? props.darkMode : props.lightMode}>
        <SearchBar dark={dark} darkMode={darkMode} lightMode={lightMode}/>
        {props.countrys.map((country, index) => {
            return <Country country={country} countrys={props.countrys} id={nanoid()} key={index} dark={props.dark} darkMode={props.darkMode} lightMode={props.lightMode}/>
        })}
    </div>
  )
}

export default ListItems