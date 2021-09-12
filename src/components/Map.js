import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

const Map = () => {
  const MapEl = useRef(null);

  useEffect(() => {
    loadModules([
      "esri/Map",
      "esri/views/SceneView",
      "esri/widgets/Search",
    ]).then(([Map, SceneView, Search]) => {
      const map = new Map({
        basemap: "dark-gray-vector",
      });

      const view = new SceneView({
        map: map,
        container: "viewDiv",
        center: [-106.4508651185194, 31.763963987428166],
        zoom: 16,
      });

      var search = new Search({
        view: view,
      });

      // places the logo div in the bottom right corner of the view
      view.ui.add("logoDiv", "bottom-right");
      // places the search widget in the top right corner of the view
      view.ui.add(search, "top-right");
    });
  }, []);

  return (
    <>
      <div
        id="viewDiv"
        style={{ height: "100vh", width: "100vw" }}
        ref={MapEl}
      ></div>
      <div id="logoDiv" class="esri-widget">
        Logo
      </div>
    </>
  );
};

export default Map;
