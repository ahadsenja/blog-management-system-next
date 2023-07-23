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
      <nav className='flex justify-end static w-full py-6 text-white bg-gray-600 pr-8'>
        <div className='text-md'>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  )
}
