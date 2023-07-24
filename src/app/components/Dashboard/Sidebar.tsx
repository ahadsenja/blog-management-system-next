'use client'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <>
      <aside className='h-screen w-60 px-8 bg-gray-700 py-8 fixed'>
        <div className='text-3xl font-bold mb-12'>Blogi</div>
        <nav className='flex flex-col gap-4 text-white'>
          <ul>
            <li>
              <Link href={'/dashboard'}>Dashboard</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href={'/posts'}>Posts</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href={'/users'}>Users</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
