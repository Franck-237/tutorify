import React from 'react';

import line from '../assets/img/Line 2.png';
import boy from '../assets/img/boy.png';
import japan from '../assets/img/japan.png';
import turkisk from '../assets/img/turkish.png';
import italia from '../assets/img/italia.png';
import group from '../assets/img/Group 3.png';
import chart from '../assets/img/Chart.png';


const Header = () => {
  return (
    <div className='container mx-auto px-5 pt-10'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2'>
                <div className='flex justify-start items-center space-x-4 text-[#FB9C46] font-semibold text-[16px] pb-4'>
                    <p>We are The Best </p>
                    <span><img src={line} alt="" /></span>
                </div>
                <div className='pb-4'>
                    <p className='text-[32px] font-bold'>Learn Frome Home With <span className='text-[#FB9C46]'>The Best</span> Online Languange Tutors</p>
                </div>
                <div className='pb-4'>
                    <p className='text-[#90A3B4] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum dui mollis . Suspendisse nulla :</p>
                </div>
                <div className='pb-8'>
                    <button className='text-white bg-[#058E6E] py-2 px-4 border rounded-xl shadow-md'>Try Free Lessons</button>
                </div>
            </div>
            <div>
                <div className='absolute flex justify-between items-center w-[250px] h-[250px] gap-[80px]'>
                    <div>
                        <img src={japan} alt="" className='pt-20 pr-10 w-[500px]'/>
                    </div>
                    <div>
                        <img src={turkisk} alt="" className='w-[300px]'/>
                    </div>
                </div>
                <div className='absolute flex justify-between items-center w-[250px] h-[250px] gap-[80px] pt-[250px] md:pt-[350px]'>
                    <div className='pr-10'>
                        <img src={chart} alt=""  className='absolute pt-12 pr-10'/>
                        <img src={group} alt="" className='w-[500px] bg-white border rounded-xl py-3 px-4 text-center mt-20 mr-10'/>
                    </div>
                    <div>
                        <img src={italia} alt="" className='w-[500px]'/>
                    </div>
                </div>
                <div className='w-[219px] h-[296px] md:w-[300px] md:h-[350px] bg-[#FB9C46] py-3 px-6 md:py-10 md:px-12 border rounded-full mt-20'>
                    <img src={boy} alt="" className='pt-2'/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Header;