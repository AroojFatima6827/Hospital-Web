import React from 'react'
import doctorsubHeading from "../assets/DoctorsubHeading.png"
import { useState } from "react";
import linkdin from "../assets/Linkdin.png";
import Insta from "../assets/insta.png";
import facebook from "../assets/fb.png";
import Doctorimgone from "../assets/DoctorImgOne.png";
import Doctorimgtwo from "../assets/DoctorImgTwo.png";
import Doctorimgthree from "../assets/DoctorImgThree.png";
import Email from "../assets/EmailIcon.png";
import Callicon from "../assets/CallIcon.svg";
import Locationicon from "../assets/LocationIcon.svg";
import Clockicon from "../assets/ClockIcon.svg";
import sethscope from "../assets/Sethscope.jpg"




function Doctors() {
  const [current, setCurrent] = useState(0);
   const doctors = [
      { img: Doctorimgone, name: "Doctor's Name", dept: "Neurology" },
      { img: Doctorimgtwo, name: "Doctor's Name", dept: "Neurology" },
      { img: Doctorimgthree, name: "Doctor's Name", dept: "Neurology" },
    ];
    const testimonials  = [
      {quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.", name: "John Doe"},
      {quote:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.", name: "Jane Smith"} ,
      {quote:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.", name: "Alice Johnson"}
    ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
   <div className="Doctors-section">
    <img src={doctorsubHeading} alt="" />

    <div className="Doctors-profile mt-10">
                   <p className="text-center text-2xl lg:text-3xl">Trusted Care</p>
                   <h1 className="text-center text-3xl font-bold mt-2 lg:text-4xl">
                     Our Doctors
                   </h1>
       
                   <div className="hidden xl:flex justify-center items-center mt-12 gap-10">
                     {doctors.map((doc, index) => (
                       <div key={index} className="doc-pro-one rounded-b-[10px]">
                         <img src={doc.img} alt="" />
                         <div className="info bg-[rgb(50,214,175)] w-[317px] flex justify-center items-center flex-col">
                           <p className="text-2xl mt-3">{doc.name}</p>
                           <h1 className="text-2xl font-bold">{doc.dept}</h1>
       
                           <div className="pro-icon flex justify-center items-center gap-4 mt-2">
                             <img src={linkdin} alt="" />
                             <img src={Insta} alt="" />
                             <img src={facebook} alt="" />
                           </div>
       
                           <p className="bg-[rgb(14,78,63)] text-[rgb(50,214,175)] mt-4 w-[317px] text-center text-[18px]">
                             View Profile
                           </p>
                         </div>
                       </div>
                     ))}
                   </div>
       
                   <div
                     className="
             hidden
             md:grid 
             xl:hidden
             grid-cols-2 
             gap-10
             mt-12
             place-items-center
       
             [&>*:nth-child(3)]:col-span-2 
             [&>*:nth-child(3)]:mx-auto
           "
                   >
                     {doctors.map((doc, index) => (
                       <div key={index} className="doc-pro-one rounded-b-[10px]">
                         <img src={doc.img} alt="" />
                         <div className="info bg-[rgb(50,214,175)] w-[317px] flex justify-center items-center flex-col">
                           <p className="text-2xl mt-3">{doc.name}</p>
                           <h1 className="text-2xl font-bold">{doc.dept}</h1>
       
                           <div className="pro-icon flex justify-center items-center gap-4 mt-2">
                             <img src={linkdin} alt="" />
                             <img src={Insta} alt="" />
                             <img src={facebook} alt="" />
                           </div>
       
                           <p className="bg-[rgb(14,78,63)] text-[rgb(50,214,175)] mt-4 w-[317px] text-center text-[18px]">
                             View Profile
                           </p>
                         </div>
                       </div>
                     ))}
                   </div>
       
                   <div className="md:hidden mt-10 flex justify-center">
                     <div className="doc-pro-one rounded-b-[10px]">
                       <img src={doctors[current].img} alt="" />
                       <div className="info bg-[rgb(50,214,175)] w-[317px] flex justify-center items-center flex-col">
                         <p className="text-2xl mt-3">{doctors[current].name}</p>
                         <h1 className="text-2xl font-bold">
                           {doctors[current].dept}
                         </h1>
       
                         <div className="pro-icon flex justify-center items-center gap-4 mt-2">
                           <img src={linkdin} alt="" />
                           <img src={Insta} alt="" />
                           <img src={facebook} alt="" />
                         </div>
       
                         <p className="bg-[rgb(14,78,63)] text-[rgb(50,214,175)] mt-4 w-[317px] text-center text-[18px]">
                           View Profile
                         </p>
                       </div>
                     </div>
                   </div>
       
                   <div className="Dots flex justify-center items-center mt-5 gap-3 cursor-pointer md:hidden">
                     {doctors.map((_, index) => (
                       <p
                         key={index}
                         onClick={() => setCurrent(index)}
                         className={`h-4 w-4 rounded-full transition-all ${
                           current === index
                             ? "bg-[rgb(14,78,63)] scale-110"
                             : "bg-[rgb(50,214,175)]"
                         }`}
                       ></p>
                     ))}
                   </div>
                 </div>
                 <div className="Doctors-profile mt-5">
                               
                                <div className="hidden xl:flex justify-center items-center mt-12 gap-10">
                                  {doctors.map((doc, index) => (
                                    <div key={index} className="doc-pro-one rounded-b-[10px]">
                                      <img src={doc.img} alt="" />
                                      <div className="info bg-[rgb(50,214,175)] w-[317px] flex justify-center items-center flex-col">
                                        <p className="text-2xl mt-3">{doc.name}</p>
                                        <h1 className="text-2xl font-bold">{doc.dept}</h1>
                    
                                        <div className="pro-icon flex justify-center items-center gap-4 mt-2">
                                          <img src={linkdin} alt="" />
                                          <img src={Insta} alt="" />
                                          <img src={facebook} alt="" />
                                        </div>
                    
                                        <p className="bg-[rgb(14,78,63)] text-[rgb(50,214,175)] mt-4 w-[317px] text-center text-[18px]">
                                          View Profile
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                    
                                <div
                                  className="
                          hidden
                          md:grid 
                          xl:hidden
                          grid-cols-2 
                          gap-10
                          mt-12
                          place-items-center
                    
                          [&>*:nth-child(3)]:col-span-2 
                          [&>*:nth-child(3)]:mx-auto
                        "
                                >
                                  {doctors.map((doc, index) => (
                                    <div key={index} className="doc-pro-one rounded-b-[10px]">
                                      <img src={doc.img} alt="" />
                                      <div className="info bg-[rgb(50,214,175)] w-[317px] flex justify-center items-center flex-col">
                                        <p className="text-2xl mt-3">{doc.name}</p>
                                        <h1 className="text-2xl font-bold">{doc.dept}</h1>
                    
                                        <div className="pro-icon flex justify-center items-center gap-4 mt-2">
                                          <img src={linkdin} alt="" />
                                          <img src={Insta} alt="" />
                                          <img src={facebook} alt="" />
                                        </div>
                    
                                        <p className="bg-[rgb(14,78,63)] text-[rgb(50,214,175)] mt-4 w-[317px] text-center text-[18px]">
                                          View Profile
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                    
                                <div className="md:hidden mt-10 flex justify-center">
                                  <div className="doc-pro-one rounded-b-[10px]">
                                    <img src={doctors[current].img} alt="" />
                                    <div className="info bg-[rgb(50,214,175)] w-[317px] flex justify-center items-center flex-col">
                                      <p className="text-2xl mt-3">{doctors[current].name}</p>
                                      <h1 className="text-2xl font-bold">
                                        {doctors[current].dept}
                                      </h1>
                    
                                      <div className="pro-icon flex justify-center items-center gap-4 mt-2">
                                        <img src={linkdin} alt="" />
                                        <img src={Insta} alt="" />
                                        <img src={facebook} alt="" />
                                      </div>
                    
                                      <p className="bg-[rgb(14,78,63)] text-[rgb(50,214,175)] mt-4 w-[317px] text-center text-[18px]">
                                        View Profile
                                      </p>
                                    </div>
                                  </div>
                                </div>
                    
                                <div className="Dots flex justify-center items-center mt-5 gap-3 cursor-pointer md:hidden">
                                  {doctors.map((_, index) => (
                                    <p
                                      key={index}
                                      onClick={() => setCurrent(index)}
                                      className={`h-4 w-4 rounded-full transition-all ${
                                        current === index
                                          ? "bg-[rgb(14,78,63)] scale-110"
                                          : "bg-[rgb(50,214,175)]"
                                      }`}
                                    ></p>
                                  ))}
                                </div>
                              </div>
                             
                                  <div 
                                       className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-center bg-cover bg-no-repeat mt-15"
                                       style={{ backgroundImage: `url(${sethscope})` }}
                                     >
                                      
                                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-[rgba(14,78,63,0.7)] p-4 sm:p-6 lg:text-3xl rounded w-[90%]">
                                         <p className="mb-2">“{testimonials[currentIndex].quote}”</p>
                                         <p className="text-sm font-semibold">— {testimonials[currentIndex].name}</p>
                                       </div>
                                 
                                       
                                       <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-4">
                                         {testimonials.map((_, index) => (
                                           <span
                                             key={index}
                                             className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                                             onClick={() => setCurrentIndex(index)}
                                           ></span>
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

export default Doctors