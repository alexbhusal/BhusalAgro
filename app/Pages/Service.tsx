import ServiceCard from "~/Components/Main/ServiceCard"

const Service = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold m-10" id="services">
        <h1>Our Services</h1>
      </div>
      <div className="flex justify-center items-center m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard />
        </div>
      </div>
    </>
  )
}

export default Service
