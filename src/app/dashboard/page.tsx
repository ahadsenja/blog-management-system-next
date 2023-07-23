'use client'
import Dashboard from './Dashboard'
import { useRouter } from 'next/navigation';

export default function page() {
  return (
    <>
      <div className='flex justify-center items-center h-[30rem]'>
        <Dashboard />
      </div>
    </>
  )
}
