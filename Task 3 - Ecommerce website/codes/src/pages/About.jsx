import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex felx-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque recusandae omnis modi facere! Officiis magnam quidem cupiditate quod, alias labore quos! Voluptates eaque harum animi id similique natus illo, eum odio enim explicabo inventore error nulla cupiditate, corporis voluptatum repellendus repudiandae laborum consectetur. Quis expedita dolorem temporibus beatae id est.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius asperiores minus optio veniam necessitatibus! Laudantium, perferendis. Ex nam non quidem, a, harum est voluptas quod voluptate quibusdam porro sint dolores voluptates. Officia vel eveniet aliquam fugit. Maiores quidem, excepturi eius ut rerum amet eveniet maxime eos temporibus molestias nesciunt.</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat.</p>
        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
