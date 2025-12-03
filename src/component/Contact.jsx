import React from 'react'
import subcontactimg from "../assets/SubContactHeading.png";
import mapview from "../assets/Mapview.png";
import { useState } from "react";
import Email from "../assets/EmailIcon.png";
import Callicon from "../assets/CallIcon.svg";
import Locationicon from "../assets/LocationIcon.svg";
import Clockicon from "../assets/ClockIcon.svg";

function Contact() {
 const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Reset
    e.target.reset();

    // Success Message
    setSuccess("Your message has been sent successfully!");

    // Hide after 3 sec (optional)
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <>
    <div className="contacts-Section">
      <img src={subcontactimg} alt="contactimg" />
      <div className="loction mt-10">
        <img src={mapview} alt="mapview-img" className="mt-10 w-full" />

      </div>
      
           <div className="px-5 md:px-16 lg:px-24 py-12">
      {/* Heading */}
      <p className="text-[rgb(50,214,175)] tracking-widest font-semibold">
        GET IN TOUCH
      </p>
      <h1 className="text-3xl font-bold mt-1 mb-8">Contact</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0a4a3c] p-5 rounded-md w-full"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 border border-white">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent text-white px-3 py-3 border-b md:border-b-0 md:border-r border-white outline-none"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-white px-3 py-3 outline-none"
              required
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent text-white px-3 py-3 border border-white border-t-0 outline-none"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            className="w-full bg-transparent text-white px-3 py-3 border border-white border-t-0 outline-none h-40"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[rgb(50,214,175)] text-black py-3 font-semibold mt-1"
          >
            SUBMIT
          </button>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-300 font-semibold mt-2 text-center">
              {success}
            </p>
          )}
        </form>

        {/* RIGHT — 4 INFO BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Emergency */}
          <div className="bg-[rgb(50,214,175)] px-6 py-8 rounded-md">
            <img src={Callicon} className="w-8 mb-3" />
            <h2 className="font-bold">EMERGENCY</h2>
            <p>(033) 681-012-259</p>
            <p>(2317) 666-031-804</p>
          </div>

          {/* Location */}
          <div className="bg-[#0a4a3c] text-white px-6 py-8 rounded-md">
            <img src={Locationicon} className="w-8 mb-3" />
            <h2 className="font-bold">LOCATION</h2>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </div>

          {/* Email */}
          <div className="bg-[rgb(50,214,175)] px-6 py-8 rounded-md">
            <img src={Email} className="w-8 mb-3" />
            <h2 className="font-bold">EMAIL</h2>
            <p>neeeose@gmail.com</p>
            <p>bstudios@gmail.com</p>
          </div>

          {/* Working Hours */}
          <div className="bg-[rgb(50,214,175)] px-6 py-8 rounded-md">
            <img src={Clockicon} className="w-8 mb-3" />
            <h2 className="font-bold">WORKING HOURS</h2>
            <p>Mon-Sat 09:00–20:00</p>
            <p>Sunday Emergency only</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact