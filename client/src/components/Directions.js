import React from "react"
import "./MapWrapper.css"
import "mapbox-gl/dist/mapbox-gl.css"
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"
import { useRef, useEffect, useState } from "react"
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

export default function Directions() {
  const mapContainer = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-73.985664, 40.748514],
      zoom: 12,
    })
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "imperial",
      profile: "mapbox/cycling",
    })
    map.addControl(directions, "top-left")
  })

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}
