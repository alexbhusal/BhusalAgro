import React from 'react';

const MapIframe = () => {
  return (
    <div className="relative pb-[56.25%] w-full bg-gray-100">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902110.418241655!2d81.90740057812499!3d27.967303400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996456d72b3ee9b%3A0x485153804539b44d!2zTmV3IEJodXNhbCBBZ3JvdmV0IENlbnRlciDgpKjgpY3gpK_gpYEg4KSt4KWB4KS44KS-4KSyIOCkj-Ckl-CljeCksOCli-CkreClh-CknyDgpLjgpYfgpKjgpY3gpJ_gpLA!5e0!3m2!1sne!2snp!4v1741977940082!5m2!1sne!2snp"
        className="absolute top-0 left-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapIframe;
