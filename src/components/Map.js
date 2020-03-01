import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import MapGL, { Source, Layer } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import { dataLayer } from './Map-style'
import Control from './Control'

const Token = 'pk.eyJ1IjoicGhvZWJleHh4YyIsImEiOiJjazMxenUxYmUwZGdhM2xzMmVwZG5iNnQ0In0.NS8058Cpk5wl3Qko8cJQiQ'



export default function Map() {

  const [data, setData] = useState()
  const [viewport, setViewport] = useState({
    latitude: -28.016666,
    longitude: 153.399994,
    zoom: 14,
    bearing: 0,
    pitch: 0
  })

  useEffect(() => {
    fetch('../data.json')
      .then(res => res.json())
      .then(res => setData(res))
      // .then(res => setEvent({ event: res }))    
  },[])



  if (!data) {
    return null
  }
  
  // console.log(data)

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={Token}
      >
        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>
      
      </MapGL>

      <Control

        // containerComponent={this.props.containerComponent}
        data={data}
        // onChange={this._updateSettings}
      />
    </div>
    
    
  )
}

