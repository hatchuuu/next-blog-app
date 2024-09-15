import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import { Button } from './ui/button'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between text-center items-center mx-4 sm:mt-3'>
                <Link href={'/'}>
                <Image src={assets.logo} alt='logo' className='w-[100px] sm:w-[180px] text-center' />
                </Link>
                <Button variant='kerenkecil' className='text-sm sm:text-lg py-4 px-2 border-2 border-black sm:py-6 sm:px-7 gap-3 flex '>Get Started <Image className="w-[10px] sm:w-[15px] "src={assets.arrow}/> </Button>
               
            </div>
            
        </>
    )
}
export default Navbar