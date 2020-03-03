import React from 'react'

import ProgressBar from './ProgressBar'


export default function Control({ data, handleClick }) {

  const dataDetail = data.features.map(elem => {
    return elem.properties.area_
  })

  const zeroFifty = dataDetail.filter(elem => {
    return elem > 0 && elem < 50
  }).length

  const fiftyTwoOO = dataDetail.filter(elem => {
    return elem > 50 && elem < 200
  }).length

  const twoOOFiveTwoSix = dataDetail.filter(elem => {
    return elem > 200 && elem < 526
  }).length



  const gravelNum = data.features.filter(elem => {
    return elem.properties.material === 'Gravel'
  }).length
  const concreteNum = data.features.filter(elem => {
    return elem.properties.material === 'Concrete'
  }).length
  const bitumenNum = data.features.filter(elem => {
    return elem.properties.material === 'Bitumen'
  }).length
  const interlockNum = data.features.filter(elem => {
    return elem.properties.material === 'Interlock Conc Block'
  }).length
  const otherNum = data.features.filter(elem => {
    return elem.properties.material === 'Other'
  }).length

  
  

  return (
    <div>
      <div className='control-panel'>
        <div>Construction Material: </div>
        <section className=''>
          <div className='flex flex-row items-center'>
            <button className='mr2 mb2' value={'Gravel'} onClick={handleClick}>
            Gravel 
            </button>
            <ProgressBar percentage={gravelNum} />
            < p className='ml2'>{gravelNum}</p>
          </div>
          <div className='flex flex-row items-center'>
            <button className='mr2 mb2' value={'Concrete'} onClick={handleClick}>
            Concrete
            </button>
            <ProgressBar percentage={concreteNum} />
            < p className='ml2'>{concreteNum}</p>
          </div>
          <div className='flex flex-row items-center'>
            <button className='mr2 mb2' value={'Bitumen'} onClick={handleClick}>
            Bitumen
            </button>
            <ProgressBar percentage={bitumenNum} />
            < p className='ml2'>{bitumenNum}</p>
          </div>
          <div className='flex flex-row items-center'>
            <button className='mr2 mb2' value={'Interlock Conc Block'} onClick={handleClick}>
            Interlock Conc Block
            </button>
            <ProgressBar percentage={interlockNum} />
            < p className='ml2'>{interlockNum}</p>
          </div>
          <div className='flex flex-row'>
            <button className='mr2' value={'Other'} onClick={handleClick}>
            Other
            </button>
            <ProgressBar percentage={otherNum} />
            < p className='ml2'>{otherNum}</p>
          </div>
        </section>
      </div>

      <div className='control-panel2'>
        <div>Size Category: </div>
        <section>
          <div className='flex flex-row items-center'>
            <button className='mr2 mb2' value={'Other'} onClick={handleClick}>
            0 - 50
            </button>
            <ProgressBar percentage={zeroFifty} />
            < p className='ml2'>{zeroFifty}</p>
          </div>
          <div className='flex flex-row items-center'>
            <button className='mr2 mb2'>
            50 - 200
            </button>
            <ProgressBar percentage={fiftyTwoOO} />
            <p className='ml2'>{fiftyTwoOO}</p>
          </div>
          <div className='flex flex-row items-center'>
            <button className='mr2'>
            200 - 526
            </button>
            <ProgressBar percentage={twoOOFiveTwoSix} />
            <p className='ml2'>{twoOOFiveTwoSix}</p>
          </div>
        </section>
      </div>

    </div>
  )
}
