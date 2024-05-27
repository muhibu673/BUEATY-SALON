import React from 'react'


import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTwitterSquare } from "react-icons/fa";

function Menubar() {
    return (
        <div className='sticky top-0 bg-white flex justify-between items-center p-3 px-8 shadow-md'>
            {/* LOGO */}
            <div>
                <img src="/Logo.jpeg" alt="logo" className='w-32 aspect-video' />
            </div>
            {/* Links */}
            <div className='flex justify-start items-end space-x-10 font-mono'>
                <div className='cursor-pointer'>BUEATY TEMPLE</div>
                <div className='cursor-pointer'>TREATMENTS</div>
                <div className='cursor-pointer'>EXPERIENCES</div>
                <div className='cursor-pointer'>OUR LOCATION</div>
            </div>
            {/* socials */}
            <div className='flex items-center space-x-4 text-[#eb34ae]'>
                <a href="https://facebook.com">
                    <IoLogoFacebook size={25} className='cursor-pointer hover:animate-pulse' />
                </a>
                <a href="https://istagram.com">
                    <PiInstagramLogoFill size={25} className='cursor-pointer hover:animate-pulse' />
                </a>
                <a href="https://twitter.com">
                    <FaTwitterSquare size={25} className='cursor-pointer hover:animate-pulse' />
                </a>
            </div>
        </div>
    )
}

export default Menubar