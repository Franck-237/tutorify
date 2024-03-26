import React from 'react';

import boy2 from '../../assets/img/boy2.png';

const MainFirst = () => {
  return (
    <div className='pt-5 md:pt-0'>
        <div className='flex flex-col justify-between items-center md:flex-row font-medium'>
            <div>
                <div className='pb-5 lg:pb-7 text-[30px] lg:text-[32px]'> 
                    <p>Purchase your awesome lessons and find your tutors </p>
                </div>
                <div className='pb-5 lg:pb-7 text-[#90A3B4] text-[12px] lg:text-[18px]'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem habitant a tincidunt cras accumsan integer suscipit. Libero accumsan eget aliquet.</p>
                </div>
                <div className='pb-5'>
                    <button className='bg-[#FB9C46] px-3 py-2 border rounded-xl text-white mr-3 text-[12px] lg:text-[18px] hover:bg-white hover:text-[#FB9C46] hover:transition-all hover:duration-500'>Book Your Lessons</button>
                    <button className='px-3 py-2 border border-[#FB9C46] rounded-xl text-[#FB9C46] text-[12px] lg:text-[18px] hover:bg-[#FB9C46] hover:text-white hover:transition-all hover:duration-500'>Find Your Tutors</button>
                </div>
            </div>
            <div>
                <img src={boy2} alt=""  className='pr-[10%] lg:pr-0'/>
            </div>
        </div>
    </div>
  )
};

export default MainFirst;