import React from 'react'

const Country = (props) => {
   
  return (
    <div className='country w-[280px] bg-[#2b3945] mx-auto my-[1rem] rounded-[5px] h-[300px]'>
        <div className='h-[50%] img-wrapper'>
            <img className='h-full w-full' src={props.country['flags'].png} alt="court-of-arms" />
        </div>
        <div className='h-[50%] text-[white] flex flex-col items-start pl-[2rem] py-[1rem]'>
            <h4 className='text-[18px] font-[800] mb-[15px]'>{props.country['name'].common}</h4>
            <p className='text-[14px] font-[600]'>Population:<span className='font-[300]'>{props.country.population}</span></p>
            <p className='text-[14px] font-[600]'>Region:<span className='font-[300]'>{props.country.region}</span></p>
            <p className='text-[14px] font-[600]'>Capital:<span className='font-[300]'>{props.country.capital}</span></p>
        </div>
      
    </div>
  )
}

export default Country