import React from 'react'

export default function Header() {
  return (
    <div className='bg-gray-800 text-white p-4 w-full lg:h-20 flex gap-4 lg:justify-evenly items-center'>
        <h1 className='font-bold text-2xl'>Ecomerce</h1>
        <div className='flex gap-4 lg:w-1/3 bg-yellow-200 lg:h-14 items-center lg:justify-center'>
            <a href='#' className='font-semibold text-lg'>Home</a>
            <a href='#' className='font-semibold text-lg'>Products</a>
            <a href='#' className='font-semibold text-lg'>Contact</a>
            <a href='#' className='font-semibold text-lg'>Catagory</a>
             <a href='#' className='font-semibold text-lg'>About</a>
             <a href='#' className='font-semibold text-lg'>Offers</a>

        </div>
        <div className='flex gap-4 lg:w-1/3 justify-end bg-white p-2  lg:h-14'>


        </div>
              

    </div>
  )
}
