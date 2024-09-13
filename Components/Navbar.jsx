import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <Image src={assets.logo} alt='logo' className='w-[130px] sm:w-[180px]' />
                <button className=' py-2 px-2 border-2 border-black sm:py-3 sm:px-6 hover:btn-keren-3 gap-2 flex'> Get Started <Image src={assets.arrow} /></button>
            </div>
            
        </>
    )
}
export default Navbar