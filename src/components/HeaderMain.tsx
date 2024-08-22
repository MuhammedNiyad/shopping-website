import React from 'react'
import { FaHeart, FaRegHeart, FaRegUser, FaSearch, FaUser } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'

const HeaderMain = () => {
  return (
    <div className='py-6 border-b border-gray-200'>
        <div className='container items-center justify-between sm:flex'>
            <div className='pb-4 text-4xl font-bold text-center sm:pb-0 text-blackish'>Logo</div>
             <div className='w-full sm:w-[300px] md:w-[70%] relative'>
                <input type="text" placeholder='Search...' className='w-full p-2 px-4 border border-gray-200 rounded-lg '/>
                <FaSearch size={20} className='absolute text-gray-500 -translate-y-1/2 right-3 top-1/2' />
             </div>
             <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                <FaRegUser size={25}/>
                <div className='relative'>
                    <FaRegHeart size={25}/>
                    <div className='bg-red-500 text-white text-[10px] w-[15px] h-[15px] rounded-full text-center absolute right-[-5px] top-[-5px]'>
                        0
                    </div>
                </div>
                <div className='relative'>
                    <MdOutlineShoppingBag size={25} />
                    <div className='bg-red-500 text-white text-[10px] w-[15px] h-[15px] rounded-full text-center absolute right-[-5px] top-[-5px]'>
                        0
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default HeaderMain