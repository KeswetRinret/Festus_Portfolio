import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/landingPage/Hero'
// import MyWorks from './components/myWorks'
import  Works from "./components/myWorks/Works"
import Landing from './Landing'
import Services from './components/Services'
import Marb from './components/myWorks/Marb'
import About from './components/About'
import ProClub from './components/myWorks/ProClub'
import Infinity from './components/myWorks/Infinity'
import Wander from './components/myWorks/Wander'
import MoreAbout from './components/otherPages/MoreAbout'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}/> 
        <Route path="/works" element={<Works />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/marb" element={<Marb />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/proClub" element={<ProClub />}/>
        <Route path="/infinity" element={<Infinity />}/>
        <Route path="/wander" element={<Wander/>}/>
        <Route path="/moreAbout" element={<MoreAbout/>}/>

      </Routes>
      {/* <Navbar /> */}
    </div>
  )
}

export default App
