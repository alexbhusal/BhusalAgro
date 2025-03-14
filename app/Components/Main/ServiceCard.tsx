import React from 'react'
import { serviceData } from 'utils/Data'


const ServiceCard = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <div key={index} className="max-w-sm bg-gray-600 border border-gray-200 rounded-lg shadow-sm" data-aos="zoom-in">
          <a href="#">
            <div >
              <img className="rounded-t-lg "  src={item.ImageUrl} alt={item.title} />
            </div>
          </a>
          <div className="p-5">
              <h2 className="mb-2 text-xl md:text-3xl font-bold tracking-tight text-white text-center">
                {item.title}
              </h2>
              <h4 className="mb-2 text-sm md:text-xl font-normal tracking-tight text-white text-center">
                {item.description}
              </h4>
          </div>
        </div>
      ))}
    </>
  )
}

export default ServiceCard