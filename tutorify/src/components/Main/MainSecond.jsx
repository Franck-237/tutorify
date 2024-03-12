import React from 'react';

import girl from '../../assets/img/girl.png';
import square from '../../assets/img/square.png';

const MainSecond = () => {
  return (
    <div className='py-5'>
        <div className='flex flex-col justify-between md:flex-row-reverse'>
            <div>
               <div className='flex flex-col justify-between items-end lg:items-start'>
                <div>
                    <p className='pb-3 text-[30px] lg:text-[48px] font-medium'>What Will You <span className='text-[#058E6E]'>Get</span> ?</p>
                </div>
                <div>
                    <p className='pb-3 text-[12px] lg:text-[18px] text-[#6C6C6C] font-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum dui mollis . Suspendisse nulla :</p>
                </div>
               </div> 
               <div className='bg-white border rounded-xl shadow-md shadow-[#058E6E] py-2 px-3 mt-4 lg:w-2/3'>
                    <div className='flex justify-start items-start gap-3'>
                        <img src={square} alt=""  className='w-[30px] lg:w-[40px]'/>
                        <div>
                            <p className='text-[12px] lg:text-[16px] font-medium pb-2'>1-on-1 lessons in more than 150 languages</p>
                            <p className='text-[10px] lg:text-[14px]'>Develop your language skills by building connections with others... <span className='text-[#058E6E]'>read more</span></p>
                        </div>
                    </div>
               </div>
               <div className='bg-white border rounded-xl shadow-md shadow-[#058E6E] py-2 px-3 mt-4 lg:w-2/3'>
                    <div className='flex justify-start items-start gap-3'>
                        <img src={square} alt=""  className='w-[30px] lg:w-[40px]'/>
                        <div>
                            <p className='text-[12px] lg:text-[16px] font-medium pb-2'>Practice for free with the italki community</p>
                            <p className='text-[10px] lg:text-[14px]'>Develop your language skills by building connections with others... <span className='text-[#058E6E]'>read more</span></p>
                        </div>
                    </div>
               </div>
               <div className='bg-white border rounded-xl shadow-md shadow-[#058E6E] py-2 px-3 mt-4 lg:w-2/3'>
                    <div className='flex justify-start items-start gap-3'>
                        <img src={square} alt=""  className='w-[30px] lg:w-[40px]'/>
                        <div>
                            <p className='text-[12px] lg:text-[16px] font-medium pb-2'>Take learning beyond the classroom</p>
                            <p className='text-[10px] lg:text-[14px]'>Learn from certified teachers with proven experience... <span className='text-[#058E6E]'>read more</span></p>
                        </div>
                    </div>
               </div>
            </div>
            <div className='pt-5 lg:pt-0'>
                <img src={girl} alt="" className='lg:w-[400px]'/>
            </div>
        </div>
    </div>
  )
};

export default MainSecond;