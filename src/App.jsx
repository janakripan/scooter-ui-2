import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./routes/components/Navbar"
import Footer from "./routes/components/Footer"

function App() {


  return (
    <>
     
    <Navbar/>


    <div id="detail">
          <Outlet/>
    </div>

    <Footer/>



    </>
  )
}

export default App
