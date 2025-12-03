import React from "react";
import { useState } from "react";
import HeroImg from "../assets/Hero-Img.png";
import MainHeroImg from "../assets/Hero-Img-lg.png";
import LinkBtn from "../assets/Link Button.png";
import HomeImg from "../assets/Home-Img.png";
import HomeImglg from "../assets/Home-lg-Img.png";
import BloodBank from "../assets/Blood-Bank.png";
import Cardiagram from "../assets/Cardiagram-Img.png";
import DnaTesting from "../assets/Dna-Testing.png";
import MedicalOne from "../assets/MedicalOne.png";
import ImageOne from "../assets/ImageOne.png";
import ImageTwo from "../assets/ImageTwo.png";
import Specialimg from "../assets/SpecialImg.png";
import Dropdown from "./Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Doctorimgone from "../assets/DoctorImgOne.png";
import Doctorimgtwo from "../assets/DoctorImgTwo.png";
import Doctorimgthree from "../assets/DoctorImgThree.png";
import linkdin from "../assets/Linkdin.png";
import Insta from "../assets/insta.png";
import facebook from "../assets/fb.png";
import Email from "../assets/EmailIcon.png";
import Callicon from "../assets/CallIcon.svg";
import Locationicon from "../assets/LocationIcon.svg";
import Clockicon from "../assets/ClockIcon.svg";
function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [doctor, setDoctor] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [current, setCurrent] = useState(0);
  const doctors = [
    { img: Doctorimgone, name: "Doctor's Name", dept: "Neurology" },
    { img: Doctorimgtwo, name: "Doctor's Name", dept: "Neurology" },
    { img: Doctorimgthree, name: "Doctor's Name", dept: "Neurology" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setName("");
    setGender("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setDoctor("");
    setDepartment("");
    setMessage("");
    setTimeout(() => setSuccess(false), 3000);
  };
  return (
    <>
      <section>
        <div className="Hero-section">
          <img
            src={HeroImg}
            alt="Hero-Img"
            className="lg:hidden md:hidden w-full"
          />
          <img
            src={MainHeroImg}
            alt="Main-Img"
            className="hidden lg:block md:block w-full"
          />
          <div className="Hero-Content flex justify-center items-center flex-col mt-10 ">
            <p className="font-bold">WELCOME TO MEDDEICAL</p>

            <h1 className="mt-2 text-2xl font-bold lg:font-bold">
              A Great Pleace to
              <br className="block lg:hidden md:hidden" />
              <span className="hidden lg:inline md:inline"> Receive Care</span>
              <span className="block lg:hidden md:hidden text-center">
                Receive Care
              </span>
            </h1>
            <p className="text-center px-4 lg:w-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </p>
            <img src={LinkBtn} alt="Link-Btn" className="mt-2" />
          </div>
          <div className="Home-Imges mt-10">
            <img src={HomeImg} alt="" className="lg:hidden md:hidden w-full" />
            <img
              src={HomeImglg}
              alt=""
              className="hidden lg:block md:block w-full"
            />
          </div>
          <div className="Our-Services flex justify-center items-center flex-col mt-4 gap-3">
            <p className="text-[rgb(2,124,113)] font-bold lg:text-[18px]">
              Care you can believe in
            </p>
            <h1 className="text-[rgb(14,78,63)] font-bold text-2xl lg:4xl ">
              Our Services
            </h1>
          </div>
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
            <div className="bg-white border rounded-xl shadow p-4 flex flex-col justify-between">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="p-3 flex flex-col items-center border rounded-lg">
                  <img src={MedicalOne} className="w-8" />
                  <p>Free Checkup</p>
                </div>

                <div className="p-3 flex flex-col items-center bg-[rgb(14,78,63)] text-white rounded-lg">
                  <img src={Cardiagram} className="w-8" />
                  <p>Cardiogram</p>
                </div>

                <div className="p-3 flex flex-col items-center border rounded-lg">
                  <img src={DnaTesting} className="w-8" />
                  <p>Dna Testing</p>
                </div>

                <div className="p-3 flex flex-col items-center border rounded-lg">
                  <img src={BloodBank} className="w-8" />
                  <p>Blood Bank</p>
                </div>
              </div>
              <p className="bg-[rgb(14,78,63)] text-center text-white py-2 rounded-md mt-4">
                View All
              </p>
            </div>
            <div className="lg:col-span-3 space-y-4">
              <h1 className="text-2xl font-bold">
                A passion for putting patients first.
              </h1>

              <div className="grid grid-cols-2 gap-2">
                <p>• A Passion for Healing</p>
                <p>• 5-Star Care</p>
                <p>• All our best</p>
                <p>• Believe in Us</p>
                <p>• A Legacy of Excellence</p>
                <p>• Always Caring</p>
                <p>• A Legacy of Excellence</p>
                <p>• Always Caring</p>
                <p>Lorem ipsum dolor sit amet…</p>
                <p>Lorem ipsum dolor sit amet…</p>
                <p>Lorem ipsum dolor sit amet…</p>
                <p>Lorem ipsum dolor sit amet…</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-auto md:pl-0 lg:pl-0">
                <img src={ImageOne} className="rounded-lg shadow" />
                <img src={ImageTwo} className="rounded-lg shadow" />
              </div>
            </div>
          </div>
          <div className="Our Specialties">
            <div className="specialties-content text-center mt-4">
              <p className="text-[rgb(33,140,131)] font-bold">Always Caring</p>
              <h1 className="text-[rgb(14,78,63)] text-3xl font-bold">
                Our Specialties
              </h1>
              <div className="diseases-dapertment grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 border-t border-l border-gray-300 mt-10">
                {/* Bones */}
                <div className="flex flex-col items-center p-4 border-b border-r border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Bones"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">Bones</p>
                </div>

                {/* Neurology */}
                <div className="flex flex-col items-center p-4 border-b border-r border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Neurology"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">Neurology</p>
                </div>

                {/* Oncology */}
                <div className="flex flex-col items-center p-4 border-b border-r border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Oncology"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">Oncology</p>
                </div>

                {/* Otorhinolaryngology */}
                <div className="flex flex-col items-center p-4 border-b border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Otorhinolaryngology"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">
                    Otorhinolaryngology
                  </p>
                </div>

                {/* Ophthalmology */}
                <div className="flex flex-col items-center p-4 border-b border-r border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Ophthalmology"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">
                    Ophthalmology
                  </p>
                </div>

                {/* Cardiovascular */}
                <div className="flex flex-col items-center p-4 border-b border-r border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Cardiovascular"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">
                    Cardiovascular
                  </p>
                </div>

                {/* Pulmonology */}
                <div className="flex flex-col items-center p-4 border-b border-r border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Pulmonology"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">
                    Pulmonology
                  </p>
                </div>

                {/* Renal Medicine */}
                <div className="flex flex-col items-center p-4 border-b border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Renal Medicine"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">
                    Renal Medicine
                  </p>
                </div>

                {/* Gastroenterology */}
                <div className="flex flex-col items-center p-4 border-b border-r border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Gastroenterology"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">
                    Gastroenterology
                  </p>
                </div>

                {/* Urology */}
                <div className="flex flex-col items-center p-4 border-b border-r border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Urology"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">Urology</p>
                </div>

                {/* Dermatology */}
                <div className="flex flex-col items-center p-4 border-b border-r border-gray-300 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Dermatology"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">
                    Dermatology
                  </p>
                </div>

                {/* Gynaecology */}
                <div className="flex flex-col items-center p-4 hover:bg-[#0e4e3f] hover:text-white transition duration-300">
                  <img
                    src={Specialimg}
                    alt="Gynaecology"
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
                  />
                  <p className="text-center text-sm sm:text-base">
                    Gynaecology
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-16 px-4 mt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h2 className="text-3xl font-bold text-[#005f4f]">
                  Book an Appointment
                </h2>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Quisque placerat
                  scelerisque tortor ornare ornare.
                </p>
              </div>

              <div className="w-full bg-[#005f4f]/90 p-6 rounded-xl shadow-xl">
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                    className="p-2 rounded bg-white w-full"
                  />

                  <Dropdown
                    label="Gender"
                    value={gender}
                    onChange={setGender}
                    options={["Male", "Female", "Other"]}
                  />

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="p-2 rounded bg-white w-full"
                  />

                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    required
                    className="p-2 rounded bg-white w-full"
                  />

                  <DatePicker
                    selected={date}
                    onChange={(d) => setDate(d)}
                    placeholderText="Select Date"
                    className="p-2 rounded bg-white w-full"
                    popperPlacement="bottom-start"
                  />

                  <DatePicker
                    selected={time}
                    onChange={(t) => setTime(t)}
                    placeholderText="Select Time"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="p-2 rounded bg-white w-full"
                    popperPlacement="bottom-start"
                  />

                  <Dropdown
                    label="Doctor"
                    value={doctor}
                    onChange={setDoctor}
                    options={["Dr Ali", "Dr Ahmed", "Dr Sarah"]}
                  />

                  <Dropdown
                    label="Department"
                    value={department}
                    onChange={setDepartment}
                    options={["Cardiology", "Dental", "Skin", "Surgery"]}
                  />

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="p-2 rounded bg-white w-full md:col-span-2"
                  />

                  <button
                    type="submit"
                    className="bg-[#2ee6c8] text-black py-2 font-semibold rounded md:col-span-2"
                  >
                    SUBMIT
                  </button>

                  {success && (
                    <p className="text-center text-white md:col-span-2">
                      Form submitted successfully!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="Doctors-profile">
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
      </section>
    </>
  );
}

export default Home;
