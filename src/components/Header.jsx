import React from 'react'
import {BsMoonFill} from "react-icons/bs"

const Header = (props) => {
    console.log(props.darkMode) 

  
  return (
    <div style={props.dark ? props.darkMode : props.lightMode} className='w-full text-white bg-[#2b3945] flex justify-between px-[1rem] h-[100px] items-center'> 
        <p className='text-[16px] font-[800]'>Where in the world?</p>
        <div className='h-full flex justify-between items-center' onClick={props.handleChange}>
           <div className='h-full flex justify-between items-center'>
                <BsMoonFill className='mr-[.5rem] text-[12px]' />
                <p className='text-[14px] font-[600]'>Dark Mode</p>
           </div>
        </div>
    </div>
  )
}

export default Header