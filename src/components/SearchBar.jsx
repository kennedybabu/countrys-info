import React from 'react'
import {BsSearch} from "react-icons/bs"


const SearchBar = (props) => {
    
    const lightMode = {
        backgroundColor : 'white',
        color: 'black'
    }

    const darkMode = {
        backgroundColor: '#2b3945',
        color: 'white'
    }

  return (
    <div className='w-[90%]  mt-[10px] mx-auto bg-[#202c37] h-[70px] flex justify-center items-center' style={props.dark ? props.darkMode : props.lightMode}>
        <div className='w-[90%] round-shadow flex items-center rounded-[5px] pl-[1rem]' style={props.dark ? darkMode : lightMode}>
            <BsSearch className='text-[14px]'/>
            <input className="search w-[80%] h-[40px] rounded-[5px] pl-[2rem] text-[12px] font-[800]" style={props.dark ? darkMode : lightMode} placeholder='Search for a country...' type="text" />
        </div>
    </div>
  )
}

export default SearchBar