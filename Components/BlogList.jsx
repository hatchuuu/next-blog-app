import React from 'react'
import BlogItem from './BlogItem'
import { blog_data } from '@/Assets/assets'
import { useState } from 'react'
import { clsx } from 'clsx'

const BlogList = () => {

  const [menu, setMenu] = useState('All')
  console.log(menu)

  const buttonMenu = (text, menu, setMenu) => {
    return (
      <button onClick={() => { setMenu(text) }} className={clsx(
        ' px-3 py-1 text-xs sm:scale-150 rounded-sm',
        {
          'bg-black text-white': menu === text,
          'text-black bg-white hover:bg-hijau': menu !== text,
        }
      )
      }> {text} </button>
    )
  }

  return (

    <div className='my-10'>
      <div className='flex justify-center mb-10 sm:mb-14 gap-1 sm:gap-16'>
{
  buttonMenu('All', menu, setMenu)
}
{
  buttonMenu('Technology', menu, setMenu)
}
{
  buttonMenu('Startup', menu, setMenu)
}
{
  buttonMenu('Lifestyle', menu, setMenu)
}












        {/* <button onClick={() => { setMenu('Technology') }} className={menu === "Technology" ? 'border-black  px-3 py-1 text-xs sm:scale-150 bg-black text-white' : 'hover:bg-hijau border border-black  px-3 py-1 text-xs sm:scale-150'} >Technology</button>
        <button onClick={() => { setMenu('Startup') }} className={menu === "Startup" ? 'border-black  px-3 py-1 text-xs sm:scale-150 bg-black text-white' : 'hover:bg-hijau border border-black  px-3 py-1 text-xs sm:scale-150'} >Startup</button>
        <button onClick={() => { setMenu('Lifestyle') }} className={menu === "Lifestyle" ? 'border-black  px-3 py-1 text-xs sm:scale-150 bg-black text-white' : 'hover:bg-hijau border border-black  px-3 py-1 text-xs sm:scale-150'} >Lifestyle</button> */}
      </div>


      <div className='flex flex-wrap gap-x-1 justify-around gap-y-10 sm:mx-16'>
        {blog_data.filter((item) => menu === 'All' ? true : item.category === menu).map((item) => {
          return <BlogItem key={item.id} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
        })}
      </div>
    </div>

  )

}

export default BlogList