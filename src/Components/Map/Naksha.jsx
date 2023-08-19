import React from "react";
import "./Map.css";
const Naksha = () => {
  return (
    <div className="col-sm-7">
      <div className="map-img">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14022.091333285653!2d77.0279067!3d28.5240007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc6696370de8fe48!2sM3M%20Capital!5e0!3m2!1sen!2sin!4v1665751698341!5m2!1sen!2sin"
          width="600"
          height="350"
          style={mystyle}
          allowfullscreen=""
          loading="lazy"
          // eslint-disable-next-line react/no-unknown-property
          referrerpolicy="no-referrer-when-downgrade"
          className="border-2 w-100"
        ></iframe>
      </div>
    </div>
  );
};

export default Naksha;
