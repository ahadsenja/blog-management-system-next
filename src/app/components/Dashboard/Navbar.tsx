'use client'
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login')
  }
  return (
    <>
      <nav className='w-full py-6 text-white bg-gray-600 pr-8 fixed top-0 left-0 right-0'>
        <div className='flex justify-end text-md'>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  )
}
