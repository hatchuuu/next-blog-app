import React from 'react'
import Navbar from './Navbar'


const Header = () => {
    return (
        <>
            <div className='py-5 px-5 md:px-12 lg:px-28'>
              <Navbar />
                <div className='text-center mt-8 mb-2 sm:my-8'>
                    <h1 className='font-keren text-3xl sm:text-5xl font-semibold '>Khusuma Blogs</h1>
                    <p className='mt-10 mb-5 max-w-[740px] m-auto text-xs sm:text-base'>Blog mengenai perkembangan teknologi dan tidak jarang mengenai keseharian pribadi penulis</p>
                    <form action="" className='mt-10 flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto border-2 border-black hover:btn-keren-7 focus-within:btn-keren-7'>
                        <input type="email" placeholder='Enter your email' className='ps-4 outline-none w-full ' />
                        <button className='py-4 px-4 sm:px-8 border-black border-s-2 hover:bg-hijau'>Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Header
