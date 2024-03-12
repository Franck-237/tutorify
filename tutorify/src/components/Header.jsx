import React from 'react';

import line from '../assets/img/Line 2.png';
import boy1 from '../assets/img/boy1.png';


const Header = () => {
  return (
    <div className='container mx-auto px-5 pt-10 pb-5'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2'>
                <div className='flex justify-start items-center space-x-4 text-[#FB9C46] font-semibold text-[16px] pb-4'>
                    <p>We are The Best </p>
                    <span><img src={line} alt="" /></span>
                </div>
                <div className='pb-4'>
                    <p className='text-[32px] lg:text-[48px] font-bold'>Learn Frome Home With <span className='text-[#FB9C46]'>The Best</span> Online Languange Tutors</p>
                </div>
                <div className='pb-4'>
                    <p className='text-[#90A3B4] font-medium text-[14px] lg:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum dui mollis . Suspendisse nulla :</p>
                </div>
                <div className='pb-8'>
                    <button className='text-white bg-[#058E6E] py-2 px-4 border text-[18px] rounded-xl shadow-md'>Try Free Lessons</button>
                </div>
            </div>
            <div>
                <div className=' bg-[#FB9C46] border rounded-full py-4 px-6 md:py-5 md:px-7 mt-3 md:mt-0'>
                    <img src={boy1} alt="" className='w-[210px] h-[300px] md:w-[325px] md:h-[400px]'/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Header;