import React from 'react'

const Country = (props) => {
   
  return (
    <div className='w-[280px] bg-[#2b3945] mx-auto my-[1rem] rounded-[5px] h-[300px]'>
        <div className='h-[50%]'>
            <img className='h-full w-full' src={props.country['flags'].png} alt="court-of-arms" />
        </div>
        <div className='h-[50%] text-[white] flex flex-col items-center'>
            <p>{props.country['name'].common}</p>
        </div>
      
    </div>
  )
}

export default Country