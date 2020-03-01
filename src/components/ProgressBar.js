import React from 'react'

import Filter from './Filter'

export default function ProgressBar(props) {
  return (
    <div className='progressBar'>
      <Filter percentage={props.percentage} /> 
    </div>
  )
}
