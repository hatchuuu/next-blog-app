import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'
import Link from 'next/link'

const BlogItem = ({image, title, description, category, id}) => {
  return (
    <div className=' group max-w-[300px] mx-auto bg-white  border-black border-2 hover:btn-keren-3  rounded-sm'>
      <Link href={`/blogs/${id}`}>
      <Image src={image} alt='image' />
      <p className='sm:text-base text-sm text-white bg-black px-2 py-1 inline-block m-5'>{category}</p>
      <div className='mx-5 mb-5'>
        <p className='text-base sm:text-lg tracking-tight mb-2 text-gray-900'>{title}</p>
        <p className=' sm:text-sm text-xs text-gray-600'> {description}</p>
        <div className='w-max p-2 rounded-md group-hover:bg-hijau flex gap-2 mt-3 font-semibold text-center'>
          Read more
          <Image src={assets.arrow }alt='image'className='scale-75' />
        </div>
      </div>
      </Link>
    </div>
  )
}

export default BlogItem