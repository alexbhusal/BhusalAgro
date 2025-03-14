import React from "react";
import { MainData } from "utils/Data";

export const ProductsCard = () => {
  return (
    <>
      {MainData.map((data, index) => (
        <div key={index} className="bg-gray-500 p-5">
          <img src={data.ImageUrl} alt={data.title} />
          <h2 className="text-center font-bold">{data.title}</h2>
          <p className="text-center">{data.description}</p>
        </div>
      ))}
      </>
  );
};
