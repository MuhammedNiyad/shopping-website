import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoMenuOutline } from 'react-icons/io5'

const MobNavbar = () => {
  return (
    <div className='fixed bottom-0 w-full bg-white lg:hidden left-1/2 -translate-x-1/2 max-w-[500px] mob_navbar px-8'>
        <div className='flex justify-between text-[28px] py-2'>
            <IoMenuOutline/>
            <div className='relative'>
                <HiOutlineShoppingBag/>
                <div className='absolute top-[-3px] right-[-3px] bg-red-500 w-4 h-4 rounded-full grid place-items-center text-[12px] text-white'>
                    0
                </div>
            </div>
            <div className='relative'>
                <FiHeart/>
                <div className='absolute top-[-3px] right-[-3px] bg-red-500 w-4 h-4 rounded-full grid place-items-center text-[12px] text-white'>
                    0
                </div>
            </div>
            <AiOutlineAppstore/>
        </div>
    </div>
  )
}

export default MobNavbar