import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col p-4 gap-4'>
      <Link href='/listAll'> List of Doctor</Link>
      <Link href='/book'> Book Appointment</Link>
      <Link href='/apply'> Apply For Doctor</Link>
      <Link href='/'> Profile</Link>
      <Link href='/'> Logout</Link>

    </div>
  )
}

export default SideBar