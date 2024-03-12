import React from 'react';


import star from '../../assets/img/star.png';
import pp from '../../assets/img/pp.png';

const MainFourth = () => {

  return (
    <div className='pt-16'>
        <div className='flex flex-col justify-between items-center md:flex-row md:gap-5'>
            <div>
                <div>
                    <p className='text-[#FB9C46] text-[30px] lg:text-[36px] font-medium pb-3 lg:pb-5'>Edu Smart it's about mastering a timeless skill</p>
                </div>
                <div>
                    <p className='text-[#90A3B4] text-[12px] lg:text-[16px]'>cultivating new perspectives, and connecting with fascinating people from around the world.</p>
                </div>
            </div>
            <div className='pt-10'> 
                    <div>
                        <div>
                            <img src={star} alt="" className=''/>
                        </div>
                        <div>
                            <p className='text-[12px] lg:text-[18px] text-[#90A3B4] pt-5'>“With Edu Smart, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students</p>
                        </div>
                        <div className='flex justify-start gap-4 items-start pt-5'>
                            <div>
                                <img src={pp} alt="" />
                            </div>
                            <div>
                                <p className='lg:text-[20px] text-[#FB9C46] text-[10px] pb-2'>Jaquon Hart</p>
                                <p className='lg:text-[16px] text-[8px] text-[#90A3B4]'>Digital Marketing Executive, Hypebeast</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
};

export default MainFourth;