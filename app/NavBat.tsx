import React from 'react'

const NavBat = () => {
  return (
    <div className='bg-[#f6f8fa] p-3 flex justify-between border-b-[1px]'>
      <h1 className='text-2xl font-normal'>Appointment App</h1>
      <input className='rounded-full px-4 w-96 h-8 border-[1px]' placeholder='Search'/>
      <div className='flex gap-2 mr-6'>
         <h2>Not</h2>
         <h2>Name</h2>
      </div>
    </div>
  )
}

export default NavBat