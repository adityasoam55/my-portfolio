import React from 'react';
import { IoIosContact } from 'react-icons/io';

function Footer() {
    return (
        <div id="footer" className="bg-gray-800 flex flex-col items-center gap-2 pt-5 font-mono pb-10">
            <IoIosContact className="text-white inline-block w-10 h-10"/>
            <h1 className='text-white text-4xl font-medium mb-4'>Contact Me</h1>
            <p className="text-gray-200 mt-1">
                Sant Nagar, Delhi - 110084
            </p>
            <p className="text-gray-200 leading-relaxed text-sm">
                adityasoam55@gmail.com
            </p>
            <p className="leading-relaxed text-gray-200">+91 8384899626</p>
        </div>
    )
}

export default Footer;
