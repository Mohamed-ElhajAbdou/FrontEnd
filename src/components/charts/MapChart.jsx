// import React from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import features from "../../data/features.json";

// const myFeatures = features.features;

// console.log(myFeatures);

// const MapChart = () => {
//   // console.log(features);
  
//   return (
//     <ComposableMap>
//       <Geographies geography={myFeatures}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography key={geo.rsmKey} geography={geo} />
//           ))
//         }
//       </Geographies>
//     </ComposableMap>
//   );
// };

// export default MapChart;




///////////////////////////////Version_2/////////////////////////////////


// import React from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import features from "../../data/features.json";

// const MapChart = () => {
//   return (
//     <ComposableMap>
//       <Geographies geography={features.features}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography key={geo.rsmKey} geography={geo} />
//           ))
//         }
//       </Geographies>
//     </ComposableMap>
//   );
// };

// export default MapChart;




// import React from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import features from "../../data/features.json";

// const MapChart = () => {
//   return (
//     <ComposableMap projection="geoMercator">
//       <Geographies geography={features.features}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography 
//               key={geo.rsmKey} 
//               geography={geo} 
//               style={{
//                 default: {
//                   fill: "#D6D6DA",
//                   outline: "none"
//                 },
//                 hover: {
//                   fill: "#F53",
//                   outline: "none"
//                 },
//                 pressed: {
//                   fill: "#E42",
//                   outline: "none"
//                 }
//               }}
//             />
//           ))
//         }
//       </Geographies>
//     </ComposableMap>
//   );
// };

// export default MapChart;



import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  fill: "#D6D6DA",
                  outline: "none"
                },
                hover: {
                  fill: "#F53",
                  outline: "none"
                },
                pressed: {
                  fill: "#E42",
                  outline: "none"
                }
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
