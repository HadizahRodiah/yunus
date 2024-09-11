import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Royy from './component/Royy'
import About from './component/About'
import Service from './component/Service'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'
function App() {
  return (
      <>
    <Navbar/>
    <Royy/>
    <About/>
    <Service/>
    <Project/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default App
