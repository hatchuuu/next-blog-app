import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'

const BlogItem = ({image, title, description, category}) => {
  return (
    <div className='max-w-[200px] md:max-w-[300px] sm:max-w-[250px] bg-white  border-black border-2 hover:btn-keren-3 '>
      <Image src={image} alt='' />
      <p className='sm:text-base text-sm text-white bg-black px-2 py-1 inline-block m-5'>{category}</p>
      <div className='mx-5 mb-5'>
        <p className='text-base sm:text-lg tracking-tight mb-2 text-gray-900'>{title}</p>
        <p className=' sm:text-sm text-xs text-gray-600'> {description}</p>
        <div className='flex gap-2 mt-3 font-semibold text-center'>
          Read more
          <Image src={assets.arrow }alt=''className='scale-75' />
        </div>
      </div>
    </div>
  )
}

export default BlogItem