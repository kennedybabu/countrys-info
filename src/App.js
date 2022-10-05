import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import CountryPage from "./pages/CountryPage";
import ListItems from "./pages/ListItems";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {nanoid} from "nanoid"

function App() {
const [dark, setDark] = useState(false)

const darkMode = {
  backgroundColor: '#202c37',  
  color: 'white'
}


const lightMode = {
  backgroundColor : '#fafafa',
  color: 'black'
}


function handleChange() {
  setDark(!dark)
}

const [countrys, setCountrys] = useState([])

useEffect(() => {
    getCountrys()
}, [])

let getCountrys = async () => {
    let response = await fetch(`https://restcountries.com/v3.1/all`)
    let data = await response.json()
      
    let countries = data.map((country, index) => {
      const id = nanoid()
      return {
          ...country, id: id
      }
    })

    setCountrys(countries)
} 

  return (
    <BrowserRouter>
      <div className="text-[16px]" style={dark? darkMode : lightMode}>      
        <Header handleChange={handleChange} dark={dark} darkMode={darkMode} lightMode={lightMode}/>
        {/* <SearchBar dark={dark} darkMode={darkMode} lightMode={lightMode}/> */}
        {/* <ListItems dark={dark} darkMode={darkMode} lightMode={lightMode}/>     */}
        <Routes>
            <Route path="/countrypage/:id" element={<CountryPage countrys={countrys}/>}/>
            <Route path="/" element={<ListItems countrys={countrys} dark={dark} darkMode={darkMode} lightMode={lightMode}/>} />
        </Routes>     
      </div>
    </BrowserRouter> 
  );
}

export default App;
