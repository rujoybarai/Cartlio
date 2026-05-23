import React from 'react'

export default function Footer() {
 const footerSections = [
  {
    title: "Pages",
    links: [
      "Home",
      "About",
      "Services",
      "Pricing",
      "Instruction",
      "Contact Us",
    ],
  },
  {
    title: "Legal",
    links: [
      "Blogs",
      "Privacy Policy",
      "Return & Refund Policy",
      "Terms & Conditions",
      "Affiliate Program",
      "Login",
      "Career",
    ],
  },
  {
    title: "Contact Us",
    links: [
     "info@ebitans.com",
     
       "+8801886 515579",
     "House: 39, Road: 20, Nikunja 2, Dhaka-1229",
      "Rua dos Anjos 27 A/B, 1150-032 Lisboa Portugal",
      
    ],
  },
];



  return (
    <div className='lg:h-150 w-full flex flex-col items-center justify-center '>

      <div className='flex lg:justify-evenly lg:items-center   min-h-10/12 w-full  bg-gray-800'>

         <div className='flex flex-col gap-4 items-start justify-start w-1/4 h-[80%] text-white'>
            <h1 className='font-bold text-4xl  mb-10'>Cartlio</h1>

            <h2 className='font-bold text-2xl mb-0.5 '>Follow us on social media</h2>

            <div className='flex flex-col w-[50%] h-60 justify-center items-center gap-4  '>

                <a href='#' className='font-semibold text-md bg-green-800 px-2 rounded'>Facebook</a>
                <a href='#' className='font-semibold text-md bg-green-800 px-2 rounded'>Twitter</a>
                <a href='#' className='font-semibold text-md bg-green-800 px-2 rounded'>Instagram</a>
                <a href='#' className='font-semibold text-md bg-green-800 px-2 rounded'>LinkedIn</a>
            </div>



         </div>

         <div className='flex  gap-4 items-center justify-evenly w-2/4 h-[80%] text-white'>
              

                    {footerSections.map((section, index) => (
                       <div className='flex flex-col gap-1 items-start justify-start w-1/4 h-[80%] ' key={index}>
                         <h2 className='font-bold text-2xl mb-6 text-emerald-800 '>{section.title}</h2>

                        
                        {section.links && section.links.map((link, linkIndex) => ( 
                          <p className='font-semibold text-md lg:text-lg text-gray-300' key={linkIndex}>{link}</p>
                        
                        
                        ))}
                      


                     </div>
                    ))}


          </div>
      
      
      </div>

      <div className='flex flex-col items-center justify-center h-2/12 w-full bg-black'>
         <h3 className='font-bold text-lg text-white'>Design & Developed By rujoy | Made In BANGLADESH</h3>
         <p className='font-semibold text-md text-gray-300 mt-2'>Copyright © 2024 Cartlio. All rights reserved.</p>
      </div>
         
    </div>
  )
}
