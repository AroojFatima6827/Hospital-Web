import React from 'react'
import subheadimg from "../assets/SubHead.png";
import Freeimg from "../assets/freeimg.png";
import servicemainimg from "../assets/Servicesimg.png";
import Email from "../assets/EmailIcon.png";
import Callicon from "../assets/CallIcon.svg";
import Locationicon from "../assets/LocationIcon.svg";
import Clockicon from "../assets/ClockIcon.svg";


function Services() {
   const services = [
    { title: "Free Checkup", img: servicemainimg },
    { title: "Free Checkup", img: servicemainimg },
    { title: "Free Checkup", img: servicemainimg },
    { title: "Free Checkup", img: servicemainimg },
    { title: "Free Checkup", img: servicemainimg },
    { title: "Free Checkup", img: servicemainimg },
  ];


  return (
   <>
   <div className="services-section">
    <img src={subheadimg} alt="" />
    <div className="w-full mt-20 px-4">
      <h2 className="text-center text-3xl font-bold">Our Services</h2>

      {/* GRID */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-10 
        mt-12
        place-items-center
      "
      >
        {services.map((srv, i) => (
          <div
            key={i}
            className="w-[330px] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative">
              <img src={srv.img} alt="" className="w-full" />

              {/* ICON BOTTOM-RIGHT */}
              <div className="absolute bottom-3 right-3 bg-[rgb(14,78,63)] h-12 w-12 rounded-full flex justify-center items-center">
                <img src={Freeimg} className="h-6 w-6" alt="" />
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-xl font-bold">{srv.title}</h3>
              <p className="mt-2 text-[15px] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque placerat scelerisque tortor ornare ornare. Convalis felis
                vitae tortor augue. Velit nascetur proin massa in.
              </p>

              <button className="mt-3 text-[rgb(14,78,63)] font-semibold flex items-center gap-1">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="Contact mt-14">
                <p className="text-[rgb(50,214,175)] text-2xl font-bold text-center">
                  GET IN TOUCH
                </p>
                <h1 className="text-[rgb(14,78,63)] text-3xl text-center">
                  Contact
                </h1>
    
                <div
                  className="
          get-in-touch
          mt-10
          grid
          grid-cols-1
          md:grid-cols-2      
          xl:grid-cols-4  
          gap-4   
          place-items-center
        "
                >
                  <div
                    className="call-icon bg-[rgb(50,214,175)] w-[250px] h-[250px] pl-8 pt-20 rounded-[10px] 
          hover:bg-[rgb(14,78,63)] hover:text-white transition duration-300 cursor-pointer"
                  >
                    <img src={Callicon} alt="" className="w-[20%]" />
                    <p className="font-bold">Emergency</p>
                    <p>(237) 681-873812-255</p>
                  </div>
    
                  <div
                    className="call-icon bg-[rgb(50,214,175)] w-[250px] h-[250px] pl-8 pt-20 rounded-[10px] 
          hover:bg-[rgb(14,78,63)] hover:text-white transition duration-300 cursor-pointer"
                  >
                    <img src={Locationicon} alt="" className="w-[20%]" />
                    <p className="font-bold">LOCATION</p>
                    <p>0123 Some place</p>
                  </div>
    
                  <div
                    className="call-icon bg-[rgb(50,214,175)] w-[250px] h-[250px] pl-8 pt-20 rounded-[10px] 
          hover:bg-[rgb(14,78,63)] hover:text-white transition duration-300 cursor-pointer"
                  >
                    <img src={Email} alt="" className="w-[20%]" />
                    <p className="font-bold">EMAIL</p>
                    <p>ineeesoe@gmil.com</p>
                    <p>udios@gmail.com</p>
                  </div>
    
                  <div
                    className="call-icon bg-[rgb(50,214,175)] w-[250px] h-[250px] pl-8 pt-20 rounded-[10px] 
          hover:bg-[rgb(14,78,63)] hover:text-white transition duration-300 cursor-pointer"
                  >
                    <img src={Clockicon} alt="" className="w-[20%]" />
                    <p className="font-bold">Working Hours</p>
                    <p>Mon-Sat 09:00-20:00</p>
                    <p>Sunday Emergency only</p>
                  </div>
                </div>
              </div>
   </div>
   </>
  )
}

export default Services