import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className='hidden border-b border-gray-200 sm:block'>
        <div className='container py-4'>
            <div className='flex items-center justify-between'>
                <div className="hidden gap-1 lg:flex">
                    <div className="header_top__icon_wrapper">
                        <FaFacebook />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <FaTwitter />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <FaInstagram />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <FaLinkedin />
                    </div>
                </div>
                <div className='text-gray-500 text-[12px]'>
                    <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $75.00
                </div>
                <div className='flex gap-4'>
                    <select name="currency" id="currency" className='text-gray-500 text-[12px] w-[70px]'>
                        <option value="USD">USD $</option>
                        <option value="EUR">EUR €</option>
                        <option value="INR">INR ₹</option>
                    </select>
                    <select name="language" id="language" className='text-gray-500 text-[12px] w-[70px]'>
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop