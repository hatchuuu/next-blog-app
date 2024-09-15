import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (


        <div className='flex flex-col sm:flex-row justify-around gap-2 px-7 items-center py-10 text-white bg-black' >
            <Image src={assets.logo_light} alt='logo' className='sm:w-[120px] w-32' />
            <p className='text-sm '>All right deserve. Copyright @KusumaBlogs</p>
            <div className="flex">
                <Image src={assets.facebook_icon} alt='footer' className='w-[40px]' />
                <Image src={assets.twitter_icon} alt='footer' className='w-[40px]' />
                <Image src={assets.googleplus_icon} alt='footer' className='w-[40px]' />
            </div>
        </div>
    )
}

export default Footer