import React from 'react'
import Dropdown from "./Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
function Appointment() {
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
<div className="w-full py-16 px-4 mt-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    {/* Appointment Form */}
    <div className="w-full flex flex-col justify-center text-center lg:text-left">
      <h2 className="text-3xl font-bold text-[#005f4f]">
        Book an Appointment
      </h2>
      <p className="mt-4 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
      </p>
      <div className="w-full mt-6 bg-[#005f4f]/90 p-6 rounded-xl shadow-xl">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Form inputs same as before */}
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className="p-2 rounded bg-white w-full"/>
          <Dropdown label="Gender" value={gender} onChange={setGender} options={["Male","Female","Other"]}/>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required className="p-2 rounded bg-white w-full"/>
          <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" required className="p-2 rounded bg-white w-full"/>
          <DatePicker selected={date} onChange={(d)=>setDate(d)} placeholderText="Select Date" className="p-2 rounded bg-white w-full"/>
          <DatePicker selected={time} onChange={(t)=>setTime(t)} placeholderText="Select Time" showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" className="p-2 rounded bg-white w-full"/>
          <Dropdown label="Doctor" value={doctor} onChange={setDoctor} options={["Dr Adnan","Dr Arsh","Dr Muhammad"]}/>
          <Dropdown label="Department" value={department} onChange={setDepartment} options={["Cardiology","Dental","Gastroenterology"]}/>
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" className="p-2 rounded bg-white w-full md:col-span-2"/>
          <button type="submit" className="bg-[#2ee6c8] text-black py-2 font-semibold rounded md:col-span-2">SUBMIT</button>
          {success && <p className="text-center text-white md:col-span-2">Form submitted successfully!</p>}
        </form>
      </div>
    </div>

    {/* Hospital Schedule */}
    <div className="w-full">
      <div className="w-full bg-[rgb(14,78,63)] p-6 rounded-xl shadow-xl h-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ color: 'rgb(50,214,175)' }}>
          Hospital Working Hours
        </h2>
        <ul className="divide-y divide-gray-300 text-white">
          <li className="py-2 flex justify-between"><span>Monday</span><span>9:00 AM - 5:00 PM</span></li>
          <li className="py-2 flex justify-between"><span>Tuesday</span><span>9:00 AM - 5:00 PM</span></li>
          <li className="py-2 flex justify-between"><span>Wednesday</span><span>9:00 AM - 5:00 PM</span></li>
          <li className="py-2 flex justify-between"><span>Thursday</span><span>9:00 AM - 5:00 PM</span></li>
          <li className="py-2 flex justify-between"><span>Friday</span><span>9:00 AM - 5:00 PM</span></li>
          <li className="py-2 flex justify-between"><span>Saturday</span><span>10:00 AM - 2:00 PM</span></li>
          <li className="py-2 flex justify-between text-gray-400"><span>Sunday</span><span>Closed</span></li>
        </ul>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default Appointment