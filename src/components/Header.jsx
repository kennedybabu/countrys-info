import React from 'react'
import {BsMoonFill, BsBrightnessHigh} from "react-icons/bs"

const Header = (props) => {
    console.log(props.darkMode) 

    
    const darkMode = {
        backgroundColor: '#2b3945',  
        color: 'white'
    }      
      
    const lightMode = {
        backgroundColor : 'white',
        color: 'black'
      }
  
  return (
    <div style={props.dark ? darkMode : lightMode} className='bottom-shadow w-full flex justify-between px-[1rem] h-[100px] items-center'> 
        <p className='text-[16px] font-[800]'>Where in the world?</p>
        <div className='h-full flex justify-between items-center' onClick={props.handleChange}>
            {props.dark ? (
                 <div className='h-full flex justify-between items-center'>
                 <BsBrightnessHigh className='mr-[.5rem] text-[12px]' />
                 <p className='text-[14px] font-[600]'>Light Mode</p>
            </div>
            ) : (
                <div className='h-full flex justify-between items-center'>
                    <BsMoonFill className='mr-[.5rem] text-[12px]' />
                    <p className='text-[16px] font-[600]'>Dark Mode</p>
                </div>                
            )}         
          
        </div>
    </div>
  )
}

export default Header