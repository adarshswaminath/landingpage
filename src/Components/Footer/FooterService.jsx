import React from 'react'

function FooterService() {
  return (
    <div className='mt-6 w-full py-8 lg:py-16 bg-black/10 backdrop-blur bg-opacity-50 p-4 rounded-lg grid lg:flex items-center justify-between'>
       <div>
       <h1 className="text-6xl font-bold text-white">Let's try our service now!</h1>
        <p className='mt-2 text-white'>Igoraza is committed to help out clients 24x7. Feel free to reach out to us for any queries and help</p>
       </div>
       <div>
        <button className='px-8 py-3 p-4 text-white rounded mt-4 font-bold bg-[#eeb0bf]'>Contact Now</button>
       </div>
    </div>
  )
}

export default FooterService