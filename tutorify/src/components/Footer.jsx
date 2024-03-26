import React, { useState } from 'react';

import google from '../assets/img/google.png';
import tweet from '../assets/img/tweet.png';
import insta from '../assets/img/insta.png';
import linkedin from '../assets/img/linkedin.png';
import arrowdown from '../assets/img/arrowdown.png';

const Footer = () => {

  const LinkTutor = [
    {
        title: 'English Teachers',
    },{
        title: 'Chinese Teachers',
    },{
        title: 'French Teachers',
    },{
        title: 'Spanish Teachers',
    },{
        title: 'Others Teachers',
    }
  ]; 

  const [Link, setLink] = useState(false);

  return (
    <div className='bg-[#F2BF62] pt-5'>
        <div className='container mx-auto px-5 py-5 flex flex-col text-white'>
            <div className='lg:flex lg:justify-start gap-5'>
                <div>
                    <p className='text-[24px] font-medium md:text-[16px] pb-3'>Tutorify</p>
                    <p className='text-[12px] font-regular md:text-[16px] pb-3'>Learn more than just a language</p>
                    <div className='flex items-center justify-start gap-2'>
                        <img src={google} alt="" />
                        <img src={tweet} alt="" />
                        <img src={insta} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className='my-5 py-1 lg:py-0 px-2 border-2 border-white lg:border-none'>
                    <div className='flex justify-between items-center gap-5 mb-3'> 
                        <p className='text-[14px] md:text-[18px] md:font-medium'>Find Tutors</p>
                        <div onClick={() => setLink(!Link)} className='cursor-pointer my-2 mx-2'>
                            {
                                Link ?
                                <img src={arrowdown} alt="" className='text-[14px] rotate-180 transition-all duration-700 lg:hidden'/>
                                :
                                <img src={arrowdown} alt="" className='text-[14px] transition-all duration-700 lg:hidden'/>
                            }
                        </div>
                    </div>
                    <div>
                        <ul>
                                {
                                  LinkTutor.map((data) =>(
                                    <li key={data.title}>
                                        <a href="" className='text-[14px] md:text-[16px] md:font-regular hidden lg:block'>{data.title}</a>
                                    </li>
                                 ))
                            }
                        </ul>
                        <ul className=''>
                            {
                                LinkTutor.map((data) =>(
                                    Link ? 
                                    <li key={data.title}>
                                        <a href="" className='text-[14px] md:text-[18px] md:font-medium'>{data.title}</a>
                                    </li>
                                    : 
                                    <li key={data.title} className='hidden'>
                                        <a href="" className='text-[14px] md:text-[18px] md:font-medium'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='my-5 py-1 lg:py-0 px-2 border-2 border-white lg:border-none'>
                    <div className='flex justify-between items-center gap-5 mb-3'> 
                        <p className='text-[14px] md:text-[18px] md:font-medium'>Lessons</p>
                        <div onClick={() => setLink(!Link)} className='cursor-pointer my-2 mx-2'>
                            {
                                Link ?
                                <img src={arrowdown} alt="" className='text-[14px] rotate-180 transition-all duration-700 lg:hidden'/>
                                :
                                <img src={arrowdown} alt="" className='text-[14px] transition-all duration-700 lg:hidden'/>
                            }
                        </div>
                    </div>
                    <div>
                        <ul>
                                {
                                  LinkTutor.map((data) =>(
                                    <li key={data.title}>
                                        <a href="" className='text-[14px] md:text-[16px] md:font-regular hidden lg:block'>{data.title}</a>
                                    </li>
                                 ))
                            }
                        </ul>
                        <ul className=''>
                            {
                                LinkTutor.map((data) =>(
                                    Link ? 
                                    <li key={data.title}>
                                        <a href="" className='text-[14px] md:text-[18px] md:font-medium'>{data.title}</a>
                                    </li>
                                    : 
                                    <li key={data.title} className='hidden'>
                                        <a href="" className='text-[14px] md:text-[18px] md:font-medium'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='my-5 py-1 lg:py-0 px-2 border-2 border-white lg:border-none'>
                    <div className='flex justify-between items-center gap-5 mb-3'> 
                        <p className='text-[14px] md:text-[18px] md:font-medium'>Company</p>
                        <div onClick={() => setLink(!Link)} className='cursor-pointer my-2 mx-2'>
                            {
                                Link ?
                                <img src={arrowdown} alt="" className='text-[14px] rotate-180 transition-all duration-700 lg:hidden'/>
                                :
                                <img src={arrowdown} alt="" className='text-[14px] transition-all duration-700 lg:hidden'/>
                            }
                        </div>
                    </div>
                    <div>
                        <ul>
                                {
                                  LinkTutor.map((data) =>(
                                    <li key={data.title}>
                                        <a href="" className='text-[14px] md:text-[16px] md:font-regular hidden lg:block'>{data.title}</a>
                                    </li>
                                 ))
                            }
                        </ul>
                        <ul className=''>
                            {
                                LinkTutor.map((data) =>(
                                    Link ? 
                                    <li key={data.title}>
                                        <a href="" className='text-[14px] md:text-[18px] md:font-medium'>{data.title}</a>
                                    </li>
                                    : 
                                    <li key={data.title} className='hidden'>
                                        <a href="" className='text-[14px] md:text-[18px] md:font-medium'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='my-5 py-1 lg:py-0 px-2 border-2 border-white lg:border-none'>
                    <div className='flex justify-between items-center gap-5 mb-3'> 
                        <p className='text-[14px] md:text-[18px] md:font-medium'>More</p>
                        <div onClick={() => setLink(!Link)} className='cursor-pointer my-2 mx-2'>
                            {
                                Link ?
                                <img src={arrowdown} alt="" className='text-[14px] rotate-180 transition-all duration-700 lg:hidden'/>
                                :
                                <img src={arrowdown} alt="" className='text-[14px] transition-all duration-700 lg:hidden'/>
                            }
                        </div>
                    </div>
                    <div>
                        <ul>
                                {
                                  LinkTutor.map((data) =>(
                                    <li key={data.title}>
                                        <a href="" className='text-[14px] md:text-[16px] md:font-regular hidden lg:block'>{data.title}</a>
                                    </li>
                                 ))
                            }
                        </ul>
                        <ul className=''>
                            {
                                LinkTutor.map((data) =>(
                                    Link ? 
                                    <li key={data.title}>
                                        <a href="" className='text-[14px] md:text-[18px] md:font-medium'>{data.title}</a>
                                    </li>
                                    : 
                                    <li key={data.title} className='hidden'>
                                        <a href="" className='text-[14px] md:text-[18px] md:font-medium'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-[16px] font-semibold text-center'>Copyright © 2021. Crafted with love.</p>
            </div>
        </div>
    </div>
  )
};

export default Footer;