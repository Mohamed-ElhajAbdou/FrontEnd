// import React, { useState, useEffect } from "react";
// import CardDataStats from "../../../../components/CardDataStats";
// import BarChartHorizontal from "../../../../components/charts/BarChartHorizontal";
// import BarChartVertical from "../../../../components/charts/BarChartVertical";
// import PieChart from "../../../../components/charts/PieChart";
// import { fetchDataFromAPI } from '../../../../utility_backend/API_Call';

// const MapAnalysis = () => {
//   const [barChartState, setBarChartState] = useState({
//     series: [
//       {
//         name: "Sales",
//         data: [],
//       },
//     ],
//   });
//   const [pieChartState, setPieChartState] = useState({
//     series: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const body_query_NoSQL=
//   {
//     "collectionName": "Zapier_data",
//     "pipeline": [
//       {
//         "$group": {
//           "_id": "$order_status",
//           "order_status": { "$sum": 1 }
//         }
//       }
//     ]}
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetchDataFromAPI({
//           endpoint: "/api/Query_DB",
//           method: "POST",
//           body:  body_query_NoSQL ,
//         });

//         // console.log('Raw Data:', response); // Log the data to inspect its structure

//       // const orderStatuses = response.data.map(item => ({
//       //   order_status: item._id,
//       //   count: item.order_status
//       // }));
//       console.log("response",response.data);

//       const orderStatuses = response.data.map(item => ({
//         order_status: item._id, // The order status name is in _id
//         count: item.order_status // The count is in order_status
//       }));

//       const barChartData = orderStatuses.map(item => item.count);
//       const barChartCategories = orderStatuses.map(item => item.order_status);
//       console.log('Order Statuses:', barChartData);
//       console.log('Order barChartCategories:', barChartCategories);

//         // Update the bar chart state with the fetched data
//         setBarChartState({
//           series: [
//             {
//               name: "Orders",
//               data: barChartData,
//               categories:barChartCategories
//             },
//           ],
//         });

//         // Optionally, update the pie chart state with actual data if needed
//         setPieChartState({
//           series: [65, 34, 12, 56], // Replace with actual data if necessary
//         });

//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   if (error) return <div>Error: {error}</div>;

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 2xl:gap-8">
//         <div>
//           <div>
//             <BarChartHorizontal data={barChartState.series} />
//           </div>
//           <div className="mt-5 ">
//             <div className="mt-5 ">
//               <BarChartVertical data={barChartState.series} />
//             </div>
//             <div className="mt-5 ">
//               <PieChart data={pieChartState.series} />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div>
//             <CardDataStats
//               title="Total views"
//               total="$3.456K"
//               rate="0.43%"
//               levelUp
//             >
//               <svg
//                 className="fill-primary dark:fill-white"
//                 width="22"
//                 height="16"
//                 viewBox="0 0 22 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
//                   fill=""
//                 />
//                 <path
//                   d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
//                   fill=""
//                 />
//               </svg>
//             </CardDataStats>
//           </div>
//           <div className="mt-5">
//             <CardDataStats
//               title="Total views"
//               total="$3.456K"
//               rate="0.43%"
//               levelUp
//             >
//               <svg
//                 className="fill-primary dark:fill-white"
//                 width="22"
//                 height="16"
//                 viewBox="0 0 22 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
//                   fill=""
//                 />
//                 <path
//                   d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
//                   fill=""
//                 />
//               </svg>
//             </CardDataStats>
//           </div>
//           <div className="mt-5">
//             <CardDataStats
//               title="Total views"
//               total="$3.456K"
//               rate="0.43%"
//               levelUp
//             >
//               <svg
//                 className="fill-primary dark:fill-white"
//                 width="22"
//                 height="16"
//                 viewBox="0 0 22 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
//                   fill=""
//                 />
//                 <path
//                   d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
//                   fill=""
//                 />
//               </svg>
//             </CardDataStats>
//           </div>
//           <div className="mt-5">
//             <CardDataStats
//               title="Total views"
//               total="$3.456K"
//               rate="0.43%"
//               levelUp
//             >
//               <svg
//                 className="fill-primary dark:fill-white"
//                 width="22"
//                 height="16"
//                 viewBox="0 0 22 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
//                   fill=""
//                 />
//                 <path
//                   d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
//                   fill=""
//                 />
//               </svg>
//             </CardDataStats>
//           </div>
//           <div className="mt-5">
//             <CardDataStats
//               title="Total views"
//               total="$3.456K"
//               rate="0.43%"
//               levelUp
//             >
//               <svg
//                 className="fill-primary dark:fill-white"
//                 width="22"
//                 height="16"
//                 viewBox="0 0 22 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
//                   fill=""
//                 />
//                 <path
//                   d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
//                   fill=""
//                 />
//               </svg>
//             </CardDataStats>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MapAnalysis;

import React, { useState, useEffect } from "react";
import CardDataStats from "../../../../components/CardDataStats";
import BarChartHorizontal from "../../../../components/charts/BarChartHorizontal";
import BarChartVertical from "../../../../components/charts/BarChartVertical";
import PieChart from "../../../../components/charts/PieChart";
import { fetchDataFromAPI } from "../../../../utility_backend/API_Call";
import MapChart from "../../../../components/charts/MapChart";

const MapAnalysis = () => {
  const [barChartState, setBarChartState] = useState({
    series: [
      {
        name: "Sales",
        data: [],
      },
    ],
  });
  const [categories, setCategories] = useState([]); // State for categories
  const [xAxisName, setXAxisName] = useState("Order Status"); // X-axis name
  const [yAxisName, setYAxisName] = useState("Count"); // Y-axis name
  const [pieChartState, setPieChartState] = useState({
    series: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const body_query_NoSQL = {
    collectionName: "Zapier_data",
    pipeline: [
      {
        $group: {
          _id: "$order_status",
          order_status: { $sum: 1 },
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataFromAPI({
          endpoint: "/api/Query_DB",
          method: "POST",
          body: body_query_NoSQL,
        });

        // Map the response data
        const orderStatuses = response.data.map((item) => ({
          order_status: item._id,
          count: item.order_status,
        }));

        // Extract data and categories
        const barChartData = orderStatuses.map((item) => item.count);
        const barChartCategories = orderStatuses.map(
          (item) => item.order_status
        );

        // Update the chart state with the fetched data
        setBarChartState({
          series: [
            {
              name: "Orders",
              data: barChartData,
            },
          ],
        });
        setCategories(barChartCategories); // Update categories state

        // Optionally, update the pie chart state with actual data if needed
        setPieChartState({
          series: barChartData, // Use bar chart data for the pie chart
          labels: barChartCategories, // Use categories as labels for the pie chart
        });

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 2xl:gap-8">
        <div>
          <div>
            <BarChartHorizontal
              data={barChartState.series}
              categories={categories} // Pass categories
              xAxisName={xAxisName} // Pass X-axis name
              yAxisName={yAxisName}// Pass Y-axis name
              isHorizontal={true} 
            />
          </div>
          <div className="mt-5">
            <div className="mt-5">
              <BarChartHorizontal
                data={barChartState.series}
                categories={categories} // Pass categories
                xAxisName={xAxisName} // Pass X-axis name
                yAxisName={yAxisName}// Pass Y-axis name
                isHorizontal={false} 
              />
            </div>
            <div className="mt-5">
              <PieChart data={pieChartState.series} />
            </div>
          </div>
        </div>
        <div>
          <div>
            <CardDataStats
              title="Total views"
              total="$3.456K"
              rate="0.43%"
              levelUp
            >
              <svg
                className="fill-primary dark:fill-white"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                  fill=""
                />
                <path
                  d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                  fill=""
                />
              </svg>
            </CardDataStats>
          </div>
          <div className="mt-5">
            <CardDataStats
              title="Total views"
              total="$3.456K"
              rate="0.43%"
              levelUp
            >
              <svg
                className="fill-primary dark:fill-white"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                  fill=""
                />
                <path
                  d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                  fill=""
                />
              </svg>
            </CardDataStats>
          </div>
          {/* <div>
            <MapChart/>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MapAnalysis;
