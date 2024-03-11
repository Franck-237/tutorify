import React, { useState } from 'react';

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {

    const Links = [
        {
            title: 'Home',
        },{
            title: 'Lessons'
        },{
            title: 'Find Tutors'
        },{
            title: 'About Us'
        },
    ];

    const [nav, setNav] = useState(false);

  return (
    <div className='container mx-auto px-5 pt-5'>
        <div className='flex justify-between items-center pb-3 md:pb-5'>
            <div>
                <p className='text-[poppins] text-[#393939] text-[18px] font-bold'>Tutorify</p>
            </div>
            <div className='overflow-hidden'>
                <div onClick={() => setNav(!nav)} className='md:hidden'>
                        {
                            nav ?
                            <MdClose className='text-[#FB9C46] w-[24px] h-[29.58px] md:hidden'/>
                             : 
                            <FiMenu className='text-[#FB9C46] w-[24px] h-[29.58px] md:hidden'/>
                        }
                </div>
             <div className={`absolute bg-gray-200 pt-10 flex h-[70vh] flex-col md:pt-0 md:bg-white md:relative left-0 w-[100%] md:w-auto md:h-auto md:flex-row justify-start md:justify-between items-center space-y-5 md:space-y-0 md:space-x-10 text-[16px] font-semibold ${nav ? 'left-0 transition-all duration-700' : 'left-[-1000px] transition-all duration-700'} md:left-0`}>
                <ul className=''>
                    {
                        Links.map((data) => (
                            <li key={data.title} className='space-y-4 md:space-y-0 md:inline-block md:pr-4'>
                                <a href="" className='text-[#393939] hover:text-[#FB9C46] focus:text-[#FB9C46]'>{data.title}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-4 text-white'>
                    <button className='bg-[#407F55] px-5 py-1 border rounded-lg'>Login</button> 
                    <button className='bg-[#FB9C46] px-5 py-1 border rounded-lg'>Sign Up</button>
                </div>
             </div>
            </div>
        </div>
        <hr className='text-[#C4C4C4]'/>
    </div>
  )
};

export default Navbar;