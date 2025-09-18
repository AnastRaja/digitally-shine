import React from "react";
import Marquee from "react-fast-marquee";

// import images
import logo1 from "../assets/testi/KM-EDIT.png";
import logo2 from "../assets/testi/ifography.png";
import logo3 from "../assets/testi/lawblovks.png";

export default function PartnersMarquee() {
  const logos = [logo1, logo2, logo3];

  return (
    <Marquee gradient={false} speed={40}>
      {logos.map((logo, i) => (
        <img key={i} src={logo} alt={`Partner ${i}`} className=" test-image" />
      ))}
    </Marquee>
  );
}
