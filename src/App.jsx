import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Appointment from "./component/Appointment";
import Doctors from "./component/Doctors";
import Services from "./component/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
