import React from 'react';

import user from '../../assets/img/user.png';
import video from '../../assets/img/video.png';
import triangle from '../../assets/img/triangle.png';

const MainThird = () => {
  return (
    <div>
        <div className='flex flex-col justify-between items-center md:flex-row md:gap-16 pt-5'>
            <div>
                <div className='pb-2'>
                    <p className='text-[30px] lg:text-[36px] text-[#393939]'>Here’s how it <span className='text-[#FB9C46]'>works</span></p>
                </div>
                <div className='pb-5'>
                    <p className='text-[12px] lg:text-[18px] text-[#6C6C6C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem habitant a tincidunt cras accumsan integer suscipit. Libero accumsan eget aliquet.</p>
                </div>
                <div className='bg-white border rounded-xl shadow-md shadow-[#FB9C46] py-2 px-3 mt-4 lg:w-2/3'>
                    <div className='flex justify-start items-start gap-3'>
                        <img src={user} alt=""  className='w-[30px] lg:w-[40px]'/>
                        <div>
                            <p className='text-[12px] lg:text-[16px] font-medium pb-2 text-[#FB9C46]'>Find a tutor</p>
                            <p className='text-[10px] lg:text-[14px]'>Choose your ideal teacher from over 10,000 qualified language tutors.</p>
                        </div>
                    </div>
               </div>
               <div className='bg-white border rounded-xl shadow-md shadow-[#FB9C46] py-2 px-3 mt-4 lg:w-2/3'>
                    <div className='flex justify-start items-start gap-3'>
                        <img src={user} alt=""  className='w-[30px] lg:w-[40px]'/>
                        <div>
                            <p className='text-[12px] lg:text-[16px] font-medium pb-2 text-[#FB9C46]'>Find a tutor</p>
                            <p className='text-[10px] lg:text-[14px]'>Choose your ideal teacher from over 10,000 qualified language tutors.</p>
                        </div>
                    </div>
               </div>
               <div className='bg-white border rounded-xl shadow-md shadow-[#FB9C46] py-2 px-3 mt-4 lg:w-2/3'>
                    <div className='flex justify-start items-start gap-3'>
                        <img src={user} alt=""  className='w-[30px] lg:w-[40px]'/>
                        <div>
                            <p className='text-[12px] lg:text-[16px] font-medium pb-2 text-[#FB9C46]'>Find a tutor</p>
                            <p className='text-[10px] lg:text-[14px]'>Choose your ideal teacher from over 10,000 qualified language tutors.</p>
                        </div>
                    </div>
               </div>
            </div>
            <div className='pt-12 lg:pt-0'>
                <img src={triangle} alt="" className='absolute pl-24 pt-24 md:pl-20 md:pt-20 lg:pl-24 lg:pt-24'/>
                <img src={video} alt="" className='w-[300px] md:w-auto'/>
            </div>
        </div>
    </div>
  )
};

export default MainThird;