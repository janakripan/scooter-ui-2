import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import navbarData from '../../constants/navbarData'
import { Link, animateScroll as scroll } from "react-scroll";
import SharedButton from '../../assets/shared/SharedButton'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';





function Navbar() {

    const [menu , setMenu]= useState(false)

const handleClick=()=>{
    setMenu(!menu)
    console.log(menu)
}
  return (
   <header>

        <div className='  w-full h-16 mt-4 shadow-md max-w-screen-xl mx-auto ' >
            <div className="w-full flex items-center justify-between md:px-4 ">
                <div className='h-fit w-fit flex gap-x-4'>
                    <button className='h-fit w-fit md:hidden p-1' onClick={handleClick} >
                    <div className={`transition-transform duration-300 transform ${
                                   menu ? "scale-110 rotate-90" : "scale-100 rotate-0"
                                 }`}>
                    {menu?(
                    <CloseIcon/>
                   ):
                   (<MenuIcon/>)
                   }
                    </div>
                    </button>
                    <img src={logo} alt="" />
                </div>

                {
                    <div className={`sidebar md:hidden bg-white opacity-100 z-20 border-scooter border-[1px] py-2 rounded-lg w-fit h-fit absolute left-0 top-20
                    inset-0  transition-transform duration-700 ease-in-out  
                    transform ${menu ? "translate-x-0  " : "-translate-x-full   "}
                    `}>


                    <ul className='flex flex-col justify-center gap-y-4'>
                    {navbarData.map((item)=>(
                        <Link  to={item.id} onClick={handleClick} key={item.id}  className="4/12 h-full flex items-center gap-4 font-ubuntu-regular  transition-all rounded-md duration-1000 p-1" >
                            <li  className='hover:bg-scooter hover:text-white w-full rounded-lg text-scooter px-4  '>

                                {item.title}

                                <div className='h-[1px] w-full bg-black shadow-lg'></div>

                            </li>
                        </Link>
                    ))}
                    </ul>

                </div>
                }

                <div className='hidden md:block'>
                <ul className='flex w-2/12 items-center gap-x-4 justify-between' >
                    {navbarData.map((item)=>(
                        <Link
                        to={item.id}
                        smooth={true}
                        duration={500}
                        key={item.id}  className="4/12 h-full flex items-center gap-4 font-ubuntu-regulartext-scooter  transition-all rounded-md duration-500 p-1
                        hover:underline hover:cursor-pointer ">
                            <li >

                                {item.title}

                            </li>
                        </Link>
                    ))}
                </ul>
                </div>
                <div>

                        <SharedButton className=' scale-75 md:scale-100 bg-transparent  text-scooter font-ubuntu-light hover:scale-105' >
                            Login

                        </SharedButton>
                        <SharedButton className=' scale-75 md:scale-100 font-ubuntu-light  text-white hover:scale-105'>
                            Sign Up
                        </SharedButton>

                </div>
            </div>

        </div>

   </header>
  )
}

export default Navbar
