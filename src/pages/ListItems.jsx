import React, {useState, useEffect} from 'react'

const ListItems = () => {
const [countrys, setCountrys] = useState([])

useEffect(() => {
    getCountrys()
}, [])

let getCountrys = async () => {
    let response = await fetch(`https://restcountries.com/v3.1/all`)
    let data = await response.json()
    console.log(data)
} 
  return (
    <div>
        list
    </div>
  )
}

export default ListItems