import React from 'react'
import { useParams } from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs"


const CountryPage = (props) => {

  //get id from url
  const {id} = useParams()

  //filter countrys to get a match using the id
  let country = props.countrys.filter((country) => {
      return country.id === id
  }) 


  return (
    <div className='w-full h-screen overflow-hidden page pt-4 px-10'>
      <div className='flex items-center w-[70px] h-[20px] justify-between round-shadow'><BsArrowLeft/>Back</div>
      <div className='w-full h-[200px] mx-auto mt-10'>
          <img src={country[0].flags.png} alt="country flag" className='h-full mx-auto'/>
      </div>
      <div className='mt-6'>
        <p className='font-bold text-[18px]'>{country[0]?.name.common}</p>
        <p><span className='font-[600] text-[14px]'>Native Name:</span> {country[0]?.name.nativeName.isl.common}</p>
        <p><span className='font-[600] text-[14px]'>Population:</span> {country[0]?.population}</p>
        <p><span className='font-[600] text-[14px]'>Region:</span> {country[0]?.region}</p>
        <p><span className='font-[600] text-[14px]'>Sub Region:</span> {country[0]?.subregion}</p>
        <p><span className='font-[600] text-[14px] mb-6'>Capital:</span> {country[0]?.capital[0]}</p>

        <p><span className='font-[600] text-[14px] mt-[80px]'>Top Level Domain:</span></p>
        <p><span className='font-[600] text-[14px]'>Currencies:</span> {country[0]?.currencies.ISK.name}</p>
        <p><span className='font-[600] text-[14px]'>Languages:</span> {country[0]?.languages.isl}</p>


      </div>
    </div>
  )
}

export default CountryPage