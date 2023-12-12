import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col p-4 gap-4'>
      <Link href='/'> List</Link>
      <Link href='/'> Book</Link>
      <Link href='/'> Apply Doctor</Link>
      <Link href='/'> Profile</Link>
      <Link href='/'> Logout</Link>

    </div>
  )
}

export default SideBar