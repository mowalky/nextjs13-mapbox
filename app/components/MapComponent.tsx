"use client";

import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";

export function MapBoxComponent({ mapData }: any) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;
  mapboxgl.accessToken = token;
  const mapDiv = useRef<any>(null);
  const map = useRef<any>(null);
  const [lnglat, setLngLat] = useState<mapboxgl.LngLatLike>([
    -96.754999, 46.867261,
  ]);
  const [zoom, setZoom] = useState(16);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (map.current) {
      map.current.remove();
    }
    //check if map has been created
    map.current = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: lnglat,
      zoom: zoom,
      pitch: 45,
      bearing: -17.6,
    });

    map.current.on("load", () => {
      setLoaded(true);
      for (let i = 0; i < mapData.layers.length; i++) {
        map.current.addSource(mapData.layers[i].name, mapData.layers[i].data);
        map.current.addLayer(mapData.layers[i].layerprops);
      }
    });
  }, []);

  return (
    <>
      <div
        ref={mapDiv}
        className="mapDiv"
        style={{
          position: "absolute",
          top: 0,
          zIndex: 5,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      />
    </>
  );
}

export default MapBoxComponent;
