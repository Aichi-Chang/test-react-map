import React from 'react'

export default function Control({ data }) {
  console.log(data.features)

  

  return (
    <div className='control-panel'>
      <div>construction material: Gravel
        {data.features.map((detail, i) => {
          if (detail.properties.material === 'Gravel') {
            return <div key={i}>
              {detail.properties.material}
            </div> 
          } else {
            return null
          }
        })} 
      </div>
    </div>
  )
}
