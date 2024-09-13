import React from 'react'
import BlogItem from './BlogItem'
import { blog_data } from '@/Assets/assets'

const BlogList = () => {
  return (
    <div className='mb-10'>
      <div className='flex justify-center mx-10  sm:gap-4 mb-10'>
        <button className='border border-black hover:btn-keren-3 px-4 py-1 scale-75 sm:scale-100'>All</button>
        <button className='border border-black hover:btn-keren-3 px-4 py-1 scale-75 sm:scale-100'>Technology</button>
        <button className='border border-black hover:btn-keren-3 px-4 py-1 scale-75 sm:scale-100'>Startup</button>
        <button className='border border-black hover:btn-keren-3 px-4 py-1 scale-75 sm:scale-100'>Lifestyle</button>
      </div>

      <div className='flex flex-wrap gap-x-1 justify-around gap-y-10 sm:mx-16'>
        {blog_data.map((item) => {
          return <BlogItem key={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
        })}
      </div>
    </div>
  )
}

export default BlogList