import React from 'react'

export default function Header() {
  return (
    <div className='bg-green-800 text-white p-4 w-full lg:h-20 flex gap-10 lg:justify-between items-center'>
        <h1 className='font-bold text-3xl lg:ml-14'>Cartlio</h1>
        <div className='flex gap-4 lg:w-1/3 lg:border-b-2 lg:border-y-slate-500 lg:h-12 items-center lg:justify-center'>
            <a href='#' className='font-normal text-md'>Home</a>
            <a href='#' className='font-normal text-md'>Products</a>
            <a href='#' className='font-normal text-md'>Contact</a>
            <a href='#' className='font-normal text-md'>Catagory</a>
             <a href='#' className='font-normal text-md'>About</a>
             <a href='#' className='font-normal text-md'>Offers</a>

        </div>
        <div className='flex gap-4 lg:w-1/5 lg:justify-center items-center  p-2  lg:h-14 lg:mr-20'>
           <a href='#' className='font-semibold text-lg lg:bg-white text-green-700 p-2 rounded'>Cart</a>
            <a href='#' className='font-semibold text-lg'>Account</a>
        

        </div>
              

    </div>
  )
}
