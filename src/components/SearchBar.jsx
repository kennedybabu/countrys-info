import React from 'react'
import {BsSearch} from "react-icons/bs"
const SearchBar = () => {
  return (
    <div className='w-full bg-[#202c37] h-[70px] flex justify-center items-center'>
        <div className='w-[90%] flex items-center rounded-[5px] bg-[#2b3945] pl-[1rem]'>
            <BsSearch className='text-[white] text-[14px]'/>
            <input className="search w-[80%] h-[40px] pl-[2rem] bg-[#2b3945] text-[12px] font-[800] text-[white]" placeholder='Search for a country...' type="text" />
        </div>
    </div>
  )
}

export default SearchBar