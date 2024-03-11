import React from 'react';

import line from '../../assets/img/Line 2.png'
import drapeaux from '../../assets/img/drapeaux.png';

const Main = () => {
  return (
    <div className='container mx-auto px-5 pt-10'>
        <div className='flex flex-col justify-between items-start md:flex-row'>
            <div className=' md:w-1/2'>
                <div>
                    <p className='font-semibold text-[16px] text-[#FB9C46] pb-3'>What do you want to learn ?</p>
                </div>
                <div>
                    <p className='font-bold text-[24px] text-[#393939] pb-3'>What We Offer</p>
                </div>
                <div className='flex justify-start items-center gap-4 pb-5'> 
                    <p className='font-semibold text-[16px] text-[#FB9C46]'>I want to learn  </p>
                    <span><img src={line} alt="" /></span>
                </div>
            </div>
            <div>
                <div>
                    <p className='font-medium text-[16px] text-[#90A3B4]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna nec faucibus ridiculus placerat ipsum. Volutpat eget ut vitae amet ullamcorper et, ante venenatis.</p>
                </div>
                <div>
                    <img src={drapeaux} alt="" className='w-[372.8px] h-[200px] md:hidden'/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Main;