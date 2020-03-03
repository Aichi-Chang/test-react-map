import React, { useState, useEffect, useRef } from 'react'
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
    zoom: 12,
    bearing: 0,
    pitch: 0
  })
  const mapRef = useRef()

  useEffect(() => {
    fetch('../data.json')
      .then(res => res.json())
      .then(res => setData(res))
  },[])
  

  console.log(mapRef)



  function features () { 
    mapRef.current.queryRenderedFeatures( { layers: ['ramps'] })
    if (features) {
      setData(features)
      console.log(data)
    }
  }

  function handleLoad () {
    mapRef.current.getMap().addLayer({
      id: 'ramps',
      source: data,
      paint: {
        'fill-color': 'red',
        'fill-opacity': 0.8
      }
    })
  }


  if (!data) {
    return null
  }

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={Token}
        queryRenderedFeatures={features}
        onLoad={() => handleLoad()}
      >
        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>
      
      </MapGL>

      <Control
        data={data}
        // onChange={this._updateSettings}
      />
    </div>
    
    
  )
}

