import React from "react";
import Navbar from "./Navbar";
import pic from "./assets/pic.jpg";

export default function Contact({ showNavbar }) {
  return (
    <div>
      {showNavbar && <Navbar />}
      <div className="contact">
        <h1>Contact</h1>
        <div className="contm">
          <div className="innerone">
          <h3 className="cont1">
            “Rajasatellite is not just a Satellite TV Provider; we are a
            community-focused organization that believes in the power of media
            to educate. Our dedicated team is committed to enhancing your
            viewing experience and supporting our community with reliable and
            engaging content.”
          </h3>
          <br></br>
          <h2>
          “Reach Out to Us for Any Queries or Assistance — We’re Just a Call Away!”
          </h2>
          </div>
          <div className="cont2">
            <h3>For More details contact our managing director</h3>
            <br></br>
            <img src={pic} alt="pic" className="pic" />
            <div className="cont3">
              <h3 className="cont2">Pathivada Srinu</h3>
              <h4 className="cont2">Ph: 9949211669</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
