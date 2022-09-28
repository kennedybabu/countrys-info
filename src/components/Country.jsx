import React from 'react'

const Country = (props) => {
   
  return (
    <div>
      <p>{props.country['name'].common}</p>
    </div>
  )
}

export default Country