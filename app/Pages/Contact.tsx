import MapIframe from "~/Components/Main/MapIframe";

const Contact = () => {
  return (
    <>
      <div className="border-b-4 border-black"></div>
      <div className="text-center text-3xl font-bold m-10" id="contact">
        <h1>Contact US </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center m-10">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <div className="flex flex-col justify-center items-center md:items-center">
            <h2 className="text-xl md:text-3xl font-semibold mb-4 ">
              Our Contact
            </h2>
            <p className="mb-2 text-base md:text-2xl">
              Address: TInkune Chowk, Sandhikharka-01, Arghakhanchi, Nepal
            </p>
            <p className="mb-2 text-base md:text-2xl">
              <a href="tel:+97777420585">Phone: 077-420585</a>
            </p>
            <p className="text-base md:text-2xl">
              <a href="mailto:info@newbhusalargovetcenter.com.np">
                Email: info@newbhusalargovetcenter.com.np
              </a>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <MapIframe />
        </div>
      </div>
    </>
  );
};

export default Contact;
