/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const Fetching = () => {
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     const loadImage = async () => {
  //       const response = await fetch(
  //         "https://api.generated.photos/api/v1/faces?api_key=BEUHTLfJloFeCNWcfIdhrw"
  //       );

  //       const resData = await response.json();
  //       setData(resData);
  //     };
  //     loadImage();
  //   }, []);

  return (
    <div>
      <h1>hello</h1>

      {/* {data &&
        data.faces.map((get) => {
          return (
            <div key={get.id}>
              <h1 className="text-lg ">hello {get.id} </h1>
            </div>
          );
        })} */}
      {/* {data &&
        data.faces.map((select) => {
          return (
            <div key={select.id}>
              <img
                className="h-48 w-full"
                src={select.urls[4]["512"]}
                alt={select.id}
              />
            </div>
          );
        })} */}
    </div>
  );
};

export default Fetching;
