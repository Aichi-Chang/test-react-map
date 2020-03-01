import React from 'react'

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'


export default function Control({ data }) {

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
          <div className='flex flex-row'>
            <button className='mr2 mb2'>
            Gravel 
            </button>
            <p>{gravelNum}</p>
          </div>
          <div className='flex flex-row'>
            <button className='mr2 mb2'>
            Concrete
            </button>
            <p>{concreteNum}</p>
          </div>
          <div className='flex flex-row'>
            <button className='mr2 mb2'>
            Bitumen
            </button>
            <p>{bitumenNum}</p>
          </div>
          <div className='flex flex-row'>
            <button className='mr2 mb2'>
            Interlock Conc Block
            </button>
            <p>{interlockNum}</p>
          </div>
          <div className='flex flex-row'>
            <button className='mr2'>
            Other
            </button>
            <p>{otherNum}</p>
          </div>
        </section>
      </div>

      <div className='control-panel2'>
        <div>Size Category: </div>
        <section>
          <div className='flex flex-row'>
            <button className='mr2 mb2'>
            0 - 50
            </button>
            <p>{zeroFifty}</p>
          </div>
          <div className='flex flex-row'>
            <button className='mr2 mb2'>
            50 - 200
            </button>
            <p>{fiftyTwoOO}</p>
          </div>
          <div className='flex flex-row'>
            <button className='mr2'>
            200 - 526
            </button>
            <p>{twoOOFiveTwoSix}</p>
          </div>
        </section>
      </div>

    </div>
  )
}
