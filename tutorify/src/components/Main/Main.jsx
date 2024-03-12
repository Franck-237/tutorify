import React from 'react';

import line from '../../assets/img/Line 2.png';
import arrow from '../../assets/img/arrow.png';
import MainFirst from './MainFirst';
import MainSecond from './MainSecond';
import MainThird from './MainThird';
import MainFourth from './MainFourth';

const Main = () => {
  return (
    <div className='container mx-auto px-5 pt-10 pb-5'>
        <div className='flex flex-col justify-between items-start md:gap-10 md:flex-row'>
            <div className='md:w-[50%]'>
                <div>
                    <p className='font-semibold text-[16px] text-[#FB9C46] pb-3 lg:pb-5'>What do you want to learn ?</p>
                </div>
                <div>
                    <p className='font-bold lg:text-[48px] text-[30px] text-[#393939] pb-3 lg:pb-5'>What We Offer</p>
                </div>
                <div className='flex justify-start items-center gap-4 pb-5'> 
                    <p className='font-semibold text-[18px] text-[#FB9C46]'>I want to learn  </p>
                    <span><img src={line} alt="" /></span>
                </div>
            </div>
            <div>
                <div>
                    <p className='font-medium text-[12px] lg:text-[14px] text-[#90A3B4]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna nec faucibus ridiculus placerat ipsum. Volutpat eget ut vitae amet ullamcorper et, ante venenatis.</p>
                </div>
                <div className='flex justify-between items-center pt-5'>
                    
                    <div className='flex gap-2 justify-between items-center'>
                        <p className='font-semibold text-[16px]'>View all</p>
                        <span><img src={arrow} alt="" /></span>
                    </div>
                </div>
            </div>
        </div>
        <MainFirst />
        <MainSecond />
        <MainThird />
        <MainFourth />
    </div>
  )
};

export default Main;