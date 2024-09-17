import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const conetxt = () => {
  return (
    <div>
      <div className='text-center texr-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'> 
          <p className='font-semibold text-xl text-gray-500'>Our Store</p>
          <p className='text-gray-500'>5463 Satpur <br /> Nashik, Maharashtra</p>
          <p className='text-gray-500'>Tel:***** ***** <br />Email:Abc123@gmail.com</p>
          <p className='text-gray-500'>Career At Forever</p>
          <p className='text-gray-500'>Learn About us our teams and jobs</p>

        </div>

      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default conetxt
