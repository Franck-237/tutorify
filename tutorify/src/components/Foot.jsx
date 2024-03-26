import React from 'react';

import emoji from '../assets/img/emoji.png';
import users from '../assets/img/users.png';

const foot = () => {
  return (
    <div className='md:container md:mx-auto md:px-5'>
        <div className="bg-[#FB9C46] flex flex-col md:flex-row md:justify-between md:items-center gap-5 px-5 py-10 md:px-10 my-10 justify-start items-start">
            <div>
                <div className='flex pb-3 flex-wrap items-center justify-start gap-2 text-white text-[30px] font-medium md:text-[36px]'>
                    <p>Learn more than just a language </p>
                    <span><img src={emoji} alt="" /></span>
                </div>
                <p className='text-[12px] text-white font-medium py-2 md:text-[14px]'>Over 100,000 students join us monthly</p>
                <div className='flex pt-3 items-center justify-start gap-5'> 
                    <span><img src={users} alt="" /></span>
                    <p className='text-[12px] text-white font-medium md:text-[14px]'>and others</p>
                </div>
            </div>
            <div>
                <button className='text-[#FB9C46] text-[16px] font-medium bg-white cursor-pointer py-2 px-3 border rounded-xl'>Get your free lessons now</button>
            </div>
        </div>
    </div>
  )
};

export default foot;