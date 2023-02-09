import Link from 'next/link'
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between flex-col md:flex-row md:justify-start items-center py-2 shadow-xl'>
    <div className='logo mr-10 ml-4'>
    <Link href="/">
    <img src='https://seeklogo.com/images/L/landscaping-logo-9143984FEB-seeklogo.com.png' className='w-32'/>
    </Link>
    </div>
    <div className='nav'>
    <ul className='flex items-center space-x-4 font-bold md:text-md '>
    <Link href='/tshirts'>Tshirts</Link>
    <Link href='/hoodies'>Hoodies</Link>
    <Link href='/stickers'>Stickers</Link>
    <Link href='/mugs'>Mugs</Link>
    </ul>
    </div>

    <div className='cart absolute right-0 mx-5 top-6'>
    <AiOutlineShoppingCart className='text-xl md:text-2xl'/>
    </div>
    </div>
  )
}

export default Navbar