"use client";

import styles from "./page.module.css";

import Map from "./components/MapComponent";
import TopNavBar from "./components/TopNavBar";
import { useState } from "react";

import { msumCampus } from "./data/msum";

const data = {
  basemap: "streets-vector",
  layers: [
    {
      name: "MSUMFacilities",
      data: {
        type: "geojson",
        data: msumCampus,
      },
      layerprops: {
        id: "MSUMFacilities",
        type: "fill-extrusion",
        source: "MSUMFacilities",
        //extrude buildings
        paint: {
          "fill-extrusion-color": [
            "match",
            ["get", "BLDU"],
            "Residential",
            "#A7C636",
            "Academic",
            "#FC921F",
            "Athletics",
            "#ED5151",
            "Administrative",
            "#5f828c",
            "Facilities",
            "#149ECE",
            "Student Services",
            "#5f828c",
            "Other",
            "#F97C5A",
            "#000000",
          ],
          "fill-extrusion-height": ["get", "BLDH"],
        },
      },
    },
  ],
};

const data2 = {
  basemap: "streets-vector",
  layers: [
    {
      name: "MSUMFacilities",
      data: {
        type: "geojson",
        data: msumCampus,
      },
      layerprops: {
        id: "MSUMFacilities",
        type: "fill-extrusion",
        source: "MSUMFacilities",
        //extrude buildings
        paint: {
          "fill-extrusion-color": [
            "match",
            ["get", "BLDU"],
            "Residential",
            "#000",
            "Academic",
            "#000",
            "Athletics",
            "#000",
            "Administrative",
            "#000",
            "Facilities",
            "#149ECE",
            "Student Services",
            "#000",
            "Other",
            "#F97C5A",
            "#000000",
          ],
          "fill-extrusion-height": ["get", "BLDH"],
        },
      },
    },
  ],
};

export default function Home() {
  const [mapData, setMapData] = useState(data2);
  const [toggle, setToggle] = useState(false);

  const update = () => {
    toggle ? setMapData(data) : setMapData(data2);
    setToggle(!toggle);
  };

  return (
    <div>
      <TopNavBar update={update} />
      <Map mapData={mapData} />
    </div>
  );
}
